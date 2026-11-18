import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'What services does NOVYRA specialize in?',
    answer:
      'Our primary focus is Business & Workflow Automation—connecting everyday business tools, eliminating repetitive manual data entry, and setting up reliable notifications and approval checkpoints. We also build custom websites, internal digital solutions, brand identities, and targeted landing pages.',
  },
  {
    question: 'How does the project development process work?',
    answer:
      'Every engagement follows four clear stages: Discover (mapping your current bottlenecks), Strategize (agreeing on scope, architecture, and timeline), Design & Develop (building and testing the solution), and Launch & Optimize (deploying cleanly with team documentation).',
  },
  {
    question: 'Can NOVYRA connect tools our business already uses?',
    answer:
      'Yes. Rather than forcing you to replace working software, we design integrations around your current stack—such as website inquiry forms, email systems, spreadsheets, cloud storage, and CRM tools—using reliable webhooks and APIs.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend directly on scope and integration complexity. Focused workflow automations or single landing systems can often be scoped and delivered within a few weeks, while custom multi-page web applications take longer. We agree on concrete milestones before any work begins.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Yes. We walk your team through every workflow or application upon delivery and remain available for ongoing maintenance, adjustments, and iterative improvements as your operational needs evolve.',
  },
  {
    question: 'How can I start a project with NOVYRA?',
    answer:
      'Fill out the project enquiry form below or email us directly at starthub48@gmail.com. Briefly share what you want to automate or build, and we will review your workflow and respond within 24 business hours.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#121212] border-b border-[#302B24]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#C5A46D]">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1E9] font-display leading-[1.08]">
            Clear answers before we begin.
          </h2>
        </div>

        {/* Accessible Accordion */}
        <div className="divide-y divide-[#302B24] border-y border-[#302B24]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div key={item.question} className="py-1">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full py-5 text-left flex items-center justify-between gap-6 group focus-visible:outline-2 focus-visible:outline-[#C5A46D]"
                  >
                    <span className="text-lg sm:text-xl font-medium text-[#F5F1E9] font-display group-hover:text-[#C5A46D] transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C5A46D] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={isOpen ? 'pb-5 pr-8' : 'hidden'}
                >
                  <p className="text-sm text-[#A9A49C] leading-relaxed font-body">
                    {item.answer}
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
