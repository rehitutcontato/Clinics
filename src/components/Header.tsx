import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenScheduleModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenScheduleModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5519989956446?text=Ol%C3%A1%2C%20Dra.%20Caroline%20Tigre!%20Gostaria%20de%20solicitar%20uma%20consulta%20de%20diagn%C3%B3stico%20est%C3%A9tico%20em%20Campinas.";

  const navLinks = [
    { label: "Filosofia", href: "#filosofia" },
    { label: "Procedimentos", href: "#procedimentos" },
    { label: "Casos Clínicos", href: "#casos-clinicos" },
    { label: "A Jornada", href: "#jornada" },
    { label: "Instituto", href: "#instituto" },
    { label: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-zinc-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a href="#" className="flex flex-col group cursor-pointer">
          <div className="flex items-center gap-2">
            <span className="font-serif-luxury text-xl sm:text-2xl text-zinc-100 font-medium tracking-tight group-hover:text-amber-200 transition-colors">
              Dra. Caroline Tigre
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-400 font-sans-clean tracking-wider uppercase mt-0.5">
            <span>Odontologia Especializada</span>
            <span className="inline-block w-1 h-1 rounded-full bg-amber-500/70"></span>
            <span className="text-amber-300/90 font-medium">Campinas · Cambuí</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase text-zinc-300 font-sans-clean font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-400 hover:text-amber-200 transition-colors duration-200 py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-400/80 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Primary Action Button (Compact WhatsApp) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-zinc-100 bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(203,162,88,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <MessageCircle className="w-3.5 h-3.5 text-amber-300" />
            <span className="whitespace-nowrap">Agendar no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-amber-300 bg-zinc-900/90 border border-zinc-800 rounded-lg hover:border-amber-500/40"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white rounded-lg border border-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800/90 bg-zinc-950/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pb-4 border-b border-zinc-900">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-amber-300 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 rounded-lg shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar no WhatsApp · 55 19 98995-6446</span>
            </a>
            <div className="mt-3 text-center text-[11px] text-zinc-500">
              Atendimento exclusivo no Cambuí, Campinas - SP
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
