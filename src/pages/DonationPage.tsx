import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

const DonationPage = () => {
  const { t } = useTranslation();
  const [activeAppealId, setActiveAppealId] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | undefined>("appeals");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const appeals = [
    { id: "students", ...t('donation.appeals.students', { returnObjects: true }) as any },
    { id: "converts", ...t('donation.appeals.converts', { returnObjects: true }) as any },
    { id: "water", ...t('donation.appeals.water', { returnObjects: true }) as any },
    { id: "mosque", ...t('donation.appeals.mosque', { returnObjects: true }) as any },
    { id: "orphans", ...t('donation.appeals.orphans', { returnObjects: true }) as any },
    { id: "food", ...t('donation.appeals.food', { returnObjects: true }) as any },
    { id: "homes", ...t('donation.appeals.homes', { returnObjects: true }) as any }
  ];

  const donationMethods = [
    {
      bank: t('donation.methods.cbe'),
      account: "1000698972126",
      color: "bg-primary/5 border-primary/20"
    },
    {
      bank: t('donation.methods.teleBirr'),
      account: "514493",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      bank: t('donation.methods.cbo'),
      account: "1000096776504",
      color: "bg-primary/5 border-primary/20"
    },
    {
      bank: t('donation.methods.awash'),
      account: "014381574001601",
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      bank: t('donation.methods.ebirr'),
      account: "8477383",
      color: "bg-primary/5 border-primary/20"
    }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        toast.success(t('common.copied'));
      } else {
        throw new Error("Clipboard API not supported");
      }
    } catch (err) {
      console.error("Clipboard API failed, trying fallback:", err);
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          toast.success(t('common.copied'));
        } else {
          throw new Error("execCommand copy failed");
        }
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr);
        toast.error("Unable to copy automatically. Please copy the number manually.");
      }
    }
  };

  const activeAppeal = appeals.find(a => a.id === activeAppealId);

  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20 space-y-6">
          <h1 className="fluid-heading-2 font-serif font-bold text-foreground">{t('donation.title')}</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            {t('donation.subtitle')}
          </p>

          <div className="max-w-3xl mx-auto px-2">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/attachments/4e57af54-abe5-4b55-934f-fd1221fc0870/1777050517858_1777034951389.png" 
              alt="Darul-Ulama Mission" 
              className="w-full h-auto rounded-2xl shadow-sm object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-8">
            <div className="w-full max-w-2xl mx-auto">
              <Accordion 
                type="single" 
                collapsible 
                value={openAccordion}
                onValueChange={setOpenAccordion}
                className="text-left border rounded-2xl overflow-hidden bg-muted/20 shadow-sm"
              >
                <AccordionItem value="appeals" className="border-b-0 px-6 accordion-item-vertical">
                  <AccordionTrigger className="accordion-header text-lg sm:text-xl font-serif font-bold hover:no-underline py-6">
                    {t('donation.appeals_header')}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80 pb-6">
                    <p className="font-medium">
                      {t('donation.appeals_intro')}
                    </p>
                    <ul className="space-y-3 list-none p-0 mb-6 mt-4">
                      {appeals.map((appeal) => (
                        <li 
                          key={appeal.id}
                          className={`appeal-item cursor-pointer transition-all duration-200 p-2 rounded-lg hover:bg-primary/5 ${activeAppealId === appeal.id ? 'is-active bg-primary/10' : ''}`}
                          onClick={() => setActiveAppealId(appeal.id)}
                        >
                          <span className="font-semibold">{appeal.title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4 border-t border-border/50 mt-4">
                      <span className="font-bold whitespace-nowrap">{t('donation.other')}</span>
                      <Input 
                        placeholder={t('donation.other_placeholder')}
                        className="bg-background h-11" 
                        onChange={(e) => {
                          if (e.target.value) setActiveAppealId(null);
                        }}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AnimatePresence mode="wait">
                  {activeAppeal && (
                    <motion.div
                      key={activeAppeal.id}
                      initial={{ opacity: 0, height: 0, margin: 0 }}
                      animate={{ opacity: 1, height: "auto", marginBottom: "1.5rem" }}
                      exit={{ opacity: 0, height: 0, margin: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 overflow-hidden"
                    >
                      <p 
                        id="appeal-description-display" 
                        className="p-5 bg-muted rounded-xl border-l-4 border-primary text-foreground/90 font-medium text-left shadow-sm"
                      >
                        {activeAppeal.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AccordionItem value="amount" className="border-b-0 px-6 border-t border-border/50 accordion-item-vertical">
                  <AccordionTrigger 
                    className="accordion-header text-lg sm:text-xl font-serif font-bold hover:no-underline py-6"
                  >
                    {t('donation.amount_header')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="mt-4">
                      <Input 
                        type="number" 
                        placeholder={t('donation.amount_placeholder')} 
                        className="bg-background h-12 text-lg border-input focus:ring-primary" 
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {donationMethods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border ${method.color} space-y-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <h3 className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2">{method.bank}</h3>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-foreground break-all leading-tight">
                  {method.account}
                </p>
              </div>
              <Button 
                onClick={() => copyToClipboard(method.account)}
                className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center space-x-2 py-6 sm:py-7 text-base sm:text-lg shadow-md hover:shadow-lg mt-4"
              >
                <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t('common.copy_number')}</span>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24 max-w-2xl mx-auto text-center p-8 sm:p-12 intl-donations-section rounded-2xl sm:rounded-3xl border border-secondary/20 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-foreground">{t('donation.intl_title')}</h2>
          <p className="text-foreground/70 mb-8 text-sm sm:text-base">
            {t('donation.intl_text')}
          </p>
          <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 px-8 py-6 text-lg h-auto shadow-md">
            <Link to="/contact">{t('common.contact_us')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;