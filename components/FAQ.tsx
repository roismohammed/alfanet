"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
import { FAQ_LIST, BRAND_INFO } from "@/data/siteData";

interface FAQProps {
  limit?: number;
  showAllLink?: boolean;
}

export default function FAQ({ limit = 8, showAllLink = true }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs = limit ? FAQ_LIST.slice(0, limit) : FAQ_LIST;

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-alfanet-border"
      aria-label="Pertanyaan yang Sering Diajukan"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            PERTANYAAN UMUM
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-alfanet-black tracking-tight mt-1 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Jawaban lengkap seputar koneksi internet, paket, teknisi, dan layanan Alfanet Tanah Merah.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="max-w-3xl mx-auto divide-y divide-alfanet-border border-y border-alfanet-border">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-alfanet-red"
                >
                  <span className="text-base sm:text-lg font-bold text-alfanet-black leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-alfanet-border flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-red-50 text-alfanet-red border-red-200" : "text-neutral-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 pr-10 text-sm sm:text-base text-neutral-600 leading-relaxed animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper */}
        <div className="max-w-3xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <MessageCircle className="w-5 h-5 text-alfanet-red flex-shrink-0" />
            <span>Punya pertanyaan lain yang belum terjawab?</span>
          </div>

          <div className="flex items-center gap-4">
            {showAllLink && (
              <Link
                href="/faq"
                className="text-sm font-bold text-neutral-800 hover:text-alfanet-red flex items-center gap-1"
              >
                <span>Halaman FAQ Lengkap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            <Link
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Halo%20Admin%20Alfanet,%20saya%20ingin%20bertanya%20seputar%20layanan`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-alfanet-red hover:underline"
            >
              Chat WhatsApp Admin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
