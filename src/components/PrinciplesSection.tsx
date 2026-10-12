import React from 'react';
import { Target, MessageSquare, Shield, Smartphone, CheckSquare, ZapOff } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Solutions Built Around Real Business Needs',
      description:
        'We don’t recommend tools because they are trendy. We start with your specific operational pain points and build only what directly solves them.',
      icon: Target,
    },
    {
      num: '02',
      title: 'Clear Scope and Open Communication',
      description:
        'Every project has unambiguous specifications, plain-English status updates, and transparent milestones. You always know what is being built and when it delivers.',
      icon: MessageSquare,
    },
    {
      num: '03',
      title: 'Practical Automation with Human Oversight',
      description:
        'Automation should eliminate busywork, not create uncontrollable black boxes. We design safety checks and approval gates so your team stays in control.',
      icon: Shield,
    },
    {
      num: '04',
      title: 'Responsive, Maintainable Digital Experiences',
      description:
        'We build websites and interfaces using clean, modern standards that load quickly, look sharp on all screen sizes, and are simple to update long after delivery.',
      icon: Smartphone,
    },
    {
      num: '05',
      title: 'Thoughtful Testing Before Delivery',
      description:
        'We run realistic data scenarios, stress test edge cases, and confirm that email notifications, CRM hooks, and mobile layouts work reliably before handoff.',
      icon: CheckSquare,
    },
    {
      num: '06',
      title: 'Focus on Useful Outcomes Over Complexity',
      description:
        'We measure success by reduced friction and reliable operations—never by bloated architecture, confusing buzzwords, or unnecessary subscriptions.',
      icon: ZapOff,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-900/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span className="text-blue-700 font-bold">Studio Philosophy</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Why Novyra</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
            Our Working Principles.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            We don't manufacture arbitrary claims or unverified awards. Instead, we hold ourselves accountable to clear engineering and design standards.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.num}
                className="bg-[#FAF9F5] border border-slate-200/80 rounded-lg p-6 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-blue-700">
                      <IconComp className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-bold">
                      {p.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 font-display mb-2 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
