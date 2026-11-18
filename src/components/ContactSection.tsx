import React, { useState, useEffect } from 'react';
import { ServiceId } from '../types';
import { Check, Copy, ArrowUpRight, AlertCircle, Send, CheckCircle2, Loader2, RefreshCw } from 'lucide-react';

interface ContactSectionProps {
  initialService?: ServiceId | 'general';
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbgdkavo';
const CONTACT_EMAIL = 'starthub48@gmail.com';

const SERVICE_LABELS: Record<string, string> = {
  automation: 'Business & Workflow Automation',
  web: 'Web Development',
  solutions: 'Digital Solutions',
  design: 'Branding & Digital Design',
  branding: 'Branding & Digital Design',
  marketing: 'Digital Marketing',
  general: 'General Inquiry / Multi-Service',
};

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = 'automation' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService,
    budget: 'To be scoped together',
    details: '',
    _gotcha: '',
  });

  // Sync external service selection clicks directly into the form
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: initialService,
    }));
  }, [initialService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.service) {
      errs.service = 'Please select a service of interest.';
    }

    if (!formData.details.trim()) {
      errs.details = 'Please describe your project, idea, or workflow challenge.';
    } else if (formData.details.trim().length < 15) {
      errs.details = 'Please provide at least 15 characters describing your project.';
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
Full Name: ${formData.name}
Email Address: ${formData.email}
Phone Number: ${formData.phone || 'Not provided'}
Company Name: ${formData.company || 'Not specified'}
Service Interested In: ${getServiceDisplayName()}
Project Budget: ${formData.budget}

Project Description:
${formData.details}
----------------------------------------
Sent via NOVYRA Digital Solutions Studio Website`;
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

    // Honeypot check
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
      phone: formData.phone.trim() || 'Not provided',
      company: formData.company.trim() || 'Not specified',
      primary_service: serviceDisplay,
      service: serviceDisplay,
      budget: formData.budget,
      project_details: formData.details.trim(),
      details: formData.details.trim(),
      message: formData.details.trim(),
      _subject: `New Project Inquiry: ${formData.name.trim()} (${serviceDisplay})`,
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
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
          : 'Network error preventing transmission. Please check your connection or email us directly.'
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
      phone: '',
      company: '',
      service: initialService,
      budget: 'To be scoped together',
      details: '',
      _gotcha: '',
    });
    setErrors({});
    setSubmissionStatus('idle');
    setErrorMessage(null);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-[#302B24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact & Next Steps */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#C5A46D]">
              Project Inquiry
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F1E9] font-display leading-[1.08]">
              Let&apos;s Build Something Exceptional.
            </h2>

            <p className="text-sm sm:text-base text-[#A9A49C] leading-relaxed font-body">
              Have an idea, project, or business challenge? Connect with NOVYRA and let&apos;s explore how we can bring your vision to life.
            </p>

            {/* Direct Studio Inbox */}
            <div className="bg-[#171717] border border-[#302B24] rounded-lg p-6 space-y-3">
              <div className="text-[11px] font-mono text-[#C5A46D] uppercase tracking-wider">
                Direct Studio Inbox
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry%20%E2%80%94%20NOVYRA`}
                  className="text-base sm:text-lg font-medium text-[#F5F1E9] hover:text-[#C5A46D] transition-colors font-mono underline decoration-[#302B24] underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F5F1E9] bg-[#121212] hover:bg-[#1C1A17] border border-[#302B24] rounded-md transition-colors shrink-0"
                  aria-label="Copy studio email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span className="text-[#C5A46D]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-[#A9A49C] leading-relaxed font-body">
                Prefer to write directly? Send your brief anytime via your email client.
              </p>
            </div>

            {/* What Happens After You Inquire */}
            <div className="bg-[#121212] border border-[#302B24] rounded-lg p-6 space-y-3.5">
              <h3 className="text-xs font-mono font-semibold text-[#F5F1E9] uppercase tracking-wider">
                What Happens After You Inquire
              </h3>

              <ol className="space-y-3 text-xs text-[#A9A49C] font-body">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#C5A46D] tabular-nums mt-0.5">01.</span>
                  <span>
                    <strong className="text-[#F5F1E9] font-medium">Initial Review (within 24 business hours):</strong> We read your notes and check how our automation or engineering capabilities align.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#C5A46D] tabular-nums mt-0.5">02.</span>
                  <span>
                    <strong className="text-[#F5F1E9] font-medium">Discovery &amp; Scoping:</strong> We schedule a direct conversation to clarify goals, tools, and timeline before proposing a scope.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#C5A46D] tabular-nums mt-0.5">03.</span>
                  <span>
                    <strong className="text-[#F5F1E9] font-medium">Clear Proposal:</strong> You receive a straightforward breakdown of deliverables and milestones with zero pressure.
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: Accessible Formspree Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#171717] border border-[#302B24] rounded-lg p-6 sm:p-8">
              
              {submissionStatus === 'success' ? (
                <div className="py-2 space-y-6">
                  <div className="flex items-start gap-3.5 p-5 rounded-md bg-[#1C1A17] border border-[#C5A46D]/60">
                    <CheckCircle2 className="w-6 h-6 text-[#C5A46D] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#F5F1E9] font-display">
                        Project Inquiry Received
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A9A49C] mt-1.5 leading-relaxed font-body">
                        Thank you, <strong className="text-[#F5F1E9]">{formData.name}</strong>. Your inquiry has been transmitted to NOVYRA at{' '}
                        <strong className="text-[#F5F1E9]">{CONTACT_EMAIL}</strong>.
                      </p>
                      <p className="text-xs text-[#A9A49C] mt-2 font-body">
                        We will review your details and reply to <strong className="text-[#F5F1E9]">{formData.email}</strong> within 24 business hours.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#A9A49C]">
                      <span className="font-medium text-[#F5F1E9]">Submitted Brief Copy</span>
                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="inline-flex items-center gap-1.5 text-xs text-[#C5A46D] hover:text-[#A98B59] font-medium"
                      >
                        {copiedBrief ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedBrief ? 'Copied to Clipboard' : 'Copy Brief'}</span>
                      </button>
                    </div>

                    <pre className="p-4 bg-[#121212] rounded-md border border-[#302B24] text-xs font-mono text-[#A9A49C] whitespace-pre-wrap overflow-x-auto max-h-48">
                      {generateFormattedBrief()}
                    </pre>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#F5F1E9] bg-[#121212] border border-[#302B24] hover:border-[#C5A46D]/60 rounded-md transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=Follow-up%20re%20Inquiry%20%E2%80%94%20NOVYRA`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0B0B0B] bg-[#C5A46D] hover:bg-[#A98B59] rounded-md transition-colors"
                    >
                      <span>Direct Email Follow-up</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <div className="border-b border-[#302B24] pb-4">
                    <h3 className="text-2xl font-semibold text-[#F5F1E9] font-display">
                      Project Enquiry Form
                    </h3>
                    <p className="text-xs text-[#A9A49C] mt-1 font-body">
                      Fields marked with <span className="text-[#C5A46D]">*</span> are required.
                    </p>
                  </div>

                  {/* Honeypot field */}
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

                  {/* Error Banner */}
                  {submissionStatus === 'error' && errorMessage && (
                    <div className="p-4 rounded-md bg-red-950/40 border border-red-700/60 text-xs text-red-200 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" aria-hidden="true" />
                      <div className="space-y-1">
                        <strong className="font-semibold block text-[#F5F1E9]">Submission Error</strong>
                        <span>{errorMessage}</span>
                        <div className="pt-1 text-[11px]">
                          Direct fallback:{' '}
                          <a
                            href={`mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry%20%E2%80%94%20NOVYRA`}
                            className="underline text-[#C5A46D] font-semibold"
                          >
                            {CONTACT_EMAIL}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hidden Formspree aliases */}
                  <input type="hidden" name="_subject" value={`New Project Inquiry: ${formData.name || 'New Client'} (${getServiceDisplayName()})`} />
                  <input type="hidden" name="service" value={getServiceDisplayName()} />
                  <input type="hidden" name="details" value={formData.details} />
                  <input type="hidden" name="message" value={formData.details} />

                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-[#F5F1E9] mb-1.5">
                        Full Name <span className="text-[#C5A46D]" aria-hidden="true">*</span>
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
                        className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-[#121212] text-[#F5F1E9] placeholder:text-[#A9A49C]/50 focus:outline-none focus:border-[#C5A46D] transition-colors disabled:opacity-60 ${
                          errors.name ? 'border-red-500' : 'border-[#302B24]'
                        }`}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                      />
                      {errors.name && (
                        <p id="error-name" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-[#F5F1E9] mb-1.5">
                        Email Address <span className="text-[#C5A46D]" aria-hidden="true">*</span>
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
                        className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-[#121212] text-[#F5F1E9] placeholder:text-[#A9A49C]/50 focus:outline-none focus:border-[#C5A46D] transition-colors disabled:opacity-60 ${
                          errors.email ? 'border-red-500' : 'border-[#302B24]'
                        }`}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                      />
                      {errors.email && (
                        <p id="error-email" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium text-[#F5F1E9] mb-1.5">
                        Phone Number <span className="text-[#A9A49C] font-normal">(optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#302B24] bg-[#121212] text-[#F5F1E9] placeholder:text-[#A9A49C]/50 focus:outline-none focus:border-[#C5A46D] transition-colors disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-medium text-[#F5F1E9] mb-1.5">
                        Company Name <span className="text-[#A9A49C] font-normal">(optional)</span>
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        disabled={isSubmitting}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Advisory"
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#302B24] bg-[#121212] text-[#F5F1E9] placeholder:text-[#A9A49C]/50 focus:outline-none focus:border-[#C5A46D] transition-colors disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Interested In & Project Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-medium text-[#F5F1E9] mb-1.5">
                        Service Interested In <span className="text-[#C5A46D]" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="contact-service"
                        name="primary_service"
                        required
                        disabled={isSubmitting}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceId })}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-[#121212] text-[#F5F1E9] focus:outline-none focus:border-[#C5A46D] transition-colors disabled:opacity-60 ${
                          errors.service ? 'border-red-500' : 'border-[#302B24]'
                        }`}
                        aria-required="true"
                      >
                        <option value="automation">Business &amp; Workflow Automation</option>
                        <option value="web">Web Development</option>
                        <option value="solutions">Digital Solutions</option>
                        <option value="design">Branding &amp; Digital Design</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="general">General Inquiry / Multi-Service</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-medium text-[#F5F1E9] mb-1.5">
                        Project Budget <span className="text-[#A9A49C] font-normal">(optional)</span>
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        disabled={isSubmitting}
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#302B24] bg-[#121212] text-[#F5F1E9] focus:outline-none focus:border-[#C5A46D] transition-colors disabled:opacity-60"
                      >
                        <option value="To be scoped together">To be scoped together</option>
                        <option value="Under $2,500">Under $2,500</option>
                        <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                        <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="contact-details" className="block text-xs font-medium text-[#F5F1E9] mb-1.5">
                      Project Description <span className="text-[#C5A46D]" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-details"
                      name="project_details"
                      required
                      disabled={isSubmitting}
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Describe the workflow you want to automate, tools your team uses, or the website you want to build..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-[#121212] text-[#F5F1E9] placeholder:text-[#A9A49C]/50 focus:outline-none focus:border-[#C5A46D] transition-colors disabled:opacity-60 ${
                        errors.details ? 'border-red-500' : 'border-[#302B24]'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.details}
                      aria-describedby={errors.details ? 'error-details' : undefined}
                    />
                    {errors.details && (
                      <p id="error-details" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Row */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wide text-[#0B0B0B] bg-[#C5A46D] hover:bg-[#A98B59] disabled:opacity-60 disabled:cursor-not-allowed rounded-md transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Send Project Inquiry</span>
                        </>
                      )}
                    </button>

                    <span className="text-xs text-[#A9A49C] font-mono">
                      Routed securely to {CONTACT_EMAIL}
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
