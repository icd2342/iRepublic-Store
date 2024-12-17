import React from 'react';

const AirPodsModal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Купить AirPods</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AirPods Pro 2-го поколения</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AirPods 3-го поколения</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AirPods 2-го поколения</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AirPods Max</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сравнить AirPods</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Подробнее об AirPods</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сравнить модели</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Аудио в Apple</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Music</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Аксессуары</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Чехлы</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Зарядные устройства</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Амбушюры</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AirPodsModal; 