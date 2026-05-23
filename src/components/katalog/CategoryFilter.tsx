"use client";

import { categories, type CategoryId } from "@/lib/mockData";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  selected: CategoryId;
  onChange: (category: CategoryId) => void;
  locale?: "id" | "en";
}

export default function CategoryFilter({
  selected,
  onChange,
  locale = "id",
}: CategoryFilterProps) {
  return (
    <div className="w-full lg:w-auto lg:min-w-72 lg:shrink-0">
      {/* Title */}
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A9A9A] mb-4">
        {locale === "id" ? "Kategori" : "Category"}
      </h3>

      {/* Filter Options */}
      <div className="flex flex-row gap-2 flex-wrap">
        {categories.map((cat) => {
          const isActive = selected === cat.id;
          const label = locale === "id" ? cat.labelId : cat.labelEn;

          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? "text-[#C8A96E] bg-[#C8A96E]/10"
                  : "text-[#9A9A9A] hover:text-[#F5F0EB] hover:bg-[#1A1A1A]"
              }`}
            >
              {/* Radio Dot */}
              <span
                className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${
                  isActive ? "border-[#C8A96E]" : "border-[#4A4A4A]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="category-dot"
                    className="absolute inset-1 rounded-full bg-[#C8A96E]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </span>

              {/* Label */}
              <span className="whitespace-nowrap">{label}</span>

              {/* Active Indicator Line (desktop) */}
              {isActive && (
                <motion.div
                  layoutId="category-active-bar"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#C8A96E] rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
