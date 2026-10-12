import React, { useState, useEffect, useRef } from 'react';
import { WorkflowScenario } from '../types';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Sliders,
  FileText,
  Mail,
  Database,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Check,
  ChevronRight,
  Cpu,
  RefreshCw
} from 'lucide-react';

interface AutomationSectionProps {
  onSelectAutomationCTA: () => void;
}

export const AutomationSection: React.FC<AutomationSectionProps> = ({ onSelectAutomationCTA }) => {
  // Scenarios for the interactive simulator
  const scenarios: WorkflowScenario[] = [
    {
      id: 'lead-routing',
      name: 'Client Intake & Routing',
      category: 'Inbound Inquiries',
      summary: 'Capture inquiry from web form, triage requirements, create CRM record, and dispatch team notification.',
      steps: [
        {
          id: 's1-step1',
          stage: 'trigger',
          title: 'Inbound Webhook Captured',
          description: 'Client submits digital project inquiry through contact form.',
          system: 'HTTPS Endpoint / Form Handler',
          statusLabel: 'Payload Ingested',
          dataPayload: {
            source: 'Website Contact Modal',
            contact: 'alex.rivera@meridian.io',
            category: 'Business Automation',
            timeline: '3-4 Weeks',
          },
        },
        {
          id: 's1-step2',
          stage: 'condition',
          title: 'Evaluate Service & Budget Rules',
          description: 'Validates contact integrity, verifies required fields, and tags project scope.',
          system: 'Validation Rules Engine',
          statusLabel: 'Criteria Verified',
          dataPayload: {
            emailIntegrity: 'Valid MX Record',
            scopeClassification: 'Flagship Automation',
            assignmentRule: 'Senior Solutions Lead',
          },
        },
        {
          id: 's1-step3',
          stage: 'action',
          title: 'Sync CRM & Notify Account Team',
          description: 'Creates lead record in database, notifies channel via team webhook, and drafts intake file.',
          system: 'CRM & Notification Gateway',
          statusLabel: 'Sync Completed',
          dataPayload: {
            crmRecordId: 'REC-2026-904',
            channelNotice: '#inquiries (Slack/Teams)',
            calendarTriage: 'Discovery Slot Prepared',
          },
        },
        {
          id: 's1-step4',
          stage: 'result',
          title: 'Automated Acknowledgment Dispatched',
          description: 'Personalized email sent to client with reference number and next steps outline.',
          system: 'SMTP / Transactional Service',
          statusLabel: 'Workflow Succeeded',
          dataPayload: {
            dispatchStatus: 'Delivered (200 OK)',
            responseLatency: '420ms',
            nextTrigger: 'Follow-up reminder at T+48h',
          },
        },
      ],
      outcomeSummary: 'Inquiry qualified, recorded, assigned to account manager, and confirmed with client in under 1 second.',
    },
    {
      id: 'invoice-processing',
      name: 'Invoice & Document Triage',
      category: 'Finance Operations',
      summary: 'Extract structured vendor metadata from uploaded PDF, verify purchase order, and route for manager sign-off.',
      steps: [
        {
          id: 's2-step1',
          stage: 'trigger',
          title: 'Document Received via Inbox',
          description: 'Vendor sends PDF attachment with subject containing "Invoice" to billing address.',
          system: 'Mailbox Listener / IMAP',
          statusLabel: 'Document Detected',
          dataPayload: {
            fileName: 'INV-8834_ApexSupply.pdf',
            size: '418 KB',
            sender: 'billing@apexsupply.com',
          },
        },
        {
          id: 's2-step2',
          stage: 'condition',
          title: 'Extract Metadata & Check PO Match',
          description: 'Parses invoice number, total amount, line items, and checks open Purchase Orders.',
          system: 'Structured Extraction Engine',
          statusLabel: 'Metadata Extracted',
          dataPayload: {
            poMatched: 'PO-2026-4192',
            amount: '$4,280.00 USD',
            approvalThreshold: 'Requires Level 1 Approval (< $5k)',
          },
        },
        {
          id: 's2-step3',
          stage: 'action',
          title: 'Generate Approval Task in Ledger',
          description: 'Appends structured entry into accounts ledger and pings department budget owner.',
          system: 'Accounting Ledger & Task Gateway',
          statusLabel: 'Approval Requested',
          dataPayload: {
            ledgerEntry: 'GL-6120-OPERATIONS',
            approver: 'finance.lead@organization.com',
            priority: 'Standard Net-30',
          },
        },
        {
          id: 's2-step4',
          stage: 'result',
          title: 'Archival & Vendor Notice Sent',
          description: 'Document archived in secure cloud vault; vendor notified that invoice is in review.',
          system: 'Document Store & Confirmation',
          statusLabel: 'Queue Updated',
          dataPayload: {
            vaultStorageKey: 'secure/invoices/2026/04/INV-8834.pdf',
            vendorReceipt: 'Sent automatically',
            status: 'Ready for Payment Batch',
          },
        },
      ],
      outcomeSummary: 'Vendor invoice triaged, data extracted without manual copy-pasting, and routed for one-click approval.',
    },
    {
      id: 'reporting-digest',
      name: 'Weekly Operations Sync',
      category: 'Data & Reporting',
      summary: 'Query multi-source databases, compile performance figures into structured summaries, and distribute weekly digests.',
      steps: [
        {
          id: 's3-step1',
          stage: 'trigger',
          title: 'Scheduled Cron Event Triggered',
          description: 'System trigger fires automatically every Monday at 08:00 AM local time.',
          system: 'Cron Scheduler / Event Engine',
          statusLabel: 'Schedule Fired',
          dataPayload: {
            cronSpec: '0 8 * * 1',
            scope: 'Weekly Operations Sprint',
            timestamp: 'Monday 08:00:00 UTC',
          },
        },
        {
          id: 's3-step2',
          stage: 'condition',
          title: 'Query Data Sources & Compare Targets',
          description: 'Aggregates support tickets, project completions, and operational uptime thresholds.',
          system: 'Database Aggregator & Query Engine',
          statusLabel: 'Metrics Aggregated',
          dataPayload: {
            ticketsResolved: '48 tickets',
            slaCompliance: '99.4%',
            anomalyFlag: 'None detected',
          },
        },
        {
          id: 's3-step3',
          stage: 'action',
          title: 'Format Executive Markdown Digest',
          description: 'Transforms tabular datasets into a clean, executive-ready summary table and key highlights.',
          system: 'Template Formatter',
          statusLabel: 'Brief Formatted',
          dataPayload: {
            format: 'Executive 1-Pager & PDF',
            recipientGroup: 'Leadership & Ops Team',
            distributionMethod: 'Email & Central Dashboard',
          },
        },
        {
          id: 's3-step4',
          stage: 'result',
          title: 'Multi-Channel Report Distributed',
          description: 'Report sent to stakeholders; historical figures archived in analytics warehouse.',
          system: 'Distribution Dispatcher',
          statusLabel: 'Digest Dispatched',
          dataPayload: {
            recipientsNotified: '8 Leads',
            archiveId: 'OPS-WEEK-2026-W15',
            completionTime: '1.2 seconds total run',
          },
        },
      ],
      outcomeSummary: 'Weekly operations report compiled and delivered on schedule without team members spending hours compiling spreadsheets.',
    },
  ];

  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const currentScenario = scenarios[selectedScenarioIndex];

  // Simulator playback state: -1 is idle, 0..3 are steps, 4 is completed
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startWorkflow = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);
  };

  const resetWorkflow = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsRunning(false);
    setCurrentStepIndex(-1);
  };

  useEffect(() => {
    if (isRunning && currentStepIndex >= 0 && currentStepIndex < currentScenario.steps.length) {
      timerRef.current = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, 1600);
    } else if (currentStepIndex >= currentScenario.steps.length) {
      setIsRunning(false);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isRunning, currentStepIndex, currentScenario.steps.length]);

  // When switching scenario, reset simulator
  const handleSelectScenario = (index: number) => {
    resetWorkflow();
    setSelectedScenarioIndex(index);
  };

  // 8 concrete automation examples from prompt
  const concreteCapabilities = [
    {
      title: 'Lead Capture & Follow-up',
      desc: 'Connect inquiry forms directly to CRM pipelines with instant qualification and personalized routing.',
      icon: Mail,
    },
    {
      title: 'Email Notifications & Reminders',
      desc: 'Trigger context-rich emails, scheduled follow-ups, and escalation notices based on status changes.',
      icon: Mail,
    },
    {
      title: 'Form Submissions & Routing',
      desc: 'Route inbound requests, client briefs, and service tickets to the exact team members responsible.',
      icon: Sliders,
    },
    {
      title: 'Spreadsheet & CRM Synchronization',
      desc: 'Keep records consistent across Google Sheets, Airtable, relational databases, and CRM platforms.',
      icon: Database,
    },
    {
      title: 'Document & Data Extraction',
      desc: 'Parse PDFs, invoices, and structured submissions into organized database fields without manual re-typing.',
      icon: FileText,
    },
    {
      title: 'Task Creation & Approval Workflows',
      desc: 'Automatically generate tasks, notify approvers, and update project ledgers once approvals are granted.',
      icon: Layers,
    },
    {
      title: 'Scheduled Reports & Alerts',
      desc: 'Automate weekly operational summaries, anomaly notifications, and milestone digests for leadership.',
      icon: Calendar,
    },
    {
      title: 'API & Third-Party Integrations',
      desc: 'Connect proprietary software, webhooks, and SaaS tools through secure, maintainable endpoints.',
      icon: Cpu,
    },
  ];

  // 5-step process
  const processSteps = [
    { num: '01', title: 'Discover', desc: 'Audit manual routines, bottlenecks, and existing tools.' },
    { num: '02', title: 'Design', desc: 'Map logic, conditional edge cases, and human oversight checks.' },
    { num: '03', title: 'Build', desc: 'Implement modular connectors, data transforms, and event hooks.' },
    { num: '04', title: 'Test', desc: 'Run rigorous edge-case scenarios with realistic payloads.' },
    { num: '05', title: 'Improve', desc: 'Monitor throughput, refine handling, and expand capabilities.' },
  ];

  const isCompleted = currentStepIndex >= currentScenario.steps.length;

  return (
    <section id="automation" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-slate-900/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span className="text-blue-700 font-bold">Flagship Service</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Business Automation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
            Less Repetition. Better Operations.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            We design practical workflows that connect everyday tools, reduce repetitive tasks, and help teams spend less time on manual work.
          </p>
        </div>

        {/* Interactive Workflow Simulator Console */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden mb-16">
          
          {/* Simulator Bar: Tab selectors + Controls */}
          <div className="border-b border-slate-200 bg-slate-50/70 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Scenario Segmented Selector */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 rounded-md">
              {scenarios.map((sc, index) => (
                <button
                  key={sc.id}
                  onClick={() => handleSelectScenario(index)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap ${
                    selectedScenarioIndex === index
                      ? 'bg-white text-slate-950 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>

            {/* Run / Reset Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {currentStepIndex === -1 ? (
                <button
                  onClick={startWorkflow}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors whitespace-nowrap shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Workflow Simulator</span>
                </button>
              ) : isCompleted ? (
                <button
                  onClick={startWorkflow}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors whitespace-nowrap shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Replay Workflow</span>
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium text-blue-800 bg-blue-50 border border-blue-200 rounded">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                  <span>Executing Step {currentStepIndex + 1} of 4...</span>
                </div>
              )}

              <button
                onClick={resetWorkflow}
                disabled={currentStepIndex === -1}
                className={`p-2 rounded text-slate-600 hover:text-slate-950 hover:bg-slate-200/60 transition-colors ${
                  currentStepIndex === -1 ? 'opacity-40 cursor-not-allowed' : ''
                }`}
                title="Reset Simulator"
                aria-label="Reset Simulator"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Simulator Body */}
          <div className="p-5 sm:p-8">
            
            {/* Scenario Header Summary */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  {currentScenario.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentScenario.summary}
                </p>
              </div>
              <div className="text-xs font-mono text-slate-500">
                Pattern: Trigger &rarr; Condition &rarr; Action &rarr; Result
              </div>
            </div>

            {/* 4 Pipeline Stages (Grid / Flow) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {currentScenario.steps.map((step, idx) => {
                const isActive = currentStepIndex === idx;
                const isPassed = currentStepIndex > idx;
                const isPending = currentStepIndex < idx;

                const stageLabels: Record<string, string> = {
                  trigger: 'Stage 1: Trigger',
                  condition: 'Stage 2: Condition',
                  action: 'Stage 3: Action',
                  result: 'Stage 4: Result',
                };

                return (
                  <div
                    key={step.id}
                    className={`relative rounded-md p-4 transition-all duration-200 border ${
                      isActive
                        ? 'bg-blue-50/70 border-blue-300 ring-1 ring-blue-300 shadow-xs'
                        : isPassed
                        ? 'bg-slate-50/80 border-slate-200'
                        : 'bg-white border-slate-200/70 opacity-60'
                    }`}
                  >
                    {/* Stage Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase font-semibold text-slate-500">
                        {stageLabels[step.stage]}
                      </span>
                      {isPassed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : isActive ? (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-600 text-white font-medium">
                          Active
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-slate-400">
                          Standby
                        </span>
                      )}
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span className="truncate max-w-[120px]">{step.system}</span>
                      <span className={isPassed ? 'text-emerald-700 font-medium' : isActive ? 'text-blue-700 font-medium' : ''}>
                        {isPassed ? 'Done' : isActive ? 'Working' : 'Ready'}
                      </span>
                    </div>

                    {/* Active/Passed Payload Preview */}
                    {(isActive || isPassed) && step.dataPayload && (
                      <div className="mt-2 p-2 bg-white rounded border border-slate-200 text-[10px] font-mono text-slate-600 space-y-0.5">
                        {Object.entries(step.dataPayload).map(([key, val]) => (
                          <div key={key} className="flex justify-between gap-1">
                            <span className="text-slate-400">{key}:</span>
                            <span className="text-slate-800 font-medium truncate max-w-[120px]">{val}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Completion Summary Card */}
            {isCompleted && (
              <div className="mt-6 p-4 rounded-md bg-emerald-50/60 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-950 font-display">
                      Workflow Execution Complete
                    </div>
                    <div className="text-xs text-emerald-800 mt-0.5">
                      {currentScenario.outcomeSummary}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={onSelectAutomationCTA}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors whitespace-nowrap"
                  >
                    Discuss an Automation Project
                  </button>
                </div>
              </div>
            )}

            {/* Disclaimer & Context Footer */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
              <span className="italic">
                Interactive Demonstration — models workflow logic, conditions, and handlers without touching external live customer records.
              </span>
              <span className="font-mono text-[11px] shrink-0 text-slate-400">
                Zero external tracking · Client-side preview
              </span>
            </div>

          </div>
        </div>

        {/* Concrete Automation Workflows (8 capabilities) */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
              Where We Apply Business Automation
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Concrete operational routines tailored to how your business actually runs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {concreteCapabilities.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200/90 rounded-lg p-5 hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-800 mb-3.5">
                      <IconComp className="w-4 h-4 text-blue-700" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5 font-display">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process: Discover -> Design -> Build -> Test -> Improve */}
        <div className="bg-slate-900 text-white rounded-lg p-6 sm:p-10 mb-12">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              Implementation Methodology
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              From Manual Friction to Dependable Execution
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              We do not introduce complexity for its own sake. Every workflow is mapped, verified with realistic scenarios, and delivered with human oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-slate-800/80 border border-slate-700/60 rounded p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-blue-400 mb-1">
                    {step.num}
                  </div>
                  <div className="text-sm font-bold text-white mb-1.5 font-display">
                    {step.title}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTA inside Automation */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Scope, milestones, and integration parameters are documented upfront before any build begins.
            </div>
            <button
              onClick={onSelectAutomationCTA}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Explore an Automation Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
