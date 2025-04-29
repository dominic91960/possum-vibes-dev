import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import Carousel from "./Carousel";
import seperator from "@/public/images/home-page/collection/seperator.svg";

const Collection = () => {
  return (
    <section className="bg-secondary relative overflow-x-clip">
      <Image
        src={seperator}
        alt="Vector"
        className="absolute right-0 bottom-full left-0 w-full translate-y-1/2 scale-105 rotate-180 rotate-y-180"
        style={{
          clipPath: "polygon(0 7%, 100% 7%, 100% 100%, 0 100%",
        }}
      />

      <div className="px-container relative container mx-auto pb-[4em]">
        <SectionTitle
          text="Our NFT Collections"
          className="mb-[0.6em] pt-[0.7em] text-center sm:mb-[0.4em] lg:mb-[0.5em]"
        />

        <div className="flex justify-between">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Collection;
