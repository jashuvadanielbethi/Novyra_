import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GitBranch, Zap, ShieldCheck, Database, UserCheck } from 'lucide-react';
import { WorkflowNode } from '../types';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

const WORKFLOW_NODES: WorkflowNode[] = [
  {
    id: 'ingest',
    index: '01',
    stage: 'Trigger',
    title: 'Inbound Event Ingestion',
    tool: 'Webhooks & Forms',
    summary: 'Structured inquiries, form payloads, and order updates arrive automatically.',
    detail: 'Replaces manual inbox sorting by parsing incoming fields directly at submission.',
  },
  {
    id: 'validate',
    index: '02',
    stage: 'Logic',
    title: 'Validation & Category Routing',
    tool: 'Rules Engine',
    summary: 'Sanitizes inputs, checks required context, and routes by service priority.',
    detail: 'Filters incomplete requests and assigns clean metadata before records touch your stack.',
  },
  {
    id: 'sync',
    index: '03',
    stage: 'Execution',
    title: 'CRM Sync & Team Alerts',
    tool: 'Sheets · CRM · Email',
    summary: 'Updates central records and notifies stakeholders without copy-pasting.',
    detail: 'Keeps spreadsheets, project boards, and client confirmations aligned automatically.',
  },
  {
    id: 'oversight',
    index: '04',
    stage: 'Control',
    title: 'Human Oversight Checkpoint',
    tool: 'Operator Approval',
    summary: 'Your team reviews critical milestones before final execution or dispatch.',
    detail: 'Every workflow preserves transparent audit logs and manual override controls.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('ingest');
  const activeNode = WORKFLOW_NODES.find((n) => n.id === selectedNodeId) ?? WORKFLOW_NODES[0];

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'ingest':
        return Zap;
      case 'validate':
        return ShieldCheck;
      case 'sync':
        return Database;
      default:
        return UserCheck;
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0B0B0B] border-b border-[#302B24] overflow-hidden"
    >
      {/* Subtle restrained warm radial highlight */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[640px] h-[640px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #C5A46D 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Unboxed positioning label */}
            <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#C5A46D]">
              NOVYRA · Digital Solutions Studio
            </div>

            {/* Large Serif Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.85rem] font-semibold text-[#F5F1E9] font-display tracking-tight leading-[1.06]">
              Transforming Ideas Into{' '}
              <span className="italic font-normal text-[#C5A46D]">Digital Experiences.</span>
            </h1>

            {/* Concise Supporting Description */}
            <p className="text-base sm:text-lg text-[#A9A49C] leading-relaxed font-body max-w-xl">
              NOVYRA designs business workflow automations, custom web applications, and refined digital identities—helping modern teams reduce manual work and operate with clarity.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wide text-[#0B0B0B] bg-[#C5A46D] hover:bg-[#A98B59] rounded-md transition-colors whitespace-nowrap shrink-0 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold tracking-wide text-[#F5F1E9] bg-[#171717] hover:bg-[#1C1A17] border border-[#302B24] hover:border-[#C5A46D]/60 rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Clean Typographic Highlights */}
            <div className="pt-6 border-t border-[#302B24] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A9A49C] font-body">
              <span>Business &amp; Workflow Automation</span>
              <span aria-hidden="true" className="text-[#302B24]">·</span>
              <span>Custom Web Development</span>
              <span aria-hidden="true" className="text-[#302B24]">·</span>
              <span>Direct Engineering Collaboration</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Dark Editorial Workflow Canvas */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="bg-[#121212] border border-[#302B24] rounded-lg p-5 sm:p-7 space-y-5">
              
              {/* Canvas Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#302B24]">
                <div className="flex items-center gap-2.5">
                  <GitBranch className="w-4 h-4 text-[#C5A46D]" aria-hidden="true" />
                  <div>
                    <h2 className="text-lg font-semibold text-[#F5F1E9] font-display leading-none">
                      Operational Workflow Architecture
                    </h2>
                    <p className="text-xs text-[#A9A49C] font-body mt-1">
                      Select any stage below to inspect how NOVYRA structures automation.
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#C5A46D] shrink-0">
                  Interactive Blueprint
                </span>
              </div>

              {/* Interactive Connected Nodes */}
              <div className="space-y-2" role="tablist" aria-label="Workflow architecture stages">
                {WORKFLOW_NODES.map((node, idx) => {
                  const Icon = getNodeIcon(node.id);
                  const isSelected = node.id === selectedNodeId;
                  return (
                    <React.Fragment key={node.id}>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedNodeId(node.id)}
                        className={`w-full text-left p-3.5 rounded-md border transition-colors flex items-center justify-between gap-4 ${
                          isSelected
                            ? 'bg-[#1C1A17] border-[#C5A46D]'
                            : 'bg-[#171717] border-[#302B24] hover:border-[#A98B59]/50'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <span
                            className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 border ${
                              isSelected
                                ? 'bg-[#C5A46D] text-[#0B0B0B] border-[#C5A46D]'
                                : 'bg-[#121212] text-[#C5A46D] border-[#302B24]'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 text-xs">
                              <span className="font-mono text-[#C5A46D] tabular-nums">{node.index}</span>
                              <span className="font-semibold text-[#F5F1E9] truncate">{node.title}</span>
                            </div>
                            <p className="text-xs text-[#A9A49C] truncate mt-0.5">
                              {node.summary}
                            </p>
                          </div>
                        </div>

                        <span className="text-[11px] font-mono text-[#A9A49C] shrink-0 hidden sm:inline">
                          {node.tool}
                        </span>
                      </button>

                      {idx < WORKFLOW_NODES.length - 1 && (
                        <div className="flex justify-center" aria-hidden="true">
                          <div className="w-px h-2.5 bg-[#302B24]" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Selected Stage Detail Bar */}
              <div className="pt-4 border-t border-[#302B24] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="text-[#F5F1E9]">
                  <span className="font-mono text-[#C5A46D] mr-2">[{activeNode.stage}]</span>
                  <span className="text-[#A9A49C]">{activeNode.detail}</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
