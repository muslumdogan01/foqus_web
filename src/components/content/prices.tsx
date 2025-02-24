import React from "react";

const Prices = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="relative w-full p-[10px] border border-[#2024281A]  z-0 rounded-[56px]">
        <div className="relative w-full  z-0 rounded-[56px] border border-[#2A33450A]">
          <svg className="absolute inset-0 w-full h-full opacity-50 z-10 rounded-[56px] bg-white ">
            <pattern
              id="dots"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
              patternTransform="translate(10, 10)"
            >
              <circle cx="1" cy="1" r="1" fill="gray" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>

          <div className="w-full flex flex-col justify-center items-center relative z-20">
            <h1>Fiyatlar</h1>
            <p>
              FoqusPOS, her boyuttaki işletme için mükemmeldir. Ücretsiz olarak
              başla.
            </p>
          </div>
          <div className="relative z-20">
            <div className="flex justify-center items-center min-h-screen  px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ücretsiz Kart */}
                <div className="w-[320px] p-6 bg-white border border-[#00000080] rounded-[30px] shadow-sm text-center">
                  <h2 className="text-2xl font-semibold">₺0</h2>
                  <p className="text-gray-500">Ücretsiz</p>

                  <ul className="mt-4 space-y-2 text-gray-600 text-left">
                    <li>✅ Detaylı Satış Rapor Yönetimi</li>
                    <li>✅ 7/24 Destek</li>
                    <li>✅ 7/24 Destek</li>
                  </ul>

                  <button className="mt-6 w-full py-2 px-4 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition">
                    Ücretsiz Kullanmaya Başla
                  </button>
                </div>

                {/* Ücretli Kart */}
                <div className="w-[320px] p-6 bg-[#00B46A] text-white rounded-2xl shadow-lg text-center">
                  <h2 className="text-2xl font-semibold">₺99,99</h2>
                  <p className="opacity-80">1 Terminal Fiyatı</p>

                  <ul className="mt-4 space-y-2 text-left">
                    <li>✅ Detaylı Satış Rapor Yönetimi</li>
                    <li>✅ QR Menü Desteği</li>
                    <li>✅ 7/24 Destek</li>
                    <li>✅ 7/24 Destek</li>
                    <li>✅ 7/24 Destek</li>
                  </ul>

                  <button className="mt-6 w-full py-2 px-4 bg-white text-green-600 font-medium rounded-full hover:bg-gray-100 transition">
                    Kullanmaya Başla
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
