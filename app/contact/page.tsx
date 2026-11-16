"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Instagram, Clock, Send, CheckCircle2, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BRAND_INFO } from "@/data/siteData";
import { INTERNET_PACKAGES } from "@/data/packages";

export default function ContactPage() {
  const [nama, setNama] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [paket, setPaket] = useState("100mbps");
  const [pesan, setPesan] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !whatsapp.trim()) return;

    const selectedPkg =
      INTERNET_PACKAGES.find((p) => p.id === paket)?.speed || "100 Mbps";

    const text = encodeURIComponent(
      `Halo Admin Alfanet Tanah Merah,\n\nSaya ingin mengajukan permohonan pasang baru / informasi internet:\n\n- Nama: ${nama}\n- Nomor WhatsApp: ${whatsapp}\n- Alamat Lengkap: ${alamat || "-"}\n- Pilihan Paket: ${selectedPkg}\n- Pesan/Keterangan: ${pesan || "-"}\n\nMohon dicek ketersediaan jaringan di lokasi saya. Terima kasih!`
    );

    setSubmitted(true);
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <main className="w-full min-h-screen flex flex-col bg-white pt-20">
      <Navbar variant="solid" />

      {/* Header */}
      <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-alfanet-red">
            LAYANAN PELANGGAN
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-alfanet-black tracking-tight mt-2 mb-4">
            Hubungi Alfanet
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Tim Alfanet Tanah Merah siap membantu kebutuhan internet Anda.
          </p>
        </div>
      </section>

      {/* Main Content: Left Info / Right Form */}
      <section className="w-full py-16 sm:py-20 border-b border-neutral-200 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Informasi Kontak (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-alfanet-red">
                  HUBUNGI KAMI
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-alfanet-black tracking-tight mt-1 mb-4">
                  Terhubung Langsung dengan Tim Kami
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Konsultasikan paket yang sesuai, tanyakan ketersediaan tiang
                  ODP di depan rumah Anda, atau laporkan kendala teknis jaringan.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <div className="p-5 rounded-xl border-2 border-neutral-100 hover:border-neutral-900 bg-white flex items-start gap-4 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-red-50 text-alfanet-red flex items-center justify-center flex-shrink-0 border border-red-100">
                    <Phone className="w-5 h-5 text-alfanet-red" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      WhatsApp Resmi
                    </span>
                    <p className="text-base font-bold text-neutral-900 mt-0.5">
                      <Link
                        href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-alfanet-red transition-colors"
                      >
                        {BRAND_INFO.whatsappDisplay}
                      </Link>
                    </p>
                    <span className="text-xs text-emerald-600 font-medium mt-1 inline-block">
                      Respon cepat via chat
                    </span>
                  </div>
                </div>

                {/* Instagram */}
                <div className="p-5 rounded-xl border-2 border-neutral-100 hover:border-neutral-900 bg-white flex items-start gap-4 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-red-50 text-alfanet-red flex items-center justify-center flex-shrink-0 border border-red-100">
                    <Instagram className="w-5 h-5 text-alfanet-red" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Instagram
                    </span>
                    <p className="text-base font-bold text-neutral-900 mt-0.5">
                      <Link
                        href={BRAND_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-alfanet-red transition-colors"
                      >
                        {BRAND_INFO.instagram}
                      </Link>
                    </p>
                    <span className="text-xs text-neutral-500 font-normal mt-1 inline-block">
                      Update promo & pengumuman jaringan
                    </span>
                  </div>
                </div>

                {/* TikTok */}
                <div className="p-5 rounded-xl border-2 border-neutral-100 hover:border-neutral-900 bg-white flex items-start gap-4 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-red-50 text-alfanet-red flex items-center justify-center flex-shrink-0 border border-red-100">
                    <span className="font-bold text-base text-alfanet-red">♪</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      TikTok
                    </span>
                    <p className="text-base font-bold text-neutral-900 mt-0.5">
                      <Link
                        href={BRAND_INFO.tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-alfanet-red transition-colors"
                      >
                        {BRAND_INFO.tiktok}
                      </Link>
                    </p>
                    <span className="text-xs text-neutral-500 font-normal mt-1 inline-block">
                      Aktivitas teknisi & tips koneksi
                    </span>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="p-5 rounded-xl border-2 border-neutral-100 bg-white flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-neutral-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Jam Layanan Kantor
                    </span>
                    <p className="text-sm font-bold text-neutral-800 mt-0.5">
                      {BRAND_INFO.openingHours}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Lokasi: {BRAND_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border-2 border-neutral-900 rounded-2xl p-8 sm:p-10">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-alfanet-red">
                  FORMULIR PENDAFTARAN & KONSULTASI
                </span>
                <h3 className="text-2xl font-black text-alfanet-black tracking-tight mt-1">
                  Kirim Permintaan Pemasangan
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  Isi data di bawah ini, tim admin Alfanet akan memproses permintaan Anda ke WhatsApp resmi.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-lg bg-red-50 border border-red-200">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-6 h-6 text-alfanet-red flex-shrink-0" />
                    <h4 className="font-bold text-base text-alfanet-black">
                      Permintaan Sedang Dialihkan ke WhatsApp!
                    </h4>
                  </div>
                  <p className="text-sm text-neutral-600 mb-4">
                    Jika jendela WhatsApp tidak terbuka otomatis, klik tombol di bawah ini.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-alfanet-red hover:underline"
                  >
                    ← Isi Ulang Formulir
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nama */}
                  <div>
                    <label
                      htmlFor="form-nama"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      id="form-nama"
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Contoh: Muhammad Ali"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-sm text-alfanet-black placeholder:text-neutral-400 focus:outline-none focus:border-alfanet-red focus:ring-1 focus:ring-alfanet-red transition-colors"
                    />
                  </div>

                  {/* Nomor WhatsApp */}
                  <div>
                    <label
                      htmlFor="form-whatsapp"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                    >
                      Nomor WhatsApp *
                    </label>
                    <input
                      id="form-whatsapp"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="0819-xxxx-xxxx"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-sm text-alfanet-black placeholder:text-neutral-400 focus:outline-none focus:border-alfanet-red focus:ring-1 focus:ring-alfanet-red transition-colors"
                    />
                  </div>

                  {/* Alamat Lengkap */}
                  <div>
                    <label
                      htmlFor="form-alamat"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                    >
                      Alamat / Desa Pemasangan *
                    </label>
                    <input
                      id="form-alamat"
                      type="text"
                      required
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      placeholder="Contoh: Dusun Timur, Desa Petrah RT 02 / RW 01"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-sm text-alfanet-black placeholder:text-neutral-400 focus:outline-none focus:border-alfanet-red focus:ring-1 focus:ring-alfanet-red transition-colors"
                    />
                  </div>

                  {/* Pilihan Paket */}
                  <div>
                    <label
                      htmlFor="form-paket"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                    >
                      Pilihan Paket Internet *
                    </label>
                    <select
                      id="form-paket"
                      value={paket}
                      onChange={(e) => setPaket(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-sm text-alfanet-black focus:outline-none focus:border-alfanet-red focus:ring-1 focus:ring-alfanet-red transition-colors cursor-pointer"
                    >
                      {INTERNET_PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.speed} — Rp{pkg.price}/bln {pkg.popular ? "⭐ Paling Populer" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pesan Tambahan */}
                  <div>
                    <label
                      htmlFor="form-pesan"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5"
                    >
                      Pesan Tambahan / Patokan Rumah
                    </label>
                    <textarea
                      id="form-pesan"
                      rows={3}
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)}
                      placeholder="Contoh: Sebelah utara masjid, dekat tiang listrik nomor 3"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-sm text-alfanet-black placeholder:text-neutral-400 focus:outline-none focus:border-alfanet-red focus:ring-1 focus:ring-alfanet-red transition-colors resize-none"
                    />
                  </div>

                  {/* Button Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-lg bg-alfanet-red hover:bg-red-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-alfanet-red"
                  >
                    <span>Kirim Permintaan</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-neutral-500 text-center">
                    Verifikasi jaringan dan pengecekan tiang gratis tanpa biaya survey.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
