/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export default function TrustedPartners() {
  return (
    <section className="bg-slate-900/60 border-y border-slate-800/80 py-8 lg:py-12 relative overflow-hidden">
      {/* Subtle blueprint decorative background network mesh */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block tracking-[0.15em] font-mono font-black text-xs text-slate-400 uppercase bg-slate-950/20 border border-slate-800 px-4 py-1.5 rounded-full select-none">
            TRUSTED PARTNERS:
          </span>
        </div>

        {/* Brand Logos responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto items-center py-4">
          
          {/* Logo 1: Pertamina */}
          <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-350 select-none">
            <img
              src="/Pertamina_Logo.svg"
              alt="Pertamina"
              className="max-h-8 max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Logo 2: Bank Indonesia */}
          <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-350 select-none">
            <img
              src="/BI_Logo.png"
              alt="Bank Indonesia"
              className="max-h-8 max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Logo 3: BCA */}
          <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-350 select-none">
            <img
              src="/Bank_Central_Asia.svg.png"
              alt="BCA"
              className="max-h-8 max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Logo 4: BMKG */}
          <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-350 select-none">
            <img
              src="/Logo_BMKG_(2010).png"
              alt="BMKG"
              className="max-h-10 max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Logo 5: Kemenkeu */}
          <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-350 select-none">
            <img
              src="/kemenkeu.png"
              alt="Kementerian Keuangan"
              className="max-h-9 max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Logo 6: Unilever */}
          <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-350 select-none">
            <img
              src="/Unilever.png"
              alt="Unilever"
              className="max-h-10 max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
