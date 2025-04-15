/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function ImageList() {
  const images = [
    {
      src: "/content/content1.png",
      icon: "/icons/icon1.svg",
      title:"Restoranlar için",
      marginTop: "-mt-[13rem]",
      marginLeft: "-ml-[30px]",
    },
    {
      src: "/content/content3.png",
      icon: "/icons/icon2.svg",
      title:"Restoranlar için",
      marginTop: "mt-0",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/beuty.png",
      icon: "/icons/icon3.svg",
      title: <> Güzellik Salonları <br/> için</>,
      marginTop: "mt-[15rem]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont7.png",
      icon: "/icons/tekstil.svg",
      title:"Giyim & Tekstil için",
      marginTop: "mt-[8rem]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont9.png",
      icon: "/icons/icon3.svg",
      title:"Berberler için",
      marginTop: "mt-[23rem]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont11.png",
      icon: "/icons/icon2.svg",
      title:"Restoranlar için",
      marginTop: "mt-0",
      marginLeft: "mx-[30px]",
    },
    {
      src: "/content/fun.png",
      icon: "/icons/cafe.svg",
      title:"Cafeler için",
      marginTop: "-mt-[13rem]",
      marginRight: "-mr-[30px]",
    },
  ];

  const images2 = [
    {
      src: "/content/fun2.png",
      icon: "/icons/fun.svg",
      title:"Eğlence için",
      marginTop: "-mt-[560px]",
      marginLeft: "-ml-[30px]",
    },
    {
      src: "/content/cont4.png",
      icon: "/icons/cafe.svg",
      title:"Cafeler için",
      marginTop: "-mt-[340px]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont6.png",
      icon: "/icons/cafe.svg",
      title:"Cafeler için",
      marginTop: "-mt-[100px]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont8.png",
      icon: "/icons/education.svg",
      title: <> Spor Salonları <br/> için</>,
      marginTop: "-mt-[210px]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont10.png",
      icon: "/icons/cafe.svg",
      title:"Cafeler için",
      marginTop: "mt-[30px]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont12.png",
      icon: "/icons/tekstil.svg",
      title:"Giyim & Tekstil için",
      marginTop: "-mt-[340px]",
      marginLeft: "mx-[30px]",
    },
    {
      src: "/content/cont14.png",
      icon: "/icons/icon2.svg",
      title:"Restoranlar için",
      marginTop: "-mt-[540px]",
      marginRight: "-mr-[30px]",
    },
  ];

  return (
    <div className="xl:flex hidden flex-col justify-center items-center w-full relative">
      <div className="inline-flex justify-center z-10 relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`group relative ${image.marginTop} ${image.marginLeft} ${image.marginRight}`}
          >
            {/* Resmi ve hover efektini içine alan relative div */}
            <div className="relative 2xl:w-[250px] 2xl:h-[400px]  w-[200px] h-[300px]">
              {/* Resim */}
              <Image
                src={image.src}
                fill
                alt={`Image ${index + 1}`}
                className=" rounded-2xl shadow-lg  object-cover transition duration-300 ease-in-out group-hover:blur-[10px] w-full h-full"
              />

              {/* Hover İçeriği (İkon + Metin) */}
              <span className="absolute inset-0 space-y-4 flex flex-col items-center justify-center bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                {/* İkon */}
                <Image
                  src={image.icon}
                  width={40}
                  height={40}
                  alt={`Icon for ${index + 1}`}
                  className="object-contain"
                />

                {/* Açıklama Metni */}
                <span className="text-white text-[18px] 2xl:text-[24px] leading-[1.4] tracking-[-0.02em] mt-2 text-center">
                {image.title}
                </span>
                <div className=" absolute 2xl:bottom-[25px] bottom-5 left-0 flex justify-center items-center w-full text-center ">
                  <span className=" hover:animate-pulse  transition-all duration-500 ease-in-out text-[#202428] text-[20px] font-medium rounded-[50px] bg-white 2xl:py-[14px] py-2 px-4 cursor-pointer 2xl:px-10 leading-[1.4] tracking-[-0.02em]  text-center">
                    Kullanmaya başla
                  </span>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="inline-flex justify-center z-10 relative">
        {images2.map((img, index) => (
          <div
            key={index}
            className={` inline-flex relative ${img.marginTop} ${img.marginLeft} ${img.marginRight}`}
          >
       <div className="relative group 2xl:w-[250px] 2xl:h-[400px]  w-[200px] h-[300px]">
              {/* Resim */}
              <Image
                src={img.src}
                fill
                alt={`Image ${index + 1}`}
                className="rounded-2xl shadow-lg object-cover transition duration-300 ease-in-out group-hover:blur-[10px] w-full h-full"
              />

              {/* Hover İçeriği */}
              <span className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <Image
                  src={img.icon}
                  width={40}
                  height={40}
                  alt={`Icon for ${index + 1}`}
                  className="object-contain"
                />
                <span className="text-white text-[18px] md:text-[24px] leading-[1.4] tracking-[-0.02em] mt-2 text-center">
                {img.title}
                </span>
                <div className=" absolute 2xl:bottom-[25px] bottom-5 left-0 flex justify-center items-center w-full text-center ">
                  <span className=" hover:animate-pulse transition-all duration-500 ease-in-out text-[#202428] text-[20px] font-medium rounded-[50px] bg-white 2xl:py-[14px] py-2 px-4 cursor-pointer 2xl:px-10 leading-[1.4] tracking-[-0.02em]  text-center">
                    Kullanmaya başla
                  </span>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
