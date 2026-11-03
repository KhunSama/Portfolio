import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [50, 20, 0], fov: 28 }} dpr={[1, 2]}>
        <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}