"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import imgOne from "@/public/images/home-page/hero/possom1.png";
import imgTwo from "@/public/images/home-page/hero/possom2.png";

const HeroImageGrid = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [transform, setTransform] = useState("-40px");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportHeight(window.innerHeight);
    }

    const setTransformValue = () => {
      const width = window.innerWidth;

      if (width >= 640) {
        setTransform("-80px");
      }
    };

    setTransformValue();
    addEventListener("resize", setTransformValue);

    return () => removeEventListener("resize", setTransformValue);
  }, []);

  const { scrollY } = useScroll();
  const ySpring = useSpring(scrollY, { damping: 30 });
  const y = useTransform(ySpring, [0, viewportHeight], ["0px", transform]);

  return (
    <div className="relative grid w-[72%] grid-cols-1 sm:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: "-20%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        style={{ y }}
      >
        <Image
          src={imgOne}
          alt="Possom"
          className="object-cover object-center select-none"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "20%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        style={{ y }}
      >
        <Image
          src={imgTwo}
          alt="Possom"
          className="hidden object-cover object-center select-none sm:block"
          priority
        />
      </motion.div>
    </div>
  );
};

export default HeroImageGrid;
