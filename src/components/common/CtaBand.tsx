import React from 'react';
import { Container } from './Container';

interface CtaBandProps {
  overline: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
}

export function CtaBand({ overline, title, description, actions }: CtaBandProps) {
  return (
    <section className="bg-paper py-16 md:py-20">
      <Container>
        <div className="flex flex-col gap-8 rounded-3xl bg-forest px-7 py-10 text-white md:px-12 md:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">{overline}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">{description}</p>
          </div>
          {actions && <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:w-80 lg:flex-col">{actions}</div>}
        </div>
      </Container>
    </section>);

}