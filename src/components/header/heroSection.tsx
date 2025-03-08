import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col">
          <h1 className="md:text-left text-center relative z-50 font-medium md:text-[64px] text-[40px] xl:mt-16 2xl:mt-36 md:leading-[96px] tracking-[-0.02em] text-[#202428]">
            İşletmenizi <br /> büyütmek için <br /> tek bir uygulama!
          </h1>
          <p className="relative md:text-left text-center  z-50 font-normal text-lg 2xl:text-2xl leading-[28px] text-[#202428] mt-5">
            Tablet veya akıllı telefon üzerinden ürün satışını <br /> kolayca
            yapın, mağazalarınızı yönetin, raporlayın <br /> ve büyümeye
            odaklanın.
          </p>
          <div className="md:text-left text-center ">
            <div className="group mt-[50px] cursor-pointer inline-flex bg-[#202428] rounded-[60px] space-x-[10px] py-[10px] px-[30px]">
              <span className="leading-7 text-lg font-normal text-white ">
                Get Started
              </span>
              <span className="leading-7 text-lg font-normal text-white transform transition-transform duration-300 ease-out group-hover:translate-x-2">
                <Image
                  src="/header/arrow.svg"
                  width={28}
                  height={28}
                  alt="arrow"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
