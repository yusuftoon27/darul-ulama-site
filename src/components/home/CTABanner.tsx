import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CTABanner = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto bg-primary rounded-3xl p-12 md:p-20 text-center space-y-8 shadow-2xl overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground">
            {t('cta_banner.title')}
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            {t('cta_banner.subtitle')}
          </p>
          <div className="pt-4">
            <Link to="/donate-now">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-7 font-bold">
                {t('common.donate_now')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;