/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function ImageList() {
  const images = [
    {
      src: "/content/content1.png",
      icon: "/icons/icon1.svg",
      width: 300,
      height: 500,
      marginTop: "-mt-[13rem]",
      marginLeft: "-ml-[30px]",
    },
    {
      src: "/content/content3.png",
      icon: "/icons/icon2.svg",
      width: 300,
      height: 500,
      marginTop: "mt-0",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont5.png",
      icon: "/icons/icon3.svg",
      width: 300,
      height: 500,
      marginTop: "mt-[15rem]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont7.png",
      icon: "/icons/nature.svg",
      width: 300,
      height: 500,
      marginTop: "mt-[8rem]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont9.png",
      icon: "/icons/nature.svg",
      width: 300,
      height: 500,
      marginTop: "mt-[23rem]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont11.png",
      icon: "/icons/nature.svg",
      width: 300,
      height: 500,
      marginTop: "mt-0",
      marginLeft: "mx-[30px]",
    },
    {
      src: "/content/cont5.png",
      icon: "/icons/nature.svg",
      width: 300,
      height: 500,
      marginTop: "-mt-[13rem]",
      marginRight: "-mr-[30px]",
    },
  ];

  const images2 = [
    {
      src: "/content/cont8.png",
      width: 300,
      height: 500,
      marginTop: "-mt-[590px]",
      marginLeft: "-ml-[30px]",
    },
    {
      src: "/content/cont4.png",
      width: 300,
      height: 500,
      marginTop: "-mt-[340px]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont6.png",
      width: 300,
      height: 500,
      marginTop: "-mt-[100px]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont8.png",
      width: 300,
      height: 500,
      marginTop: "-mt-[210px]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont10.png",
      width: 300,
      height: 500,
      marginTop: "mt-[30px]",
      marginLeft: "ml-[30px]",
    },
    {
      src: "/content/cont12.png",
      width: 300,
      height: 500,
      marginTop: "-mt-[340px]",
      marginLeft: "mx-[30px]",
    },
    {
      src: "/content/cont14.png",
      width: 300,
      height: 500,
      marginTop: "-mt-[540px]",
      marginRight: "-mr-[30px]",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full relative">
<div className="inline-flex justify-center z-10 relative">
  {images.map((image, index) => (
    <div
      key={index}
      className={`group relative ${image.marginTop} ${image.marginLeft} ${image.marginRight}`}
    >
      {/* Resim */}
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={`Image ${index + 1}`}
        className="rounded-2xl shadow-lg object-cover transition duration-300 ease-in-out group-hover:blur-[10px]"
      />

      {/* Hover Olunca Görünecek Dinamik İkon */}
      <span className="absolute top-0 left-0 w-20 h-20 bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
        <Image
          src={image.icon} // Dinamik olarak resme ait ikon
          width={40}
          height={40}
          alt={`Icon for ${index + 1}`}
          className="object-contain"
        />
      </span>
    </div>
  ))}
</div>
      <div className="flex w-full justify-center z-10">
        {images2.map((image, index) => (
          <div
            key={index}
            className={`group ${image.marginTop} ${image.marginLeft} ${image.marginRight}`}
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={`Image ${index + 1}`}
              className="rounded-2xl shadow-lg object-cover transition duration-300 ease-in-out group-hover:blur-[10px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
