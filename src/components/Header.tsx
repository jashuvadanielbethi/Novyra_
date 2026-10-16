import React, { useState, useEffect } from 'react';
import { NovyraLogo } from './NovyraLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onNavigateToContact: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToContact, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionMap = [
        { elemId: 'home', navId: 'home' },
        { elemId: 'services', navId: 'services' },
        { elemId: 'work', navId: 'work' },
        { elemId: 'about', navId: 'about' },
        { elemId: 'contact', navId: 'contact' },
      ];

      for (const item of sectionMap) {
        const el = document.getElementById(item.elemId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            setCurrentActive(item.navId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', id: 'services', href: '#services' },
    { label: 'Selected Work', id: 'work', href: '#work' },
    { label: 'About', id: 'about', href: '#about' },
    { label: 'Contact', id: 'contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setCurrentActive(id);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-[0_2px_14px_rgba(15,23,42,0.04)]'
          : 'bg-white/75 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Logo & Descriptor */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, 'home', '#')}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0"
            aria-label="Novyra Digital Solutions Studio Home"
          >
            <NovyraLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentActive === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id, link.href)}
                  className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors ${
                    isActive ? 'text-slate-950 font-bold' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0052FF] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] active:bg-black rounded-lg transition-all whitespace-nowrap shadow-xs hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF] focus-visible:ring-offset-2 group"
            >
              <span>Discuss Your Workflow</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF] rounded-md"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id, link.href)}
                className={`text-base py-1.5 transition-colors border-b border-slate-100 flex items-center justify-between ${
                  currentActive === link.id
                    ? 'text-[#0052FF] font-bold'
                    : 'text-slate-800 hover:text-[#0052FF]'
                }`}
              >
                <span>{link.label}</span>
                {currentActive === link.id && <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#0F172A] rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span>Discuss Your Workflow</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
