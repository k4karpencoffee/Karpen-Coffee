import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  /** dialog = white card · media = portrait poster · gallery = wide photo viewer */
  variant?: 'dialog' | 'media' | 'gallery';
}

export function Modal({ open, onClose, title, children, variant = 'dialog' }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

  // Rendered into <body> so a transformed/filtered/overflow-hidden parent (e.g. a hovering product card)
  // can never trap, clip or shake the fixed overlay.
  return createPortal(
    <AnimatePresence>
      {open &&
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
        
          <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className={
          variant === 'media' ?
          'relative mt-12 w-full max-w-md' :
          variant === 'gallery' ?
          'relative mt-12 w-full max-w-5xl' :
          'relative max-h-[85svh] w-full max-w-lg overflow-y-auto overscroll-contain rounded-2xl bg-white p-6 shadow-xl md:p-8'
          }>
          
            <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className={`absolute z-10 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 ${
            variant === 'dialog' ? 'right-4 top-4 text-ink-muted hover:bg-paper' : '-top-12 right-0 bg-white/15 text-white hover:bg-white/25'}`
            }>
            
              <XIcon className="h-5 w-5" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>,
    document.body
  );
}