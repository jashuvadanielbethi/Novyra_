import React, { useState } from 'react';
import { ProjectSpecimen } from '../types';
import { ArrowUpRight, X, Check, ShieldCheck, Clock, FileCode } from 'lucide-react';

interface ProjectsSectionProps {
  onContactClick: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onContactClick }) => {
  const [activeProject, setActiveProject] = useState<ProjectSpecimen | null>(null);

  const projects: ProjectSpecimen[] = [
    {
      id: 'specimen-01',
      title: 'Automated Client Intake & Triage Pipeline',
      subtitle: 'Streamlining inquiry intake from initial form submit to verified database record',
      category: 'Business Automation',
      clientType: 'Professional Advisory Services',
      status: 'Concept Demonstration',
      problem:
        'Client inquiries arrived across unorganized inboxes, requiring team members to manually re-type data into spreadsheets and send duplicate acknowledgment emails.',
      approach:
        'Designed an end-to-end automation pipeline that ingests submissions via secure webhooks, validates required files, tags service categories, records entries in the database, and dispatches instant confirmations.',
      deliverables: [
        'Structured client inquiry form interface',
        'Data validation & schema enforcement engine',
        'Automated database sync worker',
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
      title: 'Practice Portfolio & Showcase Platform',
      subtitle: 'Fast, responsive web experience for design-conscious businesses',
      category: 'Web Development',
      clientType: 'Architecture & Design Studio',
      status: 'Concept Demonstration',
      problem:
        'The practice required an international-grade digital presence that avoided cookie-cutter templates, loaded quickly, and adapted seamlessly across mobile, tablet, and wide desktop displays.',
      approach:
        'Developed a bespoke light editorial web application using clean typography, asymmetrical grids, high-performance responsive image containers, and zero layout shift.',
      deliverables: [
        'Complete responsive studio web platform',
        'Fluid project showcase with keyboard navigation',
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
      category: 'Digital Solutions',
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
    <section id="work" className="py-16 lg:py-20 bg-[#FAF9F5] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 font-mono">
            <span className="text-[#0052FF] font-bold">Selected Work</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Prototypes &amp; Demonstrations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-display">
            Sample projects and concept prototypes.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            To respect confidentiality for ongoing client engagements, the items below are clearly labelled concept demonstrations showing our real architecture, technical deliverables, and problem-solving approach.
          </p>
        </div>

        {/* Projects 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-2.5 border-b border-slate-100">
                  <span className="font-mono text-slate-600 font-medium">{proj.category}</span>
                  <span className="text-[10px] font-mono text-[#0052FF] bg-blue-50 px-2 py-0.5 rounded font-semibold">
                    {proj.status}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 font-medium mb-1 font-mono">
                  {proj.clientType}
                </div>

                <h3 className="text-lg font-bold text-slate-950 font-display group-hover:text-[#0052FF] transition-colors leading-snug mb-2">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-body">
                  {proj.subtitle}
                </p>

                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-mono text-slate-500 mb-4">
                  {proj.technologies.slice(0, 3).map((t, idx) => (
                    <span key={t}>
                      {t}
                      {idx < 2 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-[#0052FF] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF]"
                >
                  <span>View Problem &amp; Deliverables</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 1. Concise About Novyra Strip (Integrated cleanly into flow) */}
        <div id="about" className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 mb-8 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
                <span className="text-[#0052FF] font-bold">About Novyra</span>
                <span aria-hidden="true" className="text-slate-300">/</span>
                <span>Our Principles</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                An independent studio built for practical execution.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                Novyra is an independent digital solutions studio. We build business automation workflows, responsive web applications, and digital identities. You communicate directly with the engineers designing and building your systems—no account managers or unnecessary layers.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] rounded-lg transition-colors shadow-xs"
              >
                <span>Discuss Your Goals</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Clearly Labelled Testimonial Placeholder (Required by prompt) */}
        <div className="p-4 sm:p-5 rounded-xl bg-blue-50/40 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0052FF] shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <div className="flex items-center gap-2">
                <strong className="text-xs font-bold text-slate-900 font-display">
                  Testimonials &amp; Case Studies
                </strong>
                <span className="text-[10px] font-mono text-[#0052FF] bg-blue-100/60 px-2 py-0.5 rounded font-semibold">
                  Pending Mutual Release
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-body mt-0.5">
                Novyra treats client operational data and workflows with strict confidentiality. Verified client reviews and detailed case studies from our North American and international engagements are currently undergoing mutual approval prior to publication.
              </p>
            </div>
          </div>

          <span className="text-[11px] font-mono text-slate-500 shrink-0">
            Direct references available upon qualified request
          </span>
        </div>

      </div>

      {/* Project Specification Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                  <span>{activeProject.category}</span>
                  <span aria-hidden="true">/</span>
                  <span className="text-[#0052FF] font-semibold">{activeProject.status}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                  {activeProject.title}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Domain: {activeProject.clientType}
                </div>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-5 space-y-5 text-sm text-slate-700 font-body">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display mb-1">
                  The Problem
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeProject.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display mb-1">
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
                      <Check className="w-3.5 h-3.5 text-[#0052FF] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-[11px] font-mono uppercase text-slate-500 mb-1">
                  System Architecture Pipeline
                </div>
                <div className="text-xs font-mono text-slate-800 break-words">
                  {activeProject.architectureNotes}
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
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] rounded-lg transition-colors"
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
