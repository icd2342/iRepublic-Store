import React from 'react';
import { Link } from 'react-router-dom';
import { iRepLogoImg } from '../utils';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`md:hidden fixed inset-0 bg-black z-50 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
      <div className="h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[44px] border-b border-[#424245]">
          <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity" onClick={onClose}>
            <img src={iRepLogoImg} alt="iRepublic" className="w-[18px] h-[18px]" />
          </Link>
          <button 
            onClick={onClose}
            className="text-[#424245] hover:text-white"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-2">
          <ul className="divide-y divide-[#424245]">
            <li>
              <Link 
                to="/" 
                className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
                onClick={onClose}
              >
                Store
              </Link>
            </li>
            <li>
              <Link 
                to="/new" 
                className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
                onClick={onClose}
              >
                Новые
              </Link>
            </li>
            <li>
              <Link 
                to="/used" 
                className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
                onClick={onClose}
              >
                Б/У
              </Link>
            </li>
            <li>
              <Link 
                to="/mac" 
                className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
                onClick={onClose}
              >
                Mac
              </Link>
            </li>
            <li>
              <Link 
                to="/ipad" 
                className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
                onClick={onClose}
              >
                iPad
              </Link>
            </li>
            <li>
              <Link 
                to="/iphone" 
                className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
                onClick={onClose}
              >
                iPhone
              </Link>
            </li>
            <li>
              <Link 
                to="/watch" 
                className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
                onClick={onClose}
              >
                Watch
              </Link>
            </li>
            <li>
              <Link 
                to="/airpods" 
                className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
                onClick={onClose}
              >
                AirPods
              </Link>
            </li>
            <li>
              <Link 
                to="/trade-in" 
                className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors"
                onClick={onClose}
              >
                Trade In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu; 