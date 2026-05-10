"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture, Environment } from "@react-three/drei";
import * as THREE from "three";
import { ANIMATION } from "@/config/animation.config";

interface Props {
  isMobile?: boolean;
}

// ─── Laptop geometry constants ────────────────────────────────────────────────

const BASE_W  = 2.80;
const BASE_H  = 0.10;
const BASE_D  = 1.90;
const HINGE_Z = -BASE_D / 2;

const LID_W   = 2.80;
const LID_H   = 1.90;
const LID_D   = 0.075;

const SCR_W   = 2.38;
const SCR_H   = 1.34;

// ─── Camera keyframes ─────────────────────────────────────────────────────────

const CAM_START = new THREE.Vector3(3.5, 1.8, 5.2);
const CAM_END   = new THREE.Vector3(0.6, 2.8, 4.6);
const LOOK_AT   = new THREE.Vector3(0, 0.7, 0);

// ─── Keyboard layout ─────────────────────────────────────────────────────────
// Each row is one InstancedMesh — 6 draw calls total, same as before.
// widths are in key-units; 1.0 = one standard key width.

const KEY_UNIT  = 0.132; // one key-unit in world units
const KEY_GAP   = 0.013; // gap between keys
const KEY_THICK = 0.013; // key height above the surface
const KEY_Y     = BASE_H / 2 + 0.002 + KEY_THICK / 2;

const KEY_COLOR_START = new THREE.Color("#3a3a3c");
const KEY_COLOR_END   = new THREE.Color("#0d0d0e");
const _keyColor       = new THREE.Color(); // reused each frame — no GC

type RowDef = { z: number; depth: number; widths: readonly number[] };

const KEYBOARD_ROWS: RowDef[] = [
  { z: -0.56, depth: 0.088, widths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5]         }, // fn
  { z: -0.38, depth: 0.120, widths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5]       }, // numbers
  { z: -0.20, depth: 0.120, widths: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]       }, // QWERTY
  { z: -0.02, depth: 0.120, widths: [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.25]         }, // ASDF
  { z:  0.16, depth: 0.120, widths: [2.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.75]            }, // ZXCV
  { z:  0.33, depth: 0.120, widths: [1.25, 1.25, 1.25, 6.25, 1.25, 1.25, 1.25]         }, // bottom
];

// ─── KeyboardRows — positions instances, exposes mesh refs for glow ───────────

