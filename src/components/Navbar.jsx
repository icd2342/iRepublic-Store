import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { iRepLogoImg, appleImg, bagImg, searchImg, storeImg, macImg, ipadImg, iphoneImg, watchImg, airpodsImg, appleWatchImg, tradeInImg } from '../utils';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#161617] bg-opacity-80 backdrop-blur-sm z-50 h-[44px] group/nav hover:h-[70px] transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 h-full">
          <div className={`flex items-center ${isMobileScreen ? 'justify-start gap-4' : 'justify-between'} h-full`}>
            <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={iRepLogoImg} alt="Apple" className="w-[18px] h-[18px] group-hover/nav:w-[24px] group-hover/nav:h-[24px] transition-all duration-300" />
            </Link>

            {isMobileScreen && (
              <button 
                className="text-white opacity-80 hover:opacity-100 transition-opacity ml-2" 
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}

            {!isMobileScreen && (
              <ul className="flex items-center justify-center space-x-4 h-full flex-1">
                <li className="h-full">
                  <Link 
                    to="/" 
                    className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full flex flex-col items-center justify-end pb-1"
                  >
                    <img src={storeImg} alt="Store" className="w-0 h-0 group-hover/nav:w-[32px] group-hover/nav:h-[32px] transition-all duration-300 mb-1" />
                    Магазин
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/new" 
                    className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full flex flex-col items-center justify-end pb-1"
                  >
                    <img src={storeImg} alt="New" className="w-0 h-0 group-hover/nav:w-[32px] group-hover/nav:h-[32px] transition-all duration-300 mb-1" />
                    Новые
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/used" 
                    className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full flex flex-col items-center justify-end pb-1"
                  >
                    <img src={storeImg} alt="Used" className="w-0 h-0 group-hover/nav:w-[32px] group-hover/nav:h-[32px] transition-all duration-300 mb-1" />
                    Б/У
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/mac" 
                    className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full flex flex-col items-center justify-end pb-1"
                  >
                    <img src={macImg} alt="Mac" className="w-0 h-0 group-hover/nav:w-[32px] group-hover/nav:h-[32px] transition-all duration-300 mb-1" />
                    Mac
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/ipad" 
                    className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full flex flex-col items-center justify-end pb-1"
                  >
                    <img src={ipadImg} alt="iPad" className="w-0 h-0 group-hover/nav:w-[32px] group-hover/nav:h-[32px] transition-all duration-300 mb-1" />
                    iPad
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/iphone" 
                    className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full flex flex-col items-center justify-end pb-1"
                  >
                    <img src={iphoneImg} alt="iPhone" className="w-0 h-0 group-hover/nav:w-[32px] group-hover/nav:h-[32px] transition-all duration-300 mb-1" />
                    iPhone
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/watch" 
                    className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full flex flex-col items-center justify-end pb-1"
                  >
                    <img src={appleWatchImg} alt="Watch" className="w-0 h-0 group-hover/nav:w-[32px] group-hover/nav:h-[32px] transition-all duration-300 mb-1" />
                    Watch
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/airpods" 
                    className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full flex flex-col items-center justify-end pb-1"
                  >
                    <img src={airpodsImg} alt="AirPods" className="w-0 h-0 group-hover/nav:w-[32px] group-hover/nav:h-[32px] transition-all duration-300 mb-1" />
                    AirPods
                  </Link>
                </li>
                <li className="h-full">
                  <Link 
                    to="/trade-in" 
                    className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full flex flex-col items-center justify-end pb-1"
                  >
                    <img src={tradeInImg} alt="Trade In" className="w-0 h-0 group-hover/nav:w-[32px] group-hover/nav:h-[32px] transition-all duration-300 mb-1" />
                    Trade In
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;