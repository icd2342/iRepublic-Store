import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" 
        onClick={onClose}
      />
      <div className="fixed top-[44px] left-0 right-0 bg-[#161617] z-50 max-h-[calc(100vh-44px)] overflow-y-auto">
        <div className="max-w-[980px] mx-auto px-6 py-12">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal; 