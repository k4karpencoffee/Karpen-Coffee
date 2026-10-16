import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, ShoppingBagIcon, XIcon } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { LanguageToggle } from '../common/LanguageToggle';
import { useHeaderSolid } from '../../hooks/useHeaderSolid';
import { prefersReducedMotion } from '../../hooks/useHeroScroll';
import { getNavItems } from '../../utils/navigation';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { StatusPill } from '../common/StatusPill';
import { CartButton } from './CartButton';
import { MobileNavbar } from './MobileNavbar';
import { Navbar } from './Navbar';

/** Background/border live in index.css (.site-header) and follow --nav-solid. Used to force the header solid green. */
const solidStyle = { '--nav-solid': 1 } as React.CSSProperties;

const isMenuEntry = () => Boolean((window.history.state as { mobileNav?: boolean; } | null)?.mobileNav);
/** Adds one history entry for the open menu. The router's own state (key/idx) is kept, so the route doesn't change. */
const pushMenuEntry = () => {
  if (!isMenuEntry()) window.history.pushState({ ...(window.history.state ?? {}), mobileNav: true }, '');
};

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, key } = useLocation();
  const items = getNavItems(pathname);
  const isHome = pathname === '/';

  // Beranda: --nav-solid diisi HeroMorph (transparan di hero → hijau saat scroll), teks/logo selalu putih.
  // Halaman lain: hook ini mengisi --nav-solid (transparan di puncak → hijau perlahan saat scroll) dan
  // `light` baru jadi true setelah header cukup hijau; sebelum itu teks/logo gelap agar terbaca di atas halaman putih.
  const solidLight = useHeaderSolid(!isHome, pathname);
  const light = isHome || open || solidLight;

  const openRef = useRef(open);
  openRef.current = open;
  /** Set right before we call history.back() ourselves, so that popstate isn't treated as a user "Back". */
  const skipPop = useRef(false);

  // Close the mobile menu on every navigation, including same-page hash links.
  useEffect(() => setOpen(false), [key]);

  /** ✕, backdrop, Esc, link: close IMMEDIATELY (no waiting for the history round-trip). */
  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((v) => !v), []);

  // ONE permanent popstate listener: the phone's Back button closes the open menu instead of leaving the page.
  useEffect(() => {
    const onPop = () => {
      if (skipPop.current) {
        skipPop.current = false;
        // Menu was re-opened before our own history.back() landed — restore its history entry.
        if (openRef.current && !isMenuEntry()) pushMenuEntry();
        return;
      }
      if (openRef.current) setOpen(false);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    if (!open) return;
    pushMenuEntry();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    // Kunci scroll HANYA di <html>. Jangan kunci <body>: body yang overflow:hidden
    // menjadi scroll container sendiri dan membuat header sticky ikut tergulung keluar layar.
    const html = document.documentElement.style;
    const prevOverflow = html.overflow;
    html.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      html.overflow = prevOverflow;
      // Ditutup dengan ✕ / backdrop / Esc: hapus history entry milik menu.
      if (isMenuEntry()) {
        skipPop.current = true;
        window.history.back();
      }
    };
  }, [open]);

  return (
    <header
      // While the mobile menu is open the header sits above the hero title/logo layers (z-45), so nothing covers the menu.
      className={`site-header ${isHome ? 'fixed inset-x-0' : 'sticky'} top-0 ${open ? 'z-50' : 'z-40'} border-b`}
      style={open ? solidStyle : undefined}>

      <Container className="flex h-16 items-center justify-between gap-6 md:h-[72px]">
        {isHome ?
          // Navbar logo slot: the hero text morphs into the image logo here (components/home/HeroMorph) — no second logo.
          // Height 36px mobile / 44px desktop; width follows the logo's aspect ratio (2576 × 1112).
          <span id="nav-logo-slot" className="block h-9 w-[84px] shrink-0 md:h-11 md:w-[102px]">
            {/* The morphing logo sits under the raised header while the menu is open — show the static logo instead. */}
            {open &&
              <Link
                to="/"
                aria-label={siteConfig.businessName}
                onClick={(e) => {
                  // Already on Beranda: just close the menu and go back to the top.
                  e.preventDefault();
                  closeMenu();
                  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
                }}
                className="block h-full w-full">

                <Logo variant="footer" className="h-full w-full" />
              </Link>
            }
          </span> :

          // Dua logo ditumpuk: logo berwarna (header transparan di atas halaman putih) dan logo putih (header hijau).
          // Keduanya bertukar dengan fade lewat opacity di <img> masing-masing, jadi blend mode logo tetap bekerja.
          <Link to="/" aria-label={siteConfig.businessName} className="relative block shrink-0">
            <Logo imgClassName={`transition-opacity duration-300 ${light ? 'opacity-0' : 'opacity-100'}`} />
            <span className="absolute inset-0" aria-hidden="true">
              <Logo variant="footer" className="h-full w-full" imgClassName={`transition-opacity duration-300 ${light ? 'opacity-100' : 'opacity-0'}`} />
            </span>
          </Link>
        }

        <Navbar items={items} light={light} />

        <div className="flex items-center gap-2">
          <StatusPill className="hidden xl:inline-flex" />
          <LanguageToggle light={light} className="hidden lg:inline-flex" />
          <CartButton light={light} />
          <Link
            to={siteConfig.navigation.orderCta.to}
            className={`hidden h-10 items-center gap-2 whitespace-nowrap rounded-full border px-5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 md:inline-flex ${light ? 'border-white bg-white text-forest hover:bg-mint' : 'border-forest bg-forest text-white hover:bg-forest-dark'}`}>

            <ShoppingBagIcon className="h-4 w-4" />
            {siteConfig.navigation.orderCta.label}
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            // 48×48 touch target, single onClick handler, no tap highlight / double-tap delay.
            className={`-mr-1.5 inline-flex h-12 w-12 shrink-0 touch-manipulation select-none items-center justify-center rounded-full transition-colors duration-300 [-webkit-tap-highlight-color:transparent] lg:hidden ${light ? 'text-white active:bg-white/15' : 'text-ink active:bg-paper'}`}>

            {open ? <XIcon className="h-6 w-6" aria-hidden="true" /> : <MenuIcon className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </Container>
      {/* Page-specific sub navigation (e.g. Menu categories) is portaled here so it sticks with the navbar. */}
      <div id="header-subnav" />
      <MobileNavbar open={open} items={items} onClose={closeMenu} />
    </header>);

}