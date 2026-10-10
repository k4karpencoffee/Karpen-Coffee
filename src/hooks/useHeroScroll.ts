import { useEffect, useRef, useState } from 'react';

/** The hero title settles into the navbar after scrolling this fraction of the hero height. */
export const HERO_SETTLE_FRACTION = 0.9;

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
/** Gentle start and end — the hero morph moves evenly instead of rushing at the first scroll. */
export const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/** p = clamp(scrollY / (heroHeight * 0.6), 0, 1) — the hero is 100vh tall. */
export function heroProgress(scrollY: number, heroHeight: number): number {
  return clamp01(scrollY / (heroHeight * HERO_SETTLE_FRACTION));
}

/** 0 → navbar fully transparent, 1 → navbar solid. Fades in during the last 30% of the flight. */
export function navSolid(p: number): number {
  return clamp01((p - 0.7) / 0.3);
}

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Boolean derived from the scroll position (rAF-throttled). Returns `fallback` while disabled.
 * `test` receives scrollY and viewport height.
 */
export function useScrollFlag(enabled: boolean, test: (scrollY: number, vh: number) => boolean, fallback: boolean): boolean {
  const testRef = useRef(test);
  testRef.current = test;
  const [flag, setFlag] = useState(() =>
  enabled && typeof window !== 'undefined' ? test(window.scrollY, window.innerHeight) : fallback
  );

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      setFlag(testRef.current(window.scrollY, window.innerHeight));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // Only a WIDTH change matters. Height-only changes (keyboard, address bar) are ignored,
    // so opening the keyboard never re-evaluates the navbar state.
    let lastWidth = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      schedule();
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return enabled ? flag : fallback;
}