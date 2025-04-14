import Image from "next/image";
import React, { ReactNode } from "react";
interface CardProps {
  title: ReactNode;
  image: string;
  icon: string;
}
const secondCards: React.FC<CardProps> = ({ title, image, icon }) => {
  return (
    <div className="rounded-[30px] inline-flex flex-col deneme  w-[396px] h-[500px] ">
      <div className="w-full flex justify-center items-center">
      <Image
        src={image}
        alt="svg1"
        width={336}
        height={208}
        className="flex justify-center items-center mt-[25px] transition-transform duration-500 ease-in-out hover:scale-110 "
      />
      </div>
    <div className="px-10 space-y-5">
    <Image src={icon} alt="svg1" width={60} height={60} className="" />
      <h1 className="text-[32px] leading-[44.8px] tracking-[-0.02em] text-left text-[#202428] font-medium ">
        {title}
      </h1>
    </div>
    </div>
  );
};

export default secondCards;
