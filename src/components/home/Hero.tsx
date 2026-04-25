import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 home-hero-bg-container">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center space-y-6 sm:space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fluid-heading-1 font-serif font-bold text-white uppercase"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed px-4"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-0"
        >
          <Link to="/donate-now" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 sm:px-10 py-6 sm:py-7">
              {t('common.donate_now')}
            </Button>
          </Link>
          <Link to="/about" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-black text-lg px-8 sm:px-10 py-6 sm:py-7">
              {t('hero.cta_mission')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;