import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '../../contexts/CartContext';
import { useOpenStatus } from '../../hooks/useOpenStatus';
import { siteConfig } from '../../data/siteConfig';
import type { Product } from '../../types/content';
import { formatPrice } from '../../utils/currency';
import { ImageSlot } from '../common/ImageSlot';
import { QuantityStepper } from '../common/QuantityStepper';
import { AddOnPicker } from './AddOnPicker';

interface ProductCardProps {
  product: Product;
  categoryLabel?: string;
}

/** Single reusable product template — every product on the site renders through this card. */
export function ProductCard({ product, categoryLabel }: ProductCardProps) {
  const { getQty, add, increment, decrement } = useCart();
  const navigate = useNavigate();
  const qty = getQty(product.id);
  const { status } = useOpenStatus();
  const unavailable = status === 'closed' || status === 'opening-soon';

  const [pickerOpen, setPickerOpen] = useState(false);
  const hasAddOns = Boolean(product.addOns);

  const handleAdd = (addOns?: string[]) => {
    add(product.id, addOns);
    setPickerOpen(false);
    toast.success(`${product.name} ${siteConfig.ui.addedToast}`, {
      action: { label: siteConfig.ui.viewCart, onClick: () => navigate(siteConfig.navigation.cart.to) }
    });
  };

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-[transform,box-shadow] duration-200 ease-out hover:z-10 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-xl motion-reduce:transform-none">
      <div className="relative overflow-hidden">
        <ImageSlot
          src={product.image}
          alt={product.name}
          label="[PRODUCT IMAGE]"
          className="aspect-square w-full"
          imgClassName="transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transform-none" />
        
        {product.badge &&
        <span
          className={`absolute right-2.5 top-2.5 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${
          product.badgeTone === 'promo' ? 'bg-promo' : 'bg-forest'}`
          }>
          
            {product.badge}
          </span>
        }
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <h3 className="text-sm font-semibold leading-snug text-ink">{product.name}</h3>
          <p className="shrink-0 text-sm font-bold text-forest">{formatPrice(product.price)}</p>
        </div>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-muted">{product.description}</p>
        <div className="mt-auto flex min-h-[2.25rem] items-end justify-between gap-2 pt-4">
          <span className="truncate text-[11px] text-ink-faint">{product.tag ?? categoryLabel}</span>
          {unavailable ?
          <span className="inline-flex shrink-0 items-center rounded-full bg-paper px-2.5 py-1 text-xs font-semibold text-promo" aria-label={`${product.name} belum bisa dipesan`}>
              {siteConfig.ui.unavailable}
            </span> :
          hasAddOns ?
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-forest transition-colors duration-150 hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest">
            
              {qty > 0 ? `${siteConfig.ui.addToCart.replace(/\s*\+?\s*$/, '')} (${qty})` : siteConfig.ui.addToCart}
              <PlusIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </button> :
          qty === 0 ?
          <button
            type="button"
            onClick={() => handleAdd()}
            className="inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-forest transition-colors duration-150 hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest">
            
              {siteConfig.ui.addToCart}
              <PlusIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </button> :

          <QuantityStepper
            qty={qty}
            label={product.name}
            onIncrement={() => increment(product.id)}
            onDecrement={() => decrement(product.id)} />

          }
        </div>
      </div>
      {hasAddOns &&
      <AddOnPicker product={product} open={pickerOpen} onClose={() => setPickerOpen(false)} onConfirm={handleAdd} />
      }
    </article>);

}