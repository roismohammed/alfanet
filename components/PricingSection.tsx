import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, Layers } from "lucide-react";
import PricingCard from "./PricingCard";
import { INTERNET_PACKAGES } from "@/data/packages";

export default function PricingSection() {
  // Ambil 3 paket pilihan untuk homepage dengan paket 100 Mbps (Populer) di tengah
  // Urutan: 25 Mbps (Keluarga) -> 100 Mbps (Paling Populer) -> 200 Mbps (Bisnis / Tertinggi)
  const homePackages = [
    INTERNET_PACKAGES.find((p) => p.id === "25mbps") || INTERNET_PACKAGES[1],
    INTERNET_PACKAGES.find((p) => p.popular) || INTERNET_PACKAGES[3],
    INTERNET_PACKAGES.find((p) => p.id === "200mbps") || INTERNET_PACKAGES[4],
  ];

  return (
    <section
      id="paket"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-neutral-200"
      aria-label="Pilihan Paket Internet"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            PILIHAN BERLANGGANAN
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-alfanet-black tracking-tight mt-1 mb-4">
            Pilih Paket Internet Anda
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Internet fiber optik unlimited untuk kebutuhan rumah, kerja, belajar,
            bisnis, dan hiburan.
          </p>
        </div>

        {/* Pricing Grid: Tepat 3 Kartu, Populer di Tengah */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {homePackages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Tombol Lihat Semua Paket */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-neutral-900 bg-white hover:bg-neutral-900 text-neutral-900 hover:text-white font-bold text-sm sm:text-base transition-all duration-150 focus:outline-none group"
          >
            <Layers className="w-4 h-4 text-alfanet-red group-hover:text-white transition-colors" />
            <span>Lihat Semua Pilihan Paket (5 Paket Lengkap)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-xs text-neutral-500 mt-2.5">
            Tersedia pilihan paket 15 Mbps, 25 Mbps, 55 Mbps, 100 Mbps, dan 200 Mbps.
          </p>
        </div>

        {/* Bottom Notice / Layanan Bisnis */}
        <div className="mt-12 p-6 rounded-lg border border-neutral-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 text-left">
            <HelpCircle className="w-5 h-5 text-alfanet-red flex-shrink-0" />
            <p className="text-sm text-neutral-700">
              Butuh paket custom untuk instansi, kantor sekolah, atau warnet? Konsultasikan langsung dengan teknisi kami.
            </p>
          </div>
          <Link
            href="/contact"
            className="text-sm font-bold text-alfanet-red hover:text-red-700 whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Hubungi Layanan Bisnis</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
