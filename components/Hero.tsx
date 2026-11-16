import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const benefits = [
    "100% Fiber Optik",
    "Unlimited",
    "Tanpa FUP",
    "Teknisi Lokal",
  ];

  return (
    <section
      className="relative w-full min-h-[760px] flex flex-col justify-between overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #3D0007 0%, #62000B 35%, #9E040D 70%, #E30613 100%)",
      }}
      aria-label="Hero Section"
    >
      {/* Navbar transparent inside hero (Reference spec #8) */}
      <Navbar variant="hero" />

      {/* Main Hero Container */}
      <div className="max-w-container mx-auto px-6 lg:px-8 w-full pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-0 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content (Reference spec #11, #12, #13, #14) */}
          <div className="flex flex-col items-start text-white max-w-[640px] z-20">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/60 bg-white/10 text-white text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase mb-6 backdrop-blur-none">
              <span>LAYANAN WIFI ALFANET</span>
            </div>

            {/* Large Bold Heading */}
            <h1 className="text-white font-extrabold tracking-tight leading-[1.06] text-4xl sm:text-5xl lg:text-[64px] xl:text-[72px] mb-6">
              Internet Cepat <br className="hidden sm:inline" />
              untuk Aktivitas <br className="hidden sm:inline" />
              Tanpa Batas
            </h1>

            {/* Description */}
            <p className="text-white/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-[580px] mb-8">
              Internet fiber optik 100% untuk kebutuhan rumah, usaha, belajar,
              hiburan, dan aktivitas digital Anda.
            </p>

            {/* Hero Benefits with vertical dividers (Reference spec #13) */}
            <div className="w-full mb-9 pt-2">
              <ul className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm font-semibold text-white/95">
                {benefits.map((benefit, index) => (
                  <React.Fragment key={benefit}>
                    <li className="inline-flex items-center gap-2 py-1">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                    {index < benefits.length - 1 && (
                      <span
                        className="hidden sm:inline-block mx-3.5 h-4 w-px bg-white/40"
                        aria-hidden="true"
                      />
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>

            {/* Hero CTA Buttons (Reference spec #14) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-alfanet-red font-bold text-base hover:bg-neutral-100 transition-colors focus:outline-none"
              >
                Langganan Sekarang
              </Link>

              {/* Secondary Button */}
              <Link
                href="#paket"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-transparent text-white font-semibold text-base hover:text-white/80 transition-colors focus:outline-none group"
              >
                <span>Lihat Paket</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Visual (Technician + WiFi Arcs, Reference spec #15, #16) */}
          <div className="w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
