import React from "react";

import Section1 from "@/components/whitepaper-page/section-1/Section1";
import Section2 from "@/components/whitepaper-page/Section2";
import Footer from "@/components/trending-page/Footer";

const WhitepaperPage = () => {
  return (
    <main className="relative z-[1]">
      <Section1 />
      <Section2 />
      <Footer />
    </main>
  );
};

export default WhitepaperPage;
