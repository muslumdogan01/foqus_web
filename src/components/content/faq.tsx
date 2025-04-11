"use client";
import { useState } from "react";

const faqData = [
  {
    question: "FoqusPOS hangi sektörlerde kullanılabilir?",
    answer:
      "FoqusPOS, kafe, restoran, butik mağaza, kuaför, giyim, tekstil gibi birçok farklı sektörde kullanılabilecek şekilde esnek olarak tasarlanmıştır. İşletmenizin ihtiyaçlarına göre kolayca uyarlanabilir.",
  },
  {
    question: "Kurulumu ve kullanımı zor mu?",
    answer:
      "Hayır, FoqusPOS hızlı kurulum ve sade arayüzü sayesinde teknik bilgi gerektirmeden kolayca kullanılabilir. Tabletinize indirip birkaç adımda satışa başlamanız mümkün.",
  },
  {
    question: "FoqusPOS internetsiz çalışır mı?",
    answer:
      "Evet! FoqusPOS çevrimdışı modda da çalışır. İnternet bağlantınız kesildiğinde bile satış yapabilir, bağlantı tekrar sağlandığında verileriniz otomatik olarak senkronize edilir.",
  },
  {
    question: "FoqusPOS'dan hangi raporları alabilirim?",
    answer:
      "FoqusPOS size satış raporları, gelir-gider analizleri, ürün performansları ve daha fazlasını sunar. Tüm raporlar anlaşılır grafiklerle desteklenmiştir, böylece işletmenizi daha iyi yönetebilirsiniz.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center rounded-xl">
      <h2 className="text-[32px] tracking-[-0.02em] font-medium text-[#202428]">
        Aklınızdaki Sorulara Hızlı Yanıtlar
      </h2>

      <div className="space-y-3 w-full max-w-4xl mt-5">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl py-[34px] px-[34px] cursor-pointer transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <span className="text-[#202428] text-xl leading-8 font-medium">
                  {item.question}
                </span>
                <span className="text-xl font-bold text-gray-500">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* Animasyonlu Açılır Alan */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 transition-all duration-500 transform">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}