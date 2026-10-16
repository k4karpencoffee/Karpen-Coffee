import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import type { NavItem } from '../../types/content';
import { isNavItemActive } from '../../utils/navigation';
import { Container } from '../common/Container';
import { StatusPill } from '../common/StatusPill';
import { LanguageToggle } from '../common/LanguageToggle';

interface MobileNavbarProps {
  open: boolean;
  items: NavItem[];
  onClose: () => void;
}

export function MobileNavbar({ open, items, onClose }: MobileNavbarProps) {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // The open menu adds one history entry (so the phone's Back button closes it).
  // Replace that entry when navigating, so Back afterwards returns to the previous page.
  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    const fromMenuEntry = Boolean((window.history.state as { mobileNav?: boolean; } | null)?.mobileNav);
    navigate(to, { replace: fromMenuEntry });
  };

  return (
    <AnimatePresence>
      {open &&
        <>
          {/* Tap outside the menu to close it */}
          <motion.div
            key="backdrop"
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-x-0 top-full h-screen touch-none bg-black/40 lg:hidden" />

          <motion.div
            key="panel"
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-b border-line bg-white shadow-lg lg:hidden">

            <Container className="py-4">
              <nav aria-label="Navigasi ponsel">
                <ul className="divide-y divide-line">
                  {items.map((item) => {
                    const isActive = isNavItemActive(item, items, pathname, hash);
                    return (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={(e) => go(e, item.to)}
                          aria-current={isActive ? 'page' : undefined}
                          className={`block py-3.5 text-sm font-semibold uppercase tracking-[0.14em] ${isActive ? 'text-forest' : 'text-ink-muted'}`}>

                          {item.label}
                        </Link>
                      </li>);

                  })}
                </ul>
              </nav>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <StatusPill />
                <LanguageToggle />
                <Link
                  to={siteConfig.navigation.orderCta.to}
                  onClick={(e) => go(e, siteConfig.navigation.orderCta.to)}
                  className="inline-flex h-10 items-center rounded-full bg-forest px-5 text-xs font-semibold uppercase tracking-[0.14em] text-white">

                  {siteConfig.navigation.orderCta.label}
                </Link>
              </div>
            </Container>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}