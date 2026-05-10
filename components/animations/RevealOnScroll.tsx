"use client";

import { useRef, useEffect } from "react";
import { ANIMATION } from "@/config/animation.config";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const INITIAL: Record<NonNullable<Props["direction"]>, string> = {
  up:    `translateY(${ANIMATION.reveal.y}px)`,
  down:  `translateY(-${ANIMATION.reveal.y}px)`,
  left:  `translateX(${ANIMATION.reveal.y}px)`,
  right: `translateX(-${ANIMATION.reveal.y}px)`,
};

export function RevealOnScroll({
  children, delay = 0, direction = "up", className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.unobserve(el);
        }
      },
      { rootMargin: ANIMATION.reveal.margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: INITIAL[direction],
        transition: `opacity ${ANIMATION.duration.normal}s ease, transform ${ANIMATION.duration.normal}s ease`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
