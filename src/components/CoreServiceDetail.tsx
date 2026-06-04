/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Database, 
  Sparkles, 
  BarChart3, 
  Layers, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  FileCheck2,
  PieChart,
  Code2,
  MessageSquare,
  Shield,
  FileSpreadsheet,
  Award,
  HelpCircle,
  Clock,
  Briefcase,
  DollarSign,
  Users,
  Percent,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Calendar,
  Search
} from "lucide-react";

import { useLanguage } from "../i18n";

export default function CoreServiceDetail() {
  const { t, language } = useLanguage();
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const isId = language === "id";
  const [selectedRegion, setSelectedRegion] = useState<"Semua" | "Jakarta" | "Surabaya" | "Medan">("Semua");

  const regionData = {
    Semua: {
      sales: "Rp 1.428.500.000",
      salesGrowth: "+18.4%",
      margin: "42.8%",
      conversion: "3.24%",
      orders: "14.820",
      trendPath: "M 0 50 Q 30 35 60 45 T 120 15 T 180 35 T 240 10 T 300 25 T 360 5 T 420 20 L 420 80 L 0 80 Z",
      trendLine: "M 0 50 Q 30 35 60 45 T 120 15 T 180 35 T 240 10 T 300 25 T 360 5 T 420 20",
      categories: [
        { name: "F&B Solusi", value: "35%", width: "w-[35%]", color: "bg-sky-500" },
        { name: "Fashion & Retail", value: "28%", width: "w-[28%]", color: "bg-indigo-500" },
        { name: "SaaS & Agensi", value: "20%", width: "w-[20%]", color: "bg-purple-500" },
        { name: "Lain-lain", value: "17%", width: "w-[17%]", color: "bg-slate-650" }
      ],
      transactions: [
        { id: "TX-9011", desc: "PT Makmur Sentosa", category: "Enterprise", val: "Rp 145.030.000", status: "Success" },
        { id: "TX-9012", desc: "Kopi Sedap Mantap", category: "UMKM", val: "Rp 12.450.000", status: "Success" },
        { id: "TX-9013", desc: "SaaS Tech Indonesia", category: "Enterprise", val: "Rp 85.000.000", status: "Pending" }
      ]
    },
    Jakarta: {
      sales: "Rp 842.100.000",
      salesGrowth: "+22.1%",
      margin: "44.5%",
      conversion: "3.48%",
      orders: "8.910",
      trendPath: "M 0 45 Q 30 25 60 40 T 120 5 T 180 25 T 240 5 T 300 15 T 360 0 T 420 10 L 420 80 L 0 80 Z",
      trendLine: "M 0 45 Q 30 25 60 40 T 120 5 T 180 25 T 240 5 T 300 15 T 360 0 T 420 10",
      categories: [
        { name: "F&B Solusi", value: "30%", width: "w-[30%]", color: "bg-sky-500" },
        { name: "Fashion & Retail", value: "35%", width: "w-[35%]", color: "bg-indigo-500" },
        { name: "SaaS & Agensi", value: "22%", width: "w-[22%]", color: "bg-purple-500" },
        { name: "Lain-lain", value: "13%", width: "w-[13%]", color: "bg-slate-650" }
      ],
      transactions: [
        { id: "TX-9011", desc: "PT Makmur Sentosa", category: "Enterprise", val: "Rp 145.030.000", status: "Success" },
        { id: "TX-9013", desc: "SaaS Tech Indonesia", category: "Enterprise", val: "Rp 85.000.000", status: "Pending" },
        { id: "TX-9014", desc: "Butik Cantik Jakarta", category: "UMKM", val: "Rp 24.500.000", status: "Success" }
      ]
    },
    Surabaya: {
      sales: "Rp 385.200.000",
      salesGrowth: "+12.8%",
      margin: "39.2%",
      conversion: "2.90%",
      orders: "4.120",
      trendPath: "M 0 60 Q 30 45 60 55 T 120 25 T 180 45 T 240 20 T 300 35 T 360 15 T 420 30 L 420 80 L 0 80 Z",
      trendLine: "M 0 60 Q 30 45 60 55 T 120 25 T 180 45 T 240 20 T 300 35 T 360 15 T 420 30",
      categories: [
        { name: "F&B Solusi", value: "42%", width: "w-[42%]", color: "bg-sky-500" },
        { name: "Fashion & Retail", value: "18%", width: "w-[18%]", color: "bg-indigo-500" },
        { name: "SaaS & Agensi", value: "15%", width: "w-[15%]", color: "bg-purple-500" },
        { name: "Lain-lain", value: "25%", width: "w-[25%]", color: "bg-slate-650" }
      ],
      transactions: [
        { id: "TX-9012", desc: "Kopi Sedap Mantap", category: "UMKM", val: "Rp 12.450.000", status: "Success" },
        { id: "TX-9015", desc: "Distributor Surabaya", category: "Enterprise", val: "Rp 98.000.000", status: "Success" },
        { id: "TX-9016", desc: "Pecel Madiun Sby", category: "UMKM", val: "Rp 5.200.000", status: "Success" }
      ]
    },
    Medan: {
      sales: "Rp 201.200.000",
      salesGrowth: "+15.2%",
      margin: "41.0%",
      conversion: "3.05%",
      orders: "1.790",
      trendPath: "M 0 70 Q 30 55 60 65 T 120 35 T 180 55 T 240 30 T 300 45 T 360 25 T 420 40 L 420 80 L 0 80 Z",
      trendLine: "M 0 70 Q 30 55 60 65 T 120 35 T 180 55 T 240 30 T 300 45 T 360 25 T 420 40",
      categories: [
        { name: "F&B Solusi", value: "32%", width: "w-[32%]", color: "bg-sky-500" },
        { name: "Fashion & Retail", value: "22%", width: "w-[22%]", color: "bg-indigo-500" },
        { name: "SaaS & Agensi", value: "25%", width: "w-[25%]", color: "bg-purple-500" },
        { name: "Lain-lain", value: "21%", width: "w-[21%]", color: "bg-slate-650" }
      ],
      transactions: [
        { id: "TX-9017", desc: "Medan SaaS Center", category: "Enterprise", val: "Rp 64.000.000", status: "Success" },
        { id: "TX-9018", desc: "Kopi Gayo Medan", category: "UMKM", val: "Rp 14.200.000", status: "Success" },
        { id: "TX-9019", desc: "Sinar Terang Group", category: "Enterprise", val: "Rp 110.000.000", status: "Pending" }
      ]
    }
  };

  const activeDashboardData = regionData[selectedRegion];

  const workflowSteps = [
    {
      num: "01",
      title: t('core.wf.step1_title'),
      desc: t('core.wf.step1_desc')
    },
    {
      num: "02",
      title: t('core.wf.step2_title'),
      desc: t('core.wf.step2_desc')
    },
    {
      num: "03",
      title: t('core.wf.step3_title'),
      desc: t('core.wf.step3_desc')
    },
    {
      num: "04",
      title: t('core.wf.step4_title'),
      desc: t('core.wf.step4_desc')
    }
  ];

  return (
    <section id="jasa-analisis" className="bg-slate-950 py-16 md:py-24 pb-16 md:pb-20 relative border-t border-slate-900 overflow-hidden">
      {/* Visual background accents and grid styling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER SECTION WITH EXTRA COMPACT EYE-CANDY ILLUSTRATION ================= */}
        <div className="flex flex-col mb-16 relative">
          
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-sky-400 border border-sky-500/20 self-start mb-5">
            <Layers className="h-3.5 w-3.5 text-sky-400 rotate-12 " /> {t('core.badge')}
          </span>

          {/* 70/30 Grid layout wrapping description and compact preview */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-10 items-center">
            
            {/* Left Column (70% equivalent: lg:col-span-7) */}
            <div className="lg:col-span-7 text-left flex flex-col justify-center max-w-2xl">
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] text-left">
                {t('core.title1')}
                <span className="block mt-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent pb-1">
                  {t('core.title2')}
                </span>
              </h2>
              
              <p className="mt-4 text-xs sm:text-sm text-slate-300 font-bold font-sans tracking-wide leading-relaxed text-left">
                {t('core.subtitle1')}<span className="text-sky-400 font-extrabold">{t('core.subtitle2')}</span>
              </p>

              <div className="mt-5 h-1 w-24 bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.25)]" />
            </div>

            {/* Right Column (30% equivalent) - Compact container with elegant floating data illustration nodes */}
            <div className="lg:col-span-3 relative flex items-center justify-center self-center w-[360px] max-w-full">
              
              {/* Floating Widget 1: Top-Left Growth Tracker pill */}
              <div className="hidden md:flex absolute -top-8 -left-6 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 items-center gap-2 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="h-6 w-6 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">{t('core.growth')}</div>
                  <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">+42.5%</div>
                </div>
                <div className="h-4 w-10 flex items-end gap-0.5 pl-1.5 pb-0.5">
                  <div className="w-[3px] bg-emerald-500/30 rounded-full h-[30%]" />
                  <div className="w-[3px] bg-emerald-500/40 rounded-full h-[50%]" />
                  <div className="w-[3px] bg-emerald-500/60 rounded-full h-[70%]" />
                  <div className="w-[3px] bg-emerald-500 rounded-full h-[100%] " />
                </div>
              </div>

              {/* Floating Widget 2: Bottom-Right Database/Uptime Indicator pill */}
              <div className="hidden md:flex absolute -bottom-7 -right-5 bg-slate-950/95 border border-slate-800/80 rounded-xl p-2.5 flex-col gap-1 shadow-2xl z-20 hover:scale-105 transition-all cursor-pointer select-none">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <Database className="h-3.5 w-3.5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-widest text-slate-450 uppercase leading-none">{t('core.accuracy')}</div>
                    <div className="text-[11px] font-bold text-slate-100 font-mono leading-none mt-0.5">99.98%</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mt-0.5">
                  <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" style={{ width: '99.98%' }} />
                </div>
              </div>

              {/* Floating Widget 3: Bottom-Left Interactive latency indicator bubble */}
              <div className="hidden md:flex absolute bottom-5 -left-12 bg-slate-950/85 px-2 py-1 rounded-full border border-slate-800/60 items-center gap-1.5 shadow-xl font-mono text-[9px] text-sky-400 z-10 hover:-translate-x-1 transition-all select-none">
                <span className="relative flex h-1.5 w-1.5">
                  <span className=" absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500" />
                </span>
                <span>API: 12ms</span>
              </div>

              {/* Connector lines to give it a blueprint visual layout */}
              <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                {/* Upper connection */}
                <path d="M -10 10 L 40 40" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
                {/* Lower connection */}
                <path d="M 330 220 L 370 245" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
              </svg>

              {/* Core Dashboard Card */}
              <div className="w-full bg-slate-900/40 rounded-xl border border-slate-800/80 p-4.5 backdrop-blur-sm shadow-xl flex flex-col justify-between relative overflow-hidden h-[260px] hover:border-slate-705 transition-all select-none">
                {/* Top Gloss Highlight */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-sky-400 via-indigo-500 to-sky-300" />
                
                {/* compact dashboard header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/30">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-[10px] text-slate-950 font-sans font-bold">
                      BI
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-200 leading-none">BI Preview</h4>
                      <p className="text-[9px] text-slate-500 font-mono mt-0.5">{selectedRegion}</p>
                    </div>
                  </div>
                  
                  <div className="flex bg-slate-950/80 p-1 rounded border border-slate-850">
                    {(["Semua", "Jakarta", "Sby", "Medan"] as const).map((reg) => {
                      const regValue = reg === "Sby" ? "Surabaya" : reg;
                      return (
                        <button
                          key={reg}
                          onClick={() => setSelectedRegion(regValue as any)}
                          className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-bold transition-all cursor-pointer ${
                            selectedRegion === regValue
                              ? "bg-sky-500/20 text-sky-400 font-extrabold"
                              : "text-slate-500 hover:text-slate-300"
                          }`}
                        >
                          {reg}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* compact KPI stats */}
                <div className="grid grid-cols-2 gap-2 my-2.5">
                  <div className="bg-slate-950/60 p-2 rounded border border-slate-850/60">
                    <span className="text-[8px] font-mono tracking-wider text-slate-500 block uppercase">{t('core.revenue')}</span>
                    <span className="text-xs font-bold text-white font-mono mt-0.5 block truncate">{activeDashboardData.sales}</span>
                  </div>
                  <div className="bg-slate-950/60 p-2 rounded border border-slate-850/60">
                    <span className="text-[8px] font-mono tracking-wider text-slate-500 block uppercase">{t('core.conversion')}</span>
                    <span className="text-xs font-bold text-white font-mono mt-0.5 block truncate">{activeDashboardData.conversion}</span>
                  </div>
                </div>

                {/* compact micro-bar-chart instead of sparkline to match custom request */}
                <div className="relative h-20 bg-slate-950/70 rounded p-1.5 border border-slate-850/60 overflow-hidden flex flex-col justify-end">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:0.6rem_0.6rem] pointer-events-none" />
                  
                  <div className="flex h-16 items-end gap-1.5 relative z-10 px-1">
                    {selectedRegion === "Semua" ? (
                      <>
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-sky-500/80 transition-all cursor-pointer" style={{ height: "45%" }} />
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-sky-500/80 transition-all cursor-pointer" style={{ height: "65%" }} />
                        <div className="w-full bg-sky-500 rounded-sm hover:bg-sky-450 transition-all cursor-pointer" style={{ height: "85%" }} />
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-indigo-500/80 transition-all cursor-pointer" style={{ height: "50%" }} />
                        <div className="w-full bg-indigo-500 rounded-sm hover:bg-indigo-400 transition-all cursor-pointer" style={{ height: "95%" }} />
                      </>
                    ) : selectedRegion === "Jakarta" ? (
                      <>
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-sky-500/80 transition-all cursor-pointer" style={{ height: "30%" }} />
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-sky-500/80 transition-all cursor-pointer" style={{ height: "50%" }} />
                        <div className="w-full bg-sky-500 rounded-sm hover:bg-sky-450 transition-all cursor-pointer" style={{ height: "95%" }} />
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-indigo-500/80 transition-all cursor-pointer" style={{ height: "40%" }} />
                        <div className="w-full bg-indigo-500 rounded-sm hover:bg-indigo-400 transition-all cursor-pointer" style={{ height: "80%" }} />
                      </>
                    ) : selectedRegion === "Surabaya" ? (
                      <>
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-sky-500/80 transition-all cursor-pointer" style={{ height: "55%" }} />
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-sky-500/80 transition-all cursor-pointer" style={{ height: "45%" }} />
                        <div className="w-full bg-sky-500 rounded-sm hover:bg-sky-450 transition-all cursor-pointer" style={{ height: "70%" }} />
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-indigo-500/80 transition-all cursor-pointer" style={{ height: "60%" }} />
                        <div className="w-full bg-indigo-500 rounded-sm hover:bg-indigo-400 transition-all cursor-pointer" style={{ height: "90%" }} />
                      </>
                    ) : (
                      <>
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-sky-500/80 transition-all cursor-pointer" style={{ height: "25%" }} />
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-sky-500/80 transition-all cursor-pointer" style={{ height: "70%" }} />
                        <div className="w-full bg-sky-500 rounded-sm hover:bg-sky-450 transition-all cursor-pointer" style={{ height: "80%" }} />
                        <div className="w-full bg-slate-800 rounded-sm hover:bg-indigo-500/80 transition-all cursor-pointer" style={{ height: "35%" }} />
                        <div className="w-full bg-indigo-500 rounded-sm hover:bg-indigo-400 transition-all cursor-pointer" style={{ height: "75%" }} />
                      </>
                    )}
                  </div>
                </div>

                {/* bottom micro categorization progress bar */}
                <div className="mt-1.5 pb-1 border-t border-slate-850/40 leading-none">
                  <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden mt-2.5">
                    <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-500" style={{ width: activeDashboardData.categories[0].value }} />
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Tools Badges rendered safely below the grid row so they do not stretch the illustration box */}
          <div className="mt-8 pt-5 border-t border-slate-900/60 flex flex-wrap gap-2.5 justify-start items-center">
            <span className="text-xs text-slate-400 font-mono font-semibold mr-1">{t('core.tools')}</span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-sky-400 border border-sky-500/20 hover:bg-sky-500/15 transition-colors">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                alt="Python" 
                className="h-3.5 w-3.5 object-contain" 
                referrerPolicy="no-referrer" 
              />
              Python
            </span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/15 transition-colors">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                alt="SQL" 
                className="h-3.5 w-3.5 object-contain" 
                referrerPolicy="no-referrer" 
              />
              SQL Database
            </span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-yellow-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-yellow-505 border border-yellow-500/20 hover:bg-yellow-500/15 transition-colors">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" 
                alt="Power BI" 
                className="h-3.5 w-3.5 object-contain" 
                referrerPolicy="no-referrer" 
              />
              Power BI
            </span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/15 transition-colors">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" 
                alt="Tableau" 
                className="h-3.5 w-3.5 object-contain" 
                referrerPolicy="no-referrer" 
              />
              Tableau
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-purple-400 border border-purple-500/20 hover:bg-purple-500/15 transition-colors">
              <img 
                src="https://img.icons8.com/color/48/google-sheets.png" 
                alt="Google Sheets" 
                className="h-3.5 w-3.5 object-contain" 
                referrerPolicy="no-referrer" 
              />
              Sheets
            </span>
            
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/15 transition-colors">
              <img 
                src="https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" 
                alt="Excel VBA" 
                className="h-3.5 w-3.5 object-contain" 
                referrerPolicy="no-referrer" 
              />
              Excel VBA
            </span>
          </div>
        </div>

        {/* ================= INTRO PROFILE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-700 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('core.intro1_desc')}<strong>{t('core.intro1_bold')}</strong>{t('core.intro1_desc2')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-sky-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-sky-500 " />
              <span>{t('core.intro1_tag')}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-slate-700 transition-all">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
              {t('core.intro2_desc1')}<strong>{t('core.intro2_bold1')}</strong>{t('core.intro2_desc2')}<strong>{t('core.intro2_bold2')}</strong>{t('core.intro2_desc3')}<strong>{t('core.intro2_bold3')}</strong>{t('core.intro2_desc4')}<strong>{t('core.intro2_bold4')}</strong>{t('core.intro2_desc5')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400 font-mono font-bold">
              <CheckCircle className="h-4 w-4" />
              <span>{t('core.intro2_tag')}</span>
            </div>
          </div>
        </div>

        {/* ================= SEGMENT SOLUTIONS ================= */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white font-sans">
              {t('core.segment_title')}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
              {t('core.segment_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* SEGMENT 1: ENTERPRISE & KORPORAT */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-705/80 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-indigo-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/25">
                    {t('core.ent.badge1')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Shield className="h-3.5 w-3.5 text-indigo-400" /> {t('core.ent.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('core.ent.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('core.ent.desc')}
                </p>

                <div className="mt-8 space-y-6">
                  {/* Point 1.1 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-200 font-sans">{t('core.ent.p1_title')}</h5>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed font-sans">
                        {t('core.ent.p1_desc')}
                      </p>
                    </div>
                  </div>

                  {/* Point 1.2 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-200 font-sans">{t('core.ent.p2_title')}</h5>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed font-sans">
                        {t('core.ent.p2_desc')}
                      </p>
                    </div>
                  </div>

                  {/* Point 1.3 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <FileCheck2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-200 font-sans">{t('core.ent.p3_title')}</h5>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed font-sans">
                        {t('core.ent.p3_desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-800/80 pt-6 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{t('core.ent.output')}</span>
              </div>
            </div>

            {/* SEGMENT 2: UMKM & STARTUP */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-705/80 transition-all shadow-xl group">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 h-20 w-20 opacity-5 group-hover:opacity-10 transition-opacity bg-sky-500 blur-xl rounded-full" />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="inline-flex rounded-lg bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400 border border-sky-500/25">
                    {t('core.umkm.badge1')}
                  </span>
                  <span className="inline-flex rounded bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 text-[10px] text-emerald-400 font-bold uppercase font-mono">
                    {t('core.umkm.badge2')}
                  </span>
                </div>
                
                <h4 className="font-sans text-xl font-bold text-white leading-snug">
                  {t('core.umkm.title')}
                </h4>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {t('core.umkm.desc')}
                </p>

                <div className="mt-8 space-y-6">
                  {/* Point 2.1 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-200 font-sans">{t('core.umkm.p1_title')}</h5>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed font-sans">
                        {t('core.umkm.p1_desc')}
                      </p>
                    </div>
                  </div>

                  {/* Point 2.2 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <FileSpreadsheet className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-200 font-sans">{t('core.umkm.p2_title')}</h5>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed font-sans">
                        {t('core.umkm.p2_desc')}
                      </p>
                    </div>
                  </div>

                  {/* Point 2.3 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                      <PieChart className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-200 font-sans">{t('core.umkm.p3_title')}</h5>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed font-sans">
                        {t('core.umkm.p3_desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-800/80 pt-6 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{t('core.umkm.output')}</span>
              </div>
            </div>

          </div>
        </div>

        {/* ================= TOOLS & TECH STACK ================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white font-sans">
              {t('core.tools.title')}
            </h3>
            <p className="mt-2 text-sm text-slate-400 font-sans">
              {t('core.tools.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             {/* Tool Card 1 */}
            <div className="rounded-2xl border border-slate-850 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-sky-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                <Code2 className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">
                {t('core.tools.title1')}
              </h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                {t('core.tools.desc1')}
              </p>
            </div>

            {/* Tool Card 2 */}
            <div className="rounded-2xl border border-slate-850 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-sky-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">
                {t('core.tools.title2')}
              </h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                {t('core.tools.desc2')}
              </p>
            </div>

            {/* Tool Card 3 */}
            <div className="rounded-2xl border border-slate-850 bg-slate-900/40 p-6 flex flex-col items-center text-center group hover:border-sky-500/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                <FileSpreadsheet className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm font-sans">
                {t('core.tools.title3')}
              </h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                {t('core.tools.desc3')}
              </p>
            </div>
          </div>
        </div>

        {/* ================= ALUR KERJA INTERACTIVE TIMELINE ================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-2xl font-bold text-white font-sans">
              {t('workflow.title')}
            </h4>
            <p className="mt-2 text-xs text-sky-400 font-mono tracking-widest uppercase">
              {t('core.wf.badge')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveWorkflowStep(idx)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  activeWorkflowStep === idx 
                    ? "bg-slate-900/80 border-sky-500/60 shadow-lg shadow-sky-500/10 translate-y-[-4px]" 
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700/80 hover:bg-slate-900/80"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-3xl font-extrabold text-slate-800 group-hover:text-sky-500/10 transition-colors">
                      {step.num}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${activeWorkflowStep === idx ? "bg-sky-400" : "bg-slate-800"}`} />
                  </div>
                  <h5 className="font-bold text-slate-100 text-sm sm:text-base font-sans group-hover:text-sky-400 transition-colors">
                    {step.title}
                  </h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/50 text-[10px] text-slate-500 font-mono">
                  {t('core.wf.verified')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAPABILITIES & METRICS BENTO IN-DEEP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-20 text-left">
          <div className="col-span-full rounded-3xl border border-slate-800/60 dark-glass-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-sky-400 uppercase font-bold px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                {isId ? "PRESTASI ANALISIS DATA & BUSINESS INTELLIGENCE" : "DATA ANALYSIS & BI TECH STACK"}
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-sans text-slate-100">
                {isId ? "Ekosistem Tools Analisis Data & BI Utama Kami:" : "Our Core Data Analysis & BI Tools:"}
              </h3>
              
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: isId ? "Pembuatan Dashboard Lintas Platform (Power BI & Looker Studio)" : "Multi-Platform Dashboard Design (Power BI & Looker Studio)",
                    desc: isId ? "Menghubungkan berbagai sumber data mentah (API, SQL, Sheet) ke dashboard eksekutif interaktif yang dioptimalkan untuk keputusan bisnis real-time." : "Connecting raw data sources (APIs, SQL, Sheets) to interactive executive dashboards optimized for real-time business decisions."
                  },
                  {
                    title: isId ? "Pembersihan Data Intensif & Skrip Analitik Dinamis" : "Intensive Data Cleansing & Dynamic Analytics Scripts",
                    desc: isId ? "Menggunakan Python, PostgreSQL, dan d3.js untuk merancang visualisasi data kustom, agregasi matriks keuangan, dan korelasi tren yang andal." : "Using Python, PostgreSQL, and d3.js to design custom data visualizations, financial metric aggregations, and robust trend correlations."
                  }
                ].map((feat) => (
                  <div key={feat.title} className="flex gap-3 text-left">
                    <div className="mt-1 h-5 w-5 rounded-md bg-sky-500/10 text-sky-400 flex items-center justify-center flex-shrink-0">
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Microsoft Power BI
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" alt="Tableau" className="h-3.5 w-[36px] object-contain" referrerPolicy="no-referrer" />
                Tableau
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_Looker_Studio_Logo.svg" alt="Looker Studio" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                Google Looker Studio
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-bold">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-3.5 w-3.5 object-contain" referrerPolicy="no-referrer" />
                PostgreSQL
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
              import('./ContactModal').then(({ openContactModal }) => openContactModal("Halo tim Worksense Analytics, saya tertarik untuk konsultasi mengenai Jasa Analisis Data & Pembuatan Dashboard BI untuk perusahaan saya. Boleh diskusi lebih lanjut?"));
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-sky-500/40 cursor-pointer"
          >
            {isId ? "Mulai Konsultasi Analisis Data & BI" : "Start Free Data Analysis & BI Consultation"}
          </button>
        </div>

      </div>
    </section>
  );
}
