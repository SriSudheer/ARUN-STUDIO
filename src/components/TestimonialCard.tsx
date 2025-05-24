import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  inView: boolean;
  delay?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial,
  inView,
  delay = '' 
}) => {
  return (
    <div 
      className={`bg-white p-6 shadow-sm ${
        inView ? `slide-up ${delay}` : 'opacity-0'
      }`}
    >
      {/* Star Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'} 
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="mb-6">
        <p className="text-gray-700 italic">{testimonial.quote}</p>
      </blockquote>
      
      {/* Client */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-medium text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.service}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;