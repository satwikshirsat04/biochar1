
import React from 'react';
import { Leaf, Phone, Mail, MapPin, ArrowRight, FileText, MessageCircle } from 'lucide-react';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-biocharGreen text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-bold">Khad Kranti</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionizing agriculture with 100% organic biochar solutions for healthier soil and better yields.
            </p>
            <div className="flex flex-wrap gap-3">
              {/* Updated Social Media Icons */}
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110" title="Facebook">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110" title="Instagram">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110" title="Twitter">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110" title="YouTube">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 hover:scale-110" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#products" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Products
                </a>
              </li>
              {/* <li>
                <a href="#benefits" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Benefits
                </a>
              </li> */}
              <li>
                <a href="/#stories" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/#consultation" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Get Soil Guide
                </a>
              </li>
              <li>
                <a href="about-us" className="text-gray-300 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 group-hover:text-white/80" />
                <a href="tel:+917498238505" className="hover:underline">+91 7498238505</a>
              </li>
              <li className="flex items-start group">
                <MessageCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 group-hover:text-white/80" />
                <a 
                  href="https://wa.me/917498238505" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  WhatsApp Chat
                  <span className="bg-green-500 text-white text-xs rounded px-2 py-0.5 ml-2">Online</span>
                </a>
              </li>
              <li className="flex items-start group">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 group-hover:text-white/80" />
                <a href="mailto:info@khadkranti.com" className="hover:underline">info@khadkranti.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Pimpri, Pune, Maharashtra, India - 411018</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>GST: 27AABCX0123Y1Z5</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe for farming tips and product updates.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-biocharGreen-dark text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                required
              />
              <Button className="bg-white text-biocharGreen hover:bg-gray-200 transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-biocharGreen-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">&copy; 2025 Khad Kranti. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
