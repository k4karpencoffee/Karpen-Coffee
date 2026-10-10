import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { storyContent } from '../../data/storyContent';
import { Breadcrumb } from '../common/Breadcrumb';
import { Container } from '../common/Container';
import { ImageSlot } from '../common/ImageSlot';

export function StoryIntro() {
  const s = storyContent;
  return (
    <section className="border-b border-line bg-white py-12 md:py-16">
      <Container>
        <Breadcrumb current={s.breadcrumb} />
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink md:text-5xl">{s.title}</h1>
        <p className="mt-3 text-lg font-medium text-forest">{s.subtitle}</p>
        <p className="mt-6 max-w-2xl border-l-2 border-line pl-5 text-sm leading-relaxed text-ink-muted md:text-base">{s.intro}</p>
        <div className="relative mt-10">
          {/* object-position center 60% keeps the bar counter & people in frame on the wide/short banner. */}
          <ImageSlot
            {...s.image}
            className="aspect-[16/9] w-full rounded-2xl md:aspect-[21/9]"
            imgClassName="object-[center_60%]" />
          
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white/95 px-4 py-2 text-xs font-medium text-ink">
            <MapPinIcon className="h-3.5 w-3.5 text-forest" aria-hidden="true" />
            {s.imageCaption}
          </span>
        </div>
      </Container>
    </section>);

}