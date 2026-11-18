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
      setIsScrolled(window.scrollY > 24);

      const sectionIds = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 120) {
            setCurrentActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home', href: '#home' },
    { label: 'About', id: 'about', href: '#about' },
    { label: 'Services', id: 'services', href: '#services' },
    { label: 'Portfolio', id: 'portfolio', href: '#portfolio' },
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
          ? 'bg-[#0B0B0B]/92 backdrop-blur-md border-b border-[#302B24] py-3.5'
          : 'bg-[#0B0B0B]/65 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home', '#home')}
            className="hover:opacity-90 transition-opacity shrink-0 whitespace-nowrap"
            aria-label="NOVYRA Home"
          >
            <NovyraLogo size="md" />
          </a>

          {/* Zone 2: 5 Clean Single-Line Nav Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-xs font-medium tracking-[0.06em] uppercase"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentActive === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id, link.href)}
                  className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors ${
                    isActive ? 'text-[#F5F1E9]' : 'text-[#A9A49C] hover:text-[#F5F1E9]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-px bg-[#C5A46D] transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              type="button"
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-[#0B0B0B] bg-[#C5A46D] hover:bg-[#A98B59] rounded-md transition-colors whitespace-nowrap shrink-0 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#F5F1E9] hover:text-[#C5A46D] transition-colors rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#121212] border-b border-[#302B24] px-5 pt-3 pb-6">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentActive === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id, link.href)}
                  className={`text-sm py-3 border-b border-[#302B24]/60 flex items-center justify-between transition-colors ${
                    isActive ? 'text-[#C5A46D] font-semibold' : 'text-[#F5F1E9] hover:text-[#C5A46D]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-[11px] font-mono text-[#C5A46D]">Active</span>}
                </a>
              );
            })}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B0B0B] bg-[#C5A46D] hover:bg-[#A98B59] rounded-md transition-colors"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
