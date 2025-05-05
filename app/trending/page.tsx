import React from "react";

import Section1 from "@/components/trending-page/Section1";
import Section2 from "@/components/trending-page/Section-2";

const TrendingPage = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <div className="h-[500px]"></div>
    </main>
  );
};

export default TrendingPage;
