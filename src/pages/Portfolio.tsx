import React from 'react';
import { Link } from 'react-router-dom';
import { galleryCategories } from '../data/gallery';
import PageHeader from '../components/PageHeader';
import { useInView } from '../hooks/useInView';

const Portfolio: React.FC = () => {
  const [categoriesRef, categoriesInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <PageHeader 
        title="Portfolio" 
        subtitle="Explore our photography collections by category"
        backgroundImage="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg"
      />
      
      <section className="section" ref={categoriesRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <Link 
                key={category.id} 
                to={`/portfolio/${category.slug}`}
                className={`group relative overflow-hidden aspect-w-4 aspect-h-3 shadow-lg ${
                  categoriesInView ? `fade-in delay-${index * 100}` : 'opacity-0'
                }`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-30 transition-all duration-300 group-hover:bg-opacity-50 z-10"></div>
                
                {/* Image */}
                <img 
                  src={category.coverImage} 
                  alt={category.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-6">
                  <h3 className="font-serif text-2xl md:text-3xl mb-2 text-center">
                    {category.title}
                  </h3>
                  <p className="text-white text-opacity-90 text-center max-w-xs">
                    {category.description}
                  </p>
                  <div className="mt-4 bg-white bg-opacity-20 border border-white border-opacity-40 py-2 px-4 rounded-sm backdrop-blur-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View Gallery
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;