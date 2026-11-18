export type ServiceId = 'automation' | 'web' | 'solutions' | 'design' | 'marketing' | 'branding';

export interface WorkflowNode {
  id: string;
  index: string;
  stage: string;
  title: string;
  tool: string;
  summary: string;
  detail: string;
}

export interface ProjectSpecimen {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  clientType: string;
  status: 'Concept Demonstration' | 'Prototype';
  image: string;
  imageAlt: string;
  problem: string;
  approach: string;
  deliverables: string[];
  technologies: string[];
  verifiedOutcome: string;
  architectureNotes: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: ServiceId | 'general';
  budget?: string;
  details: string;
}
