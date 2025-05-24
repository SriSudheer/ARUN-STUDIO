import React from 'react';
import { Camera, Award, Heart, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const [bioRef, bioInView] = useInView({ threshold: 0.1 });
  const [statsSectionRef, statsSectionInView] = useInView({ threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ threshold: 0.1 });
  
  return (
    <>
      <PageHeader 
        title="About Emma" 
        subtitle="The story behind the lens"
        backgroundImage="https://images.pexels.com/photos/7113836/pexels-photo-7113836.jpeg"
      />
      
      {/* Biography Section */}
      <section className="section" ref={bioRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`relative ${bioInView ? 'fade-in' : 'opacity-0'}`}>
              <div className="aspect-w-4 aspect-h-5">
                <img 
                  src="https://images.pexels.com/photos/7113835/pexels-photo-7113835.jpeg" 
                  alt="Photographer Emma Reed"
                  className="object-cover w-full h-full shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 border-8 border-white -z-10"></div>
            </div>
            
            <div className={bioInView ? 'fade-in delay-200' : 'opacity-0'}>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Hello, I'm Emma Reed</h2>
              <p className="text-gray-600 mb-4">
                For over a decade, I've had the privilege of documenting life's most beautiful moments through my lens. What began as a passion project during my fine arts studies at RISD has blossomed into a thriving career that has allowed me to work with hundreds of wonderful clients.
              </p>
              <p className="text-gray-600 mb-4">
                I specialize in wedding and family photography, with a particular love for capturing the authentic, unscripted moments that tell your unique story. My approach blends photojournalism with fine art techniques, resulting in images that are both timeless and emotionally resonant.
              </p>
              <p className="text-gray-600 mb-4">
                When I'm not behind the camera, you'll find me hiking the California coastline with my golden retriever Max, exploring local farmers' markets, or experimenting with new baking recipes. My love for art extends beyond photography – I'm an avid collector of vintage film cameras and handmade pottery.
              </p>
              <p className="text-gray-600">
                I believe that the best photographs come from genuine connections. That's why I take the time to get to know each client, creating a comfortable environment where your authentic self can shine through.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats/Facts Section */}
      <section className="section bg-primary-50" ref={statsSectionRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`text-center ${statsSectionInView ? 'slide-up delay-100' : 'opacity-0'}`}>
              <div className="bg-white p-8 shadow-sm h-full">
                <Camera size={36} className="mx-auto mb-4 text-primary-600" />
                <h3 className="font-serif text-2xl mb-2">350+</h3>
                <p className="text-gray-600">Weddings Captured</p>
              </div>
            </div>
            
            <div className={`text-center ${statsSectionInView ? 'slide-up delay-200' : 'opacity-0'}`}>
              <div className="bg-white p-8 shadow-sm h-full">
                <Heart size={36} className="mx-auto mb-4 text-primary-600" />
                <h3 className="font-serif text-2xl mb-2">500+</h3>
                <p className="text-gray-600">Happy Families</p>
              </div>
            </div>
            
            <div className={`text-center ${statsSectionInView ? 'slide-up delay-300' : 'opacity-0'}`}>
              <div className="bg-white p-8 shadow-sm h-full">
                <Award size={36} className="mx-auto mb-4 text-primary-600" />
                <h3 className="font-serif text-2xl mb-2">15+</h3>
                <p className="text-gray-600">Industry Awards</p>
              </div>
            </div>
            
            <div className={`text-center ${statsSectionInView ? 'slide-up delay-400' : 'opacity-0'}`}>
              <div className="bg-white p-8 shadow-sm h-full">
                <Clock size={36} className="mx-auto mb-4 text-primary-600" />
                <h3 className="font-serif text-2xl mb-2">12 Years</h3>
                <p className="text-gray-600">Professional Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* My Approach Section */}
      <section className="section" ref={approachRef}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={`font-serif text-3xl md:text-4xl mb-6 ${approachInView ? 'fade-in' : 'opacity-0'}`}>
              My Approach
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${approachInView ? 'slide-up delay-100' : 'opacity-0'}`}>
              <h3 className="font-serif text-xl mb-4">Authentic Connection</h3>
              <p className="text-gray-600">
                I believe in getting to know you before your session. Understanding your story 
                and personalities helps me capture images that truly reflect who you are. My clients 
                often say they forget I'm even taking photos because the experience feels so natural.
              </p>
            </div>
            
            <div className={`${approachInView ? 'slide-up delay-200' : 'opacity-0'}`}>
              <h3 className="font-serif text-xl mb-4">Artistic Vision</h3>
              <p className="text-gray-600">
                With a background in fine arts, I approach each session with an artistic eye. 
                I'm constantly looking for beautiful light, meaningful compositions, and candid 
                moments that tell your story. My work balances technical precision with emotional depth.
              </p>
            </div>
            
            <div className={`${approachInView ? 'slide-up delay-300' : 'opacity-0'}`}>
              <h3 className="font-serif text-xl mb-4">Meticulous Editing</h3>
              <p className="text-gray-600">
                After your session, I personally edit each selected image with care. My editing style 
                is clean and timeless, with natural skin tones and rich, true-to-life colors. I avoid 
                trendy filters that may look dated in a few years.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;