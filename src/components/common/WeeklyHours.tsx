import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { useOpenStatus } from '../../hooks/useOpenStatus';
import { groupSchedule } from '../../utils/openingHours';

interface WeeklyHoursProps {
  tone?: 'light' | 'dark';
}

/** Full weekly schedule, grouped (e.g. "Selasa – Sabtu"), with today's row highlighted. */
export function WeeklyHours({ tone = 'light' }: WeeklyHoursProps) {
  const { today } = useOpenStatus();
  const groups = groupSchedule(siteConfig.hours.schedule);
  const dark = tone === 'dark';

  return (
    <dl className="space-y-1.5 text-sm">
      {groups.map((g) => {
        const isToday = today ? g.days.includes(today.day) : false;
        return (
          <div key={g.label} className="flex items-baseline justify-between gap-4">
            <dt className={isToday ? dark ? 'font-semibold text-white' : 'font-semibold text-forest' : dark ? 'text-white/75' : 'text-ink-muted'}>
              {g.label}
              {isToday &&
              <span className={`ml-2 rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${dark ? 'bg-white/15 text-white' : 'bg-mint text-forest'}`}>
                  {siteConfig.ui.todayWord}
                </span>
              }
            </dt>
            <dd className={`whitespace-nowrap tabular-nums ${isToday ? dark ? 'font-semibold text-white' : 'font-semibold text-ink' : dark ? 'text-white/75' : 'text-ink'}`}>
              {g.range}
            </dd>
          </div>);

      })}
    </dl>);

}