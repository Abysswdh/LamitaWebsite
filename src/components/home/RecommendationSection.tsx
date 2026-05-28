"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { featuredProducts, formatPrice } from "@/lib/mockData";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function RecommendationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { locale } = useLocale();
  const isId = locale === "id";
  const copy = isId
    ? {
        title: "REKOMENDASI",
        subtitle: "Pilihan terbaik dari koleksi kami",
        viewAll: "Lihat Semua Produk",
      }
    : {
        title: "RECOMMENDATIONS",
        subtitle: "The best picks from our collection",
        viewAll: "View All Products",
      };
  const categoryLabels = {
    lanyard: { id: "Lanyard", en: "Lanyard" },
    kalung: { id: "Kalung", en: "Necklace" },
    anting: { id: "Anting", en: "Earrings" },
  } as const;

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#1A1A1A] overflow-hidden"
    >
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />

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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => {
            const productName = isId ? product.nameId : product.nameEn;
            const categoryLabel = isId
              ? categoryLabels[product.category].id
              : categoryLabels[product.category].en;

            return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-sm bg-[#0D0D0D] img-zoom">
                <Image
                  src={product.image}
                  alt={productName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#0D0D0D]/70 backdrop-blur-sm border border-[#C8A96E]/20 rounded-sm">
                  <span className="text-[10px] tracking-wider uppercase text-[#C8A96E]">
                    {categoryLabel}
                  </span>
                </div>

                {/* Price on hover */}
                <motion.div
                  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <span className="px-3 py-1.5 bg-[#C8A96E] text-[#0D0D0D] text-xs font-semibold tracking-wider rounded-sm">
                    {formatPrice(product.price)}
                  </span>
                </motion.div>
              </div>

              {/* Product Name */}
              <div className="mt-4 text-center">
                <h3 className="text-sm md:text-base tracking-wider text-[#F5F0EB] group-hover:text-[#C8A96E] transition-colors duration-300 font-[family-name:var(--font-playfair-display)]">
                  {productName}
                </h3>
                <p className="mt-1 text-xs text-[#9A9A9A]">
                  {formatPrice(product.price)}
                </p>
              </div>
            </motion.div>
          );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-14"
        >
          <a href="/katalog">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold"
            >
              {copy.viewAll}
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Subtle bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />
    </section>
  );
}
