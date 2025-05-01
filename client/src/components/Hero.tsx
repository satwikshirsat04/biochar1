import React, { useState } from 'react';
import { ArrowRight, Download, ChevronRight, Leaf, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import BiocharJar3D from './BiocharJar3D';
import SoilHealthRecommendations from '@/components/SoilHealthRecommendations';

type Language = 'en' | 'hi' | 'mr';

const Hero: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([50]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [formData, setFormData] = useState({
    area: '',
    location: '',
    currentCrop: '',
  });

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateRecommendations = (selectedLanguage: Language) => {
    const area = formData.area || 'your';
    const location = formData.location || 'your area';
    const crop = formData.currentCrop || 'your crop';

    // Dynamic intro, translated
    const intro = {
      en: `For your ${area} acre farm in ${location}, growing ${crop}:`,
      hi: `आपके ${area} एकड़ के खेत (${location}) में ${crop} की खेती के लिए:`,
      mr: `तुमच्या ${area} एकर शेत (${location}) मध्ये ${crop} लागवडीसाठी:`
    };

    const recommendations = [
      {
        title: intro,
        description: {
          en: "1. For wheat cultivation, we recommend using our premium biochar at 3kg per acre. This will enhance nitrogen utilization and improve your yield.\n2. Our biochar has a natural liming effect that will help neutralize soil acidity over time. For quicker results, combine with agricultural lime.\n3. For best results, apply before the monsoon season. Our team will contact you within 24 hours to provide more specific guidance based on your local conditions.",
          hi: "1. गेहूं की खेती के लिए, हम प्रति एकड़ 3 किलोग्राम हमारे प्रीमियम बायोचार का उपयोग करने की सलाह देते हैं। यह नाइट्रोजन उपयोग को बढ़ाएगा और आपकी पैदावार में सुधार करेगा।\n2. हमारे बायोचार में प्राकृतिक चूना प्रभाव है जो समय के साथ मिट्टी की अम्लता को बेअसर करने में मदद करेगा। तेज परिणामों के लिए, कृषि चूने के साथ मिलाएं।\n3. सर्वोत्तम परिणामों के लिए, मानसून के मौसम से पहले लागू करें। हमारी टीम आपके स्थानीय परिस्थितियों के आधार पर अधिक विशिष्ट मार्गदर्शन प्रदान करने के लिए 24 घंटे के भीतर आपसे संपर्क करेगी।",
          mr: "1. गहूंच्या शेतीसाठी, आम्ही प्रति एकर 3 किलो आमच्या प्रीमियम बायोचारचा वापर करण्याची शिफारस करतो. यामुळे नायट्रोजनचा वापर वाढेल आणि तुमची पैदास सुधारेल.\n2. आमच्या बायोचारमध्ये नैसर्गिक चुना प्रभाव आहे जो कालांतराने मातीची आम्लता निष्क्रिय करण्यास मदत करेल. जलद परिणामांसाठी, कृषी चुना सोबत मिसळा.\n3. सर्वोत्तम परिणामांसाठी, पावसाळ्याच्या हंगामापूर्वी लागू करा. आमची टीम तुमच्या स्थानिक परिस्थितीनुसार अधिक विशिष्ट मार्गदर्शन देण्यासाठी 24 तासांच्या आत तुमच्याशी संपर्क साधेल."
        },
        icon: <Leaf className="w-6 h-6" />,
        priority: 'high' as const
      },
      {
        title: {
          en: "Expert Analysis",
          hi: "विशेषज्ञ विश्लेषण",
          mr: "तज्ञ विश्लेषण"
        },
        description: {
          en: "Note: This is an initial AI-generated recommendation. Our experts will provide a comprehensive analysis after reviewing your specific situation.",
          hi: "नोट: यह एक प्रारंभिक एआई-जनित सिफारिश है। हमारे विशेषज्ञ आपकी विशिष्ट स्थिति की समीक्षा के बाद एक व्यापक विश्लेषण प्रदान करेंगे।",
          mr: "टीप: ही एक प्रारंभिक एआई-निर्मित शिफारस आहे. आमचे तज्ञ तुमच्या विशिष्ट परिस्थितीची समीक्षा केल्यानंतर एक व्यापक विश्लेषण देतील."
        },
        icon: <Shield className="w-6 h-6" />,
        priority: 'medium' as const
      }
    ];

    return recommendations;
  };

  return (
    <div className="relative bg-gradient-to-br from-biocharCream to-white overflow-hidden">
      {/* Enhanced Monsoon Sale Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-3 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-biocharGreen font-bold text-sm md:text-base">
                🌧️ Monsoon Special
              </span>
              <span className="text-biocharGreen font-bold text-sm md:text-base">
                20% OFF on 5kg Packs
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-biocharGreen text-sm md:text-base">
                Limited Stock Available
              </span>
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs md:text-sm animate-pulse">
                Hurry!
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Container */}
        <div className="pt-12 pb-20 md:pt-16 md:pb-28 flex flex-col md:flex-row items-center">
          {/* Left Content - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-extrabold">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-biocharGreen to-biocharGreen-dark mb-2">
                Revive Your Soil,
              </span>
              <br />
              <span className="inline-block text-biocharBrown">
                Double Your Yield
              </span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-700 max-w-lg mx-auto md:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              100% Organic Biochar Solution for Healthier Plants & Better Harvests
            </p>
            
            <div className="mt-3 inline-flex items-center justify-center border border-biocharGreen bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 font-medium text-biocharGreen animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572" stroke="#155724" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="#155724" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Trusted by 5000+ Indian Farmers
              </span>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                className="btn-primary flex items-center shadow-lg shadow-biocharGreen/20 transform hover:scale-105 transition-all"
                onClick={scrollToProducts}
              >
                Transform Your Soil Today
                  <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <a 
                href="#consultation" 
                className="inline-flex"
              >
                <Button variant="outline" className="btn-secondary flex items-center transform hover:scale-105 transition-all">
                  Get Free Soil Guide
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            
            <div className="mt-6 flex items-center justify-center md:justify-start animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <a href="#stories" className="text-biocharGreen hover:text-biocharGreen-dark flex items-center text-sm">
                <span>Watch farmer testimonials</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Before/After Slider */}
          <div className="w-full md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96">
              {/* Before Image (Barren Soil) */}
              <img 
                src="/images/hero/corn2.jpg" 
                alt="Barren soil before biochar treatment"
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
              
              {/* After Image (Healthy Crops) with clipping */}
              <div className="absolute inset-0 w-full h-full overflow-hidden" 
                   style={{ 
                     clipPath: `polygon(0 0, ${sliderValue[0]}% 0, ${sliderValue[0]}% 100%, 0 100%)` 
                   }}>
                <img 
                  src="/images/hero/corn1.jpg" 
                  alt="Lush green farm with healthy crops after biochar application"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay with text
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <h3 className="text-white text-xl md:text-2xl font-bold p-6">
                  Double Your Yield with 100% Organic Biochar
                </h3>
              </div> */}
              
              {/* Slider Control */}
              <div className="absolute inset-0 flex items-center">
                <div 
                  className="absolute h-full w-1 bg-white left-0" 
                  style={{ left: `${sliderValue[0]}%` }}
                ></div>
                <div className="w-full px-4">
                  <Slider 
                    value={sliderValue} 
                    onValueChange={setSliderValue} 
                    max={100} 
                    step={1}
                    className="z-10"
                  />
                </div>
              </div>
              
              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">Before</div>
              <div className="absolute bottom-4 right-4 bg-biocharGreen text-white px-3 py-1 rounded-full text-sm">After</div>
              
              {/* 3D Biochar Jar */}
              <BiocharJar3D />
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Pattern Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,74.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
