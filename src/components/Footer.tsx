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
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3.5">
            <a
              href="#"
              onClick={(e) => scrollTo(e, 'home')}
              className="inline-block"
              aria-label="Novyra Home"
            >
              <NovyraLogo size="md" lightMode={true} />
            </a>

            <div className="text-xs font-mono text-slate-400">
              Digital Solutions Studio
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-body">
              Novyra helps businesses simplify repetitive work, connect their tools, and build practical digital solutions.
            </p>

            <div className="pt-1">
              <a
                href={`mailto:${contactEmail}?subject=Project%20Inquiry%20%E2%80%94%20Novyra`}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Studio Navigation Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-300 font-body">
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollTo(e, 'services')}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Services</span>
                  <span className="text-[10px] font-mono text-blue-400 font-semibold">Primary: Automation</span>
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => scrollTo(e, 'work')}
                  className="hover:text-white transition-colors"
                >
                  Selected Work &amp; Prototypes
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
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Start a Conversation
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-body">
              Tell us about your team&apos;s bottlenecks or upcoming web requirements.
            </p>
            <div className="pt-1">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0052FF] hover:bg-blue-600 rounded-lg transition-colors shadow-xs"
              >
                <span>Discuss Your Workflow</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Studio Attributes */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Novyra. Digital Solutions Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span>Built with precision &amp; care</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Direct partner collaboration</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
