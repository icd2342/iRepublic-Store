import React from 'react';

const TradeIn = () => {
  return (
    <div className="w-full min-h-screen bg-[#161617] text-white">
      {/* Hero Text Section */}
      <div className="pt-24 pb-8 md:pt-32 md:pb-16 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">Apple Trade In</h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Обменяйте свое устройство на новое с доплатой.
        </p>
        <a href="#" className="text-lg md:text-xl text-blue-500 hover:underline mt-4 inline-block">
          Узнать стоимость вашего устройства →
        </a>
      </div>

      {/* Hero Image Section */}
      <div 
        className="h-[50vh] md:h-[55vh] bg-cover bg-center relative mb-210"
        style={{ 
          backgroundImage: 'url(/public/assets/images/tradein.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161617]" />
      </div>

      {/* Content Section */}
      <div className="py-12 md:py-20 px-4">
        <div className="max-w-[980px] mx-auto">
          {/* Intro Section */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8">
              Обмен устройства — это просто.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ответьте на несколько вопросов, и мы рассчитаем примерную стоимость обмена или предложим способ утилизации.
            </p>
          </div>

          {/* Devices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="text-center">
              <div className="aspect-square bg-[#1d1d1f] rounded-3xl mb-8 flex items-center justify-center overflow-hidden p-8">
                <img 
                  src="public/pictures/iphone/iphone_16_pro_DesertTitanium.png"
                  alt="iPhone Trade In" 
                  className="w-[70%] h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">iPhone</h3>
              <p className="text-lg md:text-xl text-gray-400 mb-4">Получите до ₽67 800 в зачёт</p>
              <a href="#" className="text-lg md:text-xl text-blue-500 hover:underline">Узнать стоимость →</a>
            </div>

            <div className="text-center">
              <div className="aspect-square bg-[#1d1d1f] rounded-3xl mb-8 flex items-center justify-center overflow-hidden p-8">
                <img 
                  src="public/pictures/ipad/iPad_Pro_Silver.png"
                  alt="iPad Trade In" 
                  className="w-[70%] h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">iPad</h3>
              <p className="text-lg md:text-xl text-gray-400 mb-4">Получите до ₽48 000 в зачёт</p>
              <a href="#" className="text-lg md:text-xl text-blue-500 hover:underline">Узнать стоимость →</a>
            </div>

            <div className="text-center">
              <div className="aspect-square bg-[#1d1d1f] rounded-3xl mb-8 flex items-center justify-center overflow-hidden p-8">
                <img 
                  src="public/pictures/mac/MacBook_Pro.png"
                  alt="Mac Trade In" 
                  className="w-[70%] h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Mac</h3>
              <p className="text-lg md:text-xl text-gray-400 mb-4">Получите до ₽115 000 в зачёт</p>
              <a href="#" className="text-lg md:text-xl text-blue-500 hover:underline">Узнать стоимость →</a>
            </div>

            <div className="text-center">
              <div className="aspect-square bg-[#1d1d1f] rounded-3xl mb-8 flex items-center justify-center overflow-hidden p-8">
                <img 
                  src="public/pictures/watch/appleWatch_10.png"
                  alt="Apple Watch Trade In" 
                  className="w-[70%] h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Apple Watch</h3>
              <p className="text-lg md:text-xl text-gray-400 mb-4">Получите до ₽18 500 в зачёт</p>
              <a href="#" className="text-lg md:text-xl text-blue-500 hover:underline">Узнать стоимость →</a>
            </div>
          </div>

          {/* Terms Section */}
          <div className="mt-16 md:mt-24 border-t border-gray-800 pt-12 md:pt-16">
            <div className="max-w-[680px] mx-auto px-4">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                Требования к устройствам
              </h3>
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg text-gray-400">
                  • Устройство должно быть в рабочем состоянии
                </p>
                <p className="text-lg text-gray-400">
                  • Все функции устройства должны работать исправно
                </p>
                <p className="text-lg text-gray-400">
                  • Экран должен быть без повреждений
                </p>
                <p className="text-lg text-gray-400">
                  • Корпус не должен иметь серьезных повреждений
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeIn; 