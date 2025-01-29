import React, { ReactNode } from "react";
interface CardProps {
  title: string;
  subTitle: ReactNode; 
}
const Card: React.FC<CardProps> = ({ title, subTitle }) => {
  return (
    <div className="rounded-[30px] inline-flex flex-col deneme w-[606px] h-[500px] px-10 justify-end pb-10"

    >
      <h1 className="text-[32px] leading-[44.8px] text-left tracking-[-0.02em] text-[#202428] font-medium ">
        {title}
      </h1>
      <p className="text-[16px] 2xl:text-[24px] leading-[26.6px] text-left text-[#202428] font-normal  ">
        {subTitle}
      </p>
    </div>
  );
};

export default Card;
