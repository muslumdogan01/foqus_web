import Header from "@/components/header/page";

export default function Home() {
  return (
    <div className="w-full h-screen ">
            <div className="bg-no-repeat bg-cover bg-center h-full w-3/4 absolute top-0 right-0"
          style={{
            backgroundImage: "url(/header/phone.png)",
          }}
      ></div>
      <Header />
    </div>
  );
}
