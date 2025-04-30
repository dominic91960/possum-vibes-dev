"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import bottomCloud from "@/public/images/home-page/hero/cloud.png";

const LeftCloud = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [transform, setTransform] = useState("-60px");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportHeight(window.innerHeight);
    }

    const setTransformValue = () => {
      const width = window.innerWidth;

      if (width >= 640) {
        setTransform("-120px");
      }
    };

    setTransformValue();
    addEventListener("resize", setTransformValue);

    return () => removeEventListener("resize", setTransformValue);
  }, []);

  const { scrollY } = useScroll();
  const ySpring = useSpring(scrollY);
  const y = useTransform(ySpring, [0, viewportHeight], ["0px", transform]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "-20%" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0, once: true }}
      transition={{ delay: 1.5, duration: 0.7 }}
      style={{ y }}
      className="absolute bottom-0 left-0 z-[1] w-[55%] -translate-x-[5%] translate-y-1/2"
    >
      <Image
        src={bottomCloud}
        alt="Cloud"
        className="w-full object-cover object-center select-none"
      />
    </motion.div>
  );
};

export default LeftCloud;
