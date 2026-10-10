import { siteConfig } from '../data/siteConfig';
import type { CartEntry } from '../types/cart';
import { formatPrice } from './currency';

export function fillTemplate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? '');
}

export function waLink(message?: string): string {
  const number = siteConfig.whatsapp.number.replace(/\D/g, '');
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}

export interface OrderDetails {
  name: string;
  subtotal: number;
  deliveryFee: number;
  address: string;
  note: string;
}

/** Collapse whitespace/line breaks so user text keeps the message layout tidy. */
const oneLine = (value: string) => value.replace(/\s+/g, ' ').trim();

/** Delivery Order message — "Label : isi" format, blank lines between sections, no divider lines. */
export function buildOrderMessage(entries: CartEntry[], { name, subtotal, deliveryFee, address, note }: OrderDetails): string {
  const t = siteConfig.whatsapp.orderTemplate;
  const count = entries.reduce((sum, e) => sum + e.qty, 0);
  const items = entries.map((e) => {
    const line = fillTemplate(t.itemLine, {
      name: e.product.name,
      qty: String(e.qty),
      unitPrice: formatPrice(e.product.price),
      price: formatPrice(e.lineTotal)
    });
    return e.addOns && e.addOns.length > 0 ? `${line}\n   Add On : ${e.addOns.join(', ')}` : line;
  });
  return [
  t.greeting,
  '',
  t.title,
  fillTemplate(t.nameLine, { customer: oneLine(name) }),
  fillTemplate(t.addressLine, { address: oneLine(address) }),
  fillTemplate(t.noteLine, { note: oneLine(note) || '-' }),
  '',
  t.itemsTitle,
  items.join('\n'),
  '',
  fillTemplate(t.subtotalLine, { count: String(count), subtotal: formatPrice(subtotal) }),
  fillTemplate(t.deliveryLine, { fee: formatPrice(deliveryFee) }),
  fillTemplate(t.totalLine, { total: formatPrice(subtotal + deliveryFee) }),
  '',
  t.warningTitle,
  t.warning,
  '',
  t.closing].
  join('\n');
}

export function buildPromoMessage(promoTitle: string): string {
  return fillTemplate(siteConfig.whatsapp.promoTemplate, { promo: promoTitle });
}