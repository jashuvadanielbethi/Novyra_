import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import aboutStudioImg from '../assets/images/novyra_about_studio_1795016624722.jpg';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-[#302B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Editorial Brand Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#C5A46D]">
              About NOVYRA
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#F5F1E9] font-display leading-[1.1]">
              Engineering practical clarity into modern business operations.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#A9A49C] leading-relaxed font-body">
              <p>
                NOVYRA is a digital agency and technology solutions studio focused on helping businesses eliminate operational friction. We combine business workflow automation, custom web development, and thoughtful digital design to build systems that actually support your team day to day.
              </p>
              <p>
                Rather than selling bloated enterprise software or generic website templates, we partner closely with teams facing real bottlenecks—repetitive manual data entry, disconnected tools, and slow digital interfaces. You communicate directly with the builders designing and implementing your solution.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-semibold tracking-wide text-[#0B0B0B] bg-[#C5A46D] hover:bg-[#A98B59] rounded-md transition-colors group"
              >
                <span>Discuss Your Goals</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              <span className="text-xs font-mono text-[#A9A49C]">
                Remote collaboration · International standards
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Studio Visual */}
          <div className="lg:col-span-6">
            <div className="h-full bg-[#171717] border border-[#302B24] rounded-lg overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] lg:flex-1 w-full bg-[#121212] overflow-hidden">
                {!imgError ? (
                  <img
                    src={aboutStudioImg}
                    alt="Minimalist NOVYRA digital engineering and design workspace with warm directional lighting"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#171717] to-[#0B0B0B]">
                    <Layers className="w-8 h-8 text-[#C5A46D] mb-3" />
                    <span className="font-display text-xl text-[#F5F1E9]">NOVYRA Studio</span>
                    <span className="text-xs text-[#A9A49C] mt-1">Automation &amp; Web Engineering</span>
                  </div>
                )}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="px-6 py-4 border-t border-[#302B24] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="text-[#F5F1E9] font-medium">Practical Scope · Transparent Execution</span>
                <span className="font-mono text-[#C5A46D]">NOVYRA Studio</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
