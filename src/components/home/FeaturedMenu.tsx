import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossedIcon } from 'lucide-react';
import { homeContent } from '../../data/homeContent';
import { products } from '../../data/products';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ProductGrid } from '../menu/ProductGrid';

export function FeaturedMenu() {
  const f = homeContent.featured;
  const featured = products.filter((p) => p.featured);
  return (
    <section className="bg-mint py-20 md:py-24" aria-labelledby="featured-title">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="featured-title" overline={f.overline} overlineStyle="line" title={f.title} />
          <p className="max-w-md text-sm leading-relaxed text-ink-muted md:text-right">{f.description}</p>
        </div>
        <div className="mt-10">
          <ProductGrid products={featured} columns="featured" />
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/menu"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-forest px-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-150 hover:bg-forest-dark">
            
            {f.ctaLabel}
            <UtensilsCrossedIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>);

}