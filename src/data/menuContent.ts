import { localize } from '../i18n/lang';
/** Menu page copy. Products, groups & categories live in data/products.ts. */
const menuContentId = {
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
    openBadge: 'Buka',
    closedBadge: 'Tutup',
    /** Variables: {range} {time} {minutes} {day} */
    openNote: 'Hari ini {range} WIB — silakan pesan menu favoritmu.',
    closingSoonNote: 'Segera tutup dalam {minutes} menit ({time} WIB).',
    openingSoonNote: 'Segera buka dalam {minutes} menit ({time} WIB). Menu belum bisa dipesan.',
    closedNote: 'Menu belum bisa dipesan. Buka kembali {day} pukul {time} WIB.'
  }
};

export const menuContent = localize(menuContentId, {
  description: 'Coffee blends, refreshing drinks, and warm dishes made daily to accompany your best moments at Karpen Coffee.',
  allLabel: 'All',
  searchPlaceholder: 'Search menu...',
  emptyTitle: 'No menu found',
  emptyDescription: 'Try another keyword or choose a different category.',
  resetLabel: 'Clear search',
  status: {
    openBadge: 'Open',
    closedBadge: 'Closed',
    openNote: 'Today {range} WIB — feel free to order your favorites.',
    closingSoonNote: 'Closing in {minutes} minutes ({time} WIB).',
    openingSoonNote: 'Opening in {minutes} minutes ({time} WIB). The menu cannot be ordered yet.',
    closedNote: 'The menu cannot be ordered yet. Opens again {day} at {time} WIB.'
  }
});