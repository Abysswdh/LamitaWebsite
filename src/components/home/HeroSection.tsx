"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function HeroSection() {
  const { locale } = useLocale();
  const copy =
    locale === "id"
      ? {
          subtitle: "aksesoris etnik handmade",
          headlineTop: "PANCARKAN",
          headlineBottom: "JELITAMU",
          tagline:
            "Pancarkan jelitamu dengan perhiasan etnik handmade dari hati Indonesia",
          cta: "BELANJA SEKARANG",
          scroll: "GULIR",
          imageAlt: "Aksesoris etnik handmade Lamita",
        }
      : {
          subtitle: "handmade ethnic accessories",
          headlineTop: "RADIATE",
          headlineBottom: "YOUR BEAUTY",
          tagline:
            "Radiate your beauty with handcrafted ethnic jewelry from the heart of Indonesia",
          cta: "SHOP NOW",
          scroll: "SCROLL",
          imageAlt: "Lamita handmade ethnic accessories",
        };

  return (
    <section className="relative min-h-[720px] h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt={copy.imageAlt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/55 via-[#0D0D0D]/40 to-[#0D0D0D]/88" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-[#0D0D0D]/10 to-[#0D0D0D]/70" />
        {/* Grain texture */}
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-20">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E] to-transparent mx-auto mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-[#C8A96E] mb-6"
        >
          {copy.subtitle}
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-[#F5F0EB] drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] font-[family-name:var(--font-playfair-display)] leading-tight mb-4"
        >
          <span className="text-gold-gradient">{copy.headlineTop}</span>
          <br />
          <span className="text-[#F5F0EB]">{copy.headlineBottom}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[#F5F0EB]/80 text-sm md:text-base tracking-wider mb-10 max-w-md mx-auto"
        >
          {copy.tagline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link href="/katalog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold text-base px-10 py-4"
            >
              {copy.cta}
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative line bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E] to-transparent mx-auto mt-12"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#9A9A9A]/60">
          {copy.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#C8A96E]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
