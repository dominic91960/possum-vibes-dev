import React from "react";
import Image from "next/image";

import rays from "@/public/images/home-page/hero/rays.svg";
import topRightCloud from "@/public/images/home-page/hero/cloud-tr.png";
import bg from "@/public/images/home-page/hero/bg.png";
import imgOne from "@/public/images/home-page/hero/possom1.png";
import imgTwo from "@/public/images/home-page/hero/possom2.png";
import bottomCloud from "@/public/images/home-page/hero/cloud.png";

const Hero = () => {
  return (
    <section className="bg-secondary relative overflow-x-clip">
      <div className="absolute inset-0 overflow-clip">
        <Image
          src={rays}
          alt="rays"
          className="size-full scale-200 object-cover object-center select-none"
        />
      </div>

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
      <Image
        src={topRightCloud}
        alt="Colud"
        className="absolute top-0 right-0 w-[200px] object-cover object-center select-none sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[400px]"
      />

      <div className="px-container relative container mx-auto flex h-dvh min-h-[500px] flex-col items-center justify-end sm:min-h-[470px] md:min-h-[560px] lg:min-h-[740px] xl:min-h-[940px] 2xl:min-h-[1100px]">
        <h1 className="title-text absolute inset-0 m-auto size-fit -translate-y-[20%] text-center text-[50px] uppercase italic sm:text-[75px] md:text-[100px] lg:text-[125px] xl:text-[150px] 2xl:text-[175px]">
          $WTFO <br /> Possom Vibes
        </h1>

        <div className="relative grid w-[82%] grid-cols-1 sm:grid-cols-2">
          <Image
            src={imgOne}
            alt="Possom"
            className="object-cover object-center select-none"
          />
          <Image
            src={imgTwo}
            alt="Possom"
            className="hidden object-cover object-center select-none sm:block"
          />
        </div>
      </div>

      <Image
        src={bottomCloud}
        alt="Cloud"
        className="absolute bottom-0 left-0 w-[55%] -translate-x-[5%] translate-y-1/2 object-cover object-center select-none"
      />
      <Image
        src={bottomCloud}
        alt="Cloud"
        className="absolute right-0 bottom-0 w-[55%] translate-x-[5%] translate-y-1/2 object-cover object-center select-none"
      />
    </section>
  );
};

export default Hero;
