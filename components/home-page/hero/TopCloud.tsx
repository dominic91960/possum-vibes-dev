"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

import topRightCloud from "@/public/images/home-page/hero/cloud-tr.png";

const TopCloud = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0, once: true }}
      transition={{ bounce: 0.4, delay: 2, duration: 1.3, type: "spring" }}
      className="absolute top-0 right-0"
    >
      <Image
        src={topRightCloud}
        alt="Colud"
        className="w-[200px] object-cover object-center select-none sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[400px]"
      />
    </motion.div>
  );
};

export default TopCloud;
