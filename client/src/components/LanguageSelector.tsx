import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

type Language = 'english' | 'hindi' | 'marathi';

interface Props {
  className?: string;
}

const LanguageSelector = ({ className }: Props) => {
  const [language, setLanguage] = useState<Language>('english');

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    // Here you would typically set the language in a context
    // or trigger translation of the content
    console.log(`Language changed to ${lang}`);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Languages className="h-4 w-4" />
      <div className="flex rounded-md overflow-hidden border border-gray-200">
        <Button
          type="button"
          variant={language === 'english' ? 'default' : 'outline'}
          className={`px-3 py-1 text-xs rounded-none ${
            language === 'english'
              ? 'bg-biocharGreen text-white'
              : 'bg-white text-gray-700'
          }`}
          onClick={() => handleLanguageChange('english')}
        >
          English
        </Button>
        <Button
          type="button"
          variant={language === 'hindi' ? 'default' : 'outline'}
          className={`px-3 py-1 text-xs rounded-none ${
            language === 'hindi'
              ? 'bg-biocharGreen text-white'
              : 'bg-white text-gray-700'
          }`}
          onClick={() => handleLanguageChange('hindi')}
        >
          हिन्दी
        </Button>
        <Button
          type="button"
          variant={language === 'marathi' ? 'default' : 'outline'}
          className={`px-3 py-1 text-xs rounded-none ${
            language === 'marathi'
              ? 'bg-biocharGreen text-white'
              : 'bg-white text-gray-700'
          }`}
          onClick={() => handleLanguageChange('marathi')}
        >
          मराठी
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelector;
