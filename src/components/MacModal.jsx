import React from 'react';

const MacModal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Выбери свой Mac</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Обзор Mac</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">MacBook Air</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">MacBook Pro</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iMac</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mac mini</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mac Studio</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mac Pro</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Дисплеи</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сравнить Mac</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Покупка Mac</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Купить Mac</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Аксессуары для Mac</a></li>
          <li><a href="/trade-in" className="text-gray-400 hover:text-white transition-colors">Trade-in</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Рассрочка</a></li>
        </ul>

        <h3 className="text-gray-200 font-semibold mb-4 mt-8">Специальные предложения</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mac для образования</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mac для бизнеса</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-gray-200 font-semibold mb-4">Дополнительно</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Поддержка Mac</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">macOS Sonoma</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Приложения для Mac</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Непрерывность</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">iCloud+</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Гарантия</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MacModal; 