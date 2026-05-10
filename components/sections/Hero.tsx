"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ANIMATION } from "@/config/animation.config";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useLanguage } from "@/context/LanguageContext";
import type { TKey } from "@/lib/translations";

const L = ANIMATION.laptop;

const SERVICE_KEYS: { key: TKey; cls: string }[] = [
  { key: "svcWebDesign", cls: "top-[14%] left-[6%]"                  },
  { key: "svcMarketing", cls: "top-[10%] left-1/2 -translate-x-1/2"  },
  { key: "svcSEO",       cls: "top-[18%] right-[5%]"                  },
  { key: "svcBooking",   cls: "top-[44%] right-[4%]"                  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile     = useIsMobile();
  const { t }        = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, L.textFadeEnd], [1, 0]);
  const heroY       = useTransform(scrollYProgress, [0, L.textFadeEnd], [0, -28]);

  const servicesOpacity = useTransform(
    scrollYProgress,
    [L.servicesIn, L.servicesIn + 0.15],
    [0, 1]
  );

  const ctaOpacity = useTransform(scrollYProgress, [L.ctaIn, 0.95], [0, 1]);
  const ctaY       = useTransform(scrollYProgress, [L.ctaIn, 0.95], [20, 0]);

  return (
    <section
      ref={containerRef}
      style={{ height: `${L.heroHeightVh * 100}vh` }}
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden">

        {/* ── Phase 1: Brand identity ── */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: ANIMATION.ease.enter }}
          >
            <Image
              src="/logo.png"
              alt="Santorini Digital Solutions"
              width={isMobile ? 80 : 110}
              height={isMobile ? 80 : 110}
              className="mb-6 drop-shadow-[0_0_40px_rgba(0,212,255,0.35)] select-none"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: ANIMATION.ease.enter }}
            className="text-center font-outfit font-bold leading-[1.1] tracking-wide select-none"
            style={{ fontSize: isMobile ? "1.9rem" : "clamp(2.4rem, 4.5vw, 4rem)" }}
          >
            <span className="text-white">Santorini</span>
            <br />
            <span style={{ color: "#00d4ff" }}>Digital</span>
            <span className="text-white"> Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: ANIMATION.ease.enter }}
            className="mt-4 text-slate-400 uppercase tracking-[0.35em] text-xs md:text-sm text-center select-none"
          >
            {t("heroTagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-16"
          >
            {/* CSS animation — runs fully on the compositor, no JS per frame */}
            <div
              className="flex flex-col items-center gap-2"
              style={{ animation: "scrollBob 1.6s ease-in-out infinite" }}
            >
              <span className="text-slate-600 text-[10px] uppercase tracking-[0.4em]">
                {t("heroScroll")}
              </span>
              <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* ── Phase 2: Service labels (desktop) ── */}
        {!isMobile && (
          <motion.div
            style={{ opacity: servicesOpacity }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            {SERVICE_KEYS.map(({ key, cls }) => (
              <div key={key} className={`absolute ${cls}`}>
                <div
                  className="bg-[#060b14]/75 backdrop-blur-sm border rounded px-3 py-2 text-[10px] font-medium tracking-widest text-white uppercase whitespace-pre-line"
                  style={{ borderColor: "rgba(0,212,255,0.35)" }}
                >
                  {t(key)}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ── Phase 3: Final CTA ── */}
        <motion.div
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="absolute inset-0 flex flex-col items-center justify-end pb-24 z-10 pointer-events-none px-6"
        >
          <p
            className="text-xs uppercase tracking-[0.5em] mb-4 select-none"
            style={{ color: "#00d4ff" }}
          >
            {t("heroCtaTag")}
          </p>
          <h2
            className="text-center font-outfit font-bold text-white leading-tight select-none"
            style={{ fontSize: "clamp(1.7rem, 3.5vw, 3rem)" }}
          >
            {t("heroCtaHeadline")}
            <br />
            <span style={{ color: "#00d4ff" }}>{t("heroCtaAccent")}</span>
          </h2>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060b14] to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}
