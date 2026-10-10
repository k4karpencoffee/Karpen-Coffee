import { useEffect, useMemo, useRef, useState } from 'react';
import { reservationConfig } from '../data/reservationConfig';
import { useNow } from './useNow';
import {
  availableSlots,
  buildReservationLink,
  buildSlots,
  isSelectableDate,
  todayInZone,
  validateName
} from
  '../utils/reservation';

export type ReservationStatus = 'idle' | 'loading' | 'sent';

export function useReservationForm() {
  const cfg = reservationConfig;
  const now = useNow(30_000);
  const today = todayInZone(now, cfg.timeZone);

  const allSlots = useMemo(
    () => buildSlots(cfg.firstSlot, cfg.lastSlot, cfg.slotIntervalMinutes),
    [cfg.firstSlot, cfg.lastSlot, cfg.slotIntervalMinutes]
  );

  // Nothing is pre-filled: the user picks date, time and guests consciously.
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState<ReservationStatus>('idle');
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Recomputed every tick, so a date/slot that passes while the page is open becomes invalid automatically.
  const isSelectable = (d: Date) => isSelectableDate(d, today, allSlots);
  const validDate = date && isSelectable(date) ? date : null;
  const slots = validDate ? availableSlots(allSlots, validDate, today) : [];
  const validTime = slots.includes(time) ? time : '';
  const nameValidation = validateName(name);
  // Only show the name error after the user has left the field (or tried to submit).
  const nameError = nameTouched ? nameValidation : '';
  // Permintaan Khusus is optional: no validation, an empty value becomes "-" in the WhatsApp message.
  const noteError = '';
  // Name, date, time and guests are required before the WhatsApp button is enabled.
  const complete = Boolean(!nameValidation && validDate && validTime && guests);

  const touch = () => setStatus((s) => s === 'sent' ? 'idle' : s);

  const selectDate = (d: Date) => {
    if (!isSelectable(d)) return;
    setDate(d);
    // Reset the time if it isn't available on the new date (e.g. a past slot on today).
    if (!availableSlots(allSlots, d, today).includes(time)) setTime('');
    touch();
  };

  const update = (setter: (v: string) => void) => (value: string) => {
    setter(value);
    touch();
  };

  const submit = () => {
    setNameTouched(true);
    if (!complete || !validDate || status === 'loading') return;
    const url = buildReservationLink({ name, date: validDate, time: validTime, guests, note });
    // Open the tab synchronously (inside the click) so pop-up blockers allow it, then point it to WhatsApp.
    const win = window.open('about:blank', '_blank');
    setStatus('loading');
    timer.current = window.setTimeout(() => {
      if (win && !win.closed) {
        win.opener = null;
        win.location.href = url;
      } else {
        window.open(url, '_blank', 'noopener');
      }
      setStatus('sent');
    }, cfg.processingMs);
  };

  return {
    today,
    isSelectable,
    name,
    nameError,
    setName: update(setName),
    touchName: () => setNameTouched(true),
    date: validDate,
    slots,
    time: validTime,
    guests,
    note,
    status,
    complete,
    selectDate,
    setTime: update(setTime),
    setGuests: update(setGuests),
    setNote: update(setNote),
    noteError,
    touchNote: () => { },
    submit
  };
}