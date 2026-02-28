"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import Scene from "@/components/3d/Scene";
import Overlay from "@/components/ui/Overlay";
import "@/app/globals.css";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={6} damping={0.1}>
            <Scene />
            <Scroll html>
              <Overlay />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
