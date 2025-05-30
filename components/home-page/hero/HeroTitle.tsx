"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const HeroTitle = () => {
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
      initial={{ opacity: 0, scale: 0.3 }}
      animate={
        contentLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }
      }
      transition={{ bounce: 0.3, delay: 1, duration: 3, type: "spring" }}
      style={{ y }}
      className="hero-title absolute inset-0 m-auto size-fit -translate-y-[20%] text-center text-[50px] whitespace-break-spaces uppercase italic select-none sm:text-[75px] md:text-[100px] lg:text-[125px] xl:text-[150px] 2xl:text-[175px]"
    >
      <p>
        {"$WTFO".split("").map((e, i) => (
          <motion.span
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ bounce: 0.5, duration: 1, type: "spring" }}
            key={i}
            className="inline-block"
          >
            {e}
          </motion.span>
        ))}
      </p>
      <p>
        {"Possum Vibes".split("").map((e, i) => (
          <motion.span
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ bounce: 0.5, duration: 1, type: "spring" }}
            key={i}
            className="inline-block"
          >
            {e}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

export default HeroTitle;
