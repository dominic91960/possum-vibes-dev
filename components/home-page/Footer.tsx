import React from "react";
import Image from "next/image";
import Link from "next/link";

import bg from "@/public/images/home-page/footer/bg.png";

const Footer = () => {
  return (
    <section className="bg-secondary relative pt-[5vw]">
      <div className="px-container text-dark relative container mx-auto text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]">
        <Image
          src={bg}
          alt="Possum"
          className="mx-auto w-3/5 object-cover object-center select-none"
        />

        <Link
          href="mailto:contact@wtf.com"
          className="absolute bottom-[1em] left-[1em] text-shadow-[0.05em_0.05em_white] lg:text-shadow-none"
        >
          contact@wtf.com
        </Link>

        <p className="absolute right-[1em] bottom-[1em] text-shadow-[0.05em_0.05em_white] lg:text-shadow-none">
          All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
