import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  BrainCircuit, 
  Zap, 
  Network, 
  Presentation, 
  Crown,
  GraduationCap,
  ChevronLeft,
  Search,
  X,
  Server
} from 'lucide-react';
import { useLanguage } from '../i18n';

export default function ServicesOverview() {
  const { t } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 850) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: "jasa-analisis",
      icon: <BarChart3 className="h-5 w-5 text-sky-400" />,
      title: t('overview.s1'),
      desc: t('overview.s1_desc'),
      borderColor: "border-sky-500/30",
      hoverBg: "hover:bg-sky-500/10",
      textColor: "text-sky-400"
    },
    {
      id: "jasa-otomatisasi-excel",
      icon: <Zap className="h-5 w-5 text-amber-400" />,
      title: t('overview.s3'),
      desc: t('overview.s3_desc'),
      borderColor: "border-amber-500/30",
      hoverBg: "hover:bg-amber-500/10",
      textColor: "text-amber-400"
    },
    {
      id: "jasa-reporting",
      icon: <Presentation className="h-5 w-5 text-rose-400" />,
      title: t('overview.s5'),
      desc: t('overview.s5_desc'),
      borderColor: "border-rose-500/30",
      hoverBg: "hover:bg-rose-500/10",
      textColor: "text-rose-400"
    },
    {
      id: "jasa-machine-learning",
      icon: <BrainCircuit className="h-5 w-5 text-emerald-400" />,
      title: t('overview.s2'),
      desc: t('overview.s2_desc'),
      borderColor: "border-emerald-500/30",
      hoverBg: "hover:bg-emerald-500/10",
      textColor: "text-emerald-400"
    },
    {
      id: "jasa-deep-learning",
      icon: <Network className="h-5 w-5 text-fuchsia-400" />,
      title: t('overview.s4'),
      desc: t('overview.s4_desc'),
      borderColor: "border-fuchsia-500/30",
      hoverBg: "hover:bg-fuchsia-500/10",
      textColor: "text-fuchsia-400"
    },
    {
      id: "jasa-mlops",
      icon: <Server className="h-5 w-5 text-teal-400" />,
      title: t('overview.s8'),
      desc: t('overview.s8_desc'),
      borderColor: "border-teal-500/30",
      hoverBg: "hover:bg-teal-500/10",
      textColor: "text-teal-400"
    },
    {
      id: "jasa-enterprise",
      icon: <Crown className="h-5 w-5 text-yellow-400" />,
      title: t('overview.s6'),
      desc: t('overview.s6_desc'),
      borderColor: "border-yellow-500/30",
      hoverBg: "hover:bg-yellow-500/10",
      textColor: "text-yellow-400"
    },
    {
      id: "jasa-personal",
      icon: <GraduationCap className="h-5 w-5 text-indigo-400" />,
      title: t('overview.s7'),
      desc: t('overview.s7_desc'),
      borderColor: "border-indigo-500/30",
      hoverBg: "hover:bg-indigo-500/10",
      textColor: "text-indigo-400"
    }
  ];

  const filteredServices = services.filter(svc => 
    svc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    svc.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsSideNavOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* SERVICE CARDS GRID */}
      <section className="bg-slate-950 py-16 border-t border-slate-800 relative z-20" id="katalog-layanan">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-emerald-400 font-mono text-xs font-bold tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">{t('overview.badge')}</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white font-sans tracking-tight">{t('overview.title')}</h2>
            <p className="mt-3 text-sm md:text-base text-slate-400 max-w-2xl mx-auto">{t('overview.subtitle')}</p>
          </div>

          <div className="max-w-xl mx-auto mb-10 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('overview.search_placeholder')}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-sans text-slate-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 shadow-inner transition-all placeholder:text-slate-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                aria-label="Tutup pencarian"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-slate-800 rounded-3xl bg-slate-900/20">
              <p className="text-slate-400 font-sans text-sm">{t('overview.search_empty')} "<strong>{searchQuery}</strong>".</p>
              <button onClick={() => setSearchQuery('')} className="mt-4 text-emerald-400 hover:text-emerald-300 text-xs font-bold tracking-wide uppercase transition-colors">{t('overview.search_reset')}</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((svc) => (
                <a 
                  href={`#${svc.id}`}
                  key={svc.id}
                  onClick={(e) => scrollTo(svc.id, e)}
                  className={`text-left rounded-xl border border-slate-800 bg-slate-900/40 p-5 md:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 ${svc.hoverBg} group shadow-lg block`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-lg bg-slate-800/80 group-hover:bg-slate-950 transition-colors ${svc.borderColor} border`}>
                      {svc.icon}
                    </div>
                    <h3 className={`font-bold text-slate-100 group-hover:${svc.textColor} transition-colors tracking-tight text-sm md:text-base`}>{svc.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans mt-2">{svc.desc}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SIDE NAVIGATION BAR */}
      <div 
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 flex items-center ${isSticky ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
      >
        {/* Handle */}
        <button 
          onClick={() => setIsSideNavOpen(true)}
          className={`bg-slate-900 border border-slate-700 border-r-0 rounded-l-xl py-6 px-2.5 cursor-pointer shadow-xl flex flex-col items-center justify-center gap-3 transition-opacity duration-300 pointer-events-auto hover:bg-slate-800 ${isSideNavOpen ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0'}`}
        >
          <ChevronLeft className="h-5 w-5 text-slate-400" />
          <span className="text-slate-300 text-xs font-mono font-bold tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Layanan</span>
        </button>

        {/* Panel */}
        <div className={`absolute right-0 bg-slate-950/98 backdrop-blur-md border border-slate-700 shadow-2xl rounded-l-2xl p-4 flex flex-col gap-1 transition-transform duration-300 pointer-events-auto w-64 md:w-auto ${isSideNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-2 px-1 border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              {t("nav.services")}
            </span>
            <button 
              onClick={() => setIsSideNavOpen(false)}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-rose-500/20 hover:text-rose-400 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          {services.map((svc) => (
            <a
              href={`#${svc.id}`}
              key={`sticky-${svc.id}`}
              onClick={(e) => scrollTo(svc.id, e)}
              className={`flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800 transition-all group`}
            >
              <div className={`opacity-70 group-hover:opacity-100 group-hover:${svc.textColor} transition-all`}>
                {svc.icon}
              </div>
              <span className="whitespace-normal sm:whitespace-nowrap leading-tight">{svc.title}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
