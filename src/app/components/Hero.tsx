import React from "react";
import { SparklesPreview } from "./SparklesPreview";
import Image from "next/image";

const Hero = () => {
  const image = "https://i.pinimg.com/564x/44/cf/8b/44cf8b5f7b7f6562b67784ef346aeca2.jpg";
  
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Gambar kecil dengan ukuran 100px x 100px dan berbentuk lingkaran */}
      <div className="absolute z-10 top-[180px] lg:top-[150px] md:top-[160px] sm:top-[170px]">
        <Image 
          src={image} 
          alt="Example Image" 
          width={100} // Lebar 100px
          height={100} // Tinggi 100px
          style={{ borderRadius: '50%' }} // Membuat gambar menjadi lingkaran
        />
      </div>
      <div className="absolute z-0 inset-0">
        <SparklesPreview />
      </div>
    </div>
  );
};

export default Hero;
