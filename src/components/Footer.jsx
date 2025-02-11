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
              <li className="text-gray-400">ТРЦ Форум, Молдагалиева 18, Орал (10:00-20:00)</li>
              <li className="text-gray-400">ул. Жарбосынова 85, Атырау (10:00-21:00)</li>
              <li className="text-gray-400">ул. Сатпаева 17, ТРК Атырау (10:00-21:00)</li>
              <li className="text-gray-400">16 мкр, 85 дом, Актау (10:00-21:00)</li>
            </ul>
          </div>

          {/* Телефоны */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Телефоны</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+77477607700" className="text-gray-400 hover:text-white transition-colors">
                  +7 (747) 760-77-00 (Орал)
                </a>
              </li>
              <li>
                <a href="tel:+77477600606" className="text-gray-400 hover:text-white transition-colors">
                  +7 (747) 760-06-06 (Атырау)
                </a>
              </li>
              <li>
                <a href="tel:+77477601212" className="text-gray-400 hover:text-white transition-colors">
                  +7 (747) 760-12-12 (Актау)
                </a>
              </li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Социальные сети</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://instagram.com/irepublic_uralsk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  @irepublic_uralsk
                </a>
              </li>
              <li>
                <a href="https://instagram.com/irepublic_atyrau_tm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  @irepublic_atyrau_tm
                </a>
              </li>
              <li>
                <a href="https://instagram.com/irepublic_aktau_tm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  @irepublic_aktau_tm
                </a>
              </li>
            </ul>
          </div>

          {/* Email */}
          {/* <div>
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
          </div> */}
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