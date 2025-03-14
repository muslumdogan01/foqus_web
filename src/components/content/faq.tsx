"use client";
import { useState } from "react";

const faqData = [
  { question: "Uygulamayı İndirin", answer: "Test" },
  { question: "Uygulamayı İndirin", answer: "Test" },
  { question: "Uygulamayı İndirin", answer: "Test" },
  { question: "Uygulamayı İndirin", answer: "Test" },
  { question: "Uygulamayı İndirin", answer: "Test" },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div className="mt-[300px] space-x-[130px] flex flex-col md:flex-row justify-center items-center  gap-8 p-8 bg-gray-100 rounded-xl">
     
      <div className="space-y-3 w-full max-w-xl">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 cursor-pointer transition-all"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-[#202428] text-xl leading-8 font-medium">{item.question}</span>
              <span className="text-xl font-bold text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="text-center md:text-left ">
        <h2 className="text-[64px] leading-[96px] tracking-[-0.02em] font-semibold text-[#202428]">
          Aklınızdaki <br />
          Sorulara <br />
          Hızlı Yanıtlar
        </h2>
      </div>
    </div>
  );
}
