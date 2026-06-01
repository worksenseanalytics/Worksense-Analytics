/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, MessageSquare, ArrowRight, BarChart3, Database, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-16 pb-20 md:pt-28 md:pb-32">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="absolute right-10 bottom-10 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero text panel */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-3 py-1 text-xs font-semibold text-sky-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Dukungan Pengambilan Keputusan Bisnis Lebih Cerdas</span>
            </div>

            <h1 className="mt-6 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Ubah Data Menjadi{" "}
              <span className="block mt-2 bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                Insight Jelas & Terarah
              </span>
            </h1>

            <p className="mt-6 text-sm text-slate-300 md:text-base leading-relaxed font-sans max-w-2xl">
              <strong>Worksense Analytics</strong> membantu bisnis mengubah data menjadi insight yang jelas, terarah, dan dapat ditindaklanjuti. Kami menggabungkan analisis data, visualisasi, dan pemahaman bisnis untuk mendukung pengambilan keputusan yang lebih cerdas. Dengan pendekatan yang sederhana namun powerful, kami memastikan setiap data memiliki makna dan dampak nyata bagi pertumbuhan bisnis.
            </p>

            <div className="mt-5 border-l-2 border-sky-500 pl-4 py-1.5 bg-slate-900/65 pr-4 rounded-r-xl max-w-2xl text-slate-400 text-xs">
              <p className="font-semibold text-slate-200">Salah Satu Layanan Unggulan Kami:</p>
              <p className="mt-1 font-sans">
                Jasa Pembersihan Data (Data Cleaning), Analisis Data Eksploratif, & Pembuatan Visualisasi Dashboard Interaktif Profesional.
              </p>
            </div>

            {/* Achievement badging for certifications */}
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm shadow-black/30">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Google Advanced Analytics Certified
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm shadow-black/30">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                IBM Certified Data Specialist
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm shadow-black/30">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                DataCamp Competency Global
              </div>
            </div>

            {/* Actions CTA */}
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <a
                href="https://fastwork.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 px-6 py-3.5 text-sm font-bold text-slate-900 shadow-xl shadow-sky-500/20 transition-all hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
              >
                <MessageSquare className="h-4 w-4" />
                Chat Fastwork Sekarang
              </a>
              <a
                href="#simulator"
                className="inline-flex justify-center items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 backdrop-blur px-6 py-3.5 text-sm font-bold text-slate-300 hover:text-white hover:border-slate-500 transition-all active:scale-[0.98] w-full sm:w-auto"
              >
                Coba Live Simulator
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Interactive Hero Graphic (Previewing visual charts dashboard mockup) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 blur-xl" />
            
            {/* Capsule Pill (Top Center element from standard blueprint) */}
            <div className="absolute -top-14 left-[52%] -translate-x-1/2 w-48 h-9 rounded-full border border-indigo-400/30 bg-slate-950/80 shadow-[0_0_20px_rgba(99,102,241,0.2)] flex items-center justify-between px-3.5 backdrop-blur-md z-20">
              <div className="flex gap-1.5 items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="font-mono text-[9px] tracking-widest text-indigo-300 font-bold uppercase">KPI STREAM</span>
              </div>
              <div className="h-3 w-px bg-slate-800" />
              <span className="font-mono text-[9px] text-emerald-400 font-extrabold">LIVE FEED</span>
            </div>

            {/* Visual Glass Card simulating a beautiful dashboard preview */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-indigo-950/40">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">Worksense BI v2.5.1</span>
                </div>
                <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 uppercase tracking-wider font-mono">
                  Online
                </span>
              </div>

              {/* Stat grid inside hero card */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-3">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold font-sans">Corporate KPI</span>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-xl font-bold text-white font-sans">98.4%</span>
                    <span className="text-[10px] font-semibold text-emerald-400 font-sans">+2.1%</span>
                  </div>
                </div>
                <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-3">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold font-sans font-mono">Clean Records Ratio</span>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-xl font-bold text-white font-sans">100%</span>
                    <span className="text-[10px] font-semibold text-sky-400 font-sans">Verified</span>
                  </div>
                </div>
              </div>

              {/* Abstract charts simulation in hero card */}
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-slate-300 font-sans">Tren Hasil Insight Bisnis</span>
                  <span className="text-[10px] text-slate-500 font-mono">Live Data Stream</span>
                </div>
                <div className="flex h-24 items-end gap-1.5">
                  <div className="w-full bg-slate-800 rounded-md hover:bg-sky-500/80 transition-all cursor-pointer" style={{ height: "45%" }} />
                  <div className="w-full bg-slate-800 rounded-md hover:bg-sky-500/80 transition-all cursor-pointer" style={{ height: "65%" }} />
                  <div className="w-full bg-sky-500 rounded-md hover:bg-sky-400 transition-all cursor-pointer" style={{ height: "85%" }} />
                  <div className="w-full bg-slate-800 rounded-md hover:bg-indigo-500/80 transition-all cursor-pointer" style={{ height: "50%" }} />
                  <div className="w-full bg-indigo-500 rounded-md hover:bg-indigo-400 transition-all cursor-pointer" style={{ height: "95%" }} />
                </div>
              </div>

              {/* Testimonial preview inside hero */}
              <div className="mt-4 rounded-xl bg-gradient-to-r from-sky-950/40 to-indigo-950/30 border border-slate-800/60 p-3 text-center">
                <p className="text-[11px] italic text-slate-300 font-sans">
                  "Menembus batas laporan manual Excel yang memakan waktu hingga menjadi visualisasi berharga"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
