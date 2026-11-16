"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { FAQ_LIST, BRAND_INFO } from "@/data/siteData";

const CATEGORIES = [
  { key: "all", label: "Semua Kategori" },
  { key: "general", label: "General" },
  { key: "packages", label: "Paket" },
  { key: "installation", label: "Instalasi" },
  { key: "troubleshooting", label: "Gangguan" },
  { key: "billing", label: "Pembayaran" },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredFaqs =
    selectedCategory === "all"
      ? FAQ_LIST
      : FAQ_LIST.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="w-full min-h-screen flex flex-col bg-white pt-20">
      <Navbar variant="solid" />

      {/* Header */}
      <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-alfanet-red">
            PUSAT BANTUAN
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-alfanet-black tracking-tight mt-2 mb-4">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Temukan jawaban lengkap seputar berlangganan internet, teknisi, instalasi, dan bantuan teknis Alfanet Tanah Merah.
          </p>
        </div>
      </section>

      {/* Category Pills & FAQ List */}
      <section className="w-full py-16 sm:py-20 border-b border-neutral-200 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors ${
                  selectedCategory === cat.key
                    ? "bg-alfanet-red text-white"
                    : "bg-white text-neutral-800 border border-neutral-300 hover:border-neutral-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="max-w-3xl mx-auto divide-y divide-neutral-200 border-y border-neutral-200">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-alfanet-red"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-alfanet-red uppercase tracking-wider block mb-1">
                        {faq.categoryLabel}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-alfanet-black leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-red-50 text-alfanet-red border-red-200"
                          : "text-neutral-500"
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

          {/* Need More Help Box */}
          <div className="max-w-3xl mx-auto mt-14 p-8 rounded-xl bg-white border-2 border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-alfanet-red flex items-center justify-center border border-red-200 flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-alfanet-red" />
              </div>
              <div>
                <h3 className="text-base font-bold text-alfanet-black">
                  Pertanyaan Anda belum tercantum di atas?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                  Admin dan teknisi kami siap merespon pertanyaan Anda secara langsung via WhatsApp.
                </p>
              </div>
            </div>

            <Link
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Halo%20Admin%20Alfanet,%20saya%20ingin%20bertanya`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-alfanet-red hover:bg-red-700 text-white font-bold text-sm whitespace-nowrap transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Tanya Admin</span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
