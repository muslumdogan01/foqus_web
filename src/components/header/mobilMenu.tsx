import React from "react";

const MobilMenu = () => {
  return (
    <div className="bg-red-50 w-full flex flex-col items-start p-4 md:hidden">
      <ul className="space-y-4">
        <li className="font-semibold text-[16px]">Home</li>
        <li className="font-semibold text-[16px]">Features</li>
        <li className="font-semibold text-[16px]">Pricing</li>
        <li className="font-semibold text-[16px]">Inside</li>
        <li className="font-semibold text-[16px]">Contact</li>
      </ul>
    </div>
  );
};

export default MobilMenu;
