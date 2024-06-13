export interface RequestBody {
  start_day_identifier: string;
  timezone_identifier: string;
  service_duration: number;
  days?: number;
  timeslot_interval?: number;
  is_ignore_schedule?: boolean;
  is_ignore_workhour?: boolean;
}

export interface RequestParams {
  startDate: string;
  timezone: string;
  serviceDuration: number;
  days: number;
  timeslotInterval: number;
  ignoreSchedule: boolean;
  ignoreWorkhour: boolean;
}

export type ResponseBody = DayTimetable[];

export interface DayTimetable {
  start_of_day: number; // Unixstamp seconds
  day_modifier: number;
  is_day_off: boolean;
  timeslots: Timeslot[];
}

export interface Timeslot {
  begin_at: number; // Unixstamp seconds
  end_at: number; // Unixstamp seconds
}

export interface EventTimeslot {
  begin_at: number; // Unixstamp seconds
  end_at: number; // Unixstamp seconds
  created_at: number;
  updated_at: number;
}

export interface Workhour {
  is_day_off: boolean;
  open_interval: number;
  close_interval: number;
  weekday: number;
}

export enum Weekday {
  'Sun' = 1,
  'Mon' = 2,
  'Tue' = 3,
  'Wen' = 4,
  'Thi' = 5,
  'Fri' = 6,
  'Sat' = 7,
}
