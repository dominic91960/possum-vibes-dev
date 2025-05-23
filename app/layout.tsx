import type { Metadata } from "next";
import { Anton, Grandstander } from "next/font/google";
import { MotionConfig } from "motion/react";

import MoneyRain from "@/components/ui/MoneyRain";
import SplashWrapper from "@/components/ui/SplashWrapper";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const grandstander = Grandstander({
  variable: "--font-grandstander",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WTFO Possum - Possum",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${grandstander.variable} font-main text-[12px] leading-[1.2] font-medium text-white antialiased sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]`}
      >
        <SplashWrapper>
          <MotionConfig transition={{ duration: 2, type: "spring" }}>
            {children}
          </MotionConfig>
          <MoneyRain />
          {/* <div id="grainy"></div> */}
        </SplashWrapper>
      </body>
    </html>
  );
}
