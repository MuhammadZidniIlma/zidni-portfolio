"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const cardData = [
  { id: 1, title: "Blog Site", description: "Description 1", imageUrl: "/images/blog-site2.png" },
  { id: 2, title: "MZI Shop", description: "Description 2", imageUrl: "/images/mzi-shop.png" },
  { id: 3, title: "Card 3", description: "Description 3", imageUrl: "https://images.unsplash.com/photo-1726082132343-e4dc7400ee44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "Card 4", description: "Description 4", imageUrl: "https://images.unsplash.com/photo-1726266852911-ee5f5b49ea0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "Card 5", description: "Description 5", imageUrl: "https://images.unsplash.com/photo-1554599205-b25822669f92?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, title: "Card 6", description: "Description 6", imageUrl: "https://images.unsplash.com/photo-1434730737257-3e97ad16f4b6?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export function ThreeDCardDemo() {
  return (
    <div id="projects" className="max-w-full ">
    <div className="flex justify-center mb-10">
        <h1 className="font-bold text-xl md:text-3xl sm:text-2xl lg:text-4xl text-center">A small selection of<span className="text-purple-200">recent projects</span></h1>
    </div>
    <div className="  mx-auto flex items-center justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 row-gap-2">
        {cardData.map((card) => (
          <CardContainer key={card.id} className="flex items-center justify-center">
            <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm max-w-sm mt-2 text-neutral-300"
              >
                {card.description}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={card.imageUrl}
                  height="400"
                  width="400"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`thumbnail ${card.id}`}
                />
              </CardItem>
              <div className="flex justify-end items-center mt-4">                
                <CardItem
                  translateZ={20}
                  translateX={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                >
                  View
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
    </div>
  );
}
