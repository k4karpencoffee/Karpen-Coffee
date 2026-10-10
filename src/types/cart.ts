import type { Product } from './content';

export interface CartLine {
  productId: string;
  qty: number;
  /** Chosen add-ons (e.g. Kids Meal Package). Different add-on sets = separate cart lines. */
  addOns?: string[];
}

export interface CartEntry {
  /** Unique line id: productId, or productId + chosen add-ons. */
  key: string;
  product: Product;
  qty: number;
  lineTotal: number;
  addOns?: string[];
}