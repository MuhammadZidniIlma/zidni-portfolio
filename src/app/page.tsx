
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import Hero from "./components/Hero";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo";


export default function Home() {
  return (
    <>    
      <Hero />
      <div className="bg-black py-32">
      <CardHoverEffectDemo/>
      </div>
      <div className="bg-black py-32">
      <ThreeDCardDemo/>
      </div>
    </>  
  );
}
