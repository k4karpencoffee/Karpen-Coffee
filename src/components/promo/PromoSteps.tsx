import React from 'react';
import { promoPageContent, promoSteps } from '../../data/promos';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export function PromoSteps() {
  const s = promoPageContent.steps;
  return (
    <section className="border-t border-line bg-mint/40 py-20 md:py-24" aria-labelledby="steps-title">
      <Container>
        <SectionHeading id="steps-title" overline={s.overline} title={s.title} description={s.description} align="center" titleClassName="text-2xl font-extrabold tracking-tight text-forest md:text-3xl" />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {promoSteps.map((step, i) =>
          <li key={i} className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest text-sm font-bold text-white">{i + 1}</span>
              <h3 className="mt-6 text-lg font-bold text-forest">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </li>
          )}
        </ol>
      </Container>
    </section>);

}