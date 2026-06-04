import React, { useState, useEffect } from "react";
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
  Smartphone,
  Play,
  RefreshCw,
  Sliders,
  Database,
  Sparkles,
  HelpCircle,
  Activity
} from "lucide-react";

import { useLanguage } from "../i18n";

export default function PersonalAcademicDetail() {
  const { t, language } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [activeTab, setActiveTab ] = useState<"academic_stats" | "sme_budget" | "tidy_machine">("academic_stats");
  const [population, setPopulation] = useState<number>(1200);
  const [marginOfError, setMarginOfError] = useState<number>(5); // as percentage
  const [avgOrderVal, setAvgOrderVal] = useState<number>(150000); // rupiah
  const [dailySales, setDailySales] = useState<number>(12);
  const [progress, setProgress] = useState<number>(100);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const isId = language === "id";

  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsProcessing(false);
            clearInterval(interval);
            return 100;
          }
          return Math.min(100, prev + 8);
        });
      }, 60);
      return () => clearInterval(interval);
    }
  }, [isProcessing]);

  const handleTriggerSim = () => {
    setIsProcessing(true);
    setProgress(0);
  };

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

            <div className="lg:col-span-3 lg:-ml-12 lg:mr-auto relative flex flex-col items-center justify-center self-center w-[360px] max-w-full mt-6 lg:mt-0">
              
              {/* BUDGET / CONFIDENCE STATUS INDICATOR */}
              <div className="hidden md:flex absolute -top-8 -right-6 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <Calculator className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">{t('per.scale')}</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">
                    {activeTab === "academic_stats" ? `${100 - marginOfError}% Conf.` : activeTab === "sme_budget" ? "92% ROI Profit" : "100% Validated"}
                  </div>
                </div>
              </div>

              {/* INTEGRATION STATUS INDICATOR */}
              <div className="hidden md:flex absolute -bottom-7 -left-5 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <Users className="h-3.5 w-3.5 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-400 uppercase leading-none">{t('per.integration')}</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">
                      {isProcessing ? `${progress}% ${isId ? "Proses" : "Cleaned"}` : (isId ? "Bimbingan Ahli" : "Consultant Ready")}
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN INTERACTIVE SPREADSHEET AUTOMATION SIMULATOR */}
              <div className="w-full bg-slate-950/65 rounded-2xl border border-indigo-500/10 p-5 backdrop-blur-md shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[385px] hover:border-indigo-500/20 transition-all select-none">
                
                {/* Simulated Glass Reflection & Glow Indicator */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-indigo-400/40 via-violet-500/50 to-indigo-300/30" />
                <div className="absolute -inset-y-12 w-12 bg-white/5 blur-xl -skew-x-12 translate-x-[-150px] animate-[shimmer_8s_infinite] pointer-events-none" />

                {/* Card Title & Platform Switch */}
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/45">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-[9px] text-white font-sans font-black">
                        LITE
                      </div>
                      <div>
                        <h4 className="text-[10px] font-extrabold text-slate-100 tracking-wider uppercase leading-none">Research & SME Lab</h4>
                        <p className="text-[8px] text-indigo-400 font-mono mt-0.5 uppercase tracking-widest flex items-center gap-1">
                          <span className="inline-block h-1 w-1 rounded-full bg-indigo-400 animate-ping"></span>
                          {isProcessing ? (isId ? "Komputasi..." : "Calculating...") : (isId ? "Terbuka" : "Lab Interface")}
                        </p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleTriggerSim}
                      disabled={isProcessing}
                      className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 active:scale-95 transition-all text-[9.5px] font-bold flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:pointer-events-none font-sans whitespace-nowrap"
                    >
                      <Play className="h-2.5 w-2.5 text-indigo-400" />
                      {isId ? "Proses" : "Trigger"}
                    </button>
                  </div>

                  {/* LAB WORKSPACE SELECTOR TABS */}
                  <div className="mt-3.5 grid grid-cols-3 gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800/60 text-[9px] font-bold">
                    <button 
                      onClick={() => { setActiveTab("academic_stats"); handleTriggerSim(); }}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        activeTab === "academic_stats" 
                          ? "bg-slate-800 text-indigo-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Slovin (Stat)
                    </button>
                    <button 
                      onClick={() => { setActiveTab("sme_budget"); handleTriggerSim(); }}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        activeTab === "sme_budget" 
                          ? "bg-slate-800 text-indigo-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      SME Margin
                    </button>
                    <button 
                      onClick={() => { setActiveTab("tidy_machine"); handleTriggerSim(); }}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        activeTab === "tidy_machine" 
                          ? "bg-slate-800 text-indigo-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Tidy Machine
                    </button>
                  </div>
                </div>

                {/* VISUAL MONITOR DISPLAY */}
                <div className="relative h-28 bg-[rgba(1,5,15,0.92)] rounded-lg p-3 mt-3.5 border border-slate-850/80 overflow-hidden flex flex-col justify-start text-left">
                  {/* Grid background for cell layout */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.015)_1px,transparent_1px)] bg-[size:1.2rem_0.6rem] pointer-events-none" />
                  
                  {/* Progress Line Bar */}
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-300 transition-all duration-150 z-20" style={{ width: `${progress}%` }} />

                  {/* Simulated output visualization */}
                  <div className="font-mono text-[8px] leading-relaxed text-slate-300 space-y-1 relative z-10 select-all overflow-y-auto">
                    {activeTab === "academic_stats" && (
                      <>
                        <div className="text-slate-500">{"[Slovin Solver Output] Estimating population requirements:"}</div>
                        <div className="text-slate-300 font-bold">
                          {"N (Populasi) = " + population.toLocaleString() + " s.d. error (e) = " + (marginOfError / 100).toFixed(2)}
                        </div>
                        <div className="text-indigo-400/90">
                          {"Slovin: n = N / (1 + N * e²)"}
                        </div>
                        {progress === 100 ? (
                          <div className="text-emerald-400 font-bold text-[9px] mt-1 font-sans">
                            {"▶ Minimun Sample: " + Math.ceil(population / (1 + population * Math.pow(marginOfError / 100, 2))) + " Responden siswa/karyawan."}
                          </div>
                        ) : (
                          <div className="text-slate-400 animate-pulse text-[7.5px]">{"Solving statistical matrix formulas..."}</div>
                        )}
                      </>
                    )}

                    {activeTab === "sme_budget" && (
                      <>
                        <div className="text-slate-500">{"[UMKM Revenue Estimation - 30 Days]"}</div>
                        <div className="text-slate-300">
                          {"Keranjang: Rp " + avgOrderVal.toLocaleString('id-ID') + " | Orders/hari: " + dailySales}
                        </div>
                        <div className="text-indigo-300">
                          {"Omset Bulanan: Rp " + (avgOrderVal * dailySales * 30).toLocaleString('id-ID')}
                        </div>
                        {progress === 100 ? (
                          <div className="text-emerald-400 font-bold text-[9px] mt-1 font-sans">
                            {"✔ Est. Laba Bersih (35%): Rp " + Math.floor((avgOrderVal * dailySales * 30) * 0.35).toLocaleString('id-ID')}
                          </div>
                        ) : (
                          <div className="text-slate-400 text-[7.5px] animate-pulse">{"Projecting financial curves..."}</div>
                        )}
                      </>
                    )}

                    {activeTab === "tidy_machine" && (
                      <>
                        <div className="text-slate-500">{"[Tidy Spreadsheet Parser v1.4] Initialized..."}</div>
                        {progress > 15 && <div className="text-indigo-400">{"📥 reading skripsi_final_v2_new_dirty.csv..."}</div>}
                        {progress > 50 && <div className="text-slate-300">{"⚡ Imputing 28 null values | standardizing datetime..."}</div>}
                        {progress > 80 && <div className="text-violet-400">{"✔ Outliers normalized with winsorization limits..."}</div>}
                        {progress === 100 && (
                          <div className="text-emerald-400 font-bold">{"🎉 Clean Spreadsheet downloaded: SPSS/SmartPLS Ready!"}</div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* INTERACTIVE CONTROLS SWITCH BASED ON TAB */}
                <div className="mt-3.5 bg-slate-900/60 rounded-lg p-2.5 border border-slate-850/60 text-left">
                  {activeTab === "academic_stats" ? (
                    <>
                      <div className="flex items-center justify-between text-[8px] font-bold font-mono">
                        <span className="text-slate-400 uppercase tracking-widest">{isId ? "Toleransi Error (e)" : "Margin of Error"}</span>
                        <span className="text-indigo-400">{marginOfError}% Error</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="15" 
                        value={marginOfError} 
                        onChange={(e) => { setMarginOfError(Number(e.target.value)); handleTriggerSim(); }}
                        className="w-full h-1 mt-2 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                      />
                      <div className="flex justify-between text-[7px] font-mono text-slate-500 mt-1">
                        <span>1% Precision</span>
                        <span>5% Standard</span>
                        <span>15% Low Precision</span>
                      </div>
                    </>
                  ) : activeTab === "sme_budget" ? (
                    <>
                      <div className="flex items-center justify-between text-[8px] font-bold font-mono">
                        <span className="text-slate-400 uppercase tracking-widest">{isId ? "Volume Order / Hari" : "Daily Orders Volume"}</span>
                        <span className="text-indigo-400">{dailySales} Orders</span>
                      </div>
                      <input 
                        type="range" 
                        min="2" 
                        max="60" 
                        value={dailySales} 
                        onChange={(e) => { setDailySales(Number(e.target.value)); handleTriggerSim(); }}
                        className="w-full h-1 mt-2 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                      />
                      <div className="flex justify-between text-[7px] font-mono text-slate-500 mt-1">
                        <span>2 Orders</span>
                        <span>30 Optimized</span>
                        <span>60 SME Scale</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between text-[8px] font-bold font-mono">
                        <span className="text-slate-400 uppercase tracking-widest">{isId ? "Ukuran Populasi (N)" : "Population Size (N)"}</span>
                        <span className="text-indigo-400">{population} Individu</span>
                      </div>
                      <input 
                        type="range" 
                        min="100" 
                        max="5000" 
                        step="50"
                        value={population} 
                        onChange={(e) => { setPopulation(Number(e.target.value)); handleTriggerSim(); }}
                        className="w-full h-1 mt-2 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                      />
                      <div className="flex justify-between text-[7px] font-mono text-slate-500 mt-1">
                        <span>100 Small</span>
                        <span>1200 Normal</span>
                        <span>5000 Large</span>
                      </div>
                    </>
                  )}
                </div>

                {/* ACADEMIC/SME COST-BENEFIT METRIC GAUGES */}
                <div className="mt-3.5 space-y-2 text-left">
                  <div className="text-[8px] font-bold font-mono text-slate-500 tracking-wider uppercase">
                    {isId ? "Informasi Anggaran & Dukungan" : "Pricing Package & Support"}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-900/40 p-2 rounded border border-slate-850/40 text-left">
                      <span className="text-[7px] font-mono text-slate-500 leading-none block">STARTING PRICE</span>
                      <span className="text-[12px] font-mono font-bold text-indigo-400 tracking-tight mt-0.5 block">
                        Rp 250rb-an
                      </span>
                    </div>
                    <div className="bg-slate-900/40 p-2 rounded border border-slate-850/40 text-left">
                      <span className="text-[7px] font-mono text-slate-500 leading-none block">COMPLETION TIME</span>
                      <span className="text-[12px] font-mono font-bold tracking-tight mt-0.5 text-slate-100 block">
                        2 - 4 Hari
                      </span>
                    </div>
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="mt-4 pt-2.5 border-t border-slate-800/40 flex justify-between text-[8px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-1 w-1 bg-indigo-400 rounded-full animate-pulse"></span>
                    {isId ? "Cocok untuk Skripsi & UMKM" : "Academic & SME Perfect Tool"}
                  </span>
                  <span className="text-indigo-400 font-semibold uppercase tracking-wider">
                    {activeTab === "academic_stats" ? "Slovin Act" : activeTab === "sme_budget" ? "AOV Target" : "Tidied Ready"}
                  </span>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-800/60 flex flex-wrap gap-2.5 justify-start items-center">
            <span className="text-xs text-slate-400 font-mono font-semibold mr-1">{t('per.tools')}</span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-indigo-400 border border-indigo-500/20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/IBM_SPSS_Statistics_logo.png" alt="SPSS" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              SPSS/SmartPLS
            </span>
             <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-emerald-400 border border-emerald-500/20">
              <span className="flex items-center gap-1 shrink-0">
                <img src="https://img.icons8.com/?size=256&id=E8amV1059i73&format=png" alt="Google Sheets" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                <img src="https://img.icons8.com/?size=256&id=13654&format=png" alt="Excel" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              </span>
              Spreadsheets
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-violet-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-violet-400 border border-violet-500/20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Google_Looker_Studio_logo.svg" alt="Looker Studio" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
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
