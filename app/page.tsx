"use client";
import { Canvas } from "@react-three/fiber";
import Studio from "./components/models/studio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModelSwitcher from "./components/models/modelSwitch";
import HeroSection from "./components/HeroSection";

gsap.registerPlugin(ScrollTrigger); // ✅ Fixed - no underscores!

const page = () => {
  return (
    <div className="w-full h-screen bg-black">
      <HeroSection />
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 3], fov: 75, near: 0.08, far: 100 }}
      >
        <Studio />
        {/* <Macbook3 position={[0, 0, 0]} scale={0.04} /> */}
        <ModelSwitcher scale={0.04} isMobile={false} />
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
    </div>
  );
};

export default page;
