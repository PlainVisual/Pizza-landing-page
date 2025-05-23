
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Pizza Elite</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 animate-slide-in-right">
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors duration-200">About</a>
            <a href="#classes" className="text-gray-700 hover:text-orange-500 transition-colors duration-200">Class Details</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors duration-200">Contact</a>
          </nav>
          
          <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-full hover-scale animate-fade-in">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
