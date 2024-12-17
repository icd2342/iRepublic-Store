import React from 'react';

const WatchModal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Купить Watch</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Watch Series 9</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Watch Ultra 2</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Watch SE</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сравнить Watch</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ремешки</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Подробнее о Watch</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">watchOS 10</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Fitness+</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Здоровье</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Конфиденциальность</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Аксессуары</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ремешки</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Зарядные устройства</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Чехлы</a></li>
        </ul>
      </div>
    </div>
  );
};

export default WatchModal; 