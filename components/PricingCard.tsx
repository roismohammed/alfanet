import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { InternetPackage } from "@/data/packages";
import { BRAND_INFO } from "@/data/siteData";

interface PricingCardProps {
  pkg: InternetPackage;
}

export default function PricingCard({ pkg }: PricingCardProps) {
  const isPopular = pkg.popular;

  const orderMessage = encodeURIComponent(
    `Halo Admin Alfanet Tanah Merah, saya ingin berlangganan Paket ${pkg.speed} seharga Rp${pkg.price}/bulan. Bagaimana prosedur pemasangannya?`
  );

  return (
    <div
      className={`relative bg-white rounded-lg flex flex-col justify-between p-6 sm:p-7 ${
        isPopular
          ? "border-2 border-alfanet-red"
          : "border border-neutral-300"
      }`}
    >
      {/* Top Banner for Popular */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-alfanet-red text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-sm whitespace-nowrap">
          PALING POPULER
        </div>
      )}

      <div>
        {/* Speed Header */}
        <div className="border-b border-alfanet-border pb-5 mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Kecepatan Internet
          </span>
          <div className="flex items-baseline justify-between mt-1">
            <h3 className="text-3xl font-black text-alfanet-black tracking-tight">
              {pkg.speed}
            </h3>
            <span className="text-xs font-bold px-2 py-0.5 border border-neutral-400 text-neutral-800">
              FTTH Fiber
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-2 line-clamp-2">
            {pkg.description}
          </p>
        </div>

        {/* Price display */}
        <div className="mb-6">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide block mb-1">
            Biaya Langganan
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-base font-bold text-neutral-800">Rp</span>
            <span className="text-3xl sm:text-4xl font-black text-alfanet-black tracking-tight">
              {pkg.price}
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-500 ml-1">
              {pkg.period}
            </span>
          </div>
          <span className="text-[11px] text-neutral-400 font-normal mt-1 block">
            *Tanpa biaya sewa modem bulanan
          </span>
        </div>

        {/* Feature List */}
        <div className="space-y-3 mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-700">
            Fasilitas Termasuk:
          </p>
          <ul className="space-y-2.5">
            {pkg.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700"
              >
                <CheckCircle2
                  className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                    isPopular ? "text-alfanet-red" : "text-emerald-600"
                  }`}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action */}
      <div className="pt-2">
        <Link
          href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${orderMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 px-5 rounded-sm text-sm font-bold flex items-center justify-center gap-2 transition-colors focus:outline-none focus-visible:ring-0 ${
            isPopular
              ? "bg-alfanet-red hover:bg-red-700 text-white"
              : "bg-neutral-900 hover:bg-black text-white"
          }`}
        >
          <span>Pilih Paket</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
