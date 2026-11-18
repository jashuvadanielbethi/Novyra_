import React from 'react';
import { Cog, Globe, Laptop, Palette, Megaphone, ArrowRight, Check } from 'lucide-react';
import { ServiceId } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const automationCapabilities = [
    'Eliminate repetitive manual data entry across forms, spreadsheets, and CRMs',
    'Connect existing business tools via reliable webhooks and structured APIs',
    'Automate timely team alerts, client confirmations, and status summaries',
    'Preserve human approval checkpoints and transparent audit logs before key actions',
  ];

  const secondaryServices = [
    {
      id: 'web' as ServiceId,
      index: '02',
      title: 'Web Development',
      icon: Globe,
      description:
        'Custom responsive websites and web applications built with clean TypeScript and React—engineered for speed, accessibility, and lasting maintainability.',
      capabilities: [
        'Custom marketing & service websites',
        'Responsive mobile-first architecture',
        'Technical SEO & performance tuning',
      ],
    },
    {
      id: 'solutions' as ServiceId,
      index: '03',
      title: 'Digital Solutions',
      icon: Laptop,
      description:
        'Purpose-built client intake portals, internal dashboards, and operational tools tailored around the way your team actually works.',
      capabilities: [
        'Structured client intake & triage forms',
        'Internal workflow dashboards',
        'Third-party service integrations',
      ],
    },
    {
      id: 'design' as ServiceId,
      index: '04',
      title: 'Branding & Digital Design',
      icon: Palette,
      description:
        'Distinctive visual identities, typographic systems, and intuitive user interfaces that communicate international professionalism.',
      capabilities: [
        'Brand identity & visual systems',
        'UI/UX interface design',
        'Design systems & component libraries',
      ],
    },
    {
      id: 'marketing' as ServiceId,
      index: '05',
      title: 'Digital Marketing',
      icon: Megaphone,
      description:
        'Focused landing pages and straightforward campaign structures designed to clearly explain your value and convert qualified inquiries.',
      capabilities: [
        'Conversion-focused landing pages',
        'Clear messaging & offer hierarchy',
        'Lead capture & CRM routing setup',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#121212] border-b border-[#302B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#C5A46D]">
              Services &amp; Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1E9] font-display leading-[1.08]">
              Focused capabilities built around measurable relief.
            </h2>
          </div>

          <p className="text-sm text-[#A9A49C] max-w-md font-body leading-relaxed">
            Every engagement starts with the business bottleneck—not unnecessary complexity. Explore how NOVYRA supports your operations.
          </p>
        </div>

        {/* Flagship 01: Business & Workflow Automation */}
        <div className="bg-[#171717] border border-[#302B24] rounded-lg p-7 sm:p-10 mb-8 hover:border-[#C5A46D]/50 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#C5A46D]">
                <span className="tabular-nums">01</span>
                <span aria-hidden="true">/</span>
                <span className="uppercase tracking-[0.1em]">Primary Specialization</span>
              </div>

              <div className="flex items-center gap-3">
                <Cog className="w-6 h-6 text-[#C5A46D] shrink-0" aria-hidden="true" />
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F1E9] font-display">
                  Business &amp; Workflow Automation
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#A9A49C] leading-relaxed font-body max-w-2xl">
                Most growing teams lose hours each week to manual handoffs: copying inquiry details between forms, email, spreadsheets, and project boards. NOVYRA connects your everyday tools into dependable automated pipelines while keeping your team in full control.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectService('automation')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide text-[#0B0B0B] bg-[#C5A46D] hover:bg-[#A98B59] rounded-md transition-colors group"
                >
                  <span>Discuss Workflow Automation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 pt-2 lg:pt-0 lg:border-l lg:border-[#302B24] lg:pl-8 space-y-3.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#F5F1E9]">
                Key Capabilities
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#A9A49C] font-body">
                {automationCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Secondary Services 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-[#171717] border border-[#302B24] rounded-lg p-7 flex flex-col justify-between hover:border-[#C5A46D]/50 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#C5A46D]" aria-hidden="true" />
                      <span className="text-xs font-mono text-[#A9A49C] tabular-nums">{svc.index}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#F5F1E9] font-display mb-2.5 group-hover:text-[#C5A46D] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-[#A9A49C] leading-relaxed font-body mb-5">
                    {svc.description}
                  </p>

                  <ul className="space-y-2 text-xs text-[#A9A49C] font-body mb-6">
                    {svc.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C5A46D]" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#302B24]">
                  <button
                    type="button"
                    onClick={() => onSelectService(svc.id)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F1E9] hover:text-[#C5A46D] transition-colors"
                  >
                    <span>Inquire About {svc.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
