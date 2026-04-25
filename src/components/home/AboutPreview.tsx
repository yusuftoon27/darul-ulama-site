import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const AboutPreview = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
        >
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1776782640297_IMG_20260414_152704_868.jpg" 
            alt="Students Studying" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('about_preview.label')}</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              {t('about_preview.title')}
            </h2>
          </div>
          <p className="text-foreground/70 text-lg leading-relaxed">
            {t('about_preview.text')}
          </p>
          <div className="pt-4">
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                {t('about_preview.cta')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;