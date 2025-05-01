import React from 'react';
import { Card } from './ui/card';
import { Leaf, Droplets, Sun, Thermometer, Sprout, Shield } from 'lucide-react';

type Language = 'en' | 'hi' | 'mr';

interface Recommendation {
  title: {
    en: string;
    hi: string;
    mr: string;
  };
  description: {
    en: string;
    hi: string;
    mr: string;
  };
  icon: React.ReactNode;
  priority: 'high' | 'medium' | 'low';
}

interface SoilHealthRecommendationsProps {
  recommendations: Recommendation[];
  selectedLanguage: Language;
}

const SoilHealthRecommendations: React.FC<SoilHealthRecommendationsProps> = ({ 
  recommendations, 
  selectedLanguage 
}) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          {selectedLanguage === 'en' ? 'Your Personalized Soil Health Recommendations' :
           selectedLanguage === 'hi' ? 'आपकी व्यक्तिगत मिट्टी स्वास्थ्य सिफारिशें' :
           'तुमची वैयक्तिक माती आरोग्य शिफारसी'}
        </h3>
        <p className="text-gray-600">
          {selectedLanguage === 'en' ? 'Based on your soil profile, here are our expert recommendations' :
           selectedLanguage === 'hi' ? 'आपकी मिट्टी प्रोफाइल के आधार पर, यहां हमारी विशेषज्ञ सिफारिशें हैं' :
           'तुमच्या मातीच्या प्रोफाइलच्या आधारे, येथे आमच्या तज्ञांच्या शिफारसी आहेत'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                rec.priority === 'high' ? 'bg-red-100 text-red-600' :
                rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                'bg-green-100 text-green-600'
              }`}>
                {rec.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">{rec.title[selectedLanguage]}</h4>
                <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>{rec.description[selectedLanguage]}</p>
                <div className="mt-4">
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    rec.priority === 'high' ? 'bg-red-100 text-red-600' :
                    rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {selectedLanguage === 'en' ? `${rec.priority} priority` :
                     selectedLanguage === 'hi' ? `${rec.priority === 'high' ? 'उच्च' : rec.priority === 'medium' ? 'मध्यम' : 'कम'} प्राथमिकता` :
                     `${rec.priority === 'high' ? 'उच्च' : rec.priority === 'medium' ? 'मध्यम' : 'कमी'} प्राधान्य`}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SoilHealthRecommendations; 