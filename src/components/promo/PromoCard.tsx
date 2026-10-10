import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircle2Icon, ClockIcon, Maximize2Icon, MousePointerClickIcon, ShieldCheckIcon } from 'lucide-react';
import { promoPageContent } from '../../data/promos';
import type { Promo } from '../../types/content';
import { formatPrice } from '../../utils/currency';
import { buildPromoMessage, waLink } from '../../utils/whatsapp';
import { ImageSlot } from '../common/ImageSlot';
import { Modal } from '../common/Modal';

export function PromoCard({ promo }: {promo: Promo;}) {
  const [zoom, setZoom] = useState(false);
  const [terms, setTerms] = useState(false);
  const c = promoPageContent;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white">
      <div className="relative cursor-zoom-in" onDoubleClick={() => setZoom(true)}>
        <ImageSlot src={promo.poster} alt={promo.title} label="[PROMO POSTER]" position="top" className="aspect-[3/4] w-full" />
        <span className="absolute left-3 top-3 inline-flex max-w-[60%] items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium text-ink">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="truncate">{promo.schedule}</span>
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-promo px-3 py-1 text-[11px] font-bold uppercase text-white">{promo.badge}</span>
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-xl bg-black/60 px-3 py-2 text-[11px] text-white backdrop-blur-sm">
          <span className="inline-flex items-center gap-1.5">
            <MousePointerClickIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {c.posterHint}
          </span>
          <button
            type="button"
            onClick={() => setZoom(true)}
            className="inline-flex items-center gap-1 rounded-md bg-white/15 px-2 py-1 font-medium transition-colors duration-150 hover:bg-white/25">
            
            <Maximize2Icon className="h-3 w-3" aria-hidden="true" />
            {c.zoomLabel}
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap items-center gap-2 text-[11px]">
          <span className="font-bold uppercase tracking-wider text-promo">{promo.category}</span>
          <span className="h-1 w-1 rounded-full bg-ink-faint" aria-hidden="true" />
          <span className="text-ink-muted">{promo.subCategory}</span>
        </p>
        <h3 className="mt-2 text-xl font-bold text-forest">{promo.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{promo.description}</p>

        {promo.items &&
        <ul className="mt-5 space-y-3 rounded-xl border border-mint-line bg-mint/60 p-4">
            {promo.items.map((item) =>
          <li key={item.name} className="flex items-start justify-between gap-3 text-xs">
                <div>
                  <p className="font-semibold text-ink">{item.name}</p>
                  {item.detail && <p className="mt-0.5 text-ink-muted">{item.detail}</p>}
                </div>
                <span className="shrink-0 font-semibold text-promo">{formatPrice(item.price)}</span>
              </li>
          )}
          </ul>
        }

        {promo.note &&
        <div className="mt-5 rounded-xl border border-mint-line bg-mint/60 p-4 text-xs">
            <p className="inline-flex items-center gap-1.5 font-semibold text-forest">
              <CheckCircle2Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {promo.note.title}
            </p>
            <p className="mt-1.5 text-ink-muted">{promo.note.text}</p>
          </div>
        }

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-3 border-t border-line pt-4 text-xs">
            <span className="inline-flex items-center gap-1.5 text-ink-muted">
              <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {promo.validity}
            </span>
            <span className="font-medium text-ink">{promo.serviceType}</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTerms(true)}
              className="inline-flex h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-line px-2 text-xs font-semibold text-ink transition-colors duration-150 hover:bg-paper">
              
              <ShieldCheckIcon className="h-4 w-4" aria-hidden="true" />
              {c.termsLabel}
            </button>
            <a
              href={waLink(buildPromoMessage(promo.title))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-forest px-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-forest-dark">
              
              {promo.ctaLabel}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <Modal open={zoom} onClose={() => setZoom(false)} title={promo.title} variant="media">
        {promo.poster ?
        <img src={promo.poster} alt={promo.title} className="mx-auto max-h-[78svh] w-auto rounded-2xl object-contain" /> :

        <ImageSlot src="" alt={promo.title} label="[PROMO POSTER]" className="aspect-[3/4] w-full rounded-2xl" />
        }
      </Modal>
      <Modal open={terms} onClose={() => setTerms(false)} title={c.termsTitle}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-promo">{c.termsTitle}</p>
        <h4 className="mt-2 pr-8 text-xl font-bold text-forest">{promo.title}</h4>
        <ul className="mt-5 space-y-3 text-sm text-ink-muted">
          {promo.terms.map((t, i) =>
          <li key={i} className="flex gap-2.5">
              <CheckCircle2Icon className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
              {t}
            </li>
          )}
        </ul>
      </Modal>
    </article>);

}