"use client";
import { Canvas } from "@react-three/fiber";
import Studio from "./components/models/studio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModelSwitcher from "./components/models/modelSwitch";
import HeroSection from "./components/HeroSection";
import ProductViewer from "./components/ProductViewer";

gsap.registerPlugin(ScrollTrigger); // ✅ Fixed - no underscores!

const page = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <HeroSection />
      <ProductViewer />
    </div>
  );
};

export default page;
