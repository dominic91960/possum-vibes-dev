import React from "react";

import Hero from "@/components/home-page/Hero";
import About from "@/components/home-page/About";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <div className="h-[20dvh]"></div>
    </main>
  );
};

export default HomePage;
