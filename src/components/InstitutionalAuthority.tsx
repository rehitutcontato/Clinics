import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, MapPin, Check, Building2, Lock, Clock } from 'lucide-react';

export const InstitutionalAuthority: React.FC = () => {
  const credentials = [
    "Fundadora & Diretora Clínica do Instituto Tigre",
    "Especialista em Dentística Restauradora & Odontologia Estética de Alta Performance",
    "Pioneira em Protocolos Biomiméticos com Cerâmicas Ultrafinas e Resina Estratificada",
    "Membro de Sociedades Nacionais e Internacionais de Odontologia Estética",
    "Atuação consolidada no bairro Cambuí, Campinas - SP"
  ];

  const certifiedMaterials = [
    { name: "Ivoclar Vivadent", country: "Liechtenstein", note: "Líder global em Dissilicato de Lítio E.max" },
    { name: "Vita Zahnfabrik", country: "Alemanha", note: "Padrão de ouro em Cerâmica Feldspática" },
    { name: "Kuraray Noritake", country: "Japão", note: "Referência em microresinas nano-híbridas" },
    { name: "Tokuyama Dental", country: "Japão", note: "Tecnologia esférica de polimento diamantado" }
  ];

  const clinicDifferentiators = [
    {
      icon: <Lock className="w-5 h-5 text-amber-300" />,
      title: "Privacidade Absoluta & Discrição",
      desc: "Agenda intencionalmente espaçada para que você seja o único paciente na clínica durante o seu horário. Sem salas de espera cheias ou atrasos."
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-300" />,
      title: "Tempo Dedicado sem Pressa",
      desc: "Consultas de diagnóstico com até duas horas de duração para ouvir seus desejos, analisar cada proporção facial e construir um plano sob medida."
    },
    {
      icon: <Building2 className="w-5 h-5 text-amber-300" />,
      title: "Localização Nobre no Cambuí",
      desc: "Instalações modernas no endereço mais sofisticado de Campinas, com facilidade de acesso, estacionamento privativo e ambiente multissensorial relaxante."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-300" />,
      title: "Biossegurança Hospitalar Estrita",
      desc: "Protocolos rigorosos de desinfecção, esterilização grau cirúrgico e tecnologia de purificação de ar para proteção inegociável."
    }
  ];

  return (
    <section id="instituto" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stylized Portrait & Authority Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 shadow-2xl p-2">
              
              {/* Inner Artistic Medical Frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 flex flex-col justify-end p-8 border border-zinc-800/80">
                
                {/* Architectural Dark Luxury Pattern Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-900/60 z-10" />

                {/* Vector Monogram Aura */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
                
                <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-0 opacity-40">
                  <div className="w-24 h-24 rounded-full border border-amber-400/40 flex items-center justify-center">
                    <span className="font-serif-luxury text-4xl text-amber-200">CT</span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 mt-2">
                    INSTITUTO TIGRE
                  </span>
                </div>

                {/* Floating Bottom Card Over Scrim */}
                <div className="relative z-20 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-mono text-amber-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Cirurgiã-Dentista · CRO-SP</span>
                  </div>
                  <h3 className="font-serif-luxury text-3xl sm:text-4xl text-zinc-100 font-normal">
                    Dra. Caroline Tigre
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans-clean leading-relaxed font-light">
                    Referência regional em Campinas na criação de sorrisos naturais através de porcelanas puras e resinas de alta densidade.
                  </p>
                </div>

              </div>

              {/* Verified Badge pill */}
              <div className="absolute -bottom-4 right-6 bg-zinc-900 border border-amber-500/40 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2.5 z-30">
                <Award className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-medium text-zinc-200">Prática Clínica Exclusiva</span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-4">
              <div className="text-xs font-sans-clean uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-amber-400"></span>
                <span>Autoridade Institucional</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-zinc-100 font-normal tracking-tight leading-tight">
                A fusão entre ciência biomimética e a{' '}
                <span className="italic text-gold-gradient">arte da exclusividade.</span>
              </h2>

              <p className="text-zinc-400 font-sans-clean text-base sm:text-lg leading-relaxed font-light">
                Fundadora do <strong className="text-zinc-200 font-normal">Instituto Tigre</strong>, a Dra. Caroline Tigre consolidou seu nome em Campinas e no interior paulista ao romper deliberadamente com a odontologia massificada e impessoal.
              </p>

              <p className="text-zinc-400 font-sans-clean text-sm sm:text-base leading-relaxed font-light">
                Seu consultório boutique no nobre bairro Cambuí foi concebido para atender um número estritamente limitado de pacientes por dia. Cada caso clínico recebe um planejamento detalhado, unindo diagnósticos digitais avançados a materiais odontológicos importados com certificação europeia e japonesa.
              </p>
            </div>

            {/* Credential bullets */}
            <div className="space-y-2.5 pt-2">
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <div className="p-1 rounded-full bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-light">{cred}</span>
                </div>
              ))}
            </div>

            {/* Philosophy quote */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border-l-2 border-amber-400/80 border-y border-r border-zinc-800 text-xs sm:text-sm text-zinc-300 italic font-serif">
              &quot;O sorriso de alto padrão é aquele que ninguém desconfia ter sido feito em um consultório. A verdadeira elegância não grita; ela se impõe pela harmonia natural e pela confiança que você transmite ao falar.&quot;
              <div className="not-italic text-xs font-sans-clean text-amber-300/90 font-medium mt-3">
                — Dra. Caroline Tigre
              </div>
            </div>

          </div>

        </div>

        {/* International Materials Certifications */}
        <div className="mt-20 pt-16 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Garantia de Origem &amp; Biocompatibilidade
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-zinc-100 mt-1">
                Materiais com Certificação Internacional
              </h3>
            </div>
            <p className="text-xs text-zinc-400 max-w-md font-light">
              Não utilizamos compostos genéricos. Todos os blocos cerâmicos, sistemas de cimentação e compósitos possuem rastreabilidade oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifiedMaterials.map((mat) => (
              <div key={mat.name} className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <strong className="text-zinc-200 text-sm font-medium">{mat.name}</strong>
                  <span className="text-[10px] font-mono text-amber-300 uppercase px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-800">
                    {mat.country}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  {mat.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinic & Cambuí Atmosphere Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicDifferentiators.map((diff) => (
            <div key={diff.title} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/70 hover:border-amber-500/30 transition-all">
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 w-fit mb-4">
                {diff.icon}
              </div>
              <h4 className="font-serif-luxury text-lg text-zinc-100 font-medium">
                {diff.title}
              </h4>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
