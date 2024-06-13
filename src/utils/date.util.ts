import * as moment from 'moment';
import { Weekday } from 'src/booking/booking.interface';

export class DateUtil {
  static convertTimestampToDate(date: number): moment.Moment {
    return moment(date * 1000);
  }

  static convertIntervalToTime(interval: number): string {
    return moment.utc(interval * 1000).format('HH:mm');
  }

  static checkIsTimeBetween(
    startTime: string,
    endTime: string,
    targetTime: moment.Moment,
  ): boolean {
    const target: string = moment(targetTime, 'HH:mm').format('HH:mm');
    return target >= startTime && target < endTime;
  }

  static getWeekday(time: moment.Moment): number {
    const weekday: number = time.isoWeekday();
    if (weekday === 7) {
      return Weekday.Sun;
    } else {
      return (weekday + 1) as Weekday;
    }
  }
}
