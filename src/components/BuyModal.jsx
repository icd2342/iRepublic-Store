import React, { useState } from 'react';
import settings from '../../settings.json';

const BuyModal = ({ isOpen, onClose, model, price, storage, size, colors, image }) => {
  const [selectedStorage, setSelectedStorage] = useState(storage?.[0]);
  const [selectedSize, setSelectedSize] = useState(size?.[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleBuy = () => {
    const sizeText = selectedSize ? ` ${selectedSize}` : '';
    const storageText = selectedStorage ? ` ${selectedStorage}` : '';
    const message = `Здравствуйте! Интересует ${model}${sizeText}${storageText} ${selectedColor.name} за ${price} ${settings.currency}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${settings.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  console.log(isOpen, onClose, model, price, storage, size, colors, image)

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="w-full h-full md:h-auto md:max-w-4xl md:mx-4 md:max-h-[90vh] overflow-y-auto bg-white md:rounded-3xl">
        {/* Header */}
        <div className="sticky top-0 bg-white flex justify-between items-center p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-medium text-black">Купить {model}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 md:p-8">
          {/* Model Image */}
          <div className="mb-8 md:mb-12">
            <img 
              src={image} 
              alt={model}
              className="w-[200px] md:w-[300px] h-auto mx-auto"
            />
          </div>

          {/* Size Selection */}
          {size && size.length > 0 && (
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl font-medium text-black mb-4 md:mb-6">Выберите размер</h3>
              {size.map((sizeOption) => (
                <button
                  key={sizeOption}
                  onClick={() => setSelectedSize(sizeOption)}
                  className={`inline-block min-w-[120px] p-4 rounded-2xl md:rounded-3xl border transition-all duration-300
                    ${selectedSize === sizeOption 
                      ? 'border-[#0071e3] bg-[#0071e3]/5' 
                      : 'border-gray-300 hover:border-gray-400'}`}
                >
                  <p className="text-sm md:text-base text-gray-500">{sizeOption}</p>
                </button>
              ))}
            </div>
          )}

          {/* Storage Selection */}
          {storage && storage.length > 0 && (
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl font-medium text-black mb-4 md:mb-6">Выберите объем</h3>
              {storage.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedStorage(size)}
                  className={`w-full p-4 md:p-6 rounded-2xl md:rounded-3xl border transition-all duration-300
                    ${selectedStorage === size 
                      ? 'border-[#0071e3] bg-[#0071e3]/5' 
                      : 'border-gray-300 hover:border-gray-400'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-medium text-black">
                        {size === '128GB' ? 'Рекомендуемый' : 
                         size === '256GB' ? 'Популярный' : 'Максимальный'}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{size}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      или {Math.round(price/24).toLocaleString()} ₸/мес.
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Color Selection */}
          <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-medium text-black mb-4 md:mb-6">Выберите цвет</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {colors.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => setSelectedColor(color)}
                  className={`p-3 md:p-6 rounded-xl md:rounded-3xl border transition-all duration-300
                    ${selectedColor.hex === color.hex 
                      ? 'border-[#0071e3] bg-[#0071e3]/5' 
                      : 'border-gray-300 hover:border-gray-400'}`}
                >
                  <div className="flex items-center gap-2 md:gap-4">
                    <div 
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full relative"
                      style={{ 
                        backgroundColor: color.hex,
                        border: "2px solid #fff",
                        boxShadow: "0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
                        background: color.hex === '#FFD6E5' ? 'linear-gradient(135deg, #FFE6F0, #FFD6E5)' : color.hex
                      }}
                    />
                    <div className="text-left">
                      <span className="text-sm md:text-lg font-medium text-black block">{color.name}</span>
                      {color.subtext && (
                        <span className="text-xs md:text-sm text-gray-500">{color.subtext}</span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="border border-gray-300 rounded-2xl md:rounded-3xl p-4 md:p-6 mb-8 md:mb-12">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg md:text-xl font-medium text-black mb-1 md:mb-2">Итого</h4>
                <p className="text-sm md:text-base text-gray-500">
                  {model}
                  {selectedSize ? ` • ${selectedSize}` : ''}
                  {selectedStorage ? ` • ${selectedStorage}` : ''}
                  {` • ${selectedColor.name}`}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg md:text-xl font-medium text-black">
                  {(price).toLocaleString()} ₸
                </p>
                <p className="text-sm md:text-base text-gray-500">
                  или {Math.round((price )/24).toLocaleString()} ₸/мес.
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="sticky bottom-0 bg-white pt-4">
            <button 
              onClick={handleBuy}
              className="w-full bg-[#0071e3] text-white py-3 md:py-4 rounded-full text-base md:text-lg font-medium
                       hover:bg-[#0077ed] transition-colors duration-300"
            >
              Купить
            </button>
            <p className="text-center text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
              Доставка: 2-3 недели
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyModal; 