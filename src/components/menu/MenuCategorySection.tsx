import React from 'react';
import type { MenuCategory, Product } from '../../types/content';
import { subcategoriesOf, subcategoryAnchor } from '../../utils/menuAnchors';
import { ProductGrid } from './ProductGrid';

interface MenuCategorySectionProps {
  category: MenuCategory;
  products: Product[];
}

export function MenuCategorySection({ category, products }: MenuCategorySectionProps) {
  const ungrouped = products.filter((p) => !p.subcategory);
  const subcategories = subcategoriesOf(products);

  return (
    <section id={category.id} data-menu-section aria-labelledby={`${category.id}-title`} className="scroll-mt-[200px]">
      <h2 id={`${category.id}-title`} className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
        {category.title}
      </h2>
      {category.description && <p className="mt-2 max-w-2xl text-sm text-ink-muted">{category.description}</p>}

      {ungrouped.length > 0 &&
      <div className="mt-6">
          <ProductGrid products={ungrouped} categoryLabel={category.title} />
        </div>
      }

      {/* Each sub-group (Basic Coffee, Kopi Susu, Milk Based, Tea Based …) has its own anchor + category chip. */}
      {subcategories.map((sub) => {
        const anchor = subcategoryAnchor(category.id, sub);
        return (
          <div key={sub} id={anchor} data-menu-section aria-labelledby={`${anchor}-title`} className="mt-10 scroll-mt-[200px]">
            <h3 id={`${anchor}-title`} className="mb-4 text-lg font-bold text-ink md:text-xl">
              {sub}
            </h3>
            <ProductGrid products={products.filter((p) => p.subcategory === sub)} categoryLabel={sub} />
          </div>);

      })}

      {products.length === 0 &&
      <p className="mt-6 rounded-xl border border-dashed border-line p-6 text-sm text-ink-faint">[NO PRODUCTS IN THIS CATEGORY]</p>
      }
    </section>);

}