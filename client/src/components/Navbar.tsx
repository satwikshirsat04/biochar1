import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover-scale">
              <Leaf className="h-8 w-8 text-biocharGreen" />
              <span className="ml-2 text-xl font-bold text-biocharGreen">
                Khad Kranti
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/#products" className="px-3 py-2 text-biocharBrown hover:text-biocharGreen transition-colors story-link">
              Products
            </a>
            <a href="/#stories" className="px-3 py-2 text-biocharBrown hover:text-biocharGreen transition-colors story-link">
              Success Stories
            </a>
            <Link to="/how-to-use" className="px-3 py-2 text-biocharBrown hover:text-biocharGreen transition-colors story-link">
              How to Use
            </Link>
            <Link to="/about-us" className="px-3 py-2 text-biocharBrown hover:text-biocharGreen transition-colors story-link">
              About Us
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-biocharBrown hover:text-biocharGreen focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/#products" 
              className="block px-3 py-2 text-base font-medium text-biocharBrown hover:text-biocharGreen hover:bg-biocharSoftGreen rounded-md"
              onClick={closeMenu}
            >
              Products
            </a>
            <a
              href="/#stories" 
              className="block px-3 py-2 text-base font-medium text-biocharBrown hover:text-biocharGreen hover:bg-biocharSoftGreen rounded-md"
              onClick={closeMenu}
            >
              Success Stories
            </a>
            <Link
              to="/how-to-use" 
              className="block px-3 py-2 text-base font-medium text-biocharBrown hover:text-biocharGreen hover:bg-biocharSoftGreen rounded-md"
              onClick={closeMenu}
            >
              How to Use
              </Link>
            <Link
              to="/about-us" 
              className="block px-3 py-2 text-base font-medium text-biocharBrown hover:text-biocharGreen hover:bg-biocharSoftGreen rounded-md"
              onClick={closeMenu}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;