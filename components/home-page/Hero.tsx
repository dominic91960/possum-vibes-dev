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
    <section className="bg-secondary relative  overflow-x-clip">
      <div className="absolute inset-0 overflow-clip">
        <Image
          src={rays}
          alt="rays"
          className="select-none  size-full scale-200 object-cover object-center"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[20%] items-end absolute inset-0 opacity-10">
        <Image
          src={bg}
          alt="Possom"
          className="select-none object-cover object-center "
        />
        <Image
          src={bg}
          alt="Possom"
          className="select-none object-cover object-center hidden sm:block"
        />
      </div>
      <Image
        src={topRightCloud}
        alt="Colud"
        className="select-none object-cover object-center absolute right-0 top-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[400px] "
      />

      <div className="container mx-auto px-container relative min-h-[500px] sm:min-h-[470px] md:min-h-[560px] lg:min-h-[740px] xl:min-h-[940px] 2xl:min-h-[1100px] h-dvh flex flex-col justify-end  items-center">
        <h1 className="uppercase text-[50px] sm:text-[75px] md:text-[100px] lg:text-[125px] xl:text-[150px] 2xl:text-[175px] text-center italic absolute inset-0 size-fit m-auto title-text -translate-y-[20%]">
          $WTFO <br /> Possom Vibes
        </h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 relative  w-[82%]">
          <Image
            src={imgOne}
            alt="Possom"
            className="select-none object-cover object-center"
          />
          <Image
            src={imgTwo}
            alt="Possom"
            className="select-none object-cover object-center hidden sm:block"
          />
        </div>
      </div>

      <Image
        src={bottomCloud}
        alt="Cloud"
        className="select-none object-cover object-center absolute left-0 bottom-0 translate-y-1/2 w-[55%] -translate-x-[5%]"
      />
      <Image
        src={bottomCloud}
        alt="Cloud"
        className="select-none object-cover object-center absolute right-0 bottom-0 translate-y-1/2 w-[55%] translate-x-[5%]"
      />
    </section>
  );
};

export default Hero;
