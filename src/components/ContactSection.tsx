import React, { useState } from 'react';
import { ServiceId } from '../types';
import { Check, Copy, ArrowUpRight, AlertCircle, Send, CheckCircle2, Loader2, RefreshCw } from 'lucide-react';

interface ContactSectionProps {
  initialService?: ServiceId | 'general';
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbgdkavo';
const CONTACT_EMAIL = 'starthub48@gmail.com';

const SERVICE_LABELS: Record<string, string> = {
  automation: 'Business & Workflow Automation',
  web: 'Web Solutions & Development',
  design: 'Digital Design & Interfaces',
  marketing: 'Digital Marketing & Campaigns',
  general: 'Multi-Service / Consultation',
};

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = 'automation' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService,
    timeline: 'Within 1-2 months',
    details: '',
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
      errs.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid work email address.';
    }

    if (!formData.service) {
      errs.service = 'Please select a primary service of interest.';
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
      // Fallback
    }
  };

  const getServiceDisplayName = () => {
    return SERVICE_LABELS[formData.service] || formData.service;
  };

  const generateFormattedBrief = () => {
    return `PROJECT INQUIRY — NOVYRA
----------------------------------------
Client Name: ${formData.name}
Work Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Primary Service of Interest: ${getServiceDisplayName()}
Expected Timeline: ${formData.timeline}

Project Details & Workflow Context:
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
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate concurrent submissions
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const serviceDisplay = getServiceDisplayName();

    // Exact Formspree required field names:
    // Formspree endpoint mbgdkavo requires `primary_service` and `project_details`
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
    });
    setErrors({});
    setSubmissionStatus('idle');
    setErrorMessage(null);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-slate-900/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Studio Contact & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className="text-blue-700 font-bold">Start a Conversation</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Contact Novyra</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
              Have a Process Worth Improving?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
              Tell us what your team is working on, what takes too much time, or what you&apos;d like to build. We&apos;ll discuss a practical next step.
            </p>

            {/* Email Contact Card */}
            <div className="bg-white border border-slate-200/90 rounded-lg p-5 sm:p-6 shadow-2xs space-y-4">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Direct Studio Inbox
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry%20%E2%80%94%20Novyra`}
                  className="text-base sm:text-lg font-bold text-slate-950 hover:text-blue-700 transition-colors font-mono underline decoration-slate-300 underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors shrink-0"
                  title="Copy email to clipboard"
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

              <p className="text-xs text-slate-500 leading-relaxed">
                Connected directly to our central dispatch queue. You can also send a message from your mail app anytime.
              </p>
            </div>

            {/* Practical Response Standards */}
            <div className="space-y-3 pt-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-700" />
                <span>Response typically within 24 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-700" />
                <span>No aggressive sales calls; direct review of your workflow</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-700" />
                <span>Transparent scoping before any commitment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Formspree Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              
              {submissionStatus === 'success' ? (
                /* Confirmed Success State */
                <div className="py-4 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-start gap-3.5 p-5 rounded-lg bg-emerald-50 border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-emerald-950 font-display">
                        Project Inquiry Received
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-900 mt-1.5 leading-relaxed">
                        Thank you, <strong>{formData.name}</strong>. Your project details have been successfully transmitted to our studio team at{' '}
                        <strong>{CONTACT_EMAIL}</strong>.
                      </p>
                      <p className="text-xs text-emerald-800 mt-2">
                        We will review your requirements and reach out to <strong>{formData.email}</strong> within 24 business hours.
                      </p>
                    </div>
                  </div>

                  {/* Summary of Transmitted Brief */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span className="font-semibold">Transmitted Brief Copy:</span>
                      <button
                        onClick={handleCopyBrief}
                        className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900 font-medium"
                      >
                        {copiedBrief ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedBrief ? 'Copied to Clipboard' : 'Copy Brief'}</span>
                      </button>
                    </div>

                    <pre className="p-3.5 bg-slate-50 rounded border border-slate-200 text-xs font-mono text-slate-700 whitespace-pre-wrap overflow-x-auto max-h-48">
                      {generateFormattedBrief()}
                    </pre>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=Follow-up%20re%20Inquiry%20%E2%80%94%20Novyra`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors"
                    >
                      <span>Direct Email Follow-up</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                /* Formspree Connected Active Form */
                <form
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-950 font-display">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Share the details of your project. Transmitted directly to our studio inbox via Formspree.
                    </p>
                  </div>

                  {/* Submission Error Banner */}
                  {submissionStatus === 'error' && errorMessage && (
                    <div className="p-4 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5 animate-in fade-in duration-150">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                      <div className="space-y-1">
                        <strong className="font-semibold block">Submission Error</strong>
                        <span>{errorMessage}</span>
                        <div className="pt-1 text-[11px] text-red-800">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-900 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className={`w-full px-3.5 py-2.5 text-sm rounded border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors disabled:opacity-60 ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
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
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors disabled:opacity-60 ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        placeholder="Acme Studio"
                        className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-900 mb-1">
                        Primary Service of Interest <span className="text-red-500">*</span>
                      </label>
                      {/* Name attribute primary_service matches Formspree required rule */}
                      <select
                        id="contact-service"
                        name="primary_service"
                        required
                        disabled={isSubmitting}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceId })}
                        className={`w-full px-3.5 py-2.5 text-sm rounded border bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors disabled:opacity-60 ${
                          errors.service ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                      >
                        <option value="automation">Business &amp; Workflow Automation</option>
                        <option value="web">Web Solutions &amp; Development</option>
                        <option value="design">Digital Design &amp; Interfaces</option>
                        <option value="marketing">Digital Marketing &amp; Campaigns</option>
                        <option value="general">Multi-Service / Consultation</option>
                      </select>
                      {errors.service && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Expected Timeline */}
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
                      className="w-full px-3.5 py-2.5 text-sm rounded border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors disabled:opacity-60"
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
                      Project Details &amp; Operational Friction <span className="text-red-500">*</span>
                    </label>
                    {/* Name attribute project_details matches Formspree required rule */}
                    <textarea
                      id="contact-details"
                      name="project_details"
                      required
                      disabled={isSubmitting}
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us about the workflow you want to automate, tools involved (e.g. Gmail, Sheets, CRM), or website features you need..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded border bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors disabled:opacity-60 ${
                        errors.details ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                      }`}
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

                  {/* Submission and Deliverability Assurance */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 disabled:cursor-not-allowed rounded transition-all shadow-xs"
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
                    <span className="text-xs text-slate-500">
                      Dispatches securely to Formspree &rarr; {CONTACT_EMAIL}
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
