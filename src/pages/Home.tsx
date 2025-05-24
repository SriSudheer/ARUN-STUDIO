import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import CategoryCard from '../components/CategoryCard';
import TestimonialCard from '../components/TestimonialCard';
import { testimonialsData } from '../data/testimonials';
import { useInView } from '../hooks/useInView';

const Home: React.FC = () => {
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1 });
  const [categoriesRef, categoriesInView] = useInView({ threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />
      
      {/* Photography Categories */}
      <section className="section bg-gray-50" ref={categoriesRef}>
        <div className="container-custom">
          <div className={`text-center mb-12 ${categoriesInView ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Discover Our Photography</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specializing in weddings, pre-wedding sessions, and children's photography, 
              we capture the most precious moments of your life with an artistic eye.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard 
              title="Weddings" 
              image="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
              description="Timeless, emotional wedding photography capturing the magic of your special day."
              link="/portfolio/weddings"
              inView={categoriesInView}
              delay="delay-100"
            />
            <CategoryCard 
              title="Pre-Wedding" 
              image="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg"
              description="Romantic engagement sessions that tell your unique love story."
              link="/portfolio/pre-wedding"
              inView={categoriesInView}
              delay="delay-200"
            />
            <CategoryCard 
              title="Kids & Family" 
              image="https://images.pexels.com/photos/3933281/pexels-photo-3933281.jpeg"
              description="Natural, joyful photography of children and families in relaxed settings."
              link="/portfolio/kids"
              inView={categoriesInView}
              delay="delay-300"
            />
          </div>
        </div>
      </section>
      
      {/* About Section Teaser */}
      <section className="section" ref={aboutRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${aboutInView ? 'fade-in' : 'opacity-0'}`}>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Hello, I'm Emma</h2>
              <p className="text-gray-600 mb-6">
                With over 10 years of professional photography experience, I specialize in capturing 
                authentic moments that tell your unique story. My approach combines photojournalism 
                with fine art techniques to create timeless, emotional images.
              </p>
              <p className="text-gray-600 mb-8">
                I believe in creating a comfortable, relaxed environment where genuine emotions can shine. 
                Whether it's your wedding day or a family portrait session, my goal is to document the real, 
                unscripted moments that you'll treasure for generations.
              </p>
              <Link 
                to="/about" 
                className="btn-secondary flex items-center group"
              >
                More About Me 
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className={`relative ${aboutInView ? 'fade-in delay-200' : 'opacity-0'}`}>
              <div className="aspect-w-4 aspect-h-5 relative">
                <img 
                  src="https://images.pexels.com/photos/7113835/pexels-photo-7113835.jpeg" 
                  alt="Professional photographer Emma Reed"
                  className="object-cover w-full h-full shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 border-8 border-white -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section bg-primary-50" ref={testimonialsRef}>
        <div className="container-custom">
          <div className={`text-center mb-12 ${testimonialsInView ? 'fade-in' : 'opacity-0'}`}>
            <Quote size={40} className="text-primary-300 mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl mb-4">What Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about 
              their experience working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                inView={testimonialsInView}
                delay={`delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Capture Your Story?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Let's create beautiful, timeless images together. Contact us to book your session 
            or discuss your photography needs.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            Book a Session
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;