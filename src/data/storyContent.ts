import type { TimelineEntry } from '../types/content';
import { assets } from './assets';
import { localize } from '../i18n/lang';

/** Our Story page copy. */
const storyContentId = {
  breadcrumb: 'Cerita Kami',
  title: 'Perjalanan Kami: 2021 – 2026',
  subtitle: 'Dari Coffee Shop Kecil Menjadi Rumah yang Terus Bertumbuh di Madiun.',
  intro: 'Setiap perjalanan punya cerita. Karpen Coffee bukan hanya tentang kopi, makanan, atau tempat untuk berkumpul. Karpen adalah perjalanan tentang belajar, bertumbuh, membangun, dan menciptakan pengalaman yang membuat setiap pelanggan ingin kembali.',
  image: assets.about,
  imageCaption: 'Pilangbango, Madiun — Jawa Timur',
  background: {
    overline: 'Latar Belakang Karpen',
    title: 'Berawal dari Cerita Keluarga',
    highlight: '“Karpen” lahir dari kata carpenter — tukang kayu.',
    paragraphs: ['Karpen Coffee berdiri sejak 2021, berawal dari cerita keluarga. Pemilik Karpen Coffee merupakan anak dari seorang tukang kayu atau “carpenter”. Dari situlah nama “Karpen” lahir dan menjadi inspirasi konsep kayu yang menjadi karakter awal coffee shop ini.', 'Seiring berkembangnya waktu, Karpen hadir sebagai tempat istimewa yang tersembunyi di Madiun dengan pemandangan sawah, kereta yang melintas, dan suasana yang tenang. Karpen ingin menjadi tempat untuk menikmati makanan dan minuman yang enak, sekaligus mendapatkan pelayanan yang ramah dan membuat nyaman.', 'Bagi Karpen, pengalaman pelanggan bukan hanya tentang apa yang mereka nikmati di meja, tetapi juga bagaimana mereka merasa selama berada di dalamnya. Karena itu, Karpen terus berkembang dengan satu tujuan, yaitu menciptakan tempat yang nyaman, menyajikan makanan dan minuman yang berkualitas, serta memberikan pelayanan yang membuat orang ingin kembali.']
  },
  timeline: {
    pill: 'Perjalanan & Pertumbuhan',
    title: 'Catatan Langkah Demi Langkah',
    description: 'Menelusuri transformasi Karpen Coffee dari mimpi awal\ndi tahun 2021 hingga babak baru 2026.',
    expandLabel: 'Lihat Selengkapnya (2022 – 2026)',
    collapseLabel: 'Tutup'
  },
  visionMission: {
    overline: 'Visi & Misi',
    title: 'Arah & Komitmen Karpen',
    tagline: 'Better Days with Karpen.',
    visionTitle: 'Visi',
    vision: 'Menjadikan Karpen sebagai merek kopi bergaya hidup terdepan di Kota Madiun dan sebagai wadah untuk meraih mimpi, bertumbuh, berkarya, serta membangun kehidupan yang seimbang antara profesionalisme, tanggung jawab, dan nilai ibadah. Dan menjadi tempat untuk bekerja dengan tanggung jawab, serta beribadah dengan penuh keikhlasan.',
    missionTitle: 'Misi',
    missions: ['Menyediakan kopi dan produk berkualitas dengan standar yang konsisten.', 'Menyediakan tempat yang nyaman, bersih, aman, dan menyenangkan untuk berkumpul dan bersantai.', 'Menciptakan lingkungan kerja yang sehat, disiplin, profesional, dan mendukung setiap staf untuk belajar serta berkembang.', 'Membangun budaya kerja yang menghargai waktu dan kesempatan beribadah sesuai agama dan kepercayaan masing-masing, dengan tetap menjaga tanggung jawab terhadap pekerjaan dan operasional.', 'Mendorong setiap staf untuk memiliki pola pikir yang berorientasi pada target, bertanggung jawab, saling menghormati, dan mampu bekerja sama sebagai tim.']
  },
  thankYou: {
    title: 'Terima Kasih Telah Menjadi Bagian\ndari Perjalanan Kami.',
    description: 'Dari secangkir kopi sederhana hingga menjadi tempat yang penuh cerita. Terima kasih telah tumbuh bersama Karpen, menjadi bagian dari setiap proses, dan selalu punya alasan untuk kembali.',
    quote: '“Better Days with Karpen.”',
    primaryCta: {
      label: 'Jelajahi Menu Kami',
      to: '/menu'
    },
    secondaryCta: {
      label: 'Kunjungi Outlet Madiun',
      to: '/outlet'
    }
  }
};

