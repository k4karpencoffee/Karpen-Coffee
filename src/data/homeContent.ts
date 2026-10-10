import type { InfoItem } from '../types/content';
import { assets } from './assets';

/** Homepage copy. Images come from data/assets.ts. */
export const homeContent = {
  hero: {
    image: assets.hero,
    video: assets.heroVideo,
    topLeft: 'Pilangbango, Madiun — East Java',
    topRight: 'Est. 2021 · Trackside & Sawah View',
    pill: 'Artisanal Roastery & Kitchen · Est. 2021',
    title: 'Karpen Coffee',
    tagline: 'Good coffee, good food, good moments.',
    description:
    'Brewed close to home in Madiun. A calm architectural space where carpentry heritage meets contemporary Indonesian coffee culture.',
    secondaryCta: { label: 'Lihat Promo', to: '/promo' },
    primaryCta: { label: 'Kunjungi Karpen', to: '/outlet' },
    scrollLabel: 'Scroll to explore',
    bottomRight: 'Madiun, Jawa Timur'
  },
  highlights: [
  { label: 'Origin', value: 'Ijen & Dampit, East Java' },
  { label: 'Process', value: 'Washed & Natural Hybrid' },
  { label: 'Ambience', value: 'Lush Sawah & Trackside Calm' },
  { label: 'Hours', value: 'Setiap hari mulai 10.00 WIB' }] as
  InfoItem[],
  storyTeaser: {
    image: assets.storyTeaser,
    captionLabel: 'Pondasi Kami',
    caption: 'Keahlian tukang kayu berpadu dengan ketenangan ruang seduh Madiun.',
    overline: 'Cerita Karpen / Cerita Kami',
    title: 'Our Journey: 2021 – 2026',
    subtitle: 'From a Small Coffee Shop to a Growing Home in Madiun.',
    paragraphs: [
    'Setiap perjalanan punya cerita. Karpen Coffee bukan hanya tentang kopi, makanan, atau tempat untuk berkumpul. Karpen adalah perjalanan tentang belajar, bertumbuh, membangun sistem, dan menciptakan pengalaman yang membuat setiap pelanggan ingin kembali.',
    'Bermula di tahun 2021 dari mimpi sederhana sebuah coffeeshop kecil, kini Karpen terus bertumbuh memperkuat sistem, menjaga kualitas rasa, dan menghadirkan keramahan tulus bagi siapa pun yang singgah di tepi sawah Madiun.'],

    stats: [
    { value: '2021', label: 'Tahun Berdiri di Madiun' },
    { value: '2026', label: 'The Next Chapter' }],

    cta: { label: 'Lihat Selengkapnya Cerita Kami', to: '/our-story' }
  },
  featured: {
    overline: 'Favorit Karpen / Featured Menu',
    title: 'Paling Dicintai Pengunjung',
    description: 'Pilihan terbaik yang paling dicintai pengunjung kami setiap hari. Diseduh dan dimasak dengan bahan segar berkualitas.',
    ctaLabel: 'Lihat Menu Lengkap'
  },
  /** Same content as the "Student Deals" promo on the Promo page (data/promos.ts). */
  promoHighlight: {
    image: { ...assets.promoHighlight, src: "/promo_student_poster.jpg", alt: 'Poster promo Diskon Pelajar 20% All Menu Karpen Coffee' },
    badge: 'Promo Diskon Pelajar',
    label: 'Spesial Pelajar & Kampus',
    title: 'Diskon Pelajar 20% All Menu',
    description:
    'Tunjukkan Kartu Pelajar atau Kartu Mahasiswa aktifmu saat order kasir. Dapatkan diskon 20% untuk semua sajian makanan dan minuman kopi Karpen.',
    priceLabel: 'Diskon',
    /** Shown instead of a promo/normal price pair. */
    priceText: '20% All Menu',
    periodLabel: 'Syarat Berlaku',
    period: 'Kartu Pelajar / Mahasiswa aktif • Dine In Only',
    cta: { label: 'Lihat Selengkapnya', to: '/promo' }
  }
};