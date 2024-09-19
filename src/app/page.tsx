
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import Hero from "./components/Hero";
import { HeroScrollDemo } from "./components/HeroScrollDemo";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo";
import Footer from "./ui/footer";


export default function Home() {
  return (    
    <>
    <div className="w-full h-screen relative">
      <Hero />
    </div>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-20">
        <div className="max-w-7xl w-full">        
          <HeroScrollDemo/>
          <CardHoverEffectDemo/>
          <ThreeDCardDemo/>
          <Footer/>                                
        </div>
      </main>          
    </>
  );
}
