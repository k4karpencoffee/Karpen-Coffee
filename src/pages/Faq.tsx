import React from 'react';
import { Container } from '../components/common/Container';
import { FaqAccordion } from '../components/faq/FaqAccordion';
import { FaqHelpBox } from '../components/faq/FaqHelpBox';
import { faqPageContent } from '../data/faqs';

export function Faq() {
  const c = faqPageContent;
  return (
    <section className="bg-white py-14 md:py-20">
      <Container className="max-w-3xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint-strong px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" aria-hidden="true" />
            {c.pill}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">{c.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">{c.description}</p>
        </div>
        <div className="mt-10">
          <FaqAccordion />
        </div>
        <FaqHelpBox />
      </Container>
    </section>);

}