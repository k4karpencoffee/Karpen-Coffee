import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, MapPinIcon, UtensilsCrossedIcon } from 'lucide-react';
import { storyContent } from '../../data/storyContent';
import { Container } from '../common/Container';

export function ThankYouCta() {
  const t = storyContent.thankYou;
  return (
    <section className="bg-white py-20 md:py-24">
      <Container className="max-w-4xl">
        <div className="rounded-2xl border border-mint-line bg-mint px-6 py-12 text-center md:px-14">
          <HeartIcon className="mx-auto h-6 w-6 text-forest" aria-hidden="true" />
          <h2 className="mx-auto mt-4 max-w-lg text-2xl font-bold tracking-tight text-ink md:text-3xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">{t.description}</p>
          <p className="mt-5 text-lg font-bold text-promo">{t.quote}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to={t.primaryCta.to}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-forest px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-forest-dark">
              
              {t.primaryCta.label}
              <UtensilsCrossedIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to={t.secondaryCta.to}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 text-sm font-semibold text-ink transition-colors duration-150 hover:border-forest">
              
              {t.secondaryCta.label}
              <MapPinIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>);

}