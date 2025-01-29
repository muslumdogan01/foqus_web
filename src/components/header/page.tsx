"use client";

import React from "react";
import Menu from "./menu";
import HeroSection from "./heroSection";

const Header = () => {
  return (
    <div className="relative ">
      <Menu />
      <HeroSection />
    </div>
  );
};

export default Header;
