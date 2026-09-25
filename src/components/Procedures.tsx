import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Clock, Zap, Award, Layers, Gem, Info } from 'lucide-react';

export const Procedures: React.FC = () => {
  const [selectedProcedure, setSelectedProcedure] = useState<'porcelain' | 'resin'>('porcelain');
  const [showTechnicalDetails, setShowTechnicalDetails] = useState<string | null>(null);

  const porcelainSpecs = [
    { label: "Espessura Mínima", val: "0.2mm a 0.4mm (Ultrafina)" },
    { label: "Material Premium", val: "Dissilicato de Lítio (E.max) & Feldspática Suíça" },
    { label: "Longevidade Estimada", val: "15 a 25+ anos com manutenção periódica" },
    { label: "Resistência a Manchas", val: "100% Imune a café, vinho e alimentos ácidos" },
    { label: "Acabamento Superficial", val: "Glaze Vítreo Cerâmico com texturização periquimata" },
    { label: "Tempo de Tratamento", val: "3 sessões de alta precisão com mockup prévio" }
  ];

  const resinSpecs = [
    { label: "Preservação Sadia", val: "100% sem desgaste da estrutura natural" },
    { label: "Matriz Estrutural", val: "Nano-híbrida de Alta Densidade (Kuraray / Tokuyama)" },
    { label: "Longevidade Estimada", val: "5 a 10 anos com repolimento anual" },
    { label: "Tempo de Execução", val: "Sessão única ou guiada com resultado imediato" },
    { label: "Reversibilidade", val: "Totalmente conservadora e reversível" },
    { label: "Indicação Típica", val: "Fechamento de diastemas, bordas fraturadas e facetas diretas" }
  ];

  const whatsappBase = "https://wa.me/5519989956446?text=";

  return (
    <section id="procedimentos" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-sans-clean uppercase tracking-widest text-amber-400 font-semibold inline-flex items-center gap-2">
            <span className="w-5 h-[1px] bg-amber-400"></span>
            <span>Excelência em Materiais &amp; Técnicas</span>
            <span className="w-5 h-[1px] bg-amber-400"></span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-zinc-100 font-normal tracking-tight">
            Procedimentos Esculpidos com{' '}
            <span className="italic text-gold-gradient">Rigor de Joalheria.</span>
          </h2>

          <p className="text-zinc-400 font-sans-clean text-base sm:text-lg font-light leading-relaxed">
            Cada sorriso demanda uma abordagem biomecânica única. Trabalhamos exclusivamente com as duas tecnologias mais refinadas da odontologia restauradora contemporânea.
          </p>
        </div>

        {/* Procedure Selector Pill Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-2xl shadow-xl">
            <button
              onClick={() => setSelectedProcedure('porcelain')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                selectedProcedure === 'porcelain'
                  ? 'bg-zinc-800 text-amber-200 border border-amber-500/30 shadow-[0_0_15px_rgba(203,162,88,0.15)]'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Gem className="w-4 h-4 text-amber-300" />
              <span>Lentes em Porcelana Pura</span>
            </button>
            <button
              onClick={() => setSelectedProcedure('resin')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                selectedProcedure === 'resin'
                  ? 'bg-zinc-800 text-amber-200 border border-amber-500/30 shadow-[0_0_15px_rgba(203,162,88,0.15)]'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-300" />
              <span>Resina Estratificada de Alta Densidade</span>
            </button>
          </div>
        </div>

        {/* Cards Display Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Lentes em Porcelana Pura */}
          <div
            className={`rounded-2xl border transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden ${
              selectedProcedure === 'porcelain'
                ? 'bg-gradient-to-b from-zinc-900/90 via-zinc-900/50 to-zinc-950 border-amber-500/40 shadow-[0_0_40px_rgba(203,162,88,0.1)] ring-1 ring-amber-500/20'
                : 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700/80 opacity-90'
            }`}
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-wider text-amber-400 uppercase">
                O Padrão Supremo
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-300">
                Longevidade Decenal
              </span>
            </div>

            {/* Title & Description */}
            <div className="mt-6 space-y-3">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-zinc-100 font-normal">
                Lentes em Porcelana Pura
              </h3>
              <p className="text-xs text-amber-300/80 font-mono">
                Dissilicato de Lítio (E.max) &amp; Cerâmica Feldspática
              </p>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Desenvolvidas artesanalmente em laboratório de alta precisão em sinergia com o mestre ceramista. Reproduzem com exatidão a opalescência, reflexão vítrea e microrelevo do esmalte biológico mais nobre.
              </p>
            </div>

            {/* Key Distinctive Highlights */}
            <div className="mt-8 space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 border border-amber-500/30 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-zinc-200">Resistência Extrema a Manchas</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">A estrutura molecular vítrea não possui microporosidades, mantendo a tonalidade imaculada para sempre.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 border border-amber-500/30 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-zinc-200">Acabamento Vítreo Natural</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Reflexão de luz biomimética idêntica ao dente natural jovem, sem aparência opaca ou plastificada.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 border border-amber-500/30 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-zinc-200">Microtexturização Idêntica ao Esmalte</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Lentes ultrafinas de 0.2mm a 0.4mm desenhadas milimetricamente para adaptação gengival biológica sem sangramentos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 border border-amber-500/30 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-zinc-200">Longevidade de Décadas</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Protocolo de cimentação resinosa silanizada de padrão internacional que funde a porcelana à estrutura dental.</p>
                </div>
              </div>
            </div>

            {/* Technical Specs Toggle Accordion */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80">
              <button
                onClick={() => setShowTechnicalDetails(showTechnicalDetails === 'porcelain' ? null : 'porcelain')}
                className="text-xs font-mono text-amber-300 hover:text-amber-200 flex items-center justify-between w-full"
              >
                <span>{showTechnicalDetails === 'porcelain' ? 'Ocultar Ficha Técnica' : 'Ver Especificações Clínicas'}</span>
                <Info className="w-3.5 h-3.5" />
              </button>

              {showTechnicalDetails === 'porcelain' && (
                <div className="mt-4 space-y-2 text-xs font-sans-clean bg-zinc-950/70 p-4 rounded-xl border border-zinc-800">
                  {porcelainSpecs.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-1 border-b border-zinc-900/60 last:border-0">
                      <span className="text-zinc-400">{spec.label}</span>
                      <span className="text-zinc-200 font-medium text-right">{spec.val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Card CTA */}
            <div className="mt-8">
              <a
                href={`${whatsappBase}${encodeURIComponent("Olá, Dra. Caroline Tigre! Gostaria de uma avaliação para Lentes em Porcelana Pura no consultório de Campinas.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-200 to-amber-400 hover:brightness-110 shadow-md transition-all"
              >
                <span>Solicitar Avaliação em Porcelana</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Resina Composta Estratificada de Alta Densidade */}
          <div
            className={`rounded-2xl border transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden ${
              selectedProcedure === 'resin'
                ? 'bg-gradient-to-b from-zinc-900/90 via-zinc-900/50 to-zinc-950 border-amber-500/40 shadow-[0_0_40px_rgba(203,162,88,0.1)] ring-1 ring-amber-500/20'
                : 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700/80 opacity-90'
            }`}
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-wider text-amber-400 uppercase">
                Arte Direta &amp; Conservadora
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                Preservação Sadia 100%
              </span>
            </div>

            {/* Title & Description */}
            <div className="mt-6 space-y-3">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-zinc-100 font-normal">
                Resina Estratificada de Alta Densidade
              </h3>
              <p className="text-xs text-amber-300/80 font-mono">
                Micro-híbridas &amp; Nano-cerâmicas de Carga Elevada
              </p>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Escultura manual direta realizada pela Dra. Caroline Tigre camada por camada na própria sessão clínica. Ideal para refinamento anatômico expressivo sem tocar na integridade biológica do esmalte saudável.
              </p>
            </div>

            {/* Key Distinctive Highlights */}
            <div className="mt-8 space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 border border-amber-500/30 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-zinc-200">Preservação Total da Estrutura Sadia</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Zero desgaste mecânico irreversível. A resina se integra por adesão microscópica à superfície intacta.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 border border-amber-500/30 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-zinc-200">Escultura Artística Direta em Sessão</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">A Dra. Caroline esculpe os bordos incisais, mamões e zonas de reflexão com controle óptico em tempo real.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 border border-amber-500/30 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-zinc-200">Refino Estético Imediato</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Resultado visível no mesmo dia para correção de diastemas (espaços), dentes conóides e reanatomizações.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 border border-amber-500/30 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-zinc-200">Polimento Vítreo Persistente</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Utilização de sistemas de polimento diamantado espelhado que conferem retenção de brilho de longa duração.</p>
                </div>
              </div>
            </div>

            {/* Technical Specs Toggle Accordion */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80">
              <button
                onClick={() => setShowTechnicalDetails(showTechnicalDetails === 'resin' ? null : 'resin')}
                className="text-xs font-mono text-amber-300 hover:text-amber-200 flex items-center justify-between w-full"
              >
                <span>{showTechnicalDetails === 'resin' ? 'Ocultar Ficha Técnica' : 'Ver Especificações Clínicas'}</span>
                <Info className="w-3.5 h-3.5" />
              </button>

              {showTechnicalDetails === 'resin' && (
                <div className="mt-4 space-y-2 text-xs font-sans-clean bg-zinc-950/70 p-4 rounded-xl border border-zinc-800">
                  {resinSpecs.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-1 border-b border-zinc-900/60 last:border-0">
                      <span className="text-zinc-400">{spec.label}</span>
                      <span className="text-zinc-200 font-medium text-right">{spec.val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Card CTA */}
            <div className="mt-8">
              <a
                href={`${whatsappBase}${encodeURIComponent("Olá, Dra. Caroline Tigre! Gostaria de consultar sobre Resina Composta Estratificada de Alta Densidade em Campinas.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-zinc-100 bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 hover:border-amber-500/40 shadow-sm transition-all"
              >
                <span>Solicitar Avaliação em Resina</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Advisory Comparison Matrix Guide */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                Orientação Clínica Personalizada
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-zinc-100 mt-1">
                Qual procedimento é o mais indicado para você?
              </h3>
            </div>
            <p className="text-xs text-zinc-400 max-w-md font-light">
              A indicação precisa depende da análise do substrato dental, expectativa de durabilidade, hábitos de pigmentação e padrão oclusal na consulta diagnóstica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-xs text-zinc-300">
            <div className="space-y-2 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <strong className="text-amber-200 text-sm font-serif">Escolha Lentes em Porcelana se você busca:</strong>
              <p className="text-zinc-400 font-light">
                Durabilidade permanente sem necessidade de repolimentos frequentes, imunidade total a pigmentação por vinho ou café, transformação ampla de múltiplos dentes e reprodução exata de textura esmaltada de alto luxo.
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <strong className="text-amber-200 text-sm font-serif">Escolha Resina Estratificada se você busca:</strong>
              <p className="text-zinc-400 font-light">
                Procedimento 100% conservador sem nenhum desgaste dental, intervenção pontual para fechamento de diastemas ou pequenas correções de borda incisal, rapidez de entrega em sessão única e excelente relação de investimento.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
