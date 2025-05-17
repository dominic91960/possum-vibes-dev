import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";

import SectionTitle from "./SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";
import CopyCode from "./CopyCode";
import bg from "@/public/images/home-page/tokenomics/bg.jpg";
import cloud from "@/public/images/home-page/tokenomics/cloud.png";
import CoinGeckoIcon from "../ui/CoinGeckoIcon";

const Tokenomics = () => {
  return (
    <section className="relative overflow-x-clip pt-[6vw]">
      <Image
        src={bg}
        alt="Tokenomics"
        className="absolute inset-0 size-full object-cover object-bottom select-none"
      />
      <div className="absolute right-0 bottom-0 left-0 h-[40%] bg-gradient-to-t from-[#767272] to-transparent"></div>

      <div className="px-container relative container mx-auto pb-[12%] text-center lg:pb-[10%]">
        <SectionTitle text="Tokenomics" className="mb-[0.1em] pt-[0.7em]" />
        <p className="overflow-hidden text-[16px] font-bold text-shadow-[0.1em_0.1em_var(--color-dark)] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]">
          8C4RygkxmePm9ys1qCcAB46dUCXNQYTaqfxS5mBrpump
        </p>

        <CopyCode />

        <div className="mb-[3em] flex flex-col items-center justify-between gap-[1em] sm:flex-row">
          <PrimaryButton
            buttonText="Ticker: $wtfo"
            className="w-[10em] cursor-default bg-[#E59D6F] px-0"
            disabled
          />
          <PrimaryButton
            buttonText="Tax: 0%"
            className="w-[10em] cursor-default bg-[#FFFBD2] px-0"
            disabled
          />
          <PrimaryButton
            buttonText="Lp: burned"
            className="w-[10em] cursor-default px-0"
            disabled
          />
        </div>

        <div className="flex flex-wrap justify-center gap-x-[4em] gap-y-[1em]">
          <Link
            href="https://www.coingecko.com/en/coins/wtf-opossum"
            target="_blank"
          >
            <PrimaryButton
              className="flex size-[3em] items-center justify-center rounded-full bg-white p-0 shadow-[0.06em_0.06em_0_var(--color-dark)] md:size-[2.4em]"
              spanStyle="bg-primary"
            >
              <CoinGeckoIcon />
            </PrimaryButton>
          </Link>

          <Link
            href="https://coinmarketcap.com/currencies/wtf-opossum/"
            target="_blank"
          >
            <PrimaryButton
              className="flex size-[3em] items-center justify-center rounded-full bg-white p-0 shadow-[0.06em_0.06em_0_var(--color-dark)] md:size-[2.4em]"
              spanStyle="bg-primary"
            >
              <SiCoinmarketcap className="text-[1.5em] sm:text-[1.3em]" />
            </PrimaryButton>
          </Link>

          <Link href="https://t.me/wtfopossum" target="_blank">
            <PrimaryButton
              className="flex size-[3em] items-center justify-center rounded-full bg-white p-0 shadow-[0.06em_0.06em_0_var(--color-dark)] md:size-[2.4em]"
              spanStyle="bg-primary"
            >
              <FaTelegramPlane className="text-[1.3em] sm:text-[1.1em]" />
            </PrimaryButton>
          </Link>

          <Link
            href="https://www.tiktok.com/@wtfopossum?_t=ZN-8urzaoLuVuc&_r=1"
            target="_blank"
          >
            <PrimaryButton
              className="flex size-[3em] items-center justify-center rounded-full bg-white p-0 shadow-[0.06em_0.06em_0_var(--color-dark)] md:size-[2.4em]"
              spanStyle="bg-primary"
            >
              <FaTiktok className="text-[1.3em] sm:text-[1.1em]" />
            </PrimaryButton>
          </Link>

          <Link href="https://x.com/wtfopossum" target="_blank">
            <PrimaryButton
              className="flex size-[3em] items-center justify-center rounded-full bg-white p-0 shadow-[0.06em_0.06em_0_var(--color-dark)] md:size-[2.4em]"
              spanStyle="bg-primary"
            >
              <FaXTwitter className="text-[1.3em] sm:text-[1.1em]" />
            </PrimaryButton>
          </Link>

          <Link href="https://discord.gg/39NzUafTYe" target="_blank">
            <PrimaryButton
              className="flex size-[3em] items-center justify-center rounded-full bg-white p-0 shadow-[0.06em_0.06em_0_var(--color-dark)] md:size-[2.4em]"
              spanStyle="bg-primary"
            >
              <FaDiscord className="text-[1.3em] sm:text-[1.1em]" />
            </PrimaryButton>
          </Link>
        </div>
      </div>

      <Image
        src={cloud}
        alt="Cloud"
        className="absolute bottom-0 left-0 z-[21] w-[55%] -translate-x-[5%] translate-y-1/2 object-cover object-center select-none"
      />
      <Image
        src={cloud}
        alt="Cloud"
        className="absolute right-0 bottom-0 z-[21] w-[55%] translate-x-[5%] translate-y-1/2 object-cover object-center select-none"
      />
    </section>
  );
};

export default Tokenomics;
