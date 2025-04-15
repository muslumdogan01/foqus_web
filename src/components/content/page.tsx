import React from "react";
import ImageGrid from "./imageGrid";
import Directions from "./directions";
import Prices from "./prices";
import GetStart from "./getStart";
import MobileImageSlider from "./mobileImageSlider";
import MobileDirectionSlider from "./mobileDirections";

const Content = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center flex-col pt-[100px] md:pt-[300px]  relative">
        <div
          className="bg-no-repeat bg-center w-full h-full absolute hidden md:block"
          style={{
            backgroundImage: "url(/content/dots.png)",
          }}
        ></div>
        <h1 className="md:text-[80px] text-[40px] tracking-[-0.02em] text-[#202428] font-medium md:leading-[1.2] leading-[1.4] text-center">
          Her sektöre <br /> kolayca entegre <br /> satış çözümü!
        </h1>
        <p className="text-center pt-[40px] text-lg 2xl:text-2xl px-10 md:px-0 leading-[28px] text-[#202428]">
          Her sektöre uyarlanabilen bu çözümle, satış süreçlerinizi tek
          platformda yönetin. <br /> Stok takibinden siparişe, her adımda
          kolaylık sağlar...
        </p>
      </div>
      <ImageGrid />
      <MobileImageSlider/>
      <MobileDirectionSlider/>
      <Directions />
      <Prices />
      <GetStart/>
    </div>
  );
};

export default Content;
