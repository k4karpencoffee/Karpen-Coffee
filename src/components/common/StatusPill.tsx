import React from 'react';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '../../data/siteConfig';
import { useOpenStatus } from '../../hooks/useOpenStatus';
import type { OpenStatus } from '../../utils/openingHours';

export const statusDot: Record<OpenStatus, string> = {
  open: 'bg-emerald-500',
  'closing-soon': 'bg-amber-500',
  'opening-soon': 'bg-sky-500',
  closed: 'bg-rose-500'
};

export function StatusPill({ className }: {className?: string;}) {
  const { status, label, closeTime, nextOpen } = useOpenStatus();
  const { ui, hours } = siteConfig;
  const detail =
  status === 'open' || status === 'closing-soon' ?
  `${ui.untilWord} ${closeTime}` :
  nextOpen ?
  `${ui.opensAtWord} ${nextOpen.time}` :
  '';

  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-mint-line bg-mint px-3 py-1.5 text-[11px] font-medium text-forest',
        className
      )}
      aria-live="polite">
      
      <span className={`h-1.5 w-1.5 rounded-full ${statusDot[status]}`} aria-hidden="true" />
      <span className="font-bold uppercase tracking-wider">{label}</span>
      {detail &&
      <span className="text-forest/80">
          · {detail} {hours.timeZoneLabel}
        </span>
      }
    </span>);

}