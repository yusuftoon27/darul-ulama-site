import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Wallet, Utensils, GraduationCap, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const icons = [Wallet, Utensils, GraduationCap, Users];
  const servicesData = t('services.items', { returnObjects: true }) as any[];

  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h1 className="fluid-heading-2 font-serif font-bold text-foreground">{t('services.title')}</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base sm:text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardHeader className="p-6 sm:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-serif font-bold mb-4">{service.title}</CardTitle>
                    <CardDescription className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 sm:px-8 pb-8 pt-0">
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-foreground/80">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0" />
                          {feature
                        }</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <section className="mt-20 sm:mt-32 relative rounded-2xl sm:rounded-3xl overflow-hidden h-[350px] sm:h-[500px]">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776170033977_IMG_20260414_152639_632.jpg" 
            alt="Islamic Community Gathering" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-6 sm:p-12">
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white">{t('services.humanity_title')}</h2>
              <p className="text-white/80 text-base sm:text-lg">{t('services.humanity_quote')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;