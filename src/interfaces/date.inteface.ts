export interface DateObject {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: false;
  dst_from: null;
  dst_offset: number;
  dst_until: null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

export type TaskObjectType = {
  text: string,
  sign: string,
  tz: string,
  date: DateObject,
  index: number
}

export default interface TaskObject {
  text: string,
  sign: string,
  tz: string,
  date: DateObject,
  index: number
}


