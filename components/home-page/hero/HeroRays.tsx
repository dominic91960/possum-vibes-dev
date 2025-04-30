"use client";

import React from "react";
import Image from "next/image";
// import { motion } from "motion/react";

import rays from "@/public/images/home-page/hero/rays.svg";

const HeroRays = () => {
  return (
    // <div className="absolute inset-0 overflow-clip">
    //   <motion.div
    //     animate={{
    //       rotate: [0, 360],
    //     }}
    //     transition={{
    //       duration: 360,
    //       ease: "linear",
    //       repeat: Infinity,
    //     }}
    //     className="size-full scale-[300%]"
    //   >
    //     <Image
    //       src={rays}
    //       alt="rays"
    //       className="size-full object-cover object-center select-none"
    //       priority
    //     />
    //   </motion.div>
    // </div>

    <Image
      src={rays}
      alt="rays"
      className="absolute inset-0 size-full scale-[300%] overflow-clip object-cover object-center select-none"
      priority
    />
  );
};

export default HeroRays;