export const storyContent = localize(storyContentId, {
  breadcrumb: 'Our Story',
  title: 'Our Journey: 2021 – 2026',
  subtitle: 'From a Small Coffee Shop to a Growing Home in Madiun.',
  intro: 'Every journey has a story. Karpen Coffee is not only about coffee, food, or a place to gather. Karpen is a journey of learning, growing, building, and creating experiences that make every guest want to come back.',
  imageCaption: 'Pilangbango, Madiun — East Java',
  background: {
    overline: 'Karpen Background',
    title: 'It Began with a Family Story',
    highlight: '“Karpen” was born from the word carpenter — a woodworker.',
    paragraphs: [
      'Karpen Coffee was founded in 2021, beginning with a family story. The owner of Karpen Coffee is the child of a woodworker, or “carpenter”. That is where the name “Karpen” came from, and it inspired the wooden concept that became this coffee shop’s original character.',
      'As time went on, Karpen became a special hidden gem in Madiun, with views of rice fields, passing trains, and a calm atmosphere. Karpen wants to be a place to enjoy good food and drinks, while receiving friendly service that makes you feel at ease.',
      'For Karpen, a guest’s experience is not only about what they enjoy at the table, but also how they feel while they are here. That is why Karpen keeps growing with one goal: to create a comfortable place, serve quality food and drinks, and give service that makes people want to come back.'
    ]
  },
  timeline: {
    pill: 'Journey & Growth',
    title: 'Step by Step',
    description: 'Tracing Karpen Coffee’s transformation from its first dream\nin 2021 to a new chapter in 2026.',
    expandLabel: 'Read More (2022 – 2026)',
    collapseLabel: 'Collapse'
  },
  visionMission: {
    overline: 'Vision & Mission',
    title: 'Karpen’s Direction & Commitment',
    visionTitle: 'Vision',
    vision: 'To make Karpen the leading lifestyle coffee brand in Madiun City, and a place to pursue dreams, grow, create, and build a balanced life between professionalism, responsibility, and faith. And to be a place to work with responsibility and to worship with sincerity.',
    missionTitle: 'Mission',
    missions: [
      'Provide quality coffee and products with consistent standards.',
      'Provide a comfortable, clean, safe, and enjoyable place to gather and relax.',
      'Create a healthy, disciplined, professional work environment that supports every team member to learn and grow.',
      'Build a work culture that respects time and opportunities for worship according to each person’s religion and beliefs, while keeping responsibility for work and operations.',
      'Encourage every team member to have a target-oriented, responsible mindset, respect one another, and work well together as a team.'
    ]
  },
  thankYou: {
    title: 'Thank You for Being Part\nof Our Journey.',
    description: 'From a simple cup of coffee to a place full of stories. Thank you for growing with Karpen, for being part of every step, and for always having a reason to come back.',
    primaryCta: {
      label: 'Explore Our Menu'
    },
    secondaryCta: {
      label: 'Visit the Madiun Outlet'
    }
  }
});
const timelineEntriesId: TimelineEntry[] = [{
  year: '2021',
  title: 'Berawal dari Mimpi Sederhana',
  paragraphs: ['Karpen Coffee memulai perjalanannya sebagai sebuah coffee shop kecil dengan mimpi sederhana, yaitu menghadirkan tempat untuk menikmati kopi dan menghabiskan waktu bersama.', 'Di masa awal, banyak hal masih dikerjakan secara sederhana. Sistem operasional belum tertata, standar pelayanan masih terus dipelajari, dan setiap hari menjadi proses untuk memahami bagaimana membangun sebuah usaha yang bisa bertahan.', 'Dari sinilah fondasi Karpen mulai terbentuk, dengan semangat untuk terus mencoba, belajar, dan berkembang.']
}, {
  year: '2022',
  title: 'Belajar Menjadi Lebih Baik',
  paragraphs: ['Seiring berjalannya waktu, Karpen mulai memahami bahwa membangun coffee shop bukan hanya tentang menyajikan kopi yang enak, tetapi juga tentang bagaimana menciptakan pengalaman yang berkesan.', 'Kami mulai belajar mengenal pelanggan, memperbaiki kualitas produk, membangun kekompakan tim, dan memahami pentingnya pelayanan yang ramah.', 'Setiap masukan, setiap kunjungan, dan setiap pelanggan yang datang menjadi bagian dari proses kami untuk bertumbuh.']
}, {
  year: '2023',
  title: 'Menemukan Jati Diri',
  paragraphs: ['Karpen mulai semakin mengenal karakter dan identitasnya sendiri. Bukan sekadar tempat untuk ngopi, tetapi tempat yang menghadirkan suasana nyaman, santai, dan bersahabat.', 'Kami terus mengembangkan pilihan makanan dan minuman, memperhatikan kenyamanan tempat, serta membangun hubungan yang lebih dekat dengan pelanggan.', 'Perlahan, Karpen menjadi bagian dari cerita banyak orang di Madiun, dari sekadar hanya mampir hingga menjadikannya tempat untuk kembali.']
}, {
  year: '2024',
  title: 'Bertumbuh dengan Sistem',
  paragraphs: ['Kami menyadari bahwa pertumbuhan harus diiringi dengan fondasi yang lebih kuat.', 'Karpen mulai memperkuat sistem operasional, pembagian tanggung jawab tim, standar kerja, serta pengelolaan bisnis agar pelayanan dan kualitas produk dapat dijaga secara konsisten.', 'Keramahan menjadi salah satu nilai utama kami, yaitu dengan membuat setiap pelanggan merasa disambut, dihargai, dan nyaman selama berada di Karpen. Karena bagi kami, pelanggan bukan sekadar pengunjung, melainkan bagian dari perjalanan Karpen.']
}, {
  year: '2025',
  title: 'Lebih dari Sekadar Coffee Shop',
  paragraphs: ['Karpen terus tumbuh menjadi tempat berkumpul bagi berbagai kalangan, mulai dari teman, keluarga, komunitas, hingga mereka yang mencari suasana tenang untuk menikmati waktu.', 'Kami semakin memperkuat kualitas pelayanan, menjaga cita rasa makanan dan minuman, serta membangun sistem yang mendukung pengalaman pelanggan secara menyeluruh.', 'Di tahun ini, kami semakin memahami bahwa hal yang membuat Karpen berarti bukan hanya tempatnya, tetapi juga orang-orang yang datang, cerita yang tercipta, dan pelanggan setia yang terus kembali.', 'Terima kasih telah menjadi bagian dari perjalanan kami.']
}, {
  year: '2026 — Sekarang',
  title: 'Menuju Karpen yang Baru',
  paragraphs: ['Hari ini, Karpen bukan lagi sekadar coffee shop kecil yang memulai semuanya dari sederhana. Kami telah melalui banyak proses untuk membangun sistem yang lebih kuat, tim yang terus berkembang, serta standar keramahan yang menjadi bagian dari identitas kami.', 'Dengan dukungan pelanggan setia yang telah menemani perjalanan ini, Karpen terus berkomitmen menghadirkan makanan dan minuman berkualitas, pelayanan yang tulus, serta pengalaman yang selalu ingin dirindukan.', 'Dan sekarang, sebuah babak baru sedang kami persiapkan.', 'Karpen sedang membangun sesuatu yang baru — sebuah langkah untuk menghadirkan pengalaman yang lebih baik, tanpa meninggalkan nilai dan cerita yang telah membawa kami sampai di sini.', 'Ini baru awal dari babak selanjutnya dalam perjalanan kami.']
}];

