import type { Promo, PromoFilter, Step } from '../types/content';
import { assets } from './assets';
import { localize } from '../i18n/lang';

/**
 * ============================================================
 *  PROMO DATA — page copy, filters, promo cards & claim steps
 * ============================================================
 *  `poster`: path/URL (see data/assets.ts); '' = placeholder.
 *  `filterId` must match an id in `promoFilters`.
 */

const promoPageContentId = {
  breadcrumb: 'Promo & Penawaran',
  pill: 'Promo Spesial Outlet Pilangbango Madiun',
  title: 'Promo & Penawaran Spesial',
  subtitle:
    'Paket hemat makan siang, spesial hari Jumat, hingga diskon pelajar — nikmati semuanya langsung di Karpen Coffee Pilangbango, Madiun.',
  /** Counted automatically from each promo's `activeDays` / dates (WIB). */
  activeTemplate: '{count} Penawaran aktif berlaku hari ini',
  noneActiveLabel: 'Belum ada penawaran aktif hari ini',
  /** Per-section count, e.g. "Spesial Weekend (TGIF): 2" */
  sectionCountTemplate: '{label}: {count}',
  termsLabel: 'S&K Lengkap',
  termsTitle: 'Syarat & Ketentuan',
  posterHint: 'Klik dua kali poster',
  zoomLabel: 'Perbesar',
  emptyLabel: 'Belum ada promo untuk kategori ini.',
  steps: {
    overline: 'Panduan Pengunjung',
    title: 'Cara Mudah Klaim Promo di Karpen',
    description: 'Dapatkan santapan istimewa di tengah sejuknya suasana sawah Pilangbango dalam 3 tahap praktis.'
  },
  cta: {
    overline: 'Ruang Santai & Tempat Kerja Madiun',
    title: 'Nikmati Kopi Pilihan & Suasana Asri Pilangbango',
    description:
      'Koneksi Wi-Fi kencang, stopkontak memadai di setiap sudut kayu jati, dan semilir angin persawahan membuat produktivitas dan momen santai Anda kian berharga.',
    mapsLabel: 'Buka di Google Maps'
  }
};

export const promoPageContent = localize(promoPageContentId, {
  breadcrumb: 'Promos & Offers',
  pill: 'Special Promos at the Pilangbango Madiun Outlet',
  title: 'Special Promos & Offers',
  subtitle: 'Value lunch packages, Friday specials, and student discounts — enjoy them all at Karpen Coffee Pilangbango, Madiun.',
  activeTemplate: '{count} active offers valid today',
  noneActiveLabel: 'No active offers today',
  termsLabel: 'Full Terms',
  termsTitle: 'Terms & Conditions',
  posterHint: 'Double-click the poster',
  zoomLabel: 'Zoom',
  emptyLabel: 'No promos in this category yet.',
  steps: {
    overline: 'Visitor Guide',
    title: 'Easy Steps to Claim Promos at Karpen',
    description: 'Enjoy special treats in the cool rice-field atmosphere of Pilangbango in 3 easy steps.'
  },
  cta: {
    overline: 'Relaxing & Working Space in Madiun',
    title: 'Enjoy Selected Coffee & the Serene Pilangbango Atmosphere',
    description: 'Fast Wi-Fi, plenty of power outlets in every teak-wood corner, and the breeze from the rice fields make your productivity and relaxing moments even more worthwhile.',
    mapsLabel: 'Open in Google Maps'
  }
});

const promoFiltersId: PromoFilter[] = [
  { id: 'all', label: 'Semua Promo' },
  { id: 'lunch', label: 'Paket Makan Siang' },
  { id: 'weekend', label: 'Spesial Jumat (TGIF)' },
  { id: 'student', label: 'Promo Pelajar' }];

export const promoFilters: PromoFilter[] = localize(promoFiltersId, [
  {
    label: 'All Promos'
  },
  {
    label: 'Lunch Package'
  },
  {
    label: 'Friday Special (TGIF)'
  },
  {
    label: 'Student Promo'
  }
]);


