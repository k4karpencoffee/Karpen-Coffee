import type { MenuCategory, MenuGroup, Product } from '../types/content';
import { assets } from './assets';
import { lang, localize } from '../i18n/lang';
import { productTextEn } from './productTextEn';

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
const menuGroupsId: MenuGroup[] = [
  {
    id: 'drinks',
    title: 'Minuman',
    subtitle: 'Beverage',
    description: 'Nasi, mie, camilan, gorengan, dessert & paket anak.',
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

export const menuGroups: MenuGroup[] = localize(menuGroupsId, [
  {
    title: 'Drinks'
  },
  {
    title: 'Food'
  }
]);


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
  // MAKANAN (8–12)
  { id: 'our-noodle', groupId: 'food', title: 'Our Noodle' },
  { id: 'our-main-dish', groupId: 'food', title: 'Our Main Dish' },
  { id: 'our-snack', groupId: 'food', title: 'Our Snack' },
  { id: 'our-dessert', groupId: 'food', title: 'Our Dessert' },
  { id: 'kids-meal-combo', groupId: 'food', title: 'Kids Meal Combo & Customizer' }];

const baseProducts: Product[] = [
  // ───────── 1. Signature Beverage ─────────
  { id: 'kopsu-karpen', name: 'Kopi Susu Karpen', description: 'Perpaduan kopi susu creamy, pandan, dan mint yang segar.', price: 22000, categoryId: 'signature-beverage', tag: 'Iced', featured: true, image: assets.featuredProducts.kopsuKarpen },
  { id: 'canella', name: 'Canella', description: 'Kopi dengan sentuhan raisin butterscotch dan susu oat yang halus dan creamy.', price: 24000, categoryId: 'signature-beverage', tag: 'Hot / Ice', image: photo.canella },
  { id: 'kopsu-durian', name: 'Kopi Susu Durian', description: 'Kopi susu durian khas Karpen yang creamy, legit, dan berkarakter.', price: 25000, categoryId: 'signature-beverage', tag: 'Iced', image: photo.kopsuDurian },
  { id: 'hydra', name: 'Hydra', description: 'Perpaduan sirup mangga dan Yakult yang ringan dan segar.', price: 20000, categoryId: 'signature-beverage', tag: 'Iced', featured: true, image: photo.hydra },
  { id: 'ruby-jane', name: 'Ruby Jane', description: 'Perpaduan sirup stroberi, macchiato, dan susu oat yang lembut dan halus.', price: 22000, categoryId: 'signature-beverage', tag: 'Iced', image: photo.rubyJane },
  { id: 'ayra', name: 'Ayra', description: 'Perpaduan Yakult dan stroberi yang ringan dan segar.', price: 22000, categoryId: 'signature-beverage', tag: 'Hot / Ice', image: photo.ayra },
  { id: 'air-mineral', name: 'Air Mineral', description: 'Air mineral pegunungan alami yang segar dan murni.', price: 7000, categoryId: 'signature-beverage', tag: 'Air Mineral', image: photo.airMineral },

  // Signature Beverage — Basic Coffee
  { id: 'long-black', name: 'Long Black', description: 'Dua shot espresso house blend Karpen dengan air mineral tersaring dan crema yang sempurna.', price: 18000, categoryId: 'signature-beverage', subcategory: 'Basic Coffee', tag: 'Hot / Ice', image: photo.longBlack },
  { id: 'latte', name: 'Latte', description: 'Espresso yang seimbang berpadu susu segar dikukus dengan busa mikro yang halus.', price: 18000, categoryId: 'signature-beverage', subcategory: 'Basic Coffee', tag: 'Hot / Ice', image: photo.latte },
  { id: 'cappuccino', name: 'Cappuccino', description: 'Perpaduan klasik espresso pekat, susu panas, dan lapisan busa mikro yang lembut.', price: 18000, categoryId: 'signature-beverage', subcategory: 'Basic Coffee', tag: 'Hot / Ice', image: photo.cappuccino },

  // Signature Beverage — Kopi Susu
  { id: 'ginger-latte', name: 'Ginger Latte', description: 'Minuman hangat dari susu dan ekstrak jahe yang menghangatkan badan.', price: 26000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.gingerLatte },
  { id: 'baileys', name: 'Baileys', description: 'Esens krim Irlandia (non-alkohol) dikocok bersama espresso pekat dan krim segar.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.baileys },
  { id: 'goldenberry-latte', name: 'Goldenberry Latte', description: 'Sari buah ciplukan yang asam segar berpadu dengan kopi susu yang kaya rasa.', price: 20000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.goldenberryLatte },
  { id: 'banana-latte', name: 'Banana Latte', description: 'Sirup pisang matang yang manis berpadu lembut dengan kopi sangrai kami.', price: 20000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.bananaLatte },
  { id: 'flamingo-latte', name: 'Flamingo Latte', description: 'Susu rasa stroberi berpadu dengan shot biji kopi Karpen sangrai gelap.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.flamingoLatte },
  { id: 'kopi-susu-biscoff', name: 'Kopi Susu Biscoff', description: 'Perpaduan espresso, susu creamy, dan remahan biskuit Lotus Biscoff renyah yang manis gurih.', price: 25000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.kopiSusuBiscoff },
  { id: 'kopi-susu-creamy', name: 'Kopi Susu Creamy', description: 'Basis susu ekstra kaya untuk pencinta rasa manis yang pekat dan penuh.', price: 20000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.kopiSusuCreamy },
  { id: 'nutty-latte', name: 'Nutty Latte', description: 'Aroma hazelnut panggang dan makadamia berpadu dengan susu serta espresso.', price: 23000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.nuttyLatte },
  { id: 'ordinary-latte', name: 'Ordinary Latte', description: 'Perpaduan klasik espresso house blend Karpen dan susu segar murni yang lembut dan seimbang.', price: 22000, categoryId: 'signature-beverage', subcategory: 'Kopi Susu', tag: 'Hot / Ice', image: photo.ordinaryLatte },

  // Signature Beverage — Milk Based
  { id: 'chocolate', name: 'Chocolate', description: 'Cokelat Belgia pekat yang dikocok perlahan bersama susu murni.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.chocolate },
  { id: 'matcha', name: 'Matcha', description: 'Matcha hijau khas Jepang (Uji) dikocok bersama susu segar.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.matcha },
  { id: 'taro', name: 'Taro', description: 'Taro lembut beraroma vanila alami dengan rasa creamy yang menghangatkan.', price: 20000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.taro },
  { id: 'red-velvet', name: 'Red Velvet', description: 'Sentuhan remah cokelat dan manisnya krim keju berpadu dalam susu murni.', price: 20000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.redVelvet },
  { id: 'cookies-n-cream', name: 'Cookies N Cream', description: 'Biskuit sandwich cokelat yang renyah diblender bersama susu vanila.', price: 23000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.cookiesNCream },
  { id: 'cocomelon', name: 'Cocomelon', description: 'Sari melon manis berpadu dengan air kelapa organik dan susu.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Milk Based', tag: 'Hot / Ice', image: photo.cocomelon },

  // Signature Beverage — Tea Based
  { id: 'iced-tea', name: 'Iced Tea', description: 'Seduhan teh hitam khas perkebunan Indonesia, segar dan manis ringan.', price: 10000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.icedTea },
  { id: 'teh-legawa', name: 'Teh Legawa', description: 'Racikan khas Karpen dari daun melati Jawa, aroma pandan, dan serai.', price: 16000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.tehLegawa },
  { id: 'lychee-tea', name: 'Lychee Tea', description: 'Buah leci utuh yang dikupas berpadu dengan teh hitam beraroma.', price: 21000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.lycheeTea },
  { id: 'lemon-tea', name: 'Lemon Tea', description: 'Perasan lemon segar diseduh bersama daun teh hitam untuk rasa yang menyegarkan.', price: 16000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.lemonTea },
  { id: 'ichigo-tea', name: 'Ichigo Tea', description: 'Kompot stroberi ala Jepang berpadu dengan teh Ceylon yang segar.', price: 15000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.ichigoTea },
  { id: 'koci', name: 'Koci', description: 'Seduhan teh rempah hangat yang menenangkan dengan nuansa jahe dan madu.', price: 18000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.koci },
  { id: 'teh-tarik', name: 'Teh Tarik', description: 'Teh susu tarik berbusa dengan cita rasa teh manis khas Indonesia.', price: 16000, categoryId: 'signature-beverage', subcategory: 'Tea Based', tag: 'Hot / Ice', image: photo.tehTarik },

  // ───────── 2. The Summer ─────────
  { id: 'coco-breeze', name: 'Coco Breeze', description: 'Mint - Hydrococo', price: 20000, categoryId: 'the-summer', tag: 'Mocktail', image: photo.cocoBreeze },
  { id: 'ocean-bliss', name: 'Ocean Bliss', description: 'Lychee - Sparkling', price: 20000, categoryId: 'the-summer', tag: 'Mocktail', image: photo.oceanBliss },
  { id: 'bless-berry-rise', name: 'Black Berry Rise', description: 'Espresso - Strawberry', price: 20000, categoryId: 'the-summer', tag: 'Mocktail', image: photo.blackBerryRise },
  { id: 'black-sunset', name: 'Black Sunset', description: 'Espresso - Orange', price: 20000, categoryId: 'the-summer', tag: 'Mocktail', image: photo.blackSunset },

  // ───────── 3. Cold Brew Iced Series ─────────
  { id: 'butter-cloud', name: 'Butter Cloud', description: 'Cold Brew, Butterscotch, Coffee Cream.', price: 24000, categoryId: 'cold-brew-iced-series', tag: 'Diseduh 18 Jam', image: photo.butterCloud },
  { id: 'berrymon', name: 'Berrymon', description: 'Cold Brew, Strawberry, Lemon Syrup.', price: 21000, categoryId: 'cold-brew-iced-series', tag: 'Diseduh 18 Jam', image: photo.berrymon },

  // ───────── 4. Coffee Crumble Series ─────────
  { id: 'butterscotch-crumble', name: 'Butterschotch Crumble', description: 'Minuman kopi butterscotch hangat dengan banyak remah kue panggang.', price: 23000, categoryId: 'coffee-crumble-series', tag: 'Pencuci Mulut Segelas', image: photo.butterscotchCrumble },
  { id: 'salted-caramel-crumble', name: 'Salted Caramel Crumble', description: 'Saus karamel fleur de sel dengan remah streusel keemasan yang renyah.', price: 23000, categoryId: 'coffee-crumble-series', tag: 'Pencuci Mulut Segelas', image: photo.saltedCaramelCrumble },
  { id: 'hazelnut-crumble', name: 'Hazelnut Crumble', description: 'Aroma hazelnut Piedmont panggang dengan taburan biskuit mentega yang renyah.', price: 23000, categoryId: 'coffee-crumble-series', tag: 'Pencuci Mulut Segelas', image: photo.hazelnutCrumble },
  { id: 'ordinary-crumble', name: 'Ordinary Crumble', description: 'Es latte house blend original dengan taburan melimpah remah resep rahasia.', price: 23000, categoryId: 'coffee-crumble-series', tag: 'Pencuci Mulut Segelas', image: photo.ordinaryCrumble },

  // ───────── 5. Kopi Saku ─────────
  { id: 'saku-butterscotch', name: 'Butterschotch', description: 'Espresso butterscotch manis dalam ukuran saku.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuButterscotch },
  { id: 'saku-rum', name: 'Rum', description: 'Esens rum aromatik tanpa alkohol berpadu dengan kopi susu yang creamy.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuRum },
  { id: 'saku-pandan', name: 'Pandan', description: 'Ekstrak daun pandan segar dengan susu kental manis.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuPandan },
  { id: 'saku-hazelnut', name: 'Hazelnut', description: 'Kopi susu hazelnut panggang yang praktis dibawa ke mana saja.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuHazelnut },
  { id: 'saku-aren', name: 'Aren', description: 'Edisi saku harian dari kopi susu gula aren andalan kami.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuAren },
  { id: 'saku-salted-caramel', name: 'Salted Caramel', description: 'Espresso salted caramel dalam format saku.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuSaltedCaramel },
  { id: 'saku-cranberry-cold-brew', name: 'Cranberry Cold Brew', description: 'Cranberry asam segar berpadu dengan seduhan dingin selama 18 jam.', price: 22000, categoryId: 'kopi-saku', tag: 'Hot / Ice', image: photo.sakuCranberryColdBrew },

  // ───────── 6. Sparkling Drinks ─────────
  { id: 'lemonade', name: 'Lemonade', description: 'Minuman lemon soda klasik yang segar dan berbuih.', price: 15000, categoryId: 'sparkling-drinks', tag: 'Hot / Ice', image: photo.lemonade },
  { id: 'strawberry-squash', name: 'Strawberry Squash', description: 'Puree stroberi manis dikocok bersama jeruk nipis dan soda.', price: 18000, categoryId: 'sparkling-drinks', tag: 'Hot / Ice', image: photo.strawberrySquash },
  { id: 'lemon-squash', name: 'Lemon Squash', description: 'Squash sitrus yang segar dengan daun mint yang digerus.', price: 18000, categoryId: 'sparkling-drinks', tag: 'Hot / Ice', image: photo.lemonSquash },
  { id: 'karpen-squash', name: 'Karpen Squash', description: 'Sirup rahasia jeruk nipis hijau khas Karpen dengan sensasi soda yang menyegarkan.', price: 20000, categoryId: 'sparkling-drinks', tag: 'Hot / Ice', image: photo.karpenSquash },
  { id: 'sweet-indigo', name: 'Sweet Indigo', description: 'Teh bunga telang diseduh bersama soda leci yang manis.', price: 20000, categoryId: 'sparkling-drinks', tag: 'Hot / Ice', image: photo.sweetIndigo },

  // ───────── 7. New Dream Coffee ─────────
  { id: 'kopsu-buzz', name: 'Buzz', description: 'Kopi susu creamy dengan butterscotch', price: 48000, categoryId: 'new-dream-coffee', tag: 'Hot / Ice', image: photo.buzz },
  { id: 'kopsu-woody', name: 'Woody', description: 'Kopi susu creamy dengan gula aren', price: 45000, categoryId: 'new-dream-coffee', tag: 'Hot / Ice', image: photo.woody },

  // ───────── 8. Our Noodle ─────────
  { id: 'mie-cendana', name: 'Mie Cendana', description: 'Mie khas Karpen dengan rasa manis, gurih, dan pedas.', price: 17000, categoryId: 'our-noodle', tag: 'Noodles', featured: true, image: assets.featuredProducts.mieCendana },
  { id: 'mie-bangpen', name: 'Mie Bangpen', description: 'Mie khas Karpen dengan rasa gurih dan pedas.', price: 17000, categoryId: 'our-noodle', tag: 'Noodles • Spicy', image: photo.mieBangpen },
  { id: 'mie-bagong', name: 'Mie Bagong', description: 'Mie nyemek khas Karpen yang kaya rasa dan topping.', price: 20000, categoryId: 'our-noodle', tag: 'Noodles', image: photo.mieBagong },
  { id: 'mie-otama', name: 'Mie Otama', description: 'Mie kuah kari khas Karpen yang kaya rasa dan topping.', price: 26000, categoryId: 'our-noodle', tag: 'Noodles • Soup', image: photo.mieOtama },

  // ───────── 9. Our Main Dish ─────────
  { id: 'curry-fried-rice-chicken-katsu', name: 'Curry Fried Rice Chicken Katsu', description: 'Nasi goreng kari yang gurih dengan katsu ayam yang empuk dan lezat.', price: 30000, categoryId: 'our-main-dish', tag: 'Rice', badge: 'Best Seller', badgeTone: 'promo', featured: true, image: assets.featuredProducts.curryFriedRiceChickenKatsu },
  { id: 'chicken-katsu-curry', name: 'Chicken Katsu Curry', description: 'Nasi dengan saus kari yang pekat dan gurih, ditambah sayur dan katsu ayam yang empuk.', price: 26000, categoryId: 'our-main-dish', tag: 'Rice', badge: 'Best Seller', badgeTone: 'promo', image: photo.chickenKatsuCurry },
  { id: 'chicken-pop-mattah', name: 'Chicken Pop Sambal Matah', description: 'Perpaduan nasi putih, telur, ayam pop, dan sambal matah yang pedas dan gurih.', price: 22000, categoryId: 'our-main-dish', tag: 'Rice', badge: 'Best Seller', badgeTone: 'promo', image: photo.chickenPopSambalMatah },
  { id: 'nasi-goreng-karpen-manis', name: 'Nasi Goreng Karpen — Manis/Asin', description: 'Nasi goreng beraroma dengan banyak isian dan cita rasa buatan Karpen.', price: 22000, categoryId: 'our-main-dish', tag: 'Rice', badge: 'Best Seller', badgeTone: 'promo', image: photo.nasiGorengKarpen },
  { id: 'nasi-telur-mattah', name: 'Nasi Telur Mattah', description: 'Telur ceplok tepi renyah di atas nasi hangat, disiram sambal matah segar yang harum.', price: 16000, categoryId: 'our-main-dish', tag: 'Rice', image: photo.nasiTelurMatah },
  { id: 'nasi-kulit-mattah', name: 'Nasi Kulit Mattah', description: 'Kulit ayam berbumbu yang renyah keemasan di atas nasi putih wangi dengan sambal segar.', price: 18000, categoryId: 'our-main-dish', tag: 'Rice', image: photo.nasiKulitMatah },
  { id: 'chicken-pop-hot-lava', name: 'Chicken Pop Hot Lava', description: 'Potongan ayam kecil dilumuri saus hot lava yang pedas menggigit.', price: 20000, categoryId: 'our-main-dish', tag: 'Rice • Spicy', image: photo.chickenPopHotLava },
  { id: 'chicken-pop-bbq', name: 'Chicken Pop BBQ', description: 'Potongan ayam empuk berbalut saus barbekyu hickory yang manis beraroma asap.', price: 20000, categoryId: 'our-main-dish', tag: 'Rice', image: photo.chickenPopBbq },
  { id: 'nasi-gila', name: 'Nasi Gila', description: 'Hidangan jalanan khas Jakarta: tumisan sosis sapi, bakso, telur, dan sambal pedas.', price: 22000, categoryId: 'our-main-dish', tag: 'Rice', image: photo.nasiGila },
  { id: 'curry-fried-rice-scramble-egg', name: 'Curry Fried Rice Scramble Egg', description: 'Nasi goreng kari yang harum, diselimuti telur orak-arik yang creamy dan gurih mentega.', price: 24000, categoryId: 'our-main-dish', tag: 'Rice', image: photo.curryFriedRiceScrambleEgg },

  // ───────── 10. Our Snack (camilan + gorengan) ─────────
  { id: 'french-fries-bolognese', name: 'French Fries Bolognese', description: 'Kentang goreng tipis renyah dengan siraman saus Bolognese daging sapi yang gurih.', price: 25000, categoryId: 'our-snack', tag: 'Snack', image: photo.frenchFriesBolognese },
  { id: 'tahu-cabe-garam', name: 'Tahu Cabe Garam', description: 'Tahu goreng renyah ditumis dengan bawang putih cincang, daun bawang, dan cabai merah.', price: 18000, categoryId: 'our-snack', tag: 'Snack', image: photo.tahuCabeGaram },
  { id: 'potato-ball', name: 'Potato Ball', description: 'Kroket kentang berbalut tepung panko yang renyah dengan isian keju.', price: 16000, categoryId: 'our-snack', tag: 'Snack', image: photo.potatoBall },
  { id: 'patta-chips', name: 'Patta Chips', description: 'Keripik kentang tipis yang renyah dengan bumbu rempah khas Karpen.', price: 35000, categoryId: 'our-snack', tag: 'Snack', image: photo.pattaChips },
  { id: 'pangsit-goreng', name: 'Pangsit Goreng', description: 'Pangsit ayam goreng renyah keemasan dengan saus asam manis.', price: 12000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.pangsitGoreng },
  { id: 'tempe-mendoan', name: 'Tempe Mendoan', description: 'Tempe tipis berbalut adonan tepung digoreng hangat, disajikan dengan sambal kecap manis.', price: 13000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.tempeMendoan },
  { id: 'risol-manis', name: 'Risol Manis', description: 'Kulit risol renyah berisi cokelat manis dan irisan pisang.', price: 16000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.risolManis },
  { id: 'risol-mayo', name: 'Risol Mayo', description: 'Berisi irisan daging sapi asap, telur rebus, dan mayo Jepang yang creamy.', price: 16000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.risolMayo },
  { id: 'tahu-bakso-goreng', name: 'Tahu Bakso Goreng', description: 'Tahu goreng berisi adonan bakso sapi yang gurih.', price: 18000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.tahuBaksoGoreng },
  { id: 'tahu-bakso-kukus', name: 'Tahu Bakso Kukus', description: 'Tahu putih lembut kukus berisi daging sapi cincang berbumbu.', price: 20000, categoryId: 'our-snack', tag: 'Bites', image: photo.tahuBaksoKukus },
  { id: 'tahu-pop', name: 'Tahu Pop', description: 'Tahu goreng krispi ukuran sekali gigit. Pilihan rasa: Ori / Balado.', price: 15000, categoryId: 'our-snack', tag: 'Ori / Balado', image: photo.tahuPop },
  { id: 'singkong-keju', name: 'Singkong Keju', description: 'Singkong empuk digoreng hingga renyah keemasan dengan taburan keju cheddar.', price: 16000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.singkongKeju },
  { id: 'french-fries', name: 'French Fries', description: 'Kentang goreng tipis klasik. Pilihan rasa: Ori / Balado.', price: 15000, categoryId: 'our-snack', tag: 'Ori / Balado', image: photo.frenchFries },
  { id: 'chicken-strip', name: 'Chicken Strip', description: 'Fillet ayam empuk berbalut tepung panko renyah, disajikan dengan saus bawang putih.', price: 18000, categoryId: 'our-snack', tag: 'Bites', image: photo.chickenStrip },
  { id: 'dimsum', name: 'Dimsum', description: 'Siomay ayam dan udang kukus, disajikan dengan minyak cabai artisan.', price: 18000, categoryId: 'our-snack', tag: 'Bites', image: photo.dimsum },
  { id: 'mix-platter', name: 'Mix Platter', description: 'Paket berbagi berisi kentang goreng, chicken popper, sosis, dan kulit pangsit goreng.', price: 20000, categoryId: 'our-snack', tag: 'Sharing', image: photo.mixPlatter },
  { id: 'cheese-stick', name: 'Cheese Stick', description: 'Kulit keemasan renyah dengan keju mozzarella yang melar di dalamnya.', price: 13000, categoryId: 'our-snack', tag: 'Bites', image: photo.cheeseStick },
  { id: 'cireng', name: 'Cireng', description: 'Cireng tapioka kenyal, disajikan dengan bumbu rujak asam pedas yang autentik.', price: 13000, categoryId: 'our-snack', tag: 'Gorengan', image: photo.cireng },

  // ───────── 11. Our Dessert ─────────
  { id: 'choco-mountain', name: 'Choco Mountain', description: 'Kue cokelat lumer hangat dengan isian meleleh dan taburan kakao.', price: 18000, categoryId: 'our-dessert', tag: 'Sweet', image: photo.chocoMountain },
  { id: 'cheese-cake', name: 'Cheese Cake', description: 'Cheesecake panggang gaya New York yang lembut dengan alas biskuit graham beraroma mentega.', price: 22000, categoryId: 'our-dessert', tag: 'Sweet', image: photo.cheeseCake },

  // ───────── 12. Kids Meal Combo & Customizer ─────────
  {
    id: 'kids-meal-package',
    name: 'Kids Meal Package',
    description: 'Paket makan anak dengan piring karakter. Pilih minimal 3 pilihan tambahan: Bakpao Kukus, Nugget Karakter, Dimsum, Chicken BBQ, Scrumbled Egg, Nasi Putih, French Fries, Chicken Katsu, Sosis, Potato Ball.',
    price: 28000,
    categoryId: 'kids-meal-combo',
    tag: 'Min. 3 Pilihan Tambahan',
    image: photo.kidsMeal,
    addOns: {
      min: 3,
      options: ['Bakpao Kukus', 'Nugget Karakter', 'Dimsum', 'Chicken BBQ', 'Scrumbled Egg', 'Nasi Putih', 'French Fries', 'Chicken Katsu', 'Sosis', 'Potato Ball']
    }
  }];

/** Nama, kategori, badge, dan tag singkat tetap sama di kedua bahasa. Hanya teks di productTextEn yang berganti. */
export const products: Product[] = baseProducts.map((p) => {
  const en = lang === 'en' ? productTextEn[p.id] : undefined;
  return en ? { ...p, ...en } : p;
});