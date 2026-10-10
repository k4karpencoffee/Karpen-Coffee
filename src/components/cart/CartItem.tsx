import React from 'react';
import { Trash2Icon } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { siteConfig } from '../../data/siteConfig';
import type { CartEntry } from '../../types/cart';
import { formatPrice } from '../../utils/currency';
import { ImageSlot } from '../common/ImageSlot';
import { QuantityStepper } from '../common/QuantityStepper';

export function CartItem({ entry }: {entry: CartEntry;}) {
  const { increment, decrement, remove } = useCart();
  const { key, product, qty, lineTotal, addOns } = entry;
  return (
    <li className="flex gap-4 py-5">
      <ImageSlot src={product.image} alt={product.name} label="[IMG]" size="sm" className="h-20 w-20 shrink-0 rounded-lg md:h-24 md:w-24" />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-ink md:text-base">{product.name}</h3>
            <p className="mt-0.5 text-xs text-ink-muted">{formatPrice(product.price)}</p>
            {addOns && addOns.length > 0 &&
            <p className="mt-1 text-xs leading-relaxed text-ink-muted">Add on: {addOns.join(', ')}</p>
            }
          </div>
          <p className="shrink-0 text-sm font-bold text-forest tabular-nums">{formatPrice(lineTotal)}</p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <QuantityStepper qty={qty} label={product.name} size="md" onIncrement={() => increment(key)} onDecrement={() => decrement(key)} />
          <button
            type="button"
            onClick={() => remove(key)}
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium text-ink-muted transition-colors duration-150 hover:bg-rose-50 hover:text-rose-700">
            
            <Trash2Icon className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.ui.cart.remove}
          </button>
        </div>
      </div>
    </li>);

}