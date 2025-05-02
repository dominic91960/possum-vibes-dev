import React from "react";
import Image from "next/image";

import bg from "@/public/images/home-page/hero/bg.png";

import HeroTitle from "./HeroTitle";
import HeroRays from "./HeroRays";
import LeftCloud from "./LeftCloud";
import RightCloud from "./RightCloud";
import HeroImageGrid from "./HeroImageGrid";
import TopCloud from "./TopCloud";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="bg-secondary relative overflow-x-clip"
    >
      <HeroRays />

      <div className="absolute inset-0 grid grid-cols-1 items-end opacity-10 sm:grid-cols-2 sm:gap-[20%]">
        <Image
          src={bg}
          alt="Possom"
          className="object-cover object-center select-none"
        />
        <Image
          src={bg}
          alt="Possom"
          className="hidden object-cover object-center select-none sm:block"
        />
      </div>

      <TopCloud />

      <div className="px-container relative container mx-auto flex h-[68vh] min-h-[calc(450px-10vh)] flex-col items-center justify-end sm:h-[90vh] md:min-h-[calc(530px-10vh)] lg:h-[85vh] lg:min-h-[calc(768px-15vh)] xl:min-h-[calc(720px-15vh)] 2xl:min-h-[calc(1080px-15vh)]">
        {/* Title */}
        <HeroTitle />

        {/* Images */}
        <HeroImageGrid />
      </div>

      {/* Bottom clouds */}
      <LeftCloud />
      <RightCloud />
    </section>
  );
};

export default Hero;
