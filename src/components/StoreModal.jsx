import React, { useState } from 'react';
import StoreIPhoneModal from './StoreIPhoneModal';

const StoreModal = ({ isOpen, onClose }) => {
  const [isIPhoneModalOpen, setIsIPhoneModalOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-gray-200 font-semibold mb-4">Магазин</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Новинки</a></li>
            <li>
              <button 
                onClick={() => setIsIPhoneModalOpen(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                iPhone
              </button>
            </li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mac</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPad</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Watch</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AirPods</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Аксессуары</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сравнить</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-200 font-semibold mb-4">Быстрые ссылки</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Найти магазин</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Статус заказа</a></li>
            <li><a href="/trade-in" className="text-gray-400 hover:text-white transition-colors">Trade-in</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Рассрочка</a></li>
          </ul>

          <h3 className="text-gray-200 font-semibold mb-4 mt-8">Специальные предложения</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trade-in</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Акции</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-200 font-semibold mb-4">О магазине</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Адрес</a></li>
          </ul>
        </div>
      </div>

      <StoreIPhoneModal 
        isOpen={isIPhoneModalOpen} 
        onClose={() => setIsIPhoneModalOpen(false)} 
      />
    </>
  );
};

export default StoreModal; 