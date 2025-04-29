import React from "react";
import Image from "next/image";

import bg from "@/public/images/home-page/about/bg.jpg";
import possom from "@/public/images/home-page/about/possom.png";

const About = () => {
  return (
    <section className="relative bg-[#FFFBD2] pt-[15vw]">
      <Image
        src={bg}
        alt="Background"
        className="absolute inset-0 size-full rounded-b-[5vw] object-cover object-bottom select-none"
      />

      <div className="px-container relative container mx-auto">
        <h1 className="section-title mb-[0.3em] text-[40px] font-black uppercase italic sm:text-[55px] md:text-[70px] lg:text-[85px] xl:text-[100px] 2xl:text-[115px]">
          $wtfo possum
        </h1>

        <p className="mb-[2em] text-[16px] text-shadow-[0.1em_0.1em_0_#212121] sm:w-[32ch] sm:text-[20px] md:text-[24px] lg:text-[28px] lg:text-shadow-[0.05em_0.05em_0_#212121] xl:text-[32px] 2xl:text-[36px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>

        <button className="bg-primary border-dark text-dark mb-[0.2em] w-fit rounded-[0.5em] border-[0.1em] px-[3em] py-[0.7em] text-[16px] font-bold uppercase shadow-[0.15em_0.15em_0_var(--color-dark)] sm:mb-[2.6em] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]">
          Buy $wtfo
        </button>

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
