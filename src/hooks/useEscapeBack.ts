import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TYPING_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

/** Tekan Esc → kembali ke halaman sebelumnya (atau ke Home kalau tidak ada riwayat). */
export function useEscapeBack() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') return; // di Home tidak ada yang perlu "dikembalikan"

        const onKey = (e: KeyboardEvent) => {
            if (e.key !== 'Escape' || e.defaultPrevented) return;
            if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;

            // Jangan ganggu saat user sedang mengetik (Nama, Alamat, Catatan, kolom cari)
            const el = document.activeElement as HTMLElement | null;
            if (el && (TYPING_TAGS.includes(el.tagName) || el.isContentEditable)) return;

            // Popup dan menu HP sudah menangani Esc sendiri
            if (document.querySelector('[role="dialog"]')) return;
            if (document.querySelector('button[aria-expanded="true"][aria-label="Tutup menu"]')) return;

            const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
            if (idx > 0) navigate(-1);
            else navigate('/');
        };

        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [pathname, navigate]);
}