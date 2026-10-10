import React from 'react';
import { ClockIcon } from 'lucide-react';
import { deliveryContent } from '../../data/deliveryContent';
import { waLink } from '../../utils/whatsapp';
import { Container } from '../common/Container';
import { ImageSlot } from '../common/ImageSlot';

/** Renders a step description, turning the WhatsApp number into a clickable link. */
function StepDescription({ text }: {text: string;}) {
  const d = deliveryContent;
  const index = text.indexOf(d.phoneDisplay);
  if (index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <a
        href={waLink(d.message)}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-white underline decoration-white/40 underline-offset-2 transition-colors duration-150 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm">
        
        {d.phoneDisplay}
      </a>
      {text.slice(index + d.phoneDisplay.length)}
    </>);

}

/** Shared "Karpen Delivery Order" card — used on Beranda (above the footer) and on the Promo page. */
export function DeliveryOrder() {
  const d = deliveryContent;
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="delivery-title">
      <Container>
        <div className="grid overflow-hidden rounded-3xl bg-forest text-white lg:grid-cols-[0.85fr_1.15fr]">
          {/* Poster shown at its own 4:5 ratio — nothing cropped. */}
          <div className="relative self-start">
            <ImageSlot {...d.poster} tone="dark" natural className="w-full" />
          </div>

          <div className="flex flex-col p-6 sm:p-8 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">{d.overline}</p>
            <h2 id="delivery-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              {d.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">{d.description}</p>

            <h3 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">{d.stepsTitle}</h3>
            <ol className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {d.steps.map((step, i) =>
              <li key={step.title} className="flex gap-3.5">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-forest">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/70">
                      <StepDescription text={step.description} />
                    </p>
                  </div>
                </li>
              )}
            </ol>

            {/* Service hours — in the spot where the WhatsApp button used to be. */}
            <p className="mt-8 inline-flex items-center gap-2.5 self-stretch rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm sm:self-start">
              <ClockIcon className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
              <span>
                <span className="text-white/75">{d.hoursLabel}</span> <span className="font-semibold">{d.hoursValue}</span>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>);

}