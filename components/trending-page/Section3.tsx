import React from "react";
import Image from "next/image";

import PrimaryButton from "../ui/PrimaryButton";
import cloud from "@/public/images/home-page/how-to-buy/cloud.png";
import seperator from "@/public/images/trending-page/section-3/seperator.svg";
import Link from "next/link";

const Section3 = () => {
  return (
    <section className="bg-light relative overflow-x-clip pb-[10vw]">
      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-0 left-0 w-1/4 max-w-[400px] -translate-y-1/4 object-cover object-center select-none"
      />
      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-0 right-0 w-1/4 max-w-[400px] -translate-y-1/4 object-cover object-center select-none"
      />

      <div className="px-container relative container mx-auto">
        <p className="section-title mx-auto mb-[0.2em] max-w-[32ch] pt-[1em] text-center text-[24px] uppercase sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px]">
          LEVEL IT UP! BOOST VOTES OR ADD FIX TRENDING SPOT!
        </p>

        <p className="text-dark mx-auto mb-[0.6em] max-w-[71ch] pt-[0.5em] text-center text-[16px] font-medium sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]">
          SOMETIMES A COMMUNITY IS AT THE BEGINNING OF A JOURNEY AND/OR IS
          SMALL. EVEN IF THEY VOTE HARD, THEY CAN’T REACH THE LEADERBOARD.
        </p>

        <p className="text-dark mx-auto mb-[0.6em] max-w-[71ch] pt-[0.5em] text-center text-[16px] font-medium sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]">
          SOMETIMES DEVS NEED MORE. EXTRA VOTES OR FIXED TRENDING POSITION
          POSSIBLE? YES!
        </p>

        <div className="flex flex-col items-center gap-[2em] lg:flex-row lg:items-stretch">
          <div className="border-dark text-dark flex w-fit flex-col items-center gap-[0.2em] rounded-[1em] border-[0.2em] bg-[#FFFFDF] p-[2em] text-center shadow-[0.3em_0.3em_var(--color-dark)]">
            <p className="section-title text-[40px] text-[#FFEC00] uppercase sm:text-[55px] md:text-[70px] lg:text-[85px] xl:text-[100px] 2xl:text-[115px]">
              Boost it!
            </p>

            <p className="text-[15px] font-medium sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              YOU CAN ORDER EXTRA AMOUNT OF VOTES FOR YOUR TOKEN USING THE VOTE
              BOOST AGENT.
            </p>

            <p className="text-[15px] font-medium sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              THERE ARE 100/300/1000/5000 VOTE PACKAGES
            </p>

            <ul className="list-inside list-disc text-[15px] font-medium sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              <p>PERKS:</p>
              <li>
                BOOSTED VOTES ARE VALID 12 HOURS LONG. [NORMAL VOTES ONLY 6
                HOURS]
              </li>
              <li>
                BOOSTED VOTES APPLY ALL AT ONCE, SO ENTERING LEADERBOARD TOP 10
                IS INSTANT
              </li>
            </ul>

            <p className="mb-[1em] text-[15px] font-medium sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              BOOST CAN BE ORDERED USING $WTFO TOKENS. WTFTRENDINGBOT
              AUTOMATICALY CALCULATES HOW MANY $WTFO NEED TO BE USED FOR
              BOOSTING
            </p>

            <div className="mt-auto flex flex-col gap-[1em] sm:flex-row">
              <Link href="https://t.me/wtfinfosuite/3">
                <PrimaryButton
                  buttonText="Learn more"
                  className="w-full text-[14px] sm:w-auto sm:text-[16px] md:text-[18px] lg:text-[19.5px] xl:text-[21px] 2xl:text-[23px]"
                />
              </Link>
              <Link href="https://t.me/WTFTrendingBot?start=boost">
                <PrimaryButton
                  buttonText="Boost a token"
                  className="w-full text-[14px] sm:w-auto sm:text-[16px] md:text-[18px] lg:text-[19.5px] xl:text-[21px] 2xl:text-[23px]"
                />
              </Link>
            </div>
          </div>

          <div className="border-dark text-dark flex w-fit flex-col items-center gap-[0.2em] rounded-[1em] border-[0.2em] bg-[#FFFFDF] p-[2em] text-center shadow-[0.3em_0.3em_var(--color-dark)]">
            <p className="section-title text-[40px] text-[#FF0013] uppercase sm:text-[55px] md:text-[70px] lg:text-[85px] xl:text-[100px] 2xl:text-[115px]">
              Trend it!
            </p>

            <p className="text-[15px] font-medium sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              YOU CAN ORDER FIXED TRENDING SPOT FOR A CERTAIN TIMEFRAME USING
              THE TRENDING AGENT.
            </p>

            <p className="text-[15px] font-medium sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              THERE ARE 4H / 12H /24H OPTIONS AVAILABLE
            </p>

            <ul className="list-inside list-disc text-[15px] font-medium sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              <p>PERKS:</p>
              <li>
                FIX TRENDING TOKENS ENJOY ADVANTAGES IN FRONT OF NORMAL VOTES
                AND BOOSTED VOTES AS WELL. FIXED TRENDING TOKEN ARE ALLWAYS
                SHOWN ABOVE ALL OTHER TOKENS WITH A FLAME ICON.
              </li>
              <li>
                FIX TRENDING TOKENS ENTERING THE LEADERBOARD INSTANTLY AND STAY
                THERE AS LONG THE TRENDING INTERVAL WAS PAID.
              </li>
            </ul>

            <p className="mb-[1em] text-[15px] font-medium sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
              TRENDING CAN BE ORDERED VIA SOLANA PAYMENT.
            </p>

            <div className="mt-auto flex flex-col gap-[1em] sm:flex-row">
              <Link href="https://t.me/wtfinfosuite/3">
                <PrimaryButton
                  buttonText="Learn more"
                  className="w-full text-[14px] sm:w-auto sm:text-[16px] md:text-[18px] lg:text-[19.5px] xl:text-[21px] 2xl:text-[23px]"
                />
              </Link>
              <Link href="https://t.me/WTFTrendingBot?start=trend">
                <PrimaryButton
                  buttonText="Trend a token"
                  className="w-full text-[14px] sm:w-auto sm:text-[16px] md:text-[18px] lg:text-[19.5px] xl:text-[21px] 2xl:text-[23px]"
                />
              </Link>
            </div>
          </div>
        </div>
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

export default Section3;
