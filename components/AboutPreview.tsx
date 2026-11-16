import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Wrench } from "lucide-react";

export default function AboutPreview() {
  return (
    <section
      className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-alfanet-border"
      aria-label="Tentang Alfanet Tanah Merah"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Foto Teknisi / Infrastruktur */}
          <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 overflow-hidden flex items-center justify-center p-6 text-white">
            {/* Visual SVG illustration of technician & fiber optical infrastructure */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridPattern)" />
              </svg>
            </div>

            {/* Graphic Fiber Splicing & Local Team */}
            <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-alfanet-red flex items-center justify-center mb-5 border border-red-400">
                <Wrench className="w-8 h-8 text-white" />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-2">
                TIM LAPANGAN RESMI
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Teknisi Lokal Madura
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-sm mb-6">
                Dilengkapi perlengkapan fusion splicer presisi tinggi, OTDR meter, dan armada operasional langsung di Tanah Merah.
              </p>

              {/* Status Chips */}
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold border border-white/20">
                  📍 Posko Tanah Merah
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold border border-white/20">
                  ⚡ Respon Cepat
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold border border-white/20">
                  🔧 Sertifikasi Fiber
                </span>
              </div>
            </div>

            {/* Bottom floating location pin */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 border border-neutral-700 rounded-lg p-3 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-alfanet-red flex-shrink-0" />
              <p className="text-xs text-neutral-200 truncate">
                Jangkauan aktif: Kecamatan Tanah Merah & sekitarnya, Bangkalan
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="flex flex-col items-start">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              TENTANG ALFANET
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-alfanet-black tracking-tight mt-1 mb-6">
              Terhubung Lebih Dekat
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6 font-normal">
              Alfanet Tanah Merah hadir untuk memberikan akses internet fiber optik
              yang cepat, stabil, dan terjangkau bagi masyarakat Tanah Merah dan
              sekitarnya di Kabupaten Bangkalan, Madura.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              Kami percaya akses internet berkualitas bukan lagi kemewahan, melainkan
              kebutuhan mendasar untuk menunjang pendidikan anak, kemajuan UMKM warga,
              komunikasi keluarga, serta hiburan tanpa jeda buffering.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-9 w-full">
              {[
                "Penyedia internet terpercaya berbasis jaringan kabel optik murni",
                "Dikelola oleh tim teknis profesional yang memahami karakteristik wilayah",
                "Transparan tanpa denda tersembunyi dan tanpa penurunan kecepatan FUP",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-alfanet-red flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Link to about page */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-base font-bold text-alfanet-red hover:text-red-700 transition-colors group"
            >
              <span>Pelajari Tentang Kami</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
