"use client";
import React, { useState, useEffect } from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import MagicButton from "./MagicButton";
import styles from './TypewriterEffectDemo.module.css'; // Import CSS module
import Link from "next/link";

export function TypewriterEffectDemo() {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Set timer to show text after 1 second
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000); // 1 second

    // Set timer to show button after 2 seconds
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1000); // 2 seconds

    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

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
    <div className="flex flex-col items-center justify-center">
      <p className={`${styles.textWrapper} ${showText ? styles.show : ''} text-neutral-200 text-base sm:text-xl md:text-xl lg:text-2xl mb-1 md:mb-4 lg:mb-6`}>
        Hello I`am a Muhammad Zidni Ilma
      </p>
      {showText && <TypewriterEffect words={words} />}
      {showButton && (
        <div className={`${styles.magicButtonWrapper} ${showButton ? styles.show : ''} mb-10 md:space-y-0 space-x-0 md:space-x-4 mt-5`}>
          <Link href="mailto:m.zidniilma234@gmail.com">
          <MagicButton title="Let's get in touch" position="right" icon={undefined} />          
          </Link>
        </div>
      )}
    </div>
  );
}
