import type { DaySchedule } from '../types/content';
import { tr } from '../i18n/lang';

export type OpenStatus = 'open' | 'closing-soon' | 'opening-soon' | 'closed';

export interface HoursConfig {
  timeZone: string;
  closingSoonMinutes: number;
  openingSoonMinutes: number;
  schedule: DaySchedule[];
}

export interface NextOpen {
  dayLabel: string;
  time: string;
  /** 0 = today, 1 = tomorrow, … */
  inDays: number;
}

export interface LiveHours {
  status: OpenStatus;
  /** Today's schedule entry (in the configured time zone). */
  today: DaySchedule | undefined;
  todayRange: string;
  minutesToClose: number;
  closeTime: string | null;
  minutesToOpen: number;
  nextOpen: NextOpen | null;
}

const WEEKDAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + (m || 0);
}

/** Close time in minutes from the day's start; past-midnight closes become > 1440. */
function closeMinutes(d: DaySchedule): number {
  const o = toMinutes(d.open);
  const c = toMinutes(d.close);
  return c <= o ? c + 1440 : c;
}

function zonedNow(date: Date, timeZone: string): { day: number; minutes: number; } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '0';
  return { day: WEEKDAYS[get('weekday')] ?? 0, minutes: Number(get('hour')) % 24 * 60 + Number(get('minute')) };
}

const findDay = (schedule: DaySchedule[], day: number) => schedule.find((s) => s.day === day);

/** "10:00" → "10.00", "24:00" → "00.00" */
export function formatTime(time: string): string {
  const [h, m = '00'] = time.split(':');
  return `${String(Number(h) % 24).padStart(2, '0')}.${m}`;
}

export function formatRange(d: DaySchedule | undefined): string {
  if (!d || d.closed) return tr('Tutup', 'Closed');
  return `${formatTime(d.open)} – ${formatTime(d.close)}`;
}

/** Live status for the given moment, evaluated in the configured time zone (WIB). */
export function getLiveHours(date: Date, cfg: HoursConfig): LiveHours {
  const { day, minutes } = zonedNow(date, cfg.timeZone);
  const today = findDay(cfg.schedule, day);
  const base = { today, todayRange: formatRange(today), minutesToClose: 0, closeTime: null, minutesToOpen: 0, nextOpen: null };

  const openResult = (toClose: number, close: string): LiveHours => ({
    ...base,
    status: toClose <= cfg.closingSoonMinutes ? 'closing-soon' : 'open',
    minutesToClose: toClose,
    closeTime: formatTime(close)
  });

  // Still open from yesterday's past-midnight shift?
  const prev = findDay(cfg.schedule, (day + 6) % 7);
  if (prev && !prev.closed) {
    const spill = closeMinutes(prev) - 1440;
    if (spill > 0 && minutes < spill) return openResult(spill - minutes, prev.close);
  }

  if (today && !today.closed) {
    const o = toMinutes(today.open);
    const c = closeMinutes(today);
    if (minutes >= o && minutes < c) return openResult(c - minutes, today.close);
  }

  // Closed → find the next opening within the coming week.
  for (let i = 0; i < 8; i++) {
    const d = findDay(cfg.schedule, (day + i) % 7);
    if (!d || d.closed) continue;
    const o = toMinutes(d.open);
    if (i === 0 && minutes >= o) continue;
    const minutesToOpen = i * 1440 + o - minutes;
    return {
      ...base,
      status: minutesToOpen <= cfg.openingSoonMinutes ? 'opening-soon' : 'closed',
      minutesToOpen,
      nextOpen: { dayLabel: d.label, time: formatTime(d.open), inDays: i }
    };
  }
  return { ...base, status: 'closed' };
}

/** Groups consecutive days with identical hours, e.g. "Selasa – Sabtu". Expects display order (Senin → Minggu). */
export function groupSchedule(schedule: DaySchedule[]): { label: string; range: string; days: number[]; }[] {
  const groups: { label: string; range: string; days: number[]; first: string; last: string; }[] = [];
  schedule.forEach((d) => {
    const range = formatRange(d);
    const last = groups[groups.length - 1];
    if (last && last.range === range) {
      last.last = d.label;
      last.days.push(d.day);
    } else {
      groups.push({ label: d.label, range, days: [d.day], first: d.label, last: d.label });
    }
  });
  return groups.map((g) => ({ label: g.first === g.last ? g.first : `${g.first} – ${g.last}`, range: g.range, days: g.days }));
}

/** Calendar day in the given time zone: weekday (0 = Minggu) + ISO date "YYYY-MM-DD". */
export function getZonedDate(date: Date, timeZone: string): { day: number; iso: string; } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  return { day: WEEKDAYS[get('weekday')] ?? 0, iso: `${get('year')}-${get('month')}-${get('day')}` };
}

export function formatClock(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat('id-ID', { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(date);
}