import React from "react";

import Section1 from "@/components/raffle-page/section-1/Section1";
import Section2 from "@/components/raffle-page/Section2";
import Footer from "@/components/trending-page/Footer";

const RafflePage = () => {
  return (
    <main className="relative z-[1]">
      <Section1 />
      <Section2 />
      <Footer />
    </main>
  );
};

export default RafflePage;
