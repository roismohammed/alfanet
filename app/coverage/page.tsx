import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { COVERAGE_AREAS, BRAND_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Area Coverage — Alfanet Tanah Merah",
  description:
    "Cek jangkauan jaringan Fiber Optik Alfanet di Kecamatan Tanah Merah dan desa-desa sekitarnya, Kabupaten Bangkalan.",
};

export default function CoveragePage() {
  const checkMessage = encodeURIComponent(
    "Halo Admin Alfanet Tanah Merah, saya ingin mengecek ketersediaan tiang ODP Fiber Optik di alamat saya:\n\nNama:\nAlamat Lengkap:\nShare Location:"
  );

  return (
    <main className="w-full min-h-screen flex flex-col bg-white pt-20">
      <Navbar variant="solid" />

      {/* Header */}
      <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-alfanet-red">
            PETA JANGKAUAN FIBER
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-alfanet-black tracking-tight mt-2 mb-4">
            Area Coverage
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Jaringan kabel Fiber Optik Alfanet terus diperluas untuk menjangkau
            seluruh desa dan pemukiman di wilayah Tanah Merah, Bangkalan, Madura.
          </p>
        </div>
      </section>

      {/* Coverage Status Grid */}
      <section className="w-full py-16 sm:py-20 border-b border-neutral-200 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Detailed Villages List (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-alfanet-black tracking-tight">
                    Status Jaringan per Desa
                  </h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    Wilayah Kecamatan Tanah Merah, Kabupaten Bangkalan
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {COVERAGE_AREAS.map((area) => (
                  <div
                    key={area.desa}
                    className="p-5 rounded-xl border-2 border-neutral-100 hover:border-neutral-900 bg-white transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-5 h-5 text-alfanet-red flex-shrink-0" />
                        <h3 className="text-lg font-bold text-alfanet-black">
                          Desa {area.desa}
                        </h3>
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          area.status === "Tersedia"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {area.status}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-600 mb-3">
                      {area.keterangan}
                    </p>

                    <div className="flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-neutral-100">
                      <span className="font-semibold text-neutral-700">
                        Status Distribusi: {area.odpCount}
                      </span>
                      <Link
                        href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Halo%20Admin,%20saya%20di%20Desa%20${encodeURIComponent(
                          area.desa
                        )},%20apakah%20bisa%20pasang%20internet%20Alfanet?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-alfanet-red font-bold hover:underline flex items-center gap-1"
                      >
                        <span>Cek Titik Rumah</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: How to Check & WhatsApp Help (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Box 1: Panduan Cek Jaringan */}
              <div className="bg-white border-2 border-neutral-900 rounded-xl p-7">
                <h3 className="text-lg font-bold text-alfanet-black tracking-tight mb-4">
                  Bagaimana Cara Cek Jaringan?
                </h3>
                <ol className="space-y-4 text-sm text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-alfanet-red text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      Buka aplikasi WhatsApp dan hubungi admin Alfanet Tanah Merah di <strong>{BRAND_INFO.whatsappDisplay}</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-alfanet-red text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>
                      Kirimkan titik <strong>Share Live Location</strong> atau foto patokan rumah Anda.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-alfanet-red text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      Tim teknis menghitung jarak tiang ODP dan mengonfirmasi ketersediaan port dalam 15 menit.
                    </span>
                  </li>
                </ol>

                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <Link
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${checkMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-lg bg-alfanet-red hover:bg-red-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Kirim Lokasi via WhatsApp</span>
                  </Link>
                </div>
              </div>

              {/* Box 2: Perluasan Jaringan */}
              <div className="bg-white border-2 border-neutral-100 hover:border-neutral-900 rounded-xl p-7 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <h4 className="text-base font-bold text-alfanet-black">
                    Wilayah Anda Belum Terjangkau?
                  </h4>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  Jika RT/RW atau dusun Anda berminat mengajukan penarikan tiang
                  baru, kumpulkan minimal 5 - 10 peminat pasang baru untuk prioritas
                  pembangunan jalur tiang ODP baru di wilayah Anda.
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-alfanet-red hover:underline flex items-center gap-1"
                >
                  <span>Ajukan Pembukaan Jalur Baru</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
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
