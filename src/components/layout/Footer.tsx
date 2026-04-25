import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "@/components/common/SocialLinks";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776168875909_photo_2026-04-06_21-14-20.jpg";

  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="logo-container h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors bg-white">
              <img 
                src={logoUrl} 
                alt={t('nav.logo_alt')} 
                className="logo-image h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              {t('nav.logo_text')}
            </span>
          </Link>
          <p className="text-background/70 text-sm leading-relaxed max-w-xs">
            {t('footer.tagline')}
          </p>
          <SocialLinks className="text-background/70" />
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold mb-6 text-primary">{t('footer.quick_links')}</h3>
          <ul className="space-y-4 text-background/70 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors block py-1">{t('nav.home')}</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors block py-1">{t('nav.about')}</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors block py-1">{t('nav.services')}</Link></li>
            <li><Link to="/donate-now" className="hover:text-primary transition-colors block py-1">{t('common.donate_now')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold mb-6 text-primary">{t('footer.contact')}</h3>
          <ul className="space-y-4 text-background/70 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>{t('contact.address_value')}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:+251910845292" className="hover:text-primary transition-colors">+251 910 845 292</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:Darululamaio@gmail.com" className="hover:text-primary transition-colors">Darululamaio@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold mb-6 text-primary">{t('footer.islamic_quote')}</h3>
          <div className="border-l-2 border-primary pl-4 space-y-2">
            <p className="italic text-background/70 text-sm leading-relaxed">
              {t('footer.quote_text')}
            </p>
            <p className="text-xs text-primary font-medium">— {t('footer.quote_author')}</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/10 text-center text-background/50 text-xs uppercase">
        &copy; {new Date().getFullYear()} {t('nav.logo_text')} ISLAMIC ORGANIZATION. {t('common.all_rights')}
      </div>
    </footer>
  );
};

export default Footer;