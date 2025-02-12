import React, { useState, useEffect } from 'react';
import settings from '../../settings.json';

const TradeIn = () => {
  const [imageHeight, setImageHeight] = useState('55vh');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageHeight('20vh');
      } else {
        setImageHeight('55vh');
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Text Section */}
      <div className="pt-24 pb-8 md:pt-32 md:pb-16 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-black">Apple Trade In</h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Обменяйте свое устройство на новое с доплатой.
        </p>
        <a 
          href={`https://wa.me/${settings.whatsappNumber}?text=Здравствуйте!%20Интересует%20trade-in%20устройства.%20Хотел(а)%20бы%20узнать%20подробности.`} 
          className="text-lg md:text-xl text-black hover:text-gray-600 mt-4 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Написать в WhatsApp →
        </a>
      </div>

      {/* Hero Image Section */}
      <div 
        className="bg-cover bg-center relative mb-210"
        style={{ 
          backgroundImage: 'url(/assets/images/tradein.jpg)',
          height: imageHeight,
          backgroundSize: window.innerWidth < 768 ? 'contain' : 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'white'
        }}
      >
      </div>

      {/* Content Section */}
      <div className="py-12 md:py-20 px-4">
        <div className="max-w-[980px] mx-auto">
          {/* Intro Section */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8 text-black">
              Обмен устройства — это просто.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ответьте на несколько вопросов, и мы рассчитаем примерную стоимость обмена или предложим способ утилизации.
            </p>
          </div>

          {/* Devices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="text-center">
              <div className="aspect-square bg-white rounded-3xl mb-8 flex items-center justify-center overflow-hidden p-8">
                <img 
                  src="/pictures/iphone/iphone_16_pro_DesertTitanium.png"
                  alt="iPhone Trade In" 
                  className="w-[70%] h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-black">iPhone</h3>
              <p className="text-lg md:text-xl text-gray-600 mb-4">Получите до 350 000 ₸ в зачёт</p>
              <a 
                href={`https://wa.me/${settings.whatsappNumber}?text=Здравствуйте!%20Интересует%20trade-in%20iPhone.%20Хотел(а)%20бы%20узнать%20стоимость.`}
                className="text-lg md:text-xl text-black hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Узнать стоимость →
              </a>
            </div>

            <div className="text-center">
              <div className="aspect-square bg-white rounded-3xl mb-8 flex items-center justify-center overflow-hidden p-8">
                <img 
                  src="/pictures/ipad/iPad_Pro_Silver.png"
                  alt="iPad Trade In" 
                  className="w-[70%] h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-black">iPad</h3>
              <p className="text-lg md:text-xl text-gray-600 mb-4">Получите до 250 000 ₸ в зачёт</p>
              <a 
                href={`https://wa.me/${settings.whatsappNumber}?text=Здравствуйте!%20Интересует%20trade-in%20iPad.%20Хотел(а)%20бы%20узнать%20стоимость.`}
                className="text-lg md:text-xl text-black hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Узнать стоимость →
              </a>
            </div>

            <div className="text-center">
              <div className="aspect-square bg-white rounded-3xl mb-8 flex items-center justify-center overflow-hidden p-8">
                <img 
                  src="/pictures/mac/MacBook_Pro.png"
                  alt="Mac Trade In" 
                  className="w-[70%] h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Mac</h3>
              <p className="text-lg md:text-xl text-gray-600 mb-4">Получите до 450 000 ₸ в зачёт</p>
              <a 
                href={`https://wa.me/${settings.whatsappNumber}?text=Здравствуйте!%20Интересует%20trade-in%20Mac.%20Хотел(а)%20бы%20узнать%20стоимость.`}
                className="text-lg md:text-xl text-black hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Узнать стоимость →
              </a>
            </div>

            <div className="text-center">
              <div className="aspect-square bg-white rounded-3xl mb-8 flex items-center justify-center overflow-hidden p-8">
                <img 
                  src="/pictures/watch/appleWatch_10.png"
                  alt="Apple Watch Trade In" 
                  className="w-[70%] h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Apple Watch</h3>
              <p className="text-lg md:text-xl text-gray-600 mb-4">Получите до 100 000 ₸ в зачёт</p>
              <a 
                href={`https://wa.me/${settings.whatsappNumber}?text=Здравствуйте!%20Интересует%20trade-in%20Apple%20Watch.%20Хотел(а)%20бы%20узнать%20стоимость.`}
                className="text-lg md:text-xl text-black hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Узнать стоимость →
              </a>
            </div>
          </div>

          {/* Terms Section */}
          <div className="mt-16 md:mt-24 border-t border-gray-200 pt-12 md:pt-16">
            <div className="max-w-[680px] mx-auto px-4">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-black">
                Требования к устройствам
              </h3>
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg text-gray-600">
                  • Устройство должно быть в рабочем состоянии
                </p>
                <p className="text-lg text-gray-600">
                  • Все функции устройства должны работать исправно
                </p>
                <p className="text-lg text-gray-600">
                  • Экран должен быть без повреждений
                </p>
                <p className="text-lg text-gray-600">
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