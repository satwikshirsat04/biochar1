import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, BookOpen, Play, Languages } from 'lucide-react';

const translations = {
  en: {
    title: "How to Use Biochar",
    intro: "Learn how to effectively use biochar to transform your farming practices and improve your soil health",
    tab1: {
      title: "5 Signs Your Soil Needs Biochar",
      description: "Discover how biochar can improve your soil health and plant growth through these five clear indicators.",
      signs: [
        {
          title: "1. Poor Water Retention",
          description: "If your soil dries out quickly after rain or irrigation, it's a clear sign that it lacks organic matter. Biochar can improve water retention by up to 30%, reducing your irrigation needs and protecting crops during dry spells."
        },
        {
          title: "2. Stunted Plant Growth",
          description: "Plants that fail to thrive despite adequate fertilization often struggle due to poor nutrient availability. Biochar creates a microhabitat for beneficial soil microbes that help make nutrients more accessible to plants."
        },
        {
          title: "3. Soil Compaction",
          description: "When your soil feels hard and dense, roots struggle to penetrate and expand. Biochar improves soil structure, creating pore spaces that allow for better root growth and soil aeration."
        },
        {
          title: "4. Excessive Fertilizer Need",
          description: "If you find yourself applying more and more fertilizer with diminishing returns, your soil likely has poor nutrient retention. Biochar's negatively charged surface attracts and holds positively charged nutrients, preventing them from leaching away."
        },
        {
          title: "5. Acidic Soil (Low pH)",
          description: "Excessively acidic soil limits the availability of essential nutrients. Biochar has a liming effect that can help neutralize soil acidity, creating a more balanced environment for crop growth."
        }
      ]
    },
    tab2: {
      title: "Benefits of Using Biochar",
      description: "Learn about the numerous advantages of using biochar, including improved soil fertility and carbon sequestration."
    },
    step1: "Step 1: Prepare Your Biochar",
    step1Desc: "Before application, biochar should be 'charged' with nutrients. Mix your Khad Kranti biochar with compost or manure in a 1:1 ratio and moisten slightly. Let this mixture sit for 24-48 hours to allow the biochar to absorb nutrients.",
    proTip: "Pro Tip: Using unconditioned biochar directly can temporarily reduce nitrogen availability to plants as it absorbs nitrogen from the soil.",
    step2: "Step 2: Apply to Your Soil",
    step2Desc: "Spread your charged biochar mixture evenly over your planting area at a rate of 1-2 kg per 10 square meters. For existing plants, apply around the drip line, avoiding direct contact with stems or trunks.",
    step3: "Step 3: Incorporate and Water",
    step3Desc: "Work the biochar mixture into the top 10-15 cm of soil using a rake or hoe. After incorporation, water thoroughly to help settle the biochar into the soil structure. For potted plants, mix 10-20% biochar into your potting soil.",
    expectedResultsTitle: "Expected Results",
    expectedResultsDesc: "You should notice improved water retention within weeks. Nutrient efficiency will improve over the first growing season, while full soil structure benefits develop over multiple seasons. Biochar is a long-term soil investment that continues working for years.",
    consultationTitle: "Need personalized advice?",
    consultationDesc: "Every soil is unique. Fill out our soil consultation form and our experts will provide customized recommendations for your farm.",
    watchVideo: "Watch: Biochar Application Technique",
    improveCTA: "Ready to improve your soil?",
    tryNow: "Try our organic biochar and see the difference in your next harvest. Our products come with a 100% satisfaction guarantee.",
    shopNow: "Shop Biochar Now",
    getConsultation: "Get Free Consultation"
  },
  hi: {
    title: "बायोचार का उपयोग कैसे करें",
    intro: "जानें कैसे बायोचार का प्रभावी उपयोग कर अपनी खेती और मिट्टी की सेहत सुधारें",
    tab1: {
      title: "5 संकेत कि आपकी मिट्टी को बायोचार की आवश्यकता है",
      description: "इन पांच स्पष्ट संकेतों के माध्यम से जानें कि बायोचार आपकी मिट्टी की सेहत और पौधों की वृद्धि को कैसे सुधार सकता है।",
      signs: [
        {
          title: "1. खराब जल धारण क्षमता",
          description: "यदि आपकी मिट्टी बारिश या सिंचाई के बाद जल्दी सूख जाती है, तो यह स्पष्ट संकेत है कि इसमें कार्बनिक पदार्थों की कमी है। बायोचार जल धारण क्षमता को 30% तक बढ़ा सकता है, जिससे सिंचाई की आवश्यकता कम होती है और सूखे के दौरान फसलों की सुरक्षा होती है।"
        },
        {
          title: "2. पौधों की वृद्धि रुकना",
          description: "पर्याप्त उर्वरक के बावजूद भी पौधों का विकास न होना अक्सर पोषक तत्वों की कम उपलब्धता के कारण होता है। बायोचार लाभकारी मिट्टी सूक्ष्मजीवों के लिए एक माइक्रोहैबिटेट बनाता है जो पौधों को पोषक तत्वों को बेहतर ढंग से उपलब्ध कराने में मदद करते हैं।"
        },
        {
          title: "3. मिट्टी का संघनन",
          description: "जब आपकी मिट्टी सख्त और घनी महसूस होती है, तो जड़ों को फैलने और प्रवेश करने में कठिनाई होती है। बायोचार मिट्टी की संरचना में सुधार करता है, जिससे जड़ों के विकास और मिट्टी की वायु संचार के लिए बेहतर स्थान बनते हैं।"
        },
        {
          title: "4. अत्यधिक उर्वरक की आवश्यकता",
          description: "यदि आपको लगातार अधिक उर्वरक डालने की आवश्यकता महसूस हो रही है पर परिणाम कम मिल रहे हैं, तो आपकी मिट्टी में पोषक तत्वों को बनाए रखने की क्षमता कम है। बायोचार की नकारात्मक रूप से आवेशित सतह सकारात्मक रूप से आवेशित पोषक तत्वों को आकर्षित करती है और उन्हें बनाए रखती है, जिससे वे बहकर नहीं जाते।"
        },
        {
          title: "5. अम्लीय मिट्टी (कम pH)",
          description: "अत्यधिक अम्लीय मिट्टी आवश्यक पोषक तत्वों की उपलब्धता को सीमित कर देती है। बायोचार में लाइमिंग प्रभाव होता है जो मिट्टी की अम्लीयता को संतुलित करने में मदद करता है, जिससे फसलों के विकास के लिए अधिक संतुलित वातावरण बनता है।"
        }
      ]
    },
    tab2: {
      title: "बायोचार के उपयोग के लाभ",
      description: "बायोचार के कई लाभों के बारे में जानें, जिनमें बेहतर मिट्टी उर्वरता और कार्बन पृथक्करण शामिल हैं।"
    },
    step1: "चरण 1: अपने बायोचार को तैयार करें",
    step1Desc: "प्रयोग से पहले, बायोचार को पोषक तत्वों से 'चार्ज' करना चाहिए। अपने खाद क्रांति बायोचार को खाद या गोबर के साथ 1:1 अनुपात में मिलाएं और थोड़ा नम करें। इस मिश्रण को 24-48 घंटे के लिए छोड़ दें ताकि बायोचार पोषक तत्वों को अवशोषित कर सके।",
    proTip: "प्रो टिप: बिना चार्ज किए बायोचार का सीधे उपयोग करने से यह मिट्टी से नाइट्रोजन अवशोषित कर सकता है, जिससे पौधों के लिए नाइट्रोजन की उपलब्धता अस्थायी रूप से कम हो सकती है।",
    step2: "चरण 2: मिट्टी पर लगाएं",
    step2Desc: "अपने चार्ज किए गए बायोचार मिश्रण को अपने रोपण क्षेत्र में समान रूप से फैलाएं, दर 1-2 किलोग्राम प्रति 10 वर्ग मीटर के हिसाब से। मौजूदा पौधों के लिए, इसे ड्रिप लाइन के चारों ओर लगाएं, तनों या तनों के सीधे संपर्क से बचें।",
    step3: "चरण 3: मिलाएं और पानी दें",
    step3Desc: "बायोचार मिश्रण को मिट्टी की ऊपरी 10-15 सेमी में रेक या कुदाल का उपयोग करके मिलाएं। मिश्रण के बाद, बायोचार को मिट्टी की संरचना में बसाने में मदद के लिए अच्छी तरह से पानी दें। गमलों के पौधों के लिए, अपनी पॉटिंग मिट्टी में 10-20% बायोचार मिलाएं।",
    expectedResultsTitle: "अपेक्षित परिणाम",
    expectedResultsDesc: "आप कुछ ही हफ्तों में बेहतर जल धारण क्षमता देखेंगे। पोषक तत्वांची कार्यक्षमता पहिल्या वाढीच्या हंगामात सुधारेल, तर पूर्ण माती संरचनेचे फायदे अनेक हंगामांमध्ये विकसित होतील. बायोचार हा दीर्घकालीन माती गुंतवणूक आहे जो वर्षानुवर्षे कार्यरत राहतो.",
    consultationTitle: "व्यक्तिगत सलाह की आवश्यकता है?",
    consultationDesc: "हर मिट्टी अद्वितीय होती है। हमारे मिट्टी परामर्श फॉर्म को भरें और हमारे विशेषज्ञ आपके खेत के लिए अनुकूलित सिफारिशें प्रदान करेंगे।",
    watchVideo: "देखें: बायोचार लगाने की तकनीक",
    improveCTA: "क्या आप अपनी मिट्टी की गुणवत्ता सुधारने के लिए तैयार हैं?",
    tryNow: "हमारा ऑर्गेनिक बायोचार आज़माएं और अगली फसल में फर्क महसूस करें। हमारे उत्पाद 100% संतुष्टि गारंटी के साथ आते हैं।",
    shopNow: "अभी बायोचार खरीदें",
    getConsultation: "नि:शुल्क परामर्श प्राप्त करें"
  },
  mr: {
    title: "बायोचार कसा वापरावा",
    intro: "बायोचारचा प्रभावी वापर करून आपली शेती आणि मातीचे आरोग्य कसे सुधारावे ते शिका",
    tab1: {
      title: "5 चिन्हे की आपल्या मातीला बायोचारची गरज आहे",
      description: "या पाच स्पष्ट चिन्हांद्वारे जाणून घ्या की बायोचार आपल्या मातीच्या आरोग्य आणि वनस्पती वाढीस कसा मदत करतो.",
      signs: [
        {
          title: "1. खराब पाणी धारण क्षमता",
          description: "जर तुमची माती पाऊस किंवा सिंचनानंतर लवकर कोरडी होते, तर हे स्पष्ट चिन्ह आहे की त्यात सेंद्रिय पदार्थांची कमतरता आहे. बायोचार पाणी धारण क्षमता 30% पर्यंत वाढवू शकतो, ज्यामुळे सिंचनाची गरज कमी होते आणि कोरड्या हंगामात पिकांचे संरक्षण होते."
        },
        {
          title: "2. वनस्पतींची वाढ खुंटणे",
          description: "पुरेशा खतांच्या वापरानंतरही वनस्पतींची वाढ न होणे हे सहसा पोषक तत्वांच्या कमी उपलब्धतेमुळे होते. बायोचार फायदेशीर माती सूक्ष्मजीवांसाठी एक सूक्ष्मवातावरण निर्माण करतो जे वनस्पतींना पोषक तत्वे अधिक सहज उपलब्ध करून देतात."
        },
        {
          title: "3. मातीचे घनरूप होणे",
          description: "जेव्हा तुमची माती कठीण आणि घन वाटते, तेव्हा मुळांना प्रवेश करण्यास आणि वाढण्यास अडचण येते. बायोचार मातीची रचना सुधारते, ज्यामुळे मुळांच्या वाढीसाठी आणि मातीच्या वायुसंचारासाठी योग्य जागा निर्माण होते."
        },
        {
          title: "4. जास्त खतांची गरज",
          description: "जर तुम्हाला वाढत्या प्रमाणात खते वापरावी लागत असूनही परिणाम कमी मिळत असतील, तर तुमच्या मातीमध्ये पोषक तत्वे धरण्याची क्षमता कमी आहे. बायोचारची नकारात्मक आवेशित पृष्ठभाग सकारात्मक आवेशित पोषक तत्वांना आकर्षित करते आणि धरून ठेवते, ज्यामुळे ती वाहून जात नाहीत."
        },
        {
          title: "5. आम्लयुक्त माती (कमी pH)",
          description: "अत्याधिक आम्लयुक्त माती आवश्यक पोषक तत्वांची उपलब्धता मर्यादित करते. बायोचारमध्ये चुन्यासारखा प्रभाव असतो जो मातीची आम्लता संतुलित करण्यास मदत करतो, ज्यामुळे पिकांच्या वाढीसाठी अधिक संतुलित वातावरण निर्माण होते."
        }
      ]
    },
    tab2: {
      title: "बायोचार वापरण्याचे फायदे",
      description: "बायोचार वापरण्याचे असंख्य फायदे जाणून घ्या, ज्यात सुधारित माती सुपीकता आणि कार्बन साठवणूक यांचा समावेश आहे."
    },
    step1: "टप्पा 1: बायोचार तयार करा",
    step1Desc: "वापरापूर्वी, बायोचारला पोषक तत्वांनी 'चार्ज' करणे आवश्यक आहे. आपला खाद क्रांती बायोचार कंपोस्ट किंवा शेणखतासोबत 1:1 प्रमाणात मिसळा आणि थोडा ओलसर करा. या मिश्रणाला 24-48 तास ठेवून द्या जेणेकरून बायोचार पोषक तत्वे शोषू शकेल.",
    proTip: "प्रो टिप: थेट वापरलेला बायोचार मातीतील नायट्रोजन शोषून घेतो आणि त्यामुळे वनस्पतींसाठी काही काळ नायट्रोजनची उपलब्धता कमी होऊ शकते.",
    step2: "टप्पा 2: मातीवर वापरा",
    step2Desc: "आपले चार्ज केलेले बायोचार मिश्रण आपल्या लागवडीच्या क्षेत्रावर समान रीतीने पसरवा, दर 1-2 किलो प्रति 10 चौरस मीटर प्रमाणे. विद्यमान झाडांसाठी, ड्रिप लाईनच्या आजूबाजूला लावा, खोड किंवा बुंध्याशी थेट संपर्क टाळा.",
    step3: "टप्पा 3: मिसळा आणि पाणी द्या",
    step3Desc: "बायोचार मिश्रणाला मातीच्या वरच्या 10-15 सेमी मध्ये रेक किंवा कुऱ्हाडीचा वापर करून मिसळा. मिसळल्यानंतर, बायोचार मातीच्या संरचनेत बसवण्यासाठी चांगले पाणी द्या. कुंडीतल्या झाडांसाठी, आपल्या कुंडीच्या मातीमध्ये 10-20% बायोचार मिसळा.",
    expectedResultsTitle: "अपेक्षित परिणाम",
    expectedResultsDesc: "काही आठवड्यांतच जल धारण क्षमतेत सुधारणा दिसून येईल. पोषक तत्वांची कार्यक्षमता पहिल्या वाढीच्या हंगामात सुधारेल, तर पूर्ण माती संरचनेचे फायदे अनेक हंगामांमध्ये विकसित होतील. बायोचार हा दीर्घकालीन माती गुंतवणूक आहे जो वर्षानुवर्षे कार्यरत राहतो.",
    consultationTitle: "वैयक्तिक सल्ल्याची गरज आहे?",
    consultationDesc: "प्रत्येक माती वेगळी असते. आमचा माती सल्ला फॉर्म भरा आणि आमचे तज्ज्ञ आपल्या शेतासाठी सानुकूलित शिफारसी देतील.",
    watchVideo: "पहा: बायोचार वापरण्याची पद्धत",
    improveCTA: "आपली माती सुधारण्यासाठी तयार आहात का?",
    tryNow: "आमचा सेंद्रिय बायोचार वापरून पाहा आणि पुढील पिकामध्ये फरक जाणवा. आमची उत्पादने 100% समाधान हमीसह येतात.",
    shopNow: "आत्ताच बायोचार खरेदी करा",
    getConsultation: "नि:शुल्क सल्ला मिळवा"
  }
};


