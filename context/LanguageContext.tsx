"use client";

import {
  createContext, useCallback, useContext,
  useEffect, useState, type ReactNode,
} from "react";
import { TRANSLATIONS, type Lang, type TKey } from "@/lib/translations";

interface LangCtx {
  lang:    Lang;
  setLang: (l: Lang) => void;
  t:       (key: TKey) => string;
}

const Ctx = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore saved preference after hydration (localStorage is client-only)
  useEffect(() => {
    const saved = localStorage.getItem("sds-lang");
    if (saved === "en" || saved === "el") setLangState(saved);
  }, []);

  // Keep <html lang> accurate for accessibility and screen-readers
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("sds-lang", l);
  }, []);

  const t = useCallback(
    (key: TKey): string => TRANSLATIONS[lang][key] ?? TRANSLATIONS.en[key],
    [lang]
  );

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLanguage(): LangCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
