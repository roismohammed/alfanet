import React from "react";
import { MessageSquare, MapPinCheck, Wifi } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Hubungi Admin",
      desc: "Pilih paket internet dan kirimkan data nama serta alamat Anda melalui form website atau WhatsApp resmi.",
    },
    {
      step: "02",
      icon: MapPinCheck,
      title: "Cek Ketersediaan Jaringan",
      desc: "Tim teknis kami memverifikasi jarak tiang ODP Fiber Optik terdekat dari rumah Anda secara akurat dan cepat.",
    },
    {
      step: "03",
      icon: Wifi,
      title: "Instalasi & Aktif",
      desc: "Teknisi lokal datang memasang kabel optik dan konfigurasi modem Wi-Fi hingga internet menyala lancar.",
    },
  ];

  return (
    <section
      className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-alfanet-border"
      aria-label="Cara Berlangganan"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            ALUR MUDAH
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-alfanet-black tracking-tight mt-1 mb-4">
            Berlangganan Jadi Lebih Mudah
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Hanya butuh 3 langkah praktis untuk menikmati internet super cepat tanpa hambatan.
          </p>
        </div>

        {/* 3 Steps in Numbered Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col items-start border-l-2 md:border-l-0 md:border-t-2 border-alfanet-red pl-6 md:pl-0 md:pt-6"
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-alfanet-red tracking-tight">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-alfanet-red flex items-center justify-center border border-red-100">
                    <Icon className="w-5 h-5 text-alfanet-red" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-alfanet-black tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
