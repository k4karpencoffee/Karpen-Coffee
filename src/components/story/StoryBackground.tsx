import React from 'react';
import { storyContent } from '../../data/storyContent';
import { Container } from '../common/Container';

export function StoryBackground() {
  const b = storyContent.background;
  return (
    <section className="border-b border-line bg-white py-20 md:py-24" aria-labelledby="story-background-title">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
            <span className="h-px w-4 bg-forest" aria-hidden="true" />
            {b.overline}
          </p>
          <h2 id="story-background-title" className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {b.title}
          </h2>
          <p className="mt-8 border-l-4 border-forest pl-5 text-lg font-semibold leading-snug text-forest md:text-xl">{b.highlight}</p>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-ink-muted">
          {b.paragraphs.map((p, i) =>
          <p key={i}>{p}</p>
          )}
        </div>
      </Container>
    </section>);

}