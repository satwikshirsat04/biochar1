
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Mail, Languages, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from '@/components/ui/textarea';

// Languages for translation
const languages = [
  { value: 'english', label: 'English' },
  { value: 'hindi', label: 'हिंदी (Hindi)' },
  { value: 'marathi', label: 'मराठी (Marathi)' }
];

// A simple translation dictionary for the form
const translations = {
  english: {
    title: "Get Free Soil Health Consultation",
    subtitle: "Share your details with us and our agricultural experts will provide personalized guidance for your soil.",
    name: "Your Name",
    namePlaceholder: "Enter your full name",
    phone: "Mobile Number",
    phonePlaceholder: "Enter your mobile number",
    location: "Your Location",
    locationPlaceholder: "Village/City, District, State",
    landSize: "Land Size (Acres)",
    landSizePlaceholder: "E.g. 2.5",
    crop: "Primary Crop",
    cropPlaceholder: "Select main crop",
    soilIssue: "Soil Issues (Optional)",
    soilIssuePlaceholder: "Select your soil issue",
    problem: "Describe Your Farming Problem",
    problemPlaceholder: "Tell us more about the issues you're facing with your crops or soil",
    submitButton: "Submit for Free Consultation",
    guideButton: "Get Free Soil Guide",
    aiResponse: "AI Recommendation",
    loading: "Analyzing your information...",
    responseTitle: "Initial Assessment & Recommendation",
    responseIntro: "Based on the information provided, here is our initial assessment:"
  },
  hindi: {
    title: "मुफ्त मिट्टी स्वास्थ्य परामर्श प्राप्त करें",
    subtitle: "हमारे साथ अपना विवरण साझा करें और हमारे कृषि विशेषज्ञ आपकी मिट्टी के लिए व्यक्तिगत मार्गदर्शन प्रदान करेंगे।",
    name: "आपका नाम",
    namePlaceholder: "अपना पूरा नाम दर्ज करें",
    phone: "मोबाइल नंबर",
    phonePlaceholder: "अपना मोबाइल नंबर दर्ज करें",
    location: "आपका स्थान",
    locationPlaceholder: "गांव/शहर, जिला, राज्य",
    landSize: "भूमि का आकार (एकड़)",
    landSizePlaceholder: "उदा. 2.5",
    crop: "मुख्य फसल",
    cropPlaceholder: "मुख्य फसल चुनें",
    soilIssue: "मिट्टी की समस्याएं (वैकल्पिक)",
    soilIssuePlaceholder: "अपनी मिट्टी की समस्या चुनें",
    problem: "अपनी खेती की समस्या का वर्णन करें",
    problemPlaceholder: "हमें अपनी फसलों या मिट्टी से जुड़ी समस्याओं के बारे में अधिक बताएं",
    submitButton: "मुफ्त परामर्श के लिए जमा करें",
    guideButton: "मुफ्त मिट्टी गाइड प्राप्त करें",
    aiResponse: "AI अनुशंसा",
    loading: "आपकी जानकारी का विश्लेषण किया जा रहा है...",
    responseTitle: "प्रारंभिक मूल्यांकन और सिफारिश",
    responseIntro: "प्रदान की गई जानकारी के आधार पर, यहां हमारा प्रारंभिक मूल्यांकन है:"
  },
  marathi: {
    title: "मोफत माती आरोग्य सल्ला मिळवा",
    subtitle: "आमच्याशी तुमचे तपशील शेअर करा आणि आमचे कृषी तज्ञ तुमच्या मातीसाठी वैयक्तिक मार्गदर्शन प्रदान करतील.",
    name: "तुमचे नाव",
    namePlaceholder: "तुमचे पूर्ण नाव प्रविष्ट करा",
    phone: "मोबाईल नंबर",
    phonePlaceholder: "तुमचा मोबाईल नंबर प्रविष्ट करा",
    location: "तुमचे ठिकाण",
    locationPlaceholder: "गाव/शहर, जिल्हा, राज्य",
    landSize: "जमिनीचा आकार (एकर)",
    landSizePlaceholder: "उदा. 2.5",
    crop: "प्राथमिक पिक",
    cropPlaceholder: "मुख्य पीक निवडा",
    soilIssue: "माती समस्या (पर्यायी)",
    soilIssuePlaceholder: "तुमच्या मातीची समस्या निवडा",
    problem: "तुमच्या शेती समस्येचे वर्णन करा",
    problemPlaceholder: "तुम्ही तुमच्या पिकांमध्ये किंवा मातीमध्ये येणाऱ्या समस्यांबद्दल आम्हाला अधिक सांगा",
    submitButton: "मोफत सल्ल्यासाठी सबमिट करा",
    guideButton: "मोफत माती मार्गदर्शिका मिळवा",
    aiResponse: "AI शिफारस",
    loading: "तुमच्या माहितीचे विश्लेषण केले जात आहे...",
    responseTitle: "प्राथमिक मूल्यांकन आणि शिफारस",
    responseIntro: "दिलेल्या माहितीच्या आधारे, आमचे प्राथमिक मूल्यांकन येथे आहे:"
  }
};

