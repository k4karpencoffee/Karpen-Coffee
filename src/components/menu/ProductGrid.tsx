import React from 'react';
import type { Product } from '../../types/content';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  categoryLabel?: string;
  columns?: 'featured' | 'menu';
}

export function ProductGrid({ products, categoryLabel, columns = 'menu' }: ProductGridProps) {
  const cols =
  columns === 'featured' ?
  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
  'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
  return (
    <ul className={`grid gap-4 md:gap-5 ${cols}`}>
      {products.map((p) =>
      <li key={p.id}>
          <ProductCard product={p} categoryLabel={categoryLabel} />
        </li>
      )}
    </ul>);

}