import { formatDate } from 'date-fns';
import { enGB } from 'date-fns/locale';

export enum FormatDateTime {
  DATE_TIME = 'Pp',
  TIME_LONG = 'p',
  BACKEND_DATETIME = 'yyyy-MM-dd',
}

export const formatDateTime = (date: Date | number, format: FormatDateTime = FormatDateTime.DATE_TIME) =>
  formatDate(date, format, {
    locale: enGB,
  });

export const useFormatDatetime = () => {
  return formatDateTime;
};


export const formatDateTimeForBackend = (date: Date | number) => new Date(date).toISOString();
