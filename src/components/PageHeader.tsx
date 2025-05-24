import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <header className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img
          src={backgroundImage}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <h1 className="text-white font-serif mb-4 fade-in">{title}</h1>
        {subtitle && (
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto opacity-90 fade-in delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;