import React from "react";
import Image from "next/image";

import HeroRays from "../home-page/hero/HeroRays";
import LeftCloud from "../home-page/hero/LeftCloud";
import RightCloud from "../home-page/hero/RightCloud";
import possom from "@/public/images/trending-page/section-1/possom.png";

const Section1 = () => {
  return (
    <section className="bg-secondary relative">
      <HeroRays />

      <div className="px-container relative container mx-auto">
        <p className="pt-[1.2em] text-center text-[30px] font-black uppercase italic sm:text-[39px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px]">
          The wtf trending suite
        </p>
        <p className="section-title mt-[0.5em] mb-[0.2em] text-center text-[24px] uppercase sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px]">
          HYPE UP YOUR COMMUNITY AND SHOWCASE YOUR SHITCOIN!
        </p>

        <Image
          src={possom}
          alt="Possum"
          className="mx-auto w-1/2 rotate-y-180 object-contain object-center sm:w-2/5"
        />
      </div>

      <LeftCloud />
      <RightCloud />
    </section>
  );
};

export default Section1;