const promosId: Promo[] = [
  {
    id: 'tgif-1',
    filterId: 'weekend',
    activeDays: [5], // Jumat
    poster: assets.promo.tgif1,
    schedule: 'Jumat • 11.00 – 16.00',
    badge: 'Hanya 28K',
    category: 'Spesial Hari Jumat',
    subCategory: 'Hemat Makan di Tempat',
    title: 'TGI Friday Package 1',
    description:
      'Jadikan istirahat siang hari Jumat makin berkesan. Pilih Mie Karpen Goreng atau Nasi Telur Mattah lengkap dengan Lemonade / Lemon Tea segar!',
    items: [
      { name: 'Mie Karpen Goreng + Lemonade / Lemon Tea', price: 28000 },
      { name: 'Nasi Telur Mattah + Lemonade / Lemon Tea', price: 28000 }],

    validity: 'Jumat, 11:00 – 16:00 WIB',
    serviceType: 'Makan di Tempat Saja',
    terms: [
      'Berlaku setiap hari Jumat pukul 11.00 – 16.00 WIB.',
      'Khusus untuk makan di tempat.',
      'Tidak dapat digabung dengan promo lainnya.',
      'Selama persediaan masih ada.'],

    ctaLabel: 'Klaim Promo'
  },
  {
    id: 'tgif-2',
    filterId: 'weekend',
    activeDays: [5], // Jumat
    poster: assets.promo.tgif2,
    schedule: 'Jumat • 16.00 – 21.00',
    badge: 'Hanya 62K',
    category: 'Spesial Jumat Malam',
    subCategory: 'Paket Berdua',
    title: 'TGI Friday Package 2',
    description:
      'Lanjutkan Jumat sore hingga malam bersama teman. Paket berdua berisi 2 hidangan dan 2 Lemon Tea segar dalam satu harga hemat.',
    items: [
      { name: 'Paket A', detail: '2 Mie Karpen Goreng + Chicken Pop + 2 Lemon Tea', price: 62000 },
      { name: 'Paket B', detail: '2 Nasi Chicken Saus + Telur + 2 Lemon Tea', price: 62000 }],

    validity: 'Jumat, 16:00 – 21:00 WIB',
    serviceType: 'Makan di Tempat Saja',
    terms: [
      'Berlaku setiap hari Jumat pukul 16.00 – 21.00 WIB.',
      'Khusus untuk makan di tempat.',
      'Satu paket untuk dua orang.',
      'Tidak dapat digabung dengan promo lainnya.'],

    ctaLabel: 'Klaim Promo'
  },
  {
    id: 'lunch-package',
    filterId: 'lunch',
    poster: assets.promo.lunch,
    schedule: 'Setiap Hari • 10.00 – 14.00',
    badge: 'Mulai 32K',
    category: 'Paket Siang Kenyang',
    subCategory: 'Paket Menu Harian',
    title: 'Lunch Package Karpen',
    description:
      'Menu makan siang komplit hidangan utama lezat berpadu minuman dingin penyegar, cocok untuk jeda kerja maupun rehat kuliah.',
    items: [
      { name: 'Paket A', detail: 'Nasgor Asin / Friedchick BBQ + Ichigo Tea', price: 32000 },
      { name: 'Paket B', detail: 'Curry Friedrice Scramble Egg / Nasi Gila + Lemonade', price: 36000 }],

    validity: 'Setiap Hari, 10.00 – 14.00 WIB',
    serviceType: 'Makan di Tempat & Bawa Pulang',
    terms: [
      'Berlaku setiap hari pukul 10.00 – 14.00 WIB.',
      'Berlaku untuk makan di tempat maupun bawa pulang.',
      'Pilihan menu dalam paket tidak dapat diganti.'],

    ctaLabel: 'Pesan Paket'
  },
  {
    id: 'student-deals',
    filterId: 'student',
    poster: assets.promo.student,
    schedule: 'Pelajar & Mahasiswa',
    badge: 'Diskon 20%',
    category: 'Spesial Pelajar & Kampus',
    subCategory: 'Tunjukkan Kartu Aktif',
    title: 'Diskon Pelajar 20% Semua Menu',
    description:
      'Tunjukkan Kartu Pelajar atau Kartu Mahasiswa aktifmu saat memesan di kasir. Dapatkan diskon 20% untuk semua sajian makanan dan minuman kopi Karpen.',
    note: {
      title: 'Ketentuan Cepat:',
      text: '1 kartu = 1 orang, khusus makan di tempat, kartu wajib ditunjukkan saat pemesanan sebelum pembayaran.'
    },
    validity: 'Kartu Pelajar / Mahasiswa Fisik & Digital',
    serviceType: 'Makan di Tempat Saja',
    terms: [
      'Berlaku khusus pelajar/mahasiswa dengan Kartu Pelajar/Mahasiswa aktif.',
      '1 kartu = 1 orang dan diskon hanya untuk pesanan pemilik kartu.',
      'Tidak berlaku untuk pesanan teman, keluarga, atau rombongan.',
      'Kartu wajib ditunjukkan saat memesan dan sesuai dengan identitas pemiliknya.',
      'Berlaku khusus makan di tempat dan tidak dapat digabung dengan promo lainnya.',
      'Karpen berhak menolak promo apabila ditemukan penyalahgunaan.'],

    ctaLabel: 'Klaim Diskon'
  }];

