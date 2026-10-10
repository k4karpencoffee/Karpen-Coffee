import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export function CartEmpty() {
  const t = siteConfig.ui.cart;
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-line px-6 py-16 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-mint text-forest">
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h2 className="mt-5 text-lg font-bold text-ink">{t.emptyTitle}</h2>
      <p className="mt-2 max-w-sm text-sm text-ink-muted">{t.emptyDescription}</p>
      <Link
        to="/menu"
        className="mt-6 inline-flex h-11 items-center rounded-lg bg-forest px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-forest-dark">
        
        {t.browseMenu}
      </Link>
    </div>);

}