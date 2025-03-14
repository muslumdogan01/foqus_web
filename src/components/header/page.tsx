 "use client";

import React from "react";

import HeroSection from "./heroSection";

const Header = () => {
  return (
    <div className="relative w-full h-screen 2xl:h-auto ">

      {/* <div
        className="bg-no-repeat bg-cover bg-center w-full absolute right-0 h-screen "
        style={{
          backgroundImage: "url(/header/phone2.png)",
        }}
      ></div> */}
 
      <HeroSection />
    </div>
  );
};

export default Header;
