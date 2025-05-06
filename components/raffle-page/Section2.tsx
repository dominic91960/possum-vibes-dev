"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "@/public/images/raffle-page/section-2/1.jpg";
import img2 from "@/public/images/raffle-page/section-2/2.jpg";
import img3 from "@/public/images/raffle-page/section-2/3.jpg";
import img4 from "@/public/images/raffle-page/section-2/4.jpg";
import img5 from "@/public/images/raffle-page/section-2/5.jpg";
import img6 from "@/public/images/raffle-page/section-2/6.jpg";
import img7 from "@/public/images/raffle-page/section-2/7.jpg";
import img8 from "@/public/images/raffle-page/section-2/8.jpg";
import img9 from "@/public/images/raffle-page/section-2/9.jpg";
import img10 from "@/public/images/raffle-page/section-2/10.jpg";
import img11 from "@/public/images/raffle-page/section-2/11.jpg";
import img12 from "@/public/images/raffle-page/section-2/12.jpg";
import img13 from "@/public/images/raffle-page/section-2/13.jpg";
import img14 from "@/public/images/raffle-page/section-2/14.jpg";
import img15 from "@/public/images/raffle-page/section-2/15.jpg";
import img16 from "@/public/images/raffle-page/section-2/16.jpg";
import img17 from "@/public/images/raffle-page/section-2/17.jpg";
import img18 from "@/public/images/raffle-page/section-2/18.jpg";
import img19 from "@/public/images/raffle-page/section-2/19.jpg";
import img20 from "@/public/images/raffle-page/section-2/20.jpg";
import seperator from "@/public/images/trending-page/section-3/seperator.svg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

const Section2 = () => {
  const [selectedImg, setSelectedImg] = useState<StaticImageData | null>(null);

  const openModal = (img: StaticImageData) => {
    document.body.classList.add("overflow-hidden");
    setSelectedImg(img);
  };

  const closeModal = () => {
    document.body.classList.remove("overflow-hidden");
    setSelectedImg(null);
  };

  return (
    <section className="bg-light relative overflow-x-clip pt-[10vw]">
      <div className="px-container relative container mx-auto pb-[2em]">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          speed={1000}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ pauseOnMouseEnter: true }}
        >
          {images.map((e, i) => (
            <SwiperSlide key={e.src}>
              <div className="relative mx-auto flex w-fit flex-col items-center px-[44px] pb-[15px]">
                <p className="text-[2em] font-black text-black uppercase">
                  Step {i + 1}/20
                </p>
                <Image
                  src={e}
                  alt={`img${i + 1}`}
                  className="cursor-pointer object-contain"
                  priority
                  placeholder="blur"
                  onClick={() => openModal(e)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <Image
            src={selectedImg}
            alt="Full size"
            className="relative h-[95dvh] w-fit object-contain"
            placeholder="blur"
          />

          <div className="px-container pointer-events-none absolute top-0 right-0 left-0 container mx-auto flex h-fit justify-end">
            <button
              onClick={closeModal}
              className="pointer-events-auto text-[4em] text-white"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Image
        src={seperator}
        alt="Vector"
        className="absolute top-full right-0 left-0 w-full -translate-y-1/2 scale-105 select-none"
        style={{
          clipPath: "polygon(0 7%, 100% 7%, 100% 100%, 0 100%",
        }}
      />
    </section>
  );
};

export default Section2;
