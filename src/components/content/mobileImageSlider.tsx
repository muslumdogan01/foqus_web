"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    title: (
      <>
        Güzellik <br /> salonları <br /> için
      </>
    ),
    img: "/content/cont7.png",
  },
  {
    title: (
      <>
        Kafeler <br /> için
      </>
    ),
    img: "/content/cont4.png",
  },
  {
    title: (
      <>
        Kuaförler <br /> için
      </>
    ),
    img: "/content/beuty.png",
  },
  {
    title: (
      <>
        Restaurantlar <br /> için
      </>
    ),
    img: "/content/cont11.png",
  },
  {
    title: (
      <>
        Spor <br />
        Salonları <br /> için
      </>
    ),
    img: "/content/cont8.png",
  },
];

export default function MobileImageSlider() {
  return (
    <div className="w-full relative px-6 pb-[60px] mt-[50px] xl:hidden">
      <Swiper
        spaceBetween={16}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={{ clickable: true }} // ✅ custom el yok!
        modules={[Pagination]}
        className="!overflow-visible"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!w-[220px] sm:!w-[250px] md:!w-[270px]"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 px-2">
                <p className="text-white text-lg font-medium text-center leading-snug absolute bottom-[40px] left-1/2 -translate-x-1/2">
                  {slide.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Swiper otomatik olarak bunu oluşturuyor, sen sadece stil vereceksin */}
      </Swiper>

      {/* Pagination'a margin-top vermek için Tailwind ile override et */}
      <style jsx global>{`
  .swiper-pagination {
    margin-top: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 6px;
  }

  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    background-color: rgba(32, 36, 40, 0.3); /* #2024284D */
    opacity: 1;
    border-radius: 9999px;
    transition: background-color 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: #202428; /* Aktif nokta */
  }
`}</style>
    </div>
  );
}
