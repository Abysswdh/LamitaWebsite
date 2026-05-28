import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import TentangKamiContent from "@/components/about/TentangKamiContent";

export const metadata: Metadata = {
  title: "About Us | Omah Lamita - Handmade Ethnic Accessories",
  description:
    "Learn the story of LAMITA — a handmade ethnic accessories business from Malang, founded by Setyo Lesmono and Irena Iswari since 2019. Mangajapa Becik — hope for the good.",
  openGraph: {
    title: "About Us | Omah Lamita - Handmade Ethnic Accessories",
    description:
      "Learn the story of LAMITA — a handmade ethnic accessories business from Malang, founded by Setyo Lesmono and Irena Iswari since 2019.",
    type: "website",
    locale: "en_US",
    siteName: "Omah Lamita",
  },
};

export default function TentangKamiPage() {
  return (
    <>
      <Navbar />
      <main>
        <TentangKamiContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
