import React from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';

interface QuantityStepperProps {
  qty: number;
  onIncrement: () => void;
  onDecrement: () => void;
  label: string;
  size?: 'sm' | 'md';
}

export function QuantityStepper({ qty, onIncrement, onDecrement, label, size = 'sm' }: QuantityStepperProps) {
  const btn = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  return (
    <div className="inline-flex items-center rounded-full border border-forest/20 bg-mint">
      <button
        type="button"
        onClick={onDecrement}
        aria-label={`Kurangi ${label}`}
        className={`${btn} inline-flex items-center justify-center rounded-full text-forest transition-colors duration-150 hover:bg-mint-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest`}>
        
        <MinusIcon className="h-3.5 w-3.5" />
      </button>
      <span className={`min-w-[1.75rem] text-center font-semibold tabular-nums text-forest ${size === 'sm' ? 'text-xs' : 'text-sm'}`} aria-live="polite">
        {qty}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label={`Tambah ${label}`}
        className={`${btn} inline-flex items-center justify-center rounded-full text-forest transition-colors duration-150 hover:bg-mint-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest`}>
        
        <PlusIcon className="h-3.5 w-3.5" />
      </button>
    </div>);

}