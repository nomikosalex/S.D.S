"use client";

import { useLanguage } from "@/context/LanguageContext";

// Shows the flag of the OTHER language — clicking it switches to that language.
// Greek flag shown when in English; British flag shown when in Greek.
export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const next  = lang === "en" ? "el" : "en";
  const flag  = lang === "en" ? "🇬🇷" : "🇬🇧";
  const label = lang === "en" ? "Ελληνικά" : "English";

  return (
    <button
      onClick={() => setLang(next)}
      title={label}
      aria-label={`Switch language to ${label}`}
      className="
        relative flex items-center justify-center
        w-11 h-11 rounded-full
        text-xl leading-none select-none
        ring-1 ring-white/10 hover:ring-[#00d4ff]/50
        bg-white/[0.04] hover:bg-white/[0.08]
        transition-all duration-200
        hover:scale-110 active:scale-95
      "
    >
      {flag}
    </button>
  );
}
