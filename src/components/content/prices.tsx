import Image from "next/image";
import React from "react";

const Prices = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="relative w-full p-[10px] border border-[#2024281A]  z-0 rounded-[56px]">
        <div className="relative w-full py-[140px] z-0 rounded-[56px] border border-[#2A33450A]">
          <svg className="absolute inset-0 w-full h-full opacity-50 z-10 rounded-[56px] bg-white">
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
          <div className="relative z-20">
  <div className="flex flex-col md:flex-row justify-center items-start px-4 pt-20 gap-6">

    <div className="w-[320px] p-6 bg-white border border-black/55 rounded-[30px] shadow-sm text-center flex flex-col">
      <h2 className="text-2xl font-medium leading-[60px] tracking-[-0.02em] text-[#263143]">
        ₺0
      </h2>
      <p className="font-normal leading-8 tracking-normal text-[#263143] text-[20px]">
        Ücretsiz
      </p>

      <ul className="mt-4 space-y-2 font-normal text-[14px] leading-[22px] tracking-normal text-[#202428] text-left flex-grow">
        <li className="flex space-x-[10px]">
          <Image src="/content/circle.svg" width={20} height={20} alt="circle" />
          <span>Detaylı Satış Rapor Yönetimi</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circle.svg" width={20} height={20} alt="circle" />
          <span>7/24 Destek</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circle.svg" width={20} height={20} alt="circle" />
          <span>7/24 Destek</span>
        </li>
      </ul>

      <button className="mt-[32px] w-full py-2 px-4 border border-gray-300 rounded-full text-[#263143] leading-[29px] text-lg font-normal hover:bg-gray-200 transition">
        Ücretsiz Kullanmaya Başla
      </button>
    </div>

    <div className="w-[320px] px-[30px] bg-[#00B46A] text-white rounded-2xl shadow-lg text-center flex flex-col">
      <h2 className="text-2xl pt-[50px] font-semibold">₺99,99</h2>
      <p className="opacity-80">1 Terminal Fiyatı</p>

      <ul className="text-left pt-[30px] space-y-2 pb-6 flex-grow">
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span>Detaylı Satış Rapor Yönetimi</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span>QR Menü Desteği</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span>7/24 Destek</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span>7/24 Destek</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span>7/24 Destek</span>
        </li>
        <li className="flex space-x-[10px]">
          <Image src="/content/circleWhite.svg" width={20} height={20} alt="circle2" />
          <span>7/24 Destek</span>
        </li>
      </ul>

      <button className="mt-[56px]  mb-[30px] w-full py-2 px-4 bg-white text-[#263143] leading-[29px] text-lg font-normal rounded-full hover:bg-gray-300 transition">
        Kullanmaya Başla
      </button>
    </div>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Prices;
