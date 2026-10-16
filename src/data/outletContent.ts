import type { Facility, InfoItem } from '../types/content';
import { assets } from './assets';
import { localize } from '../i18n/lang';

/** Outlet page copy + the shared "Visit" section used on Home & Outlet. */
const outletContentId = {
  overline: 'Pilang Bango, Madiun • Lokasi & Ruang',
  title: 'Kunjungi Outlet Karpen Coffee',
  description:
    'Suasana tenang berlatar bentang sawah hijau, semilir angin sejuk, dan kereta api yang melintas pelan di Pilangbango, Kota Madiun. Tempat singgah hangat untuk berdiskusi, bekerja, maupun melepas penat bersama kerabat.',
  infoStrip: [
    { label: 'Alamat Outlet', value: 'Jl. Sri Sedani, Madiun' },
    { label: 'Jam Buka Harian', value: 'Setiap hari mulai 10.00 WIB', highlight: true },
    { label: 'Zona Pilihan', value: 'Luar Ruangan, Mezanin, Tepi Rel' },
    { label: 'Akses & Fasilitas', value: 'Wi-Fi Cepat & Musholla' }] as
    InfoItem[],
  visit: {
    overline: 'Lokasi & Ruang',
    title: 'Kunjungi Karpen',
    description: 'Suasana tenang berlatar bentang sawah hijau dan kereta api yang melintas pelan di Pilangbango, Madiun.',
    gallery: assets.gallery,
    galleryNote: '* Klik foto kecil di atas untuk melihat tampilan ruang pada pratinjau utama'
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

export const outletContent = localize(outletContentId, {
  overline: 'Pilang Bango, Madiun • Location & Space',
  title: 'Visit Karpen Coffee Outlet',
  description: 'A calm atmosphere set against green rice fields, a gentle cool breeze, and trains passing slowly through Pilangbango, Madiun City. A warm stop for discussions, work, or unwinding with loved ones.',
  infoStrip: [
    {
      label: 'Outlet Address'
    },
    {
      label: 'Daily Opening Hours',
      value: 'Every day from 10.00 WIB'
    },
    {
      label: 'Seating Zones',
      value: 'Outdoor, Mezzanine, Trackside'
    },
    {
      label: 'Access & Facilities',
      value: 'Fast Wi-Fi & Prayer Room'
    }
  ],
  visit: {
    overline: 'Location & Space',
    title: 'Visit Karpen',
    description: 'A calm atmosphere set against green rice fields and trains passing slowly through Pilangbango, Madiun.',
    galleryNote: '* Click a thumbnail above to see the space in the main preview'
  },
  statusCard: {
    title: 'Today’s Operating Status',
    todayLabel: 'Today’s hours ({day})',
    openNote: 'Closes at {time} WIB',
    closingSoonNote: 'Closes in {minutes} minutes ({time} WIB)',
    openingSoonNote: 'Opens in {minutes} minutes ({time} WIB)',
    closedNote: 'Opens again {day} at {time} WIB',
    liveClockLabel: 'Current time',
    takeawayLabel: 'Takeaway service:',
    addressLabel: 'Address',
    copyAddressLabel: 'Copy Full Address',
    phoneLabel: 'Phone & WhatsApp',
    hoursLabel: 'Full Opening Hours',
    directionsLabel: 'Directions / View Location'
  },
  facilities: {
    overline: 'Visitor Comfort',
    title: 'Complete Facilities at Karpen Coffee',
    description: 'Carefully designed so that every visit feels relaxed, productive, and enjoyable.'
  },
  route: {
    overline: 'Route & Transport',
    title: 'Easy to Reach from Madiun City Center',
    description: 'Only 7 minutes from Madiun Station or 5 minutes from Alun-Alun Madiun towards Pilangbango. Simply follow Jl. Sri Sedani until you find the signature Karpen wooden pavilion beside the rice fields.'
  }
});

const facilitiesId: Facility[] = [
  { icon: 'wifi', title: 'Wi-Fi Berkecepatan Tinggi', description: 'Koneksi stabil dan cepat untuk bekerja, mengerjakan tugas kuliah, atau rapat daring.' },
  { icon: 'plug', title: 'Stopkontak di Tiap Sudut', description: 'Colokan listrik melimpah di area meja mezanin dalam ruangan maupun dek kayu luar ruangan.' },
  { icon: 'landmark', title: 'Musholla Bersih & Sejuk', description: 'Area ibadah yang nyaman, tenang, lengkap dengan tempat wudhu yang bersih dan terawat.' },
  { icon: 'car', title: 'Area Parkir Luas', description: 'Kapasitas parkir roda dua dan roda empat aman dan leluasa dengan pengawasan staf.' }];

export const facilities: Facility[] = localize(facilitiesId, [
  {
    title: 'High-Speed Wi-Fi',
    description: 'A stable, fast connection for working, doing coursework, or online meetings.'
  },
  {
    title: 'Power Outlets in Every Corner',
    description: 'Plenty of power sockets at the indoor mezzanine tables and on the outdoor wooden deck.'
  },
  {
    title: 'Clean & Cool Prayer Room',
    description: 'A comfortable, quiet place of worship, complete with clean and well-kept ablution facilities.'
  },
  {
    title: 'Spacious Parking Area',
    description: 'Safe and roomy parking for motorbikes and cars, with staff supervision.'
  }
]);