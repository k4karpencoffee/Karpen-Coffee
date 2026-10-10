import React from 'react';
import { ClockIcon, CopyIcon, MapPinIcon, NavigationIcon, PhoneIcon, ShoppingBagIcon } from 'lucide-react';
import { toast } from 'sonner';
import { outletContent } from '../../data/outletContent';
import { siteConfig } from '../../data/siteConfig';
import { getDayWord, getStatusLabel, useOpenStatus } from '../../hooks/useOpenStatus';
import { fillTemplate } from '../../utils/whatsapp';
import { WeeklyHours } from '../common/WeeklyHours';

const tones = {
  open: { box: 'border-emerald-200 bg-mint', dot: 'bg-emerald-500', label: 'text-forest', note: 'text-emerald-700' },
  'closing-soon': { box: 'border-amber-200 bg-amber-50', dot: 'bg-amber-500', label: 'text-amber-800', note: 'font-semibold text-amber-700' },
  'opening-soon': { box: 'border-sky-200 bg-sky-50', dot: 'bg-sky-500', label: 'text-sky-800', note: 'font-semibold text-sky-700' },
  closed: { box: 'border-rose-200 bg-rose-50', dot: 'bg-rose-500', label: 'text-rose-700', note: 'text-rose-600' }
};
const inactiveBox = 'border-line bg-paper opacity-50';

export function OutletStatusCard() {
  const live = useOpenStatus(1000);
  const { status, today, todayRange, closeTime, minutesToClose, minutesToOpen, nextOpen, clock } = live;
  const s = outletContent.statusCard;
  const { address, contact, hours, social } = siteConfig;
  const isOpen = status === 'open' || status === 'closing-soon';
  const tone = tones[status];

  const openNote =
  status === 'closing-soon' ?
  fillTemplate(s.closingSoonNote, { minutes: String(minutesToClose), time: closeTime ?? '' }) :
  fillTemplate(s.openNote, { time: closeTime ?? '' });
  const closedNote = nextOpen ?
  status === 'opening-soon' ?
  fillTemplate(s.openingSoonNote, { minutes: String(minutesToOpen), time: nextOpen.time }) :
  fillTemplate(s.closedNote, { day: getDayWord(nextOpen.inDays, nextOpen.dayLabel), time: nextOpen.time }) :
  '';

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address.full);
      toast.success(siteConfig.ui.copiedAddress);
    } catch {
      toast.error(address.full);
    }
  };

  return (
    <aside className="rounded-2xl border border-line bg-white p-6 md:p-7" aria-label={s.title}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">{s.title}</h3>
        <p className="inline-flex items-center gap-1.5 rounded-full bg-paper px-2.5 py-1 text-[11px] text-ink-muted">
          <ClockIcon className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">{s.liveClockLabel}:</span>
          <span className="font-semibold tabular-nums text-ink">{clock}</span> {hours.timeZoneLabel}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3" aria-live="polite">
        {/* Open side: Buka / Segera Tutup */}
        <div className={`rounded-xl border p-4 transition-[opacity,background-color,border-color] duration-200 ${isOpen ? tone.box : inactiveBox}`} aria-current={isOpen ? 'true' : undefined}>
          <p className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${isOpen ? tone.label : 'text-forest'}`}>
            <span className={`h-2 w-2 rounded-full ${isOpen ? tone.dot : 'bg-emerald-500'}`} aria-hidden="true" />
            {isOpen ? live.label : getStatusLabel('open')}
          </p>
          <p className={`mt-2 text-base font-bold tabular-nums ${isOpen ? tone.label : 'text-forest'}`}>{todayRange}</p>
          <p className={`mt-1 text-[11px] ${isOpen ? tone.note : 'text-emerald-700'}`}>
            {isOpen ? openNote : fillTemplate(s.todayLabel, { day: today?.label ?? '' })}
          </p>
        </div>

        {/* Closed side: Tutup / Segera Buka */}
        <div className={`rounded-xl border p-4 transition-[opacity,background-color,border-color] duration-200 ${!isOpen ? tone.box : inactiveBox}`} aria-current={!isOpen ? 'true' : undefined}>
          <p className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${!isOpen ? tone.label : 'text-rose-700'}`}>
            <span className={`h-2 w-2 rounded-full ${!isOpen ? tone.dot : 'bg-rose-500'}`} aria-hidden="true" />
            {!isOpen ? live.label : getStatusLabel('closed')}
          </p>
          <p className={`mt-2 text-xs font-semibold ${!isOpen ? 'text-ink' : 'text-ink-muted'}`}>{!isOpen ? closedNote : fillTemplate(s.todayLabel, { day: today?.label ?? '' })}</p>
        </div>
      </div>

      <p className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-mint-line bg-mint px-4 py-3 text-xs">
        <span className="inline-flex items-center gap-2 text-ink-muted">
          <ShoppingBagIcon className="h-4 w-4 text-forest" aria-hidden="true" />
          {s.takeawayLabel}
        </span>
        <span className="text-right font-semibold text-ink">{hours.takeawayNote}</span>
      </p>

      <ul className="mt-6 space-y-5 border-t border-line pt-6">
        <li className="flex gap-4">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-mint-line bg-mint text-forest">
            <MapPinIcon className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{s.addressLabel}</p>
            <p className="mt-1 text-sm text-ink">{address.full}</p>
            <button type="button" onClick={copyAddress} className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-forest hover:underline">
              <CopyIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {s.copyAddressLabel}
            </button>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-mint-line bg-mint text-forest">
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{s.phoneLabel}</p>
            <a href={contact.phoneHref} className="mt-1 block text-sm text-ink hover:text-forest">
              {contact.phoneDisplay}
            </a>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-mint-line bg-mint text-forest">
            <ClockIcon className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              {s.hoursLabel} ({hours.timeZoneLabel})
            </p>
            <div className="mt-2">
              <WeeklyHours />
            </div>
            <p className="mt-2 text-xs text-ink-faint">{hours.lastOrderNote}</p>
          </div>
        </li>
      </ul>

      <a
        href={social.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-forest px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-150 hover:bg-forest-dark">
        
        <NavigationIcon className="h-4 w-4" aria-hidden="true" />
        {s.directionsLabel}
      </a>
    </aside>);

}