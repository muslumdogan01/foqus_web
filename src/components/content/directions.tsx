import Image from "next/image";
import React from "react";

const Directions = () => {
  return (
    <div className="relative w-full   py-96 z-0">
      <Image
        src="/content/directionsBg.png"
        fill
        alt="Directions background"
        className="w-full h-full object-cover fade-mask"
        objectFit="cover"
        objectPosition="center"
      />

      <div className="relative z-10 flex  text-white text-3xl">
        <div className="container mx-auto max-w-6xl flex space-x-8 ">
          <div className=" w-full">
            <h1 className="text-[64px] leading-[96px] tracking-[-0.02em] text-[#202428] font-medium">
              3 Adımda <br /> Satış Yapmaya <br /> Başlayın!
            </h1>
          </div>
          <div className="w-full flex relative mt-8">
            <Image
              src="/content/union.png"
              width={700}
              height={700}
              alt="union"
              className="mt-36 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"
            />
            <div className="w-full sm:w-[300px] h-auto 2xl:h-[300px] relative z-10">
              <Image
                src="/content/direcIcon3.png"
                width={220}
                height={43}
                alt="union"
                className=" absolute top-2 -left-[135px]"
              />
              <Image
                src="/content/direction2.png"
                alt="Box 1"
                width={300}
                height={300}
                className="w-full h-auto max-w-[300px] max-h-[300px] object-contain "
              />
            </div>
            <div className="w-full sm:w-[300px] h-auto 2xl:h-[300px] -ml-24 z-20 relative">
            <Image
                src="/content/direcIcon1.png"
                width={119}
                height={22}
                alt="union"
                className=" absolute top-[8rem] left-[-2rem]"
              />
              <Image
                src="/content/direction3.png"
                alt="Box 1"
                width={300}
                height={300}
                className="w-full h-auto max-w-[300px] max-h-[300px] object-contain"
              />
            </div>
            <div className="w-full sm:w-[300px] h-auto 2xl:h-[300px] -ml-20 z-30 relative">
            <Image
                src="/content/direcIcon2.png"
                width={131}
                height={29}
                alt="union"
                className=" absolute top-[6rem] left-[-2rem]"
              />
              <Image
                src="/content/direction1.png"
                alt="Box 1"
                width={300}
                height={300}
                className="w-full h-auto max-w-[300px] max-h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
