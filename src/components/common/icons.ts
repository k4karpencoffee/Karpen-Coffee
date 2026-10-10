import {
  CalendarCheckIcon,
  CarIcon,
  CircleHelpIcon,
  ClockIcon,
  CoffeeIcon,
  LandmarkIcon,
  LaptopIcon,
  MapPinIcon,
  PhoneIcon,
  PlugIcon,
  ShoppingBagIcon,
  StarIcon,
  TreesIcon,
  UsersIcon,
  UtensilsCrossedIcon,
  WifiIcon,
  type LucideIcon } from
'lucide-react';
import type { IconKey } from '../../types/content';

export const iconMap: Record<IconKey, LucideIcon> = {
  clock: ClockIcon,
  'map-pin': MapPinIcon,
  coffee: CoffeeIcon,
  star: StarIcon,
  trees: TreesIcon,
  users: UsersIcon,
  laptop: LaptopIcon,
  'shopping-bag': ShoppingBagIcon,
  calendar: CalendarCheckIcon,
  phone: PhoneIcon,
  wifi: WifiIcon,
  plug: PlugIcon,
  landmark: LandmarkIcon,
  car: CarIcon,
  utensils: UtensilsCrossedIcon,
  help: CircleHelpIcon
};