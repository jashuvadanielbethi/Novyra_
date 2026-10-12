import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessSectionProps {
  onContactClick: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onContactClick }) => {
  const steps = [
    {
      num: '01',
      title: 'Understand the Problem',
      summary: 'Discovery & Friction Audit',
      description:
        'We review your team’s existing tools, repetitive bottlenecks, and communication flows to isolate exactly where manual effort is wasted.',
      deliverable: 'Diagnostic audit & scope definition',
    },
    {
      num: '02',
      title: 'Map the Workflow or Experience',
      summary: 'Architecture & Rules Mapping',
      description:
        'We draft precise trigger-condition-action paths, exception handling, data structures, and necessary human checkpoints before any code is written.',
      deliverable: 'Visual flowchart & specifications',
    },
    {
      num: '03',
      title: 'Design and Build the Solution',
      summary: 'Modular Implementation',
      description:
        'We implement modular web components, secure API connectors, automated pipelines, or design systems with clean code and zero excess baggage.',
      deliverable: 'Working deployment & configured hooks',
    },
    {
      num: '04',
      title: 'Test with Realistic Scenarios',
      summary: 'Edge-Case Verification',
      description:
        'We run realistic business payloads, test network anomalies, verify email delivery formats, and validate device rendering across screen sizes.',
      deliverable: 'Verification log & QA test report',
    },
    {
      num: '05',
      title: 'Refine and Hand Over',
      summary: 'Documentation & Training',
      description:
        'We hand over ownership with clear documentation, run-through sessions, and continuous maintenance parameters so your team remains in complete control.',
      deliverable: 'Operational handbook & code handover',
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-slate-900/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span className="text-blue-700 font-bold">Disciplined Delivery</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>How We Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
            A Transparent, Repeatable Method.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            Every engagement begins with agreed scope, clear milestones, and documented deliverables. We believe predictable engineering beats impulsive promises.
          </p>
        </div>

        {/* Process Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div
            className="hidden md:block absolute top-7 left-8 right-8 h-px bg-slate-200 z-0"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-10 bg-white border border-slate-200/90 rounded-lg p-5 sm:p-6 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Step Index Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Phase {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-950 font-display mb-1">
                  {step.title}
                </h3>

                <div className="text-xs font-medium text-blue-700 mb-3">
                  {step.summary}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <div className="text-[10px] font-mono uppercase text-slate-400">
                  Deliverable
                </div>
                <div className="text-xs font-medium text-slate-800 mt-0.5">
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Process Note Banner */}
        <div className="mt-12 p-5 rounded-lg bg-white border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-900 font-display">
              Transparent Scoping from Day One
            </div>
            <div className="text-xs text-slate-600">
              Project scope, timelines, deliverables, and integrations are mutually agreed upon prior to project kickoff. No surprises, no hidden fees.
            </div>
          </div>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors whitespace-nowrap shrink-0"
          >
            <span>Discuss Timeline &amp; Scoping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
