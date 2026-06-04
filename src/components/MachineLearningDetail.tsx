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
  const { t, language } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [modelType, setModelType] = useState<"xgboost" | "randomforest" | "neural">("xgboost");
  const [threshold, setThreshold] = useState<number>(80);
  const isId = language === "id";

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

            <div className="lg:col-span-3 relative flex flex-col items-center justify-center self-center w-[360px] max-w-full">
              
              {/* ACCURACY INDICATOR */}
              <div className="hidden md:flex absolute -top-8 -right-6 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">{t('ml.accuracy')}</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">
                    {modelType === "xgboost" ? "96.8%" : modelType === "randomforest" ? "93.2%" : "98.1%"}
                  </div>
                </div>
              </div>

              {/* LATENCY INDICATOR */}
              <div className="hidden md:flex absolute -bottom-7 -left-5 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Cpu className="h-3.5 w-3.5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-400 uppercase leading-none">{t('ml.latency')}</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">
                      {modelType === "xgboost" ? "24ms" : modelType === "randomforest" ? "45ms" : "115ms"}
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN INTERACTIVE DECISION PANEL */}
              <div className="w-full bg-slate-950/65 rounded-2xl border border-emerald-500/10 p-5 backdrop-blur-md shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[385px] hover:border-emerald-500/20 transition-all select-none">
                
                {/* Simulated Glass Highlight Reflection */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-emerald-400/40 via-teal-500/50 to-emerald-300/30" />
                <div className="absolute -inset-y-12 w-12 bg-white/5 blur-xl -skew-x-12 translate-x-[-150px] animate-[shimmer_8s_infinite] pointer-events-none" />

                {/* Card Title & Interactive Model Switch Tabs */}
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/45">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[9px] text-slate-950 font-sans font-black">
                        AI
                      </div>
                      <div>
                        <h4 className="text-[10px] font-extrabold text-slate-100 tracking-wider uppercase leading-none">Decision Engine</h4>
                        <p className="text-[8px] text-emerald-400 font-mono mt-0.5 uppercase tracking-widest flex items-center gap-1">
                          <span className="inline-block h-1 w-1 rounded-full bg-emerald-400 animate-ping"></span>
                          {isId ? "Status: Aktif" : "Status: Active"}
                        </p>
                      </div>
                    </div>
                    
                    {/* Tiny stats */}
                    <span className="text-[8px] font-mono text-slate-500">
                      V: 2.4.0-PRO
                    </span>
                  </div>

                  {/* MODEL SELECTION TABS */}
                  <div className="mt-3.5 grid grid-cols-3 gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800/60 text-[9px] font-bold">
                    <button 
                      onClick={() => setModelType("xgboost")}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        modelType === "xgboost" 
                          ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/20" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      XGBoost
                    </button>
                    <button 
                      onClick={() => setModelType("randomforest")}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        modelType === "randomforest" 
                          ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/20" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      R-Forest
                    </button>
                    <button 
                      onClick={() => setModelType("neural")}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        modelType === "neural" 
                          ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/20" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      NeurNet
                    </button>
                  </div>
                </div>

                {/* GRAPH VISUALIZATION WITH SCANLINE ANIMATION */}
                <div className="relative h-24 bg-slate-950/85 rounded-lg p-2.5 mt-3 border border-slate-850/70 overflow-hidden flex flex-col justify-end">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:0.5rem_0.5rem] pointer-events-none" />
                  
                  {/* Scanning Laser Beam Line */}
                  <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent top-0 animate-[scan_3s_linear_infinite] z-20 pointer-events-none" />

                  {/* SVG graph changing dynamically */}
                  <svg className="w-full h-16 relative z-10" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {/* Baseline/Historical shadow of uncertainty */}
                    <path 
                      d="M 0 30 Q 15 25 35 22 T 65 18 T 100 12" 
                      fill="none" 
                      stroke="#1e293b" 
                      strokeWidth="2.5" 
                    />
                    
                    {/* Prediction boundary confidence shading */}
                    <path 
                      d={
                        modelType === "xgboost"
                          ? "M 0 28 Q 20 22 40 18 T 70 12 T 100 6 L 100 40 L 0 40 Z"
                          : modelType === "randomforest"
                          ? "M 0 29 M 0 29 L 20 26 L 40 22 L 60 17 L 80 15 L 100 9 L 100 40 L 0 40 Z"
                          : "M 0 32 T 30 25 T 60 14 T 100 4 L 100 40 L 0 40 Z"
                      }
                      fill="url(#gradient-confidence)" 
                      opacity="0.1"
                    />

                    {/* Historical path */}
                    <path 
                      d="M 0 28 Q 20 22 40 18 T 60 14" 
                      fill="none" 
                      stroke="#475569" 
                      strokeWidth="1.2" 
                      strokeDasharray="2 2" 
                    />
                    
                    {/* Predictive Curve Output */}
                    <path 
                      d={
                        modelType === "xgboost"
                          ? "M 40 18 Q 55 14 70 11 T 100 5"
                          : modelType === "randomforest"
                          ? "M 40 22 L 60 17 L 80 15 L 100 9"
                          : "M 40 18 T 60 14 Q 80 10 100 3"
                      } 
                      fill="none" 
                      stroke={modelType === "xgboost" ? "#10b981" : modelType === "randomforest" ? "#14b8a6" : "#38bdf8"} 
                      strokeWidth="2" 
                      className="transition-all duration-500"
                    />

                    {/* Node points */}
                    <circle cx="40" cy={modelType === "randomforest" ? 22 : 18} r="2" fill="#94a3b8" />
                    <circle 
                      cx="100" 
                      cy={modelType === "xgboost" ? "5" : modelType === "randomforest" ? "9" : "3"} 
                      r="2.5" 
                      fill={modelType === "xgboost" ? "#10b981" : modelType === "randomforest" ? "#14b8a6" : "#38bdf8"} 
                      className="animate-ping"
                    />
                    <circle 
                      cx="100" 
                      cy={modelType === "xgboost" ? "5" : modelType === "randomforest" ? "9" : "3"} 
                      r="1.5" 
                      fill="#ffffff" 
                    />

                    {/* SVG Gradients */}
                    <defs>
                      <linearGradient id="gradient-confidence" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Floating label inside graph */}
                  <span className="absolute bottom-1 right-2 text-[7px] font-mono text-emerald-400 bg-slate-950/80 px-1 rounded-sm border border-emerald-500/10">
                    Confidence Interval [95%]
                  </span>
                </div>

                {/* THRESHOLD SLIDER CONTROLLER */}
                <div className="mt-3 bg-slate-900/60 rounded-lg p-2.5 border border-slate-850/60">
                  <div className="flex items-center justify-between text-[8px] font-bold font-mono">
                    <span className="text-slate-400 uppercase tracking-widest">
                      {isId ? "Ambang Keyakinan" : "Confidence Threshold"}
                    </span>
                    <span className="text-emerald-400">
                      {threshold}%
                    </span>
                  </div>
                  
                  <input 
                    type="range" 
                    min="50" 
                    max="98" 
                    value={threshold} 
                    onChange={(e) => setThreshold(Number(e.target.value))}
                    className="w-full h-1 mt-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 [&::-webkit-slider-runnable-track]:bg-slate-850" 
                  />
                  
                  <div className="flex justify-between text-[7px] font-mono text-slate-500 mt-1">
                    <span>50% (Recall)</span>
                    <span>{isId ? "Optimum (F1-Score)" : "Optimum (F1-Score)"}</span>
                    <span>98% (Precision)</span>
                  </div>
                </div>

                {/* FEATURE IMPORTANCE PROGRESS BARS */}
                <div className="mt-3.5 space-y-2">
                  <div className="text-[8px] font-bold font-mono text-slate-500 tracking-wider uppercase">
                    {isId ? "Bobot Fitur Utama (Real-time weights)" : "Top Model Feature Importance"}
                  </div>
                  
                  <div className="space-y-1.5">
                    {/* Feature 1 */}
                    <div>
                      <div className="flex justify-between text-[8.5px] font-mono select-none">
                        <span className="text-slate-300">avg_transaction_delay_hr</span>
                        <span className="text-slate-400 font-bold">
                          {modelType === "xgboost" ? "42.5%" : modelType === "randomforest" ? "34.8%" : "51.2%"}
                        </span>
                      </div>
                      <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500" 
                          style={{ width: modelType === "xgboost" ? "42.5%" : modelType === "randomforest" ? "34.8%" : "51.2%" }}
                        />
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div>
                      <div className="flex justify-between text-[8.5px] font-mono select-none">
                        <span className="text-slate-300">customer_access_frequency</span>
                        <span className="text-slate-400 font-bold">
                          {modelType === "xgboost" ? "29.1%" : modelType === "randomforest" ? "41.6%" : "18.3%"}
                        </span>
                      </div>
                      <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-500" 
                          style={{ width: modelType === "xgboost" ? "29.1%" : modelType === "randomforest" ? "41.6%" : "18.3%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="mt-4 pt-2.5 border-t border-slate-800/40 flex justify-between text-[8px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-1 w-1 bg-teal-400 rounded-full"></span>
                    {isId ? "Dukungan Multivariat" : "Multivariate Support"}
                  </span>
                  <span className="text-emerald-400 font-semibold uppercase tracking-wider">
                    {modelType === "xgboost" ? "Best AUC" : modelType === "randomforest" ? "Fastest Fit" : "Max Precision"}
                  </span>
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

        {/* CAPABILITIES & METRICS BENTO IN-DEEP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-20 text-left">
          <div className="col-span-full rounded-3xl border border-slate-800/60 dark-glass-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                {isId ? "PRESTASI ANALITIK PREDIKTIF & ML" : "MACHINE LEARNING TECH STACK"}
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-sans text-slate-100">
                {isId ? "Ekosistem Tools Machine Learning Utama Kami:" : "Our Core Machine Learning Tools:"}
              </h3>
              
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: isId ? "Pemodelan Statistik & Klasifikasi Presisi Tinggi" : "High-Precision Statistical Modeling & Classification",
                    desc: isId ? "Memanfaatkan Scikit-Learn dan XGBoost untuk pelatihan model klasifikasi, regresi, pengelompokan (clustering), dan deteksi anomali ter-skala." : "Leveraging Scikit-Learn and XGBoost for scalable training of classification, regression, clustering, and anomaly detection models."
                  },
                  {
                    title: isId ? "Analisis & Manipulasi Data Menyeluruh (Data Engineering)" : "Comprehensive Data Analysis & Manipulation (Data Engineering)",
                    desc: isId ? "Pengolahan data mentah berukuran besar menggunakan Pandas dan NumPy untuk memastikan data prima sebelum masuk ke tahap pelatihan model." : "Raw data preprocessing and intensive manipulation using Pandas and NumPy to ensure pristine data pipelines before feed-in to model training."
                  }
                ].map((feat) => (
                  <div key={feat.title} className="flex gap-3 text-left">
                    <div className="mt-1 h-5 w-5 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-Learn" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Scikit-Learn
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Pandas
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                NumPy
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter Notebook" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Jupyter Notebook
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Streamlit_Logo_Logo_only.svg" alt="Streamlit" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Streamlit
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Python
              </span>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => {
              import('./ContactModal').then(({ openContactModal }) => openContactModal("Halo tim Worksense Analytics, saya ingin konsultasi mengenai implementasi layanan Predictive Analytics & Machine Learning. Boleh diskusi lebih lanjut?"));
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40 cursor-pointer"
          >
            {isId ? "Mulai Konsultasi Machine Learning" : "Start Free Machine Learning Consultation"}
          </button>
        </div>

      </div>
    </section>
  );
}
