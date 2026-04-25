import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contact.form.success'));
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h1 className="fluid-heading-2 font-serif font-bold text-foreground">{t('contact.title')}</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base sm:text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Details */}
          <div className="space-y-10 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">{t('contact.info_title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">{t('contact.address_label')}</h4>
                    <p className="text-foreground/70 text-sm sm:text-base">{t('contact.address_value')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">{t('contact.phone_label')}</h4>
                    <a href="tel:+251910845292" className="text-foreground/70 hover:text-primary transition-colors block text-sm sm:text-base">+251 910 845 292</a>
                    <a href="whatsapp://send?phone=+251910845292" className="text-primary text-xs sm:text-sm font-bold mt-1 block uppercase tracking-wider">{t('contact.whatsapp_message')}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">{t('contact.email_label')}</h4>
                    <a href="mailto:Darululamaio@gmail.com" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">Darululamaio@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="w-full h-[300px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Bole+Rwanda,Addis+Ababa,Ethiopia&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">{t('contact.form.name')}</label>
                  <Input placeholder={t('contact.form.name_placeholder')} required className="bg-background h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">{t('contact.form.email')}</label>
                  <Input type="email" placeholder={t('contact.form.email_placeholder')} required className="bg-background h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">{t('contact.form.subject')}</label>
                <Input placeholder={t('contact.form.subject_placeholder')} required className="bg-background h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">{t('contact.form.message')}</label>
                <Textarea placeholder={t('contact.form.message_placeholder')} className="min-h-[120px] sm:min-h-[150px] bg-background" required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-7 shadow-lg">
                <Send className="w-5 h-5 mr-2" />
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;