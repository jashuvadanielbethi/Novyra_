import React from 'react';
import { NovyraLogo } from './NovyraLogo';
import { Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  const currentYear = 2026;
  const contactEmail = 'starthub48@gmail.com';

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigateToSection(id);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              onClick={(e) => scrollTo(e, 'top')}
              className="inline-block"
              aria-label="Novyra Home"
            >
              <NovyraLogo size="md" lightMode={true} />
            </a>

            <div className="text-xs font-mono text-slate-400">
              Digital Solutions Studio
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-body">
              Practical digital solutions that help businesses work smarter. Less manual work. More room to grow.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${contactEmail}?subject=Project%20Inquiry%20%E2%80%94%20Novyra`}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Studio Services
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="#automation"
                  onClick={(e) => scrollTo(e, 'automation')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Business &amp; Workflow Automation</span>
                  <span className="text-[10px] font-mono text-blue-400">Flagship</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollTo(e, 'services')}
                  className="hover:text-white transition-colors"
                >
                  Web Solutions &amp; Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollTo(e, 'services')}
                  className="hover:text-white transition-colors"
                >
                  Digital Design &amp; Interfaces
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollTo(e, 'services')}
                  className="hover:text-white transition-colors"
                >
                  Digital Marketing &amp; Campaigns
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Studio Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="#approach"
                  onClick={(e) => scrollTo(e, 'approach')}
                  className="hover:text-white transition-colors"
                >
                  Our Approach (How We Work)
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => scrollTo(e, 'work')}
                  className="hover:text-white transition-colors"
                >
                  Specimens &amp; Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollTo(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  About Novyra
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, 'contact')}
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Studio Attributes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Novyra. Digital Solutions Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span>Built with precision &amp; care</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Zero unverified claims</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
