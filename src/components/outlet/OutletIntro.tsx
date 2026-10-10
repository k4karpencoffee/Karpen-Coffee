import React from 'react';
import { outletContent } from '../../data/outletContent';
import { Container } from '../common/Container';

export function OutletIntro() {
  const o = outletContent;
  return (
    <section className="border-b border-line bg-white py-14 md:py-20">
      <Container>
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
          <span className="h-1.5 w-1.5 rounded-full bg-forest" aria-hidden="true" />
          {o.overline}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">{o.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">{o.description}</p>
        <dl className="mt-10 grid rounded-2xl border border-line bg-paper sm:grid-cols-2 lg:grid-cols-4">
          {o.infoStrip.map((item, i) =>
          <div
            key={item.label}
            className={`px-5 py-4 ${i > 0 ? 'border-t border-line sm:border-t-0' : ''} ${i % 2 === 1 ? 'sm:border-l' : ''} ${
            i >= 2 ? 'sm:border-t lg:border-t-0' : ''} ${
            i > 0 ? 'lg:border-l' : ''} border-line`}>
            
              <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{item.label}</dt>
              <dd className={`mt-1 text-sm font-semibold ${item.highlight ? 'text-forest' : 'text-ink'}`}>{item.value}</dd>
            </div>
          )}
        </dl>
      </Container>
    </section>);

}