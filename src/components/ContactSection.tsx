import React, { useState } from 'react';
import { ServiceId } from '../types';
import { Check, Copy, ArrowUpRight, AlertCircle, Send, CheckCircle2, Loader2, RefreshCw, Clock, ShieldCheck, MailCheck } from 'lucide-react';

interface ContactSectionProps {
  initialService?: ServiceId | 'general';
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbgdkavo';
const CONTACT_EMAIL = 'starthub48@gmail.com';

const SERVICE_LABELS: Record<string, string> = {
  automation: 'Business & Workflow Automation',
  web: 'Web Development',
  solutions: 'Digital Solutions',
  design: 'Branding & Design',
  marketing: 'Marketing',
  general: 'General Inquiry / Multi-Service',
};

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = 'automation' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService,
    timeline: 'Within 1-2 months',
    details: '',
    _gotcha: '', // Honeypot field for bot spam prevention
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  
  // Submission lifecycle states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.service) {
      errs.service = 'Please choose a primary service of interest.';
    }

    if (!formData.details.trim()) {
      errs.details = 'Please briefly describe the process or project you would like to discuss.';
    } else if (formData.details.trim().length < 15) {
      errs.details = 'Please provide at least 15 characters describing your project or workflow.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Clipboard fallback
    }
  };

  const getServiceDisplayName = () => {
    return SERVICE_LABELS[formData.service] || formData.service;
  };

  const generateFormattedBrief = () => {
    return `PROJECT INQUIRY — NOVYRA
----------------------------------------
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Primary Service: ${getServiceDisplayName()}
Timeline: ${formData.timeline}

Project Details:
${formData.details}
----------------------------------------
Sent via Novyra Digital Solutions Studio Website`;
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(generateFormattedBrief());
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2200);
    } catch {
      // Clipboard fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    // Check honeypot: if filled, silently ignore
    if (formData._gotcha) {
      setSubmissionStatus('success');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const serviceDisplay = getServiceDisplayName();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim() || 'Not specified',
      primary_service: serviceDisplay,
      service: serviceDisplay,
      target_timeline: formData.timeline,
      timeline: formData.timeline,
      project_details: formData.details.trim(),
      details: formData.details.trim(),
      message: formData.details.trim(),
      _subject: `New Project Inquiry: ${formData.name.trim()} (${serviceDisplay})`,
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json().catch(() => null);

      if (response.ok && responseData?.ok !== false) {
        setSubmissionStatus('success');
      } else {
        let detailedError = 'Form submission was not accepted by the service endpoint.';
        if (responseData && Array.isArray(responseData.errors) && responseData.errors.length > 0) {
          detailedError = responseData.errors
            .map((err: { field?: string; message: string }) => {
              const fieldLabel = err.field ? `${err.field.replace(/_/g, ' ')} ` : '';
              return `${fieldLabel}${err.message}`;
            })
            .join(', ');
        } else if (responseData && responseData.error) {
          detailedError = responseData.error;
        }
        setErrorMessage(detailedError);
        setSubmissionStatus('error');
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Network error preventing transmission. Please check your connection or contact via direct email.'
      );
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: initialService,
      timeline: 'Within 1-2 months',
      details: '',
      _gotcha: '',
    });
    setErrors({});
    setSubmissionStatus('idle');
    setErrorMessage(null);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact & What Happens Next */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
              <span className="text-[#0052FF] font-bold">Contact</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Start a Conversation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-display">
              Have a process worth improving?
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-body">
              Tell us what your team is working on, where you lose time to manual steps, or what you&apos;d like to build. We&apos;ll discuss a practical, realistic next step.
            </p>

            {/* Email Contact Card */}
            <div className="bg-[#FAF9F5] border border-slate-200/90 rounded-xl p-5 shadow-2xs space-y-3">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Direct Studio Inbox
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry%20%E2%80%94%20Novyra`}
                  className="text-base sm:text-lg font-bold text-slate-950 hover:text-[#0052FF] transition-colors font-mono underline decoration-slate-300 underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed font-body">
                Emails go directly to our engineering desk. You can write to us directly from your preferred email client anytime.
              </p>
            </div>

            {/* What Happens Next (Explicitly required by prompt) */}
            <div className="border border-slate-200/80 rounded-xl p-5 bg-white space-y-3">
              <h3 className="text-xs font-mono font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>What Happens After You Inquire</span>
              </h3>

              <ol className="space-y-2 text-xs text-slate-600 font-body">
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-[#0052FF] text-[11px] mt-0.5">1.</span>
                  <span><strong>Initial Review (within 24 hrs):</strong> We review your tools and workflow description to verify if automation or custom software is the right answer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-[#0052FF] text-[11px] mt-0.5">2.</span>
                  <span><strong>Practical Scoping:</strong> If there is mutual fit, we outline a clear scope, schedule a 20-minute discussion, and propose milestones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono font-bold text-[#0052FF] text-[11px] mt-0.5">3.</span>
                  <span><strong>No Aggressive Sales:</strong> You work directly with the developers who will design and build your solution.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F5] border border-slate-200 rounded-xl p-6 sm:p-7 shadow-2xs">
              
              {submissionStatus === 'success' ? (
                /* Confirmed Success State */
                <div className="py-2 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-start gap-3.5 p-5 rounded-lg bg-emerald-50 border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-emerald-950 font-display">
                        Project Inquiry Received
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-900 mt-1 leading-relaxed font-body">
                        Thank you, <strong>{formData.name}</strong>. Your project details have been successfully transmitted to our studio inbox at{' '}
                        <strong>{CONTACT_EMAIL}</strong>.
                      </p>
                      <p className="text-xs text-emerald-800 mt-2 font-body">
                        We will review your requirements and reach out to <strong>{formData.email}</strong> within 24 business hours.
                      </p>
                    </div>
                  </div>

                  {/* Summary of Transmitted Brief */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span className="font-semibold">Transmitted Brief Copy:</span>
                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="inline-flex items-center gap-1 text-xs text-[#0052FF] hover:text-blue-800 font-medium"
                      >
                        {copiedBrief ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedBrief ? 'Copied to Clipboard' : 'Copy Brief'}</span>
                      </button>
                    </div>

                    <pre className="p-3.5 bg-white rounded-lg border border-slate-200 text-xs font-mono text-slate-700 whitespace-pre-wrap overflow-x-auto max-h-44">
                      {generateFormattedBrief()}
                    </pre>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=Follow-up%20re%20Inquiry%20%E2%80%94%20Novyra`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <span>Direct Email Follow-up</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                /* Formspree Connected Form */
                <form
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  <div className="border-b border-slate-200 pb-3 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 font-display">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-body">
                      Dispatches directly to our studio inbox via Formspree.
                    </p>
                  </div>

                  {/* Honeypot field (hidden for spam prevention) */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Submission Error Banner */}
                  {submissionStatus === 'error' && errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5 animate-in fade-in duration-150">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                      <div className="space-y-1">
                        <strong className="font-semibold block">Submission Error</strong>
                        <span>{errorMessage}</span>
                        <div className="pt-0.5 text-[11px] text-red-800">
                          Fallback: You can send your brief directly to{' '}
                          <a
                            href={`mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry%20%E2%80%94%20Novyra`}
                            className="underline font-bold"
                          >
                            {CONTACT_EMAIL}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hidden inputs to guarantee standard Formspree aliases in case of native POST */}
                  <input type="hidden" name="_subject" value={`New Project Inquiry: ${formData.name || 'New Client'} (${getServiceDisplayName()})`} />
                  <input type="hidden" name="service" value={getServiceDisplayName()} />
                  <input type="hidden" name="details" value={formData.details} />
                  <input type="hidden" name="message" value={formData.details} />

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-900 mb-1">
                        Your Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-colors disabled:opacity-60 ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                      />
                      {errors.name && (
                        <p id="error-name" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-900 mb-1">
                        Work Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-colors disabled:opacity-60 ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                      />
                      {errors.email && (
                        <p id="error-email" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company and Primary Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-900 mb-1">
                        Company or Organization <span className="text-xs text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        disabled={isSubmitting}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Advisory"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-colors disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-900 mb-1">
                        Primary Service of Interest <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="contact-service"
                        name="primary_service"
                        required
                        disabled={isSubmitting}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceId })}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-colors disabled:opacity-60 ${
                          errors.service ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                        aria-required="true"
                      >
                        <option value="automation">Business &amp; Workflow Automation</option>
                        <option value="web">Web Development</option>
                        <option value="solutions">Digital Solutions</option>
                        <option value="design">Branding &amp; Design</option>
                        <option value="marketing">Marketing</option>
                        <option value="general">General Inquiry / Multi-Service</option>
                      </select>
                      {errors.service && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Target Timeline */}
                  <div>
                    <label htmlFor="contact-timeline" className="block text-xs font-semibold text-slate-900 mb-1">
                      Target Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      name="target_timeline"
                      disabled={isSubmitting}
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-colors disabled:opacity-60"
                    >
                      <option value="Immediate (Next 2-3 weeks)">Immediate (Next 2–3 weeks)</option>
                      <option value="Within 1-2 months">Within 1–2 months</option>
                      <option value="Quarterly planning (2-3 months)">Quarterly planning (2–3 months)</option>
                      <option value="Exploratory inquiry">Exploratory / Initial inquiry</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="contact-details" className="block text-xs font-semibold text-slate-900 mb-1">
                      Project Details &amp; Operational Friction <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-details"
                      name="project_details"
                      required
                      disabled={isSubmitting}
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Briefly describe the repetitive tasks, tools involved (e.g. forms, spreadsheets, CRM), or website requirements..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-colors disabled:opacity-60 ${
                        errors.details ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.details}
                      aria-describedby={errors.details ? 'error-details' : undefined}
                    />
                    {errors.details && (
                      <p id="error-details" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission Row */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052FF]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Project Inquiry</span>
                        </>
                      )}
                    </button>
                    <span className="text-xs text-slate-500 font-mono">
                      Dispatches securely to {CONTACT_EMAIL}
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
