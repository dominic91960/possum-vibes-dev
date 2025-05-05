"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import possom from "@/public/images/trending-page/section-1/possom.png";

const MainImage = () => {
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
    <motion.div
      className="mx-auto w-1/2 rotate-y-180 overflow-clip sm:w-2/5"
      style={{ y }}
    >
      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={possom}
          alt="Possum"
          className="object-contain object-center"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default MainImage;
