import { format, register } from 'timeago.js';
import koLacale from 'timeago.js/lib/lang/ko';
register('ko', koLacale);

export function formatAgo(date, lang = 'en-US') {
  return format(date, lang);
}
