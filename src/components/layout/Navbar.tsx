"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ShoppingBag } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";

const navLinks = [
  { href: "/", labelId: "Beranda", labelEn: "Home", external: false, disabled: false },
  { href: "/katalog", labelId: "Katalog", labelEn: "Catalog", external: false, disabled: false },
  { href: "/tentang-kami", labelId: "Tentang Kami", labelEn: "About Us", external: false, disabled: false },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, toggleLocale } = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0D0D0D]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-gradient-to-b from-[#0D0D0D]/40 via-[#0D0D0D]/20 to-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-20">
            {/* Left: Language Switcher */}
            <div className="flex items-center justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLocale}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C8A96E]/30 text-[#C8A96E] hover:border-[#C8A96E]/60 hover:bg-[#C8A96E]/5 transition-all duration-300 text-xs tracking-wider"
              >
                <Globe size={14} />
                <span className="font-medium">{locale === "id" ? "ID" : "EN"}</span>
              </motion.button>
            </div>

            {/* Center: Logo */}
            <div className="flex flex-col items-center gap-4">
              {/* Logo */}
              <Link href="/" className="relative group shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  <Image
                    src="/images/brand/logoLamita.png"
                    alt="Lamita Logo"
                    width={50}
                    height={50}
                    className="h-12 w-auto brightness-0 invert"
                    priority
                  />
                </motion.div>
              </Link>
            </div>

            {/* Right: Navigation Items and Shopping */}
            <div className="flex items-center justify-end gap-6">
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-4">
                {navLinks.map((link) => {
                  const active = !link.external && !link.disabled && isActive(link.href);
                  const label = locale === "id" ? link.labelId : link.labelEn;

                  if (link.external) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 text-xs tracking-wider uppercase text-[#9A9A9A] hover:text-[#D4B87A] transition-colors duration-300"
                      >
                        {label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative px-2 py-1 text-xs tracking-wider uppercase transition-colors duration-300 group"
                    >
                      <span className={active ? "text-[#C8A96E]" : "text-[#9A9A9A] group-hover:text-[#D4B87A]"}>
                        {label}
                      </span>
                      {active && (
                        <motion.span
                          layoutId="navbar-active-right"
                          className="absolute bottom-0 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E] to-transparent"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}

                <a
                  href="https://shopee.co.id/kalungbatik_3iswari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs tracking-wider uppercase text-[#9A9A9A] hover:text-[#D4B87A] transition-colors duration-300"
                >
                  <ShoppingBag size={14} />
                  <span>{locale === "id" ? "Shopee" : "Shop"}</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-[#F5F0EB] hover:text-[#C8A96E] transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0D0D0D] border-l border-[#C8A96E]/10 z-40 md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#C8A96E]/10">
                <Image
                  src="/images/brand/logoLamita.png"
                  alt="Lamita Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto brightness-0 invert"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#9A9A9A] hover:text-[#C8A96E] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col py-6 flex-1">
                {navLinks.map((link, index) => {
                  const active = !link.external && !link.disabled && isActive(link.href);
                  const label = locale === "id" ? link.labelId : link.labelEn;

                  return (
                    <motion.div
                      key={link.href + link.labelId}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      {link.disabled ? (
                        <div className="relative px-6 py-4">
                          <span className="text-sm tracking-wider uppercase text-[#9A9A9A]/40 cursor-not-allowed">
                            {label}
                          </span>
                          <span className="ml-2 px-2 py-0.5 bg-[#1A1A1A] text-[#C8A96E] text-[10px] rounded tracking-wider">
                            SOON
                          </span>
                        </div>
                      ) : link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-6 py-4 text-sm tracking-wider uppercase text-[#9A9A9A] hover:text-[#D4B87A] hover:bg-[#C8A96E]/5 transition-all duration-300"
                        >
                          {label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-6 py-4 text-sm tracking-wider uppercase transition-all duration-300 ${
                            active
                              ? "text-[#C8A96E] bg-[#C8A96E]/5 border-r-2 border-[#C8A96E]"
                              : "text-[#9A9A9A] hover:text-[#D4B87A] hover:bg-[#C8A96E]/5"
                          }`}
                        >
                          {label}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-[#C8A96E]/10">
                <p className="text-[10px] tracking-wider text-[#9A9A9A]/40 uppercase text-center">
                  LAMITA by Ethnicware Indonesia
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
