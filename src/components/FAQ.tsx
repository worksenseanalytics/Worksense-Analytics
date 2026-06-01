import React, { useState } from 'react';
import { useLanguage } from '../i18n';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [1, 2, 3, 4];

  return (
    <section id="faq" className="bg-slate-900/40 py-16 md:py-24 border-t border-slate-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-sky-400 border border-sky-500/20 mb-5">
            <HelpCircle className="h-3.5 w-3.5" />
            {t('faq.badge')}
          </span>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t('faq.title')}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t('faq.desc')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((num, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={num} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-sky-500/50 bg-slate-800/80 shadow-lg shadow-sky-900/20' : 'border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 hover:border-slate-600'
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(i)}
                >
                  <span className={`font-semibold text-sm sm:text-base pr-8 ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                    {t(`faq.${num}.q`)}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-700 text-slate-400'}`}>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div 
                  className={`px-6 pb-6 text-sm text-slate-400 leading-relaxed transition-all duration-300 grid ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
                >
                  <div className="overflow-hidden">
                    {t(`faq.${num}.a`)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
