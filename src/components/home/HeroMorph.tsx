import React, { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { assets } from '../../data/assets';
import { clamp01, easeInOutCubic, heroProgress, prefersReducedMotion } from '../../hooks/useHeroScroll';

/** Inertia: fraction of the remaining distance covered per frame (lower = softer, trails the scroll more). */
const SMOOTHING = 0.12;

interface Geometry {
  heroH: number;
  start: { x: number; y: number; };
  end: { x: number; y: number; s: number; };
  slot: { x: number; y: number; w: number; h: number; };
}

const logo = assets.heroLogo;

/**
 * Navbar logo layers. Each carries its own mix-blend-mode so a non-transparent PNG's white background
 * disappears — blend modes must sit on the fixed element itself (a fixed/transformed wrapper isolates them).
 * With real transparent PNGs (`transparent: true` + `white` set in data/assets.ts) no blending is applied.
 * Header sekarang selalu hijau solid, jadi hanya layer "white" yang ditampilkan.
 */
const layers = [
  {
    key: 'white',
    src: logo.white || logo.color,
    blend: logo.white ? undefined : 'screen',
    filter: logo.white ? undefined : 'grayscale(1) invert(1) brightness(1.6)'
  },
  {
    key: 'color',
    src: logo.color,
    blend: logo.transparent ? undefined : 'multiply',
    filter: undefined
  }] as
  const;

/**
 * Stradivarius-style morph, driven by ONE scroll progress:
 *  - the <h1> "KARPEN COFFEE" text flies from the hero centre toward the navbar logo slot while fading out
 *  - the white image logo in the navbar fades/scales in (header is always solid green)
 * Fully scroll-linked and reversible.
 */
export function HeroMorph({ title }: { title: string; }) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const logoRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    const text = textRef.current;
    const [white, color] = logoRefs.current;
    if (!text || !white || !color) return;
    const root = document.documentElement;
    let geo: Geometry | null = null;
    let frame = 0;
    let current = -1; // smoothed progress (-1 = not initialised yet)

    const measure = () => {
      text.style.transform = 'none';
      // Font size so the text spans ~85vw (88vw on phones), capped for very wide screens.
      text.style.fontSize = '100px';
      const vw = window.innerWidth;
      const targetW = Math.min(vw * (vw < 640 ? 0.88 : 0.85), 1640);
      text.style.fontSize = `${100 * targetW / text.offsetWidth}px`;
      const w = text.offsetWidth;
      const h = text.offsetHeight;
      const heroH = document.getElementById('hero')?.getBoundingClientRect().height ?? window.innerHeight;
      const r = document.getElementById('nav-logo-slot')?.getBoundingClientRect();
      const slot = r ? { x: r.left, y: r.top, w: r.width, h: r.height } : { x: 20, y: 14, w: 84, h: 36 };
      const s = slot.h / h;
      geo = {
        heroH,
        start: { x: (vw - w) / 2, y: (heroH - h) / 2 },
        end: { x: slot.x, y: slot.y, s },
        slot
      };
      [white, color].forEach((el) => {
        el.style.left = `${slot.x}px`;
        el.style.top = `${slot.y}px`;
        el.style.width = `${slot.w}px`;
        el.style.height = `${slot.h}px`;
        el.style.visibility = 'visible';
      });
      text.style.visibility = 'visible';
    };

    const render = () => {
      frame = 0;
      if (!geo) return;
      const reduced = prefersReducedMotion();
      const target = reduced ? 1 : heroProgress(window.scrollY, geo.heroH);
      // Ease toward the scroll position instead of jumping, so fast wheel/trackpad flicks still glide.
      current = reduced || current < 0 ? target : current + (target - current) * SMOOTHING;
      if (Math.abs(target - current) < 0.0005) current = target;
      const p = current;
      const e = easeInOutCubic(p);

      // Hero text: translate + scale toward the slot. Stays fully visible for the first ~35%,
      // then fades out gradually until ~85% of the journey.
      const x = geo.start.x + (geo.end.x - geo.start.x) * e;
      const y = geo.start.y + (geo.end.y - geo.start.y) * e;
      const s = 1 + (geo.end.s - 1) * e;
      const textOpacity = 1 - clamp01((e - 0.35) / 0.5);
      text.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s})`;
      text.style.opacity = String(textOpacity);
      text.style.visibility = textOpacity <= 0.001 ? 'hidden' : 'visible';

      // Navbar logo: fades in from 55% (overlaps the text fade-out), scale 0.9 → 1.
      // Header selalu hijau solid → selalu pakai layer putih, layer berwarna disembunyikan.
      const logoOpacity = clamp01((e - 0.55) / 0.45);
      const logoScale = 0.9 + 0.1 * logoOpacity;
      // Header: transparan di puncak hero, sudah hijau penuh di 20% perjalanan scroll.
      // Makin kecil angka 0.2 → makin cepat berubah hijau. Nilai ikut di-smoothing (current).
      const solid = clamp01(p / 0.2);
      white.style.opacity = String(logoOpacity);
      color.style.opacity = '0';
      white.style.transform = color.style.transform = `scale(${logoScale})`;
      const clickable = logoOpacity > 0.5;
      white.style.pointerEvents = clickable ? 'auto' : 'none';
      color.style.pointerEvents = 'none';
      white.tabIndex = clickable ? 0 : -1;
      color.tabIndex = -1;

      root.style.setProperty('--nav-solid', String(solid));

      // Keep animating until the smoothed value catches up with the scroll position.
      if (current !== target) frame = requestAnimationFrame(render);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const remeasure = () => {
      measure();
      schedule();
    };

    // Nilai awal 0 (transparan): Layout selalu me-scroll ke atas saat pindah halaman, jadi header tidak
    // perlu sempat hijau satu frame sebelum frame pertama dirender.
    root.style.setProperty('--nav-solid', '0');
    remeasure();
    document.fonts?.ready.then(remeasure).catch(() => undefined);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', remeasure);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', remeasure);
      if (frame) cancelAnimationFrame(frame);
      root.style.removeProperty('--nav-solid');
    };
  }, []);

  return createPortal(
    <>
      <h1
        ref={textRef}
        style={{ visibility: 'hidden', transformOrigin: 'top left', willChange: 'transform, opacity' }}
        className="pointer-events-none fixed left-0 top-0 z-[45] m-0 whitespace-nowrap font-extrabold uppercase leading-[0.95] tracking-tight text-white">

        <motion.span
          className="block"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}>

          {title}
        </motion.span>
      </h1>

      {layers.map((layer, i) =>
        <Link
          key={layer.key}
          ref={(el) => logoRefs.current[i] = el}
          to="/"
          aria-label={layer.key === 'white' ? logo.alt : undefined}
          aria-hidden={layer.key === 'color' ? true : undefined}
          style={{
            visibility: 'hidden',
            opacity: 0,
            transformOrigin: 'left center',
            willChange: 'transform, opacity',
            mixBlendMode: layer.blend
          }}
          className="fixed z-[45] block focus-visible:outline-none">

          <img
            src={layer.src}
            alt={layer.key === 'white' ? logo.alt : ''}
            width={logo.width}
            height={logo.height}
            loading="eager"
            decoding="async"
            draggable={false}
            {...{ fetchpriority: 'high' }}
            style={{ filter: layer.filter }}
            className="block h-full w-auto max-w-none select-none object-contain" />

        </Link>
      )}
    </>,
    document.body
  );
}