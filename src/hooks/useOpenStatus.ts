import { useEffect, useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { formatClock, getLiveHours, type LiveHours, type OpenStatus } from '../utils/openingHours';

export interface LiveStatus extends LiveHours {
  clock: string;
  label: string;
}

export function getStatusLabel(status: OpenStatus): string {
  const { ui } = siteConfig;
  if (status === 'open') return ui.openLabel;
  if (status === 'closing-soon') return ui.closingSoonLabel;
  if (status === 'opening-soon') return ui.openingSoonLabel;
  return ui.closedLabel;
}

/** "hari ini" / "besok" / weekday name */
export function getDayWord(inDays: number, dayLabel: string): string {
  if (inDays === 0) return siteConfig.ui.todayWord;
  if (inDays === 1) return siteConfig.ui.tomorrowWord;
  return dayLabel;
}

/** Live Buka / Segera Tutup / Segera Buka / Tutup status, calculated per day in WIB. */
export function useOpenStatus(tickMs = 30_000): LiveStatus {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), tickMs);
    return () => window.clearInterval(t);
  }, [tickMs]);

  const { timeZone, closingSoonMinutes, openingSoonMinutes, schedule } = siteConfig.hours;
  const live = getLiveHours(now, { timeZone, closingSoonMinutes, openingSoonMinutes, schedule });
  return { ...live, clock: formatClock(now, timeZone), label: getStatusLabel(live.status) };
}