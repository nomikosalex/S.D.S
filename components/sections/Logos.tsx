"use client";

import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const LOGOS = [
  "Transfer1 Santorini",
  "Danae Villa",
];

const TRACK = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export function Logos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { t }    = useLanguage();

  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused";  };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; };

  return (
    <section className="bg-[#060b14] py-16 border-y border-white/[0.04] overflow-hidden">
      <p className="text-center text-[10px] uppercase tracking-[0.5em] text-slate-600 mb-10 select-none">
        {t("logosLabel")}
      </p>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#060b14] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#060b14] to-transparent" />

        <div
          ref={trackRef}
          className="flex w-max"
          style={{ animation: "marquee 20s linear infinite" }}
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {TRACK.map((name, i) => (
            <div key={i} className="flex-shrink-0 px-16 flex items-center gap-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "#00d4ff" }}
              />
              <span
                className="text-sm font-semibold tracking-[0.25em] uppercase whitespace-nowrap cursor-default select-none opacity-75 hover:opacity-100 transition-opacity duration-300"
                style={{ color: "#00d4ff" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
