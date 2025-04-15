import Image from "next/image";
import React from "react";
import FAQSection from "./faq";

const Prices = () => {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="relative w-full p-[10px] lg:border lg:border-[#2024281A]  z-0 rounded-[56px]">
        <div className="relative w-full py-[140px] z-0 lg:rounded-[56px] lg:border lg:border-[#2A33450A]">
          <svg className="absolute inset-0 hidden md:block w-full h-full opacity-50 z-10 rounded-[56px] bg-white">
            <defs>
              <linearGradient id="dotsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(0, 0, 0, 0.1)" />
                <stop offset="25%" stopColor="rgba(42, 51, 69, 0.15)" />
                <stop offset="50%" stopColor="rgba(42, 51, 69, 0.2)" />
                <stop offset="100%" stopColor="rgba(42, 51, 69, 0.25)" />
              </linearGradient>
            </defs>

            <pattern
              id="dots"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
              patternTransform="translate(10, 10)"
            >
              <circle cx="10" cy="10" r="1.5" fill="url(#dotsGradient)" />
            </pattern>

            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>

          <div className=" w-full flex flex-col justify-center items-center relative z-20 text-center">
            <h1 className="font-medium text-[80px] leading-[96px] tracking-[-0.02em] text-center">
              Fiyatlar
            </h1>
            <p className="font-normal text-lg leading-7 tracking-normal text-center pt-[10px] text-[#202428]">
              FoqusPOS, her boyuttaki işletme için mükemmeldir. Ücretsiz olarak
              başla.
            </p>
          </div>
          <div className="relative z-20 w-full lg:flex-row flex-col flex justify-center items-center">
  <div className="w-full lg:flex-row flex-col flex  justify-center items-center pt-20 gap-12 mx-36">

    <div className="lg:w-[500px] w-[343px] h-[526px] px-[30px] bg-[#00B46A] text-white rounded-[30px] border-2 border-black/10 shadow-lg text-center flex flex-col">
      <h2 className="text-[40px] pt-[50px] font-bold leading-[1.5] tracking-[0.02em]">₺0,00</h2>
      <p className="opacity-80 leading-[1.6] tracking-normal">Sınırsız Terminal Fiyatı</p>

      <ul className="text-left pt-[30px] space-y-2 pb-6 flex-grow">
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span className="tracking-normal leading-[1.6]">Detaylı Satış Rapor Yönetimi</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span className="tracking-normal leading-[1.6]">Farklı Ödeme Kanalları</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span className="tracking-normal leading-[1.6]">E-Mağaza Desteği</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span className="tracking-normal leading-[1.6]">7/24 Destek</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span className="tracking-normal leading-[1.6]">Gelişmiş Stok Yönetimi</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span className="tracking-normal leading-[1.6]">Ve Yüzlerce Özellik</span>
        </li>
      </ul>

      <button className=" mb-[30px] w-full py-[15px] px-4 bg-white text-[#263143] leading-[29px] text-lg font-normal rounded-full hover:bg-gray-300 transition">
        Kullanmaya Başla
      </button>
    </div>
    <FAQSection/>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Prices;
