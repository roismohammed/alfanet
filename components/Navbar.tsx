"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import Logo from "./Logo";
import { NAV_ITEMS, BRAND_INFO } from "@/data/siteData";

interface NavbarProps {
  variant?: "hero" | "solid";
}

export default function Navbar({ variant = "hero" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero transparent hanya saat di hero dan belum di-scroll
  const isTransparent = variant === "hero" && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isTransparent
          ? "bg-transparent text-white border-b border-transparent"
          : "bg-white text-alfanet-black border-b border-neutral-200"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-alfanet-red text-white text-[10px] sm:text-xs font-bold py-1.5 px-6 lg:px-8 hidden md:block">
        <div className="max-w-container mx-auto flex justify-between items-center">
          <span>Hotline Resmi: {BRAND_INFO.whatsappDisplay}</span>
          <span className="opacity-90">Area Layanan: Tanah Merah & Sekitarnya</span>
        </div>
      </div>
      <nav
        className="max-w-container mx-auto px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Navigasi Utama"
      >
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <Logo variant={isTransparent ? "white" : "dark"} />
        </div>

        {/* Center: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-semibold">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative py-2 transition-colors duration-200 inline-block focus:outline-none focus-visible:ring-2 ${
                    isTransparent
                      ? isActive
                        ? "text-white font-bold"
                        : "text-white/85 hover:text-white"
                      : isActive
                      ? "text-alfanet-red font-bold"
                      : "text-neutral-700 hover:text-alfanet-red"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-colors duration-200 ${
                        isTransparent ? "bg-white" : "bg-alfanet-red"
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 focus:outline-none ${
              isTransparent
                ? "bg-white text-alfanet-red hover:bg-neutral-100"
                : "bg-alfanet-red text-white hover:bg-red-700"
            }`}
          >
            Daftar Sekarang
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Halo%20Admin%20Alfanet%20Tanah%20Merah,%20saya%20ingin%20berlangganan%20internet`}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors ${
              isTransparent
                ? "bg-white/15 text-white"
                : "bg-neutral-100 text-alfanet-red"
            }`}
            aria-label="Hubungi WhatsApp"
          >
            <Phone className="w-5 h-5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-neutral-900 hover:bg-neutral-100"
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu (No shadow, solid borders) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-alfanet-black border-b border-neutral-200 px-6 py-6 animate-in fade-in duration-200">
          <ul className="flex flex-col gap-4 text-base font-semibold">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 border-b border-neutral-100 transition-colors ${
                      isActive
                        ? "text-alfanet-red font-bold"
                        : "text-neutral-800 hover:text-alfanet-red"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-alfanet-red text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Halo%20Admin%20Alfanet%20Tanah%20Merah,%20saya%20ingin%20info%20paket`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 border border-neutral-200 text-neutral-800 text-sm font-semibold rounded-lg hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-alfanet-red" />
              <span>WhatsApp: {BRAND_INFO.whatsappDisplay}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
