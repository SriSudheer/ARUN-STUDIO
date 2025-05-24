import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
    title: 'Capturing Life\'s Beautiful Moments',
    subtitle: 'Wedding & Kids Photography',
    align: 'center',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
    title: 'Tell Your Love Story',
    subtitle: 'Pre-Wedding Photography',
    align: 'left',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3933281/pexels-photo-3933281.jpeg',
    title: 'Cherish Every Milestone',
    subtitle: 'Family & Kids Photography',
    align: 'right',
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    const newIndex = (currentSlide + 1) % slides.length;
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const getTextAlignment = () => {
    const align = slides[currentSlide].align;
    if (align === 'left') return 'text-left items-start';
    if (align === 'right') return 'text-right items-end';
    return 'text-center items-center';
  };

  return (
    <section className="relative h-screen-90 bg-gray-900 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full transition-transform duration-2000 ease-out transform scale-105"
              style={{ 
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
              }}
            />
          </div>
          
          {/* Slide Content */}
          <div className="container-custom h-full relative z-20">
            <div className={`flex flex-col justify-center h-full ${getTextAlignment()} px-4 md:px-0`}>
              <div className={`max-w-2xl transition-all duration-1000 delay-300 
                ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white opacity-90 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/portfolio" className="btn-primary">
                    View Portfolio
                  </Link>
                  <Link to="/contact" className="btn bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10">
                    Book a Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;