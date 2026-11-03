import { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import modelUrl from "../data/models/JP-Portfolio.glb";

export default function Model() {
  const ref = useRef();
  const { scene } = useGLTF(modelUrl); 

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.2;
  });

  return (
    <Center>
      <primitive ref={ref} object={scene} scale={1} />
    </Center>
  );
}

useGLTF.preload(modelUrl);