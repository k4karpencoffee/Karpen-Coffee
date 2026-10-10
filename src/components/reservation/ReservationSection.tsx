import React from 'react';
import { reservationConfig } from '../../data/reservationConfig';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ReservationForm } from './ReservationForm';

/** #reservasi — table reservation, confirmed via WhatsApp. Extra bottom padding keeps the form clear of the floating buttons on phones. */
export function ReservationSection() {
  const t = reservationConfig.copy;
  return (
    <section
      id="reservasi"
      aria-labelledby="reservasi-title"
      className="scroll-mt-16 bg-mint pb-32 pt-20 md:scroll-mt-[72px] md:py-24">
      
      <Container>
        <SectionHeading
          id="reservasi-title"
          align="center"
          title={t.title}
          description={t.description}
          titleClassName="text-2xl font-extrabold uppercase tracking-tight md:text-3xl" />
        
        <div className="mt-10">
          <ReservationForm />
        </div>
      </Container>
    </section>);

}