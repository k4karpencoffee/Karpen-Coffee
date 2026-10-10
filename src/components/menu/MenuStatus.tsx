import React from 'react';
import { menuContent } from '../../data/menuContent';
import { getDayWord, type LiveStatus } from '../../hooks/useOpenStatus';
import { fillTemplate } from '../../utils/whatsapp';

/** Plain centered status line under the Menu title (no pill). Red "Tutup / Closed" prefix while closed. */
export function MenuStatus({ live }: {live: LiveStatus;}) {
  const t = menuContent.status;
  const isOpen = live.status === 'open' || live.status === 'closing-soon';

  const note =
  live.status === 'open' ?
  fillTemplate(t.openNote, { range: live.todayRange }) :
  live.status === 'closing-soon' ?
  fillTemplate(t.closingSoonNote, { minutes: String(live.minutesToClose), time: live.closeTime ?? '' }) :
  live.nextOpen ?
  fillTemplate(live.status === 'opening-soon' ? t.openingSoonNote : t.closedNote, {
    minutes: String(live.minutesToOpen),
    time: live.nextOpen.time,
    day: getDayWord(live.nextOpen.inDays, live.nextOpen.dayLabel)
  }) :
  '';

  if (!note) return null;

  return (
    <p
      role="status"
      aria-live="polite"
      className={`mx-auto mt-6 max-w-xl text-center text-sm font-medium ${
      live.status === 'closing-soon' ? 'text-amber-700' : isOpen ? 'text-forest' : 'text-rose-700'}`
      }>
      
      {!isOpen && <span className="font-extrabold uppercase">{t.closedBadge} — </span>}
      {note}
    </p>);

}