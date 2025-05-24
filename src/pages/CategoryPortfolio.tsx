import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { galleryCategories, galleryImages } from '../data/gallery';
import { GalleryImage } from '../types';
import PageHeader from '../components/PageHeader';
import GalleryGrid from '../components/GalleryGrid';
import Lightbox from '../components/Lightbox';
import { useInView } from '../hooks/useInView';

const CategoryPortfolio: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentCategory, setCurrentCategory] = useState<any>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1 });
  
  useEffect(() => {
    if (category) {
      const filteredImages = galleryImages.filter(img => img.category === category);
      setImages(filteredImages);
      
      const categoryData = galleryCategories.find(cat => cat.slug === category);
      setCurrentCategory(categoryData);
    }
  }, [category]);
  
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  if (!currentCategory) {
    return <div className="section container-custom">Loading...</div>;
  }

  return (
    <>
      <PageHeader 
        title={currentCategory.title} 
        subtitle={currentCategory.description}
        backgroundImage={currentCategory.coverImage}
      />
      
      <section className="section" ref={galleryRef}>
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our collection of {currentCategory.title.toLowerCase()} photography, capturing authentic moments and emotions.
            </p>
          </div>
          
          <GalleryGrid 
            images={images} 
            onImageClick={openLightbox} 
            inView={galleryInView}
          />
        </div>
      </section>
      
      {lightboxOpen && (
        <Lightbox 
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
          onPrev={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
        />
      )}
    </>
  );
};

export default CategoryPortfolio;