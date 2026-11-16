import React from "react";
import { Zap, Infinity as InfinityIcon, Headphones, MapPin } from "lucide-react";

export default function BenefitBar() {
  const items = [
    {
      icon: Zap,
      metric: "100%",
      label: "Fiber Optik Murni",
      desc: "Koneksi stabil kabel optik FTTH",
    },
    {
      icon: InfinityIcon,
      metric: "Unlimited",
      label: "Tanpa FUP",
      desc: "Bebas unduh tanpa batas kuota",
    },
    {
      icon: Headphones,
      metric: "24/7",
      label: "Support Siaga",
      desc: "Layanan teknis & admin responsif",
    },
    {
      icon: MapPin,
      metric: "Lokal",
      label: "Tanah Merah",
      desc: "Pos teknisi resmi di Bangkalan",
    },
  ];

  return (
    <section
      className="w-full bg-white border-b border-alfanet-border relative z-30"
      aria-label="Keunggulan Utama Alfanet"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-alfanet-border">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.metric}
                className="flex items-start sm:items-center gap-4 lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                {/* Red Icon in subtle container */}
                <div className="w-12 h-12 rounded-lg bg-red-50 text-alfanet-red flex items-center justify-center flex-shrink-0 border border-red-100">
                  <Icon className="w-6 h-6 text-alfanet-red" />
                </div>

                {/* Typography info */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-black text-alfanet-black tracking-tight">
                      {item.metric}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-alfanet-red">
                    {item.label}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium hidden sm:inline-block mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
