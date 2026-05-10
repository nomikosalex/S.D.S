// Extend React 19's JSX namespace with R3F's Three.js intrinsic elements.
// React 19 uses React.JSX internally; R3F augments the global JSX namespace,
// so we bridge them here to avoid "ambientLight does not exist" TS errors.
import type { ThreeElements } from "@react-three/fiber";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}
