import React, { useState } from 'react';
import { Camera, Layers, CheckCircle2, ChevronRight, ShieldCheck, Sparkles, Scan, FileText, ArrowRight } from 'lucide-react';

export const PatientJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      phase: "Fase 01",
      title: "Consulta Diagnóstica & Escaneamento Intraoral Digital em 3D",
      subtitle: "A previsibilidade do resultado antes de qualquer intervenção biológica.",
      icon: <Scan className="w-6 h-6 text-amber-300" />,
      tagline: "Mockup 3D Real em Boca",
      description: "Realizamos uma imersão diagnóstica completa no consultório em Campinas: fotografias de estúdio em alta definição, análise dinâmica da musculatura facial e escaneamento intraoral tridimensional com câmera óptica de ponta. Nada de moldagens desconfortáveis com pastas.",
      details: [
        "Escaneamento 3D óptico sem incômodos nem reflexo de vômito.",
        "Planejamento digital do sorriso com base na proporção áurea.",
        "Confecção do Mockup estético (test-drive em resina biológica colocado provisoriamente sobre os dentes naturais sem nenhum desgaste).",
        "Você se olha no espelho e avalia a forma, tamanho e harmonia antes de aprovar o início do tratamento."
      ],
      timeframe: "1ª Sessão · ~90 minutos",
      milestone: "Aprovação consciente do projeto estético"
    },
    {
      number: "02",
      phase: "Fase 02",
      title: "Confecção Personalizada & Prova Estética",
      subtitle: "Lapidação artística em sintonia com mestre ceramista internacional.",
      icon: <Layers className="w-6 h-6 text-amber-300" />,
      tagline: "Harmonia Facial Individualizada",
      description: "Com o projeto tridimensional rigorosamente aprovado, o arquivo digital é enviado ao laboratório de prótese cerâmica de referência. Cada lente ou faceta é usinada e texturizada artesanalmente à mão, camada por camada, por ceramistas de elite.",
      details: [
        "Seleção micrométrica de pós de cerâmica importada (Ivoclar / Vita Zahnfabrik).",
        "Prova das peças em boca com pastas de teste que simulam a cor do cimento definitivo.",
        "Ajustes de fonética, oclusão dinâmica e curvatura do sorriso em conjunto com a Dra. Caroline.",
        "Refino de bordas e texturas para garantir naturalidade absoluta ao falar e sorrir."
      ],
      timeframe: "2ª Sessão · Avaliação de Detalhes",
      milestone: "Validação visual e tátil com o paciente"
    },
    {
      number: "03",
      phase: "Fase 03",
      title: "Cimentação Definitiva com Conforto Absoluto",
      subtitle: "Microscopia operatória, adesão química e durabilidade para a vida.",
      icon: <ShieldCheck className="w-6 h-6 text-amber-300" />,
      tagline: "Precisão Microscópica sem Dor",
      description: "O momento da transformação final. Sob isolamento absoluto do campo operatório, cada lente de porcelana ou camada de resina estratificada é unida ao dente através de um protocolo químico de cimentação resinosa de última geração, garantindo adesão inviolável.",
      details: [
        "Procedimento indolor e extremamente confortável em ambiente privativo relaxante.",
        "Preservação integral dos dentes sadios — zero desgastes desnecessários.",
        "Adaptação marginal com tolerância zero para retenção de biofilme bacteriano.",
        "Entrega do Certificado de Garantia dos Materiais e orientações de manutenção preventiva."
      ],
      timeframe: "3ª Sessão · Entrega Definitiva",
      milestone: "Seu novo sorriso como assinatura de autoridade"
    }
  ];

  return (
    <section id="jornada" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl space-y-4">
          <div className="text-xs font-sans-clean uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <span>A Experiência do Paciente</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-zinc-100 font-normal tracking-tight">
            A Jornada Exclusiva em <span className="italic text-gold-gradient">Três Fases Claras.</span>
          </h2>

          <p className="text-zinc-400 font-sans-clean text-base sm:text-lg font-light leading-relaxed">
            Uma abordagem sem surpresas e sem ansiedade. Você participa ativamente do desenho do seu sorriso e experimenta o resultado antes de qualquer intervenção definitiva.
          </p>
        </div>

        {/* 3 Step Navigation Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-zinc-900 border-amber-500/50 shadow-[0_0_30px_rgba(203,162,88,0.12)] ring-1 ring-amber-500/20'
                  : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700/80'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-2xl font-light text-amber-300">
                  {step.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                  {step.phase}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-serif-luxury text-lg text-zinc-100 font-medium">
                  {step.title.split('&')[0]}
                </h3>
                <p className="text-xs text-amber-300/80 font-mono mt-1">
                  {step.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span>{step.timeframe}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeStep === idx ? 'text-amber-300 translate-x-1' : 'text-zinc-600'}`} />
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Expanded Details */}
        <div className="mt-8 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Deep Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{steps[activeStep].phase} · Detalhamento Clínico</span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-zinc-100 font-normal">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  O que acontece nesta etapa:
                </span>
                <ul className="space-y-2.5">
                  {steps[activeStep].details.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Visual Guarantee & Milestone Box */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Objetivo da Fase
                    </span>
                    <h4 className="text-sm font-medium text-zinc-200">
                      {steps[activeStep].milestone}
                    </h4>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 space-y-3 text-xs text-zinc-400">
                  <div className="flex justify-between">
                    <span>Duração Média:</span>
                    <strong className="text-zinc-200">{steps[activeStep].timeframe}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Nível de Desconforto:</span>
                    <strong className="text-emerald-400">Zero (Indolor)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Tecnologia Utilizada:</span>
                    <strong className="text-zinc-200">Escaneamento 3D / Óptica</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/5519989956446?text=Ol%C3%A1%2C%20Dra.%20Caroline%20Tigre!%20Gostaria%20de%20iniciar%20minha%20Jornada%20com%20uma%20Consulta%20Diagn%C3%B3stica%20no%20Cambu%C3%AD."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-200 to-amber-400 hover:brightness-110 shadow-md transition-all"
                  >
                    <span>Iniciar Minha Jornada</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 text-xs text-zinc-400">
                <p className="font-light">
                  <strong className="text-zinc-300 font-medium">Garantia de Previsibilidade:</strong> Você tem total autonomia para solicitar refinamentos no mockup provisório antes que qualquer lâmina definitiva de porcelana seja produzida.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
