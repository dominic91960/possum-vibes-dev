"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SectionTitle from "./SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";

import { cn } from "@/lib/utils";
import { howToBuyData } from "@/lib/constants";
import cloud from "@/public/images/home-page/how-to-buy/cloud.png";
import seperator from "@/public/images/home-page/how-to-buy/seperator.svg";
import cardSeperator from "@/public/images/home-page/how-to-buy/card-seperator.svg";

const HowToBuy = () => {
  const sectionRef = useRef<null | HTMLElement>(null);
  const [display, setDisplay] = useState("relatve");

  useEffect(() => {
    const setSectionDisplay = () => {
      if (!sectionRef.current) return;

      const wHeight = window.innerHeight;
      const sHeight = sectionRef.current.getBoundingClientRect().height;

      if (wHeight > sHeight) setDisplay("sticky top-0");
      else setDisplay("relative");
    };

    setSectionDisplay();
    window.addEventListener("resize", setSectionDisplay);

    return () => window.removeEventListener("resize", setSectionDisplay);
  });

  return (
    <section
      ref={sectionRef}
      className={cn("bg-light overflow-x-clip", display)}
    >
      <Image
        src={seperator}
        alt="Vector"
        className="absolute top-0 right-0 left-0 w-full -translate-y-[40%] scale-105 select-none"
        style={{
          clipPath: "polygon(0 0%, 100% 0%, 100% 46%, 0 46%",
        }}
      />

      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-[20%] left-0 w-1/4 max-w-[550px] object-cover object-center select-none md:top-[15%]"
      />
      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-[50%] right-0 w-1/4 max-w-[550px] object-cover object-center select-none md:top-[15%]"
      />

      <div className="px-container relative container mx-auto pb-[15%] sm:pb-[12%] lg:pb-[10%]">
        <SectionTitle
          text="Our tools"
          className="mb-[0.5em] pt-[0.8em] text-center"
        />

        <div className="grid grid-cols-1 gap-[2em] sm:grid-cols-2 lg:gap-[4em] xl:grid-cols-4 xl:gap-[2em]">
          {howToBuyData.map(({ id, icon, title, text, buttonText, href }) => (
            <div
              key={id}
              className="border-dark mx-auto mt-[25%] flex w-fit flex-col items-center gap-[0.2em] rounded-[1em] border-[0.2em] bg-[#FFFFDF] px-[2em] pt-[4em] pb-[1.2em] text-center shadow-[0.3em_0.3em_var(--color-dark)] md:mt-[28%] xl:mt-[10%]"
            >
              <div className="relative mx-auto aspect-[5/2] w-4/5 overflow-x-clip">
                <Image
                  src={icon}
                  alt="Possom"
                  className="absolute right-0 bottom-0 left-0 w-full select-none"
                />
                <Image
                  src={cardSeperator}
                  alt="Vector"
                  className="absolute top-full right-0 left-0 w-full -translate-y-[40%] scale-105 select-none"
                  style={{
                    clipPath: "polygon(0 0%, 100% 0%, 100% 46%, 0 46%",
                  }}
                />
              </div>

              <p className="text-dark mt-[0.2em] text-[1.5em] font-bold uppercase italic">
                {title}
              </p>

              <p className="text-dark mb-[0.2em] max-w-[40ch] font-bold sm:max-w-[60ch] md:max-w-none">
                {text}
              </p>

              <Link href={href} className="mt-auto w-full">
                <PrimaryButton
                  buttonText={buttonText}
                  className="w-full px-0 text-[1.4em] sm:text-[1.4em] md:text-[1.4em] lg:text-[1.4em] xl:text-[1.4em] 2xl:text-[1.4em]"
                  spanStyle="bg-[#FFFFEF]"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
