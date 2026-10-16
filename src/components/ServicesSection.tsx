import React from 'react';
import { Cog, Globe, Laptop, Palette, Megaphone, ArrowRight, CheckCircle2, FileText, Bell, CheckSquare, BarChart3, Cable } from 'lucide-react';
import { ServiceId } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const automationExamples = [
    {
      icon: FileText,
      title: 'Repetitive Data Entry',
      description: 'Stop manually copying client details between emails, forms, and spreadsheets.',
    },
    {
      icon: Cable,
      title: 'Connecting Business Tools',
      description: 'Link your website, email, CRM, and cloud storage into a unified working system.',
    },
    {
      icon: Bell,
      title: 'Timely Notifications',
      description: 'Instant alerts sent to your team or clients whenever important actions happen.',
    },
    {
      icon: CheckSquare,
      title: 'Approval Checkpoints',
      description: 'Keep human oversight on contracts, invoices, and sign-offs before execution.',
    },
    {
      icon: BarChart3,
      title: 'Automated Reporting',
      description: 'Generate weekly performance and activity summaries without manual preparation.',
    },
  ];

  const secondaryServices = [
    {
      id: 'web' as ServiceId,
      title: 'Web Development',
      icon: Globe,
      description: 'Fast, responsive websites and web applications built cleanly with modern code—never sluggish templates.',
    },
    {
      id: 'solutions' as ServiceId,
      title: 'Digital Solutions',
      icon: Laptop,
      description: 'Custom client portals, internal dashboards, and purpose-built digital tools tailored to your operational needs.',
    },
    {
      id: 'design' as ServiceId,
      title: 'Branding & Design',
      icon: Palette,
      description: 'Clear visual identities, logos, and user-friendly interface designs that reflect a modern, professional standard.',
    },
    {
      id: 'marketing' as ServiceId,
      title: 'Marketing',
      icon: Megaphone,
      description: 'High-converting landing pages and targeted digital campaigns that clearly present your value to potential clients.',
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 font-mono">
            <span className="text-[#0052FF] font-bold">Services</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>What We Do</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-display">
            Practical digital services for growing businesses.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            We focus on practical solutions that solve real daily friction. No bloated packages or confusing technical jargon.
          </p>
        </div>

        {/* Primary Service: Business & Workflow Automation */}
        <div className="bg-[#FAF9F5] border border-slate-200/90 rounded-xl p-6 sm:p-8 mb-10 shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 text-[#0052FF] text-xs font-mono font-semibold">
                <Cog className="w-3.5 h-3.5" />
                <span>Primary Specialization</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Business &amp; Workflow Automation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                We design and build automated workflows that handle routine work in the background, giving your team more time to focus on clients and growth.
              </p>
            </div>

            <button
              onClick={() => onSelectService('automation')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] rounded-lg transition-colors shrink-0 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF]"
            >
              <span>Discuss Automation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Practical Examples Grid */}
          <div className="pt-6">
            <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Everyday Automation Examples
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {automationExamples.map((ex) => {
                const Icon = ex.icon;
                return (
                  <div
                    key={ex.title}
                    className="bg-white border border-slate-200/90 rounded-lg p-4 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-2xs"
                  >
                    <div>
                      <div className="w-8 h-8 rounded bg-blue-50 text-[#0052FF] flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <strong className="block text-xs font-bold text-slate-900 mb-1 font-display">
                        {ex.title}
                      </strong>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-body">
                        {ex.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Secondary Services Header & Grid */}
        <div>
          <h3 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Complementary Digital Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {secondaryServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-all flex flex-col justify-between group shadow-2xs"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-3 group-hover:bg-blue-50 group-hover:text-[#0052FF] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-slate-950 font-display mb-1.5 group-hover:text-[#0052FF] transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-body mb-4">
                      {svc.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectService(svc.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-[#0052FF] transition-colors pt-2 border-t border-slate-100"
                  >
                    <span>Inquire About {svc.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
