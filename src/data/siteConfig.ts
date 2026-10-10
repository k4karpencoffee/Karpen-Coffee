import type { DaySchedule, NavItem } from '../types/content';

/**
 * ============================================================
 *  GLOBAL CONFIGURATION — business info, contacts, hours, nav
 * ============================================================
 *  Change values here once; every component reads from this file.
 */

const mainNav: NavItem[] = [
{ label: 'Beranda', to: '/' },
{ label: 'Cerita Kami', to: '/our-story' },
{ label: 'Menu', to: '/menu' },
{ label: 'Promo', to: '/promo' },
{ label: 'Outlet', to: '/outlet' },
{ label: 'Reservasi', to: '/reservasi' }];


export const siteConfig = {
  businessName: 'Karpen Coffee',

  address: {
    short: 'Jl. Sri Sedani, Madiun',
    full: 'Jl. Sri Sedani, Pilangbango, Kec. Kartoharjo, Kota Madiun, Jawa Timur 63119',
    area: 'Pilangbango, Madiun'
  },

  contact: {
    phoneDisplay: '0851-5602-8622',
    phoneHref: 'tel:+6285156028622',
    email: 'karpencoffee@gmail.com'
  },

  /** WhatsApp number in international format, digits only (e.g. 6281234567890). */
  whatsapp: {
    number: '6285156028622',
    generalMessage: 'Halo Karpen Coffee, saya ingin bertanya.',
    orderTemplate: {
      greeting: 'Halo Kak, saya ingin memesan melalui Delivery Order dengan detail sebagai berikut:',
      title: 'DELIVERY ORDER KARPEN',
      /** Available variables: {customer} */
      nameLine: 'Nama : {customer}',
      /** Available variables: {address} */
      addressLine: 'Alamat : {address}',
      /** Available variables: {note} — "-" when empty */
      noteLine: 'Catatan Pesanan : {note}',
      itemsTitle: 'DETAIL PESANAN',
      /** Available variables: {name} {qty} {unitPrice} {price} */
      itemLine: '{name} (x{qty})\n   {qty} x {unitPrice} = {price}',
      /** Available variables: {count} {subtotal} */
      subtotalLine: 'Subtotal ({count} item) : {subtotal}',
      /** Available variables: {fee} */
      deliveryLine: 'Ongkir : {fee}',
      /** Available variables: {total} */
      totalLine: 'Total Pembayaran : {total}',
      warningTitle: 'PENTING‼️',
      warning:
      'Mohon periksa kembali pesanan di atas sebelum melakukan pembayaran (QRIS / Transfer / COD). Pesanan yang sudah di-checkout tidak dapat dibatalkan, diubah, atau dikembalikan.',
      closing: 'Mohon konfirmasi pesanannya ya, Kak. Terima kasih!'
    },
    /** Delivery fee added to every WhatsApp order (Rupiah). */
    deliveryFee: 7000,
    /** Available variables: {promo} */
    promoTemplate: 'Halo, saya ingin klaim promo: {promo}'
  },

  social: {
    instagram: 'https://instagram.com/karpencoffee',
    facebook: 'https://www.facebook.com/share/1EXnuJHWJf/',
    tiktok: 'https://tiktok.com/@karpencoffee',
    googleMaps: 'https://maps.google.com/?q=Karpen+Coffee+Pilangbango+Madiun'
  },

  /**
   * Opening hours per day — drives every live Buka / Segera Tutup / Segera Buka / Tutup status.
   * 24h "HH:MM". "24:00" = midnight. Set `closed: true` for a day off. Keep the order Senin → Minggu.
   */
  hours: {
    schedule: [
    { day: 1, label: 'Senin', open: '10:00', close: '23:00' },
    { day: 2, label: 'Selasa', open: '10:00', close: '24:00' },
    { day: 3, label: 'Rabu', open: '10:00', close: '24:00' },
    { day: 4, label: 'Kamis', open: '10:00', close: '24:00' },
    { day: 5, label: 'Jumat', open: '10:00', close: '24:00' },
    { day: 6, label: 'Sabtu', open: '10:00', close: '24:00' },
    { day: 0, label: 'Minggu', open: '10:00', close: '23:30' }] as
    DaySchedule[],
    /** Live status is always calculated in this time zone, regardless of the visitor's device. */
    timeZone: 'Asia/Jakarta',
    timeZoneLabel: 'WIB',
    /** Show "Segera Tutup" when closing is this many minutes away (or less). */
    closingSoonMinutes: 60,
    /** Show "Segera Buka" when opening is this many minutes away (or less). */
    openingSoonMinutes: 60,
    lastOrderNote: 'Last order dapur 30 menit sebelum jam tutup',
    takeawayNote: 'Hingga 30 menit sebelum tutup'
  },

  currencyPrefix: 'Rp ',

  navigation: {
    main: mainNav,
    /** FAQ only appears in the navbar while the user is on /faq. */
    faq: { label: 'FAQ', to: '/faq' } as NavItem,
    cart: { label: 'Cart', to: '/cart' } as NavItem,
    orderCta: { label: 'Order Now', to: '/menu' } as NavItem
  },

  footer: {
    navTitle: 'Navigasi',
    hoursTitle: 'Jam Operasional',
    socialTitle: 'Temukan Kami',
    copyright: '© 2026 KARPEN COFFEE. All rights reserved. Madiun, Jawa Timur.',
    credit: 'Dibuat dengan rasa cinta pada kayu, kopi, dan tanah kelahiran Madiun.'
  },

  ui: {
    openLabel: 'Buka',
    closingSoonLabel: 'Segera Tutup',
    openingSoonLabel: 'Segera Buka',
    closedLabel: 'Tutup',
    todayWord: 'hari ini',
    tomorrowWord: 'besok',
    untilWord: 's/d',
    opensAtWord: 'buka',
    addToCart: 'Pesan',
    unavailable: 'Tutup',
    addedToast: 'ditambahkan ke keranjang',
    viewCart: 'Lihat Cart',
    copiedAddress: 'Alamat disalin',
    floatingWhatsappAria: 'Chat Karpen Coffee via WhatsApp',
    floatingFaq: 'FAQ',
    floatingFaqAria: 'Buka halaman Pertanyaan Umum (FAQ)',
    cart: {
      breadcrumb: 'Cart',
      title: 'Keranjang Pesanan',
      description: 'Periksa pesanan Anda lalu kirim langsung melalui WhatsApp.',
      emptyTitle: 'Keranjang masih kosong',
      emptyDescription: 'Pilih menu favorit Anda, lalu kembali ke sini untuk memesan via WhatsApp.',
      browseMenu: 'Lihat Menu',
      deliveryOnlyTitle: 'Keranjang khusus Delivery Order.',
      deliveryOnlyNote:
      'Untuk reservasi, pemesanan menu dilakukan melalui chat WhatsApp setelah tempat dikonfirmasi oleh admin, atau langsung di outlet.',
      reservationLink: 'Buat reservasi',
      summaryTitle: 'Ringkasan Pesanan',
      subtotal: 'Subtotal',
      deliveryFee: 'Ongkir',
      total: 'Total Pembayaran',
      nameLabel: 'Nama',
      namePlaceholder: 'Nama lengkap Anda',
      nameRequired: 'Mohon isi nama Anda.',
      confirmLabel: 'Saya sudah memeriksa pesanan dan memahami bahwa pesanan tidak dapat dibatalkan.',
      addressLabel: 'Alamat',
      addressPlaceholder: 'Nama jalan, nomor rumah, RT/RW, kelurahan (patokan rumah: contoh pagar hijau dekat masjid)',
      addressRequired: 'Mohon isi alamat Anda.',
      noteLabel: 'Catatan Pesanan',
      noteOptional: '(opsional)',
      notePlaceholder: 'Contoh: es dipisah, tidak pedas...',
      items: 'item',
      checkout: 'Pesan via WhatsApp',
      checkoutNote:
      '⚠️ Pesanan dikirim sebagai pesan WhatsApp. Periksa kembali pesanan sebelum membayar via QRIS, transfer, atau COD. Pesanan yang sudah di-checkout tidak dapat dibatalkan atau dikembalikan.',
      clear: 'Kosongkan keranjang',
      remove: 'Hapus',
      continueShopping: 'Tambah menu lain'
    }
  }
};