import React from "react";

import Section1 from "@/components/trending-page/section-one/Section1";
import Section2 from "@/components/trending-page/Section2";
import Section3 from "@/components/trending-page/Section3";
import Footer from "@/components/trending-page/Footer";

const TrendingPage = () => {
  return (
    <main className="relative z-[1]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  );
};

export default TrendingPage;
