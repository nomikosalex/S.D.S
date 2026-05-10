"use client";

import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";
import type { TKey } from "@/lib/translations";

const SVC_ITEMS = [
  { num: "01", accent: "#00d4ff", titleKey: "svcTitle0", descKey: "svcDesc0", featuresKey: "svc0Features" },
  { num: "02", accent: "#7c3aed", titleKey: "svcTitle2", descKey: "svcDesc2", featuresKey: "svc2Features" },
  { num: "03", accent: "#2563eb", titleKey: "svcTitle3", descKey: "svcDesc3", featuresKey: "svc3Features" },
  { num: "04", accent: "#00d4ff", titleKey: "svcTitle4", descKey: "svcDesc4", featuresKey: "svc4Features" },
  { num: "05", accent: "#7c3aed", titleKey: "svcTitle5", descKey: "svcDesc5", featuresKey: "svc5Features" },
  { num: "06", accent: "#2563eb", titleKey: "svcTitle6", descKey: "svcDesc6", featuresKey: "svc6Features" },
  { num: "07", accent: "#00d4ff", titleKey: "svcTitle7", descKey: "svcDesc7", featuresKey: "svc7Features" },
  { num: "08", accent: "#7c3aed", titleKey: "svcTitle8", descKey: "svcDesc8", featuresKey: "svc8Features" },
] as const;

export function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative bg-[#060b14] py-20 md:py-36 px-6 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 100% 0%, rgba(37,99,235,0.04) 0%, transparent 40%),
          radial-gradient(circle at 0% 100%, rgba(0,212,255,0.05) 0%, transparent 40%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">

        <RevealOnScroll>
          <p className="text-xs uppercase tracking-[0.45em] mb-4" style={{ color: "#00d4ff" }}>
            {t("servicesLabel")}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2
            className="font-outfit font-bold text-white leading-[1.1] mb-20"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
          >
            {t("servicesHeadline")}
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SVC_ITEMS.map((svc, i) => {
            const features = t(svc.featuresKey as TKey).split("\n");
            return (
              <RevealOnScroll key={i} delay={0.07 * i}>
                <div className="relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] hover:bg-white/[0.035] transition-all duration-300 h-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full h-[2px]"
                    style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)` }}
                  />
                  <span
                    className="block font-outfit font-bold text-5xl mb-5 select-none leading-none"
                    style={{ color: `${svc.accent}1a` }}
                  >
                    {svc.num}
                  </span>
                  <h3 className="font-outfit font-bold text-white text-lg mb-3">
                    {t(svc.titleKey as TKey)}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {t(svc.descKey as TKey)}
                  </p>
                  <ul className="space-y-2">
                    {features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className="mt-px text-xs shrink-0" style={{ color: svc.accent }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
