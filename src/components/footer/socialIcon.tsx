import React from "react";

import Image from "next/image";

interface SocialIconProps {
  type: "facebook" | "twitter" | "you" | "instagram";
  className?: string; 
}

const SocialIcon = ({ type, className }: SocialIconProps) => {
  return (
    <div
      className={`group rounded-full duration-300 bg-transparent hover:fill-black hover:bg-white ${
        className || ""
      }`}
    >
      <Image
        src={`/icons/${type}.svg`}
        alt={`${type} icon`}
        width={40}
        height={40}
        className="transition group-hover:invert"
      />
    </div>
  );
};

export default SocialIcon;
