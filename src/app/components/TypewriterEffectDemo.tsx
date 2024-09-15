"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import MagicButton from "./MagicButton";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Full",
      className: "text-neutral-200",
    },
    {
      text: "stack",
      className: "text-neutral-200",
    },
    {
      text: "Web",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Development.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="text-neutral-200 text-base sm:text-xl md:text-xl lg:text-2xl mb-1 md:mb-4 lg:mb-6">
        Hello I`am a Muhammad Zidni Ilma
      </p>
      <TypewriterEffect words={words}/>
      <div className="mb-10 md:space-y-0 space-x-0 md:space-x-4 mt-5">
        <MagicButton title="Show my Skill" position="right" icon={undefined} />
      </div>
    </div>
  );
}
