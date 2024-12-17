import React from 'react';
import { appleImg } from '../utils';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`md:hidden fixed inset-0 bg-black z-50 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
      <div className="h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[44px] border-b border-[#424245]">
          <a href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            <img src={appleImg} alt="Apple" className="w-[18px] h-[18px]" />
          </a>
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
              <a href="#" className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors">
                Mac
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors">
                iPad
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors">
                iPhone
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors">
                Watch
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors">
                AirPods
              </a>
            </li>
            <li>
              <a href="/trade-in" className="flex items-center px-6 h-[44px] text-xl text-white hover:text-[#2997FF] transition-colors">
                Trade In
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu; 