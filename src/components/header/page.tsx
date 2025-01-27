"use client";

import React from "react";
import Menu from "./menu";
import HeroSection from "./heroSection";

const Header = () => {
  return (
    <div className="relative ">

      <div
        className="relative bg-no-repeat bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: "url(/header/gradient.png)",
        }}
      >
        <Menu />
        <HeroSection />
      </div>
    </div>
  );
};

export default Header;
