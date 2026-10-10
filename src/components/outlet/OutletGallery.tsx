import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, ExpandIcon } from 'lucide-react';
import type { GalleryImage } from '../../types/content';
import { ImageSlot } from '../common/ImageSlot';
import { Modal } from '../common/Modal';

interface OutletGalleryProps {
  images: GalleryImage[];
  note?: string;
}

function Caption({ text }: {text: string;}) {
  return (
    <span className="absolute bottom-3 left-3 inline-flex max-w-[85%] items-center gap-1.5 rounded-md bg-white/95 px-3 py-1.5 text-[11px] font-medium text-ink">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
      <span className="truncate">{text}</span>
    </span>);

}

/**
 * Large photo + thumbnails. Tapping a thumbnail swaps it into the large frame;
 * tapping the large photo opens it full-screen (swipe / arrows / ← → keys to browse).
 */
export function OutletGallery({ images, note }: OutletGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const count = images.length;

  const step = useCallback(
    (dir: 1 | -1) => setViewerIndex((i) => i === null ? i : (i + dir + count) % count),
    [count]
  );
  const closeViewer = useCallback(() => setViewerIndex(null), []);

  useEffect(() => {
    if (viewerIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [viewerIndex, step]);

  if (!count) return null;
  const active = images[activeIndex];
  const others = images.map((img, i) => ({ img, i })).filter(({ i }) => i !== activeIndex);
  const viewed = viewerIndex === null ? null : images[viewerIndex];

  return (
    <div>
      <button
        type="button"
        onClick={() => setViewerIndex(activeIndex)}
        aria-label={`Perbesar foto: ${active.caption}`}
        className="group relative block w-full overflow-hidden rounded-2xl text-left transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 motion-reduce:transform-none">
        
        <ImageSlot
          src={active.src}
          alt={active.alt}
          label={active.label}
          className="aspect-[3/2] w-full"
          imgClassName="transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none" />
        
        <Caption text={active.caption} />
        <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white" aria-hidden="true">
          <ExpandIcon className="h-4 w-4" />
        </span>
      </button>

      {others.length > 0 &&
      <ul className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4">
          {others.map(({ img, i }) =>
        <li key={img.label}>
              <button
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Tampilkan ${img.caption}`}
            className="group relative block w-full overflow-hidden rounded-xl transition-[transform,box-shadow] duration-200 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 motion-reduce:transform-none">
            
                <ImageSlot
              src={img.src}
              alt={img.alt}
              label={img.label}
              className="aspect-[16/10] w-full"
              size="sm"
              imgClassName="transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transform-none" />
            
                <Caption text={img.caption} />
              </button>
            </li>
        )}
        </ul>
      }
      {note && <p className="mt-3 text-right text-[11px] italic text-ink-faint">{note}</p>}

      <Modal open={viewed !== null} onClose={closeViewer} title={viewed?.caption ?? 'Foto lokasi'} variant="gallery">
        {viewed && viewerIndex !== null &&
        <figure>
            <motion.div
            key={viewerIndex}
            drag={count > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) step(1);else
              if (info.offset.x > 60) step(-1);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="touch-pan-y">
            
              <img
              src={viewed.src}
              alt={viewed.alt}
              draggable={false}
              className="mx-auto block max-h-[75svh] w-auto max-w-full select-none rounded-xl object-contain" />
            
            </motion.div>
            <figcaption className="mt-3 flex items-center justify-between gap-3 text-sm text-white">
              <span className="min-w-0 truncate">{viewed.caption}</span>
              {count > 1 && <span className="shrink-0 tabular-nums text-white/70">{viewerIndex + 1} / {count}</span>}
            </figcaption>
            {count > 1 &&
          <div className="mt-3 flex justify-center gap-3">
                <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Foto sebelumnya"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-150 hover:bg-white/25">
              
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
              type="button"
              onClick={() => step(1)}
              aria-label="Foto berikutnya"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-150 hover:bg-white/25">
              
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
          }
          </figure>
        }
      </Modal>
    </div>);

}