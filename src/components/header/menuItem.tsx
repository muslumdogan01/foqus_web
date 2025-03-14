"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Inside", path: "/inside" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <ul className="space-x-[60px] flex w-full">
      {menuItems.map((item) => (
        <li key={item.path} className="relative font-semibold text-[16px] leading-[26.6px] cursor-pointer transition duration-300 ease-in-out group">
          <Link
            href={item.path}
            className={`${
              pathname === item.path ? "text-[#202428]" : "text-[#2024284D]"
            }`}
          >
            {item.name}
          </Link>
          <span
            className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#2024284D] transition-all duration-300 ease-in-out group-hover:w-full ${
              pathname === item.path ? " bg-[#202428]" : ""
            }`}
          ></span>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
