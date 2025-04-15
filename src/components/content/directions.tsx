import Image from "next/image";
import React from "react";

const Directions = () => {
  return (
    <div className="relative w-full hidden xl:block  py-96 z-0">
      <Image
        src="/content/directionsBg.png"
        fill
        alt="Directions background"
        className="w-full h-full object-cover fade-mask"
        objectFit="cover"
        objectPosition="center"
      />

      <div className="relative z-10 flex  text-white text-3xl">
        <div className="container mx-auto  flex ">
          <div className=" w-full">
            <h1 className="text-[64px] leading-[96px] tracking-[-0.02em] text-[#202428] font-medium">
              3 Adımda <br /> Satış Yapmaya <br /> Başlayın!
            </h1>
          </div>

          <div className="w-full flex relative mt-8 -space-x-8">
            <Image
              src="/content/union.png"
              width={700}
              height={700}
              alt="union"
              className="mt-36 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"
            />
            <div className="w-full sm:w-[300px] h-auto 2xl:h-[300px]  relative z-10 rotate-6">
              <Image
                src="/content/direcIcon3.png"
                width={220}
                height={43}
                alt="union"
                className="z-30 absolute top-2 -left-[160px]"
              />
              <Image
                src="/content/download.svg"
                width={50}
                height={50}
                alt="union"
                className="z-30 absolute top-[35px] left-[35px] -rotate-6"
              />
              <div className="relative flex flex-col items-start justify-end w-[300px] h-[300px] bg-white rounded-[30px] shadow-custom p-6">
                <h2 className="text-[#202428] text-[24px] font-semibold leading-[160%]">
                  Uygulamayı İndirin
                </h2>
                <p className="text-[#20242880] text-[14px] font-normal leading-[160%] text-left">
                  Hemen uygulamayı telefonunuza <br /> veya tabletinize indirin.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-[300px] h-auto 2xl:h-[300px]  z-30 relative -rotate-12 ">
              <Image
                src="/content/direcIcon1.png"
                width={119}
                height={22}
                alt="union"
                className="z-30 absolute top-[8rem] left-[-4rem]"
              />
              <Image
                src="/content/manage.svg"
                width={50}
                height={50}
                alt="union"
                className="z-30 absolute top-[44px] left-[20px] rotate-12"
              />
              <div className="w-[300px] h-[300px] bg-white rounded-[30px] shadow-custom flex flex-col items-start justify-end  p-6">
                <h2 className="text-[#202428] text-[24px] font-semibold leading-[160%]">
                  Ürünlerinizi Ekleyin
                </h2>
                <p className="text-[#20242880] text-[14px] font-normal leading-[160%] text-left">
                  Satmak istediğiniz ürünlerin <br />
                  bilgilerini kolayca ekleyin.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-[300px] h-auto 2xl:h-[300px] rotate-12 z-40 relative">
              <Image
                src="/content/direcIcon2.png"
                width={131}
                height={29}
                alt="union"
                className="z-30 absolute top-[134px] left-[-4rem]"
              />
                     <Image
                src="/content/receipt.svg"
                width={50}
                height={50}
                alt="union"
                className="z-30 absolute top-[49px] left-[30px] -rotate-12"
              />
              <div className="w-[300px] h-[300px] bg-white rounded-[30px] shadow-custom  flex flex-col items-start justify-end  p-6">
                <h2 className="text-[#202428] text-[24px] font-semibold leading-[160%]">
                Satışa Başlayın
                </h2>
                <p className="text-[#20242880] text-[14px] font-normal leading-[160%] text-left">
                  Hemen uygulamayı telefonunuza <br /> veya tabletinize indirin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
