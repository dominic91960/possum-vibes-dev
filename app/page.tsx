import React from "react";
import Link from "next/link";

import Hero from "@/components/home-page/hero/Hero";
import About from "@/components/home-page/About";
import Mint from "@/components/home-page/Mint";
import HowToBuy from "@/components/home-page/HowToBuy";
// import Collection from "@/components/home-page/Collection";
import Tokenomics from "@/components/home-page/Tokenomics";
import Footer from "@/components/home-page/Footer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RevenueShare from "@/components/home-page/RevenueShare";

const HomePage = () => {
  return (
    <main>
      <Link
        href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=8C4RygkxmePm9ys1qCcAB46dUCXNQYTaqfxS5mBrpump&fixed=in&inputMint=sol&outputMint=8C4RygkxmePm9ys1qCcAB46dUCXNQYTaqfxS5mBrpump"
        target="_blank"
        className="fixed right-0 bottom-[3em] left-0 z-10 mx-auto w-fit text-[16px] sm:bottom-[1em] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]"
      >
        <PrimaryButton buttonText="buy $wtfo" className=" " />
      </Link>
      <Hero />
      <About />
      <Mint />
      <HowToBuy />
      <RevenueShare />
      {/* <Collection /> */}
      <Tokenomics />
      <Footer />
    </main>
  );
};

export default HomePage;
