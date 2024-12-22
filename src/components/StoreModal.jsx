import React, { useState } from 'react';
import StoreIPhoneModal from './StoreIPhoneModal';
import StoreMacModal from './StoreMacModal';
import StoreIPadModal from './StoreIPadModal';
import StoreWatchModal from './StoreWatchModal';
import StoreAirPodModal from './StoreAirPodModal';
import StoreAccessoriesModal from './StoreAccessoriesModal';
import StoreNewModal from './StoreNewModal';
import StoreUsedModal from './StoreUsedModal';

export const ProductType = {
  STORE: 'STORE', // Default store view
  IPHONE: 'IPHONE',
  MAC: 'MAC',
  IPAD: 'IPAD',
  WATCH: 'WATCH',
  AIRPODS: 'AIRPODS',
  ACCESSORIES: 'ACCESSORIES',
  NEW: 'NEW',
  USED: 'USED'
};

export const StoreModal = ({ isOpen, onClose, initialProduct = ProductType.STORE }) => {
  const [currentView, setCurrentView] = useState(initialProduct);
  const [isIPhoneModalOpen, setIsIPhoneModalOpen] = useState(initialProduct === ProductType.IPHONE);
  const [isMacModalOpen, setIsMacModalOpen] = useState(initialProduct === ProductType.MAC);
  const [isiPadModalOpen, setIsiPadModalOpen] = useState(initialProduct === ProductType.IPAD);
  const [isWatchModalOpen, setIsWatchModalOpen] = useState(initialProduct === ProductType.WATCH);
  const [isAirPodsModalOpen, setIsAirPodsModalOpen] = useState(initialProduct === ProductType.AIRPODS);
  const [isAccessoriesModalOpen, setIsAccessoriesModalOpen] = useState(initialProduct === ProductType.ACCESSORIES);
  const [isNewModalOpen, setIsNewModalOpen] = useState(initialProduct === ProductType.NEW);
  const [isUsedModalOpen, setIsUsedModalOpen] = useState(initialProduct === ProductType.USED);

  // Close all modals and return to store view
  const closeAllModals = () => {
    setCurrentView(ProductType.STORE);
    setIsIPhoneModalOpen(false);
    setIsMacModalOpen(false);
    setIsiPadModalOpen(false);
    setIsWatchModalOpen(false);
    setIsAirPodsModalOpen(false);
    setIsAccessoriesModalOpen(false);
    setIsNewModalOpen(false);
    setIsUsedModalOpen(false);
  };

  // Open specific modal
  const openModal = (productType) => {
    if (productType === ProductType.STORE) {
      closeAllModals();
      return;
    }

    setCurrentView(productType);
    closeAllModals();
    switch (productType) {
      case ProductType.IPHONE:
        setIsIPhoneModalOpen(true);
        break;
      case ProductType.MAC:
        setIsMacModalOpen(true);
        break;
      case ProductType.IPAD:
        setIsiPadModalOpen(true);
        break;
      case ProductType.WATCH:
        setIsWatchModalOpen(true);
        break;
      case ProductType.AIRPODS:
        setIsAirPodsModalOpen(true);
        break;
      case ProductType.ACCESSORIES:
        setIsAccessoriesModalOpen(true);
        break;
      case ProductType.NEW:
        setIsNewModalOpen(true);
        break;
      case ProductType.USED:
        setIsUsedModalOpen(true);
        break;
      default:
        break;
    }
  };

  // Handle modal close events
  const handleModalClose = () => {
    closeAllModals();
    if (onClose) onClose();
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-gray-200 font-semibold mb-4">Магазин</h3>
          <ul className="space-y-3">
            <li>
              <button 
                onClick={() => openModal(ProductType.NEW)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Новые
              </button>
            </li>
            <li>
              <button 
                onClick={() => openModal(ProductType.USED)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Б/У
              </button>
            </li>
            <li>
              <button 
                onClick={() => openModal(ProductType.IPHONE)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                iPhone
              </button>
            </li>
            <li>
              <button 
                onClick={() => openModal(ProductType.MAC)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Mac
              </button>
            </li>
            <li>
              <button 
                onClick={() => openModal(ProductType.IPAD)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                iPad
              </button>
            </li>
            <li>
              <button 
                onClick={() => openModal(ProductType.WATCH)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Apple Watch
              </button>
            </li>
            <li>
              <button 
                onClick={() => openModal(ProductType.AIRPODS)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                AirPods
              </button>
            </li>
            <li>
              <button 
                onClick={() => openModal(ProductType.ACCESSORIES)} 
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
            <li><a href="/trade-in" className="text-gray-400 hover:text-white transition-colors">Trade-in</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-200 font-semibold mb-4">О магазине</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
          </ul>
        </div>
      </div>

      <StoreIPhoneModal 
        isOpen={isIPhoneModalOpen} 
        onClose={handleModalClose} 
      />
      <StoreMacModal 
        isOpen={isMacModalOpen} 
        onClose={handleModalClose} 
      />
      <StoreWatchModal 
        isOpen={isWatchModalOpen} 
        onClose={handleModalClose} 
      />
      <StoreAirPodModal 
        isOpen={isAirPodsModalOpen} 
        onClose={handleModalClose} 
      />
      <StoreIPadModal 
        isOpen={isiPadModalOpen} 
        onClose={handleModalClose} 
      />
      <StoreAccessoriesModal 
        isOpen={isAccessoriesModalOpen} 
        onClose={handleModalClose} 
      />
      <StoreNewModal 
        isOpen={isNewModalOpen} 
        onClose={handleModalClose} 
      />
      <StoreUsedModal 
        isOpen={isUsedModalOpen} 
        onClose={handleModalClose} 
      />
      
    </>
  );
};

export default StoreModal; 