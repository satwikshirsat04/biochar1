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
    title: "Get Free Soil Health Consultation with AI",
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
    aiResponse: "AI Recommendation",
    loading: "Analyzing your information...",
    responseTitle: "Initial Assessment & Recommendation",
    responseIntro: "Based on the information provided, here is our initial assessment:",
    note: "Note: This is an initial AI-generated recommendation. Our experts will provide a comprehensive analysis after reviewing your specific situation.",
    analysisPrefix: "For your",
    landUnit: "acre",
    farmIn: "farm in",
    growing: "growing",

    // Crop recommendations
    riceRecommendation: "Our biochar solution can improve water retention in your rice fields by up to 30%. Apply 5kg per acre mixed with your regular fertilizer.",
    wheatRecommendation: "For wheat cultivation, we recommend using our premium biochar at 3kg per acre. This will enhance nitrogen utilization and improve your yield.",
    cottonRecommendation: "Cotton responds exceptionally well to our biochar. Apply 4kg per acre before sowing to improve soil structure and reduce irrigation needs.",
    sugarcaneRecommendation: "For sugarcane, use 6kg per acre of our biochar mixed with organic compost. This combination has shown yield increases of 25-40% in field trials.",
    vegetablesRecommendation: "Our specialized vegetable biochar formula can be applied at 2kg per acre. It's particularly effective for improving nutrient availability.",
    fruitsRecommendation: "Fruit orchards benefit from our slow-release biochar. Apply 3kg around the base of each mature tree annually.",
    otherRecommendation: "Based on your crop type, we recommend starting with our standard biochar application of 4kg per acre.",

    // Soil issue recommendations
    lowFertilityRecommendation: "To address low fertility, combine our biochar with compost at a 1:2 ratio before application. This will jumpstart microbial activity.",
    acidityRecommendation: "Our biochar has a natural liming effect that will help neutralize soil acidity over time. For quicker results, combine with agricultural lime.",
    alkalinityRecommendation: "For alkaline soils, our specialized acid-treated biochar variant is recommended. It helps lower pH gradually without shocking plant systems.",
    waterRetentionRecommendation: "Your water retention issues can be addressed with our fine-grain biochar which holds up to 5 times its weight in water.",
    erosionRecommendation: "Apply our biochar along with cover cropping to reduce erosion. The biochar helps bind soil particles while improving structure.",
    compactionRecommendation: "Our coarse biochar mixed with organic matter will help break up compacted soil over 1-2 growing seasons.",
    otherSoilRecommendation: "For your specific soil issue, we recommend soil testing followed by a customized biochar application plan.",

    // Additional recommendation
    additionalRecommendation: "For best results, apply before the monsoon season. Our team will contact you within 24 hours to provide more specific guidance based on your local conditions."
  },
  hindi: {
    title: "AI के साथ मुफ्त मिट्टी स्वास्थ्य परामर्श प्राप्त करें",
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
    aiResponse: "AI अनुशंसा",
    loading: "आपकी जानकारी का विश्लेषण किया जा रहा है...",
    responseTitle: "प्रारंभिक मूल्यांकन और सिफारिश",
    responseIntro: "प्रदान की गई जानकारी के आधार पर, यहां हमारा प्रारंभिक मूल्यांकन है:",
    note: "नोट: यह एक प्रारंभिक AI-जनित अनुशंसा है। हमारे विशेषज्ञ आपकी विशिष्ट स्थिति की समीक्षा करने के बाद एक व्यापक विश्लेषण प्रदान करेंगे।",
    analysisPrefix: "आपके",
    landUnit: "एकड़",
    farmIn: "में स्थित खेत के लिए",
    growing: "उगाई जाने वाली",

    // Crop recommendations
    riceRecommendation: "हमारा बायोचार समाधान आपके चावल के खेतों में पानी की धारण क्षमता को 30% तक बढ़ा सकता है। नियमित उर्वरक के साथ 5 किलोग्राम प्रति एकड़ मिलाकर प्रयोग करें।",
    wheatRecommendation: "गेहूं की खेती के लिए, हम अपने प्रीमियम बायोचार को 3 किलोग्राम प्रति एकड़ की दर से उपयोग करने की सलाह देते हैं। यह नाइट्रोजन के उपयोग को बढ़ाएगा और आपकी पैदावार में सुधार करेगा।",
    cottonRecommendation: "कपास हमारे बायोचार पर असाधारण रूप से अच्छी प्रतिक्रिया देती है। बुवाई से पहले 4 किलोग्राम प्रति एकड़ लगाएं ताकि मिट्टी की संरचना में सुधार हो और सिंचाई की आवश्यकता कम हो।",
    sugarcaneRecommendation: "गन्ने के लिए, हमारे बायोचार को जैविक खाद के साथ मिलाकर 6 किलोग्राम प्रति एकड़ की दर से उपयोग करें। इस संयोजन ने फील्ड ट्रायल में 25-40% की पैदावार वृद्धि दिखाई है।",
    vegetablesRecommendation: "हमारे विशेष सब्जी बायोचार फॉर्मूले को 2 किलोग्राम प्रति एकड़ की दर से लगाया जा सकता है। यह पोषक तत्वों की उपलब्धता बढ़ाने में विशेष रूप से प्रभावी है।",
    fruitsRecommendation: "फलों के बागान हमारे धीमी गति से निकलने वाले बायोचार से लाभान्वित होते हैं। प्रत्येक परिपक्व पेड़ के आधार के चारों ओर सालाना 3 किलोग्राम लगाएं।",
    otherRecommendation: "आपकी फसल के प्रकार के आधार पर, हम 4 किलोग्राम प्रति एकड़ की हमारी मानक बायोचार अनुप्रयोग से शुरुआत करने की सलाह देते हैं।",

    // Soil issue recommendations
    lowFertilityRecommendation: "कम उर्वरता को संबोधित करने के लिए, आवेदन से पहले हमारे बायोचार को खाद के साथ 1:2 के अनुपात में मिलाएं। यह सूक्ष्मजीव गतिविधि को शुरू करेगा।",
    acidityRecommendation: "हमारे बायोचार में एक प्राकृतिक चूना प्रभाव होता है जो समय के साथ मिट्टी की अम्लता को बेअसर करने में मदद करेगा। तेजी से परिणामों के लिए, कृषि चूने के साथ मिलाएं।",
    alkalinityRecommendation: "क्षारीय मिट्टी के लिए, हमारे विशेष एसिड-उपचारित बायोचार वेरिएंट की सिफारिश की जाती है। यह पौधे के सिस्टम को झटका दिए बिना धीरे-धीरे pH को कम करने में मदद करता है।",
    waterRetentionRecommendation: "आपकी पानी की धारण संबंधी समस्याओं को हमारे महीन दाने वाले बायोचार से संबोधित किया जा सकता है जो अपने वजन का 5 गुना तक पानी रखता है।",
    erosionRecommendation: "मिट्टी के कटाव को कम करने के लिए हमारे बायोचार को कवर क्रॉपिंग के साथ लगाएं। बायोचार मिट्टी के कणों को बांधने में मदद करता है जबकि संरचना में सुधार करता है।",
    compactionRecommendation: "हमारा मोटा बायोचार जैविक पदार्थ के साथ मिलाकर 1-2 फसल सीजन में संघनित मिट्टी को तोड़ने में मदद करेगा।",
    otherSoilRecommendation: "आपकी विशिष्ट मिट्टी समस्या के लिए, हम मिट्टी परीक्षण के बाद एक अनुकूलित बायोचार आवेदन योजना की सिफारिश करते हैं।",

    // Additional recommendation
    additionalRecommendation: "सर्वोत्तम परिणामों के लिए, मानसून के मौसम से पहले आवेदन करें। हमारी टीम आपके स्थानीय परिस्थितियों के आधार पर अधिक विशिष्ट मार्गदर्शन प्रदान करने के लिए 24 घंटे के भीतर आपसे संपर्क करेगी।"
  },
  marathi: {
    title: "AI द्वारे मोफत माती आरोग्य सल्ला मिळवा",
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
    aiResponse: "AI शिफारस",
    loading: "तुमच्या माहितीचे विश्लेषण केले जात आहे...",
    responseTitle: "प्राथमिक मूल्यांकन आणि शिफारस",
    responseIntro: "दिलेल्या माहितीच्या आधारे, आमचे प्राथमिक मूल्यांकन येथे आहे:",
    note: "टीप: ही एक प्रारंभिक AI-जनित शिफारस आहे. आमचे तज्ञ तुमच्या विशिष्ट परिस्थितीचे पुनरावलोकन केल्यानंतर एक व्यापक विश्लेषण प्रदान करतील.",
    analysisPrefix: "तुमच्या",
    landUnit: "एकर",
    farmIn: "मधील शेतासाठी",
    growing: "घेत असलेल्या",

    // Crop recommendations
    riceRecommendation: "आमचे बायोचार सोल्यूशन तुमच्या तांदूळ शेतात पाण्याची धारण क्षमता 30% पर्यंत वाढवू शकते. नियमित खतासह 5 किलो प्रति एकर मिसळून वापरा.",
    wheatRecommendation: "गहू लागवडीसाठी, आम्ही आमचे प्रीमियम बायोचार 3 किलो प्रति एकर या प्रमाणात वापरण्याची शिफारस करतो. यामुळे नायट्रोजनचा वापर सुधारेल आणि तुमची उत्पादकता वाढेल.",
    cottonRecommendation: "कापूस आमच्या बायोचारवर उत्कृष्ट प्रतिसाद देतो. पेरणीपूर्वी 4 किलो प्रति एकर लावल्यास मातीची रचना सुधारते आणि सिंचनाची गरज कमी होते.",
    sugarcaneRecommendation: "ऊस लागवडीसाठी, आमचे बायोचार जैविक कंपोस्टसह मिसळून 6 किलो प्रति एकर या प्रमाणात वापरा. या संयोगाने फील्ड ट्रायलमध्ये 25-40% उत्पादन वाढ दर्शविली आहे.",
    vegetablesRecommendation: "आमचे विशेष भाजीपाला बायोचार फॉर्म्युला 2 किलो प्रति एकर या प्रमाणात लावता येते. हे पोषक तत्वांची उपलब्धता सुधारण्यासाठी विशेषतः प्रभावी आहे.",
    fruitsRecommendation: "फळ बागांना आमच्या हळूवारपणे सोडणाऱ्या बायोचारचा फायदा होतो. प्रत्येक परिपक्व झाडाच्या पायथ्याशी वार्षिक 3 किलो लावा.",
    otherRecommendation: "तुमच्या पिकाच्या प्रकारावर आधारित, आम्ही 4 किलो प्रति एकर या आमच्या मानक बायोचार वापरासह सुरुवात करण्याची शिफारस करतो.",

    // Soil issue recommendations
    lowFertilityRecommendation: "कमी सुपीकतेच्या समस्येसाठी, वापरापूर्वी आमचे बायोचार कंपोस्टसह 1:2 या प्रमाणात मिसळा. यामुळे सूक्ष्मजीवांची क्रिया सुरू होईल.",
    acidityRecommendation: "आमच्या बायोचारमध्ये नैसर्गिक चुनखडी प्रभाव असतो जो कालांतराने मातीची आम्लता निष्क्रिय करण्यास मदत करेल. द्रुत परिणामांसाठी, कृषी चुन्यासह मिसळा.",
    alkalinityRecommendation: "अल्कधर्मी मातीसाठी, आमचे विशेष आम्ल-उपचारित बायोचार प्रकार शिफारस करतो. हे वनस्पती प्रणालीला धक्का न देता हळूहळू pH कमी करण्यास मदत करते.",
    waterRetentionRecommendation: "तुमच्या पाण्याच्या धारणेच्या समस्यांना आमच्या बारीक कणांच्या बायोचारने हाताळले जाऊ शकते जे त्याच्या वजनाच्या 5 पट पाणी धरून ठेवते.",
    erosionRecommendation: "मातीची धूप कमी करण्यासाठी आमचे बायोचार कव्हर क्रॉपिंगसह लावा. बायोचार मातीचे कण बांधण्यास मदत करते तर रचना सुधारते.",
    compactionRecommendation: "आमचे खडबडीत बायोचार जैविक पदार्थांसह मिसळल्यास 1-2 वाढीच्या हंगामात संकुचित माती मोडण्यास मदत होईल.",
    otherSoilRecommendation: "तुमच्या विशिष्ट मातीच्या समस्येसाठी, आम्ही मातीची चाचणी घेतल्यानंतर सानुकूलित बायोचार वापर योजनेची शिफारस करतो.",

    // Additional recommendation
    additionalRecommendation: "सर्वोत्तम परिणामांसाठी, पावसाळ्याच्या हंगामापूर्वी वापरा. आमची टीम तुमच्या स्थानिक परिस्थितीनुसार अधिक विशिष्ट मार्गदर्शन देण्यासाठी 24 तासांच्या आत तुमच्याशी संपर्क साधेल."
  }
};

