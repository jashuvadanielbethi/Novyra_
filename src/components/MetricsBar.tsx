import React, { useState } from 'react';
import { Zap, BarChart2, Globe2, Mail, Copy, Check } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contactEmail = 'starthub48@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="bg-[#0B132B] text-white py-5 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        
        {/* Left Side: 3 Metrics matching screenshot */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 text-slate-100">
          
          {/* Metric 1: 3x Faster Workflows */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-blue-400 fill-blue-400/20" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white leading-none">
                3x
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Faster Workflows
              </div>
            </div>
          </div>

          {/* Metric 2: 60%+ Time Savings */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
              <BarChart2 className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white leading-none">
                60%+
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Time Savings
              </div>
            </div>
          </div>

          {/* Metric 3: Global Client Focus (US & Beyond) */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
              <Globe2 className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white leading-none">
                Global
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Client Focus (US &amp; Beyond)
              </div>
            </div>
          </div>

        </div>

        {/* Center / Right Divider on wide screens */}
        <div className="hidden lg:block h-9 w-px bg-slate-800" aria-hidden="true" />

        {/* Right Side: Quick Contact Action matching screenshot */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-400">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-display leading-tight">
                Let&apos;s Work Together
              </div>
              <div className="text-xs text-slate-400">
                Have a project or idea? Reach out to us.
              </div>
            </div>
          </div>

          {/* Email Box with Copy Button */}
          <div className="flex items-center bg-slate-900/90 border border-slate-700 rounded-lg px-3 py-1.5 gap-2 text-xs font-mono text-slate-200 shadow-inner">
            <a
              href={`mailto:${contactEmail}?subject=Project%20Inquiry%20%E2%80%94%20Novyra`}
              className="hover:text-blue-400 transition-colors"
            >
              {contactEmail}
            </a>
            <button
              onClick={handleCopyEmail}
              className="p-1 hover:text-white transition-colors rounded hover:bg-slate-800"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
