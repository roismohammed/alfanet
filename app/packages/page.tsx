import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PricingCard from "@/components/PricingCard";
import { INTERNET_PACKAGES } from "@/data/packages";
import { BRAND_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Paket Internet — Alfanet Tanah Merah",
  description:
    "Daftar lengkap paket internet fiber optik Alfanet Tanah Merah mulai 15 Mbps hingga 200 Mbps tanpa FUP dengan harga hemat dan stabil.",
};

export default function PackagesPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white pt-20">
      {/* Navbar Fixed */}
      <Navbar variant="solid" />

      {/* Header */}
      <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-alfanet-red">
            PILIHAN BERLANGGANAN
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-alfanet-black tracking-tight mt-2 mb-4">
            Paket Internet Alfanet
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Internet fiber optik murni 100% tanpa batasan FUP. Pilih kapasitas
            kecepatan yang paling pas untuk keluarga atau usaha Anda di Tanah Merah.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="w-full py-16 sm:py-20 border-b border-neutral-200 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {INTERNET_PACKAGES.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Feature Table (Clean White ISP) */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-alfanet-black tracking-tight mb-3">
              Perbandingan Paket & Rekomendasi
            </h2>
            <p className="text-sm text-neutral-600">
              Sesuaikan dengan jumlah perangkat dan jenis kebutuhan pemakaian harian.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border-2 border-neutral-200 rounded-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-900 text-white text-xs uppercase font-bold">
                <tr>
                  <th className="px-6 py-4">Paket</th>
                  <th className="px-6 py-4">Tarif Bulanan</th>
                  <th className="px-6 py-4">Rekomendasi Pemakaian</th>
                  <th className="px-6 py-4">Perangkat</th>
                  <th className="px-6 py-4 text-center">Status FUP</th>
                  <th className="px-6 py-4 text-right">Daftar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {INTERNET_PACKAGES.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-neutral-50/70 transition-colors">
                    <td className="px-6 py-4 font-bold text-alfanet-black">
                      <div className="flex items-center gap-2">
                        <span>{pkg.speed}</span>
                        {pkg.popular && (
                          <span className="text-[10px] bg-red-100 text-alfanet-red px-2 py-0.5 rounded font-extrabold uppercase">
                            Populer
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-neutral-900">
                      Rp{pkg.price} / bln
                    </td>
                    <td className="px-6 py-4 text-neutral-600">
                      {pkg.description}
                    </td>
                    <td className="px-6 py-4 font-medium text-neutral-700 whitespace-nowrap">
                      {pkg.idealFor}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        Tanpa FUP
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Halo%20Admin,%20saya%20ingin%20pasang%20paket%20${pkg.speed}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-alfanet-red hover:underline"
                      >
                        <span>Pilih</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
