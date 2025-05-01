import React from 'react';
import { Target, HeartHandshake, Sprout } from 'lucide-react';

const OurVision: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-biocharGreen text-center mb-16 animate-fade-up duration-700 delay-100">Our Vision, Mission & Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-biocharSoftGreen rounded-xl p-8 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-biocharGreen rounded-full p-4">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-biocharGreen text-center mb-4 animate-fade-up duration-700 delay-100">Our Vision</h3>
            <p className="text-gray-700 text-center">
              To transform Indian agriculture through sustainable soil solutions that enhance productivity, farmer prosperity, and environmental health.
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-biocharSoftGreen rounded-xl p-8 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex justify-center mb-6">
              <div className="bg-biocharGreen rounded-full p-4">
                <Sprout className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-biocharGreen text-center mb-4 animate-fade-up duration-700 delay-100">Our Mission</h3>
            <p className="text-gray-700 text-center">
              To provide high-quality biochar solutions accessible to every Indian farmer, supported by education and community building.
            </p>
          </div>
          
          {/* Impact */}
          <div className="bg-biocharSoftGreen rounded-xl p-8 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex justify-center mb-6">
              <div className="bg-biocharGreen rounded-full p-4">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-biocharGreen text-center mb-4 animate-fade-up duration-700 delay-100">Our Impact</h3>
            <p className="text-gray-700 text-center">
              5,000+ farmers supported, 20,000+ acres improved, 30% average yield increase, and 50,000+ tons of carbon sequestered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
