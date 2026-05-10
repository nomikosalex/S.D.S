"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ANIMATION } from "@/config/animation.config";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import type { TKey } from "@/lib/translations";

const NAV_LINKS: { href: string; key: TKey }[] = [
  { href: "#about",    key: "navAbout"    },
  { href: "#services", key: "navServices" },
  { href: "#pricing",  key: "navPricing"  },
  { href: "#contact",  key: "navContact"  },
];

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const onScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ANIMATION.duration.normal, delay: 0.6, ease: ANIMATION.ease.default }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#060b14]/95 border-b border-white/[0.06]"
            : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="S.D.S Logo"
            width={42}
            height={42}
            className="rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
          <span className="hidden sm:block text-white font-bold tracking-[0.2em] text-sm uppercase">
            S<span style={{ color: "#00d4ff" }}>.</span>D
            <span style={{ color: "#00d4ff" }}>.</span>S
          </span>
        </Link>

        {/* Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white text-xs uppercase tracking-[0.25em] transition-colors duration-200"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {/* CTA — hidden on mobile (lives inside mobile menu) */}
          <a
            href="#contact"
            className="hidden md:block px-5 py-2 text-xs uppercase tracking-[0.2em] font-semibold rounded-lg border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#060b14] transition-all duration-200"
          >
            {t("navCTA")}
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] rounded-lg"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="block w-5 h-[1.5px] bg-white origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.18 }}
              className="block w-5 h-[1.5px] bg-white"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="block w-5 h-[1.5px] bg-white origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-[65px] left-0 right-0 z-40 md:hidden border-b border-white/[0.06] px-6 py-5 flex flex-col"
            style={{ background: "rgba(6,11,20,0.98)" }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18, delay: i * 0.045, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-white text-sm uppercase tracking-[0.25em] py-3.5 border-b border-white/[0.04] last:border-0 transition-colors duration-200"
              >
                {t(link.key)}
              </motion.a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 block text-center py-3.5 text-xs uppercase tracking-[0.2em] font-semibold rounded-lg border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#060b14] transition-all duration-200"
            >
              {t("navCTA")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
