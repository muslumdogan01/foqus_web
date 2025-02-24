/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function ImageList() {
    const images = [
        { src: "/content/content1.png", width: 300, height: 500, marginTop: "-mt-[13rem]",marginLeft: "-ml-[30px]"},
        { src: "/content/content3.png", width: 300, height: 500, marginTop: "mt-0", marginLeft: "ml-[30px]" },
        { src: "/content/cont5.png", width: 300, height: 500, marginTop: "mt-[15rem]",  marginLeft: "ml-[30px]"},
        { src: "/content/cont7.png", width: 300, height: 500, marginTop: "mt-[8rem]",  marginLeft: "ml-[30px]" },
        { src: "/content/cont9.png", width: 300, height: 500, marginTop: "mt-[23rem]" ,marginLeft: "ml-[30px]"},
        { src: "/content/cont11.png", width: 300, height: 500, marginTop: "mt-0", marginLeft: "mx-[30px]" },
        { src: "/content/cont5.png", width: 300, height: 500, marginTop: "-mt-[13rem]", marginRight:"-mr-[30px]"},
      ];
      const images2 = [
        { src: "/content/cont8.png", width: 300, height: 500, marginTop: "-mt-[590px]",marginLeft: "-ml-[30px]"},
        { src: "/content/cont4.png", width: 300, height: 500, marginTop: "-mt-[340px]", marginLeft: "ml-[30px]" },
        { src: "/content/cont6.png", width: 300, height: 500, marginTop: "-mt-[100px]", marginLeft: "ml-[30px]" },
        { src: "/content/cont8.png", width: 300, height: 500, marginTop: "-mt-[210px]",  marginLeft: "ml-[30px]"  },
        { src: "/content/cont10.png", width: 300, height: 500, marginTop: "mt-[30px]",  marginLeft: "ml-[30px]" },
        { src: "/content/cont12.png", width: 300, height: 500, marginTop: "-mt-[340px]", marginLeft: "mx-[30px]" },
        { src: "/content/cont14.png", width: 300, height: 500, marginTop: "-mt-[540px]", marginRight:"-mr-[30px]"},
      ];
  return (
    <div className="flex flex-col justify-center items-center w-full relative ">
      <div className="flex w-full justify-center z-10">
        {images.map((image, index) => (
          <div key={index} className={`${image.marginTop} ${image.marginLeft} ${image.marginRight}`}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={`Image ${index + 1}`}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center z-10">
        {images2.map((image, index) => (
          <div key={index} className={`${image.marginTop} ${image.marginLeft} ${image.marginRight}`}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={`Image ${index + 1}`}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
