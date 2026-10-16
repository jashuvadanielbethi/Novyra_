import React from 'react';
import { ArrowRight, ArrowDown, Database, Mail, ShieldCheck, CheckCircle2, Zap, UserCheck, GitBranch } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  return (
    <section id="home" className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[#FAF9F5] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography, Headline, & Clear CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Minimal Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#0052FF]" aria-hidden="true" />
              <span>Novyra Studio · Automation &amp; Web</span>
            </div>

            {/* Headline matching user prompt */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-950 font-display tracking-tight leading-[1.12]">
              Make Your Business{' '}
              <span className="text-[#0052FF]">Work Smarter</span>.
            </h1>

            {/* Supporting Copy matching user prompt */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body max-w-xl">
              Novyra helps businesses simplify repetitive work, connect their tools, and build practical digital solutions.
            </p>

            {/* CTAs matching prompt */}
            <div className="pt-1 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] active:bg-black rounded-lg transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF] group"
              >
                <span>Discuss Your Workflow</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold text-slate-800 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF]"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Restrained Value Notes */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-body">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>Primary focus: Business automation</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>Human oversight on all pipelines</span>
              </span>
            </div>
          </div>

          {/* Right Column: Understated Workflow Node Visualization (Inspired by Reference 3) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_4px_24px_rgba(15,23,42,0.04)] space-y-4">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-blue-50 text-[#0052FF] flex items-center justify-center text-xs">
                    <GitBranch className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-900 font-display">
                      Operational Workflow Architecture
                    </h2>
                    <p className="text-[11px] text-slate-400 font-mono">
                      Inbound Event &rarr; Validation &rarr; Sync &rarr; Team Verification
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Pipeline Live</span>
                </span>
              </div>

              {/* Node Graph Flow */}
              <div className="space-y-2.5 relative">
                
                {/* Node 1: Trigger Ingestion */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-md bg-[#0052FF] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Zap className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">01. Inbound Event Ingestion</span>
                        <span className="text-[10px] font-mono text-slate-500 bg-white border border-slate-200 px-1.5 py-0.2 rounded">
                          Webhook / Form
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">Capture client inquiry or system trigger payload without manual entry</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 font-semibold shrink-0">Instant</span>
                </div>

                {/* Connector line */}
                <div className="flex justify-center -my-1">
                  <div className="w-px h-3.5 bg-slate-300" />
                </div>

                {/* Node 2: Data Validation & Filter */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-md bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">02. Schema Validation &amp; Triage</span>
                        <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded">
                          Rules Engine
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">Sanitizes input, flags spam, and tags project scope automatically</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-medium shrink-0">Automated</span>
                </div>

                {/* Connector line with split */}
                <div className="flex justify-center -my-1">
                  <div className="w-px h-3.5 bg-slate-300" />
                </div>

                {/* Node 3: Split execution branch (Database commit + Alert dispatch) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-start gap-2 shadow-2xs">
                    <Database className="w-4 h-4 text-[#0052FF] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="block text-slate-900 font-semibold text-[11px]">CRM &amp; Records Sync</strong>
                      <span className="text-[10px] text-slate-500 leading-tight">Zero re-typing across sheets or database</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-start gap-2 shadow-2xs">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="block text-slate-900 font-semibold text-[11px]">Team Notification</strong>
                      <span className="text-[10px] text-slate-500 leading-tight">Instant summary dispatch to inbox/channel</span>
                    </div>
                  </div>
                </div>

                {/* Connector line */}
                <div className="flex justify-center -my-1">
                  <div className="w-px h-3.5 bg-slate-300" />
                </div>

                {/* Node 4: Human Review & Closure */}
                <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-md bg-[#0052FF] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <UserCheck className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-950">03. Human Oversight Checkpoint</span>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded font-medium">
                          Operator Control
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600">Team confirms scope and initiates client onboarding with total confidence</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#0052FF] font-semibold shrink-0">Controlled</span>
                </div>

              </div>

              {/* Footer specs */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Outcome: Less manual work</span>
                <span className="text-[#0052FF] font-semibold">Reliable &amp; Audited</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
