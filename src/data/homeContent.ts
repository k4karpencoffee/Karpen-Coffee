import type { InfoItem } from '../types/content';
import { assets } from './assets';
import { localize } from '../i18n/lang';

/** Homepage copy. Images come from data/assets.ts. */
const homeContentId = {
  hero: {
    image: assets.hero,
    video: assets.heroVideo,
    topLeft: 'Pilangbango, Madiun — Jawa Timur',
    topRight: 'Sejak 2021 · Tepi Rel & Pemandangan Sawah',
    pill: 'Roastery & Dapur Artisan · Sejak 2021',
    title: 'Karpen Coffee',
    tagline: 'Good coffee, good food, good moments.',
    description:
      'Diseduh dekat dari rumah di Madiun. Ruang arsitektural yang tenang, tempat warisan pertukangan kayu bertemu budaya kopi Indonesia masa kini.',
    secondaryCta: { label: 'Lihat Promo', to: '/promo' },
    primaryCta: { label: 'Kunjungi Karpen', to: '/outlet' },
    scrollLabel: 'Gulir untuk menjelajah',
    bottomRight: 'Madiun, Jawa Timur'
  },
  highlights: [
    { label: 'Asal Kopi', value: 'Ijen & Dampit, Jawa Timur' },
    { label: 'Proses', value: 'Kombinasi Washed & Natural' },
    { label: 'Suasana', value: 'Hamparan Sawah & Ketenangan Tepi Rel' },
    { label: 'Jam Buka', value: 'Setiap hari mulai 10.00 WIB' }] as
    InfoItem[],
  storyTeaser: {
    image: assets.storyTeaser,
    captionLabel: 'Pondasi Kami',
    caption: 'Keahlian tukang kayu berpadu dengan ketenangan ruang seduh Madiun.',
    overline: 'Cerita Karpen / Cerita Kami',
    title: 'Perjalanan Kami: 2021 – 2026',
    subtitle: 'Dari Coffee Shop Kecil Menjadi Rumah yang Terus Bertumbuh di Madiun.',
    paragraphs: [
      'Setiap perjalanan punya cerita. Karpen Coffee bukan hanya tentang kopi, makanan, atau tempat untuk berkumpul. Karpen adalah perjalanan tentang belajar, bertumbuh, membangun sistem, dan menciptakan pengalaman yang membuat setiap pelanggan ingin kembali.',
      'Bermula di tahun 2021 dari mimpi sederhana sebuah coffee shop kecil, kini Karpen terus bertumbuh memperkuat sistem, menjaga kualitas rasa, dan menghadirkan keramahan tulus bagi siapa pun yang singgah di tepi sawah Madiun.'],

    stats: [
      { value: '2021', label: 'Tahun Berdiri di Madiun' },
      { value: '2026', label: 'Babak Selanjutnya' }],

    cta: { label: 'Lihat Selengkapnya Cerita Kami', to: '/our-story' }
  },
  featured: {
    overline: 'Favorit Karpen / Menu Unggulan',
    title: 'Paling Dicintai Pengunjung',
    description: 'Pilihan terbaik yang paling dicintai pengunjung kami setiap hari. Diseduh dan dimasak dengan bahan segar berkualitas.',
    ctaLabel: 'Lihat Menu Lengkap'
  },
  /** Same content as the "Student Deals" promo on the Promo page (data/promos.ts). */
  promoHighlight: {
    image: { ...assets.promoHighlight, src: "/promo_student_poster.jpg", alt: 'Poster promo Diskon Pelajar 20% Semua Menu Karpen Coffee' },
    badge: 'Promo Diskon Pelajar',
    label: 'Spesial Pelajar & Kampus',
    title: 'Diskon Pelajar 20% Semua Menu',
    description:
      'Tunjukkan Kartu Pelajar atau Kartu Mahasiswa aktifmu saat memesan di kasir. Dapatkan diskon 20% untuk semua sajian makanan dan minuman kopi Karpen.',
    priceLabel: 'Diskon',
    /** Shown instead of a promo/normal price pair. */
    priceText: '20% Semua Menu',
    periodLabel: 'Syarat Berlaku',
    period: 'Kartu Pelajar / Mahasiswa aktif • Makan di Tempat Saja',
    cta: { label: 'Lihat Selengkapnya', to: '/promo' }
  }
};

export const homeContent = localize(homeContentId, {
  hero: {
    topLeft: 'Pilangbango, Madiun — East Java',
    topRight: 'Est. 2021 · Trackside & Rice-Field Views',
    pill: 'Roastery & Artisan Kitchen · Est. 2021',
    description: 'Brewed close to home in Madiun. A calm architectural space where carpentry heritage meets contemporary Indonesian coffee culture.',
    secondaryCta: {
      label: 'View Promos'
    },
    primaryCta: {
      label: 'Visit Karpen'
    },
    scrollLabel: 'Scroll to explore',
    bottomRight: 'Madiun, East Java'
  },
  highlights: [
    {
      label: 'Origin',
      value: 'Ijen & Dampit, East Java'
    },
    {
      label: 'Process',
      value: 'Washed & Natural Hybrid'
    },
    {
      label: 'Ambience',
      value: 'Lush Rice Fields & Trackside Calm'
    },
    {
      label: 'Hours',
      value: 'Every day from 10.00 WIB'
    }
  ],
  storyTeaser: {
    captionLabel: 'Our Foundation',
    caption: 'Carpenter craftsmanship meets the calm of a Madiun brewing space.',
    overline: 'Karpen Story / Our Story',
    title: 'Our Journey: 2021 – 2026',
    subtitle: 'From a Small Coffee Shop to a Growing Home in Madiun.',
    paragraphs: [
      'Every journey has a story. Karpen Coffee is not only about coffee, food, or a place to gather. Karpen is a journey of learning, growing, building systems, and creating experiences that make every guest want to come back.',
      'Beginning in 2021 from the simple dream of a small coffee shop, Karpen keeps growing: strengthening its systems, protecting the quality of its flavors, and offering sincere hospitality to everyone who stops by beside the rice fields of Madiun.'
    ],
    stats: [
      {
        label: 'Established in Madiun'
      },
      {
        label: 'The Next Chapter'
      }
    ],
    cta: {
      label: 'Read Our Full Story'
    }
  },
  featured: {
    overline: 'Karpen Favorites / Featured Menu',
    title: 'Most Loved by Our Guests',
    description: 'The best picks our guests love every single day. Brewed and cooked with fresh, quality ingredients.',
    ctaLabel: 'View Full Menu'
  },
  promoHighlight: {
    image: {
      alt: 'Promo poster: 20% student discount on all menu at Karpen Coffee'
    },
    badge: 'Student Discount Promo',
    label: 'Student & Campus Special',
    title: '20% Student Discount on All Menu',
    description: 'Show your active Student ID or University ID when ordering at the cashier. Get 20% off all Karpen food and coffee drinks.',
    priceLabel: 'Discount',
    priceText: '20% All Menu',
    periodLabel: 'Terms Apply',
    period: 'Active Student / University ID • Dine-In Only',
    cta: {
      label: 'Learn More'
    }
  }
});