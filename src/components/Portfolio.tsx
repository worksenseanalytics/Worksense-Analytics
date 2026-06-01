import React from 'react';
import { useLanguage } from '../i18n';
import { BriefcaseBusiness, BarChart4, BrainCircuit, FileSpreadsheet, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const { t } = useLanguage();

  const portfolioItems = [
    {
      id: 1,
      title: t('port.item1.title'),
      desc: t('port.item1.desc'),
      tag: t('port.item1.tag'),
      icon: <BarChart4 className="w-8 h-8 text-sky-400" />,
      bgGradient: "from-sky-900/50 to-sky-950/20",
      borderColor: "border-sky-800/50",
    },
    {
      id: 2,
      title: t('port.item2.title'),
      desc: t('port.item2.desc'),
      tag: t('port.item2.tag'),
      icon: <BrainCircuit className="w-8 h-8 text-emerald-400" />,
      bgGradient: "from-emerald-900/50 to-emerald-950/20",
      borderColor: "border-emerald-800/50",
    },
    {
      id: 3,
      title: t('port.item3.title'),
      desc: t('port.item3.desc'),
      tag: t('port.item3.tag'),
      icon: <FileSpreadsheet className="w-8 h-8 text-amber-400" />,
      bgGradient: "from-amber-900/50 to-amber-950/20",
      borderColor: "border-amber-800/50",
    },
    {
      id: 4,
      title: t('port.item4.title'),
      desc: t('port.item4.desc'),
      tag: t('port.item4.tag'),
      icon: <GraduationCap className="w-8 h-8 text-indigo-400" />,
      bgGradient: "from-indigo-900/50 to-indigo-950/20",
      borderColor: "border-indigo-800/50",
    }
  ];

  return (
    <section id="portofolio" className="relative py-24 bg-slate-950/50 border-t border-slate-900 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-6">
            <BriefcaseBusiness className="h-4 w-4" />
            {t('port.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
            {t('port.title')}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-400">
            {t('port.subtitle')}
          </p>
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-900/60 rounded-xl shadow-inner border border-slate-700/50 group-hover:bg-slate-900 transition-colors">
                    {item.icon}
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-bold uppercase tracking-wider text-slate-300 shadow-sm">
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
