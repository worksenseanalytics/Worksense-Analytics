import React, { useState } from "react";
import { 
  GraduationCap, 
  Store, 
  BookOpen, 
  Users, 
  CheckCircle, 
  BadgeCheck,
  Zap,
  BarChart,
  Calculator,
  FileSpreadsheet,
  Laptop,
  LineChart,
  Smartphone
} from "lucide-react";

import { useLanguage } from "../i18n";

export default function PersonalAcademicDetail() {
  const { t } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const workflowSteps = [
    {
      num: "01",
      title: t('per.wf.step1_title'),
      desc: t('per.wf.step1_desc')
    },
    {
      num: "02",
      title: t('per.wf.step2_title'),
      desc: t('per.wf.step2_desc')
    },
    {
      num: "03",
      title: t('per.wf.step3_title'),
      desc: t('per.wf.step3_desc')
    },
    {
      num: "04",
      title: t('per.wf.step4_title'),
      desc: t('per.wf.step4_desc')
    }
  ];

  const pricingTiers = [
    {
      id: "basic",
      name: t('per.pricing.tier1.name'),
      desc: t('per.pricing.tier1.desc'),
      price: t('per.pricing.tier1.price'),
      highlight: false,
      whatsappMessage: "Halo tim Worksense Analytics, saya ingin konsultasi mengenai paket Basic/Entry untuk Akademik/UMKM. Boleh dibantu?",
      features: [
        { text: t('per.pricing.tier1.f1'), included: true },
        { text: t('per.pricing.tier1.f2'), included: true },
        { text: t('per.pricing.tier1.f3'), included: true },
        { text: t('per.pricing.tier1.f4'), included: true },
      ]
    },
    {
      id: "standard",
      name: t('per.pricing.tier2.name'),
      desc: t('per.pricing.tier2.desc'),
      price: t('per.pricing.tier2.price'),
      highlight: true,
      whatsappMessage: "Halo tim Worksense Analytics, saya ingin konsultasi mengenai paket Standard/Riset untuk olah data tesis/skripsi. Boleh dibantu?",
      features: [
        { text: t('per.pricing.tier2.f1'), included: true },
        { text: t('per.pricing.tier2.f2'), included: true },
        { text: t('per.pricing.tier2.f3'), included: true },
        { text: t('per.pricing.tier2.f4'), included: true },
      ]
    },
    {
      id: "premium",
      name: t('per.pricing.tier3.name'),
      desc: t('per.pricing.tier3.desc'),
      price: t('per.pricing.tier3.price'),
      highlight: false,
      whatsappMessage: "Halo tim Worksense Analytics, saya ingin konsultasi mengenai paket Premium/UMKM untuk pembuatan dashboard/pembukuan. Boleh dibantu?",
      features: [
        { text: t('per.pricing.tier3.f1'), included: true },
        { text: t('per.pricing.tier3.f2'), included: true },
        { text: t('per.pricing.tier3.f3'), included: true },
        { text: t('per.pricing.tier3.f4'), included: true },
      ]
    }
  ];

  return (
    <section id="jasa-personal" className="bg-slate-950 py-16 md:py-24 pb-16 md:pb-20 relative border-t border-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col mb-16 relative">
          
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-indigo-400 border border-indigo-500/20 self-start mb-5">
            <GraduationCap className="h-3.5 w-3.5 text-indigo-400 " /> {t('per.badge')}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 text-left flex flex-col justify-center max-w-2xl">
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] text-left">
                {t('per.title1')}
                <span className="block mt-1 bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent pb-1">
                  {t('per.title2')}
                </span>
              </h2>
              
              <p className="mt-4 text-xs sm:text-sm text-slate-300 font-bold font-sans tracking-wide leading-relaxed text-left">
                {t('per.subtitle1')}<span className="text-indigo-400 font-extrabold">{t('per.subtitle2')}</span>
              </p>

              <div className="mt-5 h-1 w-24 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.25)]" />
            </div>

            <div className="lg:col-span-3 relative flex items-center justify-center self-center w-[360px] max-w-full mt-6 lg:mt-0">
              
              <div className="hidden md:flex absolute -top-8 -right-6 bg-slate-900/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <CheckCircle className="h-3.5 w-3.5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">{t('per.scale')}</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">Budget Friendly</div>
                </div>
              </div>

              <div className="hidden md:flex absolute -bottom-7 -left-5 bg-slate-900/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <Users className="h-3.5 w-3.5 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-450 uppercase leading-none">{t('per.integration')}</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">1-on-1 Consultation</div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-900/40 rounded-xl border border-slate-800/80 p-4.5 backdrop-blur-sm shadow-xl flex flex-col justify-between relative overflow-hidden h-[260px] hover:border-slate-700 transition-all select-none">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-indigo-400 via-violet-500 to-indigo-300" />
                
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/30">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-[10px] text-white font-sans font-bold">
                      <Store className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-200 leading-none">Smart Solutions</h4>
                      <p className="text-[9px] text-slate-500 font-mono mt-0.5">Focus on Execution</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-32 bg-slate-800/50 rounded-lg mt-4 border border-slate-700/50 overflow-hidden flex flex-col justify-center items-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />
                  
                  {/* Micro Illustration */}
                  <div className="flex gap-4 items-center z-10">
                     <div className="h-10 w-10 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite]">
                        <FileSpreadsheet className="h-5 w-5 text-indigo-400" />
                     </div>
                     <Zap className="h-4 w-4 text-slate-600 " />
                     <div className="h-10 w-10 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite_0.5s]">
                        <LineChart className="h-5 w-5 text-violet-400" />
                     </div>
                  </div>
                  
                </div>
                
                <div className="mt-3 flex justify-between text-[9px] font-mono text-slate-500">
                  <span>Raw Data/Files</span>
                  <span className="text-indigo-400 font-semibold">Tidy Results</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-800/60 flex flex-wrap gap-2.5 justify-start items-center">
            <span className="text-xs text-slate-400 font-mono font-semibold mr-1">{t('per.tools')}</span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-indigo-400 border border-indigo-500/20">
              <Calculator className="h-3.5 w-3.5" />
              SPSS/SmartPLS
            </span>
             <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-emerald-400 border border-emerald-500/20">
              <FileSpreadsheet className="h-3.5 w-3.5" />
              Spreadsheets
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-violet-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-violet-400 border border-violet-500/20">
              <Smartphone className="h-3.5 w-3.5" />
              Looker Studio
            </span>
          </div>
        </div>

        {/* INTRO PROFILE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('per.intro1_desc')}<strong>{t('per.intro1_bold')}</strong>{t('per.intro1_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-indigo-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-indigo-500 " />
              <span>{t('per.intro1_tag')}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('per.intro2_desc1')}<strong>{t('per.intro2_bold1')}</strong>{t('per.intro2_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-violet-400 font-mono font-bold">
              <BadgeCheck className="h-4 w-4" />
              <span>{t('per.intro2_tag')}</span>
            </div>
          </div>
        </div>

        {/* SEGMENT SOLUTIONS */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white font-sans">
              {t('per.segment_title')}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
              {t('per.segment_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* UC 1 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/30 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-indigo-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/25">
                    {t('per.usecase1.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <BookOpen className="h-3.5 w-3.5 text-indigo-400" /> {t('per.usecase1.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('per.usecase1.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('per.usecase1.desc')}
                </p>
              </div>
            </div>

            {/* UC 2 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8 flex flex-col justify-between hover:border-violet-500/30 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-violet-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 border border-violet-500/25">
                    {t('per.usecase2.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Store className="h-3.5 w-3.5 text-violet-400" /> {t('per.usecase2.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('per.usecase2.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('per.usecase2.desc')}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TOOLS */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 flex flex-col items-center text-center group hover:border-indigo-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-slate-950 transition-colors">
                <BarChart className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('per.tools.title1')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('per.tools.desc1')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 flex flex-col items-center text-center group hover:border-violet-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4 group-hover:bg-violet-500 group-hover:text-slate-950 transition-colors">
                <Laptop className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('per.tools.title2')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('per.tools.desc2')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 flex flex-col items-center text-center group hover:border-indigo-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-slate-950 transition-colors">
                <Smartphone className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('per.tools.title3')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('per.tools.desc3')}</p>
            </div>
          </div>
        </div>

        {/* WORKFLOW */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-bold text-white font-sans">{t('per.wf.title')}</h4>
            <p className="mt-2 text-xs text-indigo-400 font-mono tracking-widest uppercase">{t('per.wf.badge')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveWorkflowStep(idx)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  activeWorkflowStep === idx 
                    ? "bg-slate-800 border-indigo-500/40 shadow-lg shadow-indigo-500/5 translate-y-[-4px]" 
                    : "bg-slate-900/30 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-indigo-500/20 transition-colors">
                      {step.num}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${activeWorkflowStep === idx ? "bg-indigo-400" : "bg-slate-800"}`} />
                  </div>
                  <h5 className="font-bold text-slate-100 text-sm sm:text-base font-sans group-hover:text-indigo-400 transition-colors">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  {t('per.wf.verified')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-indigo-400 border border-indigo-500/20 mb-4 uppercase">
              {t('per.pricing.badge')}
            </span>
            <h4 className="text-3xl md:text-4xl font-extrabold text-white font-sans">{t('per.pricing.title')}</h4>
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed font-sans">{t('per.pricing.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.highlight 
                    ? "bg-gradient-to-b from-indigo-900/40 to-slate-900/80 border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/10 transform md:-translate-y-4" 
                    : "bg-slate-900/50 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                    Highest Value
                  </div>
                )}
                
                <div>
                  <h5 className="font-bold text-slate-100 text-xl font-sans mb-2">{tier.name}</h5>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed min-h-[40px]">{tier.desc}</p>
                  
                  <div className="my-6 pb-6 border-b border-slate-800">
                    <span className="text-3xl font-extrabold text-white tracking-tight">{tier.price}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        {feat.included ? (
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                            <CheckCircle className="h-3 w-3 text-indigo-400" />
                          </div>
                        ) : (
                          <div className="mt-0.5 h-4 w-4 shrink-0 flex items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                          </div>
                        )}
                        <span className={`text-sm font-sans ${feat.included ? 'text-slate-300' : 'text-slate-600'}`}>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => {
                    import('./ContactModal').then(({ openContactModal }) => openContactModal(tier.whatsappMessage));
                  }}
                  className={`block w-full text-center py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-xl ${
                    tier.highlight 
                      ? "bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-indigo-500/25" 
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {t('per.pricing.cta')}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
