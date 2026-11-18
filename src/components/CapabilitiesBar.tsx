import React from 'react';

export const CapabilitiesBar: React.FC = () => {
  const capabilities = [
    { label: 'Core Focus', value: 'Business & Workflow Automation' },
    { label: 'Web Engineering', value: 'React, TypeScript & Modern APIs' },
    { label: 'Integrations', value: 'Forms, CRM, Email & Cloud Sync' },
    { label: 'Engagement Model', value: 'Direct Builder Collaboration' },
  ];

  return (
    <section
      aria-label="Core Studio Capabilities"
      className="bg-[#121212] border-b border-[#302B24] py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {capabilities.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#C5A46D]">
                {item.label}
              </div>
              <div className="text-sm font-medium text-[#F5F1E9] font-body">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
