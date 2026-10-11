import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { prefersReducedMotion } from '../../hooks/useHeroScroll';
import { useEscapeBack } from '../../hooks/useEscapeBack';
import { FloatingActions } from '../floating/FloatingActions';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  useEscapeBack();
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  // Hash links (e.g. /outlet#reservasi): smooth-scroll to the target, also when clicked again on the same page.
  // Retries for a few frames because the target may not be mounted yet right after a page change.
  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    let frame = 0;
    let tries = 0;
    const go = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' }); else
        if (tries++ < 30) frame = requestAnimationFrame(go);
    };
    frame = requestAnimationFrame(go);
    return () => cancelAnimationFrame(frame);
  }, [hash, key]);

  return (
    <div className="min-h-viewport flex w-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" richColors closeButton />
    </div>);

}