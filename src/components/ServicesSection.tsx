import React, { useState } from 'react';
import { ServiceId } from '../types';
import {
  Monitor,
  Smartphone,
  Tablet,
  Layout,
  Layers,
  Sparkles,
  Palette,
  Compass,
  Megaphone,
  ArrowRight,
  Check,
  Eye,
  SlidersHorizontal,
  Type,
  Maximize2
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  // Service 2: Web Solutions - Viewport device switch state
  const [deviceViewport, setDeviceViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Service 3: Digital Design - Before/After comparison toggle or Grid overlay
  const [designState, setDesignState] = useState<'refined' | 'initial'>('refined');
  const [showGridOverlay, setShowGridOverlay] = useState(false);

  // Service 4: Digital Marketing - Campaign workflow stage
  const [marketingStage, setMarketingStage] = useState<number>(0);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-slate-900/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span className="text-blue-700 font-bold">Comprehensive Capabilities</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Studio Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
            Built for Real Operations and Lasting Utility.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            Beyond our flagship automation workflows, Novyra designs and builds full digital surfaces—engineered for clarity, speed, and real business use.
          </p>
        </div>

        {/* ---------------- SERVICE 1: WEB SOLUTIONS ---------------- */}
        <div className="mb-24 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                02. Web Solutions
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Responsive Websites and Web Applications
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We develop fast, clean, and maintainable digital experiences: marketing websites, client portals, responsive landing pages, and application interfaces built with modern TypeScript and responsive CSS.
              </p>

              <div className="space-y-2 pt-1 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-700" />
                  <span>Responsive architectures for mobile, tablet, and wide desktop screens</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-700" />
                  <span>Clean semantic markup with accessible hierarchy and SEO fundamentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-700" />
                  <span>Website rebuilds and modernizations that load without unnecessary bloat</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onSelectService('web')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-blue-700 transition-colors group"
                >
                  <span>Inquire about Web Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Interactive Visual Demonstration: Responsive Browser Transformation */}
            <div className="lg:col-span-7">
              <div className="bg-slate-100/80 p-3 sm:p-5 rounded-lg border border-slate-200 flex flex-col items-center">
                
                {/* Viewport switch toolbar */}
                <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-slate-200/70 text-xs">
                  <div className="font-mono text-[11px] text-slate-500">
                    Live Viewport Simulation
                  </div>

                  {/* Responsive controls */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded border border-slate-200 shadow-2xs">
                    <button
                      onClick={() => setDeviceViewport('desktop')}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors ${
                        deviceViewport === 'desktop'
                          ? 'bg-slate-900 text-white font-medium'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Desktop</span>
                    </button>
                    <button
                      onClick={() => setDeviceViewport('tablet')}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors ${
                        deviceViewport === 'tablet'
                          ? 'bg-slate-900 text-white font-medium'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Tablet className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Tablet</span>
                    </button>
                    <button
                      onClick={() => setDeviceViewport('mobile')}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors ${
                        deviceViewport === 'mobile'
                          ? 'bg-slate-900 text-white font-medium'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Mobile</span>
                    </button>
                  </div>
                </div>

                {/* Animated Browser Frame */}
                <div
                  className={`bg-white rounded-md border border-slate-300 shadow-sm transition-all duration-300 overflow-hidden ${
                    deviceViewport === 'desktop'
                      ? 'w-full max-w-xl'
                      : deviceViewport === 'tablet'
                      ? 'w-full max-w-md'
                      : 'w-full max-w-[280px]'
                  }`}
                >
                  {/* Browser Mock Chrome */}
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                    </div>
                    <div className="mx-auto bg-white px-2.5 py-0.5 rounded text-[10px] font-mono text-slate-500 border border-slate-200/60 truncate max-w-[180px]">
                      novyra.client-preview.internal
                    </div>
                  </div>

                  {/* Browser Content Area */}
                  <div className="p-4 sm:p-5 space-y-4">
                    {/* Simulated Nav */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="text-xs font-bold text-slate-900 font-display">
                        ARCHITECTURAL SPEC
                      </div>
                      {deviceViewport === 'mobile' ? (
                        <div className="w-4 h-3 flex flex-col justify-between">
                          <span className="h-0.5 w-full bg-slate-700" />
                          <span className="h-0.5 w-full bg-slate-700" />
                          <span className="h-0.5 w-full bg-slate-700" />
                        </div>
                      ) : (
                        <div className="flex gap-3 text-[10px] text-slate-500 font-mono">
                          <span>Practice</span>
                          <span>Works</span>
                          <span>Inquiries</span>
                        </div>
                      )}
                    </div>

                    {/* Simulated Hero Grid in browser */}
                    <div
                      className={`grid gap-3 ${
                        deviceViewport === 'mobile' ? 'grid-cols-1' : 'grid-cols-12'
                      }`}
                    >
                      <div className={deviceViewport === 'mobile' ? 'space-y-2' : 'col-span-7 space-y-2'}>
                        <div className="h-4 bg-slate-900 rounded w-4/5" />
                        <div className="h-2 bg-slate-200 rounded w-full" />
                        <div className="h-2 bg-slate-200 rounded w-3/4" />
                        <div className="pt-1 flex gap-2">
                          <div className="h-5 w-16 bg-blue-700 rounded text-[9px] text-white flex items-center justify-center font-mono">
                            View Case
                          </div>
                        </div>
                      </div>

                      <div
                        className={`bg-slate-50 border border-slate-200 rounded p-2 flex flex-col justify-between ${
                          deviceViewport === 'mobile' ? 'h-24' : 'col-span-5 h-28'
                        }`}
                      >
                        <div className="text-[9px] font-mono text-slate-400">
                          Structural Frame
                        </div>
                        <div className="space-y-1">
                          <div className="h-1.5 bg-slate-200 rounded w-full" />
                          <div className="h-1.5 bg-slate-200 rounded w-4/5" />
                          <div className="h-1.5 bg-slate-200 rounded w-3/5" />
                        </div>
                        <div className="text-[9px] font-mono text-emerald-700">
                          &radic; 100% Fluid Fluidity
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-100 flex justify-between">
                      <span>Width: {deviceViewport === 'desktop' ? '1280px' : deviceViewport === 'tablet' ? '768px' : '375px'}</span>
                      <span>Zero horizontal overflow</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 mt-3 font-mono">
                  Responsive layout dynamically adapts spacing, hierarchy, and navigation.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ---------------- SERVICE 2: DIGITAL DESIGN ---------------- */}
        <div className="mb-24 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Visual Demonstration: Polished Design Canvas with Grid & Refinement Slider */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 shadow-sm">
                
                {/* Canvas Control Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 font-display">
                      Studio Design Canvas
                    </span>
                    <span className="text-xs text-slate-400">/</span>
                    <span className="text-xs font-mono text-slate-500">
                      {designState === 'refined' ? 'Editorial Polish (Novyra)' : 'Unrefined Draft'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowGridOverlay(!showGridOverlay)}
                      className={`px-2 py-1 text-xs font-mono rounded border transition-colors ${
                        showGridOverlay
                          ? 'bg-blue-50 border-blue-300 text-blue-700'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {showGridOverlay ? 'Grid: ON' : 'Grid: OFF'}
                    </button>

                    <button
                      onClick={() => setDesignState(designState === 'refined' ? 'initial' : 'refined')}
                      className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                    >
                      Toggle {designState === 'refined' ? 'Draft' : 'Polish'}
                    </button>
                  </div>
                </div>

                {/* Canvas Interior */}
                <div
                  className={`relative p-6 rounded border transition-all duration-300 ${
                    designState === 'refined'
                      ? 'bg-[#FAF9F5] border-slate-200/80'
                      : 'bg-white border-dashed border-slate-300'
                  }`}
                >
                  {/* Grid Lines Overlay if toggled */}
                  {showGridOverlay && (
                    <div
                      className="absolute inset-0 pointer-events-none opacity-20 border-blue-400"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />
                  )}

                  {designState === 'refined' ? (
                    /* Refined Studio Layout */
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-500">
                          EST. 2026 // CASE STUDY SAMPLE
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          12-Col Modular Baseline
                        </span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-bold text-slate-950 font-display leading-tight">
                        Clarity Over Clutter in Modern Interfaces.
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body max-w-md">
                        Every element is positioned with strict typographic hierarchy, deliberate negative space, and calculated hairline borders. No artificial neon or generic card bloat.
                      </p>

                      <div className="grid grid-cols-3 gap-3 pt-2">
                        <div className="p-3 bg-white border border-slate-200/70 rounded">
                          <div className="text-[10px] font-mono text-slate-400">Scale</div>
                          <div className="text-xs font-bold text-slate-900 mt-0.5">8pt Grid</div>
                        </div>
                        <div className="p-3 bg-white border border-slate-200/70 rounded">
                          <div className="text-[10px] font-mono text-slate-400">Contrast</div>
                          <div className="text-xs font-bold text-slate-900 mt-0.5">WCAG AAA</div>
                        </div>
                        <div className="p-3 bg-white border border-slate-200/70 rounded">
                          <div className="text-[10px] font-mono text-slate-400">Typography</div>
                          <div className="text-xs font-bold text-slate-900 mt-0.5">Manrope + Sans</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Initial Unrefined Draft */
                    <div className="space-y-4 opacity-75">
                      <div className="bg-purple-100 p-2 rounded text-xs text-purple-900 font-bold inline-block">
                        Generic AI Header Badge #1
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">
                        Generic Template Heading With Lots of Buzzwords
                      </h4>
                      <p className="text-xs text-slate-500">
                        Default copy with unclear margins, random font pairings, inconsistent borders, and unnecessary visual noise.
                      </p>
                      <div className="p-3 bg-purple-50 border border-purple-200 rounded text-xs text-purple-700">
                        Cluttered card without typographic rhythm
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>Interactive Demonstration</span>
                  <span className="font-mono text-[11px]">Noticeable hierarchy and zero template clutter</span>
                </div>
              </div>
            </div>

            {/* Right Description */}
            <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                03. Digital Design
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Interface Design &amp; Digital Asset Systems
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We craft interfaces that feel natural, intuitive, and distinctly human. We reject generic AI template trends in favor of disciplined typography, authentic layouts, and high-legibility systems.
              </p>

              <div className="space-y-2 pt-1 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-700" />
                  <span>Custom interface design for web apps, SaaS tools, and client platforms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-700" />
                  <span>Design tokens, spacing systems, and comprehensive component specs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-700" />
                  <span>High-intent layout structures that respect user attention</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onSelectService('design')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-blue-700 transition-colors group"
                >
                  <span>Inquire about Digital Design</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ---------------- SERVICE 3: DIGITAL MARKETING ---------------- */}
        <div className="mb-24 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                04. Digital Marketing
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Conversion Improvements &amp; Campaign Workflows
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Marketing isn't about empty vanity metrics. We focus on landing-page messaging clarity, campaign asset structuring, content preparation, and practical conversion funnel improvements.
              </p>

              <div className="space-y-2 pt-1 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-700" />
                  <span>Proposition and messaging refinement that addresses customer questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-700" />
                  <span>Structured campaign assets and coordinated launch timelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-700" />
                  <span>Honest tracking without inflated guarantees or speculative growth promises</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onSelectService('marketing')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-blue-700 transition-colors group"
                >
                  <span>Inquire about Digital Marketing</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Interactive Visual Demonstration: Campaign Workflow Progression */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 shadow-sm">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-slate-900 font-display">
                      Campaign Execution Pipeline
                    </span>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Planning &rarr; Asset Delivery &rarr; Distribution &rarr; Performance Review
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    Step {marketingStage + 1} of 4
                  </div>
                </div>

                {/* Stepper buttons */}
                <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-md mb-5">
                  {['1. Plan', '2. Produce', '3. Publish', '4. Review'].map((stName, idx) => (
                    <button
                      key={stName}
                      onClick={() => setMarketingStage(idx)}
                      className={`py-1.5 text-xs font-medium rounded transition-colors ${
                        marketingStage === idx
                          ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {stName}
                    </button>
                  ))}
                </div>

                {/* Stage Details Card */}
                <div className="p-4 rounded border border-slate-200/80 bg-slate-50/60 space-y-3">
                  {marketingStage === 0 && (
                    <div>
                      <div className="text-xs font-mono uppercase text-blue-700 font-semibold mb-1">
                        Phase 01: Value Proposition &amp; Scope Audit
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Define Concrete Offer &amp; Target Audience Questions
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Identify client pain points, evaluate customer intent, and establish clear landing page messaging before producing collateral.
                      </p>
                      <div className="mt-3 text-xs font-mono text-slate-500 bg-white p-2 rounded border border-slate-200/60">
                        Deliverable: Messaging matrix, objection checklist, and positioning brief.
                      </div>
                    </div>
                  )}

                  {marketingStage === 1 && (
                    <div>
                      <div className="text-xs font-mono uppercase text-blue-700 font-semibold mb-1">
                        Phase 02: High-Intent Asset Production
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Landing Page Copywriting &amp; Graphic Collateral
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Draft focused copy, generate purposeful diagrams, and design conversion touchpoints that eliminate friction.
                      </p>
                      <div className="mt-3 text-xs font-mono text-slate-500 bg-white p-2 rounded border border-slate-200/60">
                        Deliverable: Production-ready landing page sections, graphic assets, and social banners.
                      </div>
                    </div>
                  )}

                  {marketingStage === 2 && (
                    <div>
                      <div className="text-xs font-mono uppercase text-blue-700 font-semibold mb-1">
                        Phase 03: Channel Distribution &amp; Tracking
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Live Deployment &amp; Clean Tracking Configuration
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Deploy pages with correct meta tags, fast loading speeds, clean URL query parameters, and working contact endpoints.
                      </p>
                      <div className="mt-3 text-xs font-mono text-slate-500 bg-white p-2 rounded border border-slate-200/60">
                        Deliverable: Live campaign endpoint, structured UTM parameters, and verified delivery.
                      </div>
                    </div>
                  )}

                  {marketingStage === 3 && (
                    <div>
                      <div className="text-xs font-mono uppercase text-blue-700 font-semibold mb-1">
                        Phase 04: Qualitative Review &amp; Optimization
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Funnel Bottleneck Review &amp; Copy Iteration
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Assess real inbound inquiry quality, identify drop-off points, and adjust form fields and headings based on evidence.
                      </p>
                      <div className="mt-3 text-xs font-mono text-slate-500 bg-white p-2 rounded border border-slate-200/60">
                        Deliverable: Optimization roadmap and iterative improvements schedule.
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="italic">
                    We do not guarantee unverified rankings or sales spikes; we engineer reliable conversion surfaces.
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setMarketingStage((prev) => (prev > 0 ? prev - 1 : 3))}
                      className="text-xs font-mono text-slate-700 hover:text-slate-950 p-1"
                    >
                      &larr; Prev
                    </button>
                    <button
                      onClick={() => setMarketingStage((prev) => (prev < 3 ? prev + 1 : 0))}
                      className="text-xs font-mono text-slate-700 hover:text-slate-950 p-1"
                    >
                      Next &rarr;
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
