import type { Faq, FaqCategory } from '../types/content';
import { localize } from '../i18n/lang';

/**
 * ============================================================
 *  FAQ DATA — add, remove or edit questions here
 * ============================================================
 *  `icon` options: clock, map-pin, coffee, star, trees, users, laptop,
 *  shopping-bag, calendar, phone, wifi, plug, landmark, car, help
 */

const faqPageContentId = {
  pill: 'Tanya Jawab / Bantuan & FAQ',
  title: 'Pertanyaan yang Sering Diajukan',
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

export const faqPageContent = localize(faqPageContentId, {
  pill: 'Help & FAQ',
  title: 'Frequently Asked Questions',
  description: 'Common questions about enjoying coffee, food, reservations, and the atmosphere at Karpen Coffee Madiun.',
  help: {
    overline: 'Additional Help',
    title: 'Still have questions?',
    description: 'The Karpen Coffee team is happy to welcome you and answer your questions about special orders, partnerships, or gathering space availability.',
    whatsappLabel: 'Chat on WhatsApp'
  }
});

const faqCategoriesId: FaqCategory[] = [
  { id: 'all', label: 'Semua Pertanyaan' },
  { id: 'hours', label: 'Jam & Lokasi' },
  { id: 'menu', label: 'Menu & Rekomendasi' },
  { id: 'facility', label: 'Fasilitas & Reservasi' }];

export const faqCategories: FaqCategory[] = localize(faqCategoriesId, [
  {
    label: 'All Questions'
  },
  {
    label: 'Hours & Location'
  },
  {
    label: 'Menu & Recommendations'
  },
  {
    label: 'Facilities & Reservations'
  }
]);


const faqsId: Faq[] = [
  { id: 'faq-1', categoryId: 'hours', icon: 'clock', question: 'Karpen Coffee buka jam berapa?', answer: 'Karpen Coffee buka setiap hari mulai pukul 10.00 WIB. Senin hingga 23.00 WIB, Selasa – Sabtu hingga 00.00 WIB, dan Minggu hingga 23.30 WIB. Status buka/tutup terbaru selalu tampil di bagian atas situs.' },
  { id: 'faq-2', categoryId: 'hours', icon: 'map-pin', question: 'Di mana lokasi Karpen Coffee?', answer: 'Kami berada di Jl. Sri Sedani, Pilangbango, Kec. Kartoharjo, Kota Madiun, Jawa Timur 63119 — sekitar 7 menit dari Stasiun Madiun.' },
  { id: 'faq-3', categoryId: 'menu', icon: 'coffee', question: 'Apa saja yang tersedia di Karpen Coffee?', answer: 'Kami menyajikan kopi andalan, minuman non-kopi, mocktail segar, hidangan nasi, mie, camilan, hingga paket makan anak.' },
  { id: 'faq-4', categoryId: 'menu', icon: 'star', question: 'Apa menu yang menjadi rekomendasi di Karpen Coffee?', answer: 'Kopi Susu Karpen, Hydra, Curry Fried Rice Katsu, dan Mie Cendana adalah menu yang paling dicintai pengunjung kami.' },
  { id: 'faq-5', categoryId: 'facility', icon: 'trees', question: 'Apakah Karpen Coffee memiliki area luar ruangan?', answer: 'Ya. Dek kayu luar ruangan kami menghadap langsung ke hamparan sawah dan jalur kereta api — favorit saat senja.' },
  { id: 'faq-6', categoryId: 'facility', icon: 'users', question: 'Apakah Karpen Coffee cocok untuk nongkrong?', answer: 'Sangat cocok. Tersedia area dalam ruangan, mezanin, dan luar ruangan yang nyaman untuk berkumpul bersama teman maupun keluarga.' },
  { id: 'faq-7', categoryId: 'facility', icon: 'laptop', question: 'Apakah bisa mengerjakan tugas atau bekerja di Karpen Coffee?', answer: 'Bisa. Kami menyediakan Wi-Fi berkecepatan tinggi dan stopkontak di hampir setiap sudut meja.' },
  { id: 'faq-8', categoryId: 'menu', icon: 'shopping-bag', question: 'Apakah tersedia layanan bawa pulang?', answer: 'Tersedia. Layanan bawa pulang dapat dipesan hingga pukul 23.00 WIB, atau pesan lebih dulu melalui WhatsApp.' },
  { id: 'faq-9', categoryId: 'facility', icon: 'calendar', question: 'Apakah Karpen Coffee menerima reservasi?', answer: 'Ya, kami menerima reservasi untuk acara kecil maupun rombongan. Hubungi kami via WhatsApp minimal H-1.' },
  { id: 'faq-10', categoryId: 'hours', icon: 'phone', question: 'Bagaimana cara menghubungi Karpen Coffee?', answer: 'Hubungi kami melalui WhatsApp/telepon di 0851-5602-8622 atau email karpencoffee@gmail.com.' }];

export const faqs: Faq[] = localize(faqsId, [
  {
    question: 'What time does Karpen Coffee open?',
    answer: 'Karpen Coffee opens every day from 10.00 WIB. Monday until 23.00 WIB, Tuesday – Saturday until 00.00 WIB, and Sunday until 23.30 WIB. The latest open/closed status is always shown at the top of the website.'
  },
  {
    question: 'Where is Karpen Coffee located?',
    answer: 'We are at Jl. Sri Sedani, Pilangbango, Kec. Kartoharjo, Madiun City, East Java 63119 — about 7 minutes from Madiun Station.'
  },
  {
    question: 'What is available at Karpen Coffee?',
    answer: 'We serve signature coffee, non-coffee drinks, refreshing mocktails, rice dishes, noodles, snacks, and even kids meal packages.'
  },
  {
    question: 'What menu items does Karpen Coffee recommend?',
    answer: 'Kopi Susu Karpen, Hydra, Curry Fried Rice Katsu, and Mie Cendana are our guests’ all-time favorites.'
  },
  {
    question: 'Does Karpen Coffee have an outdoor area?',
    answer: 'Yes. Our outdoor wooden deck faces the rice fields and the railway directly — a sunset favorite.'
  },
  {
    question: 'Is Karpen Coffee a good place to hang out?',
    answer: 'Absolutely. There are comfortable indoor, mezzanine, and outdoor areas for gathering with friends or family.'
  },
  {
    question: 'Can I study or work at Karpen Coffee?',
    answer: 'Yes. We provide high-speed Wi-Fi and power outlets at almost every table corner.'
  },
  {
    question: 'Is takeaway available?',
    answer: 'Yes. Takeaway orders can be placed until 23.00 WIB, or order ahead via WhatsApp.'
  },
  {
    question: 'Does Karpen Coffee accept reservations?',
    answer: 'Yes, we accept reservations for small events and groups. Contact us via WhatsApp at least one day ahead.'
  },
  {
    question: 'How can I contact Karpen Coffee?',
    answer: 'Reach us via WhatsApp/phone at 0851-5602-8622 or email karpencoffee@gmail.com.'
  }
]);