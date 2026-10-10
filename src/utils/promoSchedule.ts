import type { Promo } from '../types/content';
import { getZonedDate } from './openingHours';

/** True when the promo is valid on the given moment's calendar day (in the store's time zone). */
export function isPromoActiveOn(promo: Promo, date: Date, timeZone: string): boolean {
  const { day, iso } = getZonedDate(date, timeZone);
  if (promo.activeDays && !promo.activeDays.includes(day)) return false;
  if (promo.startDate && iso < promo.startDate) return false;
  if (promo.endDate && iso > promo.endDate) return false;
  return true;
}