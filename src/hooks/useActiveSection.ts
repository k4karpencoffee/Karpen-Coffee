import { useEffect, useState } from 'react';

/** Height of the sticky header (navbar + any portaled sub-nav such as the Menu filter bar). */
export function getStickyOffset(): number {
  return document.querySelector('header')?.getBoundingClientRect().height ?? 0;
}

/** Tolerance (px) below the sticky header — a section counts as "reached" once its top passes this line. */
const SPY_TOLERANCE = 32;

/**
 * Scroll-spy: the active section is the LAST one whose top has scrolled past the sticky header.
 * Position-based (not intersection-based), so the result is stable once scrolling stops —
 * no flicker back to the previous category.
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);
  const key = ids.join('|');

  useEffect(() => {
    let frame = 0;
    const compute = () => {
      frame = 0;
      const line = getStickyOffset() + SPY_TOLERANCE;
      let current: string | null = ids[0] ?? null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}