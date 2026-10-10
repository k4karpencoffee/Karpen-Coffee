export interface ImageAsset {
  /** Path (e.g. "/assets/hero/hero.jpg") or full URL. Leave '' to show the placeholder. */
  src: string;
  alt: string;
  /** Placeholder label shown while src is empty, e.g. "[HERO IMAGE]". */
  label: string;
}

export interface VideoAsset {
  /** .mp4 / .webm path or URL. Leave '' to disable. */
  src: string;
  poster: string;
}

export interface GalleryImage extends ImageAsset {
  caption: string;
}

export interface DaySchedule {
  /** JS weekday: 0 = Minggu, 1 = Senin, … 6 = Sabtu */
  day: number;
  label: string;
  /** 24h "HH:MM". Use "24:00" for midnight; a close earlier than open means "past midnight". */
  open: string;
  close: string;
  closed?: boolean;
}

export interface NavItem {
  label: string;
  to: string;
}

export interface CtaLink {
  label: string;
  to: string;
}

export interface InfoItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export type IconKey =
'clock' |
'map-pin' |
'coffee' |
'star' |
'trees' |
'users' |
'laptop' |
'shopping-bag' |
'calendar' |
'phone' |
'wifi' |
'plug' |
'landmark' |
'car' |
'utensils' |
'help';

export interface MenuGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconKey;
  /** Path/URL for the switcher card image; '' = placeholder. */
  image: string;
}

export interface MenuCategory {
  id: string;
  groupId: string;
  title: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  subcategory?: string;
  tag?: string;
  badge?: string;
  badgeTone?: 'forest' | 'promo';
  featured?: boolean;
  /** Path or URL to the product photo. Leave '' to show the placeholder. */
  image: string;
  /** Optional add-on choices; the customer must pick at least `min` before adding to the cart. */
  addOns?: {min: number;options: string[];};
}

export interface PromoFilter {
  id: string;
  label: string;
}

export interface PromoItem {
  name: string;
  detail?: string;
  price: number;
}

export interface Promo {
  id: string;
  filterId: string;
  poster: string;
  schedule: string;
  badge: string;
  category: string;
  subCategory: string;
  title: string;
  description: string;
  items?: PromoItem[];
  note?: {title: string;text: string;};
  validity: string;
  serviceType: string;
  terms: string[];
  ctaLabel: string;
  /** Days this promo is valid (0 = Minggu … 6 = Sabtu). Omit = every day. Drives the "aktif hari ini" counter. */
  activeDays?: number[];
  /** Optional validity period, "YYYY-MM-DD" (inclusive). */
  startDate?: string;
  endDate?: string;
}

export interface FaqCategory {
  id: string;
  label: string;
}

export interface Faq {
  id: string;
  categoryId: string;
  icon: IconKey;
  question: string;
  answer: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  paragraphs: string[];
}

export interface Facility {
  icon: IconKey;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}