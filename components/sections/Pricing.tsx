"use client";

import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";
import type { TKey } from "@/lib/translations";

type TierDef = {
  num:         string;
  accent:      string;
  nameKey:     TKey;
  subKey:      TKey;
  descKey:     TKey;
  badgeKey:    TKey;
  priceKey:    TKey;
  featuresKey: TKey;
  highlighted: boolean;
};

const TIERS: TierDef[] = [
  {
    num:         "01",
    accent:      "#00d4ff",
    nameKey:     "pricingTier0Name",
    subKey:      "pricingTier0Sub",
    descKey:     "pricingTier0Desc",
    badgeKey:    "pricingTier0Badge",
    priceKey:    "pricingTier0Price",
    featuresKey: "pricingTier0Features",
    highlighted: false,
  },
  {
    num:         "02",
    accent:      "#7c3aed",
    nameKey:     "pricingTier1Name",
    subKey:      "pricingTier1Sub",
    descKey:     "pricingTier1Desc",
    badgeKey:    "pricingTier1Badge",
    priceKey:    "pricingTier1Price",
    featuresKey: "pricingTier1Features",
    highlighted: true,
  },
];

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section
      id="pricing"
      className="relative bg-[#060b14] py-20 md:py-36 px-6 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 0% 50%, rgba(0,212,255,0.04) 0%, transparent 40%),
          radial-gradient(circle at 100% 0%, rgba(124,58,237,0.04) 0%, transparent 40%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">

        <RevealOnScroll>
          <p className="text-xs uppercase tracking-[0.45em] mb-4" style={{ color: "#00d4ff" }}>
            {t("pricingLabel")}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2
            className="font-outfit font-bold text-white leading-[1.1] mb-20"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
          >
            {t("pricingHeadline")}
            <br />
            <span style={{ color: "#00d4ff" }}>{t("pricingHeadlineAccent")}</span>
          </h2>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-6 mb-14 max-w-4xl mx-auto">
          {TIERS.map((tier, i) => {
            const features = t(tier.featuresKey).split("\n");
            return (
              <RevealOnScroll key={i} delay={0.12 * i}>
                <div
                  className={`relative rounded-2xl border flex flex-col h-full overflow-hidden transition-all duration-300 ${
                    tier.highlighted
                      ? "border-[#00d4ff]/25 bg-[#00d4ff]/[0.025] hover:border-[#00d4ff]/45"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10]"
                  }`}
                >
                  {/* Accent top bar */}
                  <div
                    className="absolute top-0 left-0 w-full h-[2px]"
                    style={{ background: `linear-gradient(90deg, ${tier.accent}, transparent)` }}
                  />

                  {/* Most Complete badge */}
                  {tier.highlighted && (
                    <div
                      className="absolute top-5 right-5 text-[9px] uppercase tracking-[0.28em] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(0,212,255,0.10)", color: "#00d4ff" }}
                    >
                      Most Complete
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-1">
                    {/* Number */}
                    <span
                      className="block font-outfit font-bold text-6xl mb-4 select-none leading-none"
                      style={{ color: `${tier.accent}18` }}
                    >
                      {tier.num}
                    </span>

                    {/* Name */}
                    <h3 className="font-outfit font-bold text-white text-2xl mb-1">
                      {t(tier.nameKey)}
                    </h3>

                    {/* Subtitle */}
                    <p
                      className="text-xs uppercase tracking-[0.3em] mb-3"
                      style={{ color: tier.accent }}
                    >
                      {t(tier.subKey)}
                    </p>

                    {/* Commitment badge */}
                    <span
                      className="inline-block self-start text-[9px] uppercase tracking-[0.22em] mb-6 px-2.5 py-1 rounded-full border font-medium text-slate-400"
                      style={{ borderColor: `${tier.accent}28` }}
                    >
                      {t(tier.badgeKey)}
                    </span>

                    {/* Price */}
                    <p className="font-outfit font-bold text-white text-2xl mb-1">
                      {t(tier.priceKey)}
                    </p>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-7">
                      {t(tier.descKey)}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2.5 flex-1 mb-8">
                      {features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <span className="mt-px text-xs shrink-0" style={{ color: tier.accent }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="#contact"
                      className={`block text-center py-3.5 rounded-lg text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 ${
                        tier.highlighted
                          ? "hover:brightness-110"
                          : "border border-white/[0.10] text-slate-300 hover:border-white/25 hover:text-white"
                      }`}
                      style={tier.highlighted ? { background: "#00d4ff", color: "#060b14" } : undefined}
                    >
                      {t("pricingCTA")}
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll delay={0.2}>
          <p className="text-center text-slate-600 text-xs leading-relaxed max-w-xl mx-auto">
            {t("pricingNote")}
          </p>
        </RevealOnScroll>

      </div>
    </section>
  );
}
