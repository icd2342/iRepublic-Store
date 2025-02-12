import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BuyModal from '../components/BuyModal';
import { Link } from 'react-router-dom';

const ProductCard = ({ model, image, price, storage, colors, colorData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <div className="relative h-[400px] w-full flex items-center justify-center mb-8">
          <img 
            src={image} 
            alt={model} 
            className="h-[350px] w-auto object-contain transition-transform duration-500 hover:scale-[1.02]" 
          />
        </div>

        <div className="space-y-1">
          {model.includes('New') && (
            <span className="text-[#c15700] text-sm">Новинка</span>
          )}
          <h2 className="text-[28px] font-medium text-black">{model}</h2>
          <p className="text-[17px] text-black/80 mb-1">Время быть лучше.</p>
          <p className="text-[14px] text-black mb-6">
            От {price.toLocaleString()} ₸ или {Math.round(price/24).toLocaleString()} ₸/мес. на 24 мес.*
          </p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0071e3] text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-[#0077ed] transition-colors duration-300"
          >
            Купить
          </button>
        </div>
      </div>

      <BuyModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        model={model}
        price={price}
        storage={storage}
        colors={colorData}
        image={image}
      />
    </>
  );
};

const NavIcon = ({ icon, title, link }) => (
  <a href={link} className="flex flex-col items-center group px-3">
    <img 
      src={icon} 
      alt={title} 
      className="w-12 h-12 object-contain mb-2 transition-transform duration-300 group-hover:scale-105" 
    />
    <span className="text-xs text-black group-hover:text-gray-600 transition-colors duration-300 text-center">
      {title}
    </span>
  </a>
);

const navIcons = [
  {
    icon: "/iconapple/IMG_4713.PNG",
    title: "Series 9",
    link: "#series-9"
  },
  {
    icon: "/iconapple/IMG_4712.PNG",
    title: "Ultra 2",
    link: "#ultra-2"
  },
  {
    icon: "/iconapple/IMG_4710.PNG",
    title: "Watch SE",
    link: "#watch-se"
  },
  {
    icon: "/iconapple/IMG_4671.PNG",
    title: "Здоровье",
    link: "#health"
  },
  {
    icon: "/iconapple/IMG_4703.PNG",
    title: "watchOS",
    link: "#watchos"
  },
  {
    icon: "/iconapple/IMG_4708.PNG",
    title: "Ремешки",
    link: "#straps"
  }
];

const WatchPage = () => {
  const [products_api, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('https://admin-dashboard-qff2.vercel.app/api/product?category=used');
    console.log(response.data);
    setProducts(response.data);
  };

  const productsView = products_api.map(product => ({
    model: product.model,
    image: product.image,
    price: product.price,
    storage: product.storage,
    colors: Array.from(new Map(product.colors.map(color => [color.hex, color.hex])).values()),
    colorData: product.colors
  }));


  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12">
        {/* Navigation Icons */}
        <div className="overflow-x-auto mb-12">
          <div className="flex justify-center gap-6 min-w-max px-4">
            {navIcons.map((icon, index) => (
              <NavIcon key={index} {...icon} />
            ))}
          </div>
        </div>

        {/* Hero Section with Video */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-black mb-3">Apple Watch</h1>
          <p className="text-xl text-black mb-8">Здоровье. Фитнес. Общение.</p>
          
          {/* Video Container */}
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden mb-16">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto object-cover"
            >
              <source src="/assets/videos/videoplayback7.webm" type="video/webm" />
              Ваш браузер не поддерживает видео
            </video>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products_api.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Trade In Banner */}
        <div className="bg-[#fbfbfd] rounded-2xl p-8 text-center mb-16">
          <h2 className="text-3xl font-semibold text-black mb-3">Trade In</h2>
          <p className="text-lg text-black mb-6 max-w-2xl mx-auto">
            Обменяйте свои старые Apple Watch и получите скидку на новые
          </p>
          <Link 
            to="/trade-in" 
            className="inline-block bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-900 transition-all duration-300"
          >
            Узнать свою скидку
          </Link>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Атырау */}
            <div className="text-center">
              <h4 className="text-lg font-medium text-black mb-4">Атырау</h4>
              <p className="text-gray-600 mb-2">Оператор: +7 747 760 0606</p>
              <div className="mb-4">
                <p className="text-gray-600">ул. Жарбосынова, 85</p>
                <p className="text-gray-600">ТРК Атырау, ул. Сатпаева, 17</p>
                <p className="text-gray-600">Жұмыс уақыты: 10:00-21:00</p>
              </div>
              <a 
                href="https://instagram.com/irepublic_atyrau_tm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0071e3] hover:text-[#0077ed] transition-colors duration-300"
              >
                @irepublic_atyrau_tm
              </a>
            </div>

            {/* Актау */}
            <div className="text-center">
              <h4 className="text-lg font-medium text-black mb-4">Актау</h4>
              <p className="text-gray-600 mb-2">Оператор: +7 747 760 1212</p>
              <div className="mb-4">
                <p className="text-gray-600">16 мкр, дом 85</p>
                <p className="text-gray-600">Жұмыс уақыты: 10:00-21:00</p>
              </div>
              <a 
                href="https://instagram.com/irepublic_aktau_tm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0071e3] hover:text-[#0077ed] transition-colors duration-300"
              >
                @irepublic_aktau_tm
              </a>
            </div>

            {/* Уральск */}
            <div className="text-center">
              <h4 className="text-lg font-medium text-black mb-4">Уральск</h4>
              <p className="text-gray-600 mb-2">Оператор: +7 747 760 7700</p>
              <div className="mb-4">
                <p className="text-gray-600">ТРЦ Форум</p>
                <p className="text-gray-600">ул. Молдагалиева, 18</p>
                <p className="text-gray-600">Жұмыс уақыты: 10:00-20:00</p>
              </div>
              <a 
                href="https://instagram.com/irepublic_uralsk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0071e3] hover:text-[#0077ed] transition-colors duration-300"
              >
                @irepublic_uralsk
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8 pb-4">
            © 2024 iRepublic. Все права защищены.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WatchPage;
