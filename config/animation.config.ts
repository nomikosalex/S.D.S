export const ANIMATION = {
  ease: {
    default: [0.25, 0.1, 0.25, 1.0] as const,
    enter:   [0.0,  0.0, 0.2,  1.0] as const,
    exit:    [0.4,  0.0, 1.0,  1.0] as const,
    spring:  { type: "spring" as const, stiffness: 100, damping: 15 },
  },

  duration: {
    fast:   0.2,
    normal: 0.5,
    slow:   0.8,
    max:    1.2,
  },

  reveal: {
    y:      20,
    once:   true,
    margin: "-80px" as const,
  },

  ui: {
    mobileBreakpoint: 768,
  },

  // R3F canvas defaults
  three: {
    dpr:    [1, 1.5] as [number, number],
    camera: {
      fov:      50,
      position: [3.5, 1.8, 5.2] as [number, number, number],
    },
  },

  scroll: {
    lerp:        0.10,
    duration:    1.0,
    smoothWheel: true,
  },

  // Scroll-progress thresholds driving the 3D laptop animation (0–1)
  laptop: {
    heroHeightVh: 4,    // section is 400vh; scrollable distance = 300vh
    textFadeEnd:  0.20, // hero brand text fully gone
    servicesIn:   0.38, // service labels begin fading in
    ctaIn:        0.78, // final CTA begins fading in
  },

  colors: {
    bg:          "#060b14",
    neonCyan:    "#00d4ff",
    blue:        "#2563eb",
    purple:      "#7c3aed",
    lava:        "#ff5500",
    ember:       "#ffb700",
    rock:        "#151c2e",
    textPrimary: "#f8fafc",
    textMuted:   "#94a3b8",
  },
} as const;
