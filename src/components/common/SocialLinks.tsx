import React from "react";
import { Facebook, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface SocialLinkProps {
  className?: string;
  iconClassName?: string;
}

const SocialLinks: React.FC<SocialLinkProps> = ({ className, iconClassName }) => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.fb.com/l/6lp1kJRRR",
      icon: Facebook,
      ariaLabel: t('common.social_facebook'),
      color: "hover:text-[#1877F2]",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@darululamaOrg",
      icon: Youtube,
      ariaLabel: t('common.social_youtube'),
      color: "hover:text-[#FF0000]",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@worldwideislamiccharityo",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.14 2.8-.23 5.6-.4 8.39-.18 3.3-2.15 6.44-5.3 7.57-2.85 1.07-6.23.41-8.31-1.74-2.14-2.23-2.61-5.83-1.11-8.49 1.34-2.44 4.04-3.9 6.83-3.81 0 1.33.01 2.66 0 4-.83-.08-1.7.07-2.39.57-1.11.83-1.41 2.4-1.02 3.69.41 1.44 1.83 2.5 3.36 2.39 1.5-.03 2.87-1.18 3.19-2.65.17-2.13.12-4.26.15-6.39 0-3-.03-6 .02-8.99z"/>
        </svg>
      ),
      ariaLabel: t('common.social_tiktok'),
      color: "hover:text-[#000000] dark:hover:text-[#ffffff]",
    },
    {
      name: "Telegram",
      href: "https://t.me/duiochannel",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M11.944 0C5.347 0 0 5.347 0 11.944c0 6.597 5.347 11.944 11.944 11.944 6.597 0 11.944-5.347 11.944-11.944C23.888 5.347 18.541 0 11.944 0zm5.833 8.333l-1.944 9.167c-.139.639-.528.806-1.056.5l-3-2.222-1.444 1.389c-.167.167-.306.306-.639.306l.222-3.111 5.667-5.111c.25-.222-.056-.347-.389-.125l-7 4.417-3.028-.944c-.667-.208-.681-.667.139-.986l11.806-4.556c.556-.208 1.028.125.861.944z"/>
        </svg>
      ),
      ariaLabel: t('common.social_telegram'),
      color: "hover:text-[#26A5E4]",
    },
  ];

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className={cn(
            "transition-all duration-300 hover:scale-110 text-current",
            social.color
          )}
        >
          <social.icon className={cn("w-5 h-5", iconClassName)} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;