"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { ANIMATION } from "@/config/animation.config";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: ANIMATION.scroll.lerp,
      duration: ANIMATION.scroll.duration,
      smoothWheel: ANIMATION.scroll.smoothWheel,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
