import React from 'react';
import { ChevronDownIcon } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function SelectField({ id, label, value, placeholder, options, onChange, disabled = false }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink">
        {label}
      </label>
      <div className="relative mt-2">
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={`h-12 w-full appearance-none rounded-xl border bg-white pl-4 pr-10 text-base transition-colors duration-150 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/25 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink-faint lg:text-sm ${
          value ? 'border-line text-ink' : 'border-line text-ink-muted'}`
          }>
          
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) =>
          <option key={o.value} value={o.value}>
              {o.label}
            </option>
          )}
        </select>
        <ChevronDownIcon
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
          aria-hidden="true" />
        
      </div>
    </div>);

}