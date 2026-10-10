import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { homeContent } from '../../data/homeContent';
import { Container } from '../common/Container';
import { ImageSlot } from '../common/ImageSlot';

export function StoryTeaser() {
  const s = homeContent.storyTeaser;
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="story-teaser-title">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="group relative overflow-hidden rounded-lg border-[6px] border-mint-strong transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none">
          <ImageSlot
            {...s.image}
            className="aspect-square w-full"
            imgClassName="transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none" />
          
          <div className="absolute inset-x-4 bottom-4 rounded bg-white/95 px-5 py-4 md:inset-x-6 md:bottom-6 md:px-6 md:py-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-ink-muted">{s.captionLabel}</p>
            <p className="mt-1.5 text-sm font-medium leading-snug text-ink md:text-lg">{s.caption}</p>
          </div>
        </div>

        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-forest">
            <span className="h-px w-8 bg-forest" aria-hidden="true" />
            {s.overline}
          </p>
          <h2 id="story-teaser-title" className="mt-4 text-xl text-ink md:text-2xl">
            {s.title}
          </h2>
          <p className="mt-3 text-lg font-medium text-forest md:text-xl">{s.subtitle}</p>
          <div className="mt-7 space-y-4 text-base leading-relaxed text-ink-muted">
            {s.paragraphs.map((p, i) =>
            <p key={i}>{p}</p>
            )}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-8">
            {s.stats.map((stat) =>
            <div key={stat.value} className="rounded border border-mint-line bg-mint/60 px-5 py-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-xl font-bold text-forest">{stat.value}</span>
                  <span className="mt-1 block text-sm text-ink-muted">{stat.label}</span>
                </dd>
              </div>
            )}
          </dl>

          <Link
            to={s.cta.to}
            className="mt-8 inline-flex items-center gap-3 border-b-2 border-forest pb-2 text-xs font-semibold uppercase tracking-[0.24em] text-ink transition-colors duration-150 hover:text-forest">
            
            {s.cta.label}
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>);

}