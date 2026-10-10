import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, TagIcon } from 'lucide-react';
import { homeContent } from '../../data/homeContent';
import { Container } from '../common/Container';
import { ImageSlot } from '../common/ImageSlot';

export function PromoHighlight() {
  const p = homeContent.promoHighlight;
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="promo-highlight-title">
      <Container>
        <div className="group grid overflow-hidden rounded-2xl border border-line bg-white transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-xl motion-reduce:transform-none lg:grid-cols-[minmax(0,0.85fr)_1fr]">
          {/* The poster is shown at its own aspect ratio (natural mode) so nothing gets cropped. */}
          <div className="relative self-start overflow-hidden bg-paper">
            <ImageSlot
              {...p.image}
              natural
              className="w-full"
              imgClassName="transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none" />
            
            <span className="absolute left-4 top-4 rounded bg-promo px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {p.badge}
            </span>
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              <TagIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {p.label}
            </p>
            <h2 id="promo-highlight-title" className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">
              {p.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{p.description}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-mint-line bg-mint p-4">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{p.priceLabel}</dt>
                <dd className="mt-1 flex flex-wrap items-baseline gap-2">
                  <span className="text-base font-bold text-forest">{p.priceText}</span>
                </dd>
              </div>
              <div className="border-l border-mint-line pl-4">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{p.periodLabel}</dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{p.period}</dd>
              </div>
            </dl>
            <Link
              to={p.cta.to}
              className="mt-7 inline-flex h-11 w-fit items-center gap-2 rounded-md bg-forest px-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-150 hover:bg-forest-dark">
              
              {p.cta.label}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>);

}