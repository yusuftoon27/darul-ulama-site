import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
  { code: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaali' },
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-2 px-2 hover:bg-primary/10">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline-block text-xs font-medium uppercase tracking-wider">
            {currentLanguage.code}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`cursor-pointer flex justify-between items-center ${
              i18n.language === lang.code ? 'bg-primary/10 text-primary font-bold' : ''
            }`}
          >
            <span>{lang.name}</span>
            <span className="text-[10px] opacity-60">{lang.nativeName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};