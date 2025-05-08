"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import money from "@/public/images/bill.png";

type Bill = {
  id: number;
  scale: number;
  left: number;
  duration: number;
  zIndex: number;
  rotate: number;
};

const generateBill = (id: number): Bill => ({
  id,
  scale: Math.random() * 0.5 + 0.5,
  left: Math.random() * 90,
  duration: Math.random() * 3 + 8,
  zIndex: Math.floor(Math.random() * 50) + 50,
  rotate: Math.floor(Math.random() * 720) - 360,
});

const MoneyRain = () => {
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setBills((prev) => {
          const next = [...prev];
          if (next.length < 3) {
            next.push(generateBill(Date.now()));
          }
          return next;
        });
      },
      Math.random() * 2000 + 4000,
    );

    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = (id: number) => {
    setBills((prev) => prev.filter((bill) => bill.id !== id));
  };

  const { scrollYProgress } = useScroll();
  const ySpring = useSpring(scrollYProgress, { damping: 30 });
  const y = useTransform(ySpring, [0, 1], ["0%", "-400%"]);

  return (
    <div className="h-vh pointer-events-none fixed inset-0 z-[99] overflow-hidden">
      {bills.map((bill) => (
        <motion.div
          key={bill.id}
          initial={{ top: "-10%", rotate: 0 }}
          animate={{ top: "140%", rotate: bill.rotate }}
          transition={{ duration: bill.duration, ease: "linear" }}
          onAnimationComplete={() => handleAnimationComplete(bill.id)}
          style={{
            position: "absolute",
            left: `${bill.left}%`,
            zIndex: bill.zIndex,
            scale: bill.scale,
            height: "auto",
            y,
          }}
        >
          <Image
            src={money}
            alt="Dollar bill"
            className="w-[60px] select-none sm:w-[65px] md:w-[70px] lg:w-[75px] xl:w-[77px] 2xl:w-[80px]"
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MoneyRain;
