import React, { useState } from 'react';
import { XCircle, CheckCircle, Sparkles, Eye, Compass, Shield, SunMedium } from 'lucide-react';
import { GoldenRatioSmile } from './DentalVisuals.tsx';

export const ClinicalPhilosophy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparativo' | 'visagismo'>('comparativo');

  const pillars = [
    {
      icon: <Eye className="w-5 h-5 text-amber-300" />,
      title: "Análise Visagista & Tom de Pele",
      desc: "O formato e a saturação de cada dente são calculados a partir dos traços faciais, formato dos lábios e subtom cutâneo do paciente, evitando tonalidades falsas ou frias.",
    },
    {
      icon: <SunMedium className="w-5 h-5 text-amber-300" />,
      title: "Reflexão Óptica Natural",
      desc: "Microtexturas superficiais que refratam a luz natural em múltiplos ângulos, exatamente como o esmalte biológico jovem, eliminando o aspecto artificial plano.",
    },
    {
      icon: <Compass className="w-5 h-5 text-amber-300" />,
      title: "Curvatura Labial & Proporção Áurea",
      desc: "Alinhamento milimétrico do arco incisal com o lábio inferior em repouso e em sorriso pleno, proporcionando harmonia estética instantânea.",
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-300" />,
      title: "Oclusão & Conforto Mastigatório",
      desc: "A estética nunca compromete a biologia. O planejamento respeita a musculatura mastigatória e guias caninas para estabilidade funcional vitalícia.",
    },
  ];

  return (
    <section id="filosofia" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="text-xs font-sans-clean uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
            <span className="w-6 h-[1px] bg-amber-400/80"></span>
            <span>Manifesto Clínico</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-zinc-100 font-normal tracking-tight leading-tight">
            Por que o sorriso padronizado perde o encanto — e como a metodologia autoral cria{' '}
            <span className="italic text-gold-gradient">perfeição indetectável.</span>
          </h2>

          <p className="text-zinc-400 font-sans-clean text-base sm:text-lg leading-relaxed font-light">
            A verdadeira sofisticação na odontologia estética reside naquilo que não parece construído. Enquanto o mercado massificado reproduz blocos brancos artificiais, o protocolo da Dra. Caroline Tigre traduz a individualidade anatômica de cada paciente.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-10 flex items-center gap-2 p-1 bg-zinc-900/80 border border-zinc-800 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab('comparativo')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'comparativo'
                ? 'bg-zinc-800 text-amber-200 shadow-sm border border-zinc-700/60'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Comparativo Clínico: Erro Comum vs. Protocolo Tigre
          </button>
          <button
            onClick={() => setActiveTab('visagismo')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'visagismo'
                ? 'bg-zinc-800 text-amber-200 shadow-sm border border-zinc-700/60'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Mapeamento de Proporção Áurea
          </button>
        </div>

        {/* Tab 1: Direct Comparative Manifesto */}
        {activeTab === 'comparativo' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* The Standard Mistake */}
            <div className="rounded-2xl bg-zinc-900/30 border border-zinc-800/80 p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center gap-2.5 pb-4 border-b border-zinc-800/60">
                <XCircle className="w-5 h-5 text-rose-400/90" />
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-zinc-300">
                  O Erro dos Tratamentos Padronizados
                </h3>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Procedimentos rápidos e sem planejamento facial resultam em sorrisos desproporcionais, com coloração uniforme e opaca que denunciam o trabalho artificial ao primeiro olhar.
              </p>

              <ul className="mt-6 space-y-4 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400/70 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-zinc-200 font-medium">Efeito &quot;Chiclete&quot; Monocromático:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">Dentes sem gradiente de cor entre colo, corpo e borda incisal, parecendo peças plásticas opacas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400/70 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-zinc-200 font-medium">Perda Rápida de Brilho &amp; Manchas:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">Resinas comuns sem alta densidade sofrem oxidação e microporosidades em poucos meses de ingestão de vinho ou café.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400/70 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-zinc-200 font-medium">Desgastes Dentais Agressivos:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">Mutilação do esmalte biológico por ausência de tecnologia de escaneamento e fresagem microscópica.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400/70 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-zinc-200 font-medium">Descompasso com a Curvatura Labial:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">Linha do sorriso invertida ou reta demais, causando sensação de envelhecimento precoce.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* The Dra. Caroline Tigre Autoral Protocol */}
            <div className="rounded-2xl bg-gradient-to-b from-zinc-900/90 via-zinc-900/60 to-zinc-950 border border-amber-500/30 p-6 sm:p-8 relative shadow-[0_0_30px_rgba(203,162,88,0.06)]">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-zinc-100">
                    A Metodologia Autoral Caroline Tigre
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300">
                  PADRÃO OURO
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                Cada elemento é desenhado sob os preceitos do visagismo e da biomimética, respeitando a passagem de luz, a textura do esmalte e a harmonia muscular.
              </p>

              <ul className="mt-6 space-y-4 text-xs sm:text-sm text-zinc-200">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-amber-200 font-medium">Microestratificação Policromática:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">Reprodução precisa dos três terços dentais: saturação cervical, opalescência no corpo e halo translúcido na borda incisal.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-amber-200 font-medium">Cerâmicas Importadas &amp; Nano-Resinas:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">Estruturas vítreas prensadas (Dissilicato de Lítio e Feldspáticas) com polimento nanométrico e resistência vitalícia a pigmentos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-amber-200 font-medium">Preservação Biológica Máxima:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">Espessuras ultrafinas de 0.2mm a 0.4mm com cimentação adesiva guiada, preservando a dentina e a vitalidade pulpar.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <div>
                    <strong className="text-amber-200 font-medium">Integração com Musculatura &amp; Fonética:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">Testes funcionais no mockup dinâmico para garantir fala fluida, conforto ao mastigar e repouso labial nobre.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        )}

        {/* Tab 2: Golden Ratio Diagram */}
        {activeTab === 'visagismo' && (
          <div className="mt-8 space-y-6">
            <GoldenRatioSmile />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-400">
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <strong className="text-zinc-200 font-medium">Proporção Áurea Incisal (1:1.618):</strong>
                <p className="mt-1 leading-relaxed">
                  A relação de largura entre o incisivo central, o lateral e o canino obedece à sequência de Fibonacci, gerando uma percepção inconsciente de beleza natural e equilíbrio estético ao olhar humano.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <strong className="text-zinc-200 font-medium">Corredor Bucal &amp; Expressão Rejuvenescedora:</strong>
                <p className="mt-1 leading-relaxed">
                  O preenchimento harmônico dos corredores laterais ao sorrir elimina sombras escuras indesejadas, conferindo luminosidade imediata ao terço inferior do rosto.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 hover:border-amber-500/30 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 w-fit mb-4 group-hover:scale-105 transition-transform">
                {pillar.icon}
              </div>
              <h4 className="font-serif-luxury text-lg text-zinc-100 font-medium">
                {pillar.title}
              </h4>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
