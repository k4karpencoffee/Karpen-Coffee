import type { GalleryImage, ImageAsset, VideoAsset } from '../types/content';

/**
 * ============================================================
 *  ASSET REGISTRY — replace images & videos here, never inside components
 * ============================================================
 *  Recommended folder structure (inside /public):
 *
 *    /assets/logo       → logo.png
 *    /assets/hero       → hero.jpg, hero.mp4
 *    /assets/products   → product photos
 *    /assets/promo      → promo posters
 *    /assets/about      → story / about image
 *    /assets/gallery    → outlet photos
 *    /assets/icons      → custom icons
 *
 *  Set `src` to a path like "/assets/hero/hero.jpg" or a full URL.
 *  Leave `src` empty ('') to show the sized placeholder.
 *  Containers keep their size, ratio and crop — only the file changes.
 */

const CDN = "/generated-images";

export const assets = {
  logo: { src: "/LOGOSET2.png", alt: 'Karpen Coffee', label: '[LOGO]' } as ImageAsset,
  /**
   * Beranda hero logo (flies into the navbar on scroll).
   * - color: logo warna asli (karpen-logo.png). white: logo putih (karpen-logo-white.png).
   * - Leave `white` '' to auto-derive a white version from `color` with CSS.
   * - Set `transparent: true` once your files are transparent PNGs (turns off the white-background removal).
   * - width/height = the file's pixel size (keeps the aspect ratio, prevents layout shift).
   */
  heroLogo: {
    color: "/LOGOSET2-1.png",
    white: '',
    transparent: false,
    width: 2576,
    height: 1112,
    alt: 'Karpen Coffee'
  },
  logoFooter: { src: "/LOGOSET2.png", alt: 'Karpen Coffee', label: '[LOGO]' } as ImageAsset,

  hero: {
    src: `${CDN}/b07b7f77-6067-46a6-8cc3-0575bda0c190.jpg`,
    alt: 'Paviliun kayu Karpen Coffee di tepi sawah Pilangbango saat senja',
    label: '[HERO IMAGE]'
  } as ImageAsset,
  /** Optional background video for the hero. Leave src '' to use the hero image only. */
  heroVideo: { src: '', poster: `${CDN}/b07b7f77-6067-46a6-8cc3-0575bda0c190.jpg` } as VideoAsset,

  promoHighlight: {
    src: `${CDN}/a5d26f9a-7aea-43ad-9a10-0bfeaf42460b.jpg`,
    alt: 'Kopi dan camilan hangat sore di Karpen',
    label: '[PROMO IMAGE]'
  } as ImageAsset,

  storyTeaser: {
    src: "/cerita_kami.png",
    alt: 'Gedung Karpen Coffee di malam hari dengan rooftop dan area parkir yang ramai',
    label: '[STORY IMAGE]'
  } as ImageAsset,

  /** Banner "Our Journey" di halaman Cerita Kami (foto teras sore, fokus di area meja bar). */
  about: {
    src: "/cerita_kami_our_journey.png",
    alt: 'Suasana teras Karpen saat sore hari',
    label: '[ABOUT IMAGE]'
  } as ImageAsset,

  /** Lokasi & Ruang: [0] = foto besar atas, [1] = bawah kiri, [2] = bawah kanan. */
  gallery: [
    { src: "/lokasi__ruang.jpg", alt: 'Bar kopi Karpen dengan mesin espresso dan logo Karpen di dinding', label: '[GALLERY IMAGE 1]', caption: 'Suasana Hangat & Adem' },
    { src: "/lokasi__ruang_2.jpg", alt: 'Pelanggan bersantai di meja kayu outdoor yang teduh', label: '[GALLERY IMAGE 2]', caption: 'Outdoor Area • Teduh & Hijau' },
    { src: "/lokasi__ruang_3.jpg", alt: 'Kasir Karpen Coffee melayani pelanggan dengan latar jendela hijau', label: '[GALLERY IMAGE 3]', caption: 'Pelayanan Ramah • Kasir Karpen' }] as
    GalleryImage[],

  products: {
    kopiSusu: `${CDN}/ef43853e-73e2-42bb-8d40-c98ad2937b87.jpg`,
    americano: `${CDN}/c1bba89b-56fd-4cbe-823d-fced5cddb35d.jpg`,
    matcha: `${CDN}/b1b61128-ec68-4833-8810-5d2cd1b063cf.jpg`,
    hydra: `${CDN}/236374b5-02c0-4d29-984f-d90707143e34.jpg`,
    tea: `${CDN}/8b3be319-d115-44fd-9ffe-e286f69baedf.jpg`,
    sparkling: `${CDN}/75ef48c1-5f42-4a00-9b68-c0627b60c2c6.jpg`,
    curryRice: `${CDN}/a3933243-2cf0-432e-ad36-c5bbed1a3537.jpg`,
    mie: `${CDN}/ed826eab-76a7-4331-a44b-dc088180776a.jpg`,
    snack: `${CDN}/da19a95f-9436-4759-929e-b346d81f22a5.jpg`,
    kidsMeal: `${CDN}/4b807864-c8e7-4608-8676-fb9f6954af70.jpg`,
    // Temporary AI photos — replace with real product photos anytime.
    cappuccino: `${CDN}/81126d10-38bd-424c-9e32-de585e04fc71.jpg`,
    fruit: `${CDN}/656c5413-a10c-4c94-9c49-88b300161477.jpg`,
    chocoMilk: `${CDN}/85fcab95-ceab-49dd-a79c-e69251a35c89.jpg`,
    coldBrew: `${CDN}/514de35c-f7fb-47a9-8d20-44b47b38597b.jpg`,
    crumble: `${CDN}/ef641bb5-9f04-4f6c-b250-c951b56df755.jpg`,
    bottle: `${CDN}/103812fa-701a-4aac-80ed-5d3fe5798624.jpg`,
    noodleSoup: `${CDN}/442b85d9-ae3e-46d7-834b-89e431829705.jpg`,
    chickenRice: `${CDN}/00ea216f-1a17-4e6a-a494-8fdb8451a9b6.jpg`,
    gorengan: `${CDN}/b40050e9-38ee-430b-958a-f43dad41ffb0.jpg`,
    toast: `${CDN}/1528b195-3ef8-4107-92e6-1751e38d38a6.jpg`
  },

  /** Foto asli produk favorit di Beranda (nama file = nama produk). */
  featuredProducts: {
    kopsuKarpen: "/Kopi_Susu_Karpen.jpg",
    hydra: "/Hydra.jpg",
    curryFriedRiceChickenKatsu: "/Curry_Fried_Rice_Chicken_Katsu.jpg",
    mieCendana: "/Mie_Cendana.jpg"
  },

  /** Foto asli menu Signature Beverage & Basic Coffee (nama file = nama produk). */
  productPhotos: {
    canella: "/Canella.jpg",
    kopsuDurian: "/Kopi_Susu_Durian.jpg",
    hydra: "/Hydra-1.jpg",
    rubyJane: "/Ruby_Jane.jpg",
    ayra: "/Ayra.jpg",
    airMineral: "/Air_Mineral.jpg",
    longBlack: "/Long_Black.jpg",
    latte: "/Latte.jpg",
    cappuccino: "/Cappucino.jpg",
    // Kopi Susu
    gingerLatte: "/Ginger_Latte.jpg",
    baileys: "/Baileys.jpg",
    goldenberryLatte: "/Goldenberry_Latte.jpg",
    bananaLatte: "/Banana_Latte.jpg",
    flamingoLatte: "/Flamingo_Latte.jpg",
    kopiSusuBiscoff: "/Kopi_Susu_Biscoff.jpg",
    kopiSusuCreamy: "/Kopi_Susu_Creamy.jpg",
    nuttyLatte: "/Nutty_Latte.jpg",
    ordinaryLatte: "/Ordinary_Latte.jpg",
    // Milk Based
    chocolate: "/Chocolate.jpg",
    matcha: "/Matcha.jpg",
    taro: "/Taro.jpg",
    redVelvet: "/Redvelvet.jpg",
    cookiesNCream: "/Cookies_N_Cream.jpg",
    cocomelon: "/Cocomelon.jpg",
    // Tea Based
    icedTea: "/Iced_Tea.jpg",
    tehLegawa: "/Teh_Legawa.jpg",
    lycheeTea: "/Lychee_Tea.jpg",
    lemonTea: "/Lemon_Tea.jpg",
    ichigoTea: "/Ichigo_Tea.jpg",
    koci: "/Koci.jpg",
    tehTarik: "/Teh_Tarik.jpg",
    // The Summer
    cocoBreeze: "/Coco_Breeze.jpg",
    oceanBliss: "/Ocean_Bliss.jpg",
    blackBerryRise: "/Black_Berry_Rise.jpg",
    blackSunset: "/Black_Sunset.jpg",
    // Cold Brew Iced Series
    butterCloud: "/Butter_Cloud.jpg",
    berrymon: "/Berrymon.jpg",
    // Coffee Crumble Series
    butterscotchCrumble: "/Butterscoth_Crumble.jpg",
    saltedCaramelCrumble: "/Salted_Caramel_Crumble.jpg",
    hazelnutCrumble: "/Hazelnut_Crumble.jpg",
    ordinaryCrumble: "/Ordinary_Crumble.jpg",
    // Kopi Saku
    sakuButterscotch: "/Butterscoth.jpg",
    sakuRum: "/Rum.jpg",
    sakuPandan: "/Pandan.jpg",
    sakuHazelnut: "/Hazelnut.jpg",
    sakuAren: "/Aren.jpg",
    sakuSaltedCaramel: "/Salted_Caramel.jpg",
    sakuCranberryColdBrew: "/Cranberry_Cold_Brew.jpg",
    // Sparkling Drinks
    lemonade: "/Lemonade.jpg",
    strawberrySquash: "/Strawberry_Squash.jpg",
    lemonSquash: "/Lemon_Squash.jpg",
    karpenSquash: "/Karpen_Squash.jpg",
    sweetIndigo: "/Sweet_Indigo.jpg",
    // New Dream Coffee
    buzz: "/Buzz.jpg",
    woody: "/Woody.jpg",
    // Best Seller Food
    chickenKatsuCurry: "/Chicken_Katsu_Curry.jpg",
    chickenPopSambalMatah: "/Chicken_Pop_Sambal_Matah.jpg",
    nasiGorengKarpen: "/Nasi_Goreng_Karpen.jpg",
    // Our Noodle
    mieBangpen: "/Mie_Bangpen.jpg",
    mieBagong: "/Mie_Bagong.jpg",
    mieOtama: "/Mie_Otama.jpg",
    // Other Main Dish
    nasiTelurMatah: "/Nasi_Telur_Matah.jpg",
    nasiKulitMatah: "/Nasi_Kulit_Matah.jpg",
    chickenPopHotLava: "/Chicken_Pop_Hot_Lava.jpg",
    chickenPopBbq: "/Chicken_Pop_BBQ.jpg",
    nasiGila: "/Nasi_Gila.jpg",
    curryFriedRiceScrambleEgg: "/Curry_Fried_Rice_Scrumble_egg.jpg",
    // Our Snack
    frenchFriesBolognese: "/French_Fries_Bolognese.jpg",
    chocoMountain: "/Choco_Mountain.jpg",
    cheeseCake: "/Cheese_Cake.jpg",
    tahuCabeGaram: "/Tahu_Cabe_Garam.jpg",
    potatoBall: "/Potato_Ball.jpg",
    pattaChips: "/Patta_Chips.jpg",
    // Other (Gorengan & Bites)
    pangsitGoreng: "/Pangsit_Goreng.jpg",
    tempeMendoan: "/Tempe_Mendoan.jpg",
    risolManis: "/Risol_Manis.jpg",
    risolMayo: "/Risol_Mayo.jpg",
    tahuBaksoGoreng: "/Tahu_Bakso_Goreng.jpg",
    tahuBaksoKukus: "/Tahu_Bakso_Kukus.jpg",
    tahuPop: "/Tahu_Pop.jpg",
    singkongKeju: "/Singkong_Keju.jpg",
    frenchFries: "/French_Fries.jpg",
    chickenStrip: "/Chicken_Strip.jpg",
    dimsum: "/Dimsum.jpg",
    mixPlatter: "/Mix_Platter.jpg",
    cheeseStick: "/Cheese_Stick.jpg",
    cireng: "/Cireng.jpg",
    // Kids Meal
    kidsMeal: "/Kids_Meal.jpg"
  },

  promo: {
    tgif1: "/promo_tgi_friday_1.jpg",
    tgif2: "/promo_tgi_friday_2.jpg",
    lunch: "/promo_lunch.jpg",
    student: "/promo_student.jpg"
  }
};