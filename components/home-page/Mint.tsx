import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import Carousel from "./Carousel";
import cloud from "@/public/images/home-page/how-to-buy/cloud.png";

const Mint = () => {
  return (
    <section className="bg-secondary relative pb-[15%] sm:pb-[12%] lg:pb-[10%]">
      <div className="px-container relative container mx-auto">
        <SectionTitle
          text="Mint possum"
          className="mb-[0.5em] pt-[0.8em] text-center"
        />
        <Carousel />
      </div>

      <div className="px-container relative container mx-auto flex h-[750px] items-center justify-center">
        <iframe
          src="https://possum-rouge.vercel.app/"
          title="Mint"
          className="h-full outline-none focus:border-none focus:outline-none"
        ></iframe>
      </div>

      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-[20%] left-0 w-1/4 max-w-[550px] object-cover object-center select-none md:top-[15%]"
      />
      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-[50%] right-0 w-1/4 max-w-[550px] object-cover object-center select-none"
      />
    </section>
  );
};

export default Mint;
