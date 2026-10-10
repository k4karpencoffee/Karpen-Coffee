import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { products } from '../data/products';
import type { CartEntry, CartLine } from '../types/cart';

interface CartContextValue {
  entries: CartEntry[];
  count: number;
  subtotal: number;
  total: number;
  /** Add one unit. Pass `addOns` for products with add-on choices (creates its own line). */
  add: (productId: string, addOns?: string[]) => void;
  /** The functions below take a line key (= product id for products without add-ons). */
  remove: (key: string) => void;
  increment: (key: string) => void;
  decrement: (key: string) => void;
  clear: () => void;
  /** Total quantity of a product across all of its lines. */
  getQty: (productId: string) => number;
}

const STORAGE_KEY = 'site-cart-v1';
const CartContext = createContext<CartContextValue | null>(null);

function lineKey(line: Pick<CartLine, 'productId' | 'addOns'>): string {
  return line.addOns && line.addOns.length > 0 ? `${line.productId}|${line.addOns.join(',')}` : line.productId;
}

export function CartProvider({ children }: {children: React.ReactNode;}) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) as CartLine[] : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {

      /* storage unavailable */}
  }, [lines]);

  const add = useCallback((productId: string, addOns?: string[]) => {
    const key = lineKey({ productId, addOns });
    setLines((prev) => {
      const found = prev.find((l) => lineKey(l) === key);
      if (found) return prev.map((l) => lineKey(l) === key ? { ...l, qty: l.qty + 1 } : l);
      return [...prev, addOns && addOns.length > 0 ? { productId, qty: 1, addOns } : { productId, qty: 1 }];
    });
  }, []);

  const increment = useCallback((key: string) => {
    setLines((prev) => prev.map((l) => lineKey(l) === key ? { ...l, qty: l.qty + 1 } : l));
  }, []);

  const remove = useCallback((key: string) => {
    setLines((prev) => prev.filter((l) => lineKey(l) !== key));
  }, []);

  const decrement = useCallback((key: string) => {
    setLines((prev) =>
    prev.flatMap((l) => {
      if (lineKey(l) !== key) return [l];
      return l.qty > 1 ? [{ ...l, qty: l.qty - 1 }] : [];
    })
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const entries = useMemo<CartEntry[]>(() => {
    const map = new Map(products.map((p) => [p.id, p]));
    return lines.flatMap((l) => {
      const product = map.get(l.productId);
      return product ? [{ key: lineKey(l), product, qty: l.qty, lineTotal: product.price * l.qty, addOns: l.addOns }] : [];
    });
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = entries.reduce((sum, e) => sum + e.lineTotal, 0);
    return {
      entries,
      count: entries.reduce((sum, e) => sum + e.qty, 0),
      subtotal,
      total: subtotal,
      add,
      remove,
      increment,
      decrement,
      clear,
      getQty: (id) => entries.filter((e) => e.product.id === id).reduce((sum, e) => sum + e.qty, 0)
    };
  }, [entries, add, remove, increment, decrement, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}