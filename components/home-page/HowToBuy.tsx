import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";

import { howToBuyData } from "@/lib/constants";
import cloud from "@/public/images/home-page/how-to-buy/cloud.png";

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
          {howToBuyData.map(({ id, icon, title, text }) => (
            <div
              key={id}
              className="border-dark mx-auto flex w-fit flex-col items-center gap-[0.2em] rounded-[1em] border-[0.2em] bg-[#FFFFDF] px-[2em] pt-[4em] pb-[1.2em] text-center shadow-[0.3em_0.3em_var(--color-dark)]"
            >
              <Image
                src={icon}
                alt={title}
                className="w-[3.1875em] select-none"
              />
              <p className="text-dark mt-[0.2em] text-[1.5em] font-bold uppercase italic">
                {title}
              </p>

              <p className="text-dark mb-[0.2em] max-w-[40ch] font-bold sm:max-w-[60ch] md:max-w-none">
                {text}
              </p>

              <PrimaryButton
                buttonText="Learn more"
                className="mt-auto text-[1.4em] sm:text-[1.4em] md:text-[1.4em] lg:text-[1.4em] xl:text-[1.4em] 2xl:text-[1.4em]"
                spanStyle="bg-[#FFFFEF]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
