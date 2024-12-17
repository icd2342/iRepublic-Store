import { useState } from 'react';
import { Link } from 'react-router-dom';
import { iRepLogoImg, appleImg, bagImg, searchImg } from '../utils';
import Modal from './Modal';
import StoreModal from './StoreModal';
import MacModal from './MacModal';
import IPhoneModal from './IPhoneModal';
import IPadModal from './IPadModal';
import WatchModal from './WatchModal';
import AirPodsModal from './AirPodsModal';
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
    switch (modalName) {
      case 'store':
        return <StoreModal />;
      case 'mac':
        return <MacModal />;
      case 'iphone':
        return <IPhoneModal />;
      case 'ipad':
        return <IPadModal />;
      case 'watch':
        return <WatchModal />;
      case 'airpods':
        return <AirPodsModal />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#161617] bg-opacity-80 backdrop-blur-sm z-50 h-[44px]">
        <div className="max-w-[1400px] mx-auto px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={iRepLogoImg} alt="Apple" className="w-[18px] h-[18px]" />
            </Link>

            <ul className="hidden md:flex items-center space-x-12 h-full">
              <li>
                <button 
                  onClick={() => handleModalOpen('store')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity h-full
                    ${activeModal === 'store' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  Store
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleModalOpen('mac')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity h-full
                    ${activeModal === 'mac' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  Mac
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleModalOpen('ipad')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity h-full
                    ${activeModal === 'ipad' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  iPad
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleModalOpen('iphone')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity h-full
                    ${activeModal === 'iphone' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  iPhone
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleModalOpen('watch')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity h-full
                    ${activeModal === 'watch' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  Watch
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleModalOpen('airpods')} 
                  className={`text-[#f5f5f7] text-[12px] font-medium transition-opacity h-full
                    ${activeModal === 'airpods' ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                >
                  AirPods
                </button>
              </li>
              <li>
                <Link to="/trade-in" className="text-[#f5f5f7] text-[12px] font-medium opacity-80 hover:opacity-100 transition-opacity h-full inline-flex items-center">
                  Trade In
                </Link>
              </li>
            </ul>

            <div className="flex items-center space-x-10">
              <button className="opacity-80 hover:opacity-100 transition-opacity">
                <img src={searchImg} alt="Search" className="w-[14px] h-[14px]" />
              </button>
              <button className="opacity-80 hover:opacity-100 transition-opacity">
                <img src={bagImg} alt="Bag" className="w-[14px] h-[14px]" />
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