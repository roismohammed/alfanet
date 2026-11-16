import React from "react";
import Link from "next/link";
import { MapPin, Check, ArrowRight, Radio } from "lucide-react";
import { COVERAGE_AREAS, BRAND_INFO } from "@/data/siteData";

export default function CoveragePreview() {
  const checkMessage = encodeURIComponent(
    "Halo Admin Alfanet Tanah Merah, saya ingin mengecek apakah jaringan Fiber Optik sudah terpasang di dekat alamat rumah saya."
  );

  return (
    <section
      id="coverage"
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
      aria-label="Area Coverage Alfanet"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            WILAYAH LAYANAN
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-alfanet-black tracking-tight mt-1 mb-4">
            Jangkauan Alfanet
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Kami hadir untuk menghubungkan lebih banyak rumah dan usaha di Tanah Merah dan sekitarnya.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-5 bg-white border border-alfanet-border rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-alfanet-border mb-6">
                <div className="flex items-center gap-2">
                  <Radio className="w-5 h-5 text-alfanet-red animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Peta Distribusi ODP
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-sm bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Fiber Live
                </span>
              </div>

              {/* Schematic Map Layout of Tanah Merah Region */}
              <div className="w-full h-[280px] bg-neutral-900 rounded-sm relative overflow-hidden flex items-center justify-center p-4">
                {/* Grid coordinates */}
                <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="coverageGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#FFFFFF" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#coverageGrid)" />
                </svg>

                {/* Road Lines & Fiber Backbone */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Main Road Highway Line (Jl. Raya Tanah Merah - Blega) */}
                  <path
                    d="M 20 200 Q 150 140 280 160 T 420 100"
                    stroke="#E30613"
                    strokeWidth="3.5"
                    fill="none"
                    strokeDasharray="6 3"
                  />
                  {/* Branch cables */}
                  <path d="M 150 140 L 120 70" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="2" />
                  <path d="M 200 150 L 220 230" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="2" />
                  <path d="M 280 160 L 320 240" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="2" />
                  <path d="M 330 130 L 360 60" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="2" />
                </svg>

                {/* Map Nodes / Pin Points */}
                <div className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-black/80 px-2.5 py-1 rounded-sm border border-neutral-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-bold text-white">Petrah</span>
                </div>

                <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-alfanet-red px-3 py-1.5 rounded-sm border border-white text-white">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-xs font-black">Tanah Merah Dajah</span>
                </div>

                <div className="absolute top-[75%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-black/80 px-2.5 py-1 rounded-sm border border-neutral-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-bold text-white">Dumajah</span>
                </div>

                <div className="absolute top-[75%] left-[72%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-black/80 px-2.5 py-1 rounded-sm border border-neutral-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-bold text-white">Rongdurin</span>
                </div>

                <div className="absolute top-[22%] left-[78%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-black/80 px-2.5 py-1 rounded-sm border border-neutral-700">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-[10px] font-bold text-white">Baipajung</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-alfanet-border">
              <p className="text-xs text-neutral-600 mb-4">
                Lokasi rumah belum terdaftar di peta? Kirimkan titik share-loc via WhatsApp untuk survey tiang gratis oleh teknisi kami.
              </p>
              <Link
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${checkMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-sm bg-alfanet-red hover:bg-red-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Cek Ketersediaan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Area List Table (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-alfanet-border rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-alfanet-border mb-4">
                <h3 className="text-lg font-bold text-alfanet-black tracking-tight">
                  Daftar Wilayah Jaringan Aktif
                </h3>
                <Link
                  href="/coverage"
                  className="text-xs font-bold text-alfanet-red hover:underline flex items-center gap-1"
                >
                  <span>Lihat Semua Detail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Area List */}
              <div className="divide-y divide-neutral-100">
                {COVERAGE_AREAS.slice(0, 5).map((area) => (
                  <div
                    key={area.desa}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-neutral-900">
                          Desa {area.desa}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${
                            area.status === "Tersedia"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {area.status}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                        {area.keterangan}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <span className="text-xs font-semibold text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-sm">
                        {area.odpCount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="mt-6 pt-4 border-t border-alfanet-border flex items-center gap-3">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <p className="text-xs text-neutral-600">
                Pemasangan kabel drop wire optik hingga 150 meter dari tiang ODP terdekat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
