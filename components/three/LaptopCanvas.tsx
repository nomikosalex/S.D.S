"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { ANIMATION } from "@/config/animation.config";
import { LaptopScene } from "./LaptopScene";

interface Props {
  isMobile?: boolean;
}

// Fixed canvas sits behind all HTML content (z: -1).
// Dynamic-imported with ssr: false — Three.js never touches the server bundle.
export function LaptopCanvas({ isMobile }: Props) {
  return (
    <Canvas
      frameloop="demand"
      style={{ position: "fixed", inset: 0, zIndex: -1 }}
      camera={{
        fov:      ANIMATION.three.camera.fov,
        position: [...ANIMATION.three.camera.position],
      }}
      dpr={[...ANIMATION.three.dpr] as [number, number]}
      gl={{ antialias: false, alpha: false }}
      aria-hidden="true"
    >
      <PerformanceMonitor>
        <Suspense fallback={null}>
          <LaptopScene isMobile={isMobile} />
        </Suspense>
      </PerformanceMonitor>
    </Canvas>
  );
}
