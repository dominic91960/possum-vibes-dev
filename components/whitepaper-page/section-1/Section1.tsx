import React from "react";
import Link from "next/link";

import HeroRays from "../../home-page/hero/HeroRays";
import LeftCloud from "./LeftCloud";
import RightCloud from "./RightCloud";
import PrimaryButton from "../../ui/PrimaryButton";

const Section1 = () => {
  return (
    <section className="bg-secondary relative overflow-x-clip">
      <HeroRays />

      <div className="px-container relative container mx-auto">
        <p className="pt-[1.2em] text-center text-[30px] font-black uppercase italic sm:text-[39px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px]">
          The wtf whitepaper
        </p>
        <p className="section-title mt-[0.5em] mb-[0.2em] text-center text-[24px] uppercase sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px]">
          Shaping the Future of Fair and Legit Events
        </p>

        <div className="my-[2.4em] flex flex-col items-center gap-[1em] sm:flex-row sm:justify-between">
          <Link href="https://t.me/WTFTRENDINGBOT">
            <PrimaryButton
              buttonText="Wtf tg bot"
              className="w-[20ch] px-0 text-[14px] sm:text-[17px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]"
            />
          </Link>
          <Link href="https://t.me/WTFTRENDING">
            <PrimaryButton
              buttonText="Wtf trend"
              className="w-[20ch] px-0 text-[14px] sm:text-[17px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]"
            />
          </Link>
          <Link href="/">
            <PrimaryButton
              buttonText="to wtfo page"
              className="w-[20ch] px-0 text-[14px] sm:text-[17px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]"
            />
          </Link>
        </div>

        <p className="mt-[0.7em] pb-[4em] text-center text-[24px] font-black uppercase italic sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px]">
          YOUR GUIDE STARTS HERE
        </p>
      </div>

      <LeftCloud />
      <RightCloud />
    </section>
  );
};

export default Section1;
