import React from 'react';
import { homeContent } from '../../data/homeContent';
import { Container } from '../common/Container';

export function HighlightsBar() {
  return (
    <section aria-label="Highlights" className="border-b border-line bg-white">
      <Container>
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {homeContent.highlights.map((item, i) =>
          <div
            key={item.label}
            className={`py-5 md:px-6 md:first:pl-0 ${i % 2 === 1 ? 'pl-4' : ''} ${i > 0 ? 'md:border-l md:border-line' : ''} ${i < 2 ? 'border-b border-line md:border-b-0' : ''}`}>
            
              <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-faint">{item.label}</dt>
              <dd className="mt-1 text-sm font-medium text-ink">{item.value}</dd>
            </div>
          )}
        </dl>
      </Container>
    </section>);

}