"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";

const testimonials = [
  {
    id: 1,
    quoteId:
      "Kalungnya cantik banget dan sangat unik! Bahan-bahannya terasa premium dan setiap detail dikerjakan dengan sangat rapi. Pasti order lagi!",
    quoteEn:
      "The necklace is so beautiful and truly unique! The materials feel premium and every detail is carefully crafted. Will definitely order again!",
    nameId: "Ratna Dewi",
    nameEn: "Ratna Dewi",
    locationId: "Surabaya, Jawa Timur",
    locationEn: "Surabaya, East Java",
  },
  {
    id: 2,
    quoteId:
      "Saya beli lanyard-nya untuk hadiah ulang tahun teman, dan dia sangat suka! Packagingnya juga rapi dan elegan. Recommended banget!",
    quoteEn:
      "I bought the lanyard as a birthday gift for my friend, and she loved it! The packaging is also neat and elegant. Highly recommended!",
    nameId: "Anisa Fitri",
    nameEn: "Anisa Fitri",
    locationId: "Jakarta",
    locationEn: "Jakarta",
  },
  {
    id: 3,
    quoteId:
      "Antingnya ringan dan nyaman dipakai seharian. Motif batiknya bikin tampilan jadi beda — etnik tapi tetap modern. Love it!",
    quoteEn:
      "The earrings are lightweight and comfortable to wear all day. The batik motif makes the look unique — ethnic yet modern. Love it!",
    nameId: "Maya Putri",
    nameEn: "Maya Putri",
    locationId: "Malang, Jawa Timur",
    locationEn: "Malang, East Java",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { locale } = useLocale();
  const isId = locale === "id";

  const copy = isId
    ? {
        title: "APA KATA MEREKA",
        subtitle: "Cerita dari pelanggan setia Lamita",
      }
    : {
        title: "WHAT THEY SAY",
        subtitle: "Stories from our loyal Lamita customers",
      };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#141414] overflow-hidden"
    >
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/15 to-transparent" />

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 text-[200px] leading-none text-[#C8A96E]/[0.03] font-[family-name:var(--font-playfair-display)] pointer-events-none select-none hidden lg:block">
        &ldquo;
      </div>
      <div className="absolute bottom-10 right-10 text-[200px] leading-none text-[#C8A96E]/[0.03] font-[family-name:var(--font-playfair-display)] pointer-events-none select-none hidden lg:block rotate-180">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="decorative-line text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-[#F5F0EB] font-[family-name:var(--font-playfair-display)]">
            {copy.title}
          </h2>
          <p className="mt-4 text-[#9A9A9A] text-sm tracking-wider">
            {copy.subtitle}
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => {
            const quote = isId ? testimonial.quoteId : testimonial.quoteEn;
            const name = isId ? testimonial.nameId : testimonial.nameEn;
            const location = isId
              ? testimonial.locationId
              : testimonial.locationEn;

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.15,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="relative group"
              >
                <div className="relative p-8 md:p-10 bg-gradient-to-b from-[#1E1E1E] to-[#181818] border border-[#C8A96E]/10 hover:border-[#C8A96E]/25 rounded-sm transition-all duration-500 h-full flex flex-col">
                  {/* Quotation Mark */}
                  <div className="text-4xl md:text-5xl text-[#C8A96E]/20 font-[family-name:var(--font-playfair-display)] leading-none mb-4 select-none">
                    &ldquo;
                  </div>

                  {/* Quote */}
                  <p className="text-[#B8B8B8] text-sm leading-relaxed flex-1 mb-8 italic">
                    {quote}
                  </p>

                  {/* Divider */}
                  <div className="w-10 h-[1px] bg-[#C8A96E]/30 mb-5" />

                  {/* Author */}
                  <div>
                    <p className="text-[#F5F0EB] text-sm font-semibold tracking-wider">
                      {name}
                    </p>
                    <p className="text-[#9A9A9A] text-xs tracking-wider mt-1">
                      {location}
                    </p>
                  </div>

                  {/* Subtle shimmer on hover */}
                  <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/15 to-transparent" />
    </section>
  );
}
