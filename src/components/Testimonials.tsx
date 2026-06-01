import React from 'react';
import { useLanguage } from '../i18n';
import { Star, MessageCircleHeart } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-slate-900 py-16 md:py-24 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-emerald-400 border border-emerald-500/20 mb-5">
            <MessageCircleHeart className="h-3.5 w-3.5" />
            {t('testi.badge')}
          </span>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t('testi.title')}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('testi.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 relative flex flex-col justify-between shadow-xl shadow-black/20 hover:bg-slate-800 transition-colors">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 italic text-sm leading-relaxed mb-8">
                  {t(`testi.${num}.text`)}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300">
                  {t(`testi.${num}.name`).charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t(`testi.${num}.name`)}</h4>
                  <p className="text-xs text-emerald-400 font-mono">{t(`testi.${num}.role`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
