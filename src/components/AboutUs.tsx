import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'motion/react';
import { Users, Shield, Award, Sparkles, Star, TrendingUp, CheckCircle } from 'lucide-react';

export default function AboutUs() {
  const { t } = useLanguage();

  // Animasi container stagering untuk elemen di dalamnya
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const values = [
    {
      id: 1,
      icon: <Sparkles className="h-5 w-5 text-sky-400 group-hover:text-sky-300 transition-colors" />,
      title_key: 'about.val1.title',
      desc_key: 'about.val1.desc',
      accentColor: 'from-sky-500/10 to-sky-500/5 hover:border-sky-500/30'
    },
    {
      id: 2,
      icon: <Shield className="h-5 w-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
      title_key: 'about.val2.title',
      desc_key: 'about.val2.desc',
      accentColor: 'from-emerald-500/10 to-emerald-500/5 hover:border-emerald-500/30'
    },
    {
      id: 3,
      icon: <Award className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />,
      title_key: 'about.val3.title',
      desc_key: 'about.val3.desc',
      accentColor: 'from-indigo-500/10 to-indigo-500/5 hover:border-indigo-500/30'
    }
  ];

  const highlights = [
    { value_key: 'about.met1.val', label_key: 'about.met1.lbl', sub: '100% Reliable' },
    { value_key: 'about.met2.val', label_key: 'about.met2.lbl', sub: 'Calculated Metric' },
    { value_key: 'about.met3.val', label_key: 'about.met3.lbl', rating: true },
    { value_key: 'about.met4.val', label_key: 'about.met4.lbl', sub: 'Growing Network' }
  ];

  return (
    <section id="about" className="bg-slate-950 py-20 lg:py-28 border-t border-slate-900 relative overflow-hidden">
      {/* Ornamen Latar Belakang Geometrik Blueprint */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-about)" />
        </svg>
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* KOLOM KIRI: Tajuk Utama & Narasi Filosofis */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3.5 py-1 text-xs font-mono font-extrabold tracking-wider text-sky-400 border border-sky-500/20 shadow-sm mb-4">
                <Users className="h-3.5 w-3.5" />
                {t('about.badge')}
              </span>
              <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                {t('about.title')}
              </h2>
              <p className="mt-3 text-lg font-medium text-sky-400 font-sans tracking-wide">
                {t('about.subtitle')}
              </p>
            </motion.div>

            <motion.div 
              className="space-y-5 text-slate-300 font-sans text-sm sm:text-base leading-relaxed text-justify"
              variants={itemVariants}
            >
              <p>{t('about.desc1')}</p>
              <p>{t('about.desc2')}</p>
            </motion.div>

            {/* Grid Pilar Nilai Utama */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
              variants={itemVariants}
            >
              {values.map((val) => (
                <div 
                  key={val.id} 
                  className={`group rounded-xl border border-slate-800/80 bg-gradient-to-b ${val.accentColor} p-5 transition-all duration-300 hover:scale-[1.02] shadow-md`}
                >
                  <div className="p-2 rounded-lg bg-slate-900/80 w-fit mb-3 border border-slate-800 group-hover:bg-slate-950 transition-colors">
                    {val.icon}
                  </div>
                  <h4 className="font-sans text-sm font-bold text-slate-100 group-hover:text-sky-400 transition-colors duration-300 mb-1">
                    {t(val.title_key)}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed text-left">
                    {t(val.desc_key)}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* KOLOM KANAN: Statistik Interaktif & Visual Branding */}
          <div className="lg:col-span-5 space-y-6 lg:mt-8">
            {/* Visual Dashboard Mockup Card */}
            <motion.div 
              className="relative p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group hover:border-slate-700 transition-colors"
              variants={itemVariants}
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-850 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* Grid 4 Metrik Keberhasilan */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:bg-slate-950/60 transition-all text-center relative"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
                      {t(h.value_key)}
                      {h.rating && <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" />}
                    </div>
                    <div className="text-[10px] font-sans font-bold text-slate-400 mt-1 uppercase tracking-wider">
                      {t(h.label_key)}
                    </div>
                    {h.sub && (
                      <div className="text-[8px] font-mono text-slate-600 mt-0.5">
                        {h.sub}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Status footer kecil yang humbel */}
              <div className="mt-5 pt-4 border-t border-slate-850 flex items-center justify-between text-[9px] font-mono text-slate-500/80">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified on Upwork, Fastwork, & Fiverr
                </div>
              </div>
            </motion.div>

            {/* Kutipan Integritas */}
            <motion.div 
              className="p-5.5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/60 border border-slate-800 flex items-start gap-4 hover:border-slate-700/80 transition-colors"
              variants={itemVariants}
            >
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-sans text-xs font-bold text-slate-100 uppercase tracking-widest">
                  100% GARANSI KEPUASAN & KERAPIAN DATA
                </h5>
                <p className="mt-1 font-sans text-xs text-slate-400 leading-relaxed">
                  Kami mengesampingkan penyerahan data instan tanpa dibersihkan (Double Check & Validation Framework). Output kami dipastikan siap langsung dipakai untuk laporan eksekutif dan persidangan akademik.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
