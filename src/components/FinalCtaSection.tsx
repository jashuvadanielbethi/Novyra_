import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onStartProject: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onStartProject }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#121212] border-b border-[#302B24] overflow-hidden">
      {/* Subtle warm radial glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-[0.08]"
        style={{
          background: 'radial-gradient(ellipse at bottom center, #C5A46D 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-6">
        <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#C5A46D]">
          Ready When You Are
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#F5F1E9] font-display leading-[1.08]">
          Your Next Digital Move Starts Here.
        </h2>

        <p className="text-base sm:text-lg text-[#A9A49C] leading-relaxed font-body max-w-xl mx-auto">
          Let&apos;s turn your next idea into a meaningful digital solution with NOVYRA.
        </p>

        <div className="pt-2">
          <button
            type="button"
            onClick={onStartProject}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-semibold tracking-wide text-[#0B0B0B] bg-[#C5A46D] hover:bg-[#A98B59] rounded-md transition-colors group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
