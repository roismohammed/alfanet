"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=Halo%20Admin%20Alfanet%20Tanah%20Merah,%20saya%20ingin%20tanya%20layanan%20internet`;

  return (
    <>
      {/* 1. Pojok Kiri Bawah: WhatsApp Official Floating Button */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp Admin Alfanet Tanah Merah"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-3 sm:px-4 sm:py-3 rounded-full border border-emerald-400/40 transition-all duration-200 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        >
          {/* WhatsApp Vector Icon */}
          <div className="relative flex-shrink-0">
            <svg
              viewBox="0 0 32 32"
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M16.01 2.01C8.28 2.01 2 8.29 2 16.02c0 2.68.75 5.25 2.18 7.48L2 30.01l6.75-2.12c2.14 1.34 4.63 2.13 7.26 2.13 7.73 0 14.01-6.28 14.01-14.01S23.74 2.01 16.01 2.01zm0 25.59c-2.34 0-4.59-.69-6.52-1.99l-.47-.31-4.32 1.36 1.38-4.16-.31-.49c-1.39-2.01-2.13-4.39-2.13-6.99 0-6.4 5.21-11.61 11.61-11.61 6.4 0 11.61 5.21 11.61 11.61 0 6.4-5.21 11.61-11.61 11.61zm6.36-8.73c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.79.18-.23.35-.91 1.14-1.11 1.38-.2.23-.41.26-.76.09-.35-.18-1.48-.55-2.82-1.74-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.41.53-.61.18-.2.23-.35.35-.59.12-.23.06-.44-.03-.61-.09-.18-.79-1.9-.1.08-2.61-.29-.69-.58-.6-.79-.61h-.67c-.23 0-.61.09-.93.44-.32.35-1.23 1.2-1.23 2.93 0 1.73 1.26 3.4 1.44 3.63.18.23 2.48 3.79 6.01 5.31.84.36 1.5.58 2.01.74.84.27 1.61.23 2.22.14.68-.1 2.07-.85 2.36-1.67.29-.82.29-1.52.2-1.67-.09-.15-.32-.24-.67-.42z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
          </div>

          <div className="hidden sm:flex flex-col text-left leading-tight pr-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">
              Admin Online
            </span>
            <span className="text-xs font-black">Chat WhatsApp</span>
          </div>
        </a>
      </div>

      {/* 2. Pojok Kanan Bawah: Scroll to Top Button (Smooth Animated) */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Kembali ke atas halaman"
          className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neutral-900 hover:bg-alfanet-red text-white border-2 border-neutral-800 hover:border-alfanet-red transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-alfanet-red"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </>
  );
}
