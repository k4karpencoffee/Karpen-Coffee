import type { ImageAsset, Step } from '../types/content';

/**
 * "Karpen Delivery Order" section — shared by Beranda (above the footer) and the Promo page.
 * The WhatsApp number comes from siteConfig.whatsapp.number.
 */
export const deliveryContent = {
  overline: 'Layanan Baru',
  title: 'Karpen Delivery Order, Langsung dari WhatsApp',
  description:
  'Kangen menu Karpen tapi lagi di rumah? Cukup chat WhatsApp, pesananmu kami siapkan segar dari dapur Karpen dan diantar ke alamatmu di area Kota Madiun.',
  badge: 'Ongkir 7K',
  poster: {
    src: "/delivery_order_karpen.jpg",
    alt: 'Poster Karpen Delivery Order Service — order ke 0851-5602-8622, ongkir 7K se-Kota Madiun',
    label: '[DELIVERY POSTER]'
  } as ImageAsset,
  hoursLabel: 'Jam layanan:',
  hoursValue: 'Mengikuti jam toko Karpen Coffee',
  stepsTitle: 'Cara pesan',
  /** Phone number shown in the steps — rendered as a clickable WhatsApp link. */
  phoneDisplay: '0851-5602-8622',
  steps: [
  { title: 'Pilih menu', description: 'Pilih menu yang diinginkan di kategori menu dan tambahkan ke keranjang.' },
  { title: 'Buka keranjang', description: 'Buka keranjang dan lakukan checkout.' },
  { title: 'Pesan via WhatsApp', description: 'Tekan tombol "Pesan via WhatsApp".' },
  { title: 'Periksa pesanan', description: 'Periksa kembali pesanan Anda sebelum melakukan pembayaran.' },
  { title: 'Lakukan pembayaran', description: 'Lakukan pembayaran melalui QRIS, transfer (TF), atau COD.' },
  { title: 'Pesanan diantar', description: 'Pesanan diantar ke alamat tujuan sesuai total pembayaran yang diberikan, sudah termasuk ongkir Rp7.000.' }] as
  Step[],
  message: 'Halo Karpen Coffee, saya ingin pesan Delivery Order.\n\nPesanan:\n- \n\nAlamat lengkap:\n'
};