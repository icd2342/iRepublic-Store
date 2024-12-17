import React from 'react';

const IPadModal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Купить iPad</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPad Pro</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPad Air</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPad</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPad mini</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сравнить iPad</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Pencil</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Клавиатуры</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Подробнее об iPad</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iPadOS 17</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Зачем iPad</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iCloud</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Образование</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Аксессуары</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Pencil</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Клавиатуры</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Чехлы и защита</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Зарядные устройства</a></li>
        </ul>
      </div>
    </div>
  );
};

export default IPadModal; 