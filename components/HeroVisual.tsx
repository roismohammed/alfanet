import React from "react";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[640px] flex items-end justify-center lg:justify-end overflow-hidden lg:overflow-visible">
      {/* 3 Curved Wi-Fi Arcs behind technician (Reference spec #16) */}
      <div
        className="absolute top-6 lg:top-10 right-4 lg:right-12 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arc 1 - Outermost large arc */}
          <path
            d="M 60 280 A 180 180 0 0 1 340 280"
            stroke="#FFFFFF"
            strokeOpacity="0.25"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 60 280 A 180 180 0 0 1 340 280"
            stroke="#FF4D4D"
            strokeOpacity="0.4"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Arc 2 - Middle arc */}
          <path
            d="M 105 280 A 130 130 0 0 1 295 280"
            stroke="#FFFFFF"
            strokeOpacity="0.35"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M 105 280 A 130 130 0 0 1 295 280"
            stroke="#FF6B6B"
            strokeOpacity="0.5"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Arc 3 - Inner arc */}
          <path
            d="M 150 280 A 80 80 0 0 1 250 280"
            stroke="#FFFFFF"
            strokeOpacity="0.5"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 150 280 A 80 80 0 0 1 250 280"
            stroke="#FFFFFF"
            strokeOpacity="0.8"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Wi-Fi Center Dot */}
          <circle cx="200" cy="285" r="12" fill="#FFFFFF" fillOpacity="0.9" />
          <circle cx="200" cy="285" r="6" fill="#E30613" />

          {/* Subtle network node lines */}
          <line
            x1="200"
            y1="100"
            x2="200"
            y2="30"
            stroke="#FFFFFF"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="100"
            y1="150"
            x2="40"
            y2="100"
            stroke="#FFFFFF"
            strokeOpacity="0.15"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="300"
            y1="150"
            x2="360"
            y2="100"
            stroke="#FFFFFF"
            strokeOpacity="0.15"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Realistic Alfanet Fiber Technician SVG composition (ISP Realism) */}
      <div className="relative z-10 w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[560px] h-[460px] sm:h-[540px] lg:h-[620px] flex items-end justify-center">
        <svg
          viewBox="0 0 500 580"
          className="w-full h-full object-contain filter drop-shadow-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dark optical rack gradient */}
            <linearGradient id="rackGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1a0204" />
              <stop offset="50%" stopColor="#2b0307" />
              <stop offset="100%" stopColor="#1a0204" />
            </linearGradient>

            {/* Red uniform gradient */}
            <linearGradient id="uniformGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B30510" />
              <stop offset="60%" stopColor="#E30613" />
              <stop offset="100%" stopColor="#8A000A" />
            </linearGradient>

            {/* Technician skin tone with highlight */}
            <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5C9A8" />
              <stop offset="50%" stopColor="#E0A97E" />
              <stop offset="100%" stopColor="#C4885E" />
            </linearGradient>

            {/* Subtle shadow filter for realism */}
            <filter id="shadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.2"/>
            </filter>


            {/* Fiber Optic glow */}
            <linearGradient id="fiberGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="50%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            {/* Bottom blend fade to red hero base */}
            <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="70%" stopColor="#E30613" stopOpacity="0" />
              <stop offset="95%" stopColor="#E30613" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#E30613" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Background Server Rack / ODF Panel */}
          <g opacity="0.35">
            <rect x="20" y="80" width="160" height="420" rx="4" fill="url(#rackGrad)" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="2" />
            {/* Rack units & blinking status LEDs */}
            {[110, 145, 180, 215, 250, 285, 320, 355].map((y, idx) => (
              <g key={idx}>
                <rect x="30" y={y} width="140" height="26" rx="2" fill="#0D0002" stroke="#4D0509" strokeWidth="1" />
                <circle cx="42" cy={y + 13} r="3" fill={idx % 2 === 0 ? "#00FF66" : "#00E5FF"} />
                <circle cx="54" cy={y + 13} r="3" fill="#00FF66" />
                <circle cx="66" cy={y + 13} r="3" fill="#FFB703" />
                {/* Port patches */}
                <rect x="80" y={y + 8} width="12" height="10" rx="1" fill="#333333" />
                <rect x="96" y={y + 8} width="12" height="10" rx="1" fill="#333333" />
                <rect x="112" y={y + 8} width="12" height="10" rx="1" fill="#333333" />
                <rect x="128" y={y + 8} width="12" height="10" rx="1" fill="#333333" />
              </g>
            ))}
          </g>

          {/* Yellow Optical Fiber Patch Cords Routing */}
          <path
            d="M 120 190 C 80 240, 140 320, 210 380"
            stroke="#FFCC00"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 136 225 C 100 270, 160 340, 220 390"
            stroke="#00E5FF"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 104 160 C 60 210, 90 310, 190 370"
            stroke="#FF3B30"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Technician Body Silhouette & Uniform with depth */}
          <g filter="url(#shadow)">
            {/* Torso / Red Alfanet Uniform Polo */}
            <path
              d="M 180 340 L 220 250 L 280 230 L 370 230 L 420 260 L 460 360 L 450 560 L 170 560 Z"
              fill="url(#uniformGrad)"
            />
            {/* Darker shadow for uniform crease */}
            <path d="M 280 230 L 325 290 L 370 230" fill="none" stroke="#62000B" strokeWidth="6" strokeOpacity="0.3" />
          </g>

          {/* Collar & Zipper */}
          <path d="M 280 230 L 325 290 L 370 230" fill="#200004" stroke="#62000B" strokeWidth="2" />
          <path d="M 325 290 L 325 430" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="6 3" />

          {/* Alfanet Patch on Chest */}
          <g transform="translate(345, 305)">
            <rect width="65" height="24" rx="4" fill="#FFFFFF" />
            <text x="7" y="16" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#E30613">
              ALFANET
            </text>
          </g>

          {/* ID Badge Lanyard */}
          <path d="M 300 260 L 355 350" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.8" />
          <path d="M 350 260 L 355 350" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.8" />
          <rect x="345" y="350" width="22" height="32" rx="2" fill="#FFFFFF" stroke="#CCCCCC" strokeWidth="1" />
          <rect x="348" y="355" width="16" height="12" fill="#E30613" />

          {/* Neck */}
          <path d="M 305 185 L 345 185 L 345 240 L 305 240 Z" fill="url(#skinGrad)" />

          {/* Head & Natural Face */}
          <path
            d="M 295 110 C 295 70, 360 70, 360 110 C 360 145, 355 190, 325 190 C 295 190, 295 145, 295 110 Z"
            fill="url(#skinGrad)"
          />

          {/* Short Neat Hair */}
          <path
            d="M 292 110 C 290 80, 310 65, 335 65 C 360 65, 368 80, 365 110 C 355 90, 345 92, 330 90 C 315 90, 305 95, 292 110 Z"
            fill="#1A1110"
          />

          {/* Technician Ear & Communication Headset */}
          <ellipse cx="295" cy="135" rx="5" ry="9" fill="#D3976E" />
          <path d="M 295 130 C 290 120, 310 75, 335 75" stroke="#333333" strokeWidth="4" fill="none" />
          <circle cx="295" cy="135" r="7" fill="#222222" />
          <path d="M 295 135 L 320 155" stroke="#222222" strokeWidth="2.5" fill="none" />
          <circle cx="320" cy="155" r="3" fill="#E30613" />

          {/* Left Arm & Splicer / Fiber Tool Hand */}
          <path
            d="M 220 250 L 160 350 L 220 380 L 255 330 Z"
            fill="url(#uniformGrad)"
          />
          {/* Hands holding optical fiber splicer */}
          <path d="M 160 350 L 195 385 L 235 375 L 205 345 Z" fill="url(#skinGrad)" />

          {/* Right Arm working forward */}
          <path
            d="M 420 260 L 410 370 L 340 370 L 370 300 Z"
            fill="url(#uniformGrad)"
          />
          <path d="M 340 370 L 285 375 L 290 405 L 335 400 Z" fill="url(#skinGrad)" />

          {/* Optical Fiber Fusion Splicer Tool / OTDR Meter Device */}
          <g transform="translate(195, 355)">
            <rect width="95" height="60" rx="6" fill="#1C1D21" stroke="#444852" strokeWidth="2" />
            {/* Screen */}
            <rect x="12" y="10" width="70" height="30" rx="3" fill="#0A1826" stroke="#00E5FF" strokeWidth="1" />
            {/* Screen Data line */}
            <path d="M 18 25 L 35 25 L 45 16 L 55 32 L 65 25 L 76 25" stroke="#00E5FF" strokeWidth="1.5" fill="none" />
            {/* Control buttons */}
            <circle cx="25" cy="48" r="4" fill="#E30613" />
            <circle cx="45" cy="48" r="4" fill="#00FF66" />
            <circle cx="65" cy="48" r="4" fill="#FFFFFF" />

            {/* Glowing Fiber Core being spliced */}
            <line x1="-15" y1="20" x2="12" y2="20" stroke="url(#fiberGlow)" strokeWidth="3" strokeLinecap="round" />
            <line x1="82" y1="20" x2="110" y2="20" stroke="url(#fiberGlow)" strokeWidth="3" strokeLinecap="round" />
            {/* Splicing spark */}
            <circle cx="12" cy="20" r="4" fill="#FFFFFF" />
            <circle cx="12" cy="20" r="8" fill="#00E5FF" fillOpacity="0.4" />
          </g>

          {/* Bottom Blend Overlay (Subject menyatu dengan bagian bawah hero) */}
          <rect x="0" y="440" width="500" height="140" fill="url(#bottomFade)" />
        </svg>

        {/* Floating Verification Tag (ISP Clean - No Shadow, Pure Contrast) */}
        <div className="absolute -bottom-2 left-2 sm:left-6 bg-white text-alfanet-black border border-white/60 px-3.5 py-2 rounded-lg z-20">
          <div className="text-left">
            <p className="text-[11px] font-bold tracking-wide uppercase text-neutral-900 leading-none">
              Teknisi Lokal Standby
            </p>
            <p className="text-[10px] text-neutral-600 font-medium leading-tight mt-0.5">
              Siap Pasang di Tanah Merah, Madura
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
