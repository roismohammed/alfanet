import React from "react";
import { Zap, ShieldCheck, Users, Clock } from "lucide-react";

export default function WhyAlfanet() {
  const points = [
    {
      icon: Zap,
      number: "01",
      title: "100% Fiber Optik",
      desc: "Koneksi kabel optik murni FTTH langsung ke dalam rumah. Stabil di segala cuaca hujan dan tahan interferensi sinyal radio.",
    },
    {
      icon: ShieldCheck,
      number: "02",
      title: "Unlimited Tanpa FUP",
      desc: "Bebas unduh dan streaming tanpa batasan kuota. Kecepatan tetap 100% konsisten dari awal hingga akhir bulan tanpa penurunan.",
    },
    {
      icon: Users,
      number: "03",
      title: "Teknisi Lokal Madura",
      desc: "Posko teknisi siaga di wilayah Tanah Merah, Bangkalan. Respon instalasi dan perbaikan kendala jaringan jauh lebih cepat.",
    },
    {
      icon: Clock,
      number: "04",
      title: "Support Cepat 24/7",
      desc: "Admin WhatsApp dan tim teknisi siaga melayani konsultasi, registrasi baru, dan bantuan darurat jaringan kapan saja.",
    },
  ];

  return (
    <section
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
      aria-label="Keunggulan Alfanet Tanah Merah"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            STANDAR KUALITAS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-alfanet-black tracking-tight mt-1 mb-4">
            Kenapa Alfanet?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Infrastruktur fiber optik modern dipadukan dengan komitmen pelayanan teknisi lokal Tanah Merah.
          </p>
        </div>

        {/* 4 Item Grid in ISP Telecom Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="bg-white border border-neutral-200 rounded-lg p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-neutral-100 rounded-sm text-alfanet-red flex items-center justify-center">
                      <Icon className="w-6 h-6 text-alfanet-red" />
                    </div>
                    <span className="text-2xl font-black text-neutral-200">
                      {pt.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-alfanet-black tracking-tight mb-2.5">
                    {pt.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
