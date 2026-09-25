import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Sparkles, Send, Clock, ShieldCheck, MapPin, Phone } from 'lucide-react';

export const FAQAndContact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Quick form state
  const [patientName, setPatientName] = useState('');
  const [procedureChoice, setProcedureChoice] = useState('Lentes em Porcelana Pura');
  const [preferredTime, setPreferredTime] = useState('Período da Tarde');
  const [userNote, setUserNote] = useState('');

  const faqs = [
    {
      q: "É necessário desgastar os dentes naturais para colocar as lentes de contato em porcelana?",
      a: "Não na forma convencional. Trabalhamos sob a filosofia da odontologia minimamente invasiva. Graças à tecnologia de usinagem e cimentação atual, as lentes possuem espessuras ultrafinas (0.2mm a 0.4mm). Em muitos casos, o preparo é de frações de milímetro restritas ao esmalte ou mesmo de desgaste zero ('prepless'), preservando a dentina biológica sadia e a vitalidade do dente."
    },
    {
      q: "Qual a diferença real de durabilidade entre a Porcelana e a Resina Estratificada?",
      a: "A porcelana pura (como o Dissilicato de Lítio) é um material vítreo inerte, com longevidade clínica comprovada superior a 15 a 25 anos sem alteração de brilho ou cor. Já a resina estratificada de alta densidade possui longevidade de 5 a 10 anos, exigindo manutenções anuais de polimento diamantado para manter seu brilho espelhado inicial."
    },
    {
      q: "As lentes de porcelana podem manchar com café, vinho tinto ou cigarro?",
      a: "Não. A porcelana cerâmica passa por queima em forno de alta temperatura que cria uma superfície vitrificada e impermeável, isenta de microporosidades. Ela é 100% imune à penetração de corantes alimentares, ao contrário de restaurações de resina comuns."
    },
    {
      q: "Como funciona o teste prévio (mockup 3D) antes de iniciar qualquer procedimento?",
      a: "Após o escaneamento intraoral digital 3D da sua arcada, o projeto do novo sorriso é planejado em software e transferido para a sua boca com uma resina provisória (mockup). Você se olha no espelho, avalia o comprimento, a curvatura do lábio e a harmonia com o seu rosto antes de tomar qualquer decisão definitiva."
    },
    {
      q: "O procedimento dói durante ou após a realização?",
      a: "O tratamento é absolutamente indolor. Utilizamos anestésicos computadorizados modernos de alto conforto e técnicas atraumáticas com microscopia. Pacientes relatam tranquilidade total durante todas as etapas clínicas, sem qualquer sensibilidade pós-operatória significativa."
    },
    {
      q: "Como é estruturada a consulta diagnóstica no consultório do Cambuí em Campinas?",
      a: "A consulta é uma imersão exclusiva de até 90 minutos onde a Dra. Caroline Tigre realiza o protocolo fotográfico completo de estúdio, análise facial visagista, escaneamento intraoral tridimensional e ouve detalhadamente suas queixas e desejos para elaborar um plano sob medida com estimativa de tempo e investimento."
    }
  ];

  const handleSendSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = patientName.trim() || 'Paciente';
    const textMessage = `Olá, Dra. Caroline Tigre! Meu nome é ${cleanName}. Gostaria de solicitar o agendamento de uma Consulta Diagnóstica no Cambuí.\n\nProcedimento de interesse: ${procedureChoice}\nPeríodo de preferência: ${preferredTime}${userNote ? `\nObservação: ${userNote}` : ''}`;
    
    const url = `https://wa.me/5519989956446?text=${encodeURIComponent(textMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="duvidas" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-sans-clean uppercase tracking-widest text-amber-400 font-semibold inline-flex items-center gap-2">
            <span className="w-5 h-[1px] bg-amber-400"></span>
            <span>Perguntas Frequentes &amp; Pré-Agendamento</span>
            <span className="w-5 h-[1px] bg-amber-400"></span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-zinc-100 font-normal tracking-tight">
            Transparência Absoluta para sua{' '}
            <span className="italic text-gold-gradient">Segurança e Decisão.</span>
          </h2>

          <p className="text-zinc-400 font-sans-clean text-base sm:text-lg font-light leading-relaxed">
            Esclareça as principais dúvidas clínicas sobre os tratamentos e envie suas preferências diretamente para a nossa recepção no Cambuí.
          </p>
        </div>

        {/* 2 Columns: FAQ Accordion + Quick VIP Booking Form */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-zinc-900/70 border-amber-500/40 shadow-lg'
                      : 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700/80'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif-luxury text-lg sm:text-xl text-zinc-100 font-medium">
                      {faq.q}
                    </span>
                    <div className={`p-1.5 rounded-full border shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500/20 border-amber-500/40 text-amber-300' : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-300 font-sans-clean font-light leading-relaxed border-t border-zinc-800/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Direct Pre-Booking Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 sm:p-8 relative shadow-2xl">
              
              <div className="space-y-2 pb-6 border-b border-zinc-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Agenda Aberta · Cambuí Campinas</span>
                </div>
                <h3 className="font-serif-luxury text-2xl text-zinc-100 font-normal">
                  Solicitar Diagnóstico Estético
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Preencha suas preferências abaixo para iniciar o atendimento direto com nossa concierge pelo WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSendSchedule} className="mt-6 space-y-4 text-xs font-sans-clean">
                
                <div>
                  <label className="block text-zinc-300 font-medium mb-1.5">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Ex: Dra. Mariana Costa"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/80 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1.5">
                    Procedimento Desejado
                  </label>
                  <select
                    value={procedureChoice}
                    onChange={(e) => setProcedureChoice(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-amber-400/80 transition-colors"
                  >
                    <option value="Lentes em Porcelana Pura">Lentes em Porcelana Pura (Dissilicato / Feldspato)</option>
                    <option value="Resina Estratificada de Alta Densidade">Resina Estratificada de Alta Densidade (Sessão Direta)</option>
                    <option value="Avaliação Global & Visagismo Facial">Avaliação Global do Sorriso &amp; Visagismo</option>
                    <option value="Ainda não tenho certeza / Preciso de orientação">Ainda não sei ao certo / Quero orientação da Dra.</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1.5">
                    Melhor Período para Atendimento
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreferredTime('Período da Manhã (09h às 12h)')}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        preferredTime.includes('Manhã')
                          ? 'bg-zinc-800 border-amber-500/50 text-amber-200'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Manhã (09h - 12h)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredTime('Período da Tarde (14h às 19h)')}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        preferredTime.includes('Tarde')
                          ? 'bg-zinc-800 border-amber-500/50 text-amber-200'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Tarde (14h - 19h)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1.5">
                    Alguma queixa específica? (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="Ex: Tenho diastema central ou dentes manchados..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/80 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#FFF0D4] via-[#E5C378] to-[#CBA258] hover:brightness-110 shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Prosseguir para WhatsApp</span>
                  </button>
                </div>

                <div className="text-[11px] text-center text-zinc-500 pt-1 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Seus dados são confidenciais e protegidos pela LGPD médica.</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
