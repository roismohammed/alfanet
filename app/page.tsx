import React from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import Hero from "@/components/Hero";
import BenefitBar from "@/components/BenefitBar";
import ConnectionForm from "@/components/ConnectionForm";
import PricingSection from "@/components/PricingSection";
import WhyAlfanet from "@/components/WhyAlfanet";
import AboutPreview from "@/components/AboutPreview";
import CoveragePreview from "@/components/CoveragePreview";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Hero />
      <BenefitBar />
      <ScrollAnimation><ConnectionForm /></ScrollAnimation>
      <ScrollAnimation><PricingSection /></ScrollAnimation>
      <ScrollAnimation><WhyAlfanet /></ScrollAnimation>
      <ScrollAnimation><AboutPreview /></ScrollAnimation>
      <ScrollAnimation><CoveragePreview /></ScrollAnimation>
      <ScrollAnimation><HowItWorks /></ScrollAnimation>
      <ScrollAnimation><FAQ /></ScrollAnimation>
      <ScrollAnimation><CTASection /></ScrollAnimation>
      <Footer />
    </main>
  );
}
