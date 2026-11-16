import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "white" | "dark";
  className?: string;
  withTag?: boolean;
}

export default function Logo({
  variant = "white",
  className = "",
  withTag = true,
}: LogoProps) {
  const isWhite = variant === "white";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${className}`}
      aria-label="Alfanet Tanah Merah - Beranda"
    >
      {/* Icon Badge */}
      <div
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
          isWhite ? "bg-white text-alfanet-red" : "bg-alfanet-red text-white"
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-7 h-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Dynamic stylized A chevron */}
          <path
            d="M20 7L32 31H25L20 20.5L15 31H8L20 7Z"
            fill="currentColor"
          />
          <path
            d="M16 25.5H24V29H16V25.5Z"
            fill={isWhite ? "#E30613" : "#FFFFFF"}
          />
          {/* Signal wave arc */}
          <path
            d="M29 13C33 17 33 23 29 27"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight">
          <span
            className={`font-black text-xl sm:text-2xl leading-none ${
              isWhite ? "text-white" : "text-alfanet-black"
            }`}
          >
            ALFA
          </span>
          <span
            className={`font-black text-xl sm:text-2xl leading-none ${
              isWhite ? "text-white" : "text-alfanet-red"
            }`}
          >
            NET
          </span>
        </div>
        {withTag && (
          <span
            className={`text-[9px] font-bold tracking-[0.18em] uppercase leading-none mt-1 ${
              isWhite
                ? "text-white/80"
                : "text-alfanet-red font-extrabold"
            }`}
          >
            LAYANAN WIFI
          </span>
        )}
      </div>
    </Link>
  );
}
