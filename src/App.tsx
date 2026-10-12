import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatWeOfferSection } from './components/WhatWeOfferSection';
import { MetricsBar } from './components/MetricsBar';
import { AutomationSection } from './components/AutomationSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceId } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceId | 'general'>('automation');

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top' || sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromSection = (serviceId: ServiceId) => {
    setSelectedService(serviceId);
    scrollToSection('contact');
  };

  const handleDiscussProject = () => {
    scrollToSection('contact');
  };

  const handleExploreAutomation = () => {
    scrollToSection('automation');
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-body selection:bg-blue-600/15 selection:text-slate-900 flex flex-col">
      {/* 1. Header (Navbar matching design) */}
      <Header onNavigateToContact={handleDiscussProject} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section (Modern Solutions for Real Business Growth + Desk Laptop Mockup) */}
        <Hero
          onStartProject={handleDiscussProject}
          onExploreServices={() => scrollToSection('services-overview')}
        />

        {/* 3. What We Offer (Our Services 4 Cards with Highlighted Automation & Cursive Note) */}
        <WhatWeOfferSection
          onSelectService={handleSelectServiceFromSection}
          onExploreAutomationDemo={handleExploreAutomation}
        />

        {/* 4. Bottom Metrics Strip (3x Workflows, 60%+ Savings, Global Client Focus, starthub48@gmail.com) */}
        <MetricsBar />

        {/* 5. Flagship Automation Deep Interactive Simulator */}
        <AutomationSection
          onSelectAutomationCTA={() => handleSelectServiceFromSection('automation')}
        />

        {/* 6. Dedicated Interactive Demonstrations for All Services */}
        <ServicesSection
          onSelectService={handleSelectServiceFromSection}
        />

        {/* 7. How We Work (5-Step Process Timeline) */}
        <ProcessSection
          onContactClick={handleDiscussProject}
        />

        {/* 8. Why Novyra (Working Principles) */}
        <PrinciplesSection />

        {/* 9. Selected Work / Concept Demonstrations */}
        <ProjectsSection
          onContactClick={handleDiscussProject}
        />

        {/* 10. About Novyra */}
        <AboutSection
          onContactClick={handleDiscussProject}
        />

        {/* 11. Contact Section with Email Brief Generator */}
        <ContactSection
          initialService={selectedService}
        />
      </main>

      {/* 12. Studio Footer */}
      <Footer onNavigateToSection={scrollToSection} />
    </div>
  );
}
