import type { Promo, PromoFilter, Step } from '../types/content';
import { assets } from './assets';

/**
 * ============================================================
 *  PROMO DATA — page copy, filters, promo cards & claim steps
 * ============================================================
 *  `poster`: path/URL (see data/assets.ts); '' = placeholder.
 *  `filterId` must match an id in `promoFilters`.
 */

export const promoPageContent = {
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
  posterHint: 'Double click poster',
  zoomLabel: 'Perbesar',
  emptyLabel: 'Belum ada promo untuk kategori ini.',
  steps: {
    overline: 'Panduan Pengunjung',
    title: 'Cara Mudah Klaim Promo di Karpen',
    description: 'Dapatkan santapan istimewa di tengah sejuknya suasana sawah Pilangbango dalam 3 tahap praktis.'
  },
  cta: {
    overline: 'Ruang Santai & WFC Madiun',
    title: 'Nikmati Kopi Pilihan & Suasana Asri Pilangbango',
    description:
    'Koneksi Wi-Fi kencang, stopkontak memadai di setiap sudut kayu jati, dan semilir angin persawahan membuat produktivitas dan momen santai Anda kian berharga.',
    mapsLabel: 'Buka di Google Maps'
  }
};

export const promoFilters: PromoFilter[] = [
{ id: 'all', label: 'Semua Promo' },
{ id: 'lunch', label: 'Paket Lunch & Dine-in' },
{ id: 'weekend', label: 'Spesial Weekend (TGIF)' },
{ id: 'student', label: 'Student Deals (Pelajar)' }];


export const promos: Promo[] = [
{
  id: 'tgif-1',
  filterId: 'weekend',
  activeDays: [5], // Jumat
  poster: assets.promo.tgif1,
  schedule: 'Jumat • 11.00 – 16.00',
  badge: 'Only 28K',
  category: 'Spesial Hari Jumat',
  subCategory: 'Dine-in Hemat',
  title: 'TGI Friday Package 1',
  description:
  'Jadikan istirahat siang hari Jumat makin berkesan. Pilih Mie Karpen Goreng atau Nasi Telur Mattah lengkap dengan Lemonade / Lemon Tea segar!',
  items: [
  { name: 'Mie Karpen Goreng + Lemonade / Lemon Tea', price: 28000 },
  { name: 'Nasi Telur Mattah + Lemonade / Lemon Tea', price: 28000 }],

  validity: 'Jumat, 11:00 – 16:00 WIB',
  serviceType: 'Dine In Only',
  terms: [
  'Berlaku setiap hari Jumat pukul 11.00 – 16.00 WIB.',
  'Khusus untuk makan di tempat (dine-in only).',
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
  badge: 'Only 62K',
  category: 'Spesial Jumat Malam',
  subCategory: 'Paket Berdua',
  title: 'TGI Friday Package 2',
  description:
  'Lanjutkan Jumat sore hingga malam bersama teman. Paket berdua berisi 2 hidangan dan 2 Lemon Tea segar dalam satu harga hemat.',
  items: [
  { name: 'Paket A', detail: '2 Mie Karpen Goreng + Chicken Pop + 2 Lemon Tea', price: 62000 },
  { name: 'Paket B', detail: '2 Nasi Chicken Saus + Telur + 2 Lemon Tea', price: 62000 }],

  validity: 'Jumat, 16:00 – 21:00 WIB',
  serviceType: 'Dine In Only',
  terms: [
  'Berlaku setiap hari Jumat pukul 16.00 – 21.00 WIB.',
  'Khusus untuk makan di tempat (dine-in only).',
  'Satu paket untuk dua orang.',
  'Tidak dapat digabung dengan promo lainnya.'],

  ctaLabel: 'Klaim Promo'
},
{
  id: 'lunch-package',
  filterId: 'lunch',
  poster: assets.promo.lunch,
  schedule: 'Setiap Hari • 10.00 – 14.00',
  badge: 'Start 32K',
  category: 'Paket Siang Kenyang',
  subCategory: 'Daily Meal Combo',
  title: 'Lunch Package Karpen',
  description:
  'Menu makan siang komplit hidangan utama lezat berpadu minuman dingin penyegar, cocok untuk jeda kerja maupun rehat kuliah.',
  items: [
  { name: 'Paket A', detail: 'Nasgor Asin / Friedchick BBQ + Ichigo Tea', price: 32000 },
  { name: 'Paket B', detail: 'Curry Friedrice Scramble Egg / Nasi Gila + Lemonade', price: 36000 }],

  validity: 'Everyday 10.00 to 14.00 WIB',
  serviceType: 'Dine-in & Takeaway',
  terms: [
  'Berlaku setiap hari pukul 10.00 – 14.00 WIB.',
  'Berlaku untuk dine-in maupun takeaway.',
  'Pilihan menu dalam paket tidak dapat diganti.'],

  ctaLabel: 'Pesan Paket'
},
{
  id: 'student-deals',
  filterId: 'student',
  poster: assets.promo.student,
  schedule: 'Pelajar & Mahasiswa',
  badge: '20% Off All',
  category: 'Spesial Pelajar & Kampus',
  subCategory: 'Tunjukkan ID Aktif',
  title: 'Diskon Pelajar 20% All Menu',
  description:
  'Tunjukkan Kartu Pelajar atau Kartu Mahasiswa aktifmu saat order kasir. Dapatkan diskon 20% untuk semua sajian makanan dan minuman kopi Karpen.',
  note: {
    title: 'Ketentuan Cepat:',
    text: '1 kartu = 1 orang, dine-in only, kartu wajib ditunjukkan saat pemesanan sebelum pembayaran.'
  },
  validity: 'Kartu Pelajar / Mahasiswa Fisik & Digital',
  serviceType: 'Dine In Only',
  terms: [
  'Berlaku khusus pelajar/mahasiswa dengan Kartu Pelajar/Mahasiswa aktif.',
  '1 kartu = 1 orang dan diskon hanya untuk pesanan pemilik kartu.',
  'Tidak berlaku untuk pesanan teman, keluarga, atau rombongan.',
  'Kartu wajib ditunjukkan saat order dan sesuai dengan identitas pemiliknya.',
  'Berlaku dine in only dan tidak dapat digabung dengan promo lainnya.',
  'Karpen berhak menolak promo apabila ditemukan penyalahgunaan.'],

  ctaLabel: 'Klaim Diskon'
}];


export const promoSteps: Step[] = [
{
  title: 'Kunjungi Karpen Coffee Madiun',
  description:
  'Datang langsung ke outlet kami di Jl. Sri Sedani, Pilangbango, Madiun. Nikmati semilir angin persawahan dan arsitektur joglo modern yang tenang.'
},
{
  title: 'Pilih & Sebutkan Menu Promo',
  description:
  'Sebutkan nama paket promo kepada barista kasir kami: TGI Friday Package 1/2, Lunch Package A/B, atau Student Deals 20%.'
},
{
  title: 'Tunjukkan ID atau Bukti Promo',
  description:
  'Tunjukkan Kartu Pelajar/Mahasiswa aktif untuk promo pelajar. Pesanan Anda akan langsung disajikan segar dengan harga hemat istimewa!'
}];