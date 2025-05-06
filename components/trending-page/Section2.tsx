import React from "react";
import Image from "next/image";
import Link from "next/link";

import bg from "@/public/images/trending-page/section-2/bg.jpg";
import PrimaryButton from "../ui/PrimaryButton";

const Section2 = () => {
  return (
    <section className="bg-light relative pt-[10vw]">
      <Image
        src={bg}
        alt="Background"
        className="absolute inset-0 size-full rounded-b-[40px] object-cover object-bottom select-none sm:rounded-b-[50px] md:rounded-b-[60px] lg:rounded-b-[70px] xl:rounded-b-[80px] 2xl:rounded-b-[90px]"
        placeholder="blur"
      />

      <div className="px-container relative container mx-auto">
        <p className="text-dark mx-auto mb-[0.6em] max-w-[44ch] pt-[0.5em] text-center text-[16px] font-medium sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]">
          GIVE YOUR COMMINITY THAT WHAT THE F… FEELING BY USING WTFTRENDINGBOT!
          LET YOUR COMMUNITY BE INVOLVED IN SPREADING THE WORD BY A SIMPLE TASK.
          VOTE FOR YOUR TOKEN. WTF TRENDING IS A VOTE FOR EXPOSURE SYSTEM ON
          TELEGRAM FOR DEVS, HOLDERS AND USERS. THE TOOL IS SIMPLE AS F…!
        </p>

        <div className="flex flex-col items-center justify-around gap-[2em] lg:flex-row lg:items-stretch">
          <div className="border-dark text-dark flex w-fit flex-col items-center gap-[0.2em] rounded-[1em] border-[0.2em] bg-[#FFFFDF] p-[2em] text-center shadow-[0.3em_0.3em_var(--color-dark)]">
            <p className="text-[1.8em] font-semibold italic">1</p>
            <p className="max-w-[37ch] text-[1.2em] font-bold lg:max-w-[24ch]">
              ADD WTFTRENDINGBOT TO YOUR TELEGRAM GROUP
            </p>
          </div>

          <div className="border-dark text-dark flex w-fit flex-col items-center gap-[0.2em] rounded-[1em] border-[0.2em] bg-[#FFFFDF] p-[2em] text-center shadow-[0.3em_0.3em_var(--color-dark)]">
            <p className="text-[1.8em] font-semibold italic">2</p>
            <p className="max-w-[37ch] text-[1.2em] font-bold lg:max-w-[24ch]">
              SET CONTRACT ADDRESS AND TELEGRAM LINK
            </p>
          </div>

          <div className="border-dark text-dark flex w-fit flex-col items-center gap-[0.2em] rounded-[1em] border-[0.2em] bg-[#FFFFDF] p-[2em] text-center shadow-[0.3em_0.3em_var(--color-dark)]">
            <p className="text-[1.8em] font-semibold italic">3</p>
            <p className="max-w-[37ch] text-[1.2em] font-bold lg:max-w-[24ch]">
              START UP THE VOTING AGENT AND KEEP YOUR COMMUNITY ENGAGED TO REACH
              ENOUGH VOTES TO GET PLACED ON THE TOP 10 LEADERBOARD.
            </p>
          </div>
        </div>

        <p className="text-dark mx-auto mt-[1em] mb-[3em] max-w-[44ch] text-center text-[16px] font-medium sm:mb-[4.5em] sm:text-[20px] md:text-[24px] lg:mb-[3em] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]">
          EASY HUH? THEN LET’S GO!
        </p>

        <div className="flex flex-col items-center justify-center gap-[1em] pb-[2em] sm:flex-row">
          <Link href="https://t.me/WTFTRENDINGBOT">
            <PrimaryButton
              buttonText="wtf tg bot"
              className="w-[21ch]"
              disabled
            />
          </Link>
          <Link href="https://t.me/WTFTRENDING">
            <PrimaryButton
              buttonText="wtf trend"
              className="w-[21ch]"
              disabled
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;
