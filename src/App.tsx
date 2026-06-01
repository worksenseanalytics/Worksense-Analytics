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
  Clock
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
import { SIMULATION_DATASETS, INDUSTRY_TOOLS, PROJECT_TECH_STACK } from "./data";
import { ChatMessage, DirtyRecord, CleanRecord } from "./types";

export default function App() {
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

  const [activeDataset, setActiveDataset] = useState<"sales" | "expense">("sales");
  const [isCleaning, setIsCleaning] = useState(false);
  const [cleaningProgress, setCleaningProgress] = useState(0);
  const [isCleaned, setIsCleaned] = useState(true);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  
  // Chat state
  const [businessType, setBusinessType] = useState("UMKM / Retail");
  const [dataType, setDataType] = useState("Excel / Google Sheets");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Halo! Saya adalah **Virtual Data Analyst Assistant** dari Worksense Analytics. \n\nBagaimana kondisi data bisnis Anda saat ini? Silakan ceritakan masalah data yang sedang Anda hadapi, atau pilih jenis industri dan format database Anda di atas agar saya bisa memberikan solusi taktis yang disesuaikan!",
      timestamp: new Date()
    }
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  const dataset = SIMULATION_DATASETS[activeDataset];
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Handle simulation toggle
  const restartSimulation = () => {
    setIsCleaning(true);
    setCleaningProgress(0);
    setIsCleaned(false);
    setSimulationLogs(["[INFO] Menginisialisasi modul Worksense Data Wrangling engine...", "[INFO] Memuat berkas input mentah..."]);
  };

  useEffect(() => {
    if (isCleaning) {
      const interval = setInterval(() => {
        setCleaningProgress((prev) => {
          const next = prev + 15;
          if (next >= 100) {
            clearInterval(interval);
            setIsCleaning(false);
            setIsCleaned(true);
            setSimulationLogs((logs) => [
              ...logs,
              `[SUCCESS] Selesai membersihkan ${dataset.summary.totalRows} baris data.`,
              `[STATS] Berhasil membuang ${dataset.summary.duplicatesRemoved} baris duplikat redundan.`,
              `[STATS] Mengisi ${dataset.summary.emptyFieldsFilled} kolom bernilai NULL/kosong dengan metode statistik teruji.`,
              "[INFO] Memvisualisasikan data terbersih ke interaktif dashboard..."
            ]);
            return 100;
          }
          
          // Add some dynamic process logs
          const logIndex = Math.min(Math.floor((next / 100) * dataset.summary.unificationLog.length), dataset.summary.unificationLog.length - 1);
          const currentLog = dataset.summary.unificationLog[logIndex];
          setSimulationLogs((logs) => {
            if (!logs.includes(`[WRANGLING] ${currentLog}`)) {
              return [...logs, `[WRANGLING] ${currentLog}`];
            }
            return logs;
          });
          
          return next;
        });
      }, 350);
      return () => clearInterval(interval);
    }
  }, [isCleaning, activeDataset]);

  // Scroll to bottom of chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isChatLoading]);

  // Submit consulting prompt to server
  const handleSendPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;

    const userMsgText = chatInput.trim();
    const newUserMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: userMsgText,
      timestamp: new Date()
    };

    setChatMessages((prev) => [...prev, newUserMsg]);
    setChatInput("");
    setIsChatLoading(true);

    try {
      // Mapping message history for Gemini contextual interaction
      const historyPayload = chatMessages
        .filter((node) => node.id !== "welcome")
        .map((node) => ({
          role: node.role,
          text: node.text
        }));

      const res = await fetch("/api/consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: userMsgText,
          history: historyPayload,
          businessType: businessType,
          dataType: dataType
        })
      });

      if (!res.ok) {
        throw new Error("Gagal terhubung dengan server");
      }

      const data = await res.json();
      const newAssistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        text: data.text,
        timestamp: new Date()
      };

      setChatMessages((prev) => [...prev, newAssistantMsg]);
    } catch (err: any) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: `assistant-error-${Date.now()}`,
        role: "assistant",
        text: `Maaf, saya mengalami kendala teknis saat menghubungi server. Namun jangan khawatir, tim data analyst profesional kami selalu siap siaga membantu Anda secara manual di Whatsapp/Fastwork. Silakan klik tombol **"Hubungi di Fastwork"** untuk langsung mengirimkan contoh data Anda agar kami bantu bedah gratis!`,
        timestamp: new Date()
      };
      setChatMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const COLORS = ["#38bdf8", "#818cf8", "#f43f5e", "#10b981", "#fbbf24"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500/30 selection:text-white">
      {/* Dynamic Navigation Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Presentation */}
      <Hero />

      {/* TRUSTED PARTNERS SECTION */}
      <TrustedPartners />

      {/* Jasa Utama ke-1: Pembersihan Data, EDA, & Dashboard Interaktif */}
      <CoreServiceDetail />

      {/* GLOBAL CERTIFICATION CREDENTIALS GRID SECTION */}
      <section className="bg-slate-900 border-t border-slate-800 py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-950/65 px-3 py-1 rounded-full border border-sky-500/20">
              <Award className="h-3.5 w-3.5 text-amber-500 animate-pulse" /> Sertifikat Kompetensi Global
            </span>
            <h2 className="mt-3 font-sans text-3xl font-extrabold text-white">
              Sertifikasi Profesional Tim Data Analyst Kami
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-sans">
              Untuk menjamin kualitas analisis data dan visualisasi akurat berstandar industri tinggi, tim ahli kami dilengkapi dengan lisensi kompetensi global berstandar internasional berikut:
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

      {/* INTERACTIVE DEMO: PERBANDINGAN DATA SEBELUM & SESUDAH CLEANING + DASHBOARD SIMULATION */}
      <section id="simulator" className="bg-slate-950 py-20 border-t border-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                <Sliders className="h-3 w-3" /> Live Demo Portfolio
              </span>
              <h2 className="mt-2 font-sans text-3xl font-extrabold text-white sm:text-4xl">
                Simulasi Pembersihan Data & Render Dashboard Interaktif
              </h2>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed font-sans">
                Tekan tombol simulasi di bawah untuk melihat bagaimana tim data analyst kami memproses tumpukan data berantakan (Dirty Data) lalu menyulapnya menjadi visualisasi BI ringkas yang siap dipakai mengambil keputusan taktis.
              </p>
            </div>
            
            {/* Dataset selectors */}
            <div className="mt-6 md:mt-0 flex gap-2 self-start rounded-xl bg-slate-900 p-1 border border-slate-800">
              <button
                onClick={() => {
                  setActiveDataset("sales");
                  setIsCleaned(true);
                  setIsCleaning(false);
                }}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                  activeDataset === "sales"
                    ? "bg-sky-500 text-slate-950 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <BarChart3 className="h-3.5 w-3.5" />
                Data Transaksi Sales
              </button>
              <button
                onClick={() => {
                  setActiveDataset("expense");
                  setIsCleaned(true);
                  setIsCleaning(false);
                }}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                  activeDataset === "expense"
                    ? "bg-sky-500 text-slate-950 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileSpreadsheet className="h-3.5 w-3.5" />
                Data Pengeluaran Logistik
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            
            {/* Raw Input Data Panel */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card Dirty Data */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-red-500" />
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-red-400">Inconsistent & Dirty</span>
                    <h3 className="text-base font-bold text-slate-200 mt-1">{dataset.name}</h3>
                  </div>
                  <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[9px] font-mono text-red-400 border border-red-500/20">
                    Input Mentah
                  </span>
                </div>
                
                <p className="text-xs text-slate-400 mb-4 italic">
                  "{dataset.description}"
                </p>

                {/* Table simulation of dirty records */}
                <div className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950/80">
                  <table className="w-full text-left text-[11px] font-mono">
                    <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 uppercase font-semibold">
                      <tr>
                        <th className="p-2.5">ID</th>
                        <th className="p-2.5">Tanggal</th>
                        <th className="p-2.5">Kategori</th>
                        <th className="p-2.5">Item Barang/Biaya</th>
                        <th className="p-2.5 text-right">Nilai Rupiah</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-900 text-slate-300">
                      {dataset.dirty.map((row, idx) => (
                        <tr
                          key={row.id + idx}
                          className={`${
                            row.status === "Refund" || row.nilai === "NULL" || row.nilai === "TIDAK_TERCATAT" || row.kategori === "n/a"
                              ? "bg-red-950/15 text-red-300 font-bold"
                              : idx === 1
                              ? "bg-amber-950/15 text-amber-300"
                              : ""
                          }`}
                        >
                          <td className="p-2.5 text-slate-500">{row.id}</td>
                          <td className="p-2.5 whitespace-nowrap">{row.tanggal}</td>
                          <td className="p-2.5">
                            {row.kategori === "n/a" ? (
                              <span className="bg-red-950 px-1.5 py-0.2 rounded text-red-500 border border-red-800/30">n/a</span>
                            ) : (
                              row.kategori
                            )}
                          </td>
                          <td className="p-2.5 max-w-[120px] truncate">{row.item}</td>
                          <td className="p-2.5 text-right font-semibold">
                            {row.nilai === "NULL" || row.nilai === "TIDAK_TERCATAT" ? (
                              <span className="text-rose-500 bg-rose-500/10 px-1 py-0.1 border border-rose-500/20 rounded">Err</span>
                            ) : (
                              row.nilai
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex gap-1.5 items-center bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[10px] text-slate-400 font-mono">
                  <AlertCircle className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>Anomali: Duplikasi entri terdeteksi, format tanggal berantakan, data kosong, klasifikasi salah ketik.</span>
                </div>
              </div>

              {/* Action Simulation Trigger */}
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-indigo-950/40 p-5 shadow-inner">
                <h4 className="text-xs font-bold text-slate-200">Ingin melihat proses data analyst kami menyelesaikannya?</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Python Script akan menjalankan algoritma otomatisasi pembersihan pada library Pandas.
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={restartSimulation}
                    disabled={isCleaning}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold py-3 text-xs transition-all tracking-wide shadow-md shadow-sky-500/10"
                  >
                    <Play className="h-3.5 w-3.5" />
                    {isCleaning ? "Sedang Memproses..." : "Bersihkan Data & Dashboard"}
                  </button>
                  <button
                    onClick={() => {
                      setIsCleaned(false);
                      setSimulationLogs(["[INFO] Manual Reset: Kembalikan kondisi data mentah asli"]);
                    }}
                    className="px-3 py-3 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white"
                    title="Reset ke Data Kotor"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Progress bar */}
                {isCleaning && (
                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-indigo-400">
                      <span>Proses Algoritma Pembersihan</span>
                      <span>{cleaningProgress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-500 transition-all duration-300" style={{ width: `${cleaningProgress}%` }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Console Logs Terminal output */}
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-[11px] leading-relaxed relative">
                <span className="absolute top-2 right-3 text-[9px] uppercase text-slate-600 font-bold tracking-widest">Wrangling Output</span>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 border-b border-slate-900 pb-2 mb-2">
                  <Terminal className="h-3.5 w-3.5 text-sky-400" />
                  <span>terminal_script.py</span>
                </div>
                <div className="space-y-1 h-32 overflow-y-auto font-mono text-slate-300">
                  {simulationLogs.length === 0 ? (
                    <span className="text-slate-500 italic">Tekan tombol di atas untuk memproses pipeline pembersihan data...</span>
                  ) : (
                    simulationLogs.map((log, index) => {
                      let color = "text-sky-400";
                      if (log.includes("[ERROR]")) color = "text-red-400";
                      else if (log.includes("[SUCCESS]")) color = "text-emerald-400 font-bold";
                      else if (log.includes("[STATS]")) color = "text-amber-400";
                      else if (log.includes("[WRANGLING]")) color = "text-slate-300 pl-2 border-l border-indigo-500/20";
                      return (
                        <div key={index} className={color}>
                          {log}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

            </div>

            {/* Clean Resulting Dashboard Panel */}
            <div className="lg:col-span-7">
              {!isCleaned && !isCleaning ? (
                /* Overlay prompting cleaning action */
                <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/20 p-12 text-center h-[550px] flex flex-col justify-center items-center">
                  <div className="h-14 w-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-4 animate-pulse">
                    <ArrowRightLeft className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-200">Dashboard Visualisasi Kosong</h3>
                  <p className="text-xs text-slate-400 max-w-sm mt-2 leading-relaxed">
                    Data analyst kami melarang penayangan visualisasi dari data kotor karena akan mendistorsi grafik metrik (KPI). Silakan tekan tombol <strong>"Bersihkan Data & Dashboard"</strong> terlebih dahulu.
                  </p>
                </div>
              ) : (
                /* Dynamic Premium Dashboard Render */
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl relative overflow-hidden transition-all duration-500">
                  <div className="absolute top-0 left-0 h-1 w-full bg-emerald-500" />
                  
                  {/* Dashboard Header toolbar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                        <span className="text-[10px] tracking-widest font-mono uppercase font-bold text-emerald-400">Corporate Executive Dashboard</span>
                      </div>
                      <h3 className="text-base font-bold text-white mt-1">
                        Sistem Penyelarangan Visualisasi BI — {activeDataset === "sales" ? "Laporan Omset Penjualan" : "Laporan Pengeluaran Operasional"}
                      </h3>
                    </div>
                    <span className="rounded bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400 whitespace-nowrap self-start sm:self-center font-mono">
                      100% Bersih & Valid
                    </span>
                  </div>

                  {/* Summary Metric KPI Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Volume Transaksi</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl font-bold text-white">
                          {activeDataset === "sales" ? "6 Baris" : "5 Baris"}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-bold">-1 Redundant</span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">
                        {activeDataset === "sales" ? "Total Estimasi Omset" : "Total Biaya Keluar"}
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl font-bold text-white text-glow">
                          {activeDataset === "sales" ? "Rp 2.22 Jt" : "Rp 11.37 Jt"}
                        </span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">
                        {activeDataset === "sales" ? "Net Profit Margin" : "Batas Efisiensi Ops"}
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl font-bold text-emerald-400">
                          {activeDataset === "sales" ? "Rp 906 Rb" : "100% Selaras"}
                        </span>
                        <span className="text-[10px] text-slate-400">({activeDataset === "sales" ? "40.8%" : "Pantry OK"})</span>
                      </div>
                    </div>
                  </div>

                  {/* Recharts Visual Layout Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Graph 1: Bar Category Share */}
                    <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-sans mb-4">
                        Proporsi Nilai per Kategori
                      </h4>
                      <div className="h-56">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={dataset.charts.categoryData}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={75}
                              paddingAngle={4}
                              dataKey="value"
                            >
                              {dataset.charts.categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                background: theme === "light" ? "#ffffff" : "#0f172a",
                                border: `1px solid ${theme === "light" ? "#cbd5e1" : "#334155"}`,
                                color: theme === "light" ? "#0f172a" : "#cbd5e1"
                              }}
                              itemStyle={{ color: theme === "light" ? "#0f172a" : "#cbd5e1" }}
                              labelStyle={{ color: theme === "light" ? "#0f172a" : "#cbd5e1" }}
                              formatter={(val: any) => [`Rp ${val.toLocaleString("id-ID")}`, "Total"]}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      
                      {/* Custom Legend */}
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2 justify-center text-[10px]">
                        {dataset.charts.categoryData.map((item, idx) => (
                          <div key={item.name} className="flex items-center gap-1">
                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                            <span className="text-slate-400 font-mono">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Graph 2: Periodic Trend Area Chart */}
                    <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-sans mb-4">
                        {activeDataset === "sales" ? "Grafik Fluktuasi Pendapatan" : "Pengeluaran Berdasarkan Minggu"}
                      </h4>
                      <div className="h-56">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={dataset.charts.monthlyData}>
                            <defs>
                              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke={theme === "light" ? "#cbd5e1" : "#1e293b"} />
                            <XAxis dataKey="month" stroke={theme === "light" ? "#475569" : "#64748b"} fontSize={10} tickLine={false} />
                            <YAxis stroke={theme === "light" ? "#475569" : "#64748b"} fontSize={10} tickLine={false} />
                            <Tooltip
                              contentStyle={{
                                background: theme === "light" ? "#ffffff" : "#0f172a",
                                border: `1px solid ${theme === "light" ? "#cbd5e1" : "#334155"}`,
                                color: theme === "light" ? "#0f172a" : "#cbd5e1"
                              }}
                              itemStyle={{ color: theme === "light" ? "#0f172a" : "#cbd5e1" }}
                              labelStyle={{ color: theme === "light" ? "#0f172a" : "#cbd5e1" }}
                              formatter={(val: any) => [`Rp ${val.toLocaleString("id-ID")}`, "Nilai"]}
                            />
                            <Area type="monotone" dataKey="nilai" stroke="#38bdf8" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-[9px] text-slate-500 font-mono">Diolah secara instan menggunakan standardisasi visual modern BI tools Kami</span>
                      </div>
                    </div>

                  </div>

                  {/* Clean Logs and Source File Delivery Notice */}
                  <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                    <span className="text-[10px] text-emerald-400 font-bold uppercase block tracking-wider mb-2">Penyelesaian Analisis</span>
                    <ul className="text-xs text-slate-300 space-y-1.5 pl-4 list-disc">
                      <li><strong>Duplikasi Dipecahkan</strong>: Berhasil mengonsolidasi baris ganda transaksi sehingga data tidak terhitung dua kali lipat.</li>
                      <li><strong>Automasi visualisasi</strong>: Data kini dinamis dan langsung terhubung secara live ke kalkulasi KPI eksekutif pembuat keputusan cepat.</li>
                      <li><strong>Source File & Dokumentasi lengkap</strong> diserahkan dalam penyerahan akhir proyek (NDA Friendly).</li>
                    </ul>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES & REAL-TIME INDUSTRY TOOLS SECTION */}
      <section id="tools" className="bg-slate-900/40 border-y border-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase text-sky-400">Standardisasi Kelas Dunia</span>
            <h2 className="mt-2 text-3xl font-sans font-extrabold text-white">
              Keahlian Data Analyst & Tools Visualisasi Data Kami
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-sans">
              Layanan jasa analisis data kami dikerjakan langsung oleh data analyst profesional yang secara mendalam menguasai perangkat lunak terbaik di industri:
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
      <section id="workflow" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase text-sky-400">Professional Pipeline</span>
            <h2 className="mt-2 text-3xl font-sans font-extrabold text-white">
              Alur Kerja Jasa Analisis Data Kami
            </h2>
            <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full" />
            <p className="mt-4 text-sm text-slate-400 font-sans">
              Kami bekerja secara bertahap dan teratur untuk menjaga transparansi dan kualitas visualisasi demi menjamin kepuasan klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase bg-sky-500/10 px-2 py-0.5 rounded text-sky-400 font-extrabold">Tahap 01</span>
                <h3 className="text-base font-bold text-white mt-3 font-sans">Konsultasi Data Analyst</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 font-sans">
                  Diskusi komprehensif mengenai kondisi data mentah Anda saat ini, tantangan bisnis, sasaran metrik KPI utama, dan visualisasi format dashboard pilihan (dilindungi garansi <strong>NDA Friendly</strong> untuk kerahasiaan data).
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-500 border-t border-slate-800/60 pt-3">
                Diskusi Awal Gratis • 100% Rahasia
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase bg-sky-500/10 px-2 py-0.5 rounded text-sky-400 font-extrabold">Tahap 02</span>
                <h3 className="text-base font-bold text-white mt-3 font-sans">Scope of Work (SoW)</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 font-sans">
                  Penyusunan batas lingkup kerja detail. Termasuk penentuan kesepakatan target analisis data, sketsa rancangan visualisasi data, variabel KPI yang dituju, dan estimasi waktu pengerjaan.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-500 border-t border-slate-800/60 pt-3">
                Dokumen SOW Transparan • Timeline Jelas
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase bg-sky-500/10 px-2 py-0.5 rounded text-sky-400 font-extrabold">Tahap 03</span>
                <h3 className="text-base font-bold text-white mt-3 font-sans">Eksekusi Analisis Data</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 font-sans">
                  Tahap pengerjaan intensif: pembersihan log kotor (data cleaning), transformasi format tanggal & angka, analisis pola statistik, hingga perancangan akhir dashboard interaktif.
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-500 border-t border-slate-800/60 pt-3">
                Pengerjaan oleh Ahli Sertifikat Global
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-400 font-extrabold">Tahap 04</span>
                <h3 className="text-base font-bold text-white mt-3 font-sans">Review Dashboard & Serah Sumber</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 font-sans">
                  Sesi demonstrasi dashboard (revisi diakomodasi), penyerahan seluruh berkas aset akhir (<strong>Source File</strong> asli, File Dashboard, dan Laporan Analisis komprehensif pendukung).
                </p>
              </div>
              <div className="mt-6 text-[10px] text-slate-550 border-t border-slate-800/60 pt-3 flex items-center justify-between">
                <span>100% Hak Milik Client</span>
                <span className="font-bold text-emerald-400 font-mono">Selesai ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE INTEGRATION: DYNAMIC REAL CHATBOT INTERACTIVE CONSULTATION */}
      <section id="consultant" className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-sky-400">
              <Bot className="h-4 w-4" /> AI Powered Workspace
            </span>
            <h2 className="mt-2 font-sans text-3xl font-extrabold text-white">
              Konsultasi Instan dengan AI Data Analyst Berlisensi kami
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-sans">
              Ajukan deskripsi masalah data bisnis Anda di panel chat pintar di bawah ini. Sistem cerdas pendukung Worksense Analytics kami akan merespons dengan saran praktis.
            </p>
          </div>

          {/* Interactive Chat Widget Container */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
            
            {/* Left sidebar: industrial inputs */}
            <div className="md:col-span-4 bg-slate-900/80 border-r border-slate-800 p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex items-center gap-2">
                  <Sliders className="h-4 w-4 text-sky-400" />
                  Kustomisasi Sektor
                </h3>

                <div className="space-y-4">
                  {/* Field 1: Industry Type */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Jenis Bisnis / Industri</label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500 font-sans"
                    >
                      <option value="UMKM / Retail Tradisional">UMKM / Retail Tradisional</option>
                      <option value="Startup / Tech Company">Startup / Tech Company</option>
                      <option value="Enterprise / Korporasi Skala Besar">Enterprise / Korporasi Skala Besar</option>
                      <option value="F&B / Kuliner Berkembang">F&B / Kuliner Berkembang</option>
                      <option value="Hospitality & Jasa Layanan">Hospitality & Jasa Layanan</option>
                    </select>
                  </div>

                  {/* Field 2: Raw data format */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Format / Sumber Data Utama</label>
                    <select
                      value={dataType}
                      onChange={(e) => setDataType(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500 font-sans"
                    >
                      <option value="Excel / Google Sheets">Excel / Google Sheets (.xlsx, .csv)</option>
                      <option value="Database SQL / Postgres / MySQL">Database SQL (Postgres, MySQL, BigQuery)</option>
                      <option value="Format PDF / Catatan Kasir Manual">Format PDF / Buku Kasir Manual</option>
                      <option value="Banyak Platform terpisah (Mix e-commerce)">Banyak Platform terisah (Mix e-commerce)</option>
                    </select>
                  </div>
                </div>

                {/* Team certification summary highlight */}
                <div className="mt-6 rounded-xl bg-slate-950/80 border border-slate-800/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <Award className="h-4 w-4 text-emerald-400" />
                    <span>Worksense Competency</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                    Jawaban chat divalidasi berdasarkan portofolio tim kami yang memiliki sertifikasi global dari Google, IBM, dan DataCamp.
                  </p>
                </div>
              </div>

              {/* Instant support CTA below chatbot tools */}
              <div className="mt-8 pt-4 border-t border-slate-800">
                <a
                  href="https://fastwork.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-sky-500 py-3 text-xs font-bold text-slate-950 transition-all hover:bg-sky-400"
                >
                  <MessageSquare className="h-4 w-4" />
                  Fastwork Chat Staff Manual
                </a>
              </div>
            </div>

            {/* Right Chat panel */}
            <div className="md:col-span-8 flex flex-col h-[480px]">
              
              {/* Chat panel header */}
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="h-8 w-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400 font-bold">
                      <Bot className="h-4.5 w-4.5" />
                    </div>
                    <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 border border-slate-950" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 block">Worksense Virtual Assistant</span>
                    <span className="text-[9px] text-slate-500 font-mono block">Powered by Gemini AI (Server-Side)</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                  <Clock className="h-3 w-3 text-sky-400" />
                  <span>Respon Cepat</span>
                </div>
              </div>

              {/* Chat Messages flow scrollarea */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-slate-950">
                {chatMessages.map((msg) => {
                  const isUser = msg.role === "user";
                  return (
                    <div
                      key={msg.id}
                      className={`flex gap-3 max-w-[85%] ${isUser ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                    >
                      <div className={`h-7 w-7 rounded-full shrink-0 flex items-center justify-center border font-semibold text-xs ${
                        isUser
                          ? "bg-sky-500 text-slate-950 border-sky-400"
                          : "bg-slate-900 text-sky-400 border-slate-800"
                      }`}>
                        {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                      </div>
                      
                      <div className={`rounded-xl px-3.5 py-2 text-xs leading-relaxed ${
                        isUser
                          ? "bg-slate-900 text-slate-100 border border-slate-800"
                          : "bg-slate-900/60 text-slate-300 border border-slate-800/40"
                      }`}>
                        {/* Text formatting implementation (basic bolder list support for premium outputs) */}
                        <div className="whitespace-pre-wrap space-y-1">
                          {msg.text.split("\n").map((line, lIdx) => {
                            // Support bold tags basic replacements
                            let parsedLine: React.ReactNode = line;
                            if (line.includes("**")) {
                              const fragments = line.split("**");
                              parsedLine = fragments.map((frag, fIdx) => 
                                fIdx % 2 === 1 ? <strong key={fIdx} className="text-white font-bold">{frag}</strong> : frag
                              );
                            }
                            return <div key={lIdx}>{parsedLine}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Loader for response generation */}
                {isChatLoading && (
                  <div className="flex gap-3 mr-auto max-w-[80%]">
                    <div className="h-7 w-7 rounded-full shrink-0 flex items-center justify-center bg-slate-900 border border-slate-850 text-sky-400">
                      <Bot className="h-3.5 w-3.5 spin-slow" />
                    </div>
                    <div className="rounded-xl px-3.5 py-2.5 text-xs bg-slate-900/60 text-slate-400 border border-slate-800/40 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-bounce" />
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                      <span className="ml-1 text-[10px] text-slate-500 font-mono">AI sedang menyusun saran taktis...</span>
                    </div>
                  </div>
                )}
                
                <div ref={chatBottomRef} />
              </div>

              {/* Chat Form input elements */}
              <form onSubmit={handleSendPrompt} className="bg-slate-900 border-t border-slate-800 p-3 flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ketik deskripsi masalah atau pertanyaan analisis data Anda..."
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 font-sans"
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim() || isChatLoading}
                  className="rounded-xl bg-sky-500 hover:bg-sky-400 hover:scale-105 disabled:bg-slate-800 disabled:text-slate-600 disabled:scale-100 text-slate-950 font-bold px-4 py-2.5 text-xs transition-all flex items-center justify-center shrink-0"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>

            </div>

          </div>
        </div>
      </section>

      {/* FINAL CONCLUDING TRUST & FASTWORK OUTREACH CALL-TO-ACTION */}
      <section className="bg-slate-950 py-24 border-t border-slate-900 relative">
        <div className="absolute top-1/2 left-1/2 -ml-[300px] -mt-[300px] h-[600px] w-[600px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-3.5 py-1 text-xs font-semibold text-sky-400 uppercase tracking-widest font-mono">
            Fastwork Verified Professional Seller
          </span>

          <h2 className="mt-6 font-sans text-3xl font-extrabold text-white sm:text-5xl leading-tight">
            Pesan Jasa Analisis Data Sekarang!
          </h2>

          <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans">
            Jangan biarkan data bisnis berharga Anda terbuang sia-sia dan mengendap tanpa arti. Setiap keputusan logistik dan penjualan memerlukan analisis data yang matang dan akurat. 
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-450 leading-relaxed max-w-2xl mx-auto font-sans text-slate-400">
            Silakan hubungi tim data analyst kami via <strong>CHAT Fastwork</strong> sekarang sebelum meluncurkan pesanan! Mari berdiskusi agar data analyst bersertifikat global kami memberikan rancangan solusi visual terbaik yang mendongkrak margin keuntungan operasional Anda.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              id="conclude-fastwork-cta"
              href="https://fastwork.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 w-full rounded-xl bg-sky-500 hover:bg-sky-400 px-8 py-4 text-sm font-bold text-slate-900 shadow-xl shadow-sky-500/20 transition-all hover:scale-105"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              Chat Fastwork Sekarang
            </a>
            
            <a
              href="#simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-4 text-sm font-bold text-slate-300 hover:text-white hover:border-slate-500 transition-all"
            >
              <span>Uji Coba Data Simulator</span>
            </a>
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
            © 2026 Worksense Analytics. Seluruh hak cipta dilindungi undang-undang. Jasa Visualisasi Data, Excel VBA Otomatisasi, dan Dashboard Business Intelligence Profesional (Power BI & Tableau Specialist).
          </p>
        </div>
      </footer>
    </div>
  );
}
