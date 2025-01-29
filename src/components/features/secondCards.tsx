import React, { ReactNode } from "react";
interface CardProps {
  title: ReactNode;
}
const secondCards: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="rounded-[30px] inline-flex flex-col deneme  w-[396px] h-[500px] px-10 justify-end pb-10 ">
      <h1 className="text-[32px] leading-[44.8px] tracking-[-0.02em] text-left text-[#202428] font-medium ">
        {title}
      </h1>
    </div>
  );
};

export default secondCards;
