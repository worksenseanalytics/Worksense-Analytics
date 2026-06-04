import React, { useState, useEffect } from "react";
import { 
  FileSpreadsheet, 
  Code, 
  TableProperties, 
  Settings, 
  CheckCircle, 
  Zap,
  Timer,
  Workflow,
  Calculator,
  Laptop,
  Play,
  RefreshCw,
  Flame,
  Database
} from "lucide-react";

import { useLanguage } from "../i18n";

export default function ExcelAutomationDetail() {
  const { t, language } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [automationType, setAutomationType] = useState<"vba_macro" | "apps_script" | "api_sync">("vba_macro");
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(50);
  const [runProgress, setRunProgress] = useState<number>(100);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const isId = language === "id";

  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(() => {
        setRunProgress((prev) => {
          if (prev >= 100) {
            setIsProcessing(false);
            clearInterval(interval);
            return 100;
          }
          const stepSize = Math.max(3, Math.floor(speedMultiplier / 4));
          return Math.min(100, prev + stepSize);
        });
      }, 70);
      return () => clearInterval(interval);
    }
  }, [isProcessing, speedMultiplier]);

  const handleTriggerSimulation = () => {
    setIsProcessing(true);
    setRunProgress(0);
  };

  const workflowSteps = [
    {
      num: "01",
      title: t('ex.wf.step1_title'),
      desc: t('ex.wf.step1_desc')
    },
    {
      num: "02",
      title: t('ex.wf.step2_title'),
      desc: t('ex.wf.step2_desc')
    },
    {
      num: "03",
      title: t('ex.wf.step3_title'),
      desc: t('ex.wf.step3_desc')
    },
    {
      num: "04",
      title: t('ex.wf.step4_title'),
      desc: t('ex.wf.step4_desc')
    }
  ];

  return (
    <section id="jasa-otomatisasi-excel" className="bg-slate-900 py-16 md:py-24 pb-16 md:pb-20 relative border-t border-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col mb-16 relative">
          
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-amber-400 border border-amber-500/20 self-start mb-5">
            <Zap className="h-3.5 w-3.5 text-amber-400 " /> {t('ex.badge')}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 text-left flex flex-col justify-center max-w-2xl">
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] text-left">
                {t('ex.title1')}
                <span className="block mt-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent pb-1">
                  {t('ex.title2')}
                </span>
              </h2>
              
              <p className="mt-4 text-xs sm:text-sm text-slate-300 font-bold font-sans tracking-wide leading-relaxed text-left">
                {t('ex.subtitle1')}<span className="text-amber-400 font-extrabold">{t('ex.subtitle2')}</span>
              </p>

              <div className="mt-5 h-1 w-24 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.25)]" />
            </div>

            <div className="lg:col-span-3 relative flex flex-col items-center justify-center self-center w-[360px] max-w-full">
              
              {/* STATUS INDICATOR 1 */}
              <div className="hidden md:flex absolute -top-8 -right-6 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Calculator className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">{t('ex.efficiency')}</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5 font-bold">
                    {speedMultiplier >= 80 ? "100x Booster" : speedMultiplier >= 45 ? "50x Optimized" : "10x Standard"}
                  </div>
                </div>
              </div>

              {/* STATUS INDICATOR 2 */}
              <div className="hidden md:flex absolute -bottom-7 -left-5 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <Timer className="h-3.5 w-3.5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-400 uppercase leading-none">{t('ex.speed')}</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">
                      {isProcessing ? `${runProgress}% Run` : (isId ? "Selesai" : "Completed")}
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN INTERACTIVE SPREADSHEET AUTOMATION SIMULATOR */}
              <div className="w-full bg-slate-950/65 rounded-2xl border border-amber-500/10 p-5 backdrop-blur-md shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[385px] hover:border-amber-500/20 transition-all select-none">
                
                {/* Simulated Glass Reflection & Glow Indicator */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-amber-400/40 via-orange-500/50 to-amber-300/30" />
                <div className="absolute -inset-y-12 w-12 bg-white/5 blur-xl -skew-x-12 translate-x-[-150px] animate-[shimmer_8s_infinite] pointer-events-none" />

                {/* Card Title & Platform Switch */}
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/45">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[9px] text-slate-950 font-sans font-black">
                        XLS
                      </div>
                      <div>
                        <h4 className="text-[10px] font-extrabold text-slate-100 tracking-wider uppercase leading-none">Macro Automation</h4>
                        <p className="text-[8px] text-amber-400 font-mono mt-0.5 uppercase tracking-widest flex items-center gap-1">
                          <span className="inline-block h-1 w-1 rounded-full bg-amber-400 animate-ping"></span>
                          {isProcessing ? (isId ? "Proses..." : "Running...") : (isId ? "Mesin Siap" : "Engine Idle")}
                        </p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleTriggerSimulation}
                      disabled={isProcessing}
                      className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500/40 active:scale-95 transition-all text-[9.5px] font-bold flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:pointer-events-none font-sans"
                    >
                      <Play className="h-2.5 w-2.5 text-amber-400" />
                      {isId ? "Jalankan" : "Trigger"}
                    </button>
                  </div>

                  {/* AUTOMATION TYPE SELECTOR TABS */}
                  <div className="mt-3.5 grid grid-cols-3 gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800/60 text-[9px] font-bold">
                    <button 
                      onClick={() => { setAutomationType("vba_macro"); handleTriggerSimulation(); }}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        automationType === "vba_macro" 
                          ? "bg-slate-800 text-amber-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      VBA / Macro
                    </button>
                    <button 
                      onClick={() => { setAutomationType("apps_script"); handleTriggerSimulation(); }}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        automationType === "apps_script" 
                          ? "bg-slate-800 text-amber-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Apps Script
                    </button>
                    <button 
                      onClick={() => { setAutomationType("api_sync"); handleTriggerSimulation(); }}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        automationType === "api_sync" 
                          ? "bg-slate-800 text-amber-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      API Sync
                    </button>
                  </div>
                </div>

                {/* SPREADSHEET LOG CONSOLE WINDOW */}
                <div className="relative h-28 bg-[rgba(1,5,15,0.92)] rounded-lg p-3 mt-3.5 border border-slate-850/80 overflow-hidden flex flex-col justify-start text-left">
                  {/* Grid background to simulate cell rows */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.015)_1px,transparent_1px)] bg-[size:1.2rem_0.6rem] pointer-events-none" />
                  
                  {/* Progress Line Bar */}
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-300 transition-all duration-150 z-20" style={{ width: `${runProgress}%` }} />

                  {/* Simulated Output logs based on Selected Tab */}
                  <div className="font-mono text-[8px] leading-relaxed text-slate-300 space-y-1 relative z-10 select-all overflow-y-auto">
                    {automationType === "vba_macro" && (
                      <>
                        <div className="text-slate-500">{"[02:14] Initializing Macro consolidation..."}</div>
                        {runProgress > 15 && <div className="text-amber-450 text-amber-400">{"For Each ws In ActiveWorkbook.Sheets"}</div>}
                        {runProgress > 45 && <div className="text-slate-300">{"✔ Merged sheet Jan_Report [" + Math.min(250, Math.floor(runProgress * 2.5)) + " rows]"}</div>}
                        {runProgress > 75 && <div className="text-slate-300">{"✔ Merged sheet Feb_Report [" + Math.min(210, Math.floor(runProgress * 2.1)) + " rows]"}</div>}
                        {runProgress === 100 && <div className="text-emerald-400 font-bold">{"▶ Compile complete! Total: 460 consolidated rows."}</div>}
                      </>
                    )}

                    {automationType === "apps_script" && (
                      <>
                        <div className="text-slate-500">{"[GAS Cloud Event Triggered]"}</div>
                        {runProgress > 20 && <div className="text-orange-400">{"const doc = DocumentApp.create('Invoice_PDF');"}</div>}
                        {runProgress > 50 && <div className="text-slate-300">{"⚡ AppsScript: Export to PDF success."}</div>}
                        {runProgress > 80 && <div className="text-cyan-400">{"✉ Sending customized PDF via GmailApp..."}</div>}
                        {runProgress === 100 && <div className="text-emerald-400 font-bold">{"✔ Script Terminated: 0 warnings, 0 mistakes."}</div>}
                      </>
                    )}

                    {automationType === "api_sync" && (
                      <>
                        <div className="text-slate-500">{"[API Webhook Hooked] Fetching external endpoints..."}</div>
                        {runProgress > 25 && <div className="text-yellow-400">{"GET https://api.crm.worksense/v2/deals"}</div>}
                        {runProgress > 60 && <div className="text-slate-300">{"⚡ Parsing response objects -> formatting columns"}</div>}
                        {runProgress === 100 ? (
                          <div className="text-emerald-400 font-bold font-sans">{"✔ Sync completed successfully with Shopify database!"}</div>
                        ) : runProgress > 85 ? (
                          <div className="text-slate-400">{"Updating Spreadsheet cell range A2:G140..."}</div>
                        ) : null}
                      </>
                    )}
                  </div>
                </div>

                {/* BOOSTER SPEED SLIDER */}
                <div className="mt-3.5 bg-slate-900/60 rounded-lg p-2.5 border border-slate-850/60 text-left">
                  <div className="flex items-center justify-between text-[8px] font-bold font-mono">
                    <span className="text-slate-400 uppercase tracking-widest">
                      {isId ? "Booster Kecepatan" : "Execution Speed"}
                    </span>
                    <span className="text-amber-400">
                      {speedMultiplier}x Turbo
                    </span>
                  </div>
                  
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={speedMultiplier} 
                    onChange={(e) => setSpeedMultiplier(Number(e.target.value))}
                    className="w-full h-1 mt-2 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-amber-500 [&::-webkit-slider-runnable-track]:bg-slate-850" 
                  />
                  
                  <div className="flex justify-between text-[7px] font-mono text-slate-500 mt-1">
                    <span>10x Normal</span>
                    <span>50x (Optimized)</span>
                    <span>100x Real-time Execution</span>
                  </div>
                </div>

                {/* SPREADSHEET AUTOMATION METRIC GAUGES */}
                <div className="mt-3.5 space-y-2 text-left">
                  <div className="text-[8px] font-bold font-mono text-slate-500 tracking-wider uppercase">
                    {isId ? "Metrik Efisiensi Operasional" : "In-depth Efficiency Metrics"}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-900/40 p-2 rounded border border-slate-850/40 text-left">
                      <span className="text-[7px] font-mono text-slate-500 leading-none block">TIME SAVED</span>
                      <span className="text-[12px] font-mono font-bold text-slate-100 tracking-tight mt-0.5 block">
                        {speedMultiplier >= 80 ? "35 hrs/wk" : speedMultiplier >= 45 ? "18.5 hrs/wk" : "4.2 hrs/wk"}
                      </span>
                    </div>
                    <div className="bg-slate-900/40 p-2 rounded border border-slate-850/40 text-left">
                      <span className="text-[7px] font-mono text-slate-500 leading-none block">ERROR MARGIN</span>
                      <span className="text-[12px] font-mono font-bold tracking-tight mt-0.5 text-emerald-400 block">
                        0.00% Zero
                      </span>
                    </div>
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="mt-4 pt-2.5 border-t border-slate-800/40 flex justify-between text-[8px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-1 w-1 bg-yellow-400 rounded-full animate-pulse"></span>
                    {isId ? "Pemuatan Terintegrasi Penuh" : "Automation Stack Active"}
                  </span>
                  <span className="text-amber-400 font-semibold uppercase tracking-wider">
                    {automationType === "vba_macro" ? "VBA Active" : automationType === "apps_script" ? "GAS Sandbox" : "REST Sync"}
                  </span>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-800/60 flex flex-wrap gap-2.5 justify-start items-center">
            <span className="text-xs text-slate-400 font-mono font-semibold mr-1">{t('ex.tools')}</span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-green-400 border border-green-500/20">
              <img src="https://img.icons8.com/?size=256&id=13654&format=png" alt="Excel" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Excel / VBA
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-green-400 border border-green-500/20">
              <img src="https://img.icons8.com/?size=256&id=E8amV1059i73&format=png" alt="Sheets" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Google Sheets
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-blue-400 border border-blue-500/20">
              <img src="https://img.icons8.com/?size=256&id=13674&format=png" alt="Word" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Word / PDF
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-amber-400 border border-amber-500/20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg" alt="Apps Script" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
              Apps Script
            </span>
          </div>
        </div>

        {/* INTRO PROFILE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('ex.intro1_desc')}<strong>{t('ex.intro1_bold')}</strong>{t('ex.intro1_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-amber-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-amber-500 " />
              <span>{t('ex.intro1_tag')}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-600 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('ex.intro2_desc1')}<strong>{t('ex.intro2_bold1')}</strong>{t('ex.intro2_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-orange-400 font-mono font-bold">
              <CheckCircle className="h-4 w-4" />
              <span>{t('ex.intro2_tag')}</span>
            </div>
          </div>
        </div>

        {/* SEGMENT SOLUTIONS */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white font-sans">
              {t('ex.segment_title')}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
              {t('ex.segment_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* UC 1 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-orange-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400 border border-orange-500/25">
                    {t('ex.usecase1.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Workflow className="h-3.5 w-3.5 text-orange-400" /> {t('ex.usecase1.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('ex.usecase1.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('ex.usecase1.desc')}
                </p>
              </div>
            </div>

            {/* UC 2 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-amber-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-500/25">
                    {t('ex.usecase2.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Settings className="h-3.5 w-3.5 text-amber-400" /> {t('ex.usecase2.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('ex.usecase2.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('ex.usecase2.desc')}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TOOLS */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-amber-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Code className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('ex.tools.title1')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('ex.tools.desc1')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-amber-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Laptop className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('ex.tools.title2')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('ex.tools.desc2')}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-amber-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <TableProperties className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">{t('ex.tools.title3')}</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">{t('ex.tools.desc3')}</p>
            </div>
          </div>
        </div>

        {/* WORKFLOW */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-bold text-white font-sans">{t('ex.wf.title')}</h4>
            <p className="mt-2 text-xs text-amber-400 font-mono tracking-widest uppercase">{t('ex.wf.badge')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveWorkflowStep(idx)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  activeWorkflowStep === idx 
                    ? "bg-slate-800 border-amber-500/40 shadow-lg shadow-amber-500/5 translate-y-[-4px]" 
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-amber-500/20 transition-colors">
                      {step.num}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${activeWorkflowStep === idx ? "bg-amber-400" : "bg-slate-800"}`} />
                  </div>
                  <h5 className="font-bold text-slate-100 text-sm sm:text-base font-sans group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  {t('ex.wf.verified')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAPABILITIES & METRICS BENTO IN-DEEP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-20 text-left">
          <div className="col-span-full rounded-3xl border border-slate-800/60 dark-glass-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-amber-400 uppercase font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                {isId ? "PRESTASI OTOMATISASI EXCEL & SHEETS" : "SPREADSHEET AUTOMATION TECH STACK"}
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-sans text-slate-100">
                {isId ? "Ekosistem Tools Excel & Sheets Automation Utama Kami:" : "Our Core Excel & Sheets Automation Tools:"}
              </h3>
              
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: isId ? "Otomatisasi Tanpa Batas dengan Google Apps Script (GAS)" : "Limitless Automation with Google Apps Script (GAS)",
                    desc: isId ? "Mengintegrasikan Google Sheets dengan berbagai API eksternal, pengiriman email otomatis dari Gmail, sinkronisasi Google Forms, hingga pembuatan dokumen PDF otomatis secara instan." : "Integrating Google Sheets with external APIs, sending automated emails via Gmail, synchronizing Google Forms, and generating dynamic PDF documents instantly."
                  },
                  {
                    title: isId ? "VBA & Macro Berkecepatan Tinggi untuk Microsoft Excel" : "High-Performance VBA & Macro for Microsoft Excel",
                    desc: isId ? "Otomatisasi pengolahan data offline skala besar, pembuatan dashboard interaktif, ekspor-impor text file rumit, dan optimalisasi rumus perhitungan kompleks sekali klik." : "Automating large-scale offline data processing, generating interactive dashboards, exporting/importing custom text files, and optimizing complex calculations in a single click."
                  }
                ].map((feat) => (
                  <div key={feat.title} className="flex gap-3 text-left">
                    <div className="mt-1 h-5 w-5 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="Excel" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Microsoft Excel Office
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google Apps Script" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Google Apps Script (GAS)
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                TypeScript
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="NodeJS" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Node.js
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python/Pandas" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Python (Pandas)
              </span>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => {
              import('./ContactModal').then(({ openContactModal }) => openContactModal("Halo tim Worksense Analytics, saya butuh bantuan terkait otomatisasi laporan menggunakan Excel VBA & Macro. Boleh diskusi lebih lanjut untuk workflow perusahaan saya?"));
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:shadow-amber-500/40 cursor-pointer"
          >
            {isId ? "Mulai Konsultasi Otomatisasi Excel & Sheets" : "Start Free Excel & Sheets Automation Consultation"}
          </button>
        </div>

      </div>
    </section>
  );
}
