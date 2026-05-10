"use client";

import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";
import type { TKey } from "@/lib/translations";

const PROJECTS = [
  {
    accent:    "#00d4ff",
    gradient:  "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(37,99,235,0.12))",
    pattern:   "radial-gradient(circle at 25% 75%, rgba(0,212,255,0.10) 0%, transparent 55%), radial-gradient(circle at 75% 25%, rgba(37,99,235,0.08) 0%, transparent 55%)",
    titleKey:  "project0Title",
    typeKey:   "project0Type",
    descKey:   "project0Desc",
    resultKey: "project0Result",
    href:      "https://transfer1santorini.com/en",
  },
  {
    accent:    "#7c3aed",
    gradient:  "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,212,255,0.10))",
    pattern:   "radial-gradient(circle at 70% 65%, rgba(124,58,237,0.10) 0%, transparent 55%), radial-gradient(circle at 30% 35%, rgba(0,212,255,0.06) 0%, transparent 55%)",
    titleKey:  "project1Title",
    typeKey:   "project1Type",
    descKey:   "project1Desc",
    resultKey: "project1Result",
    href:      "https://danaevilla.com/en",
  },
] as const;

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section
      id="portfolio"
      className="relative bg-[#060b14] py-20 md:py-36 px-6 overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 100% 50%, rgba(124,58,237,0.04) 0%, transparent 40%)",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">

        <RevealOnScroll>
          <p className="text-xs uppercase tracking-[0.45em] mb-4" style={{ color: "#00d4ff" }}>
            {t("portfolioLabel")}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2
            className="font-outfit font-bold text-white leading-[1.1] mb-20"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
          >
            {t("portfolioHeadline")}
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => {
            const [resultNum, ...rest] = t(p.resultKey as TKey).split("\n");
            const resultLabel = rest.join(" ");
            return (
              <RevealOnScroll key={i} delay={0.14 * i}>
                <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] transition-all duration-300 overflow-hidden flex flex-col h-full">

                  {/* Result metric banner */}
                  <div
                    className="h-52 flex items-center justify-center relative overflow-hidden"
                    style={{ background: p.gradient }}
                  >
                    <div className="absolute inset-0" style={{ background: p.pattern }} />
                    <div className="relative z-10 text-center px-4">
                      <div
                        className="font-outfit font-bold leading-none mb-2"
                        style={{ color: p.accent, fontSize: "clamp(3rem, 6vw, 4rem)" }}
                      >
                        {resultNum}
                      </div>
                      <div className="text-slate-300 text-[11px] uppercase tracking-[0.3em]">
                        {resultLabel}
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[10px] uppercase tracking-[0.35em] mb-3 font-medium" style={{ color: p.accent }}>
                      {t(p.typeKey as TKey)}
                    </span>
                    <h3 className="font-outfit font-bold text-white text-xl mb-4">
                      {t(p.titleKey as TKey)}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">
                      {t(p.descKey as TKey)}
                    </p>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-6 text-[11px] uppercase tracking-[0.2em] font-semibold transition-opacity duration-200 opacity-60 hover:opacity-100"
                      style={{ color: p.accent }}
                    >
                      View Live Site <span className="text-[10px]">↗</span>
                    </a>
                  </div>

                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
