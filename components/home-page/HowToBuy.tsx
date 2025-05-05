import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";

import { howToBuyData } from "@/lib/constants";
import cloud from "@/public/images/home-page/how-to-buy/cloud.png";
import seperator from "@/public/images/home-page/how-to-buy/seperator.svg";
import Link from "next/link";

const HowToBuy = () => {
  return (
    <section className="bg-light relative overflow-x-clip">
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
          className="mb-[0.5em] pt-[0.8em] text-center lg:pt-[0.5em]"
        />

        <div className="grid grid-cols-1 gap-[2em] md:grid-cols-3 lg:gap-[2em] xl:gap-[4em] 2xl:gap-[9em]">
          {howToBuyData.map(({ id, icon, title, text, buttonText, href }) => (
            <div
              key={id}
              className="border-dark mx-auto mt-[25%] flex w-fit flex-col items-center gap-[0.2em] rounded-[1em] border-[0.2em] bg-[#FFFFDF] px-[2em] pt-[4em] pb-[1.2em] text-center shadow-[0.3em_0.3em_var(--color-dark)] md:mt-[20%]"
            >
              <div className="relative mx-auto aspect-[5/2] w-4/5 overflow-x-clip">
                <Image
                  src={icon}
                  alt="Possom"
                  className="absolute right-0 bottom-0 left-0 w-full select-none"
                />
                <Image
                  src={seperator}
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

              <Link href={href} className="mt-auto">
                <PrimaryButton
                  buttonText={buttonText}
                  className="text-[1.4em] sm:text-[1.4em] md:text-[1.4em] lg:text-[1.4em] xl:text-[1.4em] 2xl:text-[1.4em]"
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
