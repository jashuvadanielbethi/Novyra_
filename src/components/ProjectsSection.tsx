import React, { useState } from 'react';
import { ProjectSpecimen } from '../types';
import { ArrowUpRight, X, Check, Layers } from 'lucide-react';
import workAutomationImg from '../assets/images/novyra_work_automation_1795016625174.jpg';
import workWebImg from '../assets/images/novyra_work_web_1795016626610.jpg';
import workOperationsImg from '../assets/images/novyra_work_operations_1795016626056.jpg';

interface ProjectsSectionProps {
  onContactClick: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onContactClick }) => {
  const [activeProject, setActiveProject] = useState<ProjectSpecimen | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const projects: ProjectSpecimen[] = [
    {
      id: 'specimen-01',
      title: 'Automated Client Intake & Triage Pipeline',
      subtitle: 'Streamlining inquiry intake from initial form submission to verified database entry.',
      category: 'Business Automation',
      clientType: 'Professional Advisory Services',
      status: 'Concept Demonstration',
      image: workAutomationImg,
      imageAlt: 'Studio monitor showing an automated node workflow diagram in champagne gold on dark charcoal',
      problem:
        'Client inquiries arrived across unorganized email inboxes, requiring team members to manually re-type details into spreadsheets and send duplicate acknowledgment emails.',
      approach:
        'Designed an end-to-end automation pipeline that ingests submissions via secure webhooks, validates required fields, tags service categories, records entries in a central database, and dispatches instant confirmations.',
      deliverables: [
        'Structured client inquiry form interface',
        'Data validation & schema enforcement engine',
        'Automated database sync worker',
        'Team channel notifications with direct brief links',
        'Formatted email receipt to incoming clients',
      ],
      technologies: ['TypeScript', 'REST Webhooks', 'Structured Data Extraction', 'Cloud Database'],
      verifiedOutcome:
        'Designed to eliminate manual copy-paste friction and provide a clear audit trail for every client inquiry.',
      architectureNotes:
        'Client Form (HTTPS) -> Validation Middleware -> Workflow Router -> Database Commit -> Asynchronous Email & Team Alerts.',
    },
    {
      id: 'specimen-02',
      title: 'Practice Portfolio & Showcase Platform',
      subtitle: 'Fast, editorial web presence built for design-conscious firms.',
      category: 'Web Development',
      clientType: 'Architecture & Design Practice',
      status: 'Concept Demonstration',
      image: workWebImg,
      imageAlt: 'Matte black laptop on honed slate showcasing a dark editorial architectural website layout',
      problem:
        'The practice required an international-grade digital presence that avoided cookie-cutter templates, loaded quickly, and adapted cleanly across mobile, tablet, and desktop viewports.',
      approach:
        'Developed a bespoke editorial web application using refined serif/sans typography, clean grid structure, optimized image loading, and zero layout shift.',
      deliverables: [
        'Complete responsive studio web platform',
        'Curated project showcase with keyboard navigation',
        'Accessible contact inquiry drawer with validation',
        'Full Schema.org metadata and technical SEO structure',
      ],
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Accessible WAI-ARIA', 'Schema.org JSON-LD'],
      verifiedOutcome:
        'Delivered as a lightweight single-page architecture engineered for rapid paint times and WCAG AA contrast.',
      architectureNotes:
        'Modular Component Hierarchy -> Static Optimized SPA -> Viewport-Adaptive Layouts -> Smooth Anchor Navigation.',
    },
    {
      id: 'specimen-03',
      title: 'Multi-Channel Operational Notification Hub',
      subtitle: 'Connecting operational status events to timely stakeholder summaries.',
      category: 'Digital Solutions',
      clientType: 'Logistics & Distribution Operations',
      status: 'Concept Demonstration',
      image: workOperationsImg,
      imageAlt: 'Dark minimalist glass display showing clean operational status graphs and champagne gold highlights',
      problem:
        'Operations leads were manually checking shipment spreadsheets and drafting repetitive status updates whenever key operational milestones occurred.',
      approach:
        'Constructed an event listener that ingests status updates, filters milestones according to stakeholder preferences, and formats scheduled digests automatically.',
      deliverables: [
        'Milestone webhook listener & event queue',
        'Deduplication and rate-limiting rules engine',
        'Digest template formatter with tabular figures',
        'Multi-channel dispatch (Email & team alerts)',
        'Historical event logging and error recovery',
      ],
      technologies: ['Node.js', 'Express', 'Event Queue', 'Transactional Email Gateway', 'Cron Jobs'],
      verifiedOutcome:
        'Designed to replace repetitive spreadsheet checks with scheduled digests and actionable team alerts.',
      architectureNotes:
        'Status Event Ingestion -> Deduplication Store -> Template Engine -> Multi-Channel Dispatcher -> Structured Log Archive.',
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#121212] border-b border-[#302B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#C5A46D]">
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1E9] font-display leading-[1.08]">
              Prototypes &amp; Concept Demonstrations.
            </h2>
          </div>

          <p className="text-sm text-[#A9A49C] max-w-md font-body leading-relaxed">
            To respect confidentiality for ongoing client engagements, the projects below are clearly labelled concept demonstrations illustrating NOVYRA&apos;s architecture and deliverables.
          </p>
        </div>

        {/* 3-Column Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {projects.map((proj) => {
            const hasFailed = !!failedImages[proj.id];
            return (
              <article
                key={proj.id}
                className="bg-[#171717] border border-[#302B24] rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#C5A46D]/60 transition-colors group"
              >
                <div>
                  {/* Image Area */}
                  <div className="relative aspect-[4/3] w-full bg-[#0B0B0B] overflow-hidden border-b border-[#302B24]">
                    {!hasFailed ? (
                      <img
                        src={proj.image}
                        alt={proj.imageAlt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setFailedImages((prev) => ({ ...prev, [proj.id]: true }))}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#121212]">
                        <Layers className="w-7 h-7 text-[#C5A46D] mb-2" />
                        <span className="text-xs font-mono text-[#A9A49C]">{proj.category}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#A9A49C]">
                      <span className="text-[#C5A46D]">{proj.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{proj.status}</span>
                    </div>

                    <h3 className="text-2xl font-semibold text-[#F5F1E9] font-display leading-snug group-hover:text-[#C5A46D] transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A9A49C] leading-relaxed font-body">
                      {proj.subtitle}
                    </p>

                    <div className="pt-1 text-[11px] font-mono text-[#A9A49C]">
                      {proj.technologies.slice(0, 3).join(' · ')}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-6 py-4 border-t border-[#302B24] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveProject(proj)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F1E9] hover:text-[#C5A46D] transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-[#A9A49C]">{proj.clientType}</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Specification Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="bg-[#171717] border border-[#302B24] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#302B24]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#A9A49C] mb-1.5">
                  <span className="text-[#C5A46D]">{activeProject.category}</span>
                  <span aria-hidden="true">/</span>
                  <span>{activeProject.status}</span>
                </div>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-semibold text-[#F5F1E9] font-display">
                  {activeProject.title}
                </h3>
                <div className="text-xs text-[#A9A49C] mt-1 font-body">
                  Domain: {activeProject.clientType}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-md text-[#A9A49C] hover:text-[#F5F1E9] hover:bg-[#1C1A17] transition-colors"
                aria-label="Close specifications modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-6 space-y-5 text-sm text-[#A9A49C] font-body">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5A46D] mb-1.5">
                  The Problem
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#F5F1E9]/90">
                  {activeProject.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5A46D] mb-1.5">
                  Engineering Approach
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#F5F1E9]/90">
                  {activeProject.approach}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5A46D] mb-2">
                  Deliverables
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A9A49C]">
                  {activeProject.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#121212] rounded-md border border-[#302B24]">
                <div className="text-[11px] font-mono uppercase text-[#C5A46D] mb-1">
                  System Architecture Pipeline
                </div>
                <div className="text-xs font-mono text-[#F5F1E9] break-words">
                  {activeProject.architectureNotes}
                </div>
              </div>

              <div className="p-4 bg-[#1C1A17] rounded-md border border-[#302B24]">
                <div className="text-[11px] font-mono uppercase text-[#C5A46D] mb-1">
                  Design Goal
                </div>
                <div className="text-xs text-[#F5F1E9]/90 leading-relaxed">
                  {activeProject.verifiedOutcome}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#302B24] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#A9A49C] font-mono">
                NOVYRA Prototype Archive
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveProject(null);
                  onContactClick();
                }}
                className="px-5 py-2.5 text-xs font-semibold text-[#0B0B0B] bg-[#C5A46D] hover:bg-[#A98B59] rounded-md transition-colors"
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
