import type { ImageAsset, Step } from '../types/content';
import { localize } from '../i18n/lang';

/**
 * "Karpen Delivery Order" section — shared by Beranda (above the footer) and the Promo page.
 * The WhatsApp number comes from siteConfig.whatsapp.number.
 */
const deliveryContentId = {
  overline: 'Layanan Baru',
  title: 'Karpen Delivery Order, Langsung dari WhatsApp',
  description:
    'Kangen menu Karpen tapi lagi di rumah? Cukup chat WhatsApp, pesananmu kami siapkan segar dari dapur Karpen dan diantar ke alamatmu di area Kota Madiun.',
  badge: 'Ongkir 7K',
  poster: {
    src: "/delivery_order_karpen.jpg",
    alt: 'Poster Layanan Delivery Order Karpen — pesan ke 0851-5602-8622, ongkir 7K se-Kota Madiun',
    label: '[DELIVERY POSTER]'
  } as ImageAsset,
  hoursLabel: 'Jam layanan:',
  hoursValue: 'Mengikuti jam toko Karpen Coffee',
  stepsTitle: 'Cara pesan',
  /** Phone number shown in the steps — rendered as a clickable WhatsApp link. */
  phoneDisplay: '0851-5602-8622',
  steps: [
    { title: 'Pilih menu', description: 'Pilih menu yang diinginkan di kategori menu dan tambahkan ke keranjang.' },
    { title: 'Buka keranjang', description: 'Buka keranjang, lalu isi nama dan alamat pengantaran.' },
    { title: 'Pesan via WhatsApp', description: 'Tekan tombol "Pesan via WhatsApp".' },
    { title: 'Periksa pesanan', description: 'Periksa kembali pesanan Anda sebelum melakukan pembayaran.' },
    { title: 'Lakukan pembayaran', description: 'Lakukan pembayaran melalui QRIS, transfer (TF), atau COD.' },
    { title: 'Pesanan diantar', description: 'Pesanan diantar ke alamat tujuan sesuai total pembayaran yang diberikan, sudah termasuk ongkir Rp7.000.' }] as
    Step[],
  message: 'Halo Karpen Coffee, saya ingin pesan Delivery Order.\n\nPesanan:\n- \n\nAlamat lengkap:\n'
};

export const deliveryContent = localize(deliveryContentId, {
  overline: 'New Service',
  title: 'Karpen Delivery Order, Straight from WhatsApp',
  description: 'Missing Karpen but staying home? Just chat us on WhatsApp. We will prepare your order fresh from the Karpen kitchen and deliver it to your address in Madiun City.',
  badge: 'Delivery 7K',
  poster: {
    alt: 'Karpen Delivery Order poster — order at 0851-5602-8622, 7K delivery across Madiun City'
  },
  hoursLabel: 'Service hours:',
  hoursValue: 'Same as Karpen Coffee opening hours',
  stepsTitle: 'How to order',
  steps: [
    {
      title: 'Choose your menu',
      description: 'Pick the items you want from the menu categories and add them to your cart.'
    },
    {
      title: 'Open your cart',
      description: 'Open your cart, then fill in your name and delivery address.'
    },
    {
      title: 'Order via WhatsApp',
      description: 'Tap the "Order via WhatsApp" button.'
    },
    {
      title: 'Check your order',
      description: 'Double-check your order before making payment.'
    },
    {
      title: 'Make payment',
      description: 'Pay via QRIS, bank transfer (TF), or COD.'
    },
    {
      title: 'Order delivered',
      description: 'Your order is delivered to your address for the total payment given, delivery fee of Rp7.000 included.'
    }
  ]
});