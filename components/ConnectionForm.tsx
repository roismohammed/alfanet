"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, User, Phone, MapPin, Wifi, Shield } from "lucide-react";
import { INTERNET_PACKAGES } from "@/data/packages";
import { BRAND_INFO } from "@/data/siteData";

export default function ConnectionForm() {
  const [nama, setNama] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [paket, setPaket] = useState("100mbps");
  const [submitted, setSubmitted] = useState(false);

  const selectedPkg = INTERNET_PACKAGES.find((p) => p.id === paket) || INTERNET_PACKAGES[3];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !whatsapp.trim()) return;

    const message = encodeURIComponent(
      `Halo Admin Alfanet Tanah Merah,\n\nSaya ingin pasang internet baru:\n- Nama: ${nama}\n- WhatsApp: ${whatsapp}\n- Alamat/Desa: ${alamat || "Tanah Merah"}\n- Pilihan Paket: ${selectedPkg.speed} (Rp${selectedPkg.price}/bulan)\n\nMohon info ketersediaan tiang ODP di dekat rumah saya. Terima kasih!`
    );

    setSubmitted(true);
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="daftar"
      className="w-full bg-white py-12 sm:py-16 border-b border-neutral-200 relative z-30"
      aria-label="Formulir Berlangganan Internet"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="border border-neutral-900 bg-white rounded-lg">
          {/* Top Header Bar */}
          <div className="bg-neutral-900 text-white px-6 sm:px-8 py-5 rounded-t-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-400 block mb-1">
                REGISTRASI ONLINE RESMI
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Dapatkan Koneksi Internet
              </h2>
            </div>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-neutral-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Tanpa Biaya Survey
              </span>
              <span className="text-neutral-600 hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Cek ODP 15 Menit
              </span>
              <span className="text-neutral-600 hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Fiber Optik
              </span>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="border border-neutral-900 p-8 text-center bg-white">
                <div className="w-14 h-14 bg-red-50 text-alfanet-red flex items-center justify-center mx-auto mb-4 border border-red-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-alfanet-black tracking-tight mb-2">
                  Permintaan Terkirim ke WhatsApp Admin!
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 max-w-lg mx-auto mb-6">
                  Tim teknisi Alfanet Tanah Merah sedang memverifikasi jarak tiang ODP ke alamat Anda. Silakan lanjutkan percakapan di WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 border border-neutral-900 text-neutral-900 font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  ← Isi Formulir Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Package Quick Selector */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                      <Wifi className="w-4 h-4 text-alfanet-red" />
                      <span>Pilih Kecepatan Paket:</span>
                    </label>
                    <span className="text-xs font-bold text-alfanet-red">
                      Tarif: Rp{selectedPkg.price}/bulan
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {INTERNET_PACKAGES.map((pkg) => {
                      const isSelected = paket === pkg.id;
                      return (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => setPaket(pkg.id)}
                          className={`p-3 text-left transition-all border flex flex-col justify-between ${
                            isSelected
                              ? "border-alfanet-red bg-red-50/50 text-alfanet-black"
                              : "border-neutral-300 bg-white hover:border-neutral-900 text-neutral-800"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className="text-sm font-black tracking-tight">
                              {pkg.speed}
                            </span>
                            {pkg.popular && (
                              <span className="text-[9px] font-black uppercase bg-alfanet-red text-white px-1.5 py-0.2">
                                Populer
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-bold text-neutral-700">
                            Rp{pkg.price}
                          </span>
                          <span className="text-[10px] text-neutral-500 mt-0.5">
                            {pkg.idealFor.split("(")[0]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3 Input Fields + Submit Button */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end pt-2">
                  {/* Nama Lengkap */}
                  <div>
                    <label
                      htmlFor="conn-nama"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5"
                    >
                      Nama Pemohon *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="conn-nama"
                        type="text"
                        required
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        placeholder="Nama lengkap Anda"
                        className="w-full pl-10 pr-4 py-3 border border-neutral-300 bg-white rounded-sm text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-alfanet-red focus:ring-0 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Nomor WhatsApp */}
                  <div>
                    <label
                      htmlFor="conn-whatsapp"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5"
                    >
                      Nomor WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="conn-whatsapp"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="Contoh: 0812-3456-7890"
                        className="w-full pl-10 pr-4 py-3 border border-neutral-300 bg-white rounded-sm text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-alfanet-red focus:ring-0 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Alamat / Desa */}
                  <div>
                    <label
                      htmlFor="conn-alamat"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5"
                    >
                      Desa / Dusun Pemasangan
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="conn-alamat"
                        type="text"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        placeholder="Contoh: Petrah, Tanah Merah"
                        className="w-full pl-10 pr-4 py-3 border border-neutral-300 bg-white rounded-sm text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-alfanet-red focus:ring-0 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Button Submit */}
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-alfanet-red hover:bg-red-700 text-white font-bold text-sm rounded-sm transition-colors flex items-center justify-center gap-2 focus:outline-none"
                    >
                      <span>Daftar Sekarang</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-500 border-t border-neutral-100 gap-2">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Data registrasi langsung diterima admin Alfanet Tanah Merah Bangkalan.</span>
                  </div>
                  <span className="font-semibold text-neutral-700">
                    Hotline Teknis: {BRAND_INFO.whatsappDisplay}
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
