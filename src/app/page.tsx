import Content from "@/components/content/page";
import Features from "@/components/features/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <div className="relative w-full h-full ">
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

      <Header />
      <Features />
      <Content />
      <Footer />
    </div>
  );
}
