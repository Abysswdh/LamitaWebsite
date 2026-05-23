"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag } from "lucide-react";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Shopee CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative group overflow-hidden rounded-sm"
          >
            <div className="relative p-10 md:p-14 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C8A96E]/10 hover:border-[#C8A96E]/30 transition-all duration-500">
              {/* Decorative pattern overlay */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#C8A96E]">
                  <pattern id="batik-cta-1" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="2" fill="currentColor" />
                    <circle cx="0" cy="0" r="1" fill="currentColor" />
                    <circle cx="20" cy="0" r="1" fill="currentColor" />
                    <circle cx="0" cy="20" r="1" fill="currentColor" />
                    <circle cx="20" cy="20" r="1" fill="currentColor" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#batik-cta-1)" />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-bold tracking-wider text-[#F5F0EB] font-[family-name:var(--font-playfair-display)] mb-6 leading-relaxed">
                LIHAT KATALOG
                <br />
                <span className="text-gold-gradient">PRODUK-PRODUK KAMI</span>
              </h3>

              <p className="text-[#9A9A9A] text-sm mb-8 max-w-xs">
                Jelajahi koleksi lengkap aksesoris etnik handmade di Shopee kami
              </p>

              <a
                href="https://shopee.co.id/kalungbatik_3iswari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#EE4D2D] hover:bg-[#D44428] text-white text-sm font-semibold tracking-wider rounded-sm transition-colors duration-300"
                >
                  <ShoppingBag size={18} />
                  Shopee
                </motion.button>
              </a>

              {/* Shimmer effect */}
              <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="relative group overflow-hidden rounded-sm"
          >
            <div className="relative p-10 md:p-14 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C8A96E]/10 hover:border-[#C8A96E]/30 transition-all duration-500">
              {/* Decorative pattern overlay */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#C8A96E]">
                  <pattern id="batik-cta-2" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="2" fill="currentColor" />
                    <circle cx="0" cy="0" r="1" fill="currentColor" />
                    <circle cx="20" cy="0" r="1" fill="currentColor" />
                    <circle cx="0" cy="20" r="1" fill="currentColor" />
                    <circle cx="20" cy="20" r="1" fill="currentColor" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#batik-cta-2)" />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-bold tracking-wider text-[#F5F0EB] font-[family-name:var(--font-playfair-display)] mb-6 leading-relaxed">
                UPDATE
                <br />
                <span className="text-gold-gradient">INSTAGRAM KAMI</span>
              </h3>

              <p className="text-[#9A9A9A] text-sm mb-8 max-w-xs">
                Ikuti kami di Instagram untuk update produk terbaru dan inspirasi gaya
              </p>

              <a
                href="https://instagram.com/kalungbatik_omahlamita"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] hover:from-[#7231A0] hover:via-[#AE2F76] hover:to-[#CB2B60] text-white text-sm font-semibold tracking-wider rounded-sm transition-all duration-300"
                >
                  <InstagramIcon size={18} />
                  Instagram
                </motion.button>
              </a>

              {/* Shimmer effect */}
              <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
