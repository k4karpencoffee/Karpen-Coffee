import React from 'react';
import { homeContent } from '../../data/homeContent';
import { ImageSlot } from '../common/ImageSlot';
import { HeroMorph } from './HeroMorph';

/** Full-height hero: photo/video + dark overlay. The <h1> text + navbar logo morph lives in <HeroMorph />. */
export function Hero() {
  const h = homeContent.hero;
  return (
    <>
      <section id="hero" className="relative isolate h-[100svh] min-h-[460px] overflow-hidden bg-forest-dark" aria-label={h.title}>
        <ImageSlot {...h.image} tone="dark" labelPosition="corner" className="absolute inset-0 -z-10" />
        {h.video.src &&
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover motion-reduce:hidden"
          src={h.video.src}
          poster={h.video.poster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true" />

        }
        <div className="absolute inset-0 -z-10 bg-black/45" aria-hidden="true" />
      </section>
      <HeroMorph title={h.title} />
    </>);

}