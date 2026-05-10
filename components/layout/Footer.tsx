"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { TKey } from "@/lib/translations";

const NAV_LINKS: { href: string; key: TKey }[] = [
  { href: "#about",     key: "navAbout"    },
  { href: "#services",  key: "navServices" },
  { href: "#portfolio", key: "portfolioLabel" },
  { href: "#contact",   key: "navContact"  },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#060b14] border-t border-white/[0.04] px-6 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">

        <div className="grid sm:grid-cols-3 gap-10 mb-14">

          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="S.D.S"
                width={36}
                height={36}
                className="rounded-full opacity-90"
              />
              <span className="font-bold tracking-[0.2em] text-sm uppercase text-white">
                S<span style={{ color: "#00d4ff" }}>.</span>D
                <span style={{ color: "#00d4ff" }}>.</span>S
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">
              {t("footerTagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-slate-600 text-[10px] uppercase tracking-[0.35em] mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-slate-600 text-[10px] uppercase tracking-[0.35em] mb-5">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">{t("contactInfoEmail")}</li>
              <li className="text-slate-400 text-sm">{t("contactInfoLocation")}</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-slate-600 text-xs">{t("footerCopyright")}</p>
          <a
            href="/privacy"
            className="text-slate-600 hover:text-slate-400 text-xs transition-colors duration-200"
          >
            {t("footerPrivacy")}
          </a>
        </div>

      </div>
    </footer>
  );
}
