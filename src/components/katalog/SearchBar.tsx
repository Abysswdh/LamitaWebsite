"use client";

import { useCallback } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  locale?: "id" | "en";
}

export default function SearchBar({
  value,
  onChange,
  locale = "id",
}: SearchBarProps) {
  const handleClear = useCallback(() => {
    onChange("");
  }, [onChange]);

  const placeholder =
    locale === "id"
      ? "Cari produk..."
      : "Search products...";

  return (
    <div className="relative w-full group">
      {/* Search Icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <Search
          className="w-5 h-5 text-[#9A9A9A] transition-colors duration-300 group-focus-within:text-[#C8A96E]"
        />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-3.5 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#F5F0EB] text-sm placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#C8A96E] focus:ring-1 focus:ring-[#C8A96E]/30 transition-all duration-300"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9A9A9A] hover:text-[#C8A96E] transition-colors duration-200 cursor-pointer"
          aria-label={locale === "id" ? "Hapus pencarian" : "Clear search"}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