export const promos: Promo[] = localize(promosId, [
  {
    schedule: 'Friday • 11.00 – 16.00',
    badge: 'Only 28K',
    category: 'Friday Special',
    subCategory: 'Dine-In Savings',
    description: 'Make your Friday lunch break more memorable. Choose Mie Karpen Goreng or Nasi Telur Mattah with a fresh Lemonade / Lemon Tea!',
    validity: 'Friday, 11:00 – 16:00 WIB',
    serviceType: 'Dine-In Only',
    terms: [
      'Valid every Friday from 11.00 – 16.00 WIB.',
      'Dine-in only.',
      'Cannot be combined with other promos.',
      'While stocks last.'
    ],
    ctaLabel: 'Claim Promo'
  },
  {
    schedule: 'Friday • 16.00 – 21.00',
    badge: 'Only 62K',
    category: 'Friday Night Special',
    subCategory: 'Sharing for Two',
    description: 'Carry your Friday evening on with friends. A package for two with 2 dishes and 2 fresh Lemon Teas at one great price.',
    items: [
      {
        name: 'Package A'
      },
      {
        name: 'Package B'
      }
    ],
    validity: 'Friday, 16:00 – 21:00 WIB',
    serviceType: 'Dine-In Only',
    terms: [
      'Valid every Friday from 16.00 – 21.00 WIB.',
      'Dine-in only.',
      'One package serves two people.',
      'Cannot be combined with other promos.'
    ],
    ctaLabel: 'Claim Promo'
  },
  {
    schedule: 'Every Day • 10.00 – 14.00',
    badge: 'From 32K',
    category: 'Hearty Lunch Package',
    subCategory: 'Daily Meal Combo',
    description: 'A complete lunch: a delicious main dish paired with a refreshing cold drink, perfect for a work break or a pause between classes.',
    items: [
      {
        name: 'Package A'
      },
      {
        name: 'Package B'
      }
    ],
    validity: 'Every Day, 10.00 – 14.00 WIB',
    serviceType: 'Dine-In & Takeaway',
    terms: [
      'Valid every day from 10.00 – 14.00 WIB.',
      'Valid for dine-in and takeaway.',
      'The menu choices in a package cannot be substituted.'
    ],
    ctaLabel: 'Order Package'
  },
  {
    schedule: 'Students & University Students',
    badge: '20% Off',
    category: 'Student & Campus Special',
    subCategory: 'Show Your Active Card',
    title: '20% Student Discount on All Menu',
    description: 'Show your active Student ID or University ID at the cashier when ordering. Get 20% off all Karpen food and coffee.',
    note: {
      title: 'Quick Rules:',
      text: '1 card = 1 person, dine-in only, and the card must be shown when ordering, before payment.'
    },
    validity: 'Physical & Digital Student / University ID',
    serviceType: 'Dine-In Only',
    terms: [
      'Valid for students and university students with an active Student/University ID.',
      '1 card = 1 person, and the discount applies only to the cardholder’s own order.',
      'Not valid for orders of friends, family, or groups.',
      'The card must be shown when ordering and must match the owner’s identity.',
      'Dine-in only and cannot be combined with other promos.',
      'Karpen reserves the right to refuse the promo if misuse is found.'
    ],
    ctaLabel: 'Claim Discount'
  }
]);


const promoStepsId: Step[] = [
  {
    title: 'Kunjungi Karpen Coffee Madiun',
    description:
      'Datang langsung ke outlet kami di Jl. Sri Sedani, Pilangbango, Madiun. Nikmati semilir angin persawahan dan arsitektur joglo modern yang tenang.'
  },
  {
    title: 'Pilih & Sebutkan Menu Promo',
    description:
      'Sebutkan nama paket promo kepada barista kasir kami: TGI Friday Package 1/2, Lunch Package A/B, atau Diskon Pelajar 20%.'
  },
  {
    title: 'Tunjukkan Kartu atau Bukti Promo',
    description:
      'Tunjukkan Kartu Pelajar/Mahasiswa aktif untuk promo pelajar. Pesanan Anda akan langsung disajikan segar dengan harga hemat istimewa!'
  }];

export const promoSteps: Step[] = localize(promoStepsId, [
  {
    title: 'Visit Karpen Coffee Madiun',
    description: 'Come to our outlet at Jl. Sri Sedani, Pilangbango, Madiun. Enjoy the breeze from the rice fields and the calm modern joglo architecture.'
  },
  {
    title: 'Choose & Mention the Promo',
    description: 'Tell our cashier barista the promo package name: TGI Friday Package 1/2, Lunch Package A/B, or the 20% Student Discount.'
  },
  {
    title: 'Show Your Card or Proof of Promo',
    description: 'Show an active Student/University ID for the student promo. Your order will be served fresh right away at a special saving price!'
  }
]);