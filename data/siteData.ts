export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Paket Internet", href: "/packages" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Area Coverage", href: "/coverage" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/contact" },
];

export const BRAND_INFO = {
  name: "Alfanet Tanah Merah",
  fullName: "PT Alfanet Indonesia — Unit Layanan Tanah Merah",
  tagline: "Internet Fiber Optik Cepat & Unlimited",
  phone: "0819-5853-1000",
  whatsappNumber: "6281958531000",
  whatsappDisplay: "0819-5853-1000",
  instagram: "@alfanetbangkalan",
  instagramUrl: "https://instagram.com/alfanetbangkalan",
  tiktok: "@alfanet.tanah.merah",
  tiktokUrl: "https://tiktok.com/@alfanet.tanah.merah",
  address: "Kecamatan Tanah Merah, Kabupaten Bangkalan, Madura, Jawa Timur 69172",
  openingHours: "Senin - Minggu: 08.00 - 21.00 WIB (Support Darurat 24 Jam)",
};

export interface FAQItem {
  id: string;
  category: "general" | "packages" | "installation" | "troubleshooting" | "billing";
  categoryLabel: string;
  question: string;
  answer: string;
}

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    categoryLabel: "General",
    question: "Apakah Alfanet menggunakan Fiber Optik?",
    answer:
      "Ya, seluruh jaringan distribusi Alfanet Tanah Merah menggunakan 100% kabel Fiber Optik murni (FTTH - Fiber to the Home) langsung ke dalam rumah pelanggan, bukan kabel tembaga atau sinyal nirkabel radio yang rentan cuaca.",
  },
  {
    id: "faq-2",
    category: "general",
    categoryLabel: "General",
    question: "Apakah internet Alfanet unlimited?",
    answer:
      "Benar sekali! Semua paket internet Alfanet Tanah Merah berstatus Unlimited murni. Anda dapat mengunduh, menonton video, belajar, dan bekerja tanpa batas kuota harian maupun bulanan.",
  },
  {
    id: "faq-3",
    category: "packages",
    categoryLabel: "Paket",
    question: "Apakah ada FUP (Fair Usage Policy)?",
    answer:
      "Tidak ada FUP sama sekali. Kecepatan internet Anda akan tetap stabil sesuai paket yang dipilih dari tanggal 1 hingga akhir bulan tanpa ada penurunan kecepatan setelah pemakaian tertentu.",
  },
  {
    id: "faq-4",
    category: "packages",
    categoryLabel: "Paket",
    question: "Berapa harga paket internet Alfanet?",
    answer:
      "Tarif berlangganan mulai dari Rp155.000/bulan untuk 15 Mbps, Rp195.000/bulan (25 Mbps), Rp275.000/bulan (55 Mbps), Rp425.000/bulan (100 Mbps - Paling Populer), hingga Rp795.000/bulan (200 Mbps). Seluruh harga transparan tanpa biaya tersembunyi.",
  },
  {
    id: "faq-5",
    category: "installation",
    categoryLabel: "Instalasi",
    question: "Bagaimana cara berlangganan Alfanet?",
    answer:
      "Sangat mudah! Cukup isi formulir 'Dapatkan Koneksi Internet' di website ini atau hubungi admin WhatsApp resmi kami di 0819-5853-1000. Tim akan memverifikasi titik lokasi rumah Anda dan menjadwalkan pemasangan oleh teknisi.",
  },
  {
    id: "faq-6",
    category: "installation",
    categoryLabel: "Instalasi",
    question: "Apakah tersedia teknisi lokal di Tanah Merah?",
    answer:
      "Ya, kami memiliki pos dan tim teknisi lapangan yang siaga langsung di wilayah Tanah Merah, Bangkalan. Pemasangan baru dan penanganan kendala dapat dilakukan jauh lebih cepat tanpa menunggu kiriman teknisi dari luar kota.",
  },
  {
    id: "faq-7",
    category: "troubleshooting",
    categoryLabel: "Gangguan",
    question: "Bagaimana cara melaporkan gangguan?",
    answer:
      "Jika terjadi kendala pada modem atau jaringan, Anda dapat langsung menghubungi layanan pengaduan pelanggan via WhatsApp di 0819-5853-1000 dengan mencantumkan ID Pelanggan atau Nama & Alamat. Tim teknisi akan langsung melakukan pengecekan sistem atau kunjungan ke lokasi.",
  },
  {
    id: "faq-8",
    category: "installation",
    categoryLabel: "Instalasi",
    question: "Bagaimana cara mengecek ketersediaan jaringan?",
    answer:
      "Anda dapat mengirimkan titik lokasi (share live location via WhatsApp) ke nomor 0819-5853-1000 atau mengisi form di halaman Area Coverage. Petugas kami akan mencocokkan jarak tiang Optical Distribution Point (ODP) terdekat dengan rumah Anda.",
  },
  {
    id: "faq-9",
    category: "billing",
    categoryLabel: "Pembayaran",
    question: "Bagaimana metode pembayaran iuran bulanan?",
    answer:
      "Pembayaran dapat dilakukan dengan mudah melalui transfer bank, QRIS, e-wallet (GoPay, OVO, Dana), minimarket terdekat, atau melalui kasir kantor layanan Alfanet Tanah Merah.",
  },
  {
    id: "faq-10",
    category: "installation",
    categoryLabel: "Instalasi",
    question: "Berapa lama proses pemasangan hingga internet aktif?",
    answer:
      "Proses pemasangan biasanya selesai dalam 1x24 jam hingga maksimal 2 hari kerja setelah verifikasi lokasi ketersediaan ODP disetujui.",
  },
];

export interface CoverageArea {
  desa: string;
  status: "Tersedia" | "Perluasan Jaringan";
  odpCount: string;
  keterangan: string;
}

export const COVERAGE_AREAS: CoverageArea[] = [
  {
    desa: "Tanah Merah Dajah",
    status: "Tersedia",
    odpCount: "ODP Aktif",
    keterangan: "Pusat kecamatan, pasar Tanah Merah, jalan poros provinsi, pemukiman warga.",
  },
  {
    desa: "Petrah",
    status: "Tersedia",
    odpCount: "ODP Aktif",
    keterangan: "Jalur utama dan gang pemukiman warga desa Petrah tercover fiber optik.",
  },
  {
    desa: "Dumajah",
    status: "Tersedia",
    odpCount: "ODP Aktif",
    keterangan: "Kawasan pemukiman, sekolah, dan usaha UMKM sekitar jalan desa.",
  },
  {
    desa: "Rongdurin",
    status: "Tersedia",
    odpCount: "ODP Aktif",
    keterangan: "Jaringan kabel fiber optik telah menjangkau titik-titik pemukiman utama.",
  },
  {
    desa: "Baipajung",
    status: "Tersedia",
    odpCount: "ODP Aktif",
    keterangan: "Area poros penghubung antar desa dengan kapasitas ODP siap pasang.",
  },
  {
    desa: "Padurungan",
    status: "Tersedia",
    odpCount: "ODP Aktif",
    keterangan: "Jaringan aktif dengan dukungan tiang distribusi lokal.",
  },
  {
    desa: "Pangeleyan",
    status: "Perluasan Jaringan",
    odpCount: "Survey Lokasi",
    keterangan: "Tahap penarikan kabel distribusi utama. Pendaftaran awal dibuka.",
  },
  {
    desa: "Batangan",
    status: "Perluasan Jaringan",
    odpCount: "Survey Lokasi",
    keterangan: "Perluasan jalur tiang baru. Hubungi admin untuk jadwal aktivasi.",
  },
];
