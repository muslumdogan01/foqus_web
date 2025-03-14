import React from "react";

const BgColor = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover w-full h-full absolute inset-y-0 right-0"
      style={{
        backgroundImage: "url(/header/gradient.png)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
      }}
    ></div>
  );
};

export default BgColor;
