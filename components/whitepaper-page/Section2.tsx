import React from "react";
import Image from "next/image";

import seperator from "@/public/images/trending-page/section-3/seperator.svg";

const Section2 = () => {
  return (
    <section className="bg-light relative overflow-x-clip pt-[10vw]">
      <div className="px-container container mx-auto aspect-[210/297]">
        <iframe
          src="/images/whitepaper/whitepaper.pdf"
          className="h-full w-full"
        ></iframe>
      </div>

      <Image
        src={seperator}
        alt="Vector"
        className="absolute top-full right-0 left-0 w-full -translate-y-1/2 scale-105 select-none"
        style={{
          clipPath: "polygon(0 7%, 100% 7%, 100% 100%, 0 100%",
        }}
      />
    </section>
  );
};

export default Section2;
