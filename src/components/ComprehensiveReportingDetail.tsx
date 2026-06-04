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
  const { t, language } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [slideType, setSlideType] = useState<"revenue" | "market" | "summary">("revenue");
  const [slideTheme, setSlideTheme] = useState<"rose" | "indigo" | "emerald">("rose");
  const [kpiFormat, setKpiFormat] = useState<"standard" | "dense">("standard");
  const isId = language === "id";

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

            <div className="lg:col-span-3 lg:-ml-12 lg:mr-auto relative flex flex-col items-center justify-center self-center w-[360px] max-w-full">
              
              {/* STATUS INDICATOR 1 */}
              <div className="hidden md:flex absolute -top-8 -right-6 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-rose-500/10 flex items-center justify-center">
                  <Target className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">{t('rep.clarity')}</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">
                    {slideTheme === "rose" ? "Rose Premium" : slideTheme === "indigo" ? "Sapphire Pro" : "Emerald Corporate"}
                  </div>
                </div>
              </div>

              {/* STATUS INDICATOR 2 */}
              <div className="hidden md:flex absolute -bottom-7 -left-5 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <FileText className="h-3.5 w-3.5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-450 uppercase leading-none">{t('rep.delivery')}</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">
                      {kpiFormat === "standard" ? "Executive 16:9" : "Condensed A4"}
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN INTERACTIVE PRESENTATION DECK SIMULATOR */}
              <div className="w-full bg-slate-950/65 rounded-2xl border border-rose-500/10 p-5 backdrop-blur-md shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[385px] hover:border-rose-500/20 transition-all select-none">
                
                {/* Simulated Glass Reflection & Glow Indicator */}
                <div className={`absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r ${
                  slideTheme === "rose" 
                    ? "from-rose-400/40 via-red-500/50 to-rose-300/30" 
                    : slideTheme === "indigo"
                    ? "from-indigo-400/40 via-blue-500/50 to-indigo-300/30"
                    : "from-emerald-400/40 via-teal-500/50 to-emerald-300/30"
                }`} />
                <div className="absolute -inset-y-12 w-12 bg-white/5 blur-xl -skew-x-12 translate-x-[-150px] animate-[shimmer_8s_infinite] pointer-events-none" />

                {/* Card Title, Navigation Panel */}
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/45">
                    <div className="flex items-center gap-2">
                      <div className={`h-5 w-5 rounded flex items-center justify-center text-[9px] text-slate-950 font-sans font-black ${
                        slideTheme === "rose" 
                          ? "bg-gradient-to-br from-rose-400 to-red-500" 
                          : slideTheme === "indigo"
                          ? "bg-gradient-to-br from-indigo-400 to-blue-500"
                          : "bg-gradient-to-br from-emerald-400 to-teal-500"
                      }`}>
                        PPT
                      </div>
                      <div>
                        <h4 className="text-[10px] font-extrabold text-slate-100 tracking-wider uppercase leading-none">C-Level Deck Builder</h4>
                        <p className="text-[8px] text-rose-400 font-mono mt-0.5 uppercase tracking-widest flex items-center gap-1">
                          <span className={`inline-block h-1 w-1 rounded-full animate-ping ${
                            slideTheme === "rose" ? "bg-rose-400" : slideTheme === "indigo" ? "bg-indigo-400" : "bg-emerald-400"
                          }`}></span>
                          {isId ? "Status: Siap Ekspor" : "Status: Export Ready"}
                        </p>
                      </div>
                    </div>
                    
                    <span className="text-[8px] font-mono text-slate-500">
                      SYSTEM V.1.2
                    </span>
                  </div>

                  {/* TAB 1: SLIDE SELECTION */}
                  <div className="mt-3 grid grid-cols-3 gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800/60 text-[9px] font-bold">
                    <button 
                      onClick={() => setSlideType("revenue")}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        slideType === "revenue" 
                          ? "bg-slate-800/90 text-rose-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {isId ? "Pendapatan" : "Revenue"}
                    </button>
                    <button 
                      onClick={() => setSlideType("market")}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        slideType === "market" 
                          ? "bg-slate-800/90 text-rose-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {isId ? "Kompetitor" : "Competitor"}
                    </button>
                    <button 
                      onClick={() => setSlideType("summary")}
                      className={`py-1 px-1 rounded transition-all text-center cursor-pointer ${
                        slideType === "summary" 
                          ? "bg-slate-800/90 text-rose-400 border border-slate-700/60" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {isId ? "Ringkasan" : "Summary"}
                    </button>
                  </div>
                </div>

                {/* THE PRESENTATION CANVAS DISPLAY (PREVIEW) */}
                <div className="relative h-32 bg-slate-950/85 rounded-lg p-2.5 mt-3 border border-slate-850/70 overflow-hidden flex flex-col justify-center items-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:0.5rem_0.5rem] pointer-events-none" />
                  
                  {/* Dynamic Slide Frame */}
                  <div className="relative w-full h-full border border-slate-800 flex flex-col p-2 bg-slate-900 shadow-inner rounded overflow-hidden">
                    
                    {/* Header bar on slide */}
                    <div className="flex justify-between items-center mb-1.5 pb-1 border-b border-slate-800/50">
                      <div className="flex items-center gap-1">
                        <div className={`h-1.5 w-1.5 rounded-full ${
                          slideTheme === "rose" ? "bg-rose-500" : slideTheme === "indigo" ? "bg-indigo-500" : "bg-emerald-500"
                        }`} />
                        <span className="text-[7.5px] font-bold text-slate-200 tracking-wide">
                          {slideType === "revenue" 
                            ? (isId ? "Q2 Financial Overview" : "Q2 Financial Overview") 
                            : slideType === "market" 
                            ? (isId ? "Competitive Matrix Analysis" : "Competitive Matrix Analysis") 
                            : (isId ? "Executive Recommendations" : "Executive Recommendations")}
                        </span>
                      </div>
                      <span className="text-[6px] font-mono text-slate-500">Page {slideType === "revenue" ? "1" : slideType === "market" ? "2" : "3"}</span>
                    </div>

                    {/* Slide Content Layout based on slideType */}
                    {slideType === "revenue" && (
                      <div className="flex-1 flex gap-2.5 mt-1">
                        <div className="w-2/5 flex flex-col justify-center gap-1">
                          <span className="text-[7px] text-slate-400 font-mono">Gross Revenue</span>
                          <span className={`text-[12px] font-black tracking-tight ${
                            slideTheme === "rose" ? "text-rose-400" : slideTheme === "indigo" ? "text-indigo-400" : "text-emerald-400"
                          }`}>
                            +142.5% YoY
                          </span>
                          <span className="text-[5.5px] text-slate-500 leading-none">Net EBITDA: 34.2%</span>
                        </div>
                        {/* Interactive SVG Bar chart inside slide */}
                        <div className="flex-1 bg-slate-950/60 rounded border border-slate-800/60 p-1 flex items-end justify-around relative">
                          <div className={`w-3 rounded-t-sm transition-all duration-500 ${
                            slideTheme === "rose" ? "bg-rose-500/40" : slideTheme === "indigo" ? "bg-indigo-500/40" : "bg-emerald-500/40"
                          }`} style={{ height: kpiFormat === "standard" ? "35%" : "55%" }}></div>
                          <div className={`w-3 rounded-t-sm transition-all duration-500 ${
                            slideTheme === "rose" ? "bg-rose-500/60" : slideTheme === "indigo" ? "bg-indigo-500/60" : "bg-emerald-500/60"
                          }`} style={{ height: kpiFormat === "standard" ? "60%" : "75%" }}></div>
                          <div className={`w-3 rounded-t-sm transition-all duration-500 ${
                            slideTheme === "rose" ? "bg-rose-500 font-semibold" : slideTheme === "indigo" ? "bg-indigo-500" : "bg-emerald-500"
                          }`} style={{ height: kpiFormat === "standard" ? "85%" : "95%" }}></div>
                        </div>
                      </div>
                    )}

                    {slideType === "market" && (
                      <div className="flex-1 flex flex-col justify-between mt-1">
                        <p className="text-[6.5px] text-slate-400 leading-relaxed">
                          {isId 
                            ? "Worksense Analytics memimpin di efisiensi pengolahan data multivariat dibanding 3 kompetitor utama."
                            : "Worksense Analytics outperforms 3 core marketplace competitors on speed & delivery."}
                        </p>
                        <div className="grid grid-cols-2 gap-2 mt-1 flex-1">
                          <div className="bg-slate-950/50 p-1 rounded border border-slate-800/40 flex flex-col justify-center">
                            <span className="text-[5px] text-slate-500 uppercase tracking-wider font-mono">Market Share</span>
                            <span className={`text-[8.5px] font-bold ${
                              slideTheme === "rose" ? "text-rose-400" : slideTheme === "indigo" ? "text-indigo-400" : "text-emerald-400"
                            }`}>48.6% Dominant</span>
                          </div>
                          <div className="bg-slate-950/50 p-1 rounded border border-slate-800/40 flex flex-col justify-center">
                            <span className="text-[5px] text-slate-500 uppercase tracking-wider font-mono">Delivery Rate</span>
                            <span className="text-[8.5px] text-slate-200 font-bold">1.8 Days avg</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {slideType === "summary" && (
                      <div className="flex-1 flex flex-col justify-center gap-1 mt-1">
                        <div className="flex items-center gap-1.5">
                          <span className={`h-1 w-1 rounded-full ${
                            slideTheme === "rose" ? "bg-rose-500" : slideTheme === "indigo" ? "bg-indigo-500" : "bg-emerald-500"
                          }`} />
                          <p className="text-[6.5px] text-slate-300">
                             {isId ? "Otomatisasi Laporan memangkas 12 jam kerja mingguan C-Level." : "Reporting automation saves 12 hours of weekly executive workload."}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className={`h-1 w-1 rounded-full ${
                            slideTheme === "rose" ? "bg-rose-500" : slideTheme === "indigo" ? "bg-indigo-500" : "bg-emerald-500"
                          }`} />
                          <p className="text-[6.5px] text-slate-300">
                             {isId ? "Format Visual Terstandarisasi meningkatkan keterbacaan data." : "Standardized visual formats boost presentation readability."}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className={`h-1 w-1 rounded-full ${
                            slideTheme === "rose" ? "bg-rose-500" : slideTheme === "indigo" ? "bg-indigo-500" : "bg-emerald-500"
                          }`} />
                          <p className="text-[6.5px] text-slate-300">
                             {isId ? "Keamanan Data 100% aman berkat arsitektur Google Cloud murni." : "100% secure data governance using native Google Cloud architecture."}
                          </p>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* TAB 2: THEME SELECTOR & FORMAT TOGGLE */}
                <div className="mt-3.5 grid grid-cols-2 gap-3">
                  {/* Theme Buttons */}
                  <div className="bg-slate-900/60 rounded-lg p-2 border border-slate-850/60">
                    <div className="text-[8px] font-bold font-mono text-slate-500 uppercase tracking-widest mb-1.5">
                      {isId ? "Warna Laporan" : "Report Theme"}
                    </div>
                    <div className="flex gap-1.5">
                      <button 
                        onClick={() => setSlideTheme("rose")}
                        className={`h-4.5 w-4.5 rounded-full bg-rose-500 cursor-pointer transition-all ${
                          slideTheme === "rose" ? "ring-2 ring-white scale-110" : "opacity-60 hover:opacity-100"
                        }`}
                        title="Rose Premium"
                      />
                      <button 
                        onClick={() => setSlideTheme("indigo")}
                        className={`h-4.5 w-4.5 rounded-full bg-indigo-500 cursor-pointer transition-all ${
                          slideTheme === "indigo" ? "ring-2 ring-white scale-110" : "opacity-60 hover:opacity-100"
                        }`}
                        title="Indigo Sky"
                      />
                      <button 
                        onClick={() => setSlideTheme("emerald")}
                        className={`h-4.5 w-4.5 rounded-full bg-emerald-500 cursor-pointer transition-all ${
                          slideTheme === "emerald" ? "ring-2 ring-white scale-110" : "opacity-60 hover:opacity-100"
                        }`}
                        title="Emerald Corporate"
                      />
                    </div>
                  </div>

                  {/* Format Toggle */}
                  <div className="bg-slate-900/60 rounded-lg p-2 border border-slate-850/60 flex flex-col justify-between">
                    <div className="text-[8px] font-bold font-mono text-slate-500 uppercase tracking-widest">
                      {isId ? "Skala Kepadatan" : "Data Density"}
                    </div>
                    <div className="flex gap-1 bg-slate-950 p-0.5 rounded text-[7.5px] font-mono leading-none mt-1">
                      <button 
                        onClick={() => setKpiFormat("standard")}
                        className={`flex-1 py-1 px-1 rounded transition-all cursor-pointer text-center ${
                          kpiFormat === "standard" ? "bg-slate-800 text-rose-400" : "text-slate-500"
                        }`}
                      >
                        {isId ? "Fokus" : "Clean"}
                      </button>
                      <button 
                        onClick={() => setKpiFormat("dense")}
                        className={`flex-1 py-1 px-1 rounded transition-all cursor-pointer text-center ${
                          kpiFormat === "dense" ? "bg-slate-800 text-rose-400" : "text-slate-500"
                        }`}
                      >
                        {isId ? "Detail" : "Dense"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="mt-4 pt-2.5 border-t border-slate-800/40 flex justify-between text-[8px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className={`inline-block h-1 w-1 rounded-full ${
                      slideTheme === "rose" ? "bg-rose-400" : slideTheme === "indigo" ? "bg-indigo-400" : "bg-emerald-400"
                    }`}></span>
                    {isId ? "Dek Interaktif Berhasil Muat" : "Interactive Deck Fully Loaded"}
                  </span>
                  <span className="text-rose-400 font-semibold uppercase tracking-wider">
                    {slideType === "revenue" ? "EBITDA Active" : slideType === "market" ? "Leader View" : "Direct Export"}
                  </span>
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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
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

        {/* CAPABILITIES & METRICS BENTO IN-DEEP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-20 text-left">
          <div className="col-span-full rounded-3xl border border-slate-800/60 dark-glass-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-rose-400 uppercase font-bold px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20">
                {isId ? "PRESTASI PELAPORAN KOMPREHENSIF" : "COMPREHENSIVE REPORTING TECH STACK"}
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-sans text-slate-100">
                {isId ? "Ekosistem Tools Comprehensive Reporting Utama Kami:" : "Our Core Comprehensive Reporting Tools:"}
              </h3>
              
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: isId ? "Desain Pitch Deck & Presentasi Eksekutif Profesional" : "Professional Pitch Deck & Executive Presentation Design",
                    desc: isId ? "Merancang template PPT kustom yang tajam, didukung visualisasi data, untuk presentasi di tingkat direksi (C-Level) atau kebutuhan investor pitching." : "Designing crisp, data-backed PPT decks custom-tailored for C-Suite presentations or investment pitching rounds."
                  },
                  {
                    title: isId ? "Otomatisasi Dokumen Laporan Skala Besar (HTML, PDF, Excel)" : "Large-Scale Automated Document Report Pipeline (HTML, PDF, Excel)",
                    desc: isId ? "Integrasi skrip Python dengan LaTeX dan ReportLab untuk menyusun dokumen laporan analitik bulanan yang estetik, konsisten, dan siap cetak sekali klik." : "Integrating Python scripts with LaTeX and ReportLab templates to compile monthly aesthetic, print-ready analytical reports in a single click."
                  }
                ].map((feat) => (
                  <div key={feat.title} className="flex gap-3 text-left">
                    <div className="mt-1 h-5 w-5 rounded-md bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0">
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg" alt="PowerPoint" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Microsoft PowerPoint
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="Excel" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Microsoft Excel Office
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" alt="LaTeX" className="h-3.5 w-[32px] object-contain" referrerPolicy="no-referrer" />
                LaTeX
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Python (ReportLab)
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt="Markdown" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Markdown Engine
              </span>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => {
              import('./ContactModal').then(({ openContactModal }) => openContactModal("Halo tim Worksense Analytics, saya tertarik dengan layanan pembuatan Pitch Deck Eksekutif dan Comprehensive Reporting. Boleh diskusi lebih lanjut?"));
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-500/25 transition-all hover:bg-rose-400 hover:shadow-rose-500/40 cursor-pointer"
          >
            {isId ? "Mulai Konsultasi Pelaporan Komprehensif" : "Start Free Comprehensive Reporting Consultation"}
          </button>
        </div>

      </div>
    </section>
  );
}
