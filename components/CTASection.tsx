import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";

export default function CTASection() {
  const ctaMessage = encodeURIComponent(
    "Halo Admin Alfanet Tanah Merah, saya ingin daftar pasang internet fiber optik baru. Mohon info jadwal teknisi untuk pemasangan di rumah saya."
  );

  return (
    <section
      className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200 relative z-20"
      aria-label="Ajakan Berlangganan Internet"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Red Alfanet Centered Box dengan gradasi bagian atas lebih gelap */}
        <div className="bg-neutral-900 text-white p-8 sm:p-12 lg:p-14 text-center rounded-lg">
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Label Polos */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-400 mb-3">
              DAFTAR SEKARANG - PEMASANGAN CEPAT
            </p>

            {/* Heading Besar & Jelas */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-8">
              Yuk Pasang Alfanet! <br className="hidden sm:inline" />
              Internet Cepat &amp; Bebas Batas Kuota
            </h2>


            {/* Tombol Ajakan di Tengah */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${ctaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-alfanet-red text-white hover:bg-red-700 font-black text-base transition-colors rounded-sm"
              >
                <Phone className="w-5 h-5 text-white" />
                <span>Daftar Pasang via WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white hover:bg-white hover:text-neutral-900 text-white font-bold text-base transition-colors rounded-sm"
              >
                <span>Formulir Pendaftaran</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hotline WhatsApp Resmi */}
            <p className="text-xs sm:text-sm text-white/90 mt-6 font-medium">
              Hotline WhatsApp Resmi: <strong className="text-white font-bold">{BRAND_INFO.whatsappDisplay}</strong> (Respon Cepat Teknisi &amp; Admin)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
