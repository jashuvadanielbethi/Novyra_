import React from 'react';
import { NovyraLogo } from './NovyraLogo';
import { Mail, ArrowUpRight } from 'lucide-react';
import { ServiceId } from '../types';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onSelectService: (serviceId: ServiceId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection, onSelectService }) => {
  const currentYear = 2026;
  const contactEmail = 'starthub48@gmail.com';

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigateToSection(id);
  };

  return (
    <footer className="bg-[#0B0B0B] text-[#A9A49C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#302B24]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, 'home')}
              className="inline-block"
              aria-label="NOVYRA Home"
            >
              <NovyraLogo size="md" />
            </a>

            <p className="text-xs sm:text-sm text-[#A9A49C] leading-relaxed max-w-sm font-body">
              NOVYRA is a digital agency and technology solutions studio specializing in business automation, custom web development, and thoughtful digital design.
            </p>

            <div className="pt-1">
              <a
                href={`mailto:${contactEmail}?subject=Project%20Inquiry%20%E2%80%94%20NOVYRA`}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#F5F1E9] hover:text-[#C5A46D] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A46D]" aria-hidden="true" />
                <span>{contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3.5">
            <div className="text-xs font-mono uppercase tracking-[0.12em] text-[#F5F1E9]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs font-body">
              <li>
                <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="hover:text-[#C5A46D] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-[#C5A46D] transition-colors">
                  About NOVYRA
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-[#C5A46D] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => scrollTo(e, 'portfolio')} className="hover:text-[#C5A46D] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-[#C5A46D] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 space-y-3.5">
            <div className="text-xs font-mono uppercase tracking-[0.12em] text-[#F5F1E9]">
              Services
            </div>
            <ul className="space-y-2.5 text-xs font-body">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectService('automation')}
                  className="hover:text-[#C5A46D] transition-colors text-left"
                >
                  Business &amp; Workflow Automation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectService('web')}
                  className="hover:text-[#C5A46D] transition-colors text-left"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectService('solutions')}
                  className="hover:text-[#C5A46D] transition-colors text-left"
                >
                  Digital Solutions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectService('design')}
                  className="hover:text-[#C5A46D] transition-colors text-left"
                >
                  Branding &amp; Digital Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectService('marketing')}
                  className="hover:text-[#C5A46D] transition-colors text-left"
                >
                  Digital Marketing
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A46D] hover:text-[#F5F1E9] transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9A49C]">
          <div>
            &copy; {currentYear} NOVYRA. Digital Solutions Studio. All rights reserved.
          </div>

          <div className="text-xs font-mono">
            Practical Digital Engineering · {contactEmail}
          </div>
        </div>

      </div>
    </footer>
  );
};
