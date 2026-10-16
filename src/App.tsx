import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
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

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-body selection:bg-blue-600/15 selection:text-slate-900 flex flex-col">
      {/* 1. Header (Navbar) */}
      <Header onNavigateToContact={handleDiscussProject} />

      {/* Main Flow: Hero -> Services -> Selected Work -> Contact */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onStartProject={handleDiscussProject}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Services (Primary: Business Automation + Secondary: Web, Digital Solutions, Branding, Marketing) */}
        <ServicesSection
          onSelectService={handleSelectServiceFromSection}
        />

        {/* 3. Selected Work (Prototypes + Concise About + Clearly Labelled Testimonial Placeholder) */}
        <ProjectsSection
          onContactClick={handleDiscussProject}
        />

        {/* 4. Contact (Formspree Inquiry Form + What Happens Next + starthub48@gmail.com) */}
        <ContactSection
          initialService={selectedService}
        />
      </main>

      {/* Studio Footer */}
      <Footer onNavigateToSection={scrollToSection} />
    </div>
  );
}