export const timelineEntries: TimelineEntry[] = localize(timelineEntriesId, [
  {
    title: 'It Began with a Simple Dream',
    paragraphs: [
      'Karpen Coffee began its journey as a small coffee shop with a simple dream: to offer a place to enjoy coffee and spend time together.',
      'In the early days, many things were still done simply. Operating systems were not yet in order, service standards were still being learned, and every day was a process of understanding how to build a business that can last.',
      'This is where Karpen’s foundation began to form, with the spirit to keep trying, learning, and growing.'
    ]
  },
  {
    title: 'Learning to Be Better',
    paragraphs: [
      'As time passed, Karpen came to understand that building a coffee shop is not only about serving good coffee, but also about creating a memorable experience.',
      'We began to get to know our guests, improve product quality, build team cohesion, and understand the importance of friendly service.',
      'Every piece of feedback, every visit, and every guest who came became part of our process of growing.'
    ]
  },
  {
    title: 'Finding Our Identity',
    paragraphs: [
      'Karpen began to know its own character and identity more deeply. Not just a place for coffee, but a place with a comfortable, relaxed, and friendly atmosphere.',
      'We kept developing our food and drink choices, paid attention to the comfort of the place, and built closer relationships with our guests.',
      'Slowly, Karpen became part of many people’s stories in Madiun, from simply dropping by to making it a place to return to.'
    ]
  },
  {
    title: 'Growing with Systems',
    paragraphs: [
      'We realized that growth must be accompanied by a stronger foundation.',
      'Karpen began strengthening its operating systems, team responsibilities, work standards, and business management so that service and product quality could be kept consistent.',
      'Hospitality became one of our core values: making every guest feel welcomed, valued, and comfortable while at Karpen. Because to us, a guest is not just a visitor, but part of Karpen’s journey.'
    ]
  },
  {
    title: 'More Than a Coffee Shop',
    paragraphs: [
      'Karpen kept growing as a gathering place for all kinds of people, from friends, families, and communities to those looking for a calm atmosphere to enjoy their time.',
      'We strengthened the quality of our service even more, kept the taste of our food and drinks, and built systems that support the guest experience as a whole.',
      'This year, we came to understand even more that what makes Karpen meaningful is not only the place, but also the people who come, the stories that are created, and the loyal guests who keep coming back.',
      'Thank you for being part of our journey.'
    ]
  },
  {
    year: '2026 — Present',
    title: 'Toward a New Karpen',
    paragraphs: [
      'Today, Karpen is no longer just a small coffee shop that started everything simply. We have been through many processes to build stronger systems, a growing team, and a standard of hospitality that is part of our identity.',
      'With the support of loyal guests who have accompanied this journey, Karpen remains committed to offering quality food and drinks, sincere service, and experiences you will always long for.',
      'And now, a new chapter is being prepared.',
      'Karpen is building something new — a step toward offering a better experience, without leaving behind the values and stories that brought us here.',
      'This is only the beginning of our next chapter.'
    ]
  }
]);