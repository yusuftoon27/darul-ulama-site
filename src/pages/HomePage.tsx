import React from "react";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Impact from "@/components/home/Impact";
import Values from "@/components/home/Values";
import CTABanner from "@/components/home/CTABanner";

const HomePage = () => {
  return (
    <div className="pt-0">
      <Hero />
      <AboutPreview />
      <Impact />
      <Values />
      <CTABanner />
    </div>
  );
};

export default HomePage;