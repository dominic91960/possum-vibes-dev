import React from "react";
import Image, { StaticImageData } from "next/image";

interface CarouelCardProps {
  name: string;
  img: StaticImageData;
  price: string;
}

const CarouelCard: React.FC<CarouelCardProps> = ({ name, img, price }) => {
  return (
    <article className="bg-light border-dark relative mx-auto flex w-[240px] flex-col justify-between overflow-hidden rounded-[24px] border-[0.1em] pb-[1.5em] shadow-[0.3em_0.3em_var(--color-dark)] sm:w-[270px] sm:rounded-[29px] md:w-[300px] md:rounded-[32px] lg:w-[330px] lg:rounded-[36px] xl:w-[360px] xl:rounded-[40px] 2xl:w-[390px] 2xl:rounded-[44px]">
      {/* Name */}
      <div className="bg-light text-dark absolute top-0 left-0 w-3/4 overflow-hidden rounded-br-full ps-[0.9em] pe-[1.1em] pt-[0.5em] pb-[0.3em] text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[26.5px] 2xl:text-[28px]">
        <p className="line-clamp-1 font-semibold">{name}</p>
      </div>

      {/* Image */}
      <div className="m-[1em] mb-0 overflow-hidden rounded-[24px] sm:rounded-[29px] md:rounded-[32px] lg:rounded-[36px] xl:rounded-[40px] 2xl:rounded-[44px]">
        <Image
          src={img}
          alt={name}
          className="aspect-[5/4] w-full object-cover object-center select-none"
        />
      </div>

      <p className="text-dark my-[1em] px-[1.5em]">
        The unique Possum Gang. Collect these beasties and enjoy the perks of
        holding like revenue share boost of WTFO token for holders and/or
        trending/boost discount for devs. Join our telegram community to learn
        more!
      </p>

      {/* Price */}
      <div className="text-dark ms-[1em] flex items-center gap-[1em]">
        <p className="text-[18px] font-semibold sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[26.5px] 2xl:text-[28px]">
          Current price :
        </p>
      </div>

      <div className="bg-primary text-dark ms-auto mt-[0.3em] rounded-l-full px-[1em] pt-[0.2em] pb-[0.1em] text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[25px] 2xl:text-[26px]">
        <p>
          {price}&nbsp;
          <span className="font-anton text-[0.6em] text-white text-shadow-[0.05em_0.05em_black]">
            SOL
          </span>
          &nbsp;+ 0.025&nbsp;
          <span className="font-anton text-[0.6em] text-white text-shadow-[0.05em_0.05em_black]">
            SOL FEE
          </span>
        </p>
      </div>
    </article>
  );
};

export default CarouelCard;
