"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import Studio from "./models/studio";
import ModelSwitcher from "./models/modelSwitch";
import { useMachineStore } from "@/lib/useStore";
import clsx from "clsx";

const ProductViewer = () => {
  const { setColor, color, scale, setScale } = useMachineStore();
  const [size, setSize] = React.useState<"14" | "16">("16");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

 
  useEffect(() => {
    if (size === "16") {
      setScale(isMobile ? 0.06 : 0.08);
    } else {
      setScale(isMobile ? 0.03 : 0.04);
    }
  }, [isMobile]);

  const handleSizeChange = (newSize: "14" | "16") => {
    setSize(newSize);
    if (newSize === "16") {
      setScale(isMobile ? 0.06 : 0.08);
    } else {
      setScale(isMobile ? 0.03 : 0.04);
    }
  };

  const handleColorChange = (colorHex: string) => {
    setColor(colorHex);
  };

  const isSpaceGray = color === "#2e2c2e";
  const isSilver = color === "#adb5bd";

  return (
    <section id="product" className="px-8 flex flex-col py-20 gap-4">
      <h1 className="text-white font-semibold text-6xl">Take a closer look.</h1>

      <div className="relative w-full h-[600px] mt-8">
        <Canvas
          shadows
          camera={{ position: [0, 2, 5], fov: 75, near: 0.1, far: 100 }}
        >
          <Studio />
          <ModelSwitcher
            scale={scale}
            materialColor={color}
            isMobile={isMobile}
          />
        </Canvas>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <p className="text-gray-400 text-center mb-2">
            MacBook Pro {size}&quot; in {isSilver ? "Silver" : "Space Black"}
          </p>
          <div className="flex gap-4 items-center w-fit mx-auto">
            <div className="flex w-fit justify-center gap-2 bg-neutral-700 rounded-xl py-1 px-2">
              <button
                onClick={() => handleColorChange("#adb5bd")}
                style={{ backgroundColor: "#adb5bd" }}
                className={clsx(
                  "rounded-full w-6 h-6 hover:opacity-80 transition-all cursor-pointer",
                  isSilver &&
                    "ring-2 ring-blue-400 ring-offset-1 ring-offset-neutral-700"
                )}
                aria-label="Silver"
              />
              <button
                onClick={() => handleColorChange("#2e2c2e")}
                style={{ backgroundColor: "#2e2c2e" }}
                className={clsx(
                  "rounded-full w-6 h-6 hover:opacity-80 transition-all cursor-pointer",
                  isSpaceGray &&
                    "ring-2 ring-blue-400 ring-offset-1 ring-offset-neutral-700"
                )}
                aria-label="Space Gray"
              />
            </div>

            {/* Size Picker */}
            <div className="flex w-fit justify-center gap-2 bg-white mx-auto rounded-full py-1 px-2">
              <button
                onClick={() => handleSizeChange("16")}
                className={clsx(
                  "rounded-full w-8 h-8 text-sm text-black font-medium transition-colors cursor-pointer",
                  size === "16"
                    ? "bg-gray-200 text-black"
                    : "text-black hover:bg-gray-100"
                )}
              >
                16&quot;
              </button>
              <button
                onClick={() => handleSizeChange("14")}
                className={clsx(
                  "rounded-full w-8 h-8 text-sm text-black font-medium transition-colors cursor-pointer",
                  size === "14"
                    ? "bg-gray-200 text-black"
                    : "text-black hover:bg-gray-100"
                )}
              >
                14&quot;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductViewer;
