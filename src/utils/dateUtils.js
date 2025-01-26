import dayjs from 'dayjs';
import 'dayjs/locale/id';

dayjs.locale('id');

export function formatDateToIndonesian(date) {
  return dayjs(date).format('dddd, DD MMMM YYYY');
}
