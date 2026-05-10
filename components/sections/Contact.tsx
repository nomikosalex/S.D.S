"use client";

import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
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

const EMAIL_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WA_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const INFO_ICONS = ["📍", "✉️", "⏱"];

export function Contact() {
  const { t, lang } = useLanguage();

  const INFO_VALUES = [
    t("contactInfoLocation"),
    t("contactInfoEmail"),
    t("contactInfoResponse"),
  ];

  return (
    <section
      id="contact"
      className="relative bg-[#060b14] py-20 md:py-36 px-6 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 100% 100%, rgba(124,58,237,0.04) 0%, transparent 40%),
          radial-gradient(circle at 0% 33%, rgba(0,212,255,0.04) 0%, transparent 35%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left: headline + info */}
          <div>
            <RevealOnScroll>
              <p className="text-xs uppercase tracking-[0.45em] mb-4" style={{ color: "#00d4ff" }}>
                {t("contactLabel")}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2
                className="font-outfit font-bold text-white leading-[1.1] mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
              >
                {t("contactHeadline")}
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-slate-400 leading-relaxed mb-12 max-w-sm">
                {t("contactBody")}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="space-y-5">
                {INFO_ICONS.map((icon, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="text-base w-6 text-center">{icon}</span>
                    {INFO_VALUES[i]}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: contact options */}
          <RevealOnScroll delay={0.15}>
            <div className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {t("contactChoose")}
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={EMAIL_HREF[lang]}
                  className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/[0.04] transition-all duration-200 group"
                >
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,212,255,0.10)", color: "#00d4ff" }}
                  >
                    {EMAIL_ICON}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm group-hover:text-[#00d4ff] transition-colors duration-200">
                      {t("contactByEmail")}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">{EMAIL}</p>
                  </div>
                </a>

                <a
                  href={WA_HREF[lang]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-[#25D366]/40 hover:bg-[#25D366]/[0.04] transition-all duration-200 group"
                >
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(37,211,102,0.10)", color: "#25D366" }}
                  >
                    {WA_ICON}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm group-hover:text-[#25D366] transition-colors duration-200">
                      {t("contactByWhatsApp")}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">+30 697 090 2261</p>
                  </div>
                </a>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
