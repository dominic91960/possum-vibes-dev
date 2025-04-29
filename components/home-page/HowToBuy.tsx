import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import { howToBuyData } from "@/lib/constants";
import leftCloud from "@/public/images/home-page/how-to-buy/cloud-tl.png";
import rightCloud from "@/public/images/home-page/how-to-buy/cloud-tr.png";

const HowToBuy = () => {
  return (
    <section className="bg-light relative overflow-x-clip">
      <Image
        src={leftCloud}
        alt="Cloud"
        className="absolute top-[20%] left-0 w-1/4 object-cover object-center select-none md:top-[15%]"
      />
      <Image
        src={rightCloud}
        alt="Cloud"
        className="absolute top-[50%] right-0 w-1/4 object-cover object-center select-none md:top-[15%]"
      />

      <div className="px-container relative container mx-auto pb-[15em]">
        <SectionTitle
          text="How to buy"
          className="mb-[0.5em] pt-[0.8em] text-center lg:pt-[0.5em]"
        />

        <div className="grid grid-cols-1 gap-[2em] md:grid-cols-3 lg:gap-[2em] xl:gap-[4em] 2xl:gap-[9em]">
          {howToBuyData.map(({ id, icon, title, text }) => (
            <div
              key={id}
              className="border-dark mx-auto flex w-fit flex-col items-center justify-between gap-[2em] rounded-[1em] border-[0.2em] bg-[#FFFFDF] px-[2em] pt-[4em] pb-[1.2em] text-center shadow-[0.3em_0.3em_var(--color-dark)]"
            >
              <Image src={icon} alt={title} className="w-[3.1875em]" />
              <p className="text-dark text-[1.5em] font-bold uppercase italic">
                {title}
              </p>

              <p className="text-dark max-w-[40ch] font-bold sm:max-w-[60ch] md:max-w-none">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