// AI recommendation function
const generateAIRecommendation = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const t = translations[formData.language];

  const cropRecommendations = {
    rice: t.riceRecommendation,
    wheat: t.wheatRecommendation,
    cotton: t.cottonRecommendation,
    sugarcane: t.sugarcaneRecommendation,
    vegetables: t.vegetablesRecommendation,
    fruits: t.fruitsRecommendation,
    other: t.otherRecommendation
  };

  const soilIssueRecommendations = {
    "low-fertility": t.lowFertilityRecommendation,
    "acidity": t.acidityRecommendation,
    "alkalinity": t.alkalinityRecommendation,
    "water-retention": t.waterRetentionRecommendation,
    "erosion": t.erosionRecommendation,
    "compaction": t.compactionRecommendation,
    "other": t.otherSoilRecommendation
  };

  // Generate response based on form data
  const cropAdvice = cropRecommendations[formData.crop] || cropRecommendations.other;
  const soilAdvice = formData.soilIssue ? soilIssueRecommendations[formData.soilIssue] : "";

  return {
    analysis: `${t.analysisPrefix} ${formData.landSize} ${t.landUnit} ${t.farmIn} ${formData.location}, ${t.growing} ${formData.crop}:`,
    recommendation: cropAdvice,
    soilSpecific: soilAdvice,
    additional: t.additionalRecommendation
  };
};

