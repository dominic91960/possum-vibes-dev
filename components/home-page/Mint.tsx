import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import cloud from "@/public/images/home-page/how-to-buy/cloud.png";

const Mint = () => {
  return (
    <section className="bg-secondary relative pb-[15%] sm:pb-[12%] lg:pb-[10%]">
      <div className="px-container relative container mx-auto">
        <SectionTitle
          text="Mint possum"
          className="mb-[0.5em] pt-[0.8em] text-center"
        />

        <div className="h-[700px] sm:h-[720px] md:h-[740px] lg:h-[760px] xl:h-[770px] 2xl:h-[780px]">
          <iframe
            src="https://possum-rouge.vercel.app/"
            style={{ width: "100%", height: "100%", border: "none" }}
            title="Mint"
          ></iframe>
        </div>
      </div>

      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-[10%] left-0 w-1/4 max-w-[550px] object-cover object-center select-none"
      />
      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-[35%] right-0 w-1/4 max-w-[550px] object-cover object-center select-none"
      />
    </section>
  );
};

export default Mint;
