import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";
import bg from "@/public/images/home-page/about/bg.jpg";
import possom from "@/public/images/home-page/about/possom.png";

const About = () => {
  return (
    <section className="bg-light relative pt-[15vw]">
      <Image
        src={bg}
        alt="Background"
        className="absolute inset-0 size-full rounded-b-[40px] object-cover object-bottom select-none sm:rounded-b-[50px] md:rounded-b-[60px] lg:rounded-b-[70px] xl:rounded-b-[80px] 2xl:rounded-b-[90px]"
        placeholder="blur"
      />

      <div className="px-container relative container mx-auto">
        <SectionTitle className="mb-[0.3em]" text="$wtfo possum" />
        <p className="mb-[2em] text-[16px] text-shadow-[0.1em_0.1em_0_#212121] sm:w-[32ch] sm:text-[20px] md:text-[24px] lg:text-[28px] lg:text-shadow-[0.05em_0.05em_0_#212121] xl:text-[32px] 2xl:text-[36px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>

        <PrimaryButton
          buttonText="Buy $wtfo"
          className="mb-[0.2em] sm:mb-[2.6em]"
        />

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
