"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ShoppingBag } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";

function FacebookIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const { locale } = useLocale();
  const isId = locale === "id";
  const infoLinks = [
    { label: isId ? "Katalog" : "Catalog", href: "/katalog" },
    { label: isId ? "Tentang Kami" : "About Us", href: "/tentang-kami" },
  ];

  return (
    <footer className="relative bg-[#0D0D0D] border-t border-[#C8A96E]/10 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[url('/images/brand/FooterBG.png')] bg-bottom bg-no-repeat bg-contain opacity-90"
        aria-hidden="true"
      />
      {/* Grain overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-3">
              <Image
                src="/images/brand/logoLamita.png"
                alt="Lamita Logo"
                width={50}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-[#C8A96E] tracking-wider mb-4 italic font-[family-name:var(--font-playfair-display)]">
              {isId ? "Pancarkan Jelitamu" : "Radiate Your Beauty"}
            </p>
            <p className="text-sm text-[#9A9A9A] leading-relaxed max-w-xs">
              {isId
                ? "Aksesoris etnik handmade yang dibuat dengan cinta dari bahan lokal Indonesia."
                : "Handmade ethnic accessories crafted with love from Indonesian local materials."}
            </p>
            <div className="flex items-start gap-2 mt-4 text-[#9A9A9A]">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#C8A96E]/60" />
              <p className="text-xs leading-relaxed">
                Mertojoyo Blok L 6, Malang,
                <br />
                East Java, Indonesia
              </p>
            </div>
          </div>

          {/* Column 2: Informasi */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#F5F0EB] mb-6">
              {isId ? "Informasi" : "Information"}
            </h4>
            <ul className="space-y-3">
              {infoLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#9A9A9A] hover:text-[#D4B87A] transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#C8A96E] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hubungi Kami */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#F5F0EB] mb-6">
              {isId ? "Hubungi Kami" : "Contact Us"}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6281994343432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#9A9A9A] hover:text-[#D4B87A] transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <Phone size={14} className="text-[#C8A96E]/60 group-hover:text-[#C8A96E] transition-colors" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/AksesorisEtnikBatik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#9A9A9A] hover:text-[#D4B87A] transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <FacebookIcon size={14} className="text-[#C8A96E]/60 group-hover:text-[#C8A96E] transition-colors" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kalungbatik_omahlamita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#9A9A9A] hover:text-[#D4B87A] transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <InstagramIcon size={14} className="text-[#C8A96E]/60 group-hover:text-[#C8A96E] transition-colors" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Beli Produk */}
          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#F5F0EB] mb-6">
              {isId ? "Beli Produk" : "Shop"}
            </h4>
            <a
              href="https://shopee.co.id/kalungbatik_3iswari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C8A96E]/30 text-[#C8A96E] text-sm tracking-wider hover:bg-[#C8A96E]/10 hover:border-[#C8A96E]/60 transition-all duration-300 rounded-sm group"
            >
              <ShoppingBag size={16} className="group-hover:scale-110 transition-transform" />
              <span>Shopee</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-[#9A9A9A]/50 tracking-wider">
            © {new Date().getFullYear()} LAMITA by Ethnicware Indonesia.{" "}
            {isId ? "Hak cipta dilindungi." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
