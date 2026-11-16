import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white pt-20">
      <Navbar variant="solid" />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-alfanet-red mb-2">
          404 ERROR
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-alfanet-black tracking-tight mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-md mb-8">
          Halaman yang Anda tuju tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-alfanet-red hover:bg-red-700 text-white font-bold text-sm transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
      <Footer />
    </main>
  );
}
