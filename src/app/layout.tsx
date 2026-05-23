import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omah Lamita — Handmade Ethnic Accessories | Pancarkan Jelitamu",
  description:
    "LAMITA by Ethnicware Indonesia — Aksesoris etnik handmade dari berbagai bahan lokal Indonesia. Lanyard, kalung, dan anting batik buatan tangan dengan cinta.",
  keywords: [
    "Omah Lamita",
    "LAMITA",
    "aksesoris etnik",
    "handmade accessories",
    "batik jewelry",
    "kalung batik",
    "anting batik",
    "lanyard batik",
    "ethnic accessories Indonesia",
    "Malang",
  ],
  openGraph: {
    title: "Omah Lamita — Handmade Ethnic Accessories",
    description:
      "Pancarkan Jelitamu — Aksesoris etnik handmade dari berbagai bahan lokal Indonesia.",
    type: "website",
    locale: "id_ID",
    siteName: "Omah Lamita",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omah Lamita — Handmade Ethnic Accessories",
    description:
      "Pancarkan Jelitamu — Aksesoris etnik handmade dari berbagai bahan lokal Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Omah Lamita",
              alternateName: "LAMITA by Ethnicware Indonesia",
              description:
                "Handmade ethnic accessories from various Indonesian local materials",
              url: "https://omahlamita.com",
              telephone: "+6281994343432",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mertojoyo Blok L 6",
                addressLocality: "Malang",
                addressRegion: "East Java",
                addressCountry: "ID",
              },
              image: "/images/hero/hero-bg.png",
              priceRange: "Rp65.000 - Rp225.000",
              sameAs: [
                "https://instagram.com/kalungbatik_omahlamita",
                "https://facebook.com/AksesorisEtnikBatik",
                "https://shopee.co.id/kalungbatik_3iswari",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