// AI recommendation function (simulated, would connect to a real AI service in production)
const generateAIRecommendation = async (formData) => {
  // In a real implementation, this would call an AI service or API
  // For demo, we'll simulate a delay and return a recommendation
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const cropRecommendations = {
    rice: "Our biochar solution can improve water retention in your rice fields by up to 30%. Apply 5kg per acre mixed with your regular fertilizer.",
    wheat: "For wheat cultivation, we recommend using our premium biochar at 3kg per acre. This will enhance nitrogen utilization and improve your yield.",
    cotton: "Cotton responds exceptionally well to our biochar. Apply 4kg per acre before sowing to improve soil structure and reduce irrigation needs.",
    sugarcane: "For sugarcane, use 6kg per acre of our biochar mixed with organic compost. This combination has shown yield increases of 25-40% in field trials.",
    vegetables: "Our specialized vegetable biochar formula can be applied at 2kg per acre. It's particularly effective for improving nutrient availability.",
    fruits: "Fruit orchards benefit from our slow-release biochar. Apply 3kg around the base of each mature tree annually.",
    other: "Based on your crop type, we recommend starting with our standard biochar application of 4kg per acre."
  };
  
  const soilIssueRecommendations = {
    "low-fertility": "To address low fertility, combine our biochar with compost at a 1:2 ratio before application. This will jumpstart microbial activity.",
    "acidity": "Our biochar has a natural liming effect that will help neutralize soil acidity over time. For quicker results, combine with agricultural lime.",
    "alkalinity": "For alkaline soils, our specialized acid-treated biochar variant is recommended. It helps lower pH gradually without shocking plant systems.",
    "water-retention": "Your water retention issues can be addressed with our fine-grain biochar which holds up to 5 times its weight in water.",
    "erosion": "Apply our biochar along with cover cropping to reduce erosion. The biochar helps bind soil particles while improving structure.",
    "compaction": "Our coarse biochar mixed with organic matter will help break up compacted soil over 1-2 growing seasons.",
    "other": "For your specific soil issue, we recommend soil testing followed by a customized biochar application plan."
  };
  
  // Generate response based on form data
  const cropAdvice = cropRecommendations[formData.crop] || cropRecommendations.other;
  const soilAdvice = formData.soilIssue ? soilIssueRecommendations[formData.soilIssue] : "";
  
  return {
    analysis: `For your ${formData.landSize} acre farm in ${formData.location}, growing ${formData.crop}:`,
    recommendation: cropAdvice,
    soilSpecific: soilAdvice,
    additional: "For best results, apply before the monsoon season. Our team will contact you within 24 hours to provide more specific guidance based on your local conditions."
  };
};

