import React from "react";
import Card from "./firstCards";
import SecondCards from "./secondCards";

const Features = () => {
  return (
    <div className="w-full md:pt-[236px] pt-[-40px] relative">
      
      <div className="container mx-auto max-w-6xl ">
        <div className="flex flex-col md:flex-row justify-center w-full space-x-6 ">
          <Card
            title="Hızlı ve Kolay Kurulum"
            subTitle={
              <>
                Uygulamayı indirip kolay arayüzüyle dakikalar içinde işletmenizi{" "}
                <br />
                satışa hazır hale getirin.
              </>
            }
          />
          <Card
            title="Dijital QR Menü Desteği"
            subTitle={
              <>
                QR kod ile ürünlerinizi dijital ortamda sergileyin. Sipariş
                sürecini <br /> hızlandırarak müşterilerinize modern bir deneyim
                sunun.
              </>
            }
          />
        </div>
        <div className="w-full flex flex-col md:flex-row space-x-6 justify-center mt-6">
          <SecondCards title={<>Kapsamlı Raporlama <br /> ve Analiz</>} />
          <SecondCards title={<>Stok ve sipariş <br /> yöntemi</>} />
          <SecondCards title={<>Her zaman ve <br /> her yerde erişim</>} />
        </div>
      </div>
    </div>
  );
};

export default Features;
