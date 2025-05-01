
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const TrustBadges = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-biocharGreen mb-8 animate-fade-up duration-700 delay-100">Trusted By</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Featured on badge */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Reuters_logo.svg/1280px-Reuters_logo.svg.png" 
                alt="Reuters" 
                className="h-8 md:h-10"
              />
            </div>
            <span className="text-xs text-gray-500">As Featured In</span>
          </div>
          
          {/* Agricultural magazine */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
              <img 
                src="/images/trust-badges/krishi.jpg" 
                alt="Krishi Jagran" 
                className="h-8 md:h-10"
              />
            </div>
            <span className="text-xs text-gray-500">Featured Publication</span>
          </div>
          
          {/* Organic certification */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
              <img 
                src="/images/trust-badges/organic.webp" 
                alt="Organic Certified" 
                className="h-8 md:h-10"
              />
            </div>
            <span className="text-xs text-gray-500">100% Organic</span>
          </div>
          
          {/* Research partner */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
              <img 
                src="/images/trust-badges/images.png" 
                alt="ICAR" 
                className="h-8 md:h-10"
              />
            </div>
            <span className="text-xs text-gray-500">Research Partner</span>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
          <div className="flex items-center">
            <ShieldCheck className="h-5 w-5 text-biocharGreen mr-2" />
            <span className="text-sm font-medium">Secure Payment</span>
          </div>
          
          <div className="flex items-center">
            <ShieldCheck className="h-5 w-5 text-biocharGreen mr-2" />
            <span className="text-sm font-medium">Lab Tested</span>
          </div>
          
          <div className="flex items-center">
            <ShieldCheck className="h-5 w-5 text-biocharGreen mr-2" />
            <span className="text-sm font-medium">Quality Guaranteed</span>
          </div>
          
          <div className="flex items-center">
            <ShieldCheck className="h-5 w-5 text-biocharGreen mr-2" />
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
