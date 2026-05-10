"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const EMAIL    = "santorinidigitalsolutions@gmail.com";
const WHATSAPP = "306970902261";

const EMAIL_HREF = {
  en: `mailto:${EMAIL}?subject=${encodeURIComponent("Enquiry – Santorini Digital Solutions")}&body=${encodeURIComponent("Hello,\n\nI'm interested in learning more about your services.\n\nName:\nBusiness:\nPhone:\n\nThank you")}`,
  el: `mailto:${EMAIL}?subject=${encodeURIComponent("Ενδιαφέρον – Santorini Digital Solutions")}&body=${encodeURIComponent("Γεια σας,\n\nΘα ήθελα να μάθω περισσότερα για τις υπηρεσίες σας.\n\nΌνομα:\nΕπιχείρηση:\nΤηλέφωνο:\n\nΕυχαριστώ")}`,
};

const WA_HREF = {
  en: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello! I'm interested in your digital services for my business. Could you tell me more?")}`,
  el: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Γεια σας! Ενδιαφέρομαι για τις ψηφιακές υπηρεσίες σας για την επιχείρησή μου. Μπορείτε να μου πείτε περισσότερα;")}`,
};

const WA_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const EMAIL_ICON = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WA_ICON_SM = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen]       = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

          {/* Popup */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{    opacity: 0, y: 8, scale: 0.94 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl"
                style={{ background: "#0d1520", width: 224 }}
              >
                <p className="px-4 pt-4 pb-2 text-slate-500 text-[10px] uppercase tracking-[0.3em]">
                  {t("contactChoose")}
                </p>

                <a
                  href={EMAIL_HREF[lang]}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.05] transition-colors duration-150 group"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-[#00d4ff]">{EMAIL_ICON}</span>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-[#00d4ff] transition-colors duration-150">
                      {t("contactByEmail")}
                    </p>
                    <p className="text-slate-600 text-[10px]">{EMAIL}</p>
                  </div>
                </a>

                <a
                  href={WA_HREF[lang]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 pb-4 hover:bg-white/[0.05] transition-colors duration-150 group"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-[#25D366]">{WA_ICON_SM}</span>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-[#25D366] transition-colors duration-150">
                      WhatsApp
                    </p>
                    <p className="text-slate-600 text-[10px]">+30 697 090 2261</p>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <motion.button
            onClick={() => setOpen((o) => !o)}
            aria-label="Contact us"
            initial={{ opacity: 0, y: 16, scale: 0.85 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: 16, scale: 0.85 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{   scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full text-white text-sm font-semibold shadow-2xl"
            style={{
              background:  "#25D366",
              boxShadow:   "0 8px 32px rgba(37,211,102,0.35)",
            }}
          >
            {WA_ICON}
            <span className="hidden sm:inline tracking-wide">{t("whatsappLabel")}</span>
          </motion.button>

        </div>
      )}
    </AnimatePresence>
  );
}
