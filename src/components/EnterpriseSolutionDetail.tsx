import React, { useState } from "react";
import { 
  Building2, 
  Crown, 
  Globe, 
  Workflow, 
  CheckCircle, 
  BadgeCheck,
  ServerCog,
  ShieldCheck,
  Blocks,
  Rocket,
  LineChart
} from "lucide-react";

import { useLanguage } from "../i18n";

export default function EnterpriseSolutionDetail() {
  const { t, language } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const isId = language === "id";

  const workflowSteps = [
    {
      num: "01",
      title: t('ent.wf.step1_title'),
      desc: t('ent.wf.step1_desc')
    },
    {
      num: "02",
      title: t('ent.wf.step2_title'),
      desc: t('ent.wf.step2_desc')
    },
    {
      num: "03",
      title: t('ent.wf.step3_title'),
      desc: t('ent.wf.step3_desc')
    },
    {
      num: "04",
      title: t('ent.wf.step4_title'),
      desc: t('ent.wf.step4_desc')
    }
  ];

  return (
    <section id="jasa-enterprise" className="bg-slate-900 py-16 md:py-24 pb-16 md:pb-20 relative border-t border-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(250,204,21,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,204,21,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col mb-16 relative">
          
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-yellow-400 border border-yellow-500/20 self-start mb-5">
            <Crown className="h-3.5 w-3.5 text-yellow-400 " /> {t('ent.badge')}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 text-left flex flex-col justify-center max-w-2xl">
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] text-left">
                {t('ent.title1')}
                <span className="block mt-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent pb-1">
                  {t('ent.title2')}
                </span>
              </h2>
              
              <p className="mt-4 text-xs sm:text-sm text-slate-300 font-bold font-sans tracking-wide leading-relaxed text-left">
                {t('ent.subtitle1')}<span className="text-yellow-400 font-extrabold">{t('ent.subtitle2')}</span>
              </p>

              <div className="mt-5 h-1 w-24 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.25)]" />
            </div>

            <div className="lg:col-span-3 lg:-ml-12 lg:mr-auto relative flex items-center justify-center self-center w-[360px] max-w-full">
              
              <div className="hidden md:flex absolute -top-8 -right-6 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <ShieldCheck className="h-3.5 w-3.5 text-yellow-400" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">{t('ent.scale')}</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">Enterprise Grade</div>
                </div>
              </div>

              <div className="hidden md:flex absolute -bottom-7 -left-5 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Blocks className="h-3.5 w-3.5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-450 uppercase leading-none">{t('ent.integration')}</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">Fully Integrated</div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-950/40 rounded-xl border border-slate-800/80 p-4.5 backdrop-blur-sm shadow-xl flex flex-col justify-between relative overflow-hidden h-[260px] hover:border-slate-700 transition-all select-none">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300" />
                
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/30">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-[10px] text-slate-950 font-sans font-bold">
                      <Globe className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-200 leading-none">Global Architecture</h4>
                      <p className="text-[9px] text-slate-500 font-mono mt-0.5">Data & AI Pipeline</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-32 bg-slate-950/70 rounded p-4 mt-4 border border-slate-850/60 overflow-hidden flex flex-col justify-center items-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:0.6rem_0.6rem] pointer-events-none" />
                  
                  {/* Mock Ecosystem SVG */}
                  <svg className="w-full h-full relative z-10 opacity-80" viewBox="0 0 100 40" preserveAspectRatio="xMidYMid meet">
                    {/* Database Icon/Node */}
                    <rect x="10" y="15" width="10" height="10" rx="2" fill="#fbbf24" opacity="0.9" />
                    <line x1="20" y1="20" x2="40" y2="10" stroke="#f59e0b" strokeWidth="1" opacity="0.6" strokeDasharray="2 1" />
                    <line x1="20" y1="20" x2="40" y2="30" stroke="#f59e0b" strokeWidth="1" opacity="0.6" strokeDasharray="2 1" />
                    
                    {/* Processing Nodes */}
                    <circle cx="45" cy="10" r="5" fill="#f59e0b" opacity="0.8" />
                    <circle cx="45" cy="30" r="5" fill="#f59e0b" opacity="0.8" />
                    
                    <line x1="50" y1="10" x2="70" y2="20" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
                    <line x1="50" y1="30" x2="70" y2="20" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
                    
                    {/* Final Output Node */}
                    <polygon points="75,15 85,15 85,25 75,25" fill="#fde68a" />
                    
                    {/* Signal Pulses */}
                    <circle cx="30" cy="15" r="1.5" fill="#fde68a" className="" />
                    <circle cx="60" cy="25" r="1.5" fill="#fde68a" className="" style={{ animationDelay: '0.4s' }} />
                  </svg>
                </div>
                
                <div className="mt-3 flex justify-between text-[9px] font-mono text-slate-500">
                  <span>Raw Data Sources</span>
                  <span className="text-yellow-400 font-semibold">AI Insights</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-800/60 flex flex-wrap gap-2.5 justify-start items-center">
            <span className="text-xs text-slate-400 font-mono font-semibold mr-1">{t('ent.tools')}</span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-yellow-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-yellow-400 border border-yellow-500/20">
              <span className="flex items-center gap-1 shrink-0">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="h-4.5 w-4.5 object-contain" referrerPolicy="no-referrer" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="GCP" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              </span>
              AWS / GCP / Azure
            </span>
             <span className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-orange-400 border border-orange-500/20">
              <span className="flex items-center gap-1 shrink-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" alt="Tableau" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              </span>
              BI Tools
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-amber-400 border border-amber-500/20">
              <span className="flex items-center gap-1 shrink-0">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              </span>
              AI Frameworks
            </span>
          </div>
        </div>

        {/* INTRO PROFILE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('ent.intro1_desc')}<strong>{t('ent.intro1_bold')}</strong>{t('ent.intro1_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-yellow-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-yellow-500 " />
              <span>{t('ent.intro1_tag')}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('ent.intro2_desc1')}<strong>{t('ent.intro2_bold1')}</strong>{t('ent.intro2_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-amber-400 font-mono font-bold">
              <BadgeCheck className="h-4 w-4" />
              <span>{t('ent.intro2_tag')}</span>
            </div>
          </div>
        </div>

        {/* SEGMENT SOLUTIONS */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white font-sans">
              {t('ent.segment_title')}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
              {t('ent.segment_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* UC 1 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-yellow-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400 border border-yellow-500/25">
                    {t('ent.usecase1.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <ServerCog className="h-3.5 w-3.5 text-yellow-400" /> {t('ent.usecase1.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('ent.usecase1.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('ent.usecase1.desc')}
                </p>
              </div>
            </div>

            {/* UC 2 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-amber-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-500/25">
                    {t('ent.usecase2.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Workflow className="h-3.5 w-3.5 text-amber-400" /> {t('ent.usecase2.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('ent.usecase2.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('ent.usecase2.desc')}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TOOLS */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-yellow-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-slate-950 transition-colors">
                <Building2 className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('ent.tools.title1')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('ent.tools.desc1')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-amber-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('ent.tools.title2')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('ent.tools.desc2')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-yellow-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-slate-950 transition-colors">
                <Crown className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('ent.tools.title3')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('ent.tools.desc3')}</p>
            </div>
          </div>
        </div>

        {/* WORKFLOW */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-bold text-white font-sans">{t('ent.wf.title')}</h4>
            <p className="mt-2 text-xs text-yellow-400 font-mono tracking-widest uppercase">{t('ent.wf.badge')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveWorkflowStep(idx)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  activeWorkflowStep === idx 
                    ? "bg-slate-800 border-yellow-500/40 shadow-lg shadow-yellow-500/5 translate-y-[-4px]" 
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-yellow-500/20 transition-colors">
                      {step.num}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${activeWorkflowStep === idx ? "bg-yellow-400" : "bg-slate-800"}`} />
                  </div>
                  <h5 className="font-bold text-slate-100 text-sm sm:text-base font-sans group-hover:text-yellow-400 transition-colors">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  {t('ent.wf.verified')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAPABILITIES & METRICS BENTO IN-DEEP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-20 text-left">
          <div className="col-span-full rounded-3xl border border-slate-800/60 dark-glass-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-yellow-400 uppercase font-bold px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                {isId ? "PRESTASI INFRASTRUKTUR ENTERPRISE" : "ENTERPRISE SOLUTION TECH STACK"}
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-sans text-slate-100">
                {isId ? "Ekosistem Tools Enterprise Solution Utama Kami:" : "Our Core Enterprise Solution Tools:"}
              </h3>
              
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: isId ? "Infrastruktur Cloud Skala Enterprise & Keamanan Tinggi" : "Enterprise-Grade Cloud Infrastructure & Security",
                    desc: isId ? "Membangun arsitektur data & aplikasi yang aman di Google Cloud Platform (GCP) dengan kontrol akses ketat, enkripsi end-to-end, dan pemantauan aktif." : "Building secure data & application architecture on Google Cloud Platform (GCP) with robust access controls, end-to-end encryption, and live monitoring."
                  },
                  {
                    title: isId ? "Virtualisasi Kontainer & Layanan Berlatensi Mikro" : "Container Virtualization & Micro-Latency Services",
                    desc: isId ? "Menggunakan Docker dan Kubernetes untuk memastikan aplikasi kustom serta pipeline machine learning dapat beroperasi secara stabil dengan ketersediaan tinggi 99.9%." : "Using Docker and Kubernetes to ensure custom applications and machine learning pipelines scale seamlessly with 99.9% high availability."
                  }
                ].map((feat) => (
                  <div key={feat.title} className="flex gap-3 text-left">
                    <div className="mt-1 h-5 w-5 rounded-md bg-yellow-500/10 text-yellow-400 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-slate-200">{feat.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools logos row with actual logos */}
            <div className="mt-8 pt-4 border-t border-slate-900 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-mono text-slate-500 justify-start">
              <span className="text-slate-350 font-bold">Standard Ecosystem:</span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Google Cloud Platform (GCP)
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Docker
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Kubernetes
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                PostgreSQL
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                React JSX
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Node.js
              </span>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => {
              import('./ContactModal').then(({ openContactModal }) => openContactModal("Halo tim Worksense Analytics, saya tertarik untuk mengetahui lebih detail tentang paket Enterprise All-in-One Data Ecosystem. Boleh jadwalkan konsultasi?"));
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-3.5 text-sm font-bold text-slate-900 shadow-lg shadow-yellow-500/25 transition-all hover:bg-yellow-400 hover:shadow-yellow-500/40 cursor-pointer"
          >
            {isId ? "Mulai Konsultasi Solusi Enterprise" : "Start Free Enterprise Solution Consultation"}
          </button>
        </div>

      </div>
    </section>
  );
}
