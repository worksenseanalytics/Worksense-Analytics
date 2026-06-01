import React, { useState } from "react";
import { 
  Cpu, 
  BrainCircuit, 
  LineChart, 
  Network, 
  CheckCircle, 
  TrendingUp,
  Activity,
  Layers,
  Database,
  BarChart3,
  Bot
} from "lucide-react";

import { useLanguage } from "../i18n";

export default function MachineLearningDetail() {
  const { t } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const workflowSteps = [
    {
      num: "01",
      title: t('ml.wf.step1_title'),
      desc: t('ml.wf.step1_desc')
    },
    {
      num: "02",
      title: t('ml.wf.step2_title'),
      desc: t('ml.wf.step2_desc')
    },
    {
      num: "03",
      title: t('ml.wf.step3_title'),
      desc: t('ml.wf.step3_desc')
    },
    {
      num: "04",
      title: t('ml.wf.step4_title'),
      desc: t('ml.wf.step4_desc')
    }
  ];

  return (
    <section id="jasa-machine-learning" className="bg-slate-900 py-16 md:py-24 pb-16 md:pb-20 relative border-t border-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col mb-16 relative">
          
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-emerald-400 border border-emerald-500/20 self-start mb-5">
            <BrainCircuit className="h-3.5 w-3.5 text-emerald-400 " /> {t('ml.badge')}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 text-left flex flex-col justify-center max-w-2xl">
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] text-left">
                {t('ml.title1')}
                <span className="block mt-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent pb-1">
                  {t('ml.title2')}
                </span>
              </h2>
              
              <p className="mt-4 text-xs sm:text-sm text-slate-300 font-bold font-sans tracking-wide leading-relaxed text-left">
                {t('ml.subtitle1')}<span className="text-emerald-400 font-extrabold">{t('ml.subtitle2')}</span>
              </p>

              <div className="mt-5 h-1 w-24 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.25)]" />
            </div>

            <div className="lg:col-span-3 relative flex items-center justify-center self-center w-[360px] max-w-full">
              
              <div className="hidden md:flex absolute -top-8 -right-6 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Activity className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">{t('ml.accuracy')}</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">94.8%</div>
                </div>
              </div>

              <div className="hidden md:flex absolute -bottom-7 -left-5 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Cpu className="h-3.5 w-3.5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-450 uppercase leading-none">{t('ml.latency')}</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">45ms</div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-950/40 rounded-xl border border-slate-800/80 p-4.5 backdrop-blur-sm shadow-xl flex flex-col justify-between relative overflow-hidden h-[260px] hover:border-slate-700 transition-all select-none">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-300" />
                
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/30">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[10px] text-slate-950 font-sans font-bold">
                      ML
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-200 leading-none">Model Inference</h4>
                      <p className="text-[9px] text-slate-500 font-mono mt-0.5">Predictive Output</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-32 bg-slate-950/70 rounded p-2 mt-4 border border-slate-850/60 overflow-hidden flex flex-col justify-end">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:0.6rem_0.6rem] pointer-events-none" />
                  
                  {/* Mock Predictive Graph */}
                  <svg className="w-full h-full relative z-10" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M 0 30 Q 15 25 30 20 T 50 15" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M 50 15 Q 70 20 85 10 T 100 5" fill="none" stroke="#10b981" strokeWidth="1.5" />
                    <circle cx="50" cy="15" r="1.5" fill="#f8fafc" />
                    <circle cx="100" cy="5" r="2" fill="#10b981" className="" />
                  </svg>
                </div>
                
                <div className="mt-3 flex justify-between text-[9px] font-mono text-slate-500">
                  <span>Historical Data</span>
                  <span className="text-emerald-400 font-semibold">{t('ml.inference')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-800/60 flex flex-wrap gap-2.5 justify-start items-center">
            <span className="text-xs text-slate-400 font-mono font-semibold mr-1">{t('ml.tools')}</span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-emerald-400 border border-emerald-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Python
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-orange-400 border border-orange-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              TensorFlow
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-red-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-red-400 border border-red-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              PyTorch
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-blue-400 border border-blue-500/20">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Pandas
            </span>
          </div>
        </div>

        {/* INTRO PROFILE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('ml.intro1_desc')}<strong>{t('ml.intro1_bold')}</strong>{t('ml.intro1_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 " />
              <span>{t('ml.intro1_tag')}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('ml.intro2_desc1')}<strong>{t('ml.intro2_bold1')}</strong>{t('ml.intro2_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-teal-400 font-mono font-bold">
              <CheckCircle className="h-4 w-4" />
              <span>{t('ml.intro2_tag')}</span>
            </div>
          </div>
        </div>

        {/* SEGMENT SOLUTIONS */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white font-sans">
              {t('ml.segment_title')}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
              {t('ml.segment_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* UC 1 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-teal-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400 border border-teal-500/25">
                    {t('ml.usecase1.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <LineChart className="h-3.5 w-3.5 text-teal-400" /> {t('ml.usecase1.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('ml.usecase1.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('ml.usecase1.desc')}
                </p>
              </div>
            </div>

            {/* UC 2 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-emerald-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/25">
                    {t('ml.usecase2.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Network className="h-3.5 w-3.5 text-emerald-400" /> {t('ml.usecase2.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('ml.usecase2.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('ml.usecase2.desc')}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TOOLS */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <Bot className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('ml.tools.title1')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('ml.tools.desc1')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <Database className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('ml.tools.title2')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('ml.tools.desc2')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <Layers className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('ml.tools.title3')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('ml.tools.desc3')}</p>
            </div>
          </div>
        </div>

        {/* WORKFLOW */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-bold text-white font-sans">{t('ml.wf.title')}</h4>
            <p className="mt-2 text-xs text-emerald-400 font-mono tracking-widest uppercase">{t('ml.wf.badge')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveWorkflowStep(idx)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  activeWorkflowStep === idx 
                    ? "bg-slate-800 border-emerald-500/40 shadow-lg shadow-emerald-500/5 translate-y-[-4px]" 
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-emerald-500/20 transition-colors">
                      {step.num}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${activeWorkflowStep === idx ? "bg-emerald-400" : "bg-slate-800"}`} />
                  </div>
                  <h5 className="font-bold text-slate-100 text-sm sm:text-base font-sans group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  {t('ml.wf.verified')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => {
              import('./ContactModal').then(({ openContactModal }) => openContactModal("Halo tim Worksense Analytics, saya ingin konsultasi mengenai implementasi layanan Predictive Analytics & Machine Learning. Boleh diskusi lebih lanjut?"));
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40"
          >
            {t('per.pricing.cta')}
          </button>
        </div>

      </div>
    </section>
  );
}
