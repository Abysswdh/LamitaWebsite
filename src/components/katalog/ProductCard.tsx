"use client";

import Image from "next/image";
import { type Product, formatPrice } from "@/lib/mockData";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  locale?: "id" | "en";
  index?: number;
}

const categoryLabels: Record<Product["category"], { id: string; en: string }> = {
  lanyard: { id: "Lanyard", en: "Lanyard" },
  kalung: { id: "Kalung", en: "Necklace" },
  anting: { id: "Anting", en: "Earring" },
};

export default function ProductCard({
  product,
  onClick,
  locale = "id",
  index = 0,
}: ProductCardProps) {
  const name = locale === "id" ? product.nameId : product.nameEn;
  const catLabel = categoryLabels[product.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="card-hover rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C8A96E]/30">
        {/* Image Container */}
        <div className="img-zoom relative aspect-square overflow-hidden bg-[#111111]">
          <Image
            src={product.image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#C8A96E] bg-[#0D0D0D]/80 rounded-full backdrop-blur-sm border border-[#C8A96E]/20">
                {locale === "id" ? "Lihat Detail" : "View Details"}
              </span>
            </div>
          </div>

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0D0D0D] bg-[#C8A96E] rounded-full">
                ✦ {locale === "id" ? "Unggulan" : "Featured"}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4 space-y-2">
          {/* Category Badge */}
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9A9A9A]">
            {locale === "id" ? catLabel.id : catLabel.en}
          </span>

          {/* Product Name */}
          <h3 className="font-[family-name:var(--font-playfair-display)] text-base text-[#F5F0EB] leading-snug group-hover:text-[#C8A96E] transition-colors duration-300 line-clamp-2">
            {name}
          </h3>

          {/* Price */}
          <p className="text-sm font-medium text-[#C8A96E]">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
