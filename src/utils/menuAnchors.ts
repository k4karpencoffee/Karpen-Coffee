import type { Product } from '../types/content';

/** "Basic Coffee" → "basic-coffee" */
export function slugify(text: string): string {
  return text.
  toLowerCase().
  replace(/&/g, 'and').
  replace(/[^a-z0-9]+/g, '-').
  replace(/^-|-$/g, '');
}

/** Section anchor for a sub-group inside a category, e.g. #signature-beverage--basic-coffee */
export function subcategoryAnchor(categoryId: string, subcategory: string): string {
  return `${categoryId}--${slugify(subcategory)}`;
}

/** Sub-groups of a category, in the order they first appear in data/products.ts. */
export function subcategoriesOf(products: Product[]): string[] {
  return Array.from(new Set(products.flatMap((p) => p.subcategory ? [p.subcategory] : [])));
}