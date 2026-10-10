import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { Modal } from '../common/Modal';
import type { Product } from '../../types/content';
import { formatPrice } from '../../utils/currency';

interface AddOnPickerProps {
  product: Product;
  open: boolean;
  onClose: () => void;
  onConfirm: (addOns: string[]) => void;
}

/** Lets the customer choose add-ons (e.g. Kids Meal Package, min. 3) before adding to the cart. */
export function AddOnPicker({ product, open, onClose, onConfirm }: AddOnPickerProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const options = product.addOns?.options ?? [];
  const min = product.addOns?.min ?? 0;
  const ready = selected.length >= min;

  const toggle = (option: string) =>
  setSelected((prev) => prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]);

  const close = () => {
    setSelected([]);
    onClose();
  };

  const confirm = () => {
    if (!ready) return;
    // Keep the order of the menu list so identical choices merge into one cart line.
    onConfirm(options.filter((o) => selected.includes(o)));
    setSelected([]);
  };

  return (
    <Modal open={open} onClose={close} title={`Pilih add on ${product.name}`}>
      <h2 className="pr-10 text-lg font-bold text-ink">{product.name}</h2>
      <p className="mt-1 text-sm text-ink-muted">
        Pilih minimal {min} add on · {formatPrice(product.price)}
      </p>

      <fieldset className="mt-5">
        <legend className="sr-only">Add on</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {options.map((option) => {
            const checked = selected.includes(option);
            return (
              <label
                key={option}
                className={`flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm transition-colors duration-150 ${
                checked ? 'border-forest bg-mint text-forest' : 'border-line text-ink hover:border-forest/40'}`
                }>
                
                <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggle(option)} />
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                  checked ? 'border-forest bg-forest text-white' : 'border-line bg-white'}`
                  }
                  aria-hidden="true">
                  
                  {checked && <CheckIcon className="h-3.5 w-3.5" />}
                </span>
                {option}
              </label>);

          })}
        </div>
      </fieldset>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className={`text-xs font-medium ${ready ? 'text-forest' : 'text-ink-muted'}`} aria-live="polite">
          {selected.length} dipilih{ready ? '' : ` · pilih ${min - selected.length} lagi`}
        </p>
        <button
          type="button"
          onClick={confirm}
          disabled={!ready}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-forest px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-forest/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-line disabled:text-ink-faint">
          
          Tambah ke Keranjang
        </button>
      </div>
    </Modal>);

}