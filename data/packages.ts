export interface InternetPackage {
  id: string;
  speed: string;
  speedNumber: number;
  price: string;
  priceNumber: number;
  period: string;
  popular?: boolean;
  description: string;
  features: string[];
  idealFor: string;
}

export const INTERNET_PACKAGES: InternetPackage[] = [
  {
    id: "15mbps",
    speed: "15 Mbps",
    speedNumber: 15,
    price: "155.000",
    priceNumber: 155000,
    period: "/ bulan",
    description: "Koneksi stabil dan hemat untuk kebutuhan browsing, media sosial, dan chat harian.",
    idealFor: "1 - 3 perangkat (Rumah kecil / Pelajar)",
    features: [
      "100% Fiber Optik",
      "Unlimited Kuota",
      "Tanpa FUP (Fair Usage Policy)",
      "Support Teknisi Lokal",
      "Gratis Biaya Sewa Modem",
      "Kecepatan Simetris Stabil",
    ],
  },
  {
    id: "25mbps",
    speed: "25 Mbps",
    speedNumber: 25,
    price: "195.000",
    priceNumber: 195000,
    period: "/ bulan",
    description: "Ideal untuk keluarga yang aktif streaming video HD dan video call tanpa buffering.",
    idealFor: "3 - 5 perangkat (Keluarga muda)",
    features: [
      "100% Fiber Optik",
      "Unlimited Kuota",
      "Tanpa FUP (Fair Usage Policy)",
      "Support Teknisi Lokal",
      "Gratis Biaya Sewa Modem",
      "Streaming Full HD Lancar",
    ],
  },
  {
    id: "55mbps",
    speed: "55 Mbps",
    speedNumber: 55,
    price: "275.000",
    priceNumber: 275000,
    period: "/ bulan",
    description: "Pilihan tepat untuk bekerja dari rumah, gaming online, dan multi-streaming keluarga.",
    idealFor: "5 - 8 perangkat (Rumah tangga aktif / WFH)",
    features: [
      "100% Fiber Optik",
      "Unlimited Kuota",
      "Tanpa FUP (Fair Usage Policy)",
      "Support Teknisi Lokal",
      "Gratis Biaya Sewa Modem",
      "Gaming Low Ping & Zoom HD",
    ],
  },
  {
    id: "100mbps",
    speed: "100 Mbps",
    speedNumber: 100,
    price: "425.000",
    priceNumber: 425000,
    period: "/ bulan",
    popular: true,
    description: "Paket paling diminati! Performa tinggi untuk transfer file besar, 4K streaming, dan toko/kantor.",
    idealFor: "8 - 15 perangkat (Bisnis lokal / Rumah besar)",
    features: [
      "100% Fiber Optik",
      "Unlimited Kuota",
      "Tanpa FUP (Fair Usage Policy)",
      "Prioritas Support Teknisi 24/7",
      "Gratis Biaya Sewa Modem Gigabit",
      "Streaming 4K Ultra HD Multi-Layar",
    ],
  },
  {
    id: "200mbps",
    speed: "200 Mbps",
    speedNumber: 200,
    price: "795.000",
    priceNumber: 795000,
    period: "/ bulan",
    description: "Kecepatan maksimal tanpa kompromi untuk kantor usaha, cafe, instansi, dan pengguna intensif.",
    idealFor: "15+ perangkat (Kantor / Usaha / Cafe)",
    features: [
      "100% Fiber Optik",
      "Unlimited Kuota",
      "Tanpa FUP (Fair Usage Policy)",
      "Prioritas VIP Teknisi Cepat",
      "Router Dual-Band Gigabit Pro",
      "Garansi SLA Uptime Jaringan",
    ],
  },
];
