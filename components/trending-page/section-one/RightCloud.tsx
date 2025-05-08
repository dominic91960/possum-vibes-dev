"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import bottomCloud from "@/public/images/home-page/hero/cloud.png";

const RightCloud = () => {
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
    <motion.div
      initial={{ opacity: 0, x: "20%" }}
      animate={contentLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: "20%" }}
      transition={{ delay: 0.25, duration: 1 }}
      style={{ y }}
      className="absolute right-0 bottom-0 z-[1] w-[55%] translate-x-[5%] translate-y-1/2"
    >
      <Image
        src={bottomCloud}
        alt="Cloud"
        className="object-cover object-center select-none"
        priority
      />
    </motion.div>
  );
};

export default RightCloud;
