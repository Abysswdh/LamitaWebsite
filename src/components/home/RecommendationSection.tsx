"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";

const categoryCards = [
  {
    image: "/images/products/earring-1.png",
    labelId: "ANTING",
    labelEn: "EARRINGS",
  },
  {
    image: "/images/products/necklace-1.png",
    labelId: "KALUNG",
    labelEn: "NECKLACES",
  },
  {
    image: "/images/products/lanyard-1.png",
    labelId: "LANYARD",
    labelEn: "LANYARDS",
  },
  {
    image: "/images/products/earring-2.png",
    labelId: "ANTING",
    labelEn: "EARRINGS",
  },
  {
    image: "/images/products/necklace-2.png",
    labelId: "KALUNG",
    labelEn: "NECKLACES",
  },
  {
    image: "/images/products/lanyard-2.png",
    labelId: "LANYARD",
    labelEn: "LANYARDS",
  },
];

export default function RecommendationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { locale } = useLocale();
  const isId = locale === "id";

  const copy = isId
    ? {
        tagline: "AKSESORI ETNIK HANDMADE",
        subtitle: "UNTUK SETIAP GAYA",
        headlineTop: "Jelajahi",
        headlineBottom: "Lamita",
        cta: "JELAJAHI SEKARANG",
      }
    : {
        tagline: "HANDMADE ETHNIC ACCESSORIES",
        subtitle: "FOR EVERY STYLE",
        headlineTop: "Discover",
        headlineBottom: "Lamita",
        cta: "EXPLORE NOW",
      };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-[#F5F0EB] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side — Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-4 text-center lg:text-left"
          >
            {/* Tagline */}
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#9A8A6A] mb-2 font-medium">
              {copy.tagline}
            </p>
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#9A8A6A] mb-8 font-medium">
              {copy.subtitle}
            </p>

            {/* Large Heading */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-[#1A1A1A] font-[family-name:var(--font-playfair-display)] leading-[1.1] mb-10">
              {copy.headlineTop}
              <br />
              <span className="italic">{copy.headlineBottom}</span>
            </h2>

            {/* CTA Button */}
            <Link href="/katalog">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-8 py-3.5 border-1.5 border-[#1A1A1A] text-[#1A1A1A] text-sm font-medium tracking-[0.15em] uppercase bg-transparent hover:bg-[#1A1A1A] hover:text-[#F5F0EB] transition-all duration-400 cursor-pointer"
              >
                {copy.cta}
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Side — Category Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              {categoryCards.map((card, index) => {
                const label = isId ? card.labelId : card.labelEn;

                return (
                  <motion.div
                    key={`${card.labelId}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + index * 0.1,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link href="/katalog" className="group block">
                      {/* Image Card */}
                      <div className="relative aspect-square overflow-hidden bg-[#EDEAE5] rounded-sm">
                        <Image
                          src={card.image}
                          alt={label}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        />
                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/10 transition-all duration-500" />
                      </div>

                      {/* Category Label */}
                      <p className="mt-3 text-center text-xs sm:text-sm tracking-[0.2em] uppercase text-[#4A4A4A] font-medium group-hover:text-[#1A1A1A] transition-colors duration-300">
                        {label}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
