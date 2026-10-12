import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Play, Pause, RotateCcw, TrendingUp, BarChart3, Settings, Database, Layers, CheckCircle2 } from 'lucide-react';
import { NovyraLogo } from './NovyraLogo';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  const [progress, setProgress] = useState(78);
  const [activeStep, setActiveStep] = useState(1); // 0 = Data Collected, 1 = Process Running, 2 = Task Completed, 3 = Report Generated
  const [isSimulating, setIsSimulating] = useState(true);

  // Subtle cyclic animation for the laptop dashboard demo
  useEffect(() => {
    if (!isSimulating) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % 4;
        setProgress(next === 0 ? 35 : next === 1 ? 78 : next === 2 ? 92 : 100);
        return next;
      });
    }, 3200);
    return () => clearInterval(timer);
  }, [isSimulating]);

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#F8FAFC] via-[#FAF9F5] to-white overflow-hidden border-b border-slate-200/60">
      
      {/* Background Soft Natural Lighting Gradients */}
      <div className="absolute top-0 right-0 w-[55%] h-[85%] bg-gradient-to-bl from-blue-100/40 via-sky-50/20 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute -top-24 left-1/4 w-[400px] h-[400px] bg-amber-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs matching screenshot */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Kicker with horizontal line */}
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span className="w-6 h-px bg-slate-400" aria-hidden="true" />
              <span>IDEAS · AUTOMATE · CREATE · GROW</span>
            </div>

            {/* Main Headline with royal blue accent text */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-950 font-display leading-[1.12] tracking-tight">
              Modern Solutions <br />
              for <span className="text-blue-600">Real Business Growth</span>
            </h1>

            {/* Subtitle matching brief and screenshot */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body max-w-xl">
              Novyra helps businesses automate workflows, design digital experiences, and build custom solutions to scale efficiently.
            </p>

            {/* CTAs matching the image */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] active:bg-black rounded-lg transition-all shadow-xs hover:shadow-md group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-800 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors shadow-2xs"
              >
                <span>Our Services</span>
              </button>
            </div>

            {/* Trust attributes */}
            <div className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
              <span>Tailored workflows</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Practical human oversight</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Boutique studio quality</span>
            </div>
          </div>

          {/* Right Column: Modern Desk Scene with Laptop Mockup */}
          <div className="lg:col-span-6 relative">
            
            {/* Elegant Handwritten Cursive Note in top right of desk scene */}
            <div className="hidden sm:block absolute -top-8 right-6 z-20 pointer-events-none select-none text-right">
              <div className="font-handwriting text-2xl sm:text-3xl text-slate-700 font-semibold rotate-[-6deg] tracking-wide leading-tight drop-shadow-2xs">
                Work Smarter. <br />
                <span className="text-slate-800">Grow Faster.</span>
              </div>
            </div>

            {/* Desk Environment Card Container */}
            <div className="relative rounded-2xl p-4 sm:p-6 lg:p-7 bg-gradient-to-tr from-slate-200/50 via-slate-100/60 to-blue-50/50 border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xs">
              
              {/* Laptop Hardware Frame */}
              <div className="relative mx-auto max-w-[540px] bg-[#0F172A] rounded-t-xl rounded-b-md p-2.5 sm:p-3 shadow-2xl border border-slate-800">
                
                {/* Laptop Camera dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mx-auto mb-2" />

                {/* Laptop Screen Display */}
                <div className="bg-white rounded-md overflow-hidden border border-slate-200 text-slate-800 shadow-inner">
                  
                  {/* Top Screen App Bar */}
                  <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-400" />
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="truncate">novyra.studio/workflows/live</span>
                    <button
                      onClick={() => setIsSimulating(!isSimulating)}
                      className="text-[9px] text-blue-700 font-sans hover:underline"
                    >
                      {isSimulating ? 'Pause' : 'Live'}
                    </button>
                  </div>

                  {/* Dashboard Screen Grid */}
                  <div className="grid grid-cols-12 min-h-[260px] sm:min-h-[290px]">
                    
                    {/* Screen Left Sidebar matching screenshot */}
                    <div className="col-span-4 sm:col-span-3 bg-slate-50/90 border-r border-slate-200 p-2.5 flex flex-col justify-between">
                      <div className="space-y-3">
                        {/* Novyra Mini Logo in laptop */}
                        <div className="flex items-center gap-1 px-1 pt-0.5">
                          <span className="font-extrabold text-blue-600 text-sm font-display tracking-wider">N</span>
                          <span className="font-bold text-[9px] text-slate-900 tracking-widest hidden sm:inline">NOVYRA</span>
                        </div>

                        {/* Sidebar Menu Items */}
                        <div className="space-y-0.5 text-[10px] font-medium text-slate-600">
                          <div className="px-2 py-1 rounded hover:bg-slate-200/50 cursor-pointer">
                            Dashboard
                          </div>
                          <div className="px-2 py-1 rounded bg-blue-600 text-white font-semibold flex items-center justify-between shadow-2xs">
                            <span>Automation</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          </div>
                          <div className="px-2 py-1 rounded hover:bg-slate-200/50 cursor-pointer">
                            Analytics
                          </div>
                          <div className="px-2 py-1 rounded hover:bg-slate-200/50 cursor-pointer">
                            Workflows
                          </div>
                          <div className="px-2 py-1 rounded hover:bg-slate-200/50 cursor-pointer">
                            Integrations
                          </div>
                          <div className="px-2 py-1 rounded hover:bg-slate-200/50 cursor-pointer">
                            Settings
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200 text-[9px] text-slate-400">
                        v2.4 Active
                      </div>
                    </div>

                    {/* Screen Main Work Area */}
                    <div className="col-span-8 sm:col-span-9 p-3 sm:p-4 bg-white flex flex-col justify-between">
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                        
                        {/* "Automation in Progress" Central Card */}
                        <div className="sm:col-span-7 bg-white border border-slate-200/90 rounded-lg p-3 shadow-2xs">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 font-display">
                              Automation in Progress
                            </h4>
                            <span className="text-[10px] font-mono font-bold text-blue-600">
                              {progress}%
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
                            <div
                              className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                              style={{ width: `${progress}%` }}
                            />
                          </div>

                          {/* 4 Process Stages matching screenshot */}
                          <div className="space-y-1.5 text-[10px]">
                            {/* Step 1: Data Collected */}
                            <div className="flex items-center gap-2 text-slate-700">
                              <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </span>
                              <span className={activeStep >= 0 ? 'font-medium text-slate-900' : 'text-slate-500'}>
                                Data Collected
                              </span>
                            </div>

                            {/* Step 2: Process Running */}
                            <div className="flex items-center gap-2 text-slate-700">
                              <span className="w-3.5 h-3.5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                <span className={`w-1.5 h-1.5 rounded-full bg-blue-600 ${activeStep === 1 ? 'animate-ping' : ''}`} />
                              </span>
                              <span className={activeStep >= 1 ? 'font-medium text-blue-700' : 'text-slate-500'}>
                                Process Running
                              </span>
                            </div>

                            {/* Step 3: Task Completed */}
                            <div className="flex items-center gap-2 text-slate-500">
                              <span className={`w-3.5 h-3.5 rounded-full border border-slate-300 flex items-center justify-center shrink-0 ${activeStep >= 2 ? 'bg-emerald-100 border-emerald-400 text-emerald-600' : ''}`}>
                                {activeStep >= 2 && <Check className="w-2 h-2 stroke-[3]" />}
                              </span>
                              <span className={activeStep >= 2 ? 'font-medium text-slate-900' : 'text-slate-400'}>
                                Task Completed
                              </span>
                            </div>

                            {/* Step 4: Report Generated */}
                            <div className="flex items-center gap-2 text-slate-500">
                              <span className={`w-3.5 h-3.5 rounded-full border border-slate-300 flex items-center justify-center shrink-0 ${activeStep >= 3 ? 'bg-emerald-100 border-emerald-400 text-emerald-600' : ''}`}>
                                {activeStep >= 3 && <Check className="w-2 h-2 stroke-[3]" />}
                              </span>
                              <span className={activeStep >= 3 ? 'font-medium text-slate-900' : 'text-slate-400'}>
                                Report Generated
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* "Time Saved 62%" Stat Card matching screenshot */}
                        <div className="sm:col-span-5 bg-gradient-to-br from-blue-50/60 to-white border border-blue-100 rounded-lg p-3 flex flex-col justify-between">
                          <div>
                            {/* Graphic Bar Chart icon */}
                            <div className="flex items-end gap-1 h-7 mb-2">
                              <span className="w-2 h-3 bg-blue-200 rounded-t-xs" />
                              <span className="w-2 h-4.5 bg-blue-300 rounded-t-xs" />
                              <span className="w-2 h-6 bg-blue-500 rounded-t-xs" />
                              <span className="w-2 h-7 bg-blue-700 rounded-t-xs" />
                            </div>

                            <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                              Time Saved
                            </div>
                            <div className="text-lg font-bold text-slate-950 font-display flex items-baseline gap-1">
                              <span>62%</span>
                              <span className="text-xs text-blue-600">&uarr;</span>
                            </div>
                          </div>

                          <p className="text-[9px] text-slate-500 leading-tight mt-1">
                            Automated workflows for better results.
                          </p>
                        </div>

                      </div>

                      {/* Screen Footer status strip */}
                      <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400 font-mono">
                        <span>Workflow ID: #NV-8842</span>
                        <span className="text-emerald-600 font-semibold">&bull; Active Simulation</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Laptop Keyboard Lip */}
                <div className="h-1 bg-slate-700 rounded-b mt-0.5 mx-auto w-16" />
              </div>

              {/* Laptop Base Stand / Shadow */}
              <div className="h-2 bg-gradient-to-b from-slate-400 to-slate-300 max-w-[580px] mx-auto rounded-b-xl shadow-lg border-t border-slate-200" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
