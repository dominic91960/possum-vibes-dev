import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/trending-page/footer/footer.png";

const Footer = () => {
  return (
    <section className="bg-secondary sticky bottom-0 -z-[1] overflow-x-clip pt-[6vw]">
      <div className="px-container text-dark relative container mx-auto grid grid-cols-2 gap-[1em] py-[2em] text-[14px] font-medium min-[450px]:grid-cols-1 min-[450px]:gap-[1.5em] sm:text-[16px] md:text-[17.5px] lg:grid-cols-10 lg:items-end lg:gap-[2em] lg:text-[19px] xl:gap-[4em] xl:text-[20px] 2xl:gap-[6em] 2xl:text-[22px]">
        <div className="flex flex-col gap-[1em] min-[450px]:items-center lg:col-span-4">
          <div className="overflow-clip rounded-full">
            <Image
              src={logo}
              alt="Logo"
              className="size-[80px] sm:size-[94px] md:size-[108px] lg:size-[124px] xl:size-[150px] 2xl:size-[165px]"
            />
          </div>
          <p className="max-w-[28ch] min-[450px]:text-center">
            WTFO is a memecoin with no intrinsic value or expectation of
            financial return. The coin is for entertainment purposes only.
          </p>
        </div>

        <div className="mx-auto flex w-fit flex-col gap-[1.5em] min-[450px]:w-full min-[450px]:flex-row min-[450px]:justify-between lg:col-span-6">
          <ul className="list-inside list-disc space-y-[1em] lg:space-y-[0.2em]">
            <p className="min-[450px]:text-center lg:mb-[0.3em]">Socials</p>
            <li>
              <Link
                href="https://x.com/wtfopossum"
                target="_blank"
                className="hover:text-light focus:text-light underline"
              >
                X - Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me/wtfopossum"
                target="_blank"
                className="hover:text-light focus:text-light underline"
              >
                Telegram
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@wtfopossum?_t=ZN-8urzaoLuVuc&_r=1"
                target="_blank"
                className="hover:text-light focus:text-light underline"
              >
                TikTok
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.gg/39NzUafTYe"
                target="_blank"
                className="hover:text-light focus:text-light underline"
              >
                Discord
              </Link>
            </li>
          </ul>

          <ul className="list-inside list-disc space-y-[1em] lg:space-y-[0.2em]">
            <p className="min-[450px]:text-center lg:mb-[0.3em]">Listings</p>
            <li>
              <Link
                href="https://coinmarketcap.com/currencies/wtf-opossum/"
                target="_blank"
                className="hover:text-light focus:text-light underline"
              >
                Coinmarketcap
              </Link>
            </li>
            <li>
              <Link
                href="https://www.coingecko.com/en/coins/wtf-opossum"
                target="_blank"
                className="hover:text-light focus:text-light underline"
              >
                Coingecko
              </Link>
            </li>
            <li>
              <Link
                href="https://dexscreener.com/solana/fdgtcewamnmw5znhjj8ycnygbnzudqsuz8eh9ufr2bfy"
                target="_blank"
                className="hover:text-light focus:text-light underline"
              >
                Dexscreener
              </Link>
            </li>
            <li>
              <Link
                href="https://www.dextools.io/app/en/solana/pair-explorer/FDGTcewAmNmW5ZnhjJ8yCnYgbnZudqSUZ8EH9ufr2BFY?t=1742586653723"
                target="_blank"
                className="hover:text-light focus:text-light underline"
              >
                Dextools
              </Link>
            </li>
            <li>
              <Link
                href="/whitepaper"
                className="hover:text-light focus:text-light underline"
              >
                Whitepaper
              </Link>
            </li>
          </ul>

          <ul className="list-inside list-disc space-y-[1em] lg:space-y-[0.2em]">
            <p className="min-[450px]:text-center lg:mb-[0.3em]">
              Applications
            </p>
            <li>
              <Link
                href="https://t.me/wtftrendingbot"
                target="_blank"
                className="hover:text-light focus:text-light underline"
              >
                WTF Trending Bot
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me/wtftrending"
                target="_blank"
                className="hover:text-light focus:text-light underline"
              >
                WTF Trending Channel
              </Link>
            </li>
            <li className="ms-[2ch] list-none lg:mt-[0.4em]">
              <Link
                href="mailto:wtf@wtfo.online"
                target="_blank"
                className="hover:text-light focus:text-light"
              >
                wtf@wtfo.online
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
