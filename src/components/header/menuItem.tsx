import React from "react";

const MenuItems = () => {
  return (
    <ul className="space-x-[60px] flex w-full">
      <li className="relative font-semibold text-[16px] leading-[26.6px] cursor-pointer text-[#2024284D] transition duration-300 ease-in-out group hover:text-[#202428]">
        Home
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2024284D] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </li>
      <li className="relative font-semibold text-[16px] leading-[26.6px] cursor-pointer text-[#2024284D] transition duration-300 ease-in-out group hover:text-[#202428]">
        Features
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2024284D] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </li>
      <li className="relative font-semibold text-[16px] leading-[26.6px] cursor-pointer text-[#2024284D] transition duration-300 ease-in-out group hover:text-[#202428]">
        Pricing
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2024284D] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </li>
      <li className="relative font-semibold text-[16px] leading-[26.6px] cursor-pointer text-[#2024284D] transition duration-300 ease-in-out group hover:text-[#202428]">
        Inside
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2024284D] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </li>
      <li className="relative font-semibold text-[16px] leading-[26.6px] cursor-pointer text-[#2024284D] transition duration-300 ease-in-out group hover:text-[#202428]">
        Contact
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2024284D] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </li>
    </ul>
  );
};

export default MenuItems;