const FarmerForm = () => {
  const { toast } = useToast();
  const [language, setLanguage] = useState('english');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    landSize: '',
    crop: '',
    soilIssue: '',
    problem: ''
  });
  const [aiResponse, setAiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const t = translations[language];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
    
  //   try {
  //     // In a real implementation, this would also submit to a Google Form or API endpoint
  //     window.open("https://docs.google.com/forms/d/e/1FAIpQLSfyXnFYVq8Cwg3RdCGEWx9ziMCMMXRKuEOiWZj7nH4LI9fGog/viewform?usp=sharing", "_blank");
      
  //     // Generate AI recommendation
  //     const recommendation = await generateAIRecommendation(formData);
  //     setAiResponse(recommendation);
      
  //     toast({
  //       title: "Form submitted successfully!",
  //       description: "Our experts will contact you soon.",
  //     });
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     toast({
  //       title: "Submission failed",
  //       description: "Please try again later.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const recommendation = await generateAIRecommendation(formData);
      setAiResponse(recommendation);
  
      // Build pre-filled Google Form URL
      const formUrl = new URL("https://docs.google.com/forms/d/e/1FAIpQLSfyXnFYVq8Cwg3RdCGEWx9ziMCMMXRKuEOiWZj7nH4LI9fGog/viewform");
  
      formUrl.searchParams.append("entry.2005620554", formData.name);        // Name
      formUrl.searchParams.append("entry.1045781291", formData.phone);       // Mobile
      formUrl.searchParams.append("entry.1065046570", formData.location);    // Location
      formUrl.searchParams.append("entry.839337160", formData.landSize);     // Land Size
      formUrl.searchParams.append("entry.32993760", formData.crop);          // Crop
      formUrl.searchParams.append("entry.1816973569", formData.soilIssue);   // Soil Issue
  
      // Open prefilled form
      window.open(formUrl.toString(), "_blank");
  
      toast({
        title: "Form submitted successfully!",
        description: "Our experts will contact you soon.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section className="section-container bg-biocharSoftGreen" id="consultation">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">{t.title}</h2>
        <p className="text-center text-gray-600 mb-4 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        
        {/* Language selector */}
        <div className="flex items-center justify-center mb-8 gap-2">
          <Languages className="h-5 w-5 text-biocharGreen" />
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Card className="p-6 shadow-lg">
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="form">{language === 'english' ? 'Form' : language === 'hindi' ? 'फॉर्म' : 'फॉर्म'}</TabsTrigger>
              <TabsTrigger value="ai" disabled={!aiResponse}>
                {t.aiResponse}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="form">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.name}</Label>
                    <Input 
                      id="name" 
                      placeholder={t.namePlaceholder} 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input 
                      id="phone" 
                      placeholder={t.phonePlaceholder} 
                      required 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">{t.location}</Label>
                    <Input 
                      id="location" 
                      placeholder={t.locationPlaceholder} 
                      required 
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="landSize">{t.landSize}</Label>
                    <Input 
                      id="landSize" 
                      placeholder={t.landSizePlaceholder} 
                      required 
                      type="number" 
                      step="0.01" 
                      min="0"
                      value={formData.landSize}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>{t.crop}</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('crop', value)}
                      value={formData.crop}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t.cropPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rice">
                          {language === 'english' ? 'Rice' : language === 'hindi' ? 'चावल' : 'तांदूळ'}
                        </SelectItem>
                        <SelectItem value="wheat">
                          {language === 'english' ? 'Wheat' : language === 'hindi' ? 'गेहूं' : 'गहू'}
                        </SelectItem>
                        <SelectItem value="cotton">
                          {language === 'english' ? 'Cotton' : language === 'hindi' ? 'कपास' : 'कापूस'}
                        </SelectItem>
                        <SelectItem value="sugarcane">
                          {language === 'english' ? 'Sugarcane' : language === 'hindi' ? 'गन्ना' : 'ऊस'}
                        </SelectItem>
                        <SelectItem value="vegetables">
                          {language === 'english' ? 'Vegetables' : language === 'hindi' ? 'सब्जियां' : 'भाज्या'}
                        </SelectItem>
                        <SelectItem value="fruits">
                          {language === 'english' ? 'Fruits' : language === 'hindi' ? 'फल' : 'फळे'}
                        </SelectItem>
                        <SelectItem value="other">
                          {language === 'english' ? 'Other' : language === 'hindi' ? 'अन्य' : 'इतर'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>{t.soilIssue}</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('soilIssue', value)}
                      value={formData.soilIssue}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t.soilIssuePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low-fertility">
                          {language === 'english' ? 'Low Fertility' : language === 'hindi' ? 'कम उर्वरता' : 'कमी सुपीकता'}
                        </SelectItem>
                        <SelectItem value="acidity">
                          {language === 'english' ? 'High Acidity' : language === 'hindi' ? 'उच्च अम्लता' : 'जास्त आम्लता'}
                        </SelectItem>
                        <SelectItem value="alkalinity">
                          {language === 'english' ? 'High Alkalinity' : language === 'hindi' ? 'उच्च क्षारीयता' : 'जास्त क्षारता'}
                        </SelectItem>
                        <SelectItem value="water-retention">
                          {language === 'english' ? 'Poor Water Retention' : language === 'hindi' ? 'खराब जल धारण' : 'कमी पाणी धारण क्षमता'}
                        </SelectItem>
                        <SelectItem value="erosion">
                          {language === 'english' ? 'Soil Erosion' : language === 'hindi' ? 'मिट्टी कटाव' : 'मातीची धूप'}
                        </SelectItem>
                        <SelectItem value="compaction">
                          {language === 'english' ? 'Soil Compaction' : language === 'hindi' ? 'मिट्टी संघनन' : 'मातीचे दाटणे'}
                        </SelectItem>
                        <SelectItem value="other">
                          {language === 'english' ? 'Other' : language === 'hindi' ? 'अन्य' : 'इतर'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="problem">{t.problem}</Label>
                  <Textarea 
                    id="problem" 
                    placeholder={t.problemPlaceholder}
                    className="min-h-32"
                    value={formData.problem}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    type="submit" 
                    className="btn-primary w-full sm:w-auto flex items-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t.loading}
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-5 w-5" />
                        {t.submitButton}
                      </>
                    )}
                  </Button>
                  
                  <a 
                    href="https://forms.google.com/your-form-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary w-full sm:w-auto flex items-center justify-center"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {t.guideButton}
                  </a>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="ai">
              {aiResponse ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-biocharGreen">{t.responseTitle}</h3>
                  <p className="text-gray-600">{t.responseIntro}</p>
                  
                  <div className="bg-white p-4 rounded-md border border-gray-200">
                    <p className="font-semibold">{aiResponse.analysis}</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <span className="bg-biocharGreen text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                        <span>{aiResponse.recommendation}</span>
                      </li>
                      {aiResponse.soilSpecific && (
                        <li className="flex items-start">
                          <span className="bg-biocharGreen text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                          <span>{aiResponse.soilSpecific}</span>
                        </li>
                      )}
                      <li className="flex items-start">
                        <span className="bg-biocharGreen text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          {aiResponse.soilSpecific ? "3" : "2"}
                        </span>
                        <span>{aiResponse.additional}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-gray-500 italic">
                    Note: This is an initial AI-generated recommendation. Our experts will provide a comprehensive analysis after reviewing your specific situation.
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-biocharGreen" />
                </div>
              )}
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default FarmerForm;
