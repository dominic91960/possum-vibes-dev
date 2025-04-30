import React from "react";

import Hero from "@/components/home-page/hero/Hero";
import About from "@/components/home-page/About";
import HowToBuy from "@/components/home-page/HowToBuy";
import Collection from "@/components/home-page/Collection";
import Tokenomics from "@/components/home-page/Tokenomics";
import Footer from "@/components/home-page/Footer";
import PrimaryButton from "@/components/ui/PrimaryButton";

const HomePage = () => {
  return (
    <main>
      <PrimaryButton
        buttonText="buy $wtfo"
        className="fixed right-0 bottom-[3em] left-0 z-50 mx-auto sm:bottom-[1em]"
      />
      <Hero />
      <About />
      <HowToBuy />
      <Collection />
      <Tokenomics />
      <Footer />
    </main>
  );
};

export default HomePage;
