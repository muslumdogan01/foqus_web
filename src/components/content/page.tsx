import React from "react";
import ImageGrid from "./imageGrid";
import Directions from "./directions";
import Prices from "./prices";

const Content = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center flex-col pt-[300px]  relative">
        <div
          className="bg-no-repeat bg-center w-full h-full absolute "
          style={{
            backgroundImage: "url(/content/dots.png)",
          }}
        ></div>
        <h1 className="text-[80px] tracking-[-0.02em] text-[#202428] font-medium leading-[96px] text-center">
          Her sektöre <br /> kolayca entegre <br /> satış çözümü!
        </h1>
        <p className="text-center pt-[40px] text-lg leading-[28px] text-[#202428]">
          Her sektöre uyarlanabilen bu çözümle, satış süreçlerinizi tek
          platformda yönetin. <br /> Stok takibinden siparişe, her adımda
          kolaylık sağlar...
        </p>
      </div>
      <ImageGrid />
      <Directions/>
      <Prices/>
    </div>
  );
};

export default Content;
