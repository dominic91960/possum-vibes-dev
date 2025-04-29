import React from "react";

import Hero from "@/components/home-page/Hero";
import About from "@/components/home-page/About";
import HowToBuy from "@/components/home-page/HowToBuy";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <HowToBuy />
      <div className="h-[20dvh]"></div>
    </main>
  );
};

export default HomePage;
