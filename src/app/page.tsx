import Features from "@/components/features/page";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <div 
    className="relative bg-no-repeat bg-cover bg-center w-full h-full"
    style={{
      backgroundImage: "url(/header/gradient.png)",
    }}
    >
            {/* <div className="bg-no-repeat bg-cover bg-center  absolute inset-y-0 right-0 w-[100%]  h-screen "
          style={{
            backgroundImage: "url(/header/phone.png)",
          }}
      ></div> */}
      <Header />
      <Features/>
    </div>
  );
}
