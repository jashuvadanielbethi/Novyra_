import React, { useState } from 'react';
import { ProjectSpecimen } from '../types';
import { ArrowUpRight, X, Layers, Code2, Check, ShieldAlert } from 'lucide-react';

interface ProjectsSectionProps {
  onContactClick: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onContactClick }) => {
  const [activeProject, setActiveProject] = useState<ProjectSpecimen | null>(null);

  const projects: ProjectSpecimen[] = [
    {
      id: 'specimen-01',
      title: 'Automated Client Intake & Document Triage',
      subtitle: 'Streamlining intake from initial brief to verified database record',
      category: 'Business Automation',
      clientType: 'Professional Services & Advisory',
      status: 'Concept Demonstration',
      problem:
        'Inbound client inquiries and case briefs arrived across unorganized inboxes, requiring team members to manually re-type data into spreadsheets and send duplicate acknowledgment emails.',
      approach:
        'Designed an end-to-end automation pipeline that ingests submissions via secure webhooks, validates required files, tags service categories, records entries in the database, and dispatches instant confirmations.',
      deliverables: [
        'Structured client inquiry form interface',
        'Data validation & schema enforcement engine',
        'Automated CRM & database sync worker',
        'Team channel notifications with direct brief links',
        'Formatted email receipt to incoming clients',
      ],
      technologies: ['TypeScript', 'REST Webhooks', 'Structured Data Extraction', 'Cloud Database'],
      verifiedOutcome:
        'Eliminates manual copy-paste friction, reduces acknowledgment response time to under 1 second, and provides a dependable audit trail for every intake.',
      architectureNotes:
        'Client Form (HTTPS) -> Validation Middleware (Zod/JSON Schema) -> Workflow Router -> CRM/Database Commit -> Asynchronous SMTP & Team Webhooks.',
    },
    {
      id: 'specimen-02',
      title: 'Practice Portfolio & Digital Showcase Platform',
      subtitle: 'Light editorial web experience for design-conscious studios',
      category: 'Web Solutions & Digital Design',
      clientType: 'Architecture & Spatial Practice',
      status: 'Concept Demonstration',
      problem:
        'The practice required an international-grade digital presence that avoided cookie-cutter templates, highlighted project photography cleanly, and adapted seamlessly across mobile, tablet, and wide desktop displays.',
      approach:
        'Developed a bespoke light editorial web application using Manrope display typography, asymmetrical grids, high-performance responsive image containers, and zero layout shift.',
      deliverables: [
        'Complete responsive studio web platform',
        'Fluid image showcase with keyboard navigation',
        'Curated project filter and detailed taxonomy',
        'Accessible contact inquiry drawer with validation',
        'Full Schema.org metadata and SEO structure',
      ],
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Accessible WAI-ARIA', 'Schema.org JSON-LD'],
      verifiedOutcome:
        'Sub-800ms initial paint, 100% WCAG AA contrast compliance, and an uncluttered presentation reflecting boutique craftsmanship.',
      architectureNotes:
        'Modular Component Hierarchy -> Static Optimized SPA -> Viewport-Adaptive Layouts -> Client-Side Router with Deep Anchors.',
    },
    {
      id: 'specimen-03',
      title: 'Multi-Channel Operational Notification Hub',
      subtitle: 'Connecting status events to timely stakeholder summaries',
      category: 'Automation & Integrations',
      clientType: 'Logistics & Distribution Operations',
      status: 'Concept Demonstration',
      problem:
        'Operations leads were manually monitoring shipment spreadsheets and drafting repetitive status emails to client managers whenever logistics milestones occurred.',
      approach:
        'Constructed a reliable event listener that ingests warehouse status updates, filters relevant milestones according to client preferences, and formats daily and weekly digests automatically.',
      deliverables: [
        'Milestone webhook listener & event queue',
        'Deduplication and rate-limiting rules engine',
        'Digest template formatter with tabular figures',
        'Multi-channel dispatch (Email & Slack/Teams alerts)',
        'Historical event logging and error recovery',
      ],
      technologies: ['Node.js', 'Express', 'Event Queue', 'Transactional Email Gateway', 'Cron Jobs'],
      verifiedOutcome:
        'Replaces daily spreadsheet checks with scheduled digests; ensures team members receive actionable alerts without notification spam.',
      architectureNotes:
        'Status Event Ingestion -> Deduplication Store -> Template Engine -> Multi-Channel Dispatcher -> Structured Log Archive.',
    },
  ];

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-slate-900/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span className="text-blue-700 font-bold">Selected Work</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Studio Specimen Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
            Sample Projects &amp; Concept Demonstrations.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            To respect confidentiality for ongoing client engagements, the projects below are clearly labeled concept demonstrations. They show our real architecture, technical deliverables, and problem-solving methodology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white border border-slate-200/90 rounded-lg p-6 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Meta header (clean unboxed text with typographic separator) */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                  <span className="font-mono text-slate-600">{proj.category}</span>
                  <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {proj.status}
                  </span>
                </div>

                <div className="text-xs text-slate-400 font-medium mb-1">
                  {proj.clientType}
                </div>

                <h3 className="text-lg font-bold text-slate-950 font-display group-hover:text-blue-700 transition-colors leading-snug mb-2">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {proj.subtitle}
                </p>

                {/* Tech list (unboxed clean text) */}
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-mono text-slate-500 mb-4">
                  {proj.technologies.slice(0, 3).map((t, idx) => (
                    <span key={t}>
                      {t}
                      {idx < 2 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                >
                  <span>View Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Client Confidentiality */}
        <div className="mt-12 p-4 rounded bg-white border border-slate-200/70 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            <strong>Client Privacy Policy:</strong> Novyra does not publish client names or proprietary business data without explicit written consent.
          </span>
          <span className="font-mono text-slate-400 text-[11px] shrink-0">
            Case studies updated as approved
          </span>
        </div>

      </div>

      {/* Interactive Project Specification Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                  <span>{activeProject.category}</span>
                  <span aria-hidden="true">/</span>
                  <span className="text-blue-700">{activeProject.status}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                  {activeProject.title}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Industry: {activeProject.clientType}
                </div>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 rounded text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-5 space-y-6 text-sm text-slate-700">
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display mb-1.5">
                  The Problem
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeProject.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display mb-1.5">
                  Our Engineering Approach
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeProject.approach}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display mb-2">
                  Deliverables Produced
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeProject.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <div className="text-[11px] font-mono uppercase text-slate-500 mb-1">
                  System Architecture Pipeline
                </div>
                <div className="text-xs font-mono text-slate-800 break-words">
                  {activeProject.architectureNotes}
                </div>
              </div>

              <div className="p-3 bg-blue-50/60 rounded border border-blue-200">
                <div className="text-[11px] font-mono uppercase text-blue-800 font-semibold mb-1">
                  Target / Verified Impact
                </div>
                <div className="text-xs text-blue-900 leading-relaxed">
                  {activeProject.verifiedOutcome}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                Novyra Specimen Repository
              </span>
              <button
                onClick={() => {
                  setActiveProject(null);
                  onContactClick();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors"
              >
                Discuss Similar Implementation
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
