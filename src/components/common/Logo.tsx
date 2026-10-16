import React from 'react';
import { twMerge } from 'tailwind-merge';
import { assets } from '../../data/assets';
import { ImageSlot } from './ImageSlot';

interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
  /** Kelas tambahan untuk <img> (mis. transisi opacity). Blend mode tetap di <img> yang sama. */
  imgClassName?: string;
}

/**
 * default: `mix-blend-multiply` drops the logo file's white background on light surfaces.
 * footer: grayscale + invert turns the dark logo white (and its white background black),
 * then `mix-blend-screen` drops the black so the white logo sits directly on the green footer.
 */
export function Logo({ variant = 'default', className, imgClassName }: LogoProps) {
  const footer = variant === 'footer';
  const asset = footer ? assets.logoFooter : assets.logo;
  return (
    <ImageSlot
      src={asset.src}
      alt={asset.alt}
      label={asset.label}
      fit="contain"
      size="sm"
      tone={footer ? 'dark' : 'light'}
      imgClassName={twMerge(footer ? 'grayscale invert mix-blend-screen' : 'mix-blend-multiply', imgClassName)}
      className={twMerge('h-10 w-24 bg-transparent', className)} />);


}