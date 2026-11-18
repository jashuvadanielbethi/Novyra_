import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const DifferentiationSection: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Business-Focused Solutions',
      description:
        'Every workflow and web application is designed around solving concrete operational bottlenecks—not adding decorative features you will never use.',
    },
    {
      index: '02',
      title: 'Customized Development',
      description:
        'Instead of forcing your team into rigid templates, we tailor integrations, intake forms, and web interfaces around your actual business workflow.',
    },
    {
      index: '03',
      title: 'Human Oversight Built In',
      description:
        'Automation should support your team, not remove control. Our pipelines include clear validation checks, confirmation logs, and operator approvals.',
    },
    {
      index: '04',
      title: 'Direct Engineering Access',
      description:
        'You collaborate directly with the developers and designers building your system—ensuring clear scoping, responsive adjustments, and clean handover.',
    },
  ];

  return (
    <section id="why-novyra" className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-[#302B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#C5A46D]">
            Why Choose NOVYRA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1E9] font-display leading-[1.08]">
            Built on clarity, reliability, and thoughtful execution.
          </h2>
        </div>

        {/* 4-Card Editorial Differentiation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="bg-[#171717] border border-[#302B24] rounded-lg p-7 space-y-3"
            >
              <div className="text-xs font-mono text-[#C5A46D] tabular-nums">
                {pillar.index}
              </div>
              <h3 className="text-2xl font-semibold text-[#F5F1E9] font-display">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#A9A49C] leading-relaxed font-body">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Honest Client Confidentiality & Delivery Principles Note (Section 12) */}
        <div className="bg-[#121212] border border-[#302B24] rounded-lg p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-3xl">
            <ShieldCheck className="w-5 h-5 text-[#C5A46D] shrink-0 mt-1" aria-hidden="true" />
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-[#F5F1E9] font-semibold uppercase tracking-wider">
                  Client Feedback &amp; Confidentiality Standards
                </span>
                <span aria-hidden="true" className="text-[#302B24]">·</span>
                <span className="text-[#C5A46D]">Verified References Upon Request</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A9A49C] leading-relaxed font-body">
                NOVYRA never publishes unverified claims or confidential client operations without explicit written approval. Verified client references and engagement specifics are shared privately during qualified project scoping conversations.
              </p>
            </div>
          </div>

          <span className="text-xs font-mono text-[#A9A49C] shrink-0">
            Zero fabricated testimonials
          </span>
        </div>

      </div>
    </section>
  );
};