const FarmerForm = () => {
  const { toast } = useToast();
  const [language, setLanguage] = useState('english');
  const [activeTab, setActiveTab] = useState('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    landSize: '',
    crop: '',
    soilIssue: '',
    problem: '',
    language: 'english'
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

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setFormData(prev => ({
      ...prev,
      language: lang
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const recommendation = await generateAIRecommendation({
        ...formData,
        language
      });
      setAiResponse(recommendation);
      setActiveTab('ai');

      toast({
        title: language === 'english' ? "Analysis complete!" :
          language === 'hindi' ? "विश्लेषण पूर्ण हुआ!" :
            "विश्लेषण पूर्ण झाले!",
        description: language === 'english' ? "See your personalized recommendations below" :
          language === 'hindi' ? "नीचे अपने व्यक्तिगत सुझाव देखें" :
            "खाली तुमची वैयक्तिक शिफारस पहा"
      });
    } catch (error) {
      console.error("Error generating recommendations:", error);
      toast({
        title: language === 'english' ? "Analysis failed" :
          language === 'hindi' ? "विश्लेषण विफल" :
            "विश्लेषण अयशस्वी",
        description: language === 'english' ? "Please try again later" :
          language === 'hindi' ? "कृपया बाद में पुनः प्रयास करें" :
            "कृपया नंतर पुन्हा प्रयत्न करा",
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
          <Select value={language} onValueChange={handleLanguageChange}>
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
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="form">
                {language === 'english' ? 'Form' : language === 'hindi' ? 'फॉर्म' : 'फॉर्म'}
              </TabsTrigger>
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

                <div className="flex justify-center">
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
                    {t.note}
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
