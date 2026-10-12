export type ServiceId = 'automation' | 'web' | 'design' | 'marketing' | 'branding';

export interface WorkflowStep {
  id: string;
  stage: 'trigger' | 'condition' | 'action' | 'result';
  title: string;
  description: string;
  system: string;
  statusLabel: string;
  dataPayload?: Record<string, string>;
}

export interface WorkflowScenario {
  id: string;
  name: string;
  category: string;
  summary: string;
  steps: WorkflowStep[];
  outcomeSummary: string;
}

export interface ProjectSpecimen {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  clientType: string;
  status: 'Concept Demonstration' | 'Studio Specimen' | 'Case Study';
  problem: string;
  approach: string;
  deliverables: string[];
  technologies: string[];
  verifiedOutcome: string;
  architectureNotes: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  service: ServiceId | 'general';
  timeline?: string;
  details: string;
}
