/** Menu page copy. Products, groups & categories live in data/products.ts. */
export const menuContent = {
  title: 'Our Menu',
  description:
  'Racikan kopi, minuman segar, dan hidangan hangat yang dibuat setiap hari untuk menemani momen terbaik Anda di Karpen Coffee.',
  allLabel: 'Semua',
  searchPlaceholder: 'Cari menu...',
  emptyTitle: 'Menu tidak ditemukan',
  emptyDescription: 'Coba kata kunci lain atau pilih kategori yang berbeda.',
  resetLabel: 'Hapus pencarian',
  /** Live store status shown on the Menu page. When closed, the menu turns black & white and ordering is paused. */
  status: {
    openBadge: 'Buka / Open',
    closedBadge: 'Tutup / Closed',
    /** Variables: {range} {time} {minutes} {day} */
    openNote: 'Hari ini {range} WIB — silakan pesan menu favoritmu.',
    closingSoonNote: 'Segera tutup dalam {minutes} menit ({time} WIB).',
    openingSoonNote: 'Segera buka dalam {minutes} menit ({time} WIB). Menu belum bisa dipesan.',
    closedNote: 'Menu belum bisa dipesan. Buka kembali {day} pukul {time} WIB.'
  }
};