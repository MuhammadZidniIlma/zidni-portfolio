import Image from "next/image";
import MagicButton from "../components/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full pt-40 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">        
        <Image 
          src="/images/footer-grid.svg" 
          alt="Example Image" 
          width={100} // Lebar 100px
          height={100} // Tinggi 100px
          className="w-full h-full opacity-70" // Apply CSS class for animation
        />        
      </div>

      <div className="flex flex-col items-center">
        <h1 className="lg:max-w-[45vw] font-bold text-2xl md:text-4xl sm:text-3xl lg:text-5xl text-center">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="mailto:m.zidniilma234@gmail.com">
        <MagicButton title="Let's get in touch" position="right" icon={undefined} />          
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Muhammad Zidni Ilma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
