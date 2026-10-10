import { useEffect, useRef, useState } from 'react';
import type React from 'react';
import { addDays, dateKey, lastBookableDate, makeDate, monthGrid, sameDay, type ZonedToday } from '../utils/reservation';

interface Options {
  today: ZonedToday;
  value: Date | null;
  isSelectable: (d: Date) => boolean;
  onSelect: (d: Date) => void;
}

/** View month, prev/next limits and roving-tabindex keyboard navigation for the reservation calendar. */
export function useReservationCalendar({ today, value, isSelectable, onSelect }: Options) {
  const [view, setView] = useState(() => ({ year: today.date.getFullYear(), month: today.date.getMonth() }));
  const [focused, setFocused] = useState<Date>(() => value ?? today.date);
  const cellRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const moveFocus = useRef(false);

  const cells = monthGrid(view.year, view.month);
  const maxDate = lastBookableDate(today);
  const canPrev =
  view.year > today.date.getFullYear() ||
  view.year === today.date.getFullYear() && view.month > today.date.getMonth();
  const canNext = makeDate(view.year, view.month + 1, 1) <= maxDate;

  // Keep the focusable cell inside the visible month.
  const inView = (d: Date) => d.getFullYear() === view.year && d.getMonth() === view.month;
  const tabTarget = inView(focused) ?
  focused :
  value && inView(value) ?
  value :
  inView(today.date) ?
  today.date :
  makeDate(view.year, view.month, 1);

  useEffect(() => {
    if (!moveFocus.current) return;
    moveFocus.current = false;
    cellRefs.current[dateKey(focused)]?.focus();
  }, [focused, view]);

  const goMonth = (delta: number) => {
    if (delta < 0 && !canPrev || delta > 0 && !canNext) return;
    const next = makeDate(view.year, view.month + delta, 1); // Date handles Dec → Jan year changes
    setView({ year: next.getFullYear(), month: next.getMonth() });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, d: Date) => {
    const steps: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
    let target: Date | null = null;
    if (e.key in steps) target = addDays(d, steps[e.key]);else
    if (e.key === 'Home') target = addDays(d, -d.getDay());else
    if (e.key === 'End') target = addDays(d, 6 - d.getDay());
    if (!target) return;
    e.preventDefault();
    // Stay within the bookable months.
    const firstOfToday = makeDate(today.date.getFullYear(), today.date.getMonth(), 1);
    if (target < firstOfToday || target > makeDate(maxDate.getFullYear(), maxDate.getMonth() + 1, 0)) return;
    moveFocus.current = true;
    setFocused(target);
    if (!inView(target)) setView({ year: target.getFullYear(), month: target.getMonth() });
  };

  const select = (d: Date) => {
    if (!isSelectable(d)) return;
    setFocused(d);
    onSelect(d);
  };

  return {
    view,
    cells,
    canPrev,
    canNext,
    goMonth,
    onKeyDown,
    select,
    isInView: inView,
    isTabTarget: (d: Date) => sameDay(d, tabTarget),
    registerCell: (d: Date) => (el: HTMLButtonElement | null) => {
      cellRefs.current[dateKey(d)] = el;
    }
  };
}