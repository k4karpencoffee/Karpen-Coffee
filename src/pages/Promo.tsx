import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { Container } from '../components/common/Container';
import { CtaBand } from '../components/common/CtaBand';
import { DeliveryOrder } from '../components/promo/DeliveryOrder';
import { PromoCard } from '../components/promo/PromoCard';
import { PromoHeader } from '../components/promo/PromoHeader';
import { PromoSteps } from '../components/promo/PromoSteps';
import { promoFilters, promoPageContent, promos } from '../data/promos';
import { siteConfig } from '../data/siteConfig';
import { useNow } from '../hooks/useNow';
import { isPromoActiveOn } from '../utils/promoSchedule';
import { fillTemplate } from '../utils/whatsapp';

export function Promo() {
  const c = promoPageContent;
  const now = useNow();
  const active = promos.filter((p) => isPromoActiveOn(p, now, siteConfig.hours.timeZone));
  const sectionCounts = promoFilters.
  filter((f) => f.id !== 'all' && promos.some((p) => p.filterId === f.id)).
  map((f) => ({ ...f, count: active.filter((p) => p.filterId === f.id).length }));

  return (
    <>
      <PromoHeader />
      <section className="bg-white py-12 md:py-16" aria-label="Daftar promo">
        <Container>
          <div className="flex flex-col gap-2 border-b border-line pb-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink" aria-live="polite">
              {active.length > 0 ?
              <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-promo/50 motion-reduce:animate-none" aria-hidden="true" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-promo" aria-hidden="true" />
                </span> :

              <span className="h-3 w-3 rounded-full bg-line" aria-hidden="true" />
              }
              {active.length > 0 ? fillTemplate(c.activeTemplate, { count: String(active.length) }) : c.noneActiveLabel}
            </p>
            {sectionCounts.length > 1 &&
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-muted">
                {sectionCounts.map((s) =>
              <li key={s.id} className={s.count > 0 ? 'font-medium text-forest' : ''}>
                    {fillTemplate(c.sectionCountTemplate, { label: s.label, count: String(s.count) })}
                  </li>
              )}
              </ul>
            }
          </div>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {promos.map((promo) =>
            <li key={promo.id}>
                <PromoCard promo={promo} />
              </li>
            )}
          </ul>
        </Container>
      </section>
      <PromoSteps />
      <DeliveryOrder />
      <CtaBand
        overline={c.cta.overline}
        title={c.cta.title}
        description={c.cta.description}
        actions={
        <a
          href={siteConfig.social.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-forest transition-colors duration-150 hover:bg-mint">
          
            <MapPinIcon className="h-4 w-4" aria-hidden="true" />
            {c.cta.mapsLabel}
          </a>
        } />
      
    </>);

}