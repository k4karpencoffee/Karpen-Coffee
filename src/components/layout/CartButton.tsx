import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { useCart } from '../../contexts/CartContext';

export function CartButton({ light = false }: {light?: boolean;}) {
  const { count } = useCart();
  const { cart } = siteConfig.navigation;
  return (
    <NavLink
      to={cart.to}
      aria-label={`${cart.label} (${count})`}
      className={({ isActive }) =>
      `relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 ${
      light ?
      'text-white hover:bg-white/10' :
      isActive ?
      'bg-mint text-forest' :
      'text-ink hover:bg-paper hover:text-forest'}`

      }
      title={cart.label}>
      
      <ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />
      {count > 0 &&
      <span
        className={`absolute -right-0.5 -top-0.5 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-promo px-1 text-[10px] font-bold text-white tabular-nums ring-2 ${
        light ? 'ring-transparent' : 'ring-white'}`
        }>
        
          {count}
        </span>
      }
    </NavLink>);

}