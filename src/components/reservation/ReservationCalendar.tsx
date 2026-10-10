import React from 'react';
import { CalendarCheckIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { reservationConfig } from '../../data/reservationConfig';
import { useReservationCalendar } from '../../hooks/useReservationCalendar';
import {
  DAY_INITIALS,
  DAY_NAMES,
  dateKey,
  formatDate,
  formatMonth,
  sameDay,
  type ZonedToday } from
'../../utils/reservation';

interface ReservationCalendarProps {
  today: ZonedToday;
  value: Date | null;
  isSelectable: (d: Date) => boolean;
  onSelect: (d: Date) => void;
}

const t = reservationConfig.copy;

export function ReservationCalendar({ today, value, isSelectable, onSelect }: ReservationCalendarProps) {
  const cal = useReservationCalendar({ today, value, isSelectable, onSelect });
  const titleId = 'reservation-calendar-title';

  const navButton =
  'inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors duration-150 hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest disabled:cursor-not-allowed disabled:text-ink-faint/50 disabled:hover:bg-transparent';

  return (
    <div>
      <p className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink">{t.dateLabel}</p>

      <div className="mt-2 rounded-xl border border-line p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <p id={titleId} className="text-sm font-bold text-ink" aria-live="polite">
            {formatMonth(cal.view.year, cal.view.month)}
          </p>
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => cal.goMonth(-1)} disabled={!cal.canPrev} aria-label={t.prevMonth} className={navButton}>
              <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => cal.goMonth(1)} disabled={!cal.canNext} aria-label={t.nextMonth} className={navButton}>
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div role="grid" aria-labelledby={titleId} className="mt-3">
          <div role="row" className="grid grid-cols-7">
            {DAY_INITIALS.map((initial, i) =>
            <span
              key={DAY_NAMES[i]}
              role="columnheader"
              aria-label={DAY_NAMES[i]}
              title={DAY_NAMES[i]}
              className="flex h-8 items-center justify-center text-[11px] font-semibold text-ink-faint">
              
                {initial}
              </span>
            )}
          </div>

          {Array.from({ length: 6 }, (_, row) =>
          <div key={row} role="row" className="grid grid-cols-7">
              {cal.cells.slice(row * 7, row * 7 + 7).map((d) => {
              if (!cal.isInView(d)) {
                return (
                  <span key={dateKey(d)} role="gridcell" aria-hidden="true" className="flex h-11 items-center justify-center text-sm text-ink-faint/40">
                      {d.getDate()}
                    </span>);

              }
              const selectable = isSelectable(d);
              const selected = sameDay(d, value);
              const isToday = sameDay(d, today.date);
              return (
                <div key={dateKey(d)} role="gridcell" aria-selected={selected} className="flex h-11 items-center justify-center">
                    <button
                    ref={cal.registerCell(d)}
                    type="button"
                    tabIndex={cal.isTabTarget(d) ? 0 : -1}
                    aria-disabled={!selectable}
                    aria-pressed={selected}
                    aria-current={isToday ? 'date' : undefined}
                    aria-label={`${formatDate(d, true)}${isToday ? ` ${t.todaySuffix}` : ''}`}
                    onClick={() => cal.select(d)}
                    onKeyDown={(e) => cal.onKeyDown(e, d)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 ${
                    selected ?
                    'bg-forest font-semibold text-white' :
                    !selectable ?
                    `cursor-not-allowed text-ink-faint/60 ${isToday ? 'border border-line' : ''}` :
                    isToday ?
                    'border-2 border-forest font-bold text-forest hover:bg-mint' :
                    'text-ink hover:bg-mint'}`
                    }>
                    
                      {d.getDate()}
                    </button>
                  </div>);

            })}
            </div>
          )}
        </div>
      </div>

      <p aria-live="polite" className={`mt-3 flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${value ? 'bg-mint text-forest' : 'bg-paper text-ink-muted'}`}>
        <CalendarCheckIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
        {value ?
        <span>
            <span className="sr-only">{t.selectedDateLabel} </span>
            <span className="font-semibold">{formatDate(value, true)}</span>
          </span> :

        t.noDateSelected
        }
      </p>
    </div>);

}