import { localize } from '../i18n/lang';
/**
 * ============================================================
 *  KONFIGURASI RESERVASI — ubah nilai di sini saja
 * ============================================================
 */
const reservationConfigId = {
  /** Nomor WhatsApp tujuan reservasi (format internasional, hanya angka, tanpa + atau spasi). */
  whatsappNumber: '6285156028622',

  /** Slot jam reservasi pertama dan terakhir (format 24 jam "HH:MM", zona waktu WIB). */
  firstSlot: '10:00',
  lastSlot: '22:00',
  /** Jarak antar slot jam, dalam menit. */
  slotIntervalMinutes: 60,

  /** Batas pemesanan ke depan: berapa hari dari hari ini tanggal masih bisa dipilih (MAX_BOOKING_DAYS). */
  maxBookingDays: 90,
  /** Hari libur mingguan, pakai nama hari Indonesia, contoh: ['Senin']. Kosongkan jika buka setiap hari. */
  closedWeekdays: [] as string[],
  /** Tanggal libur khusus, format "YYYY-MM-DD", contoh: ['2026-12-25']. */
  closedDates: [] as string[],

  /** Pilihan jumlah orang di dropdown. */
  guestOptions: [4, 6, 8, 10, 12, 14, 16, 18, 20],

  /** Zona waktu acuan untuk "hari ini" dan jam yang sudah lewat. */
  timeZone: 'Asia/Jakarta',

  /** Panjang nama pemesan (setelah spasi berlebih dihapus). */
  nameMinLength: 2,
  nameMaxLength: 50,

  /**
   * Template pesan WhatsApp. Variabel: {name} {date} {time} {guests} {note}
   * {note} opsional: jika dikosongkan, otomatis diisi emptyNote ("-").
   */
  messageTemplate: [
    'Halo Kak, saya ingin melakukan reservasi dengan detail sebagai berikut:',
    '',
    'RESERVASI KARPEN',
    'Nama : {name}',
    'Tanggal : {date}',
    'Jam : {time} WIB',
    'Jumlah Orang : {guests} orang',
    'Permintaan Khusus : {note}',
    '',
    'PENTING‼️',
    'Reservasi baru dianggap terkonfirmasi setelah mendapat balasan dari tim Karpen.',
    '',
    'Mohon konfirmasi ketersediaannya ya, Kak. Terima kasih!'].
    join('\n'),
  /** Isi Permintaan Khusus jika dikosongkan. */
  emptyNote: '-',

  /** Durasi state "Memproses..." sebelum WhatsApp dibuka (milidetik). */
  processingMs: 700,

  copy: {
    title: 'Reservasi Meja',
    description: 'Pesan tempat Anda di Karpen, kami konfirmasi lewat WhatsApp.',
    cardTitle: 'Form Reservasi',
    confirmationNote: '⚠️ Reservasi baru dianggap terkonfirmasi setelah mendapat balasan dari tim Karpen melalui WhatsApp.',
    nameLabel: 'Nama',
    namePlaceholder: 'Nama lengkap Anda',
    nameRequired: 'Mohon isi nama Anda.',
    nameTooShort: 'Nama minimal 2 karakter.',
    nameTooLong: 'Nama maksimal 50 karakter.',
    dateLabel: 'Tanggal',
    prevMonth: 'Bulan sebelumnya',
    nextMonth: 'Bulan berikutnya',
    todaySuffix: '(hari ini)',
    noDateSelected: 'Belum ada tanggal dipilih',
    selectedDateLabel: 'Tanggal dipilih:',
    timeLabel: 'Jam',
    timePlaceholder: 'Pilih jam',
    timeDisabledPlaceholder: 'Pilih tanggal terlebih dahulu',
    timeSuffix: 'WIB',
    guestsLabel: 'Jumlah Orang',
    guestsPlaceholder: 'Pilih jumlah orang',
    guestsUnit: 'orang',
    noteLabel: 'Permintaan Khusus (opsional)',
    notePlaceholder:
      'Jika Anda memiliki permintaan khusus (misalnya kursi anak, area non-rokok, perayaan ulang tahun), silakan tuliskan di sini...',
    incompleteHint: 'Silakan lengkapi nama, tanggal, jam, dan jumlah orang.',
    submit: 'Reservasi via WhatsApp',
    processing: 'Memproses...',
    success: 'Anda akan diarahkan ke WhatsApp untuk konfirmasi reservasi.'
  }
};

export const reservationConfig = localize(reservationConfigId, {
  copy: {
    title: 'Table Reservation',
    description: 'Book your spot at Karpen — we confirm via WhatsApp.',
    cardTitle: 'Reservation Form',
    confirmationNote: '⚠️ A reservation is only confirmed once you receive a reply from the Karpen team via WhatsApp.',
    nameLabel: 'Name',
    namePlaceholder: 'Your full name',
    nameRequired: 'Please enter your name.',
    nameTooShort: 'Name must be at least 2 characters.',
    nameTooLong: 'Name must be at most 50 characters.',
    dateLabel: 'Date',
    prevMonth: 'Previous month',
    nextMonth: 'Next month',
    todaySuffix: '(today)',
    noDateSelected: 'No date selected yet',
    selectedDateLabel: 'Selected date:',
    timeLabel: 'Time',
    timePlaceholder: 'Select time',
    timeDisabledPlaceholder: 'Select a date first',
    guestsLabel: 'Number of Guests',
    guestsPlaceholder: 'Select number of guests',
    guestsUnit: 'guests',
    noteLabel: 'Special Requests (optional)',
    notePlaceholder: 'If you have special requests (e.g. a child seat, non-smoking area, birthday celebration), please write them here...',
    incompleteHint: 'Please complete your name, date, time, and number of guests.',
    submit: 'Reserve via WhatsApp',
    processing: 'Processing...',
    success: 'You will be redirected to WhatsApp to confirm your reservation.'
  }
});