"use client";
import Image from "next/image";
import React from "react";
// import MobilMenu from "./mobilMenu";

const Menu = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="w-full flex md:justify-between justify-center md:items-center md:pt-[50px] pt-[76px] z-50 relative">
          <div className="flex  items-center ">
            <div className="flex">
              <Image
                src="/header/logo.png"
                width={242}
                height={45}
                alt="logo"
              />
            </div>
            {/* <div className="md:flex hidden px-[50px] ">
              <Image src="/header/line.svg" width={1} height={28} alt="logo" />
            </div> */}
            {/* <div className="hidden md:flex">
              <MenuItems />
            </div> */}
          </div>
          <div className="flex   items-center">
            {/* <div className="p-4">
              <button
                className="md:hidden text-gray-700 focus:outline-none space-y-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="w-6 h-1 bg-black font-bold"></div>
                <div className="w-6 h-1 bg-black font-bold"></div>
                <div className="w-6 h-1 bg-black font-bold"></div>
              </button>
            </div> */}
            <div className="hidden md:flex bg-[#202428] rounded-[60px] space-x-[10px] py-[10px] px-[30px] cursor-pointer group">
              <span className="leading-7 text-lg font-normal text-white">
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
        {/* {menuOpen && <MobilMenu />} */}
      </div>
    </div>
  );
};

export default Menu;
