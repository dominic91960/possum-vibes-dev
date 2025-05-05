import React from "react";

import Section1 from "@/components/trending-page/Section1";
import Section2 from "@/components/trending-page/Section2";
import Section3 from "@/components/trending-page/Section3";

const TrendingPage = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="h-[500px]"></div>
    </main>
  );
};

export default TrendingPage;
