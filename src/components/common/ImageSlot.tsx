import React, { useEffect, useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface ImageSlotProps {
  src?: string;
  alt: string;
  /** Placeholder label, e.g. "[PRODUCT IMAGE]" */
  label: string;
  /** Container sizing (aspect ratio, width, radius) — the slot never changes size when the image is swapped. */
  className?: string;
  fit?: 'cover' | 'contain';
  tone?: 'light' | 'dark';
  labelPosition?: 'center' | 'corner';
  size?: 'sm' | 'md';
  /** Extra classes on the <img> (e.g. hover zoom, blend mode). */
  imgClassName?: string;
  position?: 'center' | 'top';
  /**
   * Natural mode: the image keeps its own aspect ratio (full width, auto height) — nothing is cropped.
   * The placeholder falls back to a 4:5 box while no image is set.
   */
  natural?: boolean;
}

/**
 * Editable image slot. Renders the image when `src` is set,
 * otherwise a placeholder that occupies the exact same box.
 */
export function ImageSlot({
  src,
  alt,
  label,
  className,
  fit = 'cover',
  tone = 'light',
  labelPosition = 'center',
  size = 'md',
  imgClassName = '',
  position = 'center',
  natural = false
}: ImageSlotProps) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  const showImage = !!src && !failed;
  const dark = tone === 'dark';

  if (natural && showImage) {
    return (
      <div className={twMerge('relative overflow-hidden', className)} data-asset-slot={label}>
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`block h-auto w-full ${imgClassName}`} />
      </div>);

  }

  return (
    <div className={twMerge('relative overflow-hidden', natural && 'aspect-[4/5]', className)} data-asset-slot={label}>
      {showImage ?
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`absolute inset-0 h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'} ${
        position === 'top' ? 'object-top' : ''} ${
        imgClassName}`} /> :


      <div
        role="img"
        aria-label={alt || label}
        className={`absolute inset-0 ${dark ? 'bg-forest-dark text-white/50' : 'bg-slot text-slot-ink'}`}>
        
          <div
          className={`absolute rounded-[inherit] border border-dashed ${dark ? 'border-white/20' : 'border-slot-ink/40'} ${size === 'sm' ? 'inset-1' : 'inset-2'}`}
          aria-hidden="true" />
        
          <div
          className={`absolute flex items-center gap-1.5 font-mono uppercase tracking-wider ${size === 'sm' ? 'text-[9px]' : 'text-[11px]'} ${
          labelPosition === 'center' ?
          'inset-0 flex-col justify-center text-center' :
          'bottom-20 right-5 md:bottom-24 md:right-8'}`
          }>
          
            {size === 'md' && <ImageIcon className="h-5 w-5" aria-hidden="true" />}
            <span>{label}</span>
          </div>
        </div>
      }
    </div>);

}