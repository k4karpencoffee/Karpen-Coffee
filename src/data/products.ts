import type { MenuCategory, MenuGroup, Product } from '../types/content';
import { assets } from './assets';

/**
 * ============================================================
 *  MENU DATA — one shared source for tabs, chips, grids & search
 * ============================================================
 *  Content (names, descriptions, prices, sections & sub-groups) follows the
 *  "prompt section menu" file. Layout is unchanged — only the data below.
 *
 *  - `menuCategories` order = section order & numbering on the Menu page (1–12).
 *  - Category `id` = section anchor on the page (e.g. #signature-beverage).
 *  - `categoryId` on a product must match a category id.
 *  - `subcategory` (optional) groups products under a sub-heading, in the order they appear here.
 *    Products WITHOUT a subcategory are shown first in their section.
 *  - `featured: true` shows the product on the homepage.
 *  - `image`: path/URL (see data/assets.ts); '' = placeholder. Photos are temporary — replace anytime.
 */

const img = assets.products;
/** Real product photos (file name = product name). */
const photo = assets.productPhotos;

/** The Semua / Minuman / Makanan tabs on the Menu page. */
export const menuGroups: MenuGroup[] = [
  {
    id: 'drinks',
    title: 'Minuman',
    subtitle: 'Beverage',
    description: 'Signature, kopi susu, non-kopi, mocktail & sparkling.',
    icon: 'coffee',
    image: img.kopiSusu
  },
  {
    id: 'food',
    title: 'Makanan',
    subtitle: 'Food',
    description: 'Nasi, mie, camilan, gorengan, dessert & paket anak.',
    icon: 'utensils',
    image: img.curryRice
  }];


export const menuCategories: MenuCategory[] = [
  // MINUMAN (1–7)
  { id: 'signature-beverage', groupId: 'drinks', title: 'Signature Beverage' },
  { id: 'the-summer', groupId: 'drinks', title: 'The Summer' },
  { id: 'cold-brew-iced-series', groupId: 'drinks', title: 'Cold Brew Iced Series' },
  { id: 'coffee-crumble-series', groupId: 'drinks', title: 'Coffee Crumble Series' },
  { id: 'kopi-saku', groupId: 'drinks', title: 'Kopi Saku' },
  { id: 'sparkling-drinks', groupId: 'drinks', title: 'Sparkling Drinks' },
  { id: 'new-dream-coffee', groupId: 'drinks', title: 'New Dream Coffee' },
  // MAKANAN (8–12)
  { id: 'our-noodle', groupId: 'food', title: 'Our Noodle' },
  { id: 'our-main-dish', groupId: 'food', title: 'Our Main Dish' },
  { id: 'our-snack', groupId: 'food', title: 'Our Snack' },
  { id: 'our-dessert', groupId: 'food', title: 'Our Dessert' },
  { id: 'kids-meal-combo', groupId: 'food', title: 'Kids Meal Combo & Customizer' }];


