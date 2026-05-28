"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Users,
  Sparkles,
  Heart,
  Calendar,
} from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getTentangKamiTranslations } from "@/lib/translations";

/* ──────────────────────── tiny helpers ──────────────────────── */

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionTitle({
  sub,
  main,
  desc,
}: {
  sub: string;
  main: string;
  desc?: string;
}) {
  return (
    <div className="text-center mb-14 md:mb-20">
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A96E] mb-4">
        {sub}
      </span>
      <h2 className="decorative-line text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-[#F5F0EB] font-[family-name:var(--font-playfair-display)]">
        {main}
      </h2>
      {desc && (
        <p className="mt-4 text-[#9A9A9A] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
}

/* ──────────────────────── timeline data ──────────────────────── */

/* ──────────────────────── materials data ──────────────────────── */

/* ──────────────────────── team data ──────────────────────── */

// use translations for content so it supports both languages
const useTranslations = (locale: "id" | "en") => getTentangKamiTranslations(locale as any);

/* ══════════════════════════════════════════════════════════════ */
/*  MAIN COMPONENT                                              */
/* ══════════════════════════════════════════════════════════════ */

export default function TentangKamiContent() {
  const { locale } = useLocale();
  const t = useTranslations(locale);
  return (
    <div className="bg-[#0D0D0D]">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/about-hero.png"
            alt="LAMITA workshop — ethnic accessories production process"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-[#0D0D0D]/40 to-[#0D0D0D]" />
          <div className="absolute inset-0 grain-overlay" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-24">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E] to-transparent mx-auto mb-8"
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-[#C8A96E] mb-4"
          >
            {t.hero.small}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-[#F5F0EB] font-[family-name:var(--font-playfair-display)] leading-tight mb-6"
          >
            {t.hero.titleMain} <span className="text-gold-gradient">{t.hero.titleAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-[#9A9A9A] text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          >
            {t.hero.paragraph}
          </motion.p>
        </div>
      </section>

      {/* ─── BRAND MEANING ─── */}
      <Section className="py-20 md:py-28 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left – Tanjung flower + quote */}
            <div className="text-center md:text-left">
              <div className="inline-block mb-8">
                <span className="text-6xl text-[#C8A96E] opacity-60">✿</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-[#F5F0EB] font-[family-name:var(--font-playfair-display)] mb-6 leading-snug">
                {t.brand.heading}
              </h2>
              <p className="text-[#C8A96E] text-sm tracking-wider italic font-[family-name:var(--font-playfair-display)] mb-6">
                {t.brand.lead}
              </p>
              <p className="text-[#9A9A9A] text-sm leading-relaxed mb-6">
                {t.brand.para1}
              </p>
              <p className="text-[#F5F0EB]/80 text-sm leading-relaxed">
                {t.brand.para2}
              </p>
            </div>

            {/* Right – Visi & Misi + Budaya Kerja */}
            <div className="space-y-8">
              <div className="p-8 bg-[#0D0D0D] rounded-sm border border-[#C8A96E]/10">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={18} className="text-[#C8A96E]" />
                    <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#F5F0EB]">
                      {t.vision.title}
                    </h3>
                </div>
                <p className="text-[#9A9A9A] text-sm leading-relaxed">
                  {t.vision.text}
                </p>
              </div>

              <div className="p-8 bg-[#0D0D0D] rounded-sm border border-[#C8A96E]/10">
                <div className="flex items-center gap-3 mb-4">
                  <Heart size={18} className="text-[#C8A96E]" />
                  <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#F5F0EB]">
                    {t.culture.title}
                  </h3>
                </div>
                <p className="text-[#C8A96E] italic font-[family-name:var(--font-playfair-display)] text-lg mb-2">
                  &ldquo;{t.culture.proverb}&rdquo;
                </p>
                <p className="text-[#9A9A9A] text-sm leading-relaxed">
                  {t.culture.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />
      </Section>

      {/* ─── TIMELINE ─── */}
      <Section className="py-20 md:py-28 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            sub={t.sectionTitles.journey.sub}
            main={t.sectionTitles.journey.main}
            desc={t.sectionTitles.journey.desc}
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C8A96E]/40 via-[#C8A96E]/20 to-transparent" />

            {t.timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 mb-12 last:mb-0 pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on the line */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#C8A96E] border-2 border-[#0D0D0D] z-10 top-1 md:top-auto" />

                {/* Content card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    i % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2 md:justify-start">
                    <Calendar size={14} className="text-[#C8A96E]" />
                    <span className="text-[#C8A96E] text-sm font-semibold tracking-wider font-[family-name:var(--font-playfair-display)]">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F0EB] font-[family-name:var(--font-playfair-display)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── TEAM ─── */}
      <Section className="py-20 md:py-28 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            sub={t.sectionTitles.team.sub}
            main={t.sectionTitles.team.main}
            desc={t.sectionTitles.team.desc}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {t.teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group p-8 bg-[#0D0D0D] rounded-sm border border-[#C8A96E]/10 hover:border-[#C8A96E]/30 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-6 border border-[#C8A96E]/20 group-hover:border-[#C8A96E]/40 transition-colors">
                  <Users size={22} className="text-[#C8A96E]" />
                </div>

                {/* Role label */}
                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A96E] border border-[#C8A96E]/30 rounded-full mb-4">
                  {member.role}
                </span>

                {/* Name */}
                <h3 className="text-2xl font-bold text-[#F5F0EB] font-[family-name:var(--font-playfair-display)] tracking-wider mb-3">
                  {member.name}
                </h3>

                {/* Description */}
                <p className="text-[#9A9A9A] text-sm leading-relaxed mb-6">
                  {member.desc}
                </p>

                {/* Responsibilities */}
                <div className="flex flex-wrap gap-2">
                  {member.responsibilities.map((r) => (
                    <span
                      key={r}
                      className="px-3 py-1.5 text-[10px] tracking-wider text-[#9A9A9A] bg-[#1A1A1A] rounded-full border border-[#2A2A2A]"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extra team note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-[#9A9A9A] text-sm leading-relaxed max-w-2xl mx-auto">
              {t.teamExtra}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />
      </Section>

      {/* ─── MATERIALS ─── */}
      <Section className="py-20 md:py-28 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            sub={t.sectionTitles.materials.sub}
            main={t.sectionTitles.materials.main}
            desc={t.sectionTitles.materials.desc}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden img-zoom"
            >
              <Image
                src="/images/brand/materials.png"
                alt="Raw materials for LAMITA ethnic accessories"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
            </motion.div>

            {/* Material grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.materials.map((mat, i) => (
                <motion.div
                  key={mat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-5 bg-[#1A1A1A] rounded-sm border border-[#2A2A2A] hover:border-[#C8A96E]/20 transition-all duration-300 group"
                >
                    <h4 className="text-sm font-semibold text-[#F5F0EB] mb-1 group-hover:text-[#C8A96E] transition-colors">
                    {mat.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin size={10} className="text-[#C8A96E]/60" />
                    <span className="text-[10px] text-[#C8A96E]/80 tracking-wider">
                      {mat.origin}
                    </span>
                  </div>
                  <p className="text-[#9A9A9A] text-xs leading-relaxed">
                      {mat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── TANJUNG SYMBOL ─── */}
      <Section className="py-20 md:py-28 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-7xl text-[#C8A96E] opacity-60 animate-float inline-block">
              ✿
            </span>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-[#F5F0EB] font-[family-name:var(--font-playfair-display)] mb-6">
            {t.tanjung.title.split(' ').slice(0, -1).join(' ')} <span className="text-gold-gradient">{t.tanjung.title.split(' ').slice(-1)}</span>
          </h2>

          <p className="text-[#9A9A9A] text-sm md:text-base leading-relaxed mb-6 max-w-xl mx-auto">
            {t.tanjung.desc.split('Truntum').map((part, idx) => (
              idx === 1 ? (
                <span key={idx} className="text-[#C8A96E] italic">Truntum</span>
              ) : (
                part
              )
            ))}
          </p>

          <p className="text-[#C8A96E] italic font-[family-name:var(--font-playfair-display)] text-lg leading-relaxed max-w-lg mx-auto">
            {t.tanjung.quote}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />
      </Section>

      {/* ─── CONTACT ─── */}
      <Section className="py-20 md:py-28 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            sub={t.sectionTitles.contact.sub}
            main={t.sectionTitles.contact.main}
            desc={t.sectionTitles.contact.desc}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://wa.me/6281994343432"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#1A1A1A] rounded-sm border border-[#2A2A2A] hover:border-[#25D366]/40 transition-all duration-300 group"
            >
              <Phone
                size={24}
                className="text-[#25D366] mx-auto mb-3 group-hover:scale-110 transition-transform"
              />
              <h4 className="text-sm font-semibold text-[#F5F0EB] mb-1">
                {t.contactLabels.whatsapp}
              </h4>
              <p className="text-xs text-[#9A9A9A]">0819-9434-3432</p>
            </a>

            <a
              href="https://instagram.com/kalungbatik_omahlamita"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#1A1A1A] rounded-sm border border-[#2A2A2A] hover:border-[#C13584]/40 transition-all duration-300 group"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C13584"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-3 group-hover:scale-110 transition-transform"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <h4 className="text-sm font-semibold text-[#F5F0EB] mb-1">
                {t.contactLabels.instagram}
              </h4>
              <p className="text-xs text-[#9A9A9A]">
                @kalungbatik_omahlamita
              </p>
            </a>

            <div className="p-6 bg-[#1A1A1A] rounded-sm border border-[#2A2A2A]">
              <MapPin
                size={24}
                className="text-[#C8A96E] mx-auto mb-3"
              />
              <h4 className="text-sm font-semibold text-[#F5F0EB] mb-1">
                {t.contactLabels.workshop}
              </h4>
              <p className="text-xs text-[#9A9A9A] leading-relaxed">
                Jl Mertojoyo Blok L No 6
                <br />
                Lowokwaru, Malang 65144
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
