import { siteConfig } from '../data/siteConfig';

export function formatPrice(value: number): string {
  return `${siteConfig.currencyPrefix}${value.toLocaleString('id-ID')}`;
}