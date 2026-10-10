import React from 'react';
import { facilities, outletContent } from '../../data/outletContent';
import { Container } from '../common/Container';
import { iconMap } from '../common/icons';
import { SectionHeading } from '../common/SectionHeading';

export function Facilities() {
  const f = outletContent.facilities;
  return (
    <section className="border-t border-line bg-white py-20 md:py-24" aria-labelledby="facilities-title">
      <Container>
        <SectionHeading id="facilities-title" overline={f.overline} title={f.title} description={f.description} align="center" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={item.title} className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white text-forest">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </li>);

          })}
        </ul>
      </Container>
    </section>);

}