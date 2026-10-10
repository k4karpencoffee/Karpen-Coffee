import React from 'react';
import { outletContent } from '../../data/outletContent';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { OutletGallery } from './OutletGallery';
import { OutletStatusCard } from './OutletStatusCard';

interface VisitSectionProps {
  background?: 'mint' | 'paper';
}

/** Shared "visit us" block — gallery + live status card. Used on Home and Outlet. */
export function VisitSection({ background = 'mint' }: VisitSectionProps) {
  const v = outletContent.visit;
  return (
    <section className={`${background === 'mint' ? 'bg-mint' : 'bg-paper'} py-20 md:py-24`} aria-labelledby="visit-title">
      <Container>
        <SectionHeading
          id="visit-title"
          overline={v.overline}
          overlineStyle="line"
          title={v.title}
          description={v.description}
          titleClassName="text-2xl font-extrabold uppercase tracking-tight md:text-3xl" />
        
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.45fr_1fr]">
          <OutletGallery images={v.gallery} note={v.galleryNote} />
          <OutletStatusCard />
        </div>
      </Container>
    </section>);

}