export const products: Product[] = [
  // ───────── 1. Signature Beverage ─────────
  { id: 'kopsu-karpen', name: 'Kopi Susu Karpen', description: 'Perpaduan kopi susu creamy, pandan, dan mint yang fresh.', price: 22000, categoryId: 'signature-beverage', tag: 'Iced', featured: true, image: assets.featuredProducts.kopsuKarpen },
  { id: 'canella', name: 'Canella', description: 'Kopi dengan sentuhan raisin butterscotch dan oat milk yang smooth dan creamy.', price: 24000, categoryId: 'signature-beverage', tag: 'Hot / Ice', image: photo.canella },
  { id: 'kopsu-durian', name: 'Kopi Susu Durian', description: 'Kopi susu durian khas Karpen yang creamy, legit, dan berkarakter.', price: 25000, categoryId: 'signature-beverage', tag: 'Iced', image: photo.kopsuDurian },
  { id: 'hydra', name: 'Hydra', description: 'Perpaduan syrup mangga dan Yakult yang ringan, segar.', price: 20000, categoryId: 'signature-beverage', tag: 'Iced', featured: true, image: photo.hydra },
  { id: 'ruby-jane', name: 'Ruby Jane', description: 'Perpaduan sirup strawberry, macchiato, dan oat milk yang lembut dan smooth.', price: 22000, categoryId: 'signature-beverage', tag: 'Iced', image: photo.rubyJane },
  { id: 'ayra', name: 'Ayra', description: 'Perpaduan Yakult dan strawberry yang ringan dan fresh.', price: 22000, categoryId: 'signature-beverage', tag: 'Hot / Ice', image: photo.ayra },
  { id: 'air-mineral', name: 'Air Mineral', description: 'Air mineral pegunungan alami yang segar dan murni.', price: 7000, categoryId: 'signature-beverage', tag: 'Mineral Water', image: photo.airMineral },

  // Signature Beverage — Basic Coffee
  { id: 'long-black', name: 'Long Black', description: 'Double shot of Karpen house blend pulled over filtered mineral water with pristine crema.', price: 18000, categoryId: 'signature-beverage', subcategory: 'Basic Coffee', tag: 'Hot / Ice', image: photo.longBlack },
  { id: 'latte', name: 'Latte', description: 'Harmonious balanced espresso combined with micro-textured steamed fresh dairy milk.', price: 18000, categoryId: 'signature-beverage', subcategory: 'Basic Coffee', tag: 'Hot / Ice', image: photo.latte },
  { id: 'cappuccino', name: 'Cappuccino', description: 'Classic third-wave proportion of rich espresso, steamed milk, and airy microfoam crown.', price: 18000, categoryId: 'signature-beverage', subcategory: 'Basic Coffee', tag: 'Hot / Ice', image: photo.cappuccino },

  // Signature Beverage — Kopi Susu
  { id: 'ginger-latte', name: 'Ginger Latte', description: 'Ginger Latte is a warm drink made from milk and ginger extract or syrup that helps warm the body.', price: 26000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.gingerLatte },
  { id: 'baileys', name: 'Baileys', description: 'Decadent Irish cream essence (non-alcoholic) shaken with dark espresso and fresh cream.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.baileys },
  { id: 'goldenberry-latte', name: 'Goldenberry Latte', description: 'Tangy Indonesian cape gooseberry nectar infused into rich milk coffee.', price: 20000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.goldenberryLatte },
  { id: 'banana-latte', name: 'Banana Latte', description: 'Sweet sun-ripened banana syrup paired smoothly with our mellow roast.', price: 20000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.bananaLatte },
  { id: 'flamingo-latte', name: 'Flamingo Latte', description: 'Strawberry blossom milk paired with a bold shot of dark roasted Karpen beans.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.flamingoLatte },
  { id: 'kopi-susu-biscoff', name: 'Kopi Susu Biscoff', description: 'Perpaduan espresso, susu creamy, dan remahan biskuit Lotus Biscoff renyah yang manis gurih.', price: 25000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.kopiSusuBiscoff },
  { id: 'kopi-susu-creamy', name: 'Kopi Susu Creamy', description: 'Extra rich milk base for those who prefer full-bodied, sweet indulgence.', price: 20000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.kopiSusuCreamy },
  { id: 'nutty-latte', name: 'Nutty Latte', description: 'Roasted hazelnut and macadamia nuances steeped into milk and espresso.', price: 23000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.nuttyLatte },
  { id: 'ordinary-latte', name: 'Ordinary Latte', description: 'Perpaduan klasik espresso house blend Karpen dan susu segar murni yang lembut dan seimbang.', price: 22000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.ordinaryLatte },

  // Signature Beverage — Milk Based
  { id: 'chocolate', name: 'Chocolate', description: 'Rich Belgian cocoa slow-whisked with whole dairy milk for a deep cocoa profile.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.chocolate },
  { id: 'matcha', name: 'Matcha', description: 'Authentic Japanese Uji ceremonial green tea matcha whisked with fresh milk.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.matcha },
  { id: 'taro', name: 'Taro', description: 'Velvety purple yam with natural vanilla fragrance and comforting creamy warmth.', price: 20000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.taro },
  { id: 'red-velvet', name: 'Red Velvet', description: 'Cocoa crumble undertones with cream cheese sweetness blended into whole milk.', price: 20000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.redVelvet },
  { id: 'cookies-n-cream', name: 'Cookies N Cream', description: 'Crunchy dark sandwich biscuits blended into vanilla milk shake.', price: 23000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.cookiesNCream },
  { id: 'cocomelon', name: 'Cocomelon', description: 'Sweet honeydew nectar swirled with organic coconut milk water and dairy.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.cocomelon },

  // Signature Beverage — Tea Based
  { id: 'iced-tea', name: 'Iced Tea', description: 'Indonesian estate brewed black tea, crisp and lightly sweet.', price: 10000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.icedTea },
  { id: 'teh-legawa', name: 'Teh Legawa', description: 'House heritage blend of Java jasmine leaves, pandan aroma, and lemongrass.', price: 16000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.tehLegawa },
  { id: 'lychee-tea', name: 'Lychee Tea', description: 'Real peeled whole lychees infused with aromatic black tea.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.lycheeTea },
  { id: 'lemon-tea', name: 'Lemon Tea', description: 'Squeezed fresh lemons brewed with black tea leaves for pure zest.', price: 16000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.lemonTea },
  { id: 'ichigo-tea', name: 'Ichigo Tea', description: 'Japanese strawberry compote infused into bright Ceylon tea.', price: 15000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.ichigoTea },
  { id: 'koci', name: 'Koci', description: 'Warm soothing spiced tea infusion with ginger and honey notes.', price: 18000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.koci },
  { id: 'teh-tarik', name: 'Teh Tarik', description: 'Hand-pulled foamy milk tea with classic Indonesian sweet tea characteristics.', price: 16000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.tehTarik },

  // ───────── 2. The Summer ─────────
  { id: 'coco-breeze', name: 'Coco Breeze', description: 'Mint - Hydrococo', price: 20000, categoryId: 'the-summer', tag: 'Mocktail', image: photo.cocoBreeze },
  { id: 'ocean-bliss', name: 'Ocean Bliss', description: 'Lychee - Sparkling', price: 20000, categoryId: 'the-summer', tag: 'Mocktail', image: photo.oceanBliss },
  { id: 'bless-berry-rise', name: 'Black Berry Rise', description: 'Espresso - Strawberry', price: 20000, categoryId: 'the-summer', tag: 'Mocktail', image: photo.blackBerryRise },
  { id: 'black-sunset', name: 'Black Sunset', description: 'Espresso - Orange', price: 20000, categoryId: 'the-summer', tag: 'Mocktail', image: photo.blackSunset },

  // ───────── 3. Cold Brew Iced Series ─────────
  { id: 'butter-cloud', name: 'Butter Cloud', description: 'Cold Brew, Butterscotch, Coffee Cream.', price: 24000, categoryId: 'cold-brew-iced-series', tag: 'Steeped 18 Hours', image: photo.butterCloud },
  { id: 'berrymon', name: 'Berrymon', description: 'Cold Brew, Strawberry, Lemon Syrup.', price: 21000, categoryId: 'cold-brew-iced-series', tag: 'Steeped 18 Hours', image: photo.berrymon },

  // ───────── 4. Coffee Crumble Series ─────────
  { id: 'butterscotch-crumble', name: 'Butterschotch Crumble', description: 'Warm butterscotch coffee drink loaded with baked cookie crumbles.', price: 23000, categoryId: 'coffee-crumble-series', tag: 'Dessert In A Cup', image: photo.butterscotchCrumble },
  { id: 'salted-caramel-crumble', name: 'Salted Caramel Crumble', description: 'Fleur de sel caramel sauce with golden crunchy streusel crumble.', price: 23000, categoryId: 'coffee-crumble-series', tag: 'Dessert In A Cup', image: photo.saltedCaramelCrumble },
  { id: 'hazelnut-crumble', name: 'Hazelnut Crumble', description: 'Roasted Piedmont hazelnut aroma topped with butter biscuit crunch.', price: 23000, categoryId: 'coffee-crumble-series', tag: 'Dessert In A Cup', image: photo.hazelnutCrumble },
  { id: 'ordinary-crumble', name: 'Ordinary Crumble', description: 'Original house-blend iced latte garnished generously with secret recipe crumbles.', price: 23000, categoryId: 'coffee-crumble-series', tag: 'Dessert In A Cup', image: photo.ordinaryCrumble },

  // ───────── 5. Kopi Saku ─────────
  { id: 'saku-butterscotch', name: 'Butterschotch', description: 'Pocket-sized sweet butterscotch espresso blend.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuButterscotch },
  { id: 'saku-rum', name: 'Rum', description: 'Aromatic zero-proof rum essence infused into creamy milk coffee.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuRum },
  { id: 'saku-pandan', name: 'Pandan', description: 'Fresh extracted pandan leaves with sweet condensed milk.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuPandan },
  { id: 'saku-hazelnut', name: 'Hazelnut', description: 'Convenient on-the-go roasted hazelnut milk coffee.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuHazelnut },
  { id: 'saku-aren', name: 'Aren', description: 'Everyday pocket edition of our signature palm sugar kopi susu.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuAren },
  { id: 'saku-salted-caramel', name: 'Salted Caramel', description: 'Pocket format of salted caramel espresso.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuSaltedCaramel },
  { id: 'saku-cranberry-cold-brew', name: 'Cranberry Cold Brew', description: 'Tart mountain cranberries infused into 18-hour slow steep.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuCranberryColdBrew },

  // ───────── 6. Sparkling Drinks ─────────
  { id: 'lemonade', name: 'Lemonade', description: 'Classic sparkling lemon drink with crisp soda.', price: 15000, categoryId: 'sparkling-drinks', tag: 'Hot / Ice', image: photo.lemonade },
  { id: 'strawberry-squash', name: 'Strawberry Squash', description: 'Sweet strawberry puree shaken with lime and club soda.', price: 18000, categoryId: 'sparkling-drinks', tag: 'Hot / Ice', image: photo.strawberrySquash },
  { id: 'lemon-squash', name: 'Lemon Squash', description: 'Zesty citrus squash packed with crushed mint.', price: 18000, categoryId: 'sparkling-drinks', tag: 'Hot / Ice', image: photo.lemonSquash },
  { id: 'karpen-squash', name: 'Karpen Squash', description: 'House green lime secret syrup with cooling effervescence.', price: 20000, categoryId: 'sparkling-drinks', tag: 'Hot / Ice', image: photo.karpenSquash },
  { id: 'sweet-indigo', name: 'Sweet Indigo', description: 'Butterfly pea herbal tea steeped with sweet lychee soda.', price: 20000, categoryId: 'sparkling-drinks', tag: 'Hot / Ice', image: photo.sweetIndigo },

  // ───────── 7. New Dream Coffee ─────────
  { id: 'kopsu-buzz', name: 'Buzz', description: 'Creamy Coffee milk with butterschotch', price: 48000, categoryId: 'new-dream-coffee', tag: 'Hot / Ice', image: photo.buzz },
  { id: 'kopsu-woody', name: 'Woody', description: 'Creamy Coffee milk with palm sugar', price: 45000, categoryId: 'new-dream-coffee', tag: 'Hot / Ice', image: photo.woody },

  // ───────── 8. Our Noodle ─────────
  { id: 'mie-cendana', name: 'Mie Cendana', description: 'Mie khas karpen dengan rasa manis, gurih dan pedas.', price: 17000, categoryId: 'our-noodle', tag: 'Noodles', featured: true, image: assets.featuredProducts.mieCendana },
  { id: 'mie-bangpen', name: 'Mie Bangpen', description: 'Mie khas karpen dengan rasa gurih dan pedas.', price: 17000, categoryId: 'our-noodle', tag: 'Noodles • Spicy', image: photo.mieBangpen },
  { id: 'mie-bagong', name: 'Mie Bagong', description: 'Mie nyemek khas karpen yang kaya akan rasa dan Topping.', price: 20000, categoryId: 'our-noodle', tag: 'Noodles', image: photo.mieBagong },
  { id: 'mie-otama', name: 'Mie Otama', description: 'Mie kuah Curry khas karpen yang kaya akan rasa dan Topping.', price: 26000, categoryId: 'our-noodle', tag: 'Noodles • Soup', image: photo.mieOtama },

  // ───────── 9. Our Main Dish ─────────
  { id: 'curry-fried-rice-chicken-katsu', name: 'Curry Fried Rice Chicken Katsu', description: 'Nasi goreng Curry yang gurih ditambah toping katsu yang juicy.', price: 30000, categoryId: 'our-main-dish', tag: 'Rice', badge: 'Best Seller', badgeTone: 'promo', featured: true, image: assets.featuredProducts.curryFriedRiceChickenKatsu },
  { id: 'chicken-katsu-curry', name: 'Chicken Katsu Curry', description: 'Nasi Sauce Curry yang pekat dan gurih ditambah toping sayur dan katsu yang juicy.', price: 26000, categoryId: 'our-main-dish', tag: 'Rice', badge: 'Best Seller', badgeTone: 'promo', image: photo.chickenKatsuCurry },
  { id: 'chicken-pop-mattah', name: 'Chicken Pop Sambal Matah', description: 'Perpaduan antara nasi putih ditambah telur + ayam pop dan Sambal Matah yang pedas dan gurih.', price: 22000, categoryId: 'our-main-dish', tag: 'Rice', badge: 'Best Seller', badgeTone: 'promo', image: photo.chickenPopSambalMatah },
  { id: 'nasi-goreng-karpen-manis', name: 'Nasi Goreng Karpen — Manis/Asin', description: 'Nasi goreng aromatic dan kaya akan Topping dan rasa buatan karpen.', price: 22000, categoryId: 'our-main-dish', tag: 'Rice', badge: 'Best Seller', badgeTone: 'promo', image: photo.nasiGorengKarpen },
  { id: 'nasi-telur-mattah', name: 'Nasi Telur Mattah', description: 'Crispy-edged fried eggs on steamed rice, drenched with aromatic raw sambal matah.', price: 16000, categoryId: 'our-main-dish', tag: 'Rice', image: photo.nasiTelurMatah },
  { id: 'nasi-kulit-mattah', name: 'Nasi Kulit Mattah', description: 'Crispy golden seasoned chicken skin served over jasmine rice and fresh sambal.', price: 18000, categoryId: 'our-main-dish', tag: 'Rice', image: photo.nasiKulitMatah },
  { id: 'chicken-pop-hot-lava', name: 'Chicken Pop Hot Lava', description: 'Bite-sized chicken tossed in intense spicy molten lava sauce.', price: 20000, categoryId: 'our-main-dish', tag: 'Rice • Spicy', image: photo.chickenPopHotLava },
  { id: 'chicken-pop-bbq', name: 'Chicken Pop BBQ', description: 'Juicy chicken bites coated with sweet smoky hickory barbecue glaze.', price: 20000, categoryId: 'our-main-dish', tag: 'Rice', image: photo.chickenPopBbq },
  { id: 'nasi-gila', name: 'Nasi Gila', description: 'Iconic Jakarta street dish: stir-fried beef sausages, meatballs, egg, and spicy relish.', price: 22000, categoryId: 'our-main-dish', tag: 'Rice', image: photo.nasiGila },
  { id: 'curry-fried-rice-scramble-egg', name: 'Curry Fried Rice Scramble Egg', description: 'Fragrant curry rice blanketed under creamy, buttery scrambled eggs.', price: 24000, categoryId: 'our-main-dish', tag: 'Rice', image: photo.curryFriedRiceScrambleEgg },

  // ───────── 10. Our Snack (camilan + gorengan & bites) ─────────
  { id: 'french-fries-bolognese', name: 'French Fries Bolognese', description: 'Crispy shoestring fries topped with savory beef Bolognese sauce.', price: 25000, categoryId: 'our-snack', tag: 'Snack', image: photo.frenchFriesBolognese },
  { id: 'tahu-cabe-garam', name: 'Tahu Cabe Garam', description: 'Crispy tofu cubes tossed with minced garlic, scallions, and red chilies.', price: 18000, categoryId: 'our-snack', tag: 'Snack', image: photo.tahuCabeGaram },
  { id: 'potato-ball', name: 'Potato Ball', description: 'Crispy panko coated mashed potato croquettes with cheese center.', price: 16000, categoryId: 'our-snack', tag: 'Snack', image: photo.potatoBall },
  { id: 'patta-chips', name: 'Patta Chips', description: 'Thin sliced crunchy potato chips tossed in signature spice mix.', price: 35000, categoryId: 'our-snack', tag: 'Snack', image: photo.pattaChips },

  { id: 'pangsit-goreng', name: 'Pangsit Goreng', description: 'Crispy golden chicken dumplings served with sweet and sour sauce.', price: 12000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.pangsitGoreng },
  { id: 'tempe-mendoan', name: 'Tempe Mendoan', description: 'Warm thin batter-fried fermented soy cakes with sweet dark soy sambal.', price: 13000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.tempeMendoan },
  { id: 'risol-manis', name: 'Risol Manis', description: 'Crispy rolled pastry filled with sweet chocolate and sliced banana.', price: 16000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.risolManis },
  { id: 'risol-mayo', name: 'Risol Mayo', description: 'Stuffed with smoked beef slice, hard-boiled egg, and creamy Japanese mayo.', price: 16000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.risolMayo },
  { id: 'tahu-bakso-goreng', name: 'Tahu Bakso Goreng', description: 'Deep-fried tofu pockets stuffed with savory beef meatball paste.', price: 18000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.tahuBaksoGoreng },
  { id: 'tahu-bakso-kukus', name: 'Tahu Bakso Kukus', description: 'Steamed soft white tofu stuffed with seasoned ground beef filling.', price: 20000, categoryId: 'our-snack', tag: 'Bites', image: photo.tahuBaksoKukus },
  { id: 'tahu-pop', name: 'Tahu Pop', description: 'Crisp bite-sized tofu poppers. Pilihan rasa: Ori / Balado.', price: 15000, categoryId: 'our-snack', tag: 'Ori / Balado', image: photo.tahuPop },
  { id: 'singkong-keju', name: 'Singkong Keju', description: 'Fluffy Indonesian cassava fried to golden crisp and topped with cheddar.', price: 16000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.singkongKeju },
  { id: 'french-fries', name: 'French Fries', description: 'Classic shoestring potato fries. Pilihan rasa: Ori / Balado.', price: 15000, categoryId: 'our-snack', tag: 'Ori / Balado', image: photo.frenchFries },
  { id: 'chicken-strip', name: 'Chicken Strip', description: 'Panko crusted prime tender chicken fillets served with garlic dip.', price: 18000, categoryId: 'our-snack', tag: 'Bites', image: photo.chickenStrip },
  { id: 'dimsum', name: 'Dimsum', description: 'Steamed chicken and shrimp siomay served with artisan chili oil.', price: 18000, categoryId: 'our-snack', tag: 'Bites', image: photo.dimsum },
  { id: 'mix-platter', name: 'Mix Platter', description: 'Sharing combo of french fries, chicken poppers, sausages, and wonton skins.', price: 20000, categoryId: 'our-snack', tag: 'Sharing', image: photo.mixPlatter },
  { id: 'cheese-stick', name: 'Cheese Stick', description: 'Crispy golden crust with rich melted mozzarella string pull inside.', price: 13000, categoryId: 'our-snack', tag: 'Bites', image: photo.cheeseStick },
  { id: 'cireng', name: 'Cireng', description: 'Chewy tapioca fritters served with authentic spicy tamarind bumbu rujak.', price: 13000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.cireng },

  // ───────── 11. Our Dessert ─────────
  { id: 'choco-mountain', name: 'Choco Mountain', description: 'Warm molten chocolate cake with gooey center and cocoa dust.', price: 18000, categoryId: 'our-dessert', tag: 'Sweet', image: photo.chocoMountain },
  { id: 'cheese-cake', name: 'Cheese Cake', description: 'Silky New York style baked cheesecake with buttery graham crust.', price: 22000, categoryId: 'our-dessert', tag: 'Sweet', image: photo.cheeseCake },

  // ───────── 12. Kids Meal Combo & Customizer ─────────
  {
    id: 'kids-meal-package',
    name: 'Kids Meal Package',
    description: 'Paket makan anak dengan piring karakter. Pilih minimal 3 add on: Bakpao Kukus, Nugget Karakter, Dimsum, Chicken BBQ, Scrumbled Egg, Nasi Putih, French Fries, Chicken Katsu, Sosis, Potato Ball.',
    price: 28000,
    categoryId: 'kids-meal-combo',
    tag: 'Min. 3 Add On',
    image: photo.kidsMeal,
    addOns: {
      min: 3,
      options: ['Bakpao Kukus', 'Nugget Karakter', 'Dimsum', 'Chicken BBQ', 'Scrumbled Egg', 'Nasi Putih', 'French Fries', 'Chicken Katsu', 'Sosis', 'Potato Ball']
    }
  }];