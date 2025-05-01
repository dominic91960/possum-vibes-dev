"use client";

import React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  text: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  className = "",
}) => {
  return (
    <motion.h2
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, margin: "0px 0px -20% 0px", once: true }}
      transition={{ staggerChildren: 0.05 }}
      className={cn(
        "section-title text-[40px] font-black whitespace-break-spaces uppercase italic sm:text-[55px] md:text-[70px] lg:text-[85px] xl:text-[100px] 2xl:text-[115px]",
        className,
      )}
    >
      {text.split("").map((e, i) =>
        e === "_" ? (
          <br key={i} />
        ) : (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              bounce: 0.6,
              duration: 2,
              type: "spring",
            }}
            className="inline-block"
          >
            {e}
          </motion.span>
        ),
      )}
    </motion.h2>
  );
};

export default SectionTitle;
