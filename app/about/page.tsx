import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  HardHat,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Tentang Kami — Alfanet Tanah Merah",
  description:
    "Profil Alfanet Tanah Merah: layanan internet fiber optik cepat, stabil, dan terjangkau dengan dukungan teknisi lokal di Bangkalan, Madura.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white pt-20">
      {/* Top Fixed Navbar */}
      <Navbar variant="solid" />

      {/* Page Header (Clean Editorial) */}
      <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              PROFIL RESMI
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-alfanet-black tracking-tight leading-tight mb-6">
              Tentang Alfanet Tanah Merah
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
              Alfanet Tanah Merah merupakan layanan penyedia internet berbasis
              Fiber Optik dari Alfanet yang melayani wilayah Tanah Merah dan
              sekitarnya di Kabupaten Bangkalan, Madura.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content: Sejarah & Komitmen */}
      <section className="w-full py-16 sm:py-24 border-b border-neutral-200 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Story (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  DEDIKASI KAMI
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-alfanet-black tracking-tight mt-1 mb-4">
                  Membangun Konektivitas Digital di Madura
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Didirikan dengan komitmen untuk memperkecil kesenjangan akses
                  internet berkualitas di daerah, Alfanet Tanah Merah hadir
                  membawa teknologi kabel optik murni hingga ke pemukiman warga.
                  Kami menyadari bahwa stabilitas koneksi internet telah menjadi
                  kebutuhan vital untuk kelangsungan belajar mengajar, usaha toko,
                  perkantoran desa, serta komunikasi keluarga.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-alfanet-black tracking-tight mb-3">
                  Komitmen Pelayanan Tanpa Syarat
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed mb-4">
                  Banyak pelanggan internet di daerah kerap mengeluhkan kuota
                  yang cepat habis atau kecepatan yang menurun drastis di tengah
                  bulan akibat aturan FUP. Alfanet hadir dengan prinsip
                  transparansi penuh:
                </p>

                <ul className="space-y-3">
                  {[
                    "100% Kabel Fiber Optik (FTTH) tahan gangguan cuaca",
                    "Unlimited murni tanpa sistem pembatasan kuota (No FUP)",
                    "Harga bulanan tetap tanpa ada biaya siluman di lembar tagihan",
                    "Perangkat Optical Network Unit (ONU/Modem) dipinjamkan gratis",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-neutral-800">
                      <CheckCircle2 className="w-5 h-5 text-alfanet-red flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-alfanet-black tracking-tight mb-3">
                  Teknisi Lokal: Dekat, Sigap, Tanggap
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Kekuatan utama kami ada pada tim teknisi lapangan yang menetap
                  dan bertugas langsung di posko Tanah Merah. Jika terjadi kendala
                  kabel putus atau gangguan perangkat, tim kami dapat mencapai
                  lokasi rumah Anda dalam hitungan jam, bukan hari.
                </p>
              </div>
            </div>

            {/* Right Feature Panel (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Highlight Card 1 - Border tipis halus, tanpa shadow */}
              <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-7">
                <div className="w-11 h-11 rounded-lg bg-red-50 border border-red-100 text-alfanet-red flex items-center justify-center mb-4">
                  <HardHat className="w-5 h-5 text-alfanet-red" />
                </div>
                <h3 className="text-lg font-bold text-alfanet-black tracking-tight mb-2">
                  Tim Teknisi Bersertifikat
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Setiap teknisi kami terlatih dalam penarikan kabel drop core,
                  fusion splicing presisi, dan kalibrasi redaman daya optik (dBm)
                  agar koneksi Anda selalu stabil.
                </p>
              </div>

              {/* Highlight Card 2 - Border tipis halus, tanpa shadow */}
              <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-7">
                <div className="w-11 h-11 rounded-lg bg-red-50 border border-red-100 text-alfanet-red flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-alfanet-red" />
                </div>
                <h3 className="text-lg font-bold text-alfanet-black tracking-tight mb-2">
                  Monitoring Jaringan 24/7
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Server OLT dan jalur backbone transmisi dipantau secara real-time
                  selama 24 jam untuk mendeteksi fluktuasi sinyal sebelum dirasakan
                  oleh pelanggan.
                </p>
              </div>

              {/* Highlight Card 3 - Posko Layanan */}
              <div className="bg-neutral-900 text-white rounded-xl p-6 sm:p-7 border border-neutral-800">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 block">
                  KANTOR & POSKO LAYANAN
                </span>
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  Wilayah Tanah Merah, Bangkalan
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  Pos teknisi dan customer service siap membantu proses survey,
                  pendaftaran baru, serta konsultasi paket bisnis.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-red-400 transition-colors"
                >
                  <span>Hubungi Kantor Layanan</span>
                  <ArrowRight className="w-4 h-4" />
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
