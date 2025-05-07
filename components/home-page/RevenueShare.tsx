import React from "react";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import possom from "@/public/images/home-page/revenue-share/possom.png";
import seperator from "@/public/images/home-page/revenue-share/seperator.svg";
import classes from "@/styles/home-page/revenue-share.module.css";

const RevenueShare = () => {
  return (
    <section className="relative overflow-x-clip bg-[#96897B]">
      <Image
        src={seperator}
        alt="Vector"
        className="absolute top-0 right-0 left-0 w-full -translate-y-[40%] scale-105 select-none"
        style={{
          clipPath: "polygon(0 0%, 100% 0%, 100% 46%, 0 46%",
        }}
      />

      <div className="px-container relative container mx-auto">
        <SectionTitle
          className="mb-[0.5em] pt-[0.8em] text-center min-[450px]:hidden"
          text="$wtfo revenue_share"
        />
        <SectionTitle
          className="mb-[0.5em] hidden pt-[0.8em] text-center min-[450px]:block lg:mb-0"
          text="$wtfo revenue share"
        />

        <div className={classes["custom-grid"]}>
          <div className={classes["text-area"]}>
            <p className="pb-[0.5em] text-center text-[16px] text-shadow-[0.1em_0.1em_0_#212121] sm:text-[20px] md:text-[24px] lg:text-left lg:text-[28px] lg:text-shadow-[0.05em_0.05em_0_#212121] xl:text-[32px] 2xl:text-[36px]">
              We created an exceptional zero tax revenue share model. Get free
              tokens weekly from the boost order tokens simply by holding $WTFO
              token.
              <br />
              <br />
              Projects paying for boost on WTFTRENDING using $WTFO tokens. These
              tokens get collected in the revenue share wallet.
              <br />
              <br />
              50% of these tokens get burned and 50% get redistributed to our
              holders by WTFOAirdropBot. To be eligible in revshare, you need to
              hold WTFO token.
            </p>
          </div>

          <div className={classes["image-area"]}>
            <Image
              src={possom}
              alt="Possom"
              className="mx-auto w-1/2 object-cover object-center sm:w-1/3 lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueShare;
