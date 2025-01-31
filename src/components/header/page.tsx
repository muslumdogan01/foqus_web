"use client";

import React from "react";
import Menu from "./menu";
import HeroSection from "./heroSection";

const Header = () => {
  return (
    <div className="relative w-full h-screen 2xl:h-auto ">
      <div
        className="bg-no-repeat bg-center w-full h-full absolute inset-y-0 right-0"
        style={{
          backgroundImage: "url(/header/gradient.png)",
        }}
      ></div>
      <div
        className="bg-no-repeat bg-cover bg-center absolute w-2/3 2xl:w-[50%] right-0 h-screen "
        style={{
          backgroundImage: "url(/header/phone2.png)",
        }}
      ></div>
      <Menu />
      <HeroSection />
    </div>
  );
};

export default Header;
