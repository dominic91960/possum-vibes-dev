import React from "react";

import SectionTitle from "./SectionTitle";

const Mint = () => {
  return (
    <section className="bg-secondary relative pb-[15%] sm:pb-[12%] lg:pb-[10%]">
      <div className="px-container relative container mx-auto">
        <SectionTitle
          text="Mint possum"
          className="mb-[0.5em] pt-[0.8em] text-center"
        />
      </div>

      <div className="h-[1400px] sm:h-[1420px] md:h-[1440px] lg:h-[1460px] xl:h-[1470px] 2xl:h-[1480px]">
        <iframe
          src="https://possum-rouge.vercel.app/"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Mint"
          className="outline-none focus:border-none focus:outline-none"
        ></iframe>
      </div>
    </section>
  );
};

export default Mint;
