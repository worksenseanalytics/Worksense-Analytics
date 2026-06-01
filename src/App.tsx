/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Database,
  FileSpreadsheet,
  BarChart3,
  Layers,
  Code,
  Terminal,
  ArrowRight,
  Check,
  CheckCircle2,
  Trash2,
  Play,
  Send,
  User,
  Bot,
  ChevronRight,
  ArrowRightLeft,
  Lock,
  AlertCircle,
  Award,
  ShieldCheck,
  RefreshCw,
  Sliders,
  MessageSquare,
  Flame,
  Scale,
  Palette,
  ShieldAlert,
  HelpCircle,
  Clock,
  Instagram,
  Briefcase,
  Globe,
  LayoutGrid
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import CoreServiceDetail from "./components/CoreServiceDetail";
import TrustedPartners from "./components/TrustedPartners";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import { SIMULATION_DATASETS, INDUSTRY_TOOLS, PROJECT_TECH_STACK } from "./data";
import { ChatMessage, DirtyRecord, CleanRecord } from "./types";
import { useLanguage } from "./i18n";

export default function App() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("worksense-theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("worksense-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  

  const COLORS = ["#38bdf8", "#818cf8", "#f43f5e", "#10b981", "#fbbf24"];

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-slate-950 text-slate-100 font-sans selection:bg-sky-500/30 selection:text-white">
      {/* Dynamic Navigation Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Presentation */}
      <Hero />

      {/* TRUSTED PARTNERS SECTION */}
      <TrustedPartners />

      {/* Jasa Utama ke-1: Pembersihan Data, EDA, & Dashboard Interaktif */}
      <CoreServiceDetail />

      {/* GLOBAL CERTIFICATION CREDENTIALS GRID SECTION */}
      <section className="bg-slate-900 border-t border-slate-800 py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-950/65 px-3 py-1 rounded-full border border-sky-500/20">
              <Award className="h-3.5 w-3.5 text-amber-500 animate-pulse" /> {t('cert.badge')}
            </span>
            <h2 className="mt-3 font-sans text-3xl font-extrabold text-white">
              {t('cert.title')}
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-sans">
              {t('cert.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Google Certificate */}
            <div className="rounded-2xl border border-slate-850 bg-slate-950 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg hover:shadow-sky-500/5 group text-center md:text-left">
              <div>
                <div className="mx-auto md:mx-0 h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-sans text-lg font-bold text-slate-100">
                  Google Advanced Data Analytics Professional
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                  Sertifikasi tingkat lanjut dari Google yang memvalidasi keahlian praktis dalam analisis data kompleks, pemodelan statistik, bahasa pemrograman Python, serta pembuatan visualisasi interaktif tingkat tinggi.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-900/80 text-[10px] text-emerald-400 font-bold font-mono">
                ✓ Terverifikasi Internasional
              </div>
            </div>

            {/* IBM Certificate */}
            <div className="rounded-2xl border border-slate-850 bg-slate-950 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg hover:shadow-sky-500/5 group text-center md:text-left">
              <div>
                <div className="mx-auto md:mx-0 h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-sans text-lg font-bold text-slate-100">
                  IBM Certified Data Science
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                  Spesialisasi sains data berkredibilitas tinggi dari IBM untuk metodologi pengolahan Big Data, query optimalisasi database SQL tingkat tinggi, penambangan pola insight (data mining), dan machine learning terapan.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-900/80 text-[10px] text-emerald-400 font-bold font-mono">
                ✓ Akreditasi Industri Global
              </div>
            </div>

            {/* DataCamp Certificate */}
            <div className="rounded-2xl border border-slate-850 bg-slate-950 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg hover:shadow-sky-500/5 group text-center md:text-left">
              <div>
                <div className="mx-auto md:mx-0 h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-sans text-lg font-bold text-slate-100">
                  DataCamp Certified Professional Analyst
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                  Sertifikasi kompetensi global dari lembaga edukasi data terkemuka dunia. Memvalidasi kemampuan pengolahan data wrangling (Pandas & NumPy), visualisasi visual berkualitas tinggi di Power BI & Tableau, serta business reporting tepercaya.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-900/80 text-[10px] text-emerald-400 font-bold font-mono">
                ✓ Lisensi Kompetensi Aktif
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES & REAL-TIME INDUSTRY TOOLS SECTION */}
      <section id="tools" className="bg-slate-900/40 border-y border-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase text-sky-400">{t('tools.badge')}</span>
            <h2 className="mt-2 text-3xl font-sans font-extrabold text-white">
              {t('tools.title')}
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-sans">
              {t('tools.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1 shadow-md shadow-black/30 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 rounded-full">
                      {tool.category}
                    </span>
                    <div className="h-8 w-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold">
                      {tool.variant === "python" && <Terminal className="h-4 w-4" />}
                      {tool.variant === "sql" && <Database className="h-4 w-4" />}
                      {tool.variant === "powerbi" && <BarChart3 className="h-4 w-4" />}
                      {tool.variant === "tableau" && <Layers className="h-4 w-4" />}
                      {tool.variant === "excel" && <FileSpreadsheet className="h-4 w-4" />}
                    </div>
                  </div>

                  <h3 className="font-sans text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 text-[10px] text-sky-400 font-semibold font-mono flex items-center justify-between">
                  <span>Guaranteed Expertise ✓</span>
                  <span className="text-slate-500 font-light">Industry Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW PIPELINE IN-DETAIL SECTION */}
      <section id="workflow" className="bg-slate-950 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase text-sky-400">{t('workflow.badge')}</span>
            <h2 className="mt-2 text-3xl font-sans font-extrabold text-white">
              {t('workflow.title')}
            </h2>
            <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full" />
            <p className="mt-4 text-sm text-slate-400 font-sans">
              {t('workflow.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase bg-sky-500/10 px-2 py-0.5 rounded text-sky-400 font-extrabold">{t('wf_full.step1')}</span>
                <h3 className="text-base font-bold text-white mt-3 font-sans">{t('wf_full.step1_title')}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 font-sans">
                  {t('wf_full.step1_desc')}
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-500 border-t border-slate-800/60 pt-3">
                {t('wf_full.step1_tag')}
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase bg-sky-500/10 px-2 py-0.5 rounded text-sky-400 font-extrabold">{t('wf_full.step2')}</span>
                <h3 className="text-base font-bold text-white mt-3 font-sans">{t('wf_full.step2_title')}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 font-sans">
                  {t('wf_full.step2_desc')}
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-500 border-t border-slate-800/60 pt-3">
                {t('wf_full.step2_tag')}
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase bg-sky-500/10 px-2 py-0.5 rounded text-sky-400 font-extrabold">{t('wf_full.step3')}</span>
                <h3 className="text-base font-bold text-white mt-3 font-sans">{t('wf_full.step3_title')}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 font-sans">
                  {t('wf_full.step3_desc')}
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-500 border-t border-slate-800/60 pt-3">
                {t('wf_full.step3_tag')}
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-400 font-extrabold">{t('wf_full.step4')}</span>
                <h3 className="text-base font-bold text-white mt-3 font-sans">{t('wf_full.step4_title')}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 font-sans">
                  {t('wf_full.step4_desc')}
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-550 border-t border-slate-800/60 pt-3 flex items-center justify-between">
                <span>{t('wf_full.step4_tag1')}</span>
                <span className="font-bold text-emerald-400 font-mono">{t('wf_full.step4_tag2')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <Testimonials />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FAQ />

      {/* FINAL CONCLUDING TRUST & CONTACT OUTREACH CALL-TO-ACTION */}
      <section id="contact" className="bg-slate-950 py-24 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-1/2 -ml-[300px] -mt-[300px] h-[600px] w-[600px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-3.5 py-1 text-xs font-semibold text-sky-400 uppercase tracking-widest font-mono">
            Available for Consultation
          </span>

          <h2 className="mt-6 font-sans text-3xl font-extrabold text-white sm:text-5xl leading-tight">
            {t('footer.title')}
          </h2>

          <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans">
            {t('footer.desc1')}
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-450 leading-relaxed max-w-2xl mx-auto font-sans text-slate-400">
            {t('footer.desc2')}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/6282126574799?text=Halo%20Tim%20Worksense%20Analytics!%20Saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20layanan%20analisis%20data%20dan%20pembuatan%20dashboard%20untuk%20bisnis%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-8 py-4 text-sm font-bold text-slate-900 shadow-xl shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              {t('footer.cta1')}
            </a>
            
            <a
              href="mailto:worksenseanalytics@gmail.com?subject=Konsultasi%20Layanan%20Data%20Analytics&body=Halo%20Tim%20Worksense%20Analytics!%0A%0ASaya%20tertarik%20untuk%20berkonsultasi%20mengenai%20layanan%20analisis%20data%20dan%20pembuatan%20dashboard%20untuk%20bisnis%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-8 py-4 text-sm font-bold text-white border border-slate-700 transition-all hover:scale-105"
            >
              <Send className="h-4.5 w-4.5 text-sky-400" />
              {t('footer.cta2')}
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono">
              Also Find Us On
            </span>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              <a href="https://www.instagram.com/worksense.analytics/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-pink-500/50 transition-all text-slate-400 hover:text-white">
                <Instagram className="h-4 w-4 text-pink-500" />
                <span className="text-sm font-semibold">Instagram</span>
              </a>
              <a href="https://fastwork.id/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/50 transition-all text-slate-400 hover:text-white">
                <Briefcase className="h-4 w-4 text-sky-500" />
                <span className="text-sm font-semibold">Fastwork</span>
              </a>
              <a href="https://upwork.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-green-500/50 transition-all text-slate-400 hover:text-white">
                <Globe className="h-4 w-4 text-green-500" />
                <span className="text-sm font-semibold">Upwork</span>
              </a>
              <a href="https://fiverr.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 transition-all text-slate-400 hover:text-white">
                <LayoutGrid className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-semibold">Fiverr</span>
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-center items-center gap-10 text-xs text-slate-500 font-mono">
            <div className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-emerald-400" />
              <span>NDA Friendly Policy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>Full Source Files Delivered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-amber-500" />
              <span>Global Certified Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sophisticated Dark Footer layout */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-slate-500 text-xs font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10 md:h-12 md:w-12" />
            <span className="font-bold tracking-tight text-white font-sans">
              Worksense<span className="text-sky-400"> Analytics</span>
            </span>
          </div>

          <p className="text-slate-550 max-w-md text-center sm:text-right">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
