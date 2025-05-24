import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
  inView: boolean;
  delay?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  image, 
  description, 
  link,
  inView,
  delay = ''
}) => {
  return (
    <div 
      className={`group bg-white overflow-hidden shadow-md ${
        inView ? `slide-up ${delay}` : 'opacity-0'
      }`}
    >
      <div className="aspect-w-16 aspect-h-12 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl md:text-2xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors"
        >
          View Gallery 
          <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;