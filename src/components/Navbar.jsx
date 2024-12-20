import { useState } from 'react';
import { Link } from 'react-router-dom';
import { iRepLogoImg, appleImg, bagImg, searchImg, storeImg, macImg, ipadImg, iphoneImg, watchImg, airpodsImg, appleWatchImg, tradeInImg } from '../utils';
import Modal from './Modal';
import StoreModal, { ProductType } from './StoreModal';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleModalOpen = (modalName) => {
    if (activeModal === modalName) {
      setActiveModal(null);
    } else {
      setActiveModal(modalName);
    }
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  const renderModalContent = (modalName) => {
    const modalTypeMap = {
      'store': ProductType.STORE,
      'mac': ProductType.MAC,
      'iphone': ProductType.IPHONE,
      'ipad': ProductType.IPAD,
      'watch': ProductType.WATCH,
      'airpods': ProductType.AIRPODS,
      'accessories': ProductType.ACCESSORIES
    };

    const productType = modalTypeMap[modalName];
    if (!productType) return null;

    return (
      <StoreModal 
        isOpen={true} 
        onClose={handleModalClose} 
        initialProduct={productType} 
      />
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#161617] bg-opacity-80 backdrop-blur-sm z-50 h-[44px] group hover:h-[70px] transition-all duration-100">
        <div className="max-w-[1400px] mx-auto px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={iRepLogoImg} alt="Apple" className="w-[20px] h-[20px] group-hover:w-[28px] group-hover:h-[28px] transition-all duration-100" />
            </Link>

            <ul className="hidden md:flex items-center space-x-12 h-full">
              <li className="flex flex-col items-center">
                <button 
                  onClick={() => handleModalOpen('store')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity
                    ${activeModal === 'store' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  <img src={storeImg} alt="Store" className="w-0 h-0 mb-1 group-hover:w-[32px] group-hover:h-[32px] transition-all duration-100" />
                  Store
                </button>
              </li>
              <li className="flex flex-col items-center">
                <button 
                  onClick={() => handleModalOpen('mac')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity
                    ${activeModal === 'mac' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  <img src={macImg} alt="Mac" className="w-0 h-0 mb-1 group-hover:w-[32px] group-hover:h-[32px] transition-all duration-100" />
                  Mac
                </button>
              </li>
              <li className="flex flex-col items-center">
                <button 
                  onClick={() => handleModalOpen('ipad')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity
                    ${activeModal === 'ipad' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  <img src={ipadImg} alt="iPad" className="w-0 h-0 mb-1 group-hover:w-[32px] group-hover:h-[32px] transition-all duration-100" />
                  iPad
                </button>
              </li>
              <li className="flex flex-col items-center">
                <button 
                  onClick={() => handleModalOpen('iphone')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity
                    ${activeModal === 'iphone' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  <img src={iphoneImg} alt="iPhone" className="w-0 h-0 mb-1 group-hover:w-[32px] group-hover:h-[32px] transition-all duration-100" />
                  iPhone
                </button>
              </li>
              <li className="flex flex-col items-center">
                <button 
                  onClick={() => handleModalOpen('watch')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity
                    ${activeModal === 'watch' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  <img src={appleWatchImg} alt="Watch" className="w-0 h-0 mb-1 group-hover:w-[32px] group-hover:h-[32px] transition-all duration-100" />
                  Watch
                </button>
              </li>
              <li className="flex flex-col items-center">
                <button 
                  onClick={() => handleModalOpen('airpods')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity
                    ${activeModal === 'airpods' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  <img src={airpodsImg} alt="AirPods" className="w-0 h-0 mb-1 group-hover:w-[32px] group-hover:h-[32px] transition-all duration-100" />
                  AirPods
                </button>
              </li>
              <li className="flex flex-col items-center">
                <Link to="/trade-in" className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full inline-flex items-center">
                <img src={tradeInImg} alt="AirPods" className="w-0 h-0 mb-1 group-hover:w-[32px] group-hover:h-[32px] transition-all duration-100" />
                  </Link>
                <Link to="/trade-in" className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full inline-flex items-center">
                  Trade In
                </Link>
              </li>
            </ul>

            <div className="flex items-center space-x-10">
              <button className="opacity-80 hover:opacity-100 transition-opacity">
                <img src={searchImg} alt="Search" className="w-[16px] h-[16px] group-hover:w-[24px] group-hover:h-[24px] transition-all duration-100" />
              </button>
              <button className="opacity-80 hover:opacity-100 transition-opacity">
                <img src={bagImg} alt="Bag" className="w-[16px] h-[16px] group-hover:w-[24px] group-hover:h-[24px] transition-all duration-100" />
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {activeModal && (
        <Modal isOpen={true} onClose={handleModalClose}>
          {renderModalContent(activeModal)}
        </Modal>
      )}

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;