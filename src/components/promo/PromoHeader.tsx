import React from 'react';
import { SparklesIcon } from 'lucide-react';
import { promoPageContent } from '../../data/promos';
import { Breadcrumb } from '../common/Breadcrumb';
import { Container } from '../common/Container';

export function PromoHeader() {
  const c = promoPageContent;
  return (
    <section className="border-b border-line bg-mint/50 py-12 md:py-16">
      <Container className="flex flex-col items-center text-center">
        <Breadcrumb current={c.breadcrumb} className="justify-center" />
        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink">
          <SparklesIcon className="h-3.5 w-3.5 text-forest" aria-hidden="true" />
          {c.pill}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-forest md:text-6xl">{c.title}</h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">{c.subtitle}</p>
      </Container>
    </section>);

}