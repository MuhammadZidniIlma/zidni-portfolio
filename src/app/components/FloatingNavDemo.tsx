"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconTarget, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: (
        <IconTarget className="h-4 w-4 text-white" />
      ),
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <IconMessage className="h-4 w-4 text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />      
    </div>
  );
}
