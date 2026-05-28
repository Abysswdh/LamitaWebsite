"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function BrandStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { locale } = useLocale();
  const isId = locale === "id";

  const copy = isId
    ? {
        tag: "CERITA KAMI",
        headline: "Dibuat dengan Cinta dari Hati Indonesia",
        paragraph1:
          "Setiap perhiasan Lamita dibuat dengan tangan oleh pengrajin lokal menggunakan bahan-bahan pilihan dari berbagai penjuru Nusantara — mulai dari manik kaca Jombang, kayu batik lukis Jepara, hingga tali tenun NTT.",
        paragraph2:
          "Kami percaya bahwa keindahan sejati terletak pada detail. Setiap ukiran, setiap simpul, dan setiap warna menceritakan kisah warisan budaya Indonesia yang kaya.",
        cta: "TENTANG KAMI",
        videoTitle: "Video cerita Omah Lamita",
      }
    : {
        tag: "OUR STORY",
        headline: "Crafted with Love from the Heart of Indonesia",
        paragraph1:
          "Each Lamita piece is handcrafted by local artisans using carefully selected materials from across the Indonesian archipelago — from Jombang glass beads, hand-painted Jepara batik wood, to NTT woven rope.",
        paragraph2:
          "We believe true beauty lies in the details. Every carving, every knot, and every color tells the story of Indonesia's rich cultural heritage.",
        cta: "ABOUT US",
        videoTitle: "Omah Lamita story video",
      };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0D0D0D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-video overflow-hidden rounded-sm bg-[#1A1A1A]">
              <iframe
                src="https://www.youtube.com/embed/BmiX0bD9nfQ?si=Y-0ZVPtOi-qi-SRF"
                title={copy.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Decorative gold frame accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#C8A96E]/30 rounded-tl-sm pointer-events-none hidden md:block" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#C8A96E]/30 rounded-br-sm pointer-events-none hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2"
          >
            {/* Tag */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-[#C8A96E]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#C8A96E] font-medium">
                {copy.tag}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F0EB] font-[family-name:var(--font-playfair-display)] leading-tight mb-8">
              {copy.headline}
            </h2>

            {/* Decorative divider */}
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#C8A96E] to-transparent mb-8" />

            {/* Paragraphs */}
            <p className="text-[#9A9A9A] text-sm sm:text-base leading-relaxed mb-5">
              {copy.paragraph1}
            </p>
            <p className="text-[#9A9A9A] text-sm sm:text-base leading-relaxed mb-10">
              {copy.paragraph2}
            </p>

            {/* CTA */}
            <Link href="/tentang-kami">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold"
              >
                {copy.cta}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
