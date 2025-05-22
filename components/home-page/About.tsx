import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
// import PrimaryButton from "../ui/PrimaryButton";
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
        <SectionTitle
          className="mb-[0.3em] min-[450px]:hidden sm:block"
          text="About $wtfo_possum"
        />
        <SectionTitle
          className="mb-[0.3em] hidden min-[450px]:block sm:hidden"
          text="About $wtfo possum"
        />

        <p className="pb-[0.5em] text-[16px] text-shadow-[0.1em_0.1em_0_#212121] sm:w-[32ch] sm:pb-[2em] sm:text-[20px] md:text-[24px] lg:text-[28px] lg:text-shadow-[0.05em_0.05em_0_#212121] xl:text-[32px] 2xl:text-[36px]">
          Wtfo is not your regular boring Sol meme. Wtfo is different. A unique
          character who suites the legendary ability of all possum. Being
          immortal, being resistant against poison and harm. Just like our token
          on Solana. Possum deliver that what the f… feeling!
          <br />
          <br />
          Loads of utilities and vibes!
        </p>

        {/* <PrimaryButton
          buttonText="Buy $wtfo"
          className="mb-[0.2em] sm:mb-[2.6em]"
        /> */}

        <Image
          src={possom}
          alt="Possom"
          className="object-cover object-center sm:absolute sm:right-0 sm:bottom-0 sm:w-1/2"
        />
      </div>
    </section>
  );
};

export default About;
