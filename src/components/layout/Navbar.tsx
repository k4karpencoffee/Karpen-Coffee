import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavItem } from '../../types/content';
import { isNavItemActive } from '../../utils/navigation';

interface NavbarProps {
  items: NavItem[];
  /** White text while the navbar is transparent over the home hero. */
  light?: boolean;
}

export function Navbar({ items, light = false }: NavbarProps) {
  const { pathname, hash } = useLocation();
  return (
    <nav aria-label="Navigasi utama" className="hidden lg:block">
      <ul className="flex items-center gap-6 xl:gap-8">
        {items.map((item) => {
          const isActive = isNavItemActive(item, items, pathname, hash);
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                aria-current={isActive ? 'page' : undefined}
                className={`relative block whitespace-nowrap py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-150 ${
                isActive ?
                `after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 ${light ? 'text-white after:bg-white' : 'text-forest after:bg-forest'}` :
                light ?
                'text-white/80 hover:text-white' :
                'text-ink-muted hover:text-forest'}`
                }>
                
                {item.label}
              </Link>
            </li>);

        })}
      </ul>
    </nav>);

}