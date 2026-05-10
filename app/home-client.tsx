"use client";

import dynamic from "next/dynamic";
import { Hero }         from "@/components/sections/Hero";
import { Logos }        from "@/components/sections/Logos";
import { About }        from "@/components/sections/About";
import { Services }     from "@/components/sections/Services";
import { Portfolio }    from "@/components/sections/Portfolio";
import { Pricing }      from "@/components/sections/Pricing";
import { Contact }      from "@/components/sections/Contact";
import { Footer }       from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile }      from "@/hooks/useIsMobile";

// Three.js NEVER reaches the server bundle — only loaded client-side
const LaptopCanvas = dynamic(
  () => import("@/components/three/LaptopCanvas").then((m) => m.LaptopCanvas),
  { ssr: false, loading: () => null }
);

export function HomeClient() {
  const reducedMotion = useReducedMotion();
  const isMobile      = useIsMobile();

  return (
    <>
      {/* Fixed 3D canvas — behind all content */}
      {reducedMotion
        ? <div className="fixed inset-0 bg-[#060b14]" style={{ zIndex: -1 }} />
        : <LaptopCanvas isMobile={isMobile} />
      }

      {/* Scrollable HTML — floats over the canvas */}
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <Logos />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
        <Footer />
      </main>

      <WhatsAppButton />
    </>
  );
}
