import React from 'react';

const IPhoneModal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Купить iPhone</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPhone 15 Pro</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPhone 15</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPhone 14</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPhone 13</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPhone SE</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сравнить iPhone</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Подробнее об iPhone</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iOS 18</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Переключиться на iPhone</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iCloud</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Конфиденциальность</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Аксессуары</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Чехлы и защита</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">MagSafe</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AirTag</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Зарядные устройства</a></li>
        </ul>
      </div>
    </div>
  );
};

export default IPhoneModal; 