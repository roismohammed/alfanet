import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FloatingWidgets from "@/components/FloatingWidgets";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alfanet-tanahmerah.com"),
  title: {
    default: "Alfanet Tanah Merah — Internet Fiber Optik Cepat & Unlimited",
    template: "%s | Alfanet Tanah Merah",
  },
  description:
    "Alfanet Tanah Merah menyediakan layanan internet fiber optik unlimited tanpa FUP untuk wilayah Tanah Merah dan sekitarnya, Kabupaten Bangkalan.",
  keywords: [
    "Alfanet Tanah Merah",
    "internet Tanah Merah",
    "wifi Tanah Merah",
    "internet Bangkalan",
    "wifi Bangkalan",
    "fiber optik Tanah Merah",
    "internet unlimited Tanah Merah",
    "pasang wifi Tanah Merah",
    "ISP Bangkalan Madura",
  ],
  authors: [{ name: "Alfanet Tanah Merah" }],
  creator: "Alfanet Tanah Merah",
  publisher: "Alfanet Tanah Merah",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alfanet-tanahmerah.com",
    title: "Alfanet Tanah Merah — Internet Fiber Optik Cepat & Unlimited",
    description:
      "Layanan penyedia internet berbasis Fiber Optik 100% unlimited tanpa FUP di wilayah Tanah Merah dan sekitarnya, Bangkalan.",
    siteName: "Alfanet Tanah Merah",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Alfanet Tanah Merah Fiber Optic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfanet Tanah Merah — Internet Fiber Optik Cepat & Unlimited",
    description:
      "Internet fiber optik unlimited tanpa FUP untuk kebutuhan rumah dan usaha di Tanah Merah, Bangkalan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alfanet Tanah Merah",
    image: "https://alfanet-tanahmerah.com/images/logo.svg",
    telephone: "+62-819-5853-1000",
    url: "https://alfanet-tanahmerah.com",
    priceRange: "Rp155.000 - Rp795.000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Tanah Merah",
      addressLocality: "Tanah Merah",
      addressRegion: "Jawa Timur",
      postalCode: "69172",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.0673,
      longitude: 112.9238,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://instagram.com/alfanetbangkalan",
      "https://tiktok.com/@alfanet.tanah.merah",
    ],
  };

  return (
    <html lang="id" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-alfanet-black antialiased selection:bg-red-100 selection:text-alfanet-red">
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}
