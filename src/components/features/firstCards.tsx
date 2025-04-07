import Image from "next/image";
import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  subTitle: ReactNode;
  image1: string;
  image2: string;
}

const Card: React.FC<CardProps> = ({ title, subTitle, image1, image2 }) => {
  return (
    <div
      className="rounded-[30px] deneme inline-flex flex-col w-[606px] h-[500px] px-10 justify-end pb-10 "
      style={{
        backgroundImage: "url(/content/dotss.png)",
      }}
    >
<div className="w-full flex justify-center items-start  h-[235px] ">
  <Image
    src={image1}
    alt="card visual"
    width={326}
    height={228}
    className="object-contain max-h-[235px] "
  />
</div>
      <Image
        src={image2}
        width={50}
        height={50}
        alt="card icon"
        className="mb-4"
      />
      <h1 className="text-[32px] leading-[44.8px] text-left tracking-[-0.02em] text-[#202428] font-medium relative z-50">
        {title}
      </h1>
      <p className="text-[16px] 2xl:text-[24px] leading-[26.6px] text-left text-[#202428] font-normal  relative z-50">
        {subTitle}
      </p>
    </div>
  );
};

export default Card;
