import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-2'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="Arun Studios - Homepage"
        >
          <Camera size={28} className={`mr-2 ${isScrolled ? 'text-primary-600 dark:text-primary-400' : 'text-white dark:text-white'}`} />
          <span 
            className={`font-serif text-xl md:text-2xl font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 dark:text-white' : 'text-white dark:text-white'
            }`}
          >
            Arun Studios
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary-500 dark:hover:text-primary-400 ${
                      isActive
                        ? 'text-primary-500 dark:text-primary-400'
                        : isScrolled
                        ? 'text-gray-800 dark:text-gray-200'
                        : 'text-white dark:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="z-50"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-800 dark:text-white" />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800 dark:text-white' : 'text-white dark:text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {[
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-2xl font-medium tracking-wide uppercase transition-colors ${
                  isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-800 dark:text-white'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;