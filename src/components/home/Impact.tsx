import React from "react";
import Counter from "@/components/common/Counter";
import { useTranslation } from "react-i18next";

const Impact = () => {
  const { t } = useTranslation();

  const stats = [
    { value: 5000, suffix: "+", label: t('impact.students'), "data-i18n": "impact.students" },
    { value: 14, suffix: "+", label: t('impact.years'), "data-i18n": "impact.years" },
    { value: 12, suffix: "", label: t('impact.programs'), "data-i18n": "impact.programs" },
    { value: 100, suffix: "%", label: t('impact.reach'), "data-i18n": "impact.reach" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="fluid-heading-2 font-serif font-bold text-foreground">{t('impact.title')}</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base sm:text-lg">
            {t('impact.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <Counter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;