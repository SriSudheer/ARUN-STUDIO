import React from 'react';
import { GalleryImage } from '../types';
import LazyImage from './LazyImage';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  inView: boolean;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ 
  images, 
  onImageClick,
  inView 
}) => {
  // Determine which layout to use based on number of images
  const getLayoutClass = (index: number) => {
    // For a more interesting masonry-like grid
    if (images.length >= 6) {
      // Every 7th image is larger
      if (index % 7 === 0) return 'col-span-2 row-span-2';
      // Every 5th image is wide
      if (index % 5 === 0) return 'col-span-2';
      // Every 9th image is tall
      if (index % 9 === 0) return 'row-span-2';
    }
    return '';
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
      {images.map((image, index) => (
        <div 
          key={image.id} 
          className={`gallery-image ${getLayoutClass(index)} ${
            inView ? `fade-in delay-${(index % 5) * 100}` : 'opacity-0'
          }`}
          onClick={() => onImageClick(index)}
          role="button"
          tabIndex={0}
          aria-label={`View larger image of ${image.alt}`}
        >
          <LazyImage 
            src={image.src} 
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;