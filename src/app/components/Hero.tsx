"use client";
import React, { useState, useEffect } from "react";
import { SparklesPreview } from "./SparklesPreview";
import Image from "next/image";
import { FloatingNavDemo } from "./FloatingNavDemo";
import styles from './Hero.module.css'; // Import CSS module

const Hero = () => {
  const [showImage, setShowImage] = useState(false);
  const image = "/images/profile.jpg";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000); // 1 detik delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-center">
      <FloatingNavDemo />
      {/* Gambar kecil dengan ukuran 100px x 100px dan berbentuk lingkaran */}
      <div className={`${styles.imageWrapper} ${showImage ? styles.show : ''} absolute z-10 top-[150px] lg:top-[120px] md:top-[150px] sm:top-[160px]`}>
        <Image 
          src={image} 
          alt="Example Image" 
          width={100} // Lebar 100px
          height={100} // Tinggi 100px
          className={styles.image} // Apply CSS class for animation
        />
      </div>
      <div className="absolute z-0 inset-0">
        <SparklesPreview />
      </div>
    </div>
  );
};

export default Hero;
