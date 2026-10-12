import React from 'react';
import { NovyraLogo } from './NovyraLogo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-900/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className="text-blue-700 font-bold">Studio Overview</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>About Novyra</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display leading-[1.12]">
              Practical Digital Solutions That Help Businesses Work Smarter.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
              <p>
                Novyra is a digital solutions studio focused on making business processes simpler and digital experiences more useful. We bring together automation, design, and web technology to solve practical problems with clarity and care.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Rather than selling complex enterprise packages or decorative software templates, we partner with teams who have specific operational friction: repetitive data entry, disconnected tools, or digital surfaces that no longer reflect the standard of their work.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors shadow-xs"
              >
                <span>Discuss Your Goals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-slate-500 font-medium">
                Remote collaboration · Global client standards
              </span>
            </div>
          </div>

          {/* Right Column: Studio Disciplines / Ethos Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF9F5] border border-slate-200/90 rounded-lg p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <NovyraLogo size="sm" />
                <span className="font-mono text-xs text-slate-500">
                  Digital Solutions Studio
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-blue-700 mt-0.5">01</span>
                  <div>
                    <strong className="text-slate-900 font-semibold block mb-0.5">
                      Business Automation First
                    </strong>
                    <span>
                      Prioritizing workflow streamlining, integration mapping, and manual task reduction before cosmetic redesigns.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-blue-700 mt-0.5">02</span>
                  <div>
                    <strong className="text-slate-900 font-semibold block mb-0.5">
                      Human Oversight Always
                    </strong>
                    <span>
                      Designing clear approval checks, exception logs, and transparent parameters so business operators stay in total control.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-blue-700 mt-0.5">03</span>
                  <div>
                    <strong className="text-slate-900 font-semibold block mb-0.5">
                      Accessible, Lean Engineering
                    </strong>
                    <span>
                      Fast-loading code, zero template bloat, accessible contrast, and standard TypeScript interfaces built for longevity.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Inquiries: starthub48@gmail.com</span>
                <span>Direct studio contact</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
