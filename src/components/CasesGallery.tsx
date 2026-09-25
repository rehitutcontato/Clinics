import React, { useState } from 'react';
import { Sparkles, Eye, ArrowLeftRight, CheckCircle2, Sliders, ShieldCheck, ZoomIn, Info } from 'lucide-react';

interface ClinicalCase {
  id: string;
  title: string;
  category: string;
  elements: string;
  material: string;
  initialComplaint: string;
  techniqueDelivered: string;
  gingivalState: string;
  opticalHighlight: string;
  beforeStats: {
    color: string;
    texture: string;
    harmony: string;
  };
  afterStats: {
    color: string;
    texture: string;
    harmony: string;
  };
}

export const CasesGallery: React.FC = () => {
  const cases: ClinicalCase[] = [
    {
      id: "case-1",
      title: "Reabilitação Estética Cerâmica Superior",
      category: "Porcelana Pura E.max",
      elements: "10 Elementos Anterossuperiores",
      material: "Dissilicato de Lítio Prensado + Cerâmica Feldspática",
      initialComplaint: "Desgaste severo do esmalte anterior, tom amarelado resistente a clareamento e linha do sorriso reta com aspecto envelhecido.",
      techniqueDelivered: "Lentes de contato ultrafinas (0.3mm) com individualização incisal e recontorno de corredor bucal, sem desgaste biológico agressivo.",
      gingivalState: "Zenites gengivais perfeitamente nivelados, papilas íntegras e ausência de sobrecontorno.",
      opticalHighlight: "Gradiente de translucidez cervical para incisal mimetizando o esmalte biológico de 20 anos.",
      beforeStats: { color: "A3.5 Saturado Heterogêneo", texture: "Abrasão Mecânica / Opaco", harmony: "Plano Oclusal Desnivelado" },
      afterStats: { color: "BL2 / BL3 Degradê Natural", texture: "Microtextura Periquimata 8K", harmony: "Curvatura Labial Rejuvenescedora" }
    },
    {
      id: "case-2",
      title: "Fechamento de Diastemas & Arquitetura Incisal",
      category: "Resina Estratificada",
      elements: "4 Elementos (12, 11, 21, 22)",
      material: "Resina Composta de Alta Densidade (Estelite Asteria)",
      initialComplaint: "Espaçamentos acentuados entre os dentes frontais gerando desconforto social ao sorrir e falar.",
      techniqueDelivered: "Escultura artística direta em sessão clínica única sob isolamento absoluto, preservando 100% da estrutura dental natural sadia.",
      gingivalState: "Adaptação subgengival com perfil de emergência crítico sem compressão tecidual.",
      opticalHighlight: "Camadas de dentina cromática e esmalte de corpo com polimento espelhado diamantado.",
      beforeStats: { color: "A2 com diastema de 2.2mm", texture: "Plana sem individualização", harmony: "Descontinuidade Central" },
      afterStats: { color: "A1 Biomimético Integrado", texture: "Bordas Incisais Translúcidas", harmony: "Fechamento Anatômico Perfeito" }
    },
    {
      id: "case-3",
      title: "Visagismo Facial & Lentes Ultrafinas",
      category: "Porcelana Pura Feldspática",
      elements: "8 Elementos Superiores",
      material: "Cerâmica Feldspática Artesanal em Refratário",
      initialComplaint: "Dentes conóides e curtos com exposição insuficiente de sorriso e queixa de infantilização do semblante.",
      techniqueDelivered: "Aumento de comprimento com proporção áurea 1:1.618, harmonizando com a curvatura labial e traços elegantes da paciente.",
      gingivalState: "Arquitetura gengival rósea, contorno festonado biológico sem inflamação ou recessão.",
      opticalHighlight: "Opalescência azulada na borda incisal que refrata a luz ambiente como jóia lapidada.",
      beforeStats: { color: "A1 Desuniforme", texture: "Esmalte Liso sem Profundidade", harmony: "Sorriso Baixo / Oculto" },
      afterStats: { color: "BL1 Naturalmente Polido", texture: "Linhas Verticais de Desenvolvimento", harmony: "Proporção Áurea 1:1.618" }
    }
  ];

  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(55); // 0 to 100%
  const [macroZoom, setMacroZoom] = useState(false);
  const [activeViewMode, setActiveViewMode] = useState<'interactive' | 'details'>('interactive');

  const currentCase = cases[activeCaseIndex];

  return (
    <section id="casos-clinicos" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-900">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-sans-clean uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
              <span className="w-6 h-[1px] bg-amber-400"></span>
              <span>Galeria de Casos Clínicos</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-zinc-100 font-normal tracking-tight">
              A Prova Visual da <span className="italic text-gold-gradient">Biomimética Pura.</span>
            </h2>
            <p className="text-zinc-400 font-sans-clean text-sm sm:text-base font-light">
              Fotografia odontológica de macro com iluminação de estúdio neutro, evidenciando arquitetura gengival íntegra, reflexão e microtexturas que só o trabalho autoral de alto padrão alcança.
            </p>
          </div>

          {/* Quick Case Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(55);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium tracking-wide transition-all whitespace-nowrap shrink-0 ${
                  activeCaseIndex === idx
                    ? 'bg-zinc-800 text-amber-200 border border-amber-500/40 shadow-sm'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                Caso 0{idx + 1}: {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Case Showcase Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Before/After Visual Simulator */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group select-none">
              
              {/* Studio Backdrop Container */}
              <div className={`relative w-full aspect-[4/3] bg-zinc-950 flex items-center justify-center overflow-hidden transition-transform duration-500 ${macroZoom ? 'scale-110' : 'scale-100'}`}>
                
                {/* SVG Visual Macro Representation */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  
                  {/* Before Side (Left portion under slider) */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-900/90 text-center p-8">
                    {/* Simulated Macro Before Arch */}
                    <div className="w-full max-w-sm flex items-center justify-center gap-2 opacity-80 filter brightness-90">
                      <div className="w-16 h-24 rounded-b-md bg-gradient-to-b from-amber-900/30 to-amber-700/40 border border-amber-800/40 relative">
                        <span className="absolute bottom-1 inset-x-0 text-[9px] text-zinc-400 font-mono">Desgaste</span>
                      </div>
                      <div className="w-20 h-28 rounded-b-md bg-gradient-to-b from-amber-900/40 to-amber-600/40 border border-amber-800/50 relative">
                        <span className="absolute bottom-1 inset-x-0 text-[9px] text-zinc-400 font-mono">Assimetria</span>
                      </div>
                      <div className="w-20 h-28 rounded-b-md bg-gradient-to-b from-amber-900/40 to-amber-600/40 border border-amber-800/50 relative">
                        <span className="absolute bottom-1 inset-x-0 text-[9px] text-zinc-400 font-mono">Opacidade</span>
                      </div>
                      <div className="w-16 h-24 rounded-b-md bg-gradient-to-b from-amber-900/30 to-amber-700/40 border border-amber-800/40 relative">
                        <span className="absolute bottom-1 inset-x-0 text-[9px] text-zinc-400 font-mono">Desgaste</span>
                      </div>
                    </div>
                  </div>

                  {/* After Side (Right portion revealed by slider) */}
                  <div
                    className="absolute inset-0 overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center p-8 relative">
                      
                      {/* Ambient studio gold ring glow */}
                      <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />

                      {/* Simulated Macro After Arch (Perfection, Natural White, Translucent Incisal Halo) */}
                      <div className="w-full max-w-sm flex items-center justify-center gap-2 drop-shadow-[0_10px_25px_rgba(203,162,88,0.2)]">
                        {/* Tooth Lateral 12 */}
                        <div className="w-16 h-26 rounded-b-lg bg-gradient-to-b from-[#F7F2E7] via-[#FDFBF7] to-[#E6D4B5] border border-amber-300/40 relative shadow-sm">
                          <div className="absolute top-1 left-2 w-3 h-8 bg-white/60 blur-[1px] rounded-full"></div>
                          <span className="absolute bottom-1 inset-x-0 text-[8px] text-amber-900/80 font-mono text-center">Feldspato</span>
                        </div>
                        {/* Tooth Central 11 */}
                        <div className="w-20 h-32 rounded-b-xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F0] to-[#DFCEAF] border border-amber-300/60 relative shadow-md">
                          <div className="absolute top-1 left-2 w-4 h-12 bg-white/70 blur-[1px] rounded-full"></div>
                          <div className="absolute bottom-0 inset-x-0 h-3 bg-cyan-100/30 rounded-b-xl border-t border-cyan-200/20"></div>
                          <span className="absolute bottom-1.5 inset-x-0 text-[8px] text-amber-900/90 font-mono text-center font-semibold">1:1.618</span>
                        </div>
                        {/* Tooth Central 21 */}
                        <div className="w-20 h-32 rounded-b-xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F0] to-[#DFCEAF] border border-amber-300/60 relative shadow-md">
                          <div className="absolute top-1 right-2 w-4 h-12 bg-white/70 blur-[1px] rounded-full"></div>
                          <div className="absolute bottom-0 inset-x-0 h-3 bg-cyan-100/30 rounded-b-xl border-t border-cyan-200/20"></div>
                          <span className="absolute bottom-1.5 inset-x-0 text-[8px] text-amber-900/90 font-mono text-center font-semibold">Áurea</span>
                        </div>
                        {/* Tooth Lateral 22 */}
                        <div className="w-16 h-26 rounded-b-lg bg-gradient-to-b from-[#F7F2E7] via-[#FDFBF7] to-[#E6D4B5] border border-amber-300/40 relative shadow-sm">
                          <div className="absolute top-1 right-2 w-3 h-8 bg-white/60 blur-[1px] rounded-full"></div>
                          <span className="absolute bottom-1 inset-x-0 text-[8px] text-amber-900/80 font-mono text-center">Biomimética</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Vertical Divider Slider Line */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 shadow-[0_0_12px_rgba(203,162,88,0.8)] z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-amber-400 flex items-center justify-center shadow-lg">
                    <ArrowLeftRight className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                </div>

                {/* Top Labels */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
                  Condição Prévia
                </div>
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[11px] font-mono text-amber-300 uppercase tracking-wider">
                  Protocolo Entregue
                </div>

                {/* Range Slider for Interaction */}
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Arrastar comparação antes e depois"
                />

              </div>

              {/* Slider Bottom Controls */}
              <div className="p-4 bg-zinc-950/90 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Sliders className="w-3.5 h-3.5 text-amber-400" />
                  <span>Arraste sobre a imagem para comparar textura e luminosidade</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMacroZoom(!macroZoom)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                      macroZoom
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>{macroZoom ? 'Zoom 1x Normal' : 'Zoom 2x Macro'}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Gingival Health & Biological Seal Verification */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <strong className="text-zinc-200 font-medium">Arquitetura Gengival Preservada:</strong>
                <p className="text-zinc-400 leading-relaxed font-light">
                  {currentCase.gingivalState}
                </p>
              </div>
            </div>

          </div>

          {/* Right: Technical Case Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-6">
              
              <div>
                <div className="flex items-center justify-between text-xs text-amber-400 font-mono tracking-wider">
                  <span>CASO CLÍNICO DOCUMENTADO</span>
                  <span>{currentCase.elements}</span>
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-zinc-100 font-normal mt-1">
                  {currentCase.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  Material: {currentCase.material}
                </p>
              </div>

              {/* Clinical Details */}
              <div className="space-y-4 text-xs font-sans-clean">
                
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                  <div className="text-zinc-500 uppercase tracking-wider text-[10px] font-mono">
                    Queixa Inicial do Paciente
                  </div>
                  <p className="text-zinc-300 mt-1 leading-relaxed font-light">
                    &quot;{currentCase.initialComplaint}&quot;
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-amber-500/20">
                  <div className="text-amber-400/90 uppercase tracking-wider text-[10px] font-mono">
                    Planejamento &amp; Protocolo Entregue
                  </div>
                  <p className="text-zinc-200 mt-1 leading-relaxed font-light">
                    {currentCase.techniqueDelivered}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                  <div className="text-zinc-400 uppercase tracking-wider text-[10px] font-mono">
                    Destaque Óptico &amp; Textura
                  </div>
                  <p className="text-zinc-300 mt-1 leading-relaxed font-light">
                    {currentCase.opticalHighlight}
                  </p>
                </div>

              </div>

              {/* Side-by-side technical parameters */}
              <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-2 gap-3 text-[11px]">
                <div className="p-3 rounded-lg bg-zinc-950/50 border border-zinc-800">
                  <span className="text-zinc-500 block font-mono text-[9px]">ESCALA ANTERIOR</span>
                  <div className="text-zinc-300 font-medium mt-0.5">{currentCase.beforeStats.color}</div>
                  <div className="text-zinc-500 mt-1">{currentCase.beforeStats.harmony}</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-950/50 border border-amber-500/30">
                  <span className="text-amber-400 block font-mono text-[9px]">RESULTADO FINAL</span>
                  <div className="text-amber-200 font-medium mt-0.5">{currentCase.afterStats.color}</div>
                  <div className="text-zinc-400 mt-1">{currentCase.afterStats.harmony}</div>
                </div>
              </div>

              {/* Direct WhatsApp Call for Case Evaluation */}
              <a
                href={`https://wa.me/5519989956446?text=${encodeURIComponent(`Olá, Dra. Caroline Tigre! Vi o caso clínico "${currentCase.title}" e gostaria de uma avaliação diagnóstica para o meu sorriso.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 hover:brightness-110 transition-all shadow-md"
              >
                <span>Solicitar Avaliação Semelhante</span>
                <Sparkles className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
