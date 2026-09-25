import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, Gem, Layers } from 'lucide-react';
import { StratificationDiagram } from './DentalVisuals.tsx';

interface HeroProps {
  onOpenScheduleModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScheduleModal }) => {
  const whatsappUrl = "https://wa.me/5519989956446?text=Ol%C3%A1%2C%20Dra.%20Caroline%20Tigre!%20Gostaria%20de%20agendar%20uma%20Consulta%20de%20Diagn%C3%B3stico%20Est%C3%A9tico%20para%20planejamento%20do%20meu%20sorriso.";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-zinc-950">
      {/* Background radial luxury lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zinc-900/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Manifesto */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Custom Luxury Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-200/90 text-xs font-sans-clean tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(203,162,88,0.12)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Odontologia Estética Sob Medida</span>
              <span className="w-1 h-1 rounded-full bg-amber-400"></span>
              <span className="text-zinc-400 font-normal">Cambuí · Campinas</span>
            </div>

            {/* Imposing Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-zinc-100 font-normal tracking-tight leading-[1.08] text-balance">
              A precisão milimétrica que transforma seu sorriso em uma{' '}
              <span className="italic text-gold-gradient font-light">
                assinatura de autoridade.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-zinc-400 font-sans-clean leading-relaxed max-w-2xl text-pretty font-light">
              A união da tecnologia diagnóstica digital de ponta com o planejamento facial exclusivo para criar sorrisos que combinam naturalidade inquestionável, proporção áurea e durabilidade definitiva.
            </p>

            {/* CTA & Direct Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-zinc-950 bg-gradient-to-r from-[#FFF0D4] via-[#E5C378] to-[#CBA258] rounded-xl shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(203,162,88,0.35)] active:scale-[0.99]"
              >
                <span>Agendar Consulta de Diagnóstico Estético</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#procedimentos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-medium tracking-wider uppercase text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 rounded-xl transition-all"
              >
                <span>Explorar Técnicas</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
            </div>

            {/* Visual Authority Element (+40k patients & admirers) */}
            <div className="pt-4 border-t border-zinc-900/90 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex items-center">
                {/* Visual Avatar Stack representing curated patient community */}
                <div className="flex -space-x-2.5 overflow-hidden">
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-950 bg-zinc-800 flex items-center justify-center text-xs font-serif text-amber-300 border border-amber-500/30">
                    CT
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-950 bg-zinc-850 flex items-center justify-center text-xs font-serif text-zinc-200 border border-zinc-700">
                    SP
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-950 bg-zinc-800 flex items-center justify-center text-xs font-serif text-amber-200 border border-zinc-700">
                    RJ
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-zinc-950 bg-amber-500/20 flex items-center justify-center text-[10px] font-mono text-amber-300 border border-amber-500/40">
                    +40k
                  </div>
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-sm text-zinc-200 font-medium">
                  <span className="font-semibold text-amber-300 tracking-tight">+40.000</span>
                  <span>pacientes e admiradores</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Acompanhando protocolos clínicos autorais e transformações reais entregues no Cambuí.
                </p>
              </div>
            </div>

            {/* Micro Pillars */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                <div className="text-xs text-amber-300/90 font-mono font-medium">0.2mm - 0.4mm</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Preservação Biológica</div>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                <div className="text-xs text-amber-300/90 font-mono font-medium">100% Digital</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Mockup 3D Prévio</div>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                <div className="text-xs text-amber-300/90 font-mono font-medium">1:1.618</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Proporção Áurea Facial</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Clinical Precision Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 via-zinc-900/50 to-zinc-950 border border-zinc-800/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
              
              {/* Header of showcase card */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                <div>
                  <span className="text-[11px] tracking-widest uppercase text-amber-400/90 font-mono">
                    Microarquitetura Biomimética
                  </span>
                  <h3 className="font-serif-luxury text-xl text-zinc-100 mt-0.5">
                    Anatomia Estratificada
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-300">
                  CERÂMICA PURA
                </div>
              </div>

              {/* Vector diagram representing micro-layers */}
              <StratificationDiagram />

              {/* Micro specs of the material */}
              <div className="mt-4 space-y-2.5 pt-4 border-t border-zinc-800/80 text-xs">
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Gem className="w-3.5 h-3.5 text-amber-400" />
                    Translucidez Incisal
                  </span>
                  <span className="font-mono text-zinc-200">Biomimética 98.4%</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    Estratificação em Camadas
                  </span>
                  <span className="font-mono text-zinc-200">Feldspática &amp; E.max</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Resistência a Manchas
                  </span>
                  <span className="font-mono text-emerald-300">Grau Máximo (Vítreo)</span>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 p-3 rounded-lg bg-zinc-950/70 border border-zinc-800 flex items-center justify-between">
                <div className="text-[11px] text-zinc-400">
                  Consultório Boutique no Cambuí
                </div>
                <span className="text-[11px] text-amber-300 font-medium">
                  Agenda Exclusiva Limitada
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
