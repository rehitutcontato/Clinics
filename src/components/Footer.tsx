import React from 'react';
import { ArrowUpRight, MessageCircle, MapPin, Clock, ShieldCheck, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/5519989956446?text=Ol%C3%A1%2C%20Dra.%20Caroline%20Tigre!%20Gostaria%20de%20reservar%20um%20hor%C3%A1rio%20no%20consult%C3%B3rio%20do%20Cambu%C3%AD.";

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800/80 relative overflow-hidden">
      
      {/* Pre-footer Grand Call-To-Action Banner */}
      <div className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950 py-20 md:py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
            <span>Atendimento Restrito &amp; Personalizado</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zinc-100 font-normal tracking-tight max-w-4xl mx-auto leading-tight">
            Pronto para transformar seu sorriso em uma{' '}
            <span className="italic text-gold-gradient">verdadeira assinatura de autoridade?</span>
          </h2>

          <p className="text-zinc-400 font-sans-clean text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Reserve seu diagnóstico estético no Cambuí e experimente o padrão de excelência de uma clínica pensada exclusivamente para você.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-950 bg-gradient-to-r from-[#FFF0D4] via-[#E5C378] to-[#CBA258] rounded-xl shadow-xl hover:brightness-110 hover:shadow-[0_0_35px_rgba(203,162,88,0.35)] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com a Recepção no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-xs text-zinc-400 font-mono">
              WhatsApp: +55 (19) 98995-6446
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-900">
          
          {/* Brand & Corporate Presence */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-serif-luxury text-2xl text-zinc-100 font-normal tracking-tight block">
                Dra. Caroline Tigre
              </span>
              <span className="text-xs text-amber-300/90 font-mono tracking-widest uppercase block">
                Odontologia Especializada
              </span>
            </div>

            <p className="text-xs text-zinc-400 font-sans-clean font-light leading-relaxed max-w-sm">
              Clínica boutique de alto padrão especializada em Lentes de Contato em Porcelana Pura e Resina Composta Estratificada de Alta Densidade no bairro Cambuí, Campinas - SP.
            </p>

            <div className="pt-2 text-xs font-mono text-zinc-400 space-y-1">
              <div>CRO-SP: Prática Especializada Registrada</div>
              <div>Instituto Tigre de Odontologia Estética</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs font-sans-clean">
              <li><a href="#filosofia" className="hover:text-amber-300 transition-colors">Filosofia Clínica</a></li>
              <li><a href="#procedimentos" className="hover:text-amber-300 transition-colors">Procedimentos</a></li>
              <li><a href="#casos-clinicos" className="hover:text-amber-300 transition-colors">Casos Clínicos</a></li>
              <li><a href="#jornada" className="hover:text-amber-300 transition-colors">A Jornada em 3 Fases</a></li>
              <li><a href="#instituto" className="hover:text-amber-300 transition-colors">Dra. Caroline Tigre</a></li>
              <li><a href="#duvidas" className="hover:text-amber-300 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Location & Practice Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Localização &amp; Horários
            </h4>
            <div className="space-y-2.5 text-xs font-sans-clean">
              <div className="flex items-start gap-2 text-zinc-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Bairro Cambuí, Campinas - SP<br />
                  <span className="text-zinc-400 text-[11px]">Estacionamento privativo com manobrista</span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-zinc-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Segunda a Sexta-feira: 09h às 19h<br />
                  <span className="text-zinc-400 text-[11px]">Atendimento exclusivamente com agendamento prévio</span>
                </span>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Reception */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-300">
              Contato Direto
            </h4>
            <div className="space-y-3 text-xs font-sans-clean">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="text-[10px] text-zinc-400 block font-mono">CONCIERGE WHATSAPP</span>
                    <strong className="text-zinc-200 text-xs font-mono">(19) 98995-6446</strong>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-300 transition-colors" />
              </a>

              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800 text-[11px] text-zinc-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 inline mr-1.5" />
                Consultas planejadas com intervalo de segurança e privacidade plena.
              </div>
            </div>
          </div>

        </div>

        {/* Corporate Legal Identification & Tech Signature */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans-clean text-zinc-400">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="text-zinc-400">
              © {new Date().getFullYear()} <strong className="text-zinc-300 font-medium">Caroline Tigre Odontologia Especializada LTDA</strong>. Todos os direitos reservados.
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">
              CNPJ: 42.189.504/0001-72 · Responsável Técnica: Dra. Caroline Tigre (CRO-SP) · Campinas / SP
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#filosofia" className="hover:text-zinc-400 transition-colors">Termos de Atendimento</a>
            <span className="text-zinc-800">·</span>
            <a href="#instituto" className="hover:text-zinc-400 transition-colors">Privacidade Médica</a>
            <span className="text-zinc-800">·</span>
            <div className="text-zinc-400">
              Desenvolvido por <span className="text-zinc-300 font-medium tracking-wide">Parvus Space</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
