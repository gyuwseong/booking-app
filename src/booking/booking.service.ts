import { Injectable } from '@nestjs/common';
import { eventSchedules } from '@src/data/events';
import { workhours } from '@src/data/workHours';
import * as moment from 'moment-timezone';
import { DateUtil } from 'src/utils/date.util';
import {
  DayTimetable,
  EventTimeslot,
  RequestBody,
  RequestParams,
  ResponseBody,
  Workhour,
} from './booking.interface';

@Injectable()
export class BookingService {
  async getTimeSlots(requestBody: RequestBody): Promise<ResponseBody> {
    const convertedRequest = this.convertRequestParams(requestBody);
    const start: string = convertedRequest.startDate;
    const days: number = convertedRequest.days;
    const duration: number = convertedRequest.serviceDuration;
    const interval: number = convertedRequest.timeslotInterval;
    const ignoreSchedule: boolean = convertedRequest.ignoreSchedule;
    const ignoreWorkhour: boolean = convertedRequest.ignoreWorkhour;

    moment().tz(convertedRequest.timezone).format();

    let dayModifier: number = 0;
    let startDate: moment.Moment = moment(start);
    const endDate: moment.Moment = moment(start).add(days, 'day');
    const dayTimetable: DayTimetable[] = [];

    while (startDate.isBefore(endDate)) {
      const singleDayTable: DayTimetable = {
        start_of_day: startDate.unix(),
        day_modifier: dayModifier,
        is_day_off: false,
        timeslots: [],
      };
      let currentTime: moment.Moment = startDate;

      while (currentTime.isSame(startDate, 'day')) {
        const startTime: moment.Moment = currentTime.clone();
        const endTime: moment.Moment = startTime
          .clone()
          .add(duration, 'seconds');

        if (ignoreSchedule && ignoreWorkhour) {
          singleDayTable.timeslots.push({
            begin_at: startTime.unix(),
            end_at: endTime.unix(),
          });
        } else if (!ignoreSchedule && ignoreWorkhour) {
          if (!this.isAvailableSchedule(startTime, endTime, eventSchedules)) {
            singleDayTable.timeslots.push({
              begin_at: startTime.unix(),
              end_at: endTime.unix(),
            });
          }
        } else if (ignoreSchedule && !ignoreWorkhour) {
          if (this.isAvailableWorkhour(startTime, endTime, workhours)) {
            singleDayTable.timeslots.push({
              begin_at: startTime.unix(),
              end_at: endTime.unix(),
            });
          }
        } else if (!ignoreSchedule && !ignoreWorkhour) {
          if (
            this.isAvailableWorkhour(startTime, endTime, workhours) &&
            this.isAvailableSchedule(startTime, endTime, eventSchedules)
          ) {
            singleDayTable.timeslots.push({
              begin_at: startTime.unix(),
              end_at: endTime.unix(),
            });
          }
        }

        currentTime = endTime.clone().add(interval, 'seconds');
      }
      dayTimetable.push(singleDayTable);
      dayModifier += 1;
      startDate = startDate.add(1, 'day');
    }
    return dayTimetable;
  }

  private convertRequestParams(requestBody: RequestBody): RequestParams {
    return {
      startDate: requestBody.start_day_identifier,
      timezone: requestBody.timezone_identifier,
      serviceDuration: requestBody.service_duration,
      days: requestBody.days ?? 1,
      timeslotInterval: requestBody.timeslot_interval ?? 3600,
      ignoreSchedule: requestBody.is_ignore_schedule ?? false,
      ignoreWorkhour: requestBody.is_ignore_workhour ?? false,
    };
  }

  private isAvailableSchedule(
    startTime: moment.Moment,
    endTime: moment.Moment,
    schedules: EventTimeslot[],
  ): boolean {
    return schedules.some((slot: EventTimeslot) => {
      const { excludeStart, excludeEnd } = this.getEventTimeslotTimes(slot);
      return this.isWithinDateTimeRange(
        startTime,
        endTime,
        excludeStart,
        excludeEnd,
      );
    });
  }

  private getEventTimeslotTimes(slot: EventTimeslot): {
    excludeStart: moment.Moment;
    excludeEnd: moment.Moment;
  } {
    const excludeStart: moment.Moment = DateUtil.convertTimestampToDate(
      slot.begin_at,
    );
    const excludeEnd: moment.Moment = DateUtil.convertTimestampToDate(
      slot.end_at,
    );
    return { excludeStart, excludeEnd };
  }

  private isAvailableWorkhour(
    startTime: moment.Moment,
    endTime: moment.Moment,
    workhours: Workhour[],
  ): boolean {
    const startTimeWeekday: number = DateUtil.getWeekday(startTime);
    const targetWorkhour: Workhour = workhours.find(
      (workhour: Workhour) => workhour.weekday === startTimeWeekday,
    );

    if (targetWorkhour) {
      const { openTime, closeTime } = this.getWorkhourTimes(targetWorkhour);
      return this.isWithinTimeRange(startTime, endTime, openTime, closeTime);
    }

    return false;
  }

  private getWorkhourTimes(workhour: Workhour): {
    openTime: string;
    closeTime: string;
  } {
    const openTime: string = DateUtil.convertIntervalToTime(
      workhour.open_interval,
    );
    const closeTime: string = DateUtil.convertIntervalToTime(
      workhour.close_interval,
    );
    return { openTime, closeTime };
  }

  private isWithinDateTimeRange(
    startTime: moment.Moment,
    endTime: moment.Moment,
    openTime: moment.Moment,
    closeTime: moment.Moment,
  ): boolean {
    return (
      startTime.isBetween(openTime, closeTime) &&
      endTime.isBetween(openTime, closeTime)
    );
  }

  private isWithinTimeRange(
    startTime: moment.Moment,
    endTime: moment.Moment,
    openTime: string,
    closeTime: string,
  ): boolean {
    return (
      DateUtil.checkIsTimeBetween(openTime, closeTime, startTime) &&
      DateUtil.checkIsTimeBetween(openTime, closeTime, endTime)
    );
  }
}
