import React from 'react';
import { Link } from 'react-router-dom';
import { InfoIcon, PlusIcon } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Container } from '../components/common/Container';
import { CartEmpty } from '../components/cart/CartEmpty';
import { CartItem } from '../components/cart/CartItem';
import { CartSummary } from '../components/cart/CartSummary';
import { useCart } from '../contexts/CartContext';
import { siteConfig } from '../data/siteConfig';

export function Cart() {
  const { entries, clear } = useCart();
  const t = siteConfig.ui.cart;

  return (
    <section className="bg-white py-12 pb-28 md:py-16">
      <Container>
        <Breadcrumb current={t.breadcrumb} />
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink md:text-4xl">{t.title}</h1>
        <p className="mt-2 text-sm text-ink-muted">{t.description}</p>
        <div className="mt-5 flex max-w-3xl items-start gap-2.5 rounded-xl border border-notice-line bg-notice px-4 py-3 text-xs leading-relaxed text-notice-ink md:text-sm">
          <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            <span className="font-semibold">{t.deliveryOnlyTitle}</span> {t.deliveryOnlyNote}{' '}
            <Link to="/reservasi" className="font-semibold underline underline-offset-2">
              {t.reservationLink}
            </Link>
          </p>
        </div>

        <div className="mt-10">
          {entries.length === 0 ?
          <CartEmpty /> :

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">
              <div>
                <ul className="divide-y divide-line border-y border-line">
                  {entries.map((entry) =>
                <CartItem key={entry.key} entry={entry} />
                )}
                </ul>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <Link to="/menu" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:underline">
                    <PlusIcon className="h-4 w-4" aria-hidden="true" />
                    {t.continueShopping}
                  </Link>
                  <button type="button" onClick={clear} className="text-sm font-medium text-ink-muted hover:text-rose-700">
                    {t.clear}
                  </button>
                </div>
              </div>
              <CartSummary />
            </div>
          }
        </div>
      </Container>
    </section>);

}