"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import possom1 from "@/public/images/home-page/hero/possom1.png";
import possom2 from "@/public/images/home-page/hero/possom2.png";

const HeroImageGrid = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [transform, setTransform] = useState("-20px");

  useEffect(() => {
    const handleContentLoad = () => {
      setContentLoaded(true);
    };

    const setTransformValue = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth >= 640) setTransform("-40px");

      setViewportHeight(window.innerHeight);
    };

    setTransformValue();
    handleContentLoad();
    addEventListener("resize", setTransformValue);

    return () => removeEventListener("resize", setTransformValue);
  }, []);

  const { scrollY } = useScroll();
  const ySpring = useSpring(scrollY, { damping: 30 });
  const y = useTransform(ySpring, [0, viewportHeight], ["0px", transform]);

  return (
    <div className="relative grid w-[60%] grid-cols-1 gap-[10%] sm:w-[66%] sm:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: "-20%" }}
        animate={
          contentLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: "-20%" }
        }
        transition={{ delay: 2, duration: 1.5 }}
        style={{ y }}
      >
        <Image
          src={possom1}
          alt="Possom"
          className="object-cover object-center select-none"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "20%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1.5 }}
        style={{ y, rotateY: 180 }}
      >
        <Image
          src={possom2}
          alt="Possom"
          className="hidden object-cover object-center select-none sm:block"
          priority
        />
      </motion.div>
    </div>
  );
};

export default HeroImageGrid;
