import React, { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { siteConfig } from '../../data/siteConfig';
import { formatPrice } from '../../utils/currency';
import { buildOrderMessage, waLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/BrandIcons';

const fieldBase =
// 16px below the laptop breakpoint (no iOS zoom on iPad either), 14px on laptop.
'mt-2 w-full rounded-xl border bg-white px-4 text-base text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 lg:text-sm';
const fieldOk = 'border-line focus:border-forest focus:ring-forest/25';
const fieldError = 'border-promo focus:border-promo focus:ring-promo/20';
const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.14em] text-ink';

/** A text field value mirrored to sessionStorage. */
function useSessionField(storageKey: string): [string, (value: string) => void] {
  const [value, setValue] = useState(() => {
    try {
      return window.sessionStorage.getItem(storageKey) ?? '';
    } catch {
      return '';
    }
  });
  useEffect(() => {
    try {
      window.sessionStorage.setItem(storageKey, value);
    } catch {

      // Storage unavailable (private mode) — the field still works, it just isn't remembered.
    }}, [storageKey, value]);
  return [value, setValue];
}

export function CartSummary() {
  const { entries, count, subtotal } = useCart();
  const t = siteConfig.ui.cart;
  const fee = siteConfig.whatsapp.deliveryFee;
  const total = subtotal + fee;

  // Kept for this browser session, so the details survive "Tambah menu lain" and coming back to the cart.
  const [name, setName] = useSessionField('karpen-checkout-name');
  const [address, setAddress] = useSessionField('karpen-checkout-address');
  const [note, setNote] = useSessionField('karpen-checkout-note');
  const [confirmed, setConfirmed] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [addressTouched, setAddressTouched] = useState(false);

  const nameValid = name.trim().length > 0;
  const addressValid = address.trim().length > 0;
  const nameError = nameTouched && !nameValid;
  const addressError = addressTouched && !addressValid;
  // Name + address filled AND the confirmation box ticked.
  const ready = nameValid && addressValid && confirmed;

  const href = waLink(buildOrderMessage(entries, { name, subtotal, deliveryFee: fee, address, note }));

  const handleCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ready) return;
    e.preventDefault();
    setNameTouched(true);
    setAddressTouched(true);
    const firstInvalid = !nameValid ? 'checkout-name' : !addressValid ? 'checkout-address' : 'checkout-confirm';
    document.getElementById(firstInvalid)?.focus();
  };

  return (
    <aside className="rounded-2xl border border-line bg-paper p-6 lg:sticky lg:top-24" aria-label={t.summaryTitle}>
      <h2 className="text-base font-bold text-ink">{t.summaryTitle}</h2>
      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-ink-muted">
            {t.subtotal} ({count} {t.items})
          </dt>
          <dd className="font-medium tabular-nums text-ink">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-muted">{t.deliveryFee}</dt>
          <dd className="font-medium tabular-nums text-ink">{formatPrice(fee)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-line pt-3">
          <dt className="font-semibold text-ink">{t.total}</dt>
          <dd className="text-lg font-bold tabular-nums text-forest">{formatPrice(total)}</dd>
        </div>
      </dl>

      <div className="mt-6 space-y-4 border-t border-line pt-5">
        <div>
          <label htmlFor="checkout-name" className={labelClass}>
            {t.nameLabel}
          </label>
          <input
            id="checkout-name"
            type="text"
            required
            autoComplete="name"
            autoCapitalize="words"
            autoCorrect="off"
            spellCheck={false}
            inputMode="text"
            enterKeyHint="next"
            maxLength={60}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
            placeholder={t.namePlaceholder}
            aria-invalid={nameError || undefined}
            aria-describedby={nameError ? 'checkout-name-error' : undefined}
            className={`${fieldBase} h-12 ${nameError ? fieldError : fieldOk}`} />
          
          {/* Space always reserved, so the error appearing never shifts the layout. */}
          <div className="min-h-[1.25rem]">
            {nameError &&
            <p id="checkout-name-error" className="pt-1 text-xs leading-4 text-promo">
                {t.nameRequired}
              </p>
            }
          </div>
        </div>
        <div>
          <label htmlFor="checkout-address" className={labelClass}>
            {t.addressLabel}
          </label>
          <textarea
            id="checkout-address"
            rows={3}
            required
            autoComplete="street-address"
            autoCapitalize="sentences"
            inputMode="text"
            enterKeyHint="next"
            maxLength={300}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={() => setAddressTouched(true)}
            placeholder={t.addressPlaceholder}
            aria-invalid={addressError || undefined}
            aria-describedby={addressError ? 'checkout-address-error' : undefined}
            className={`${fieldBase} min-h-[112px] resize-none py-3 leading-relaxed lg:resize-y ${addressError ? fieldError : fieldOk}`} />
          
          <div className="min-h-[1.25rem]">
            {addressError &&
            <p id="checkout-address-error" className="pt-1 text-xs leading-4 text-promo">
                {t.addressRequired}
              </p>
            }
          </div>
        </div>
        <div>
          <label htmlFor="checkout-note" className={labelClass}>
            {t.noteLabel} <span className="font-medium normal-case tracking-normal text-ink-faint">{t.noteOptional}</span>
          </label>
          <textarea
            id="checkout-note"
            rows={3}
            maxLength={300}
            autoCapitalize="sentences"
            inputMode="text"
            enterKeyHint="done"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={t.notePlaceholder}
            className={`${fieldBase} min-h-[112px] resize-none py-3 leading-relaxed lg:resize-y ${fieldOk}`} />
          
        </div>
      </div>

      {/* Whole row is the tap target (≥44px tall) */}
      <label htmlFor="checkout-confirm" className="mt-5 flex min-h-[44px] cursor-pointer items-start gap-3 py-1 text-xs leading-relaxed text-ink-muted">
        <input
          id="checkout-confirm"
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-line accent-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2" />
        
        <span>{t.confirmLabel}</span>
      </label>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCheckout}
        aria-disabled={!ready || undefined}
        className={`mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold text-white transition-colors duration-150 ${
        ready ? 'bg-forest hover:bg-forest-dark' : 'cursor-not-allowed bg-forest/50'}`
        }>
        
        <WhatsAppIcon className="h-4 w-4" />
        {t.checkout}
      </a>
      <p className="mt-3 text-xs leading-relaxed text-ink-faint">{t.checkoutNote}</p>
    </aside>);

}