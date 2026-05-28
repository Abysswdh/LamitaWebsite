import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ProductGrid from "@/components/katalog/ProductGrid";

export const metadata: Metadata = {
  title: "Katalog | Omah Lamita - Aksesoris Etnik Handmade",
  description:
    "Jelajahi koleksi aksesoris etnik handmade kami - lanyard, kalung, dan anting dengan sentuhan batik Indonesia.",
  openGraph: {
    title: "Katalog | Omah Lamita - Aksesoris Etnik Handmade",
    description:
      "Jelajahi koleksi aksesoris etnik handmade kami - lanyard, kalung, dan anting dengan sentuhan batik Indonesia.",
    type: "website",
    locale: "id_ID",
    siteName: "Omah Lamita",
  },
};

export default function KatalogPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
