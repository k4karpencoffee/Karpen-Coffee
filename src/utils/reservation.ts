import { reservationConfig } from '../data/reservationConfig';
import { fillTemplate } from './whatsapp';

/**
 * Calendar & reservation helpers.
 * All dates are local-midnight Date objects created with new Date(year, month, day) — never ISO strings —
 * so nothing shifts by a day. Month lengths, leap years and year changes come from Date itself.
 */

// Nama hari & bulan bahasa Indonesia (indeks hari = Date.getDay(), 0 = Minggu).
export const DAY_NAMES = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
export const DAY_INITIALS = ['M', 'S', 'S', 'R', 'K', 'J', 'S'];
export const MONTH_NAMES = [
'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];


export interface ZonedToday {
  /** Today's date (local midnight) according to the configured time zone. */
  date: Date;
  /** Minutes since midnight in the configured time zone. */
  minutes: number;
}

/** "Today" + current time in Asia/Jakarta, regardless of the device's own time zone. */
export function todayInZone(now: Date, timeZone: string): ZonedToday {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23'
  }).formatToParts(now);
  const get = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  return {
    date: new Date(get('year'), get('month') - 1, get('day')),
    minutes: get('hour') % 24 * 60 + get('minute')
  };
}

export const makeDate = (year: number, month: number, day: number) => new Date(year, month, day);
export const addDays = (d: Date, days: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + days);
export const sameDay = (a: Date | null, b: Date | null) =>
!!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
export const dateKey = (d: Date) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

/** Whole days from a to b (DST-safe). */
export function daysBetween(a: Date, b: Date): number {
  const ua = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const ub = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((ub - ua) / 86_400_000);
}

/** "9 Oktober 2026", or "Jumat, 9 Oktober 2026" with `withDay` (day name computed from the Date). */
export function formatDate(d: Date, withDay = false): string {
  const text = `${d.getDate()} ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`;
  return withDay ? `${DAY_NAMES[d.getDay()]}, ${text}` : text;
}

export const formatMonth = (year: number, month: number) => `${MONTH_NAMES[month]} ${year}`;

/** Always 42 cells (6 rows × 7), starting on Minggu. Includes trailing/leading days of adjacent months. */
export function monthGrid(year: number, month: number): Date[] {
  const firstWeekday = new Date(year, month, 1).getDay();
  return Array.from({ length: 42 }, (_, i) => new Date(year, month, 1 - firstWeekday + i));
}

/* ---------- Time slots ---------- */

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};
const toHhmm = (minutes: number) =>
`${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

export function buildSlots(first: string, last: string, interval: number): string[] {
  const slots: string[] = [];
  for (let m = toMinutes(first); m <= toMinutes(last); m += interval) slots.push(toHhmm(m));
  return slots;
}

/** For today, only slots later than the current Jakarta time. */
export function availableSlots(slots: string[], date: Date, today: ZonedToday): string[] {
  return sameDay(date, today.date) ? slots.filter((s) => toMinutes(s) > today.minutes) : slots;
}

/* ---------- Selectable dates ---------- */

const closedDateKeys = new Set(
  reservationConfig.closedDates.map((s) => {
    const [y, m, d] = s.split('-').map(Number);
    return dateKey(makeDate(y, m - 1, d));
  })
);
const closedWeekdays = new Set(
  reservationConfig.closedWeekdays.map((name) => DAY_NAMES.findIndex((n) => n.toLowerCase() === name.toLowerCase()))
);

export const lastBookableDate = (today: ZonedToday) => addDays(today.date, reservationConfig.maxBookingDays);

export function isSelectableDate(d: Date, today: ZonedToday, slots: string[]): boolean {
  const offset = daysBetween(today.date, d);
  if (offset < 0 || offset > reservationConfig.maxBookingDays) return false;
  if (closedWeekdays.has(d.getDay()) || closedDateKeys.has(dateKey(d))) return false;
  return availableSlots(slots, d, today).length > 0;
}

/* ---------- WhatsApp ---------- */

/** Trim + collapse inner whitespace (also turns line breaks into single spaces). */
export const normalizeText = (value: string) => value.replace(/\s+/g, ' ').trim();

/** Remove WhatsApp formatting characters (* bold, _ italic) and line breaks from user input. */
export const sanitizeForWhatsApp = (value: string) => normalizeText(value.replace(/[*_]/g, ''));

/** Returns an error message, or '' when the name is valid. */
export function validateName(value: string): string {
  const cfg = reservationConfig;
  const name = normalizeText(value);
  if (!name) return cfg.copy.nameRequired;
  if (name.length < cfg.nameMinLength) return cfg.copy.nameTooShort;
  if (name.length > cfg.nameMaxLength) return cfg.copy.nameTooLong;
  return '';
}

export interface ReservationDetails {
  name: string;
  date: Date;
  time: string;
  guests: string;
  note: string;
}

/** Plain-text WhatsApp message built from the template in data/reservationConfig.ts. */
export function buildReservationMessage({ name, date, time, guests, note }: ReservationDetails): string {
  const cfg = reservationConfig;
  return fillTemplate(cfg.messageTemplate, {
    name: sanitizeForWhatsApp(name),
    date: formatDate(date, true),
    time,
    guests,
    note: sanitizeForWhatsApp(note) || cfg.emptyNote
  });
}

export function buildReservationLink(details: ReservationDetails): string {
  const number = reservationConfig.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(buildReservationMessage(details))}`;
}