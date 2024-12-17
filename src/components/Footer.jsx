import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#161617] text-white py-16">
      <div className="max-w-[980px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Адреса */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Адреса</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">ул. Пушкина 10, Москва</li>
              <li className="text-gray-400">ул. Ленина 25, Санкт-Петербург</li>
              <li className="text-gray-400">пр. Мира 15, Казань</li>
              <li className="text-gray-400">ул. Гагарина 8, Новосибирск</li>
            </ul>
          </div>

          {/* Телефоны */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Телефоны</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+74951234567" className="text-gray-400 hover:text-white transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <a href="tel:+78121234567" className="text-gray-400 hover:text-white transition-colors">
                  +7 (812) 123-45-67
                </a>
              </li>
              <li>
                <a href="tel:+78431234567" className="text-gray-400 hover:text-white transition-colors">
                  +7 (843) 123-45-67
                </a>
              </li>
              <li>
                <a href="tel:+73831234567" className="text-gray-400 hover:text-white transition-colors">
                  +7 (383) 123-45-67
                </a>
              </li>
            </ul>
          </div>

          {/* Аккаунты */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Социальные сети</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://instagram.com/irepublic.msk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  @irepublic.msk
                </a>
              </li>
              <li>
                <a href="https://instagram.com/irepublic.spb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  @irepublic.spb
                </a>
              </li>
              <li>
                <a href="https://instagram.com/irepublic.kzn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  @irepublic.kzn
                </a>
              </li>
              <li>
                <a href="https://instagram.com/irepublic.nsk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  @irepublic.nsk
                </a>
              </li>
            </ul>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Email</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:moscow@irepublic.ru" className="text-gray-400 hover:text-white transition-colors">
                  moscow@irepublic.ru
                </a>
              </li>
              <li>
                <a href="mailto:spb@irepublic.ru" className="text-gray-400 hover:text-white transition-colors">
                  spb@irepublic.ru
                </a>
              </li>
              <li>
                <a href="mailto:kazan@irepublic.ru" className="text-gray-400 hover:text-white transition-colors">
                  kazan@irepublic.ru
                </a>
              </li>
              <li>
                <a href="mailto:novosibirsk@irepublic.ru" className="text-gray-400 hover:text-white transition-colors">
                  novosibirsk@irepublic.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 iRepublic Store. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;