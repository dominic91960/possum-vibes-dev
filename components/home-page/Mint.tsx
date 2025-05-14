import React from "react";
import Image from "next/image";

import cloud from "@/public/images/home-page/how-to-buy/cloud.png";

const Mint = () => {
  return (
    <section className="bg-light relative pb-[15%] sm:pb-[12%] lg:pb-[10%]">
      <div className="px-container relative container mx-auto h-[65vh]">
        <iframe
          src="https://possum-rouge.vercel.app/"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Mint"
        ></iframe>
      </div>

      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-[20%] left-[6%] w-1/4 max-w-[550px] object-cover object-center select-none md:top-[15%]"
      />
      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-[50%] right-[6%] w-1/4 max-w-[550px] object-cover object-center select-none md:top-[15%]"
      />
    </section>
  );
};

export default Mint;
