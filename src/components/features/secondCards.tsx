import Image from "next/image";
import React, { ReactNode } from "react";
interface CardProps {
  title: ReactNode;
  image: string;
  icon: string;
}
const secondCards: React.FC<CardProps> = ({ title, image, icon }) => {
  return (
    <div className="rounded-[30px] justify-center items-center  inline-flex  flex-col deneme  md:w-[396px] md:h-[500px] w-[343px] h-[250px]">
      <div className="w-full md:flex hidden justify-center items-center">
      <Image
        src={image}
        alt="svg1"
        width={230}
        height={230}
        className="flex justify-center items-center mt-[25px] transition-transform duration-500 ease-in-out hover:scale-110 "
      />
      </div>
    <div className="md:px-10 md:space-y-5 flex flex-col justify-center items-center md:justify-start md:items-start">
    <Image src={icon} alt="svg1" width={60} height={60} className="" />
      <h1 className="text-[32px] leading-[44.8px] tracking-[-0.02em] text-center md:text-left text-[#202428] font-medium ">
        {title}
      </h1>
    </div>
    </div>
  );
};

export default secondCards;
