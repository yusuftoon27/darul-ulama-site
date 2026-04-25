import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SocialLinks from "@/components/common/SocialLinks";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "@/components/common/LanguageSelector";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776168875909_photo_2026-04-06_21-14-20.jpg";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4",
        scrolled || isOpen ? "bg-background/95 backdrop-blur-md shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
          <div className="logo-container h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors shadow-sm bg-white">
            <img 
              src={logoUrl} 
              alt={t('nav.logo_alt')} 
              className="logo-image h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-foreground truncate max-w-[150px] sm:max-w-none uppercase">
            {t('nav.logo_text')}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary font-bold" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-3 ml-2">
            <LanguageSelector />
            <Link to="/donate-now">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-md transition-all hover:shadow-lg active:scale-95">
                {t('common.donate_now')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle and Language Selector */}
        <div className="flex items-center space-x-2 md:hidden">
          <LanguageSelector />
          <button
            className="p-2 text-foreground focus:outline-none touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 space-y-6 animate-in fade-in slide-in-from-top-4 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block text-lg font-medium transition-colors py-2",
                  location.pathname === link.path ? "text-primary" : "text-foreground/80 hover:text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-border space-y-6">
            <Link to="/donate-now" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground font-bold shadow-lg py-6 text-lg">{t('common.donate_now')}</Button>
            </Link>
            <div className="flex flex-col items-center space-y-3">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{t('common.connect')}</p>
              <SocialLinks className="text-foreground/60" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;