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
      {menuItems.map((item) => {
        const isHome = item.name === "Home";
        const isActive = pathname === item.path;

        return (
          <li
            key={item.path}
            className="relative font-semibold text-[16px] leading-[26.6px] cursor-pointer transition duration-300 ease-in-out group"
          >
            {isHome ? (
              <Link
                href={item.path}
                className={`${
                  isActive ? "text-[#202428]" : "text-[#2024284D]"
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-[#2024284D] pointer-events-none select-none">
                {item.name}
              </span>
            )}

            {/* Alt çizgi */}
            <span
              className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#2024284D] transition-all duration-300 ease-in-out group-hover:w-full ${
                isActive ? " bg-[#202428]" : ""
              }`}
            ></span>

            {/* Tooltip Bubble */}
            {!isHome && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3  opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="relative z-20 bg-white text-black text-xs leading-relaxed tracking-normal font-normal  rounded-full px-5 py-[10px] shadow-md whitespace-nowrap">
                  ⏳ Çok yakında yayında
                  {/* Tooltip ucu */}

                </div>
                <div className="absolute top-2 z-10 left-1/2 -translate-x-1/2 -translate-y-[100%] w-4 h-4 bg-white rotate-45 shadow-md"></div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;
