import type { Faq, FaqCategory } from '../types/content';

/**
 * ============================================================
 *  FAQ DATA — add, remove or edit questions here
 * ============================================================
 *  `icon` options: clock, map-pin, coffee, star, trees, users, laptop,
 *  shopping-bag, calendar, phone, wifi, plug, landmark, car, help
 */

export const faqPageContent = {
  pill: 'Tanya Jawab / Help & FAQ',
  title: 'Frequently Asked Questions',
  description:
  'Pertanyaan yang sering diajukan seputar pengalaman menikmati kopi, hidangan, reservasi, dan suasana di Karpen Coffee Madiun.',
  help: {
    overline: 'Bantuan Tambahan',
    title: 'Masih punya pertanyaan lain?',
    description:
    'Tim Karpen Coffee siap menyambut dan menjawab pertanyaan Anda seputar pesanan khusus, kemitraan, ataupun ketersediaan ruang kumpul.',
    whatsappLabel: 'WhatsApp Kami'
  }
};

export const faqCategories: FaqCategory[] = [
{ id: 'all', label: 'Semua Pertanyaan' },
{ id: 'hours', label: 'Jam & Lokasi' },
{ id: 'menu', label: 'Menu & Rekomendasi' },
{ id: 'facility', label: 'Fasilitas & Reservasi' }];


export const faqs: Faq[] = [
{ id: 'faq-1', categoryId: 'hours', icon: 'clock', question: 'Karpen Coffee buka jam berapa?', answer: 'Karpen Coffee buka setiap hari mulai pukul 10.00 WIB. Senin hingga 23.00 WIB, Selasa – Sabtu hingga 00.00 WIB, dan Minggu hingga 23.30 WIB. Status buka/tutup terbaru selalu tampil di bagian atas website.' },
{ id: 'faq-2', categoryId: 'hours', icon: 'map-pin', question: 'Di mana lokasi Karpen Coffee?', answer: 'Kami berada di Jl. Sri Sedani, Pilangbango, Kec. Kartoharjo, Kota Madiun, Jawa Timur 63119 — sekitar 7 menit dari Stasiun Madiun.' },
{ id: 'faq-3', categoryId: 'menu', icon: 'coffee', question: 'Apa saja yang tersedia di Karpen Coffee?', answer: 'Kami menyajikan kopi signature, minuman non-kopi, mocktail segar, hidangan nasi, mie, camilan, hingga paket makan anak.' },
{ id: 'faq-4', categoryId: 'menu', icon: 'star', question: 'Apa menu yang menjadi rekomendasi di Karpen Coffee?', answer: 'Kopi Susu Karpen, Hydra, Curry Fried Rice Katsu, dan Mie Cendana adalah menu yang paling dicintai pengunjung kami.' },
{ id: 'faq-5', categoryId: 'facility', icon: 'trees', question: 'Apakah Karpen Coffee memiliki area outdoor?', answer: 'Ya. Dek kayu outdoor kami menghadap langsung ke hamparan sawah dan jalur kereta api — favorit saat senja.' },
{ id: 'faq-6', categoryId: 'facility', icon: 'users', question: 'Apakah Karpen Coffee cocok untuk nongkrong?', answer: 'Sangat cocok. Tersedia area indoor, mezanin, dan outdoor yang nyaman untuk berkumpul bersama teman maupun keluarga.' },
{ id: 'faq-7', categoryId: 'facility', icon: 'laptop', question: 'Apakah bisa mengerjakan tugas atau bekerja di Karpen Coffee?', answer: 'Bisa. Kami menyediakan Wi-Fi berkecepatan tinggi dan stopkontak di hampir setiap sudut meja.' },
{ id: 'faq-8', categoryId: 'menu', icon: 'shopping-bag', question: 'Apakah tersedia layanan takeaway?', answer: 'Tersedia. Layanan bawa pulang dapat dipesan hingga pukul 23.00 WIB, atau pesan lebih dulu melalui WhatsApp.' },
{ id: 'faq-9', categoryId: 'facility', icon: 'calendar', question: 'Apakah Karpen Coffee menerima reservasi?', answer: 'Ya, kami menerima reservasi untuk acara kecil maupun rombongan. Hubungi kami via WhatsApp minimal H-1.' },
{ id: 'faq-10', categoryId: 'hours', icon: 'phone', question: 'Bagaimana cara menghubungi Karpen Coffee?', answer: 'Hubungi kami melalui WhatsApp/telepon di 0851-5602-8622 atau email karpencoffee@gmail.com.' }];