import type { TimelineEntry } from '../types/content';
import { assets } from './assets';

/** Our Story page copy. */
export const storyContent = {
  breadcrumb: 'Cerita Kami',
  title: 'Our Journey: 2021 – 2026',
  subtitle: 'From a Small Coffee Shop to a Growing Home in Madiun.',
  intro: 'Setiap perjalanan punya cerita. Karpen Coffee bukan hanya tentang kopi, makanan, atau tempat untuk berkumpul. Karpen adalah perjalanan tentang belajar, bertumbuh, membangun, dan menciptakan pengalaman yang membuat setiap pelanggan ingin kembali.',
  image: assets.about,
  imageCaption: 'Pilangbango, Madiun — Jawa Timur',
  background: {
    overline: 'Latar Belakang Karpen',
    title: 'Berawal dari Cerita Keluarga',
    highlight: '“Karpen” lahir dari kata carpenter — tukang kayu.',
    paragraphs: ['Karpen Coffee berdiri sejak 2021, berawal dari cerita keluarga. Owner Karpen Coffee merupakan anak dari seorang tukang kayu atau “carpenter”. Dari situlah nama “Karpen” lahir dan menjadi inspirasi konsep kayu yang menjadi karakter awal coffee shop ini.', 'Seiring berkembangnya waktu, Karpen hadir sebagai hidden gem di Madiun dengan view sawah, kereta yang melintas, dan suasana yang tenang. Karpen ingin menjadi tempat untuk menikmati makanan dan minuman yang enak, sekaligus mendapatkan service yang ramah dan membuat nyaman.', 'Bagi Karpen, pengalaman customer bukan hanya tentang apa yang mereka nikmati di meja, tetapi juga bagaimana mereka merasa selama berada di dalamnya. Karena itu, Karpen terus berkembang dengan satu tujuan, yaitu menciptakan tempat yang nyaman, menyajikan makanan dan minuman yang berkualitas, serta memberikan pelayanan yang membuat orang ingin kembali.']
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
    vision: 'Menjadikan Karpen sebagai coffee brand lifestyle terdepan di Kota Madiun dan sebagai wadah untuk meraih mimpi, bertumbuh, berkarya, serta membangun kehidupan yang seimbang antara profesionalisme, tanggung jawab, dan nilai ibadah. Dan menjadi tempat untuk bekerja dengan tanggung jawab, serta beribadah dengan penuh keikhlasan.',
    missionTitle: 'Misi',
    missions: ['Menyediakan kopi dan produk berkualitas dengan standar yang konsisten.', 'Menyediakan tempat yang nyaman, bersih, aman, dan menyenangkan untuk berkumpul dan bersantai.', 'Menciptakan lingkungan kerja yang sehat, disiplin, profesional, dan mendukung setiap Staff untuk belajar serta berkembang.', 'Membangun budaya kerja yang menghargai waktu dan kesempatan beribadah sesuai agama dan kepercayaan masing-masing, dengan tetap menjaga tanggung jawab terhadap pekerjaan dan operasional.', 'Mendorong setiap Staff untuk memiliki mindset yang berorientasi pada target, bertanggung jawab, saling menghormati, dan mampu bekerja sama sebagai tim.']
  },
  thankYou: {
    title: 'Thank You for Being Part\nof Our Journey.',
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
export const timelineEntries: TimelineEntry[] = [{
  year: '2021',
  title: 'The Beginning — Berawal dari Mimpi Sederhana',
  paragraphs: ['Karpen Coffee memulai perjalanannya sebagai sebuah coffee shop kecil dengan mimpi sederhana, yaitu menghadirkan tempat untuk menikmati kopi dan menghabiskan waktu bersama.', 'Di masa awal, banyak hal masih dikerjakan secara sederhana. Sistem operasional belum tertata, standar pelayanan masih terus dipelajari, dan setiap hari menjadi proses untuk memahami bagaimana membangun sebuah usaha yang bisa bertahan.', 'Dari sinilah fondasi Karpen mulai terbentuk, dengan semangat untuk terus mencoba, belajar, dan berkembang.']
}, {
  year: '2022',
  title: 'Learning & Growing — Belajar Menjadi Lebih Baik',
  paragraphs: ['Seiring berjalannya waktu, Karpen mulai memahami bahwa membangun coffee shop bukan hanya tentang menyajikan kopi yang enak, tetapi juga tentang bagaimana menciptakan pengalaman yang berkesan.', 'Kami mulai belajar mengenal pelanggan, memperbaiki kualitas produk, membangun kekompakan tim, dan memahami pentingnya pelayanan yang ramah.', 'Setiap masukan, setiap kunjungan, dan setiap pelanggan yang datang menjadi bagian dari proses kami untuk bertumbuh.']
}, {
  year: '2023',
  title: 'Building Our Identity — Menemukan Jati Diri',
  paragraphs: ['Karpen mulai semakin mengenal karakter dan identitasnya sendiri. Bukan sekadar tempat untuk ngopi, tetapi tempat yang menghadirkan suasana nyaman, santai, dan bersahabat.', 'Kami terus mengembangkan pilihan makanan dan minuman, memperhatikan kenyamanan tempat, serta membangun hubungan yang lebih dekat dengan pelanggan.', 'Perlahan, Karpen menjadi bagian dari cerita banyak orang di Madiun, dari sekadar hanya mampir hingga menjadikannya tempat untuk kembali.']
}, {
  year: '2024',
  title: 'Stronger Together — Bertumbuh dengan Sistem',
  paragraphs: ['Kami menyadari bahwa pertumbuhan harus diiringi dengan fondasi yang lebih kuat.', 'Karpen mulai memperkuat sistem operasional, pembagian tanggung jawab tim, standar kerja, serta pengelolaan bisnis agar pelayanan dan kualitas produk dapat dijaga secara konsisten.', 'Hospitality menjadi salah satu nilai utama kami, yaitu dengan membuat setiap pelanggan merasa disambut, dihargai, dan nyaman selama berada di Karpen. Karena bagi kami, pelanggan bukan sekadar pengunjung, melainkan bagian dari perjalanan Karpen.']
}, {
  year: '2025',
  title: 'A Place to Belong — Lebih dari Sekadar Coffee Shop',
  paragraphs: ['Karpen terus tumbuh menjadi tempat berkumpul bagi berbagai kalangan, mulai dari teman, keluarga, komunitas, hingga mereka yang mencari suasana tenang untuk menikmati waktu.', 'Kami semakin memperkuat kualitas pelayanan, menjaga cita rasa makanan dan minuman, serta membangun sistem yang mendukung pengalaman pelanggan secara menyeluruh.', 'Di tahun ini, kami semakin memahami bahwa hal yang membuat Karpen berarti bukan hanya tempatnya, tetapi juga orang-orang yang datang, cerita yang tercipta, dan pelanggan setia yang terus kembali.', 'Terima kasih telah menjadi bagian dari perjalanan kami.']
}, {
  year: '2026 — Present',
  title: 'The Next Chapter — Menuju Karpen yang Baru',
  paragraphs: ['Hari ini, Karpen bukan lagi sekadar coffee shop kecil yang memulai semuanya dari sederhana. Kami telah melalui banyak proses untuk membangun sistem yang lebih kuat, tim yang terus berkembang, serta standar hospitality yang menjadi bagian dari identitas kami.', 'Dengan dukungan pelanggan setia yang telah menemani perjalanan ini, Karpen terus berkomitmen menghadirkan makanan dan minuman berkualitas, pelayanan yang tulus, serta pengalaman yang selalu ingin dirindukan.', 'Dan sekarang, sebuah babak baru sedang kami persiapkan.', 'Karpen sedang membangun sesuatu yang baru — sebuah langkah untuk menghadirkan pengalaman yang lebih baik, tanpa meninggalkan nilai dan cerita yang telah membawa kami sampai di sini.', 'This is only the beginning of our next chapter.']
}];