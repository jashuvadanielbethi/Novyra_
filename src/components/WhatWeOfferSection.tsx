import React, { useState } from 'react';
import { PenTool, Megaphone, Cog, Code2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceId } from '../types';

interface WhatWeOfferSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
  onExploreAutomationDemo: () => void;
}

export const WhatWeOfferSection: React.FC<WhatWeOfferSectionProps> = ({
  onSelectService,
  onExploreAutomationDemo,
}) => {
  const [activeHighlight, setActiveHighlight] = useState<number>(2); // Default to Automation (index 2)

  const services = [
    {
      num: '01',
      id: 'design' as ServiceId,
      title: 'Digital Design',
      desc: 'Modern and user-focused designs that make your brand stand out.',
      icon: PenTool,
      iconBg: 'bg-sky-100 text-sky-600',
      isFeatured: false,
    },
    {
      num: '02',
      id: 'marketing' as ServiceId,
      title: 'Marketing',
      desc: 'Data-driven strategies to help your business reach the right audience.',
      icon: Megaphone,
      iconBg: 'bg-emerald-100 text-emerald-600',
      isFeatured: false,
    },
    {
      num: '03',
      id: 'automation' as ServiceId,
      title: 'Automation',
      desc: 'Automate repetitive tasks, streamline workflows, and save time with smart solutions.',
      icon: Cog,
      iconBg: 'bg-indigo-100 text-indigo-600',
      isFeatured: true,
      annotation: 'Focus on what matters. Let automation handle the rest.',
    },
    {
      num: '04',
      id: 'web' as ServiceId,
      title: 'Web Solutions',
      desc: 'Custom websites and web applications built for performance and growth.',
      icon: Code2,
      iconBg: 'bg-orange-100 text-orange-600',
      isFeatured: false,
    },
  ];

  const handleNext = () => {
    setActiveHighlight((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveHighlight((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleCardClick = (index: number, serviceId: ServiceId) => {
    setActiveHighlight(index);
    if (serviceId === 'automation') {
      onExploreAutomationDemo();
    } else {
      onSelectService(serviceId);
    }
  };

  return (
    <section id="services-overview" className="py-20 lg:py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            {/* Kicker with horizontal line */}
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
              <span className="w-5 h-px bg-slate-400" aria-hidden="true" />
              <span>OUR SERVICES</span>
            </div>

            {/* Headline with 'Offer' in royal blue */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 font-display tracking-tight">
              What We <span className="text-blue-600">Offer</span>
            </h2>
          </div>

          {/* Right Subtitle & Arrow Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-5">
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm font-body">
              End-to-end digital solutions tailored for modern businesses.
            </p>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs"
                title="Previous service"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 hover:bg-blue-100 transition-colors shadow-2xs"
                title="Next service"
                aria-label="Next service"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative pb-10">
          {services.map((svc, index) => {
            const IconComp = svc.icon;
            const isHighlighted = activeHighlight === index || (activeHighlight === 2 && svc.isFeatured);

            return (
              <div
                key={svc.id}
                onClick={() => handleCardClick(index, svc.id)}
                className={`relative rounded-xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isHighlighted && svc.isFeatured
                    ? 'bg-blue-50/30 border-2 border-blue-400 shadow-[0_8px_30px_rgba(37,99,235,0.08)] ring-1 ring-blue-300/40 -translate-y-1'
                    : isHighlighted
                    ? 'bg-white border-2 border-slate-300 shadow-md -translate-y-1'
                    : 'bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Top Row: Icon badge + Number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Circular Icon Badge */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center ${svc.iconBg} transition-transform group-hover:scale-110 shadow-2xs`}>
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Gray Number matching screenshot */}
                    <span className="font-mono text-sm font-semibold text-slate-300 group-hover:text-slate-400 transition-colors">
                      {svc.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-950 font-display mb-2 group-hover:text-blue-600 transition-colors">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body mb-6">
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom Action: "Learn More ->" */}
                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Handwritten Cursive Note and Arrow below Automation Card */}
                {svc.isFeatured && (
                  <div className="hidden lg:block absolute -bottom-10 left-6 z-10 pointer-events-none select-none">
                    <div className="flex items-start gap-1.5">
                      {/* Curved SVG Arrow */}
                      <svg width="24" height="30" viewBox="0 0 24 30" fill="none" className="text-blue-600 shrink-0 -scale-x-100">
                        <path
                          d="M18 28C14 20 6 16 6 4M6 4L2 8M6 4L10 8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-handwriting text-base sm:text-lg text-slate-700 font-semibold tracking-wide whitespace-nowrap pt-1">
                        Focus on what matters. <br />
                        Let automation handle the rest.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
