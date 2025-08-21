import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import TokenStats from "./TokenStats";

import bg from "@/public/images/home-page/about/bg.jpg";
import possom from "@/public/images/home-page/about/possom.png";
import seperator from "@/public/images/home-page/about/seperator.svg";

const About = () => {
  return (
    <section className="bg-secondary relative overflow-x-clip pt-[10vw]">
      <Image
        src={bg}
        alt="Background"
        className="absolute inset-0 size-full rounded-b-[40px] object-cover object-bottom select-none sm:rounded-b-[50px] md:rounded-b-[60px] lg:rounded-b-[70px] xl:rounded-b-[80px] 2xl:rounded-b-[90px]"
        placeholder="blur"
      />

      <Image
        src={seperator}
        alt="Vector"
        className="absolute top-0 right-0 left-0 w-full -translate-y-[40%] scale-105 select-none"
        style={{
          clipPath: "polygon(0 0%, 100% 0%, 100% 46%, 0 46%",
        }}
      />

      <div className="px-container relative container mx-auto">
        <SectionTitle className="mb-[0.3em]" text="About $wtfo possum" />
        <p className="text-[16px] text-shadow-[0.1em_0.1em_0_#212121] sm:text-[20px] md:text-[24px] lg:text-[28px] lg:text-shadow-[0.05em_0.05em_0_#212121] xl:text-[32px] 2xl:text-[36px]">
          WTFO is not your regular boring Sol meme. Wtfo is different. A unique
          character who combines meme with utility. The Possum of the
          Blockchain. We give you that What The F... Feeling!
          <br />
          <br />
          Loads of utilities and vibes!
        </p>

        <div className="mt-[3em] grid grid-cols-1 gap-[1.5em] lg:mt-[2em] lg:grid-cols-2 lg:items-end xl:-mt-[5em]">
          <TokenStats />

          <Image
            src={possom}
            alt="Possom"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
