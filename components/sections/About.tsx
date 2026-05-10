"use client";

import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { useLanguage } from "@/context/LanguageContext";

// ─── Static data ──────────────────────────────────────────────────────────────

const SVC_ICONS = ["◆", "◉", "◇"] as const;
const SVC_KEYS  = [0, 2, 3] as const;

// ─── Section ─────────────────────────────────────────────────────────────────

export function About() {
  const { t } = useLanguage();

  const services = SVC_ICONS.map((icon, i) => ({
    icon,
    title: t(`svcTitle${SVC_KEYS[i]}` as Parameters<typeof t>[0]),
    desc:  t(`svcDesc${SVC_KEYS[i]}`  as Parameters<typeof t>[0]),
  }));

  return (
    <section
      id="about"
      className="relative bg-[#060b14] py-20 md:py-36 px-6 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 0% 33%, rgba(0,212,255,0.06) 0%, transparent 40%),
          radial-gradient(circle at 100% 75%, rgba(124,58,237,0.05) 0%, transparent 40%),
          linear-gradient(rgba(0,212,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 64px 64px, 64px 64px",
      }}
    >

      <div className="max-w-6xl mx-auto relative z-10">

        <RevealOnScroll>
          <p className="text-xs uppercase tracking-[0.45em] mb-4" style={{ color: "#00d4ff" }}>
            {t("aboutLabel")}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2
            className="font-outfit font-bold text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
          >
            {t("aboutHeadline")}
            <br />
            <span style={{ color: "#00d4ff" }}>{t("aboutHeadlineAccent")}</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-24">
            {t("aboutBody")}
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <RevealOnScroll key={i} delay={0.08 * i}>
              <div className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#00d4ff]/25 hover:bg-white/[0.04] transition-all duration-300 h-full">
                <div className="text-3xl mb-5" style={{ color: "#00d4ff" }}>{svc.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3 font-outfit">{svc.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{svc.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
