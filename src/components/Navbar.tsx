/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Award, MessageSquare, Menu, X, CheckCircle, Sun, Moon } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Brand Brand Section */}
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-11 md:h-13 md:w-13" />
            <div>
              <span className="font-sans text-lg font-bold tracking-tight text-white">
                Worksense<span className="text-sky-400"> Analytics</span>
              </span>
              <div className="flex gap-1.5 items-center mt-0.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Data Specialist Team</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Segmen Jasa
            </a>
            <a href="#simulator" className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1">
              Data Simulator
              <span className="rounded-full bg-sky-500/10 px-1.5 py-0.5 text-[9px] text-sky-400 font-mono font-bold">LIVE</span>
            </a>
            <a href="#tools" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Keahlian & Tools
            </a>
            <a href="#workflow" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Alur Kerja
            </a>
            <a href="#consultant" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Konsultasi AI
            </a>
          </div>

          {/* Call to Action Fastwork Link & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-200 border border-slate-700/50 flex items-center justify-center cursor-pointer shadow-sm"
              title={theme === "dark" ? "Aktifkan Mode Cerah" : "Aktifkan Mode Gelap"}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-sky-500" />
              )}
            </button>

            <a
              id="nav-fastwork-cta"
              href="https://fastwork.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 px-4 py-2 text-xs font-semibold text-slate-900 shadow-md shadow-sky-500/15 transition-all hover:scale-105"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Chat di Fastwork
            </a>
          </div>

          {/* Mobile responsive toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Segmen Jasa
          </a>
          <a
            href="#simulator"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white flex justify-between items-center"
          >
            <span>Live Data Simulator</span>
            <span className="rounded bg-sky-500/15 px-1.5 py-0.2 text-[10px] text-sky-400 font-mono">LIVE</span>
          </a>
          <a
            href="#tools"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Keahlian & Tools
          </a>
          <a
            href="#workflow"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Alur Kerja
          </a>
          <a
            href="#consultant"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Konsultasi AI Data Analyst
          </a>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between px-3">
              <span className="text-sm font-medium text-slate-400 flex items-center gap-2">
                {theme === "dark" ? <Moon className="h-4 w-4 text-sky-400" /> : <Sun className="h-4 w-4 text-amber-500" />}
                {theme === "dark" ? "Mode Gelap" : "Mode Cerah"}
              </span>
              <button
                onClick={toggleTheme}
                className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition"
              >
                Ubah ke {theme === "dark" ? "Cerah" : "Gelap"}
              </button>
            </div>

            <a
              href="https://fastwork.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 py-3 text-sm font-semibold text-slate-900 font-sans"
            >
              <MessageSquare className="h-4 w-4" />
              Hubungi via Fastwork Chat
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