function KeyboardRows({
  rowMeshRefs,
}: {
  rowMeshRefs: React.MutableRefObject<(THREE.InstancedMesh | null)[]>;
}) {
  useEffect(() => {
    const dummy = new THREE.Object3D();

    KEYBOARD_ROWS.forEach((row, ri) => {
      const mesh = rowMeshRefs.current[ri];
      if (!mesh) return;

      const totalW =
        row.widths.reduce((s, w) => s + w * KEY_UNIT, 0) +
        (row.widths.length - 1) * KEY_GAP;

      let x = -totalW / 2;

      row.widths.forEach((w, ki) => {
        const kw = w * KEY_UNIT;
        dummy.position.set(x + kw / 2, KEY_Y, row.z);
        dummy.scale.set(kw - 0.007, KEY_THICK, row.depth - 0.007);
        dummy.updateMatrix();
        mesh.setMatrixAt(ki, dummy.matrix);
        x += kw + KEY_GAP;
      });

      mesh.instanceMatrix.needsUpdate = true;
    });
  }, [rowMeshRefs]);

  return (
    <>
      {KEYBOARD_ROWS.map((row, ri) => (
        <instancedMesh
          key={ri}
          ref={(el) => { rowMeshRefs.current[ri] = el as THREE.InstancedMesh | null; }}
          args={[undefined, undefined, row.widths.length]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#3a3a3c"
            metalness={0.68}
            roughness={0.30}
            emissive="#00d4ff"
            emissiveIntensity={0}
          />
        </instancedMesh>
      ))}
    </>
  );
}

// ─── Laptop component ─────────────────────────────────────────────────────────

function Laptop({ isMobile }: Props) {
  const groupRef     = useRef<THREE.Group>(null);
  const hingeRef     = useRef<THREE.Group>(null);
  const screenMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const rowMeshRefs  = useRef<(THREE.InstancedMesh | null)[]>(
    Array(KEYBOARD_ROWS.length).fill(null)
  );

  const scrollProgress = useRef(0);
  const lidAngle       = useRef(0);
  const camPos         = useRef(new THREE.Vector3().copy(CAM_START));

  const { invalidate } = useThree();

  useEffect(() => {
    const max = window.innerHeight * (ANIMATION.laptop.heroHeightVh - 1);

    const onScroll = () => {
      scrollProgress.current = Math.max(0, Math.min(1, window.scrollY / max));
      if (scrollProgress.current < 1) invalidate();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    invalidate();
    return () => window.removeEventListener("scroll", onScroll);
  }, [invalidate]);

  const screenTex = useTexture("/laptop-screen.jpg");
  screenTex.colorSpace = THREE.SRGBColorSpace;

  useFrame(({ camera }, delta) => {
    const p = scrollProgress.current;
    if (p >= 1) return;

    // ── Lid angle ──────────────────────────────────────────────────────────
    const targetAngle = p < 0.5
      ? (p / 0.5) * (Math.PI / 2)
      : Math.PI / 2 + ((p - 0.5) / 0.5) * (Math.PI * 20 / 180);

    lidAngle.current += (targetAngle - lidAngle.current) * Math.min(delta * 5, 0.99);

    if (hingeRef.current) {
      hingeRef.current.rotation.x = Math.PI / 2 - lidAngle.current;
    }

    // ── Screen glow ────────────────────────────────────────────────────────
    if (screenMatRef.current) {
      const glow = THREE.MathUtils.clamp(
        (lidAngle.current - 0.25) / (Math.PI / 2 - 0.25), 0, 1
      );
      screenMatRef.current.emissiveIntensity +=
        (glow * 0.6 - screenMatRef.current.emissiveIntensity) * delta * 4;
    }

    // ── Key row cascade glow + grey → black colour transition ─────────────
    const lidProg = THREE.MathUtils.clamp(lidAngle.current / (Math.PI / 2), 0, 1);
    _keyColor.lerpColors(KEY_COLOR_START, KEY_COLOR_END, lidProg);
    rowMeshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      const rp = THREE.MathUtils.clamp(
        (lidProg - (i / KEYBOARD_ROWS.length) * 0.7) / 0.18, 0, 1
      );
      mat.emissiveIntensity += (rp * 0.38 - mat.emissiveIntensity) * delta * 7;
      mat.color.copy(_keyColor);
    });

    // ── Gentle float ───────────────────────────────────────────────────────
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(performance.now() * 0.0008) * 0.07;
    }

    // ── Camera arc ─────────────────────────────────────────────────────────
    camPos.current.lerpVectors(CAM_START, CAM_END, p);
    camera.position.lerp(camPos.current, delta * 2.5);
    camera.lookAt(LOOK_AT);

    invalidate();
  });

  const scale = isMobile ? 0.68 : 1;

  return (
    <group ref={groupRef} scale={scale} rotation={[0, -0.25, 0]}>

      {/* Base */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[BASE_W, BASE_H, BASE_D]} />
        <meshStandardMaterial color="#1c1c1e" metalness={0.92} roughness={0.12} />
      </mesh>

      {/* Keyboard surround */}
      <mesh position={[0, BASE_H / 2 + 0.002, 0.02]}>
        <boxGeometry args={[BASE_W - 0.34, 0.004, BASE_D - 0.32]} />
        <meshStandardMaterial color="#111111" roughness={0.88} metalness={0.12} />
      </mesh>

      {/* Touchpad */}
      <mesh position={[0, BASE_H / 2 + 0.003, BASE_D / 2 - 0.38]}>
        <boxGeometry args={[0.72, 0.003, 0.44]} />
        <meshStandardMaterial color="#181818" roughness={0.45} metalness={0.55} />
      </mesh>

      {/* Individual keys */}
      <KeyboardRows rowMeshRefs={rowMeshRefs} />

      {/* Lid */}
      <group
        ref={hingeRef}
        position={[0, BASE_H / 2, HINGE_Z]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh position={[0, LID_H / 2, 0]} castShadow>
          <boxGeometry args={[LID_W, LID_H, LID_D]} />
          <meshStandardMaterial color="#1c1c1e" metalness={0.92} roughness={0.12} />
        </mesh>

        <mesh position={[0, LID_H / 2, LID_D / 2 + 0.002]}>
          <boxGeometry args={[LID_W - 0.16, LID_H - 0.13, 0.005]} />
          <meshStandardMaterial color="#080808" roughness={1} metalness={0} />
        </mesh>

        <mesh position={[0, LID_H / 2, LID_D / 2 + 0.006]}>
          <planeGeometry args={[SCR_W, SCR_H]} />
          <meshStandardMaterial
            ref={screenMatRef}
            map={screenTex}
            emissive="#ffffff"
            emissiveMap={screenTex}
            emissiveIntensity={0}
            roughness={0.04}
            metalness={0}
          />
        </mesh>
      </group>

    </group>
  );
}

// ─── Scene root ───────────────────────────────────────────────────────────────

export function LaptopScene({ isMobile }: Props) {
  return (
    <>
      <color attach="background" args={["#060b14"]} />
      <fog attach="fog" args={["#060b14", 14, 24]} />

      <pointLight position={[-4, 6, 4]}  intensity={2.8}  color="#ffffff" />
      <pointLight position={[5,  2, 2]}  intensity={0.9}  color="#c8d8ff" />
      <pointLight position={[0, -1, 3]}  intensity={0.5}  color="#00d4ff" />
      <ambientLight intensity={0.22} />

      <Environment preset="city" />

      <Laptop isMobile={isMobile} />
    </>
  );
}
