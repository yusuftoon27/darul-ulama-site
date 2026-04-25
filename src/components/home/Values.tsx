import React from "react";
import { BookOpen, ShieldCheck, Heart, ScrollText } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Values = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: BookOpen,
      title: t('values.quran_sunnah'),
      description: t('values.quran_sunnah_desc')
    },
    {
      icon: Heart,
      title: t('values.ikhlas'),
      description: t('values.ikhlas_desc')
    },
    {
      icon: ShieldCheck,
      title: t('values.amanah'),
      description: t('values.amanah_desc')
    },
    {
      icon: ScrollText,
      title: t('values.principles'),
      description: t('values.principles_desc')
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="fluid-heading-2 font-serif font-bold text-foreground mb-12 sm:mb-16">{t('values.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <val.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">{val.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;