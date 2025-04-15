"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    title: <>Uygulamayı İndirin</>,
    desc: <>Hemen uygulamayı telefonunuza <br /> veya tabletinize indirin.</>,
    img: "/content/mobileDownload.svg",
  },
  {
    title: <>Ürünlerinizi Ekleyin</>,
    desc: <>Satmak istediğiniz ürünlerin <br /> bilgilerini kolayca ekleyin.</>,
    img: "/content/mobilePlus.svg",
  },
  {
    title: <>Satışa Başlayın</>,
    desc: (
      <>Her sektöre uyumlu satış çözümüyle <br /> anında satış yapmaya başlayın!</>
    ),
    img: "/content/mobileReceip.svg",
  },
];

export default function MobileDirectionSlider() {
  return (
    <div className="w-full relative px-6 pb-[60px] mt-[50px] xl:hidden ">
      <div className="w-full flex justify-center items-center pb-[30px]">
        <h1 className="font-medium text-[40px] leading-[1.4] text-[#202428] tracking-[-0.02em]">
          3 Adımda <br /> Satış Yapmaya <br /> Başlayın!
        </h1>
      </div>
      <Swiper
        spaceBetween={16}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Özel pagination elementi
        }}
        modules={[Pagination]}
        className="!overflow-visible "
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!w-[300px] !h-[300px] bg-white shadow-xl px-[30px] py-[40px] rounded-2xl overflow-hidden "
          >
            <div className="relative  h-full w-full flex flex-col justify-between items-start ">
              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                width={50}
                height={50}
              />
              <div >
                <p className="text-2xl font-semibold leading-[1.6] -tracking-normal text-[#202428] ">{slide.title}</p>
                <p className="text-sm font-normal leading-[1.6] -tracking-norma text-[#20242880] ">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination buraya gelir ve mt-8 ile aşağıda görünür */}
      <div className="custom-pagination mt-[30px] flex justify-center" />
    </div>
  );
}
