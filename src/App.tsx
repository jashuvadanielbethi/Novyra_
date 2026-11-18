import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CapabilitiesBar } from './components/CapabilitiesBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FinalCtaSection } from './components/FinalCtaSection';
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

  const handleStartProject = () => {
    scrollToSection('contact');
  };

  const handleExploreWork = () => {
    scrollToSection('portfolio');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0B0B0B] text-[#F5F1E9] font-body selection:bg-[#C5A46D]/25 selection:text-[#F5F1E9] flex flex-col">
        {/* Skip-to-content accessibility link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#C5A46D] focus:text-[#0B0B0B] focus:text-xs focus:font-semibold focus:rounded-md"
        >
          Skip to main content
        </a>

        {/* Sticky Top Navigation */}
        <Header onNavigateToContact={handleStartProject} />

        {/* Main Content Flow */}
        <main id="main-content" className="flex-1">
          <Hero
            onStartProject={handleStartProject}
            onExploreWork={handleExploreWork}
          />

          <CapabilitiesBar />

          <AboutSection onContactClick={handleStartProject} />

          <ServicesSection onSelectService={handleSelectServiceFromSection} />

          <ProcessSection onContactClick={handleStartProject} />

          <ProjectsSection onContactClick={handleStartProject} />

          <DifferentiationSection />

          <FaqSection />

          <ContactSection initialService={selectedService} />

          <FinalCtaSection onStartProject={handleStartProject} />
        </main>

        {/* Studio Footer */}
        <Footer
          onNavigateToSection={scrollToSection}
          onSelectService={handleSelectServiceFromSection}
        />
      </div>
    </MotionConfig>
  );
}
