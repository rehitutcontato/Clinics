import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Show subtle tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  const whatsappUrl = "https://wa.me/5519989956446?text=Ol%C3%A1%2C%20Dra.%20Caroline%20Tigre!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20Lentes%20de%20Contato%20e%20Resina%20Estratificada%20em%20Campinas.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Discreet tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 rounded-xl bg-zinc-900/95 border border-zinc-700/80 shadow-2xl backdrop-blur-md text-xs text-zinc-200 animate-in fade-in duration-300 max-w-xs">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping"></div>
          <span>Recepção online no WhatsApp para agendamentos.</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-500 hover:text-zinc-300 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-xl hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Falar com recepção no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-zinc-950"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
      </a>
    </div>
  );
};
