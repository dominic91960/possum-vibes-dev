"use client";

import React from "react";
import Image from "next/image";

import topRightCloud from "@/public/images/home-page/hero/cloud-tr.png";

const TopCloud = () => {
  return (
    <Image
      src={topRightCloud}
      alt="Colud"
      className="absolute top-0 right-0 w-[200px] object-cover object-center select-none sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[400px]"
      placeholder="blur"
    />
  );
};

export default TopCloud;
