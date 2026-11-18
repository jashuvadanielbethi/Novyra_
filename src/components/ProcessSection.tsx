import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface ProcessSectionProps {
  onContactClick: () => void;
}

const PROCESS_STAGES = [
  {
    id: 'discover',
    num: '01',
    title: 'Discover',
    headline: 'Understand your workflow and operational bottlenecks.',
    description:
      'We start by mapping how your business actually handles inquiries, data, and customer touchpoints today. Instead of guessing, we identify where manual effort slows down your team.',
    deliverables: [
      'Review of existing software tools and spreadsheets',
      'Identification of repetitive tasks and failure points',
      'Clear alignment on business priorities and constraints',
    ],
  },
  {
    id: 'strategize',
    num: '02',
    title: 'Strategize',
    headline: 'Define a practical scope and technical plan.',
    description:
      'Before writing code or configuring automations, we define the architecture, data flow, and human approval checkpoints. You know exactly what is being built, why, and on what timeline.',
    deliverables: [
      'System architecture & integration blueprint',
      'Defined project scope, milestones, and deliverables',
      'Transparent cost and timeline agreement',
    ],
  },
  {
    id: 'build',
    num: '03',
    title: 'Design & Develop',
    headline: 'Build clean, dependable systems with care.',
    description:
      'We build your automation pipelines, custom web applications, or digital design assets in focused iterations—keeping interfaces intuitive, responsive, and easy for your team to operate.',
    deliverables: [
      'Clean TypeScript, React, or automated webhook builds',
      'Responsive desktop and mobile layout verification',
      'Error handling and validation rules tested end to end',
    ],
  },
  {
    id: 'launch',
    num: '04',
    title: 'Launch & Optimize',
    headline: 'Deploy carefully and refine with real usage.',
    description:
      'Once tested, we transition the system into production smoothly, walk your team through every control, and remain available for ongoing maintenance or iterative improvements.',
    deliverables: [
      'Production deployment and live verification',
      'Clear documentation and team walkthrough',
      'Ongoing support and iterative refinements as needed',
    ],
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onContactClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStage = PROCESS_STAGES[activeIndex];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-[#302B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#C5A46D]">
              How NOVYRA Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1E9] font-display leading-[1.08]">
              Inside the Process.
            </h2>
          </div>

          <p className="text-sm text-[#A9A49C] max-w-md font-body leading-relaxed">
            From initial discovery to live deployment, every engagement follows a structured, transparent four-stage workflow.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Tab Strip */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#302B24] mb-8"
          role="tablist"
          aria-label="NOVYRA Project Delivery Stages"
        >
          {PROCESS_STAGES.map((stage, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
                className={`relative text-left py-4 px-3 sm:px-5 transition-colors flex items-center gap-3 ${
                  isActive
                    ? 'text-[#F5F1E9]'
                    : 'text-[#A9A49C] hover:text-[#F5F1E9]'
                }`}
              >
                <span className={`font-mono text-xs tabular-nums ${isActive ? 'text-[#C5A46D]' : 'text-[#A9A49C]'}`}>
                  {stage.num}
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase font-body whitespace-nowrap">
                  {stage.title}
                </span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A46D]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Showcase Card (Inspired by VSLFlow Inside the Process) */}
        <div
          role="tabpanel"
          className="bg-[#171717] border border-[#302B24] rounded-lg p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-mono text-[#C5A46D] tabular-nums">
              Stage {currentStage.num} · {currentStage.title}
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F1E9] font-display leading-snug">
              {currentStage.headline}
            </h3>

            <p className="text-sm sm:text-base text-[#A9A49C] leading-relaxed font-body">
              {currentStage.description}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide text-[#0B0B0B] bg-[#C5A46D] hover:bg-[#A98B59] rounded-md transition-colors group"
              >
                <span>Start With {currentStage.title}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#121212] border border-[#302B24] rounded-md p-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#F5F1E9]">
              Stage Deliverables
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#A9A49C] font-body">
              {currentStage.deliverables.map((del) => (
                <li key={del} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
