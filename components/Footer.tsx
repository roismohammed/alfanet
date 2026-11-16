import React from "react";
import Link from "next/link";
import { Phone, MapPin, Instagram, ShieldCheck, Heart } from "lucide-react";
import Logo from "./Logo";
import { NAV_ITEMS, BRAND_INFO } from "@/data/siteData";
import { INTERNET_PACKAGES } from "@/data/packages";

export default function Footer() {
  return (
    <footer
      className="w-full bg-alfanet-black text-white border-t border-neutral-800"
      aria-label="Footer Website"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Logo variant="white" className="mb-4" />
            <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm">
              Internet Fiber Optik untuk Tanah Merah dan sekitarnya. Layanan
              koneksi cepat, stabil, tanpa batasan kuota FUP dengan dukungan
              teknisi lokal terpercaya.
            </p>

            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-alfanet-red flex-shrink-0" />
              <span>100% Infrastruktur FTTH Fiber Optik</span>
            </div>
          </div>

          {/* Col 2: Navigasi (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Paket Internet (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Paket Internet
            </h3>
            <ul className="space-y-2.5 text-sm">
              {INTERNET_PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    href="/packages"
                    className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between pr-4 group"
                  >
                    <span className="group-hover:text-white">
                      Paket {pkg.speed}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">
                      Rp{pkg.price}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontak & Media Sosial (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Kontak & Informasi
            </h3>
            <ul className="space-y-3.5 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-alfanet-red flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-neutral-300">
                  {BRAND_INFO.address}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-alfanet-red flex-shrink-0" />
                <Link
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white font-medium"
                >
                  WhatsApp: {BRAND_INFO.whatsappDisplay}
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-alfanet-red flex-shrink-0" />
                <Link
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white"
                >
                  {BRAND_INFO.instagram}
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-4 h-4 flex items-center justify-center font-bold text-xs text-alfanet-red">
                  ♪
                </span>
                <Link
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white"
                >
                  {BRAND_INFO.tiktok}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Alfanet Tanah Merah. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Melayani sepenuh hati untuk Tanah Merah, Madura</span>
            <Heart className="w-3.5 h-3.5 text-alfanet-red inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
