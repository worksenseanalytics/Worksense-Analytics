import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../i18n';

export const openContactModal = (message: string) => {
  window.dispatchEvent(new CustomEvent('openContactModal', { detail: { message } }));
};

export default function ContactModal() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      setMessage(customEvent.detail?.message || "Halo tim Worksense Analytics, saya ingin konsultasi mengenai layanan analitik data.");
      setIsOpen(true);
    };
    window.addEventListener('openContactModal', handleOpen);
    return () => window.removeEventListener('openContactModal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const closeMenu = () => setIsOpen(false);

  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/6282126574799?text=${encodedMsg}`;
  const emailUrl = `mailto:worksenseanalytics@gmail.com?subject=Konsultasi%20Layanan%20Data&body=${encodedMsg}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4">
      <div 
        className="relative w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl transition-all scale-100 opacity-100"
      >
        <button 
          onClick={closeMenu} 
          className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-xl font-bold text-white mb-2 font-sans">Pilih Jalur Komunikasi</h3>
        <p className="text-sm text-slate-400 mb-6 font-sans">
          Bagaimana Anda ingin terhubung dengan tim kami? Konsultasi bersifat gratis dan rahasia (NDA Friendly).
        </p>
        <div className="flex flex-col gap-3">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={closeMenu} 
            className="flex items-center justify-center gap-3 w-full rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all outline-none"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp (Fast Response)
          </a>
          <a 
            href={emailUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={closeMenu} 
            className="flex items-center justify-center gap-3 w-full rounded-xl bg-sky-500 hover:bg-sky-400 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all outline-none"
          >
            <Mail className="h-5 w-5" />
            Email Profesional
          </a>
        </div>
      </div>
    </div>
  );
}
