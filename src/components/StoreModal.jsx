import React, { useState } from 'react';
import StoreIPhoneModal from './StoreIPhoneModal';
import StoreMacModal from './StoreMacModal';
import StoreIPadModal from './StoreIPadModal';
import StoreWatchModal from './StoreWatchModal';
import StoreAirPodModal from './StoreAirPodModal';
import StoreAccessoriesModal from './StoreAccessoriesModal';

const StoreModal = ({ isOpen, onClose }) => {
  const [isIPhoneModalOpen, setIsIPhoneModalOpen] = useState(false);
  const [isMacModalOpen, setIsMacModalOpen] = useState(false);
  const [isiPadModalOpen, setIsiPadModalOpen] = useState(false);
  const [isWatchModalOpen, setIsWatchModalOpen] = useState(false);
  const [isAirPodsModalOpen, setIsAirPodsModalOpen] = useState(false);
  const [isAccessoriesModalOpen, setIsAccessoriesModalOpen] = useState(false);

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
            <li>
              <button 
                onClick={() => setIsMacModalOpen(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Mac
              </button>
            </li>
            <li>
              <button 
                onClick={() => setIsiPadModalOpen(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                iPad
              </button>
            </li>
            <li>
              <button 
                onClick={() => setIsWatchModalOpen(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Apple Watch
              </button>
            </li>
            <li>
              <button 
                onClick={() => setIsAirPodsModalOpen(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                AirPods
              </button>
            </li>
            <li>
              <button 
                onClick={() => setIsAccessoriesModalOpen(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Аксессуары
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-200 font-semibold mb-4">Быстрые ссылки</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Найти магазин</a></li>
            {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Статус заказа</a></li> */}
            <li><a href="/trade-in" className="text-gray-400 hover:text-white transition-colors">Trade-in</a></li>
            {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Рассрочка</a></li> */}
          </ul>

          {/* <h3 className="text-gray-200 font-semibold mb-4 mt-8">Специальные предложения</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trade-in</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Акции</a></li>
          </ul> */}
        </div>

        <div>
          <h3 className="text-gray-200 font-semibold mb-4">О магазине</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
            {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Адрес</a></li> */}
          </ul>
        </div>
      </div>

      <StoreIPhoneModal 
        isOpen={isIPhoneModalOpen} 
        onClose={() => setIsIPhoneModalOpen(false)} 
      />
      <StoreMacModal 
        isOpen={isMacModalOpen} 
        onClose={() => setIsMacModalOpen(false)} 
      />
      <StoreWatchModal 
        isOpen={isWatchModalOpen} 
        onClose={() => setIsWatchModalOpen(false)} 
      />
      <StoreAirPodModal 
        isOpen={isAirPodsModalOpen} 
        onClose={() => setIsAirPodsModalOpen(false)} 
      />
      <StoreIPadModal 
        isOpen={isiPadModalOpen} 
        onClose={() => setIsiPadModalOpen(false)} 
      />
      <StoreAccessoriesModal 
        isOpen={isAccessoriesModalOpen} 
        onClose={() => setIsAccessoriesModalOpen(false)} 
      />
      
    </>
  );
};

export default StoreModal; 