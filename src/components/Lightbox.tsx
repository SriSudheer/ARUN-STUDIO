import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    // Add a slight delay to allow CSS transition to work
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 10);
    
    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);
  
  const currentImage = images[currentIndex];
  
  // Handle click on the backdrop to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`lightbox-overlay ${isActive ? 'active' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="lightbox-content">
        <img 
          src={currentImage.src} 
          alt={currentImage.alt} 
          className="max-w-full max-h-full"
        />
        
        <button 
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>
        
        <div className="lightbox-controls">
          <button 
            className="lightbox-btn"
            onClick={onPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="lightbox-btn"
            onClick={onNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        <p className="text-sm opacity-75">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default Lightbox;