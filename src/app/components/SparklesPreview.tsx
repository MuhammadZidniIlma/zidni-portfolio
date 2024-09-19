"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { TypewriterEffectDemo } from "./TypewriterEffectDemo";

export function SparklesPreview() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">                
      </div>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        <TypewriterEffectDemo/>
      </h1>
    </div>
  );
}
