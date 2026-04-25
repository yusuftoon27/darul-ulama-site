import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ImageSlider from "@/components/common/ImageSlider";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  const organizationImages = [
    "https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776693777784_IMG-20260418-WA0032.jpg",
    "https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776693777782_IMG-20260418-WA0015.jpg",
    "https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776693777783_IMG-20260418-WA0022.jpg"
  ];

  const historyImages = [
    "https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776780886795_IMG_20260414_153040_406.jpg",
    "https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776780582558_IMG-20260418-WA0033.jpg",
    "https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776780816898_IMG-20260418-WA0017.jpg",
    "https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776780842933_IMG-20260418-WA0031.jpg"
  ];

  const renderBoldPrefix = (text: string) => {
    // Detect standard colon or Ethiopic colon (፡)
    const separators = [':', '፡'];
    let separatorFound = '';
    
    for (const s of separators) {
      if (text.includes(s)) {
        separatorFound = s;
        break;
      }
    }

    if (separatorFound) {
      const parts = text.split(separatorFound);
      return (
        <>
          <span className="font-bold">{parts[0]}{separatorFound}</span>
          {parts.slice(1).join(separatorFound)}
        </>
      );
    }
    
    return text;
  };

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">{t('about.title')}</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl aspect-[21/9]">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776705774639_ethi.jpg" 
            alt="Ethiopia" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-32">
          {/* History and Growth Section Container */}
          <section className="grid grid-cols-1 gap-16 lg:gap-24 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold">{t('about.history')}</h2>
              <p className="text-foreground/70 leading-relaxed">
                {t('about.history_p1')}
              </p>
              <p className="text-foreground/70 leading-relaxed">
                {t('about.history_p2')}
              </p>
              
              <div className="pt-4">
                <ImageSlider images={historyImages} />
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold">{t('about.growth')}</h2>
                <p className="text-foreground/70 leading-relaxed">
                  {t('about.growth_p1')}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(t('about.subjects', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776694437589_83f221bc2671d67c6fa76bca5f7040c8.jpg" 
                    alt="Education" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-foreground/70 leading-relaxed">
                  {t('about.growth_p2')}
                </p>

                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776701786501_IMG_20260414_152714_236.jpg" 
                    alt="Community support and growth at Darul-Ulama Islamic Organization" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                <div className="accordion-item">
                  <button
                    onClick={() => toggleItem('charity')}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                    aria-expanded={openItem === 'charity'}
                    aria-controls="charity-content"
                    id="charity-trigger"
                    role="button"
                  >
                    <span className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {t('about.q1')}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${openItem === 'charity' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    id="charity-content"
                    role="region"
                    aria-labelledby="charity-trigger"
                    className={`accordion-content ${openItem === 'charity' ? 'open' : ''}`}
                  >
                    <div className="pb-6 space-y-4">
                      <p className="text-foreground/70 leading-relaxed">
                        {t('about.a1_p1')}
                      </p>
                      <ul className="space-y-3">
                        {(t('about.a1_list', { returnObjects: true }) as string[]).map((item, i) => (
                          <li key={i} className="flex items-start space-x-3 text-foreground/70 leading-relaxed">
                            <div className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {openItem === 'charity' && (
                        <ImageSlider images={organizationImages} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-t border-border">
                  <button
                    onClick={() => toggleItem('management')}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                    aria-expanded={openItem === 'management'}
                    aria-controls="management-content"
                    id="management-trigger"
                    role="button"
                  >
                    <span className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {t('about.q2')}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${openItem === 'management' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    id="management-content"
                    role="region"
                    aria-labelledby="management-trigger"
                    className={`accordion-content ${openItem === 'management' ? 'open' : ''}`}
                  >
                    <div className="pb-6 space-y-4">
                      <p className="text-foreground/70 leading-relaxed">
                        {t('about.a2')}
                      </p>
                      <img 
                        src="https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776774887583_1776773337400.png" 
                        alt="Organizational Leadership Team Photo" 
                        className="w-full h-auto rounded-xl shadow-md mt-2"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-t border-border">
                  <button
                    onClick={() => toggleItem('sadaqah')}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                    aria-expanded={openItem === 'sadaqah'}
                    aria-controls="sadaqah-content"
                    id="sadaqah-trigger"
                    role="button"
                  >
                    <span className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {t('about.q3')}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${openItem === 'sadaqah' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    id="sadaqah-content"
                    role="region"
                    aria-labelledby="sadaqah-trigger"
                    className={`accordion-content ${openItem === 'sadaqah' ? 'open' : ''}`}
                  >
                    <div className="pb-6 space-y-4">
                      <p className="text-foreground/70 leading-relaxed">
                        {t('about.a3')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-t border-border">
                  <button
                    onClick={() => toggleItem('expenses')}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                    aria-expanded={openItem === 'expenses'}
                    aria-controls="expenses-content"
                    id="expenses-trigger"
                    role="button"
                  >
                    <span className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {t('about.q4')}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${openItem === 'expenses' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    id="expenses-content"
                    role="region"
                    aria-labelledby="expenses-trigger"
                    className={`accordion-content ${openItem === 'expenses' ? 'open' : ''}`}
                  >
                    <div className="pb-6 space-y-4">
                      <p className="text-foreground/70 leading-relaxed">
                        {t('about.a4_p1')}
                      </p>
                      <ul className="space-y-3">
                        {(t('about.a4_list', { returnObjects: true }) as string[]).map((item, i) => (
                          <li key={i} className="text-foreground/70 leading-relaxed">
                            <div className="flex items-start space-x-3">
                              <div className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                              <span>{renderBoldPrefix(item)}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center space-y-8">
            <h2 className="text-3xl font-serif font-bold">{t('about.legacy_title')}</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              {t('about.legacy_text')}
            </p>
            <Link to="/donate-now">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-12 py-7">
                {t('common.donate_now')}
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;