const HowToUse = () => {
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  return (
    <div className="relative bg-gradient-to-br from-biocharCream to-white overflow-hidden">
      <Navbar />

      <div className="section-container">
        {/* Language Selector */}
        <div className="flex items-center justify-center mb-6 gap-2">
          <Languages className="h-5 w-5 text-biocharGreen" />
          <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded ${language === 'en' ? 'bg-biocharGreen text-white' : 'bg-gray-200 text-gray-800'}`}>English</button>
          <button onClick={() => setLanguage('hi')} className={`px-3 py-1 rounded ${language === 'hi' ? 'bg-biocharGreen text-white' : 'bg-gray-200 text-gray-800'}`}>हिंदी</button>
          <button onClick={() => setLanguage('mr')} className={`px-3 py-1 rounded ${language === 'mr' ? 'bg-biocharGreen text-white' : 'bg-gray-200 text-gray-800'}`}>मराठी</button>
        </div>
        <h1 className="section-title text-center mb-8">{t.title}</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {t.intro}
        </p>

        <Tabs defaultValue="signs" className="max-w-4xl mx-auto">
          <TabsList className="flex w-full overflow-x-auto no-scrollbar mb-8 gap-2 sm:gap-0">
            <TabsTrigger value="signs" className="min-w-[200px] flex-shrink-0">{t.tab1.title}</TabsTrigger>
            <TabsTrigger value="apply" className="min-w-[220px] flex-shrink-0">{t.tab2.title}</TabsTrigger>
          </TabsList>

          <TabsContent value="signs">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-biocharGreen flex items-center gap-2">
                  <AlertCircle className="h-6 w-6" />
                  {t.tab1.title}
                </CardTitle>
                <CardDescription>
                  {t.tab1.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dried, cracked soil indicating poor soil health"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <div className="space-y-6">
                  {t.tab1.signs.map((sign, index) => (
                    <section key={index} className="space-y-2">
                      <h3 className="text-xl font-semibold text-biocharBrown">{sign.title}</h3>
                      <p>{sign.description}</p>
                    </section>
                  ))}

                  <div className="bg-biocharSoftGreen p-6 rounded-lg mt-8">
                    <h4 className="font-semibold text-biocharGreen mb-2">{t.improveCTA}</h4>
                    <p>{t.tryNow}</p>
                    <a href="/#products" className="inline-block mt-4 text-white bg-biocharGreen px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                      {t.shopNow}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apply">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-biocharGreen flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  {t.tab2.title}
                </CardTitle>
                <CardDescription>
                  {t.tab2.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-biocharBrown mb-3 flex items-center gap-2">
                    <Play className="h-5 w-5 text-red-500" />
                    {t.watchVideo}
                  </h3>
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.instagram.com/p/CxmTH_ZkvJc/embed/"
                      title="How to Apply Biochar in 3 Steps"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                </div>

                <div className="space-y-6">
                  <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-biocharBrown">{t.step1}</h3>
                    <p>{t.step1Desc}</p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-2">
                      <p className="text-sm text-amber-700">{t.proTip}</p>
                    </div>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-biocharBrown">{t.step2}</h3>
                    <p>{t.step2Desc}</p>
                    <img
                      src="https://images.unsplash.com/photo-1589928144438-ef48f2993ee7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Farmer applying biochar to soil"
                      className="w-full h-48 object-cover rounded-lg mt-3"
                    />
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-biocharBrown">{t.step3}</h3>
                    <p>{t.step3Desc}</p>
                  </section>

                  <div className="bg-biocharSoftGreen p-6 rounded-lg mt-8">
                    <h4 className="font-semibold text-biocharGreen mb-2">{t.expectedResultsTitle}</h4>
                    <p>{t.expectedResultsDesc}</p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg mt-6">
                    <h4 className="font-semibold text-biocharBrown mb-2">{t.consultationTitle}</h4>
                    <p>{t.consultationDesc}</p>
                    <a href="/#farmer-form" className="inline-block mt-4 text-white bg-biocharGreen px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                      {t.getConsultation}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HowToUse;