import { useLayoutEffect, useState } from 'react';
import { clamp01, prefersReducedMotion } from './useHeroScroll';

/** Jarak scroll (px) sampai header hijau penuh di halaman selain Beranda. */
const SOLID_DISTANCE = 140;
/** Seberapa cepat nilai mengejar posisi scroll per frame (kecil = lebih lembut). */
const SMOOTHING = 0.14;
/** Di atas nilai ini header cukup hijau, jadi teks/logo berganti ke putih. */
const LIGHT_AT = 0.7;

/**
 * Halaman selain Beranda: header mulai transparan di puncak halaman lalu perlahan menjadi hijau saat di-scroll
 * (seperti hero di Beranda). Mengisi variabel CSS `--nav-solid` (0 → 1) yang dipakai `.site-header` di index.css,
 * dan mengembalikan `true` begitu header sudah cukup hijau sehingga teks/logo perlu putih.
 *
 * Di Beranda variabel itu diisi oleh HeroMorph, jadi hook ini dimatikan (`enabled = false`).
 * `resetKey` (pathname) membuat nilainya dihitung ulang saat pindah halaman: dimulai dari keadaan halaman
 * sebelumnya lalu mengalir halus ke keadaan halaman baru (yang selalu di-scroll ke atas oleh Layout).
 */
export function useHeaderSolid(enabled: boolean, resetKey: string): boolean {
    const [light, setLight] = useState(false);

    useLayoutEffect(() => {
        if (!enabled) return;
        const root = document.documentElement;
        const target = () => (prefersReducedMotion() ? (window.scrollY > 0 ? 1 : 0) : clamp01(window.scrollY / SOLID_DISTANCE));

        let current = target();
        let isLight = current >= LIGHT_AT;
        let frame = 0;

        const apply = () => {
            root.style.setProperty('--nav-solid', current.toFixed(3));
            const next = current >= LIGHT_AT;
            if (next !== isLight) {
                isLight = next;
                setLight(next);
            }
        };

        const render = () => {
            frame = 0;
            const t = target();
            current = prefersReducedMotion() ? t : current + (t - current) * SMOOTHING;
            if (Math.abs(t - current) < 0.002) current = t;
            apply();
            if (current !== t) frame = requestAnimationFrame(render);
        };
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(render);
        };

        setLight(isLight);
        apply();
        schedule(); // frame berikutnya scroll sudah di-reset ke atas oleh Layout → mengalir halus ke 0
        window.addEventListener('scroll', schedule, { passive: true });
        return () => {
            window.removeEventListener('scroll', schedule);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [enabled, resetKey]);

    return enabled ? light : true;
}