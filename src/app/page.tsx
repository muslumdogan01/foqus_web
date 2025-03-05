import Content from "@/components/content/page";
import Features from "@/components/features/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <div className="relative w-full h-full ">
      <Header />
      <Features />
      <Content />
      <Footer/>
    </div>
  );
}
