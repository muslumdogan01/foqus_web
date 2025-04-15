import React from "react";
import SecondCards from "./secondCards";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-full md:pt-[236px] pt-[100px] relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full md:space-x-6">
          <div
            className="relative rounded-[30px] deneme inline-flex flex-col md:w-[606px] md:h-[500px] justify-center w-[343px] h-[300px]  md:px-10 md:justify-end md:pb-10 "
            style={{
              backgroundImage: "url(/content/dotss.png)",
            }}
          >
            <div className="w-full md:flex flex-col hidden">
              <Image
                src="/content/play.svg"
                alt="svg1"
                width={236}
                height={196}
                className="absolute top-[60px] left-[135px] transition-all duration-500 ease-in-out hover:rotate-6 hover:scale-110"
              />

              <Image
                src="/content/apple.svg"
                alt="svg2"
                width={236}
                height={196}
                className="absolute top-[114px] left-[220px] transition-all duration-500 ease-in-out hover:-rotate-6 hover:scale-110"
              />
            </div>

            <div className="w-full flex justify-center items-center md:justify-start md:items-start">
            <Image
              src="/content/flash.svg"
              width={50}
              height={50}
              alt="card icon"
              className="mb-4 w-[70px] h-[70px] md:w-[50px] md:h-[50px]"
            />
            </div>
            <h1 className="min-h-[60px] md:text-[32px] text-[26px] text-center leading-[44.8px] md:text-left tracking-[-0.02em] text-[#202428] font-medium relative z-50">
              Hızlı ve Kolay Kurulum
            </h1>
            <p className="min-h-[60px] text-[16px] 2xl:text-[24px] leading-[26.6px] px-5 md:px-0 text-center md:text-left text-[#202428] font-normal  relative z-50">
              Uygulamayı indirip kolay arayüzüyle dakikalar içinde işletmenizi
              satışa hazır hale getirin.
            </p>
          </div>
          <div
            className="relative rounded-[30px] deneme inline-flex flex-col md:w-[606px] md:h-[500px] justify-center w-[343px] h-[300px] mt-5 md:mt-0  md:px-10 md:justify-end md:pb-10 "
            style={{
              backgroundImage: "url(/content/dotss.png)",
            }}
          >
            <div className="w-full hidden md:flex justify-center items-start">
              <Image
                src="/content/eShop.svg"
                alt="svg1"
                width={326}
                height={228}
                className="absolute left-0 md:left-28 top-[60px] transition-transform duration-500 ease-in-out hover:scale-110 "
              />
            </div>
            <div className="w-full flex justify-center items-center md:justify-start md:items-start">

            <Image
              src="/content/shopping.svg"
              width={50}
              height={50}
              alt="card icon"
              className="mb-4 w-[70px] h-[70px] md:w-[50px] md:h-[50px]"
            />
            </div>


            <h1 className="min-h-[60px] md:text-[32px] text-[26px] text-center leading-[44.8px] md:text-left tracking-[-0.02em] text-[#202428] font-medium relative z-50">
              E-Mağaza Desteği
            </h1>
            <p className="min-h-[60px] text-[16px] 2xl:text-[24px] leading-[26.6px] px-5 md:px-0 text-center md:text-left text-[#202428] font-normal  relative z-50">
              Ürünlerinizi dijital ortamda sergileyin. Sipariş sürecini
              hızlandırarak müşterilerinize modern bir deneyim sunun.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:space-x-6 space-y-5 md:space-y-0 justify-center items-center md:items-start mt-6">
          <SecondCards
          image="/content/rapor.png"
          icon="/content/graph.svg"
            title={
              <>
                Kapsamlı Raporlama <br /> ve Analiz
              </>
            }
          />
          <SecondCards
           image="/content/stok.png"
           icon="/content/box.svg"
            title={
              <>
                Stok ve sipariş <br /> yöntemi
              </>
            }
          />
          <SecondCards
           image="/content/zaman.png"
           icon="/content/monitor.svg"
            title={
              <>
                Her zaman ve <br /> her yerde erişim
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
