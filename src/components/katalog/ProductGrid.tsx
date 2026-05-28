"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, type Product, type CategoryId } from "@/lib/mockData";
import { useLocale } from "@/components/providers/LocaleProvider";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

interface ProductGridProps {
  locale?: "id" | "en";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function ProductGrid({ locale: localeProp }: ProductGridProps) {
  const { locale: contextLocale } = useLocale();
  const locale = localeProp ?? contextLocale;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("semua");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "semua" || product.category === selectedCategory;

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        product.nameId.toLowerCase().includes(query) ||
        product.nameEn.toLowerCase().includes(query) ||
        product.descriptionId.toLowerCase().includes(query) ||
        product.descriptionEn.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleProductClick = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    // Delay clearing product to allow exit animation
    setTimeout(() => setSelectedProduct(null), 300);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const handleCategoryChange = useCallback((category: CategoryId) => {
    setSelectedCategory(category);
  }, []);

  return (
    <section className="min-h-screen bg-[#0D0D0D]">
      {/* Page Header */}
      <div className="pt-36 md:pt-40 pb-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A96E] mb-4">
            {locale === "id" ? "Koleksi Kami" : "Our Collection"}
          </span>
          <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] mb-4">
            <span className="text-gold-gradient">Katalog</span>
          </h1>
          <p className="text-sm md:text-base text-[#9A9A9A] max-w-xl mx-auto leading-relaxed">
            {locale === "id"
              ? "Jelajahi koleksi aksesoris etnik handmade kami — setiap karya dibuat dengan cinta dan sentuhan budaya Indonesia."
              : "Explore our handmade ethnic accessories collection — each piece crafted with love and Indonesian cultural touch."}
          </p>

          {/* Decorative Line */}
          <div className="decorative-line max-w-xs mx-auto mt-6">
            <span className="text-[#C8A96E] text-lg">✿</span>
          </div>
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-8 mb-8"
        >
          {/* Search */}
          <div className="flex-1 min-w-0">
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              locale={locale}
            />
          </div>

          {/* Category Filter */}
          <CategoryFilter
            selected={selectedCategory}
            onChange={handleCategoryChange}
            locale={locale}
          />
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 border-t border-[#C8A96E]/10 pt-5"
        >
          <p className="text-xs text-[#9A9A9A] tracking-wide">
            {locale === "id"
              ? `Menampilkan ${filteredProducts.length} produk`
              : `Showing ${filteredProducts.length} products`}
          </p>
        </motion.div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard
                    product={product}
                    onClick={handleProductClick}
                    locale={locale}
                    index={index}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-6 border border-[#2A2A2A]">
                <span className="text-3xl opacity-50">✿</span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair-display)] text-xl text-[#F5F0EB] mb-2">
                {locale === "id"
                  ? "Produk tidak ditemukan"
                  : "No products found"}
              </h3>
              <p className="text-sm text-[#9A9A9A] max-w-sm">
                {locale === "id"
                  ? "Coba ubah kata kunci pencarian atau pilih kategori lain."
                  : "Try changing your search keywords or selecting a different category."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        locale={locale}
      />
    </section>
  );
}
