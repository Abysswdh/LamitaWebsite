"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "id" | "en";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const STORAGE_KEY = "lamita-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "id" ? "id" : "en";
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
  };

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === "id" ? "en" : "id"));
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
