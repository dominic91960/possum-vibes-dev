import React from "react";

import Hero from "@/components/home-page/Hero";
import About from "@/components/home-page/About";
import HowToBuy from "@/components/home-page/HowToBuy";
import Collection from "@/components/home-page/Collection";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <HowToBuy />
      <Collection />
      <div className="h-[20dvh]"></div>
    </main>
  );
};

export default HomePage;
