import type { Facility, InfoItem } from '../types/content';
import { assets } from './assets';

/** Outlet page copy + the shared "Visit" section used on Home & Outlet. */
export const outletContent = {
  overline: 'Pilang Bango, Madiun • Lokasi & Ruang',
  title: 'Kunjungi Outlet Karpen Coffee',
  description:
  'Suasana tenang berlatar bentang sawah hijau, semilir angin sejuk, dan kereta api yang melintas pelan di Pilangbango, Kota Madiun. Tempat singgah hangat untuk berdiskusi, bekerja, maupun melepas penat bersama kerabat.',
  infoStrip: [
  { label: 'Alamat Outlet', value: 'Jl. Sri Sedani, Madiun' },
  { label: 'Jam Buka Harian', value: 'Setiap hari mulai 10.00 WIB', highlight: true },
  { label: 'Zona Pilihan', value: 'Outdoor, Mezanin, Trackside' },
  { label: 'Akses & Fasilitas', value: 'Wi-Fi Cepat & Musholla' }] as
  InfoItem[],
  visit: {
    overline: 'Lokasi & Ruang',
    title: 'Kunjungi Karpen',
    description: 'Suasana tenang berlatar bentang sawah hijau dan kereta api yang melintas pelan di Pilangbango, Madiun.',
    gallery: assets.gallery,
    galleryNote: '* Klik foto kecil di atas untuk melihat tampilan ruang pada preview utama'
  },
  statusCard: {
    title: 'Status Operasional Hari Ini',
    todayLabel: 'Jam hari ini ({day})',
    /** Variables: {time} {minutes} {day} — filled live from the schedule in siteConfig.hours */
    openNote: 'Tutup pukul {time} WIB',
    closingSoonNote: 'Tutup dalam {minutes} menit ({time} WIB)',
    openingSoonNote: 'Buka dalam {minutes} menit ({time} WIB)',
    closedNote: 'Buka kembali {day} pukul {time} WIB',
    liveClockLabel: 'Waktu sekarang',
    takeawayLabel: 'Layanan Bawa Pulang:',
    addressLabel: 'Alamat',
    copyAddressLabel: 'Salin Alamat Lengkap',
    phoneLabel: 'Telepon & WhatsApp',
    hoursLabel: 'Jam Operasional Lengkap',
    directionsLabel: 'Petunjuk Arah / Lihat Lokasi'
  },
  facilities: {
    overline: 'Kenyamanan Pengunjung',
    title: 'Fasilitas Lengkap di Karpen Coffee',
    description: 'Dirancang cermat untuk memastikan setiap saat berkunjung terasa santai, produktif, dan menyenangkan.'
  },
  route: {
    overline: 'Rute & Transportasi',
    title: 'Mudah Dijangkau dari Pusat Kota Madiun',
    description:
    'Hanya 7 menit dari Stasiun Madiun atau 5 menit dari Alun-Alun Madiun ke arah Pilangbango. Cukup ikuti arah jalur Jl. Sri Sedani hingga menemukan bangunan paviliun kayu khas Karpen di sisi sawah.'
  }
};

export const facilities: Facility[] = [
{ icon: 'wifi', title: 'Wi-Fi Berkecepatan Tinggi', description: 'Koneksi stabil dan cepat untuk bekerja, mengerjakan tugas kuliah, atau meeting daring.' },
{ icon: 'plug', title: 'Stopkontak di Tiap Sudut', description: 'Colokan listrik melimpah di area meja mezanin indoor maupun dek outdoor kayu.' },
{ icon: 'landmark', title: 'Musholla Bersih & Sejuk', description: 'Area ibadah yang nyaman, tenang, lengkap dengan tempat wudhu yang bersih dan terawat.' },
{ icon: 'car', title: 'Area Parkir Luas', description: 'Kapasitas parkir roda dua dan roda empat aman dan leluasa dengan pengawasan staf.' }];