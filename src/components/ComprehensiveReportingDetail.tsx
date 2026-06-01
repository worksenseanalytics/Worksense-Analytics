import React, { useState } from "react";
import { 
  FileText, 
  Presentation, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Zap,
  BarChart4,
  ClipboardList,
  PenTool,
  Database,
  MonitorPlay
} from "lucide-react";

import { useLanguage } from "../i18n";

export default function ComprehensiveReportingDetail() {
  const { t } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const workflowSteps = [
    {
      num: "01",
      title: t('rep.wf.step1_title'),
      desc: t('rep.wf.step1_desc')
    },
    {
      num: "02",
      title: t('rep.wf.step2_title'),
      desc: t('rep.wf.step2_desc')
    },
    {
      num: "03",
      title: t('rep.wf.step3_title'),
      desc: t('rep.wf.step3_desc')
    },
    {
      num: "04",
      title: t('rep.wf.step4_title'),
      desc: t('rep.wf.step4_desc')
    }
  ];

  return (
    <section id="jasa-reporting" className="bg-slate-900 py-16 md:py-24 pb-16 md:pb-20 relative border-t border-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(225,29,72,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(225,29,72,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col mb-16 relative">
          
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-rose-400 border border-rose-500/20 self-start mb-5">
            <Presentation className="h-3.5 w-3.5 text-rose-400 " /> {t('rep.badge')}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 text-left flex flex-col justify-center max-w-2xl">
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] text-left">
                {t('rep.title1')}
                <span className="block mt-1 bg-gradient-to-r from-rose-400 via-red-400 to-rose-400 bg-clip-text text-transparent pb-1">
                  {t('rep.title2')}
                </span>
              </h2>
              
              <p className="mt-4 text-xs sm:text-sm text-slate-300 font-bold font-sans tracking-wide leading-relaxed text-left">
                {t('rep.subtitle1')}<span className="text-rose-400 font-extrabold">{t('rep.subtitle2')}</span>
              </p>

              <div className="mt-5 h-1 w-24 bg-gradient-to-r from-rose-500 via-red-500 to-rose-400 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.25)]" />
            </div>

            <div className="lg:col-span-3 relative flex items-center justify-center self-center w-[360px] max-w-full">
              
              <div className="hidden md:flex absolute -top-8 -right-6 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-rose-500/10 flex items-center justify-center">
                  <Target className="h-3.5 w-3.5 text-rose-400" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">{t('rep.clarity')}</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">High Impact</div>
                </div>
              </div>

              <div className="hidden md:flex absolute -bottom-7 -left-5 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <FileText className="h-3.5 w-3.5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-450 uppercase leading-none">{t('rep.delivery')}</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">Ready PDF/PPT</div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-950/40 rounded-xl border border-slate-800/80 p-4.5 backdrop-blur-sm shadow-xl flex flex-col justify-between relative overflow-hidden h-[260px] hover:border-slate-700 transition-all select-none">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-rose-400 via-red-500 to-rose-300" />
                
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/30">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center text-[10px] text-slate-950 font-sans font-bold">
                      <BarChart4 className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-200 leading-none">Executive Deck</h4>
                      <p className="text-[9px] text-slate-500 font-mono mt-0.5">Data Storytelling</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-32 bg-slate-950/70 rounded p-4 mt-4 border border-slate-850/60 overflow-hidden flex flex-col justify-center items-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:0.6rem_0.6rem] pointer-events-none" />
                  
                  {/* Mock Presentation Slide SVG */}
                  <div className="relative w-full h-full border-2 border-slate-700 flex flex-col p-2 bg-slate-900 shadow-inner rounded-sm z-10">
                    <div className="w-1/2 h-2 bg-rose-500/80 rounded-sm mb-2"></div>
                    <div className="w-1/3 h-1 bg-slate-600 rounded-sm mb-4"></div>
                    <div className="flex gap-2 flex-1">
                      <div className="w-1/3 h-full bg-slate-800 rounded-sm border border-slate-700 flex items-end justify-between p-1">
                         <div className="w-1/4 bg-rose-400/50 h-1/3 rounded-t-[1px]"></div>
                         <div className="w-1/4 bg-rose-500 h-2/3 rounded-t-[1px]"></div>
                         <div className="w-1/4 bg-red-400 h-full rounded-t-[1px]"></div>
                      </div>
                      <div className="w-2/3 h-full flex flex-col gap-1.5 justify-center">
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                          <div className="h-1 w-full bg-slate-600 rounded-sm"></div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                          <div className="h-1 w-3/4 bg-slate-600 rounded-sm"></div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                          <div className="h-1 w-5/6 bg-slate-600 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 flex justify-between text-[9px] font-mono text-slate-500">
                  <span>Raw SQL Data</span>
                  <span className="text-rose-400 font-semibold">C-Level Slides</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-800/60 flex flex-wrap gap-2.5 justify-start items-center">
            <span className="text-xs text-slate-400 font-mono font-semibold mr-1">{t('rep.tools')}</span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-orange-400 border border-orange-500/20">
              <img src="https://img.icons8.com/?size=256&id=13673&format=png" alt="PowerPoint" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              PowerPoint
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-blue-400 border border-blue-500/20">
              <img src="https://img.icons8.com/?size=256&id=iWHRpYD4cbSR&format=png" alt="Canva" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Canva
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-rose-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-rose-400 border border-rose-500/20">
              <PenTool className="h-3.5 w-3.5" />
              Design Tools
            </span>
          </div>
        </div>

        {/* INTRO PROFILE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('rep.intro1_desc')}<strong>{t('rep.intro1_bold')}</strong>{t('rep.intro1_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-rose-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-rose-500 " />
              <span>{t('rep.intro1_tag')}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('rep.intro2_desc1')}<strong>{t('rep.intro2_bold1')}</strong>{t('rep.intro2_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-red-400 font-mono font-bold">
              <CheckCircle className="h-4 w-4" />
              <span>{t('rep.intro2_tag')}</span>
            </div>
          </div>
        </div>

        {/* SEGMENT SOLUTIONS */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white font-sans">
              {t('rep.segment_title')}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
              {t('rep.segment_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* UC 1 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-rose-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-400 border border-rose-500/25">
                    {t('rep.usecase1.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <MonitorPlay className="h-3.5 w-3.5 text-rose-400" /> {t('rep.usecase1.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('rep.usecase1.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('rep.usecase1.desc')}
                </p>
              </div>
            </div>

            {/* UC 2 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-red-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 border border-red-500/25">
                    {t('rep.usecase2.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <ClipboardList className="h-3.5 w-3.5 text-red-400" /> {t('rep.usecase2.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('rep.usecase2.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('rep.usecase2.desc')}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TOOLS */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-rose-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-slate-950 transition-colors">
                <Presentation className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('rep.tools.title1')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('rep.tools.desc1')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-red-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-slate-950 transition-colors">
                <Database className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('rep.tools.title2')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('rep.tools.desc2')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-rose-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-slate-950 transition-colors">
                <PenTool className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('rep.tools.title3')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('rep.tools.desc3')}</p>
            </div>
          </div>
        </div>

        {/* WORKFLOW */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-bold text-white font-sans">{t('rep.wf.title')}</h4>
            <p className="mt-2 text-xs text-rose-400 font-mono tracking-widest uppercase">{t('rep.wf.badge')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveWorkflowStep(idx)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  activeWorkflowStep === idx 
                    ? "bg-slate-800 border-rose-500/40 shadow-lg shadow-rose-500/5 translate-y-[-4px]" 
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-rose-500/20 transition-colors">
                      {step.num}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${activeWorkflowStep === idx ? "bg-rose-400" : "bg-slate-800"}`} />
                  </div>
                  <h5 className="font-bold text-slate-100 text-sm sm:text-base font-sans group-hover:text-rose-400 transition-colors">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  {t('rep.wf.verified')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => {
              import('./ContactModal').then(({ openContactModal }) => openContactModal("Halo tim Worksense Analytics, saya tertarik dengan layanan pembuatan Pitch Deck Eksekutif dan Comprehensive Reporting. Boleh diskusi lebih lanjut?"));
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-500/25 transition-all hover:bg-rose-400 hover:shadow-rose-500/40"
          >
            {t('per.pricing.cta')}
          </button>
        </div>

      </div>
    </section>
  );
}
