"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, MessageCircle } from "lucide-react";
import { type Product, formatPrice } from "@/lib/mockData";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  locale?: "id" | "en";
}

const categoryLabels: Record<Product["category"], { id: string; en: string }> = {
  lanyard: { id: "Lanyard", en: "Lanyard" },
  kalung: { id: "Kalung", en: "Necklace" },
  anting: { id: "Anting", en: "Earring" },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

export default function ProductModal({
  product,
  isOpen,
  onClose,
  locale = "id",
}: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Click outside to close
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  if (!product) return null;

  const name = locale === "id" ? product.nameId : product.nameEn;
  const description =
    locale === "id" ? product.descriptionId : product.descriptionEn;
  const catLabel = categoryLabels[product.category];
  const whatsappText = encodeURIComponent(
    `Halo, saya tertarik dengan produk ${product.nameId}`
  );
  const whatsappLink = `https://wa.me/6281994343432?text=${whatsappText}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1A1A1A] rounded-2xl border border-[#2A2A2A] shadow-2xl shadow-black/50"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#0D0D0D]/80 border border-[#2A2A2A] text-[#9A9A9A] hover:text-[#F5F0EB] hover:border-[#C8A96E]/50 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              aria-label={locale === "id" ? "Tutup" : "Close"}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 aspect-square bg-[#111111] flex-shrink-0">
                <Image
                  src={product.image}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />

                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0D0D0D] bg-[#C8A96E] rounded-full">
                      ✦ {locale === "id" ? "Unggulan" : "Featured"}
                    </span>
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-5">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A96E] border border-[#C8A96E]/30 rounded-full">
                    {locale === "id" ? catLabel.id : catLabel.en}
                  </span>

                  {/* Product Name */}
                  <h2 className="font-[family-name:var(--font-playfair-display)] text-2xl md:text-3xl text-[#F5F0EB] leading-tight">
                    {name}
                  </h2>

                  {/* Price */}
                  <p className="text-xl font-semibold text-gold-gradient">
                    {formatPrice(product.price)}
                  </p>

                  {/* Decorative Line */}
                  <div className="w-12 h-px bg-gradient-to-r from-[#C8A96E] to-transparent" />

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[#9A9A9A]">
                    {description}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 space-y-3">
                  {/* Shopee Button */}
                  <a
                    href={product.shopeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>
                      {locale === "id" ? "Beli di Shopee" : "Buy on Shopee"}
                    </span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg border border-[#25D366]/40 text-[#25D366] text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>
                      {locale === "id"
                        ? "Tanya via WhatsApp"
                        : "Ask via WhatsApp"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
