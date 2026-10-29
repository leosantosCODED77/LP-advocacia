import React, { useState } from "react";
import { lawyerConfig, faqItems } from "../config/lawyerConfig";
import { buildWhatsAppUrl, copyToClipboard } from "../utils/whatsapp";
import { MessageSquare, Phone, Mail, MapPin, Clock, Send, Copy, Check, ChevronDown, ShieldCheck } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("Direito Empresarial & Contratos");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const formattedMsg = `*Contato / Análise de Caso — Dr. Ricardo Silva Advocacia*
---------------------------------------
*Nome:* ${name || "Não informado"}
*WhatsApp:* ${phone || "Não informado"}
*Área de Interesse:* ${area}
*Mensagem / Situação:* ${message || "Solicito contato para análise prévia"}
---------------------------------------
_Origem: Contato via site oficial._`;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl(formattedMsg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopy = async () => {
    const ok = await copyToClipboard(formattedMsg);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="contato" className="py-16 md:py-20 bg-[#080e1c] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
            Atendimento & Contato
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Inicie a análise do seu caso com agilidade e sigilo.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Envie as informações básicas do seu cenário para retorno direto pelo Dr. Ricardo Silva. Prazos processuais urgentes recebem atendimento prioritário no mesmo dia.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact Form + Office Info & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Quick Case Intake & WhatsApp Dispatch */}
          <div className="lg:col-span-6 bg-[#111e38] border border-slate-700/80 rounded-xl p-6 sm:p-8 shadow-xl">
            <div className="space-y-1 mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Canal Confidencial do Advogado</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Mensagem Rápida para o Dr. Ricardo
              </h3>
              <p className="text-xs text-slate-400">
                Preencha os campos abaixo para abrir o WhatsApp com o texto formatado.
              </p>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome ou da empresa"
                  className="w-full px-4 py-2.5 rounded bg-[#0c1426] border border-slate-800 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 98765-4321"
                    className="w-full px-4 py-2.5 rounded bg-[#0c1426] border border-slate-800 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
                    Área Principal
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-2.5 rounded bg-[#0c1426] border border-slate-800 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors cursor-pointer"
                  >
                    <option value="Direito Empresarial & Contratos">Direito Empresarial</option>
                    <option value="Contencioso Cível & Cobrança">Contencioso Cível</option>
                    <option value="Planejamento Sucessório & Holding">Holding & Sucessório</option>
                    <option value="Direito Imobiliário">Direito Imobiliário</option>
                    <option value="Urgência Processual">Urgência com Prazo</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
                  Resumo da Situação ou Dúvida
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Recebi uma notificação extrajudicial com prazo de 5 dias / Preciso revisar um contrato de sócios..."
                  className="w-full px-4 py-2.5 rounded bg-[#0c1426] border border-slate-800 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-[#0b1325] bg-[#c5a880] hover:bg-[#d6bc96] rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar para o WhatsApp do Dr. Ricardo</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full py-2.5 text-xs font-medium uppercase tracking-wider text-slate-300 hover:text-white bg-[#0c1426] hover:bg-[#18294a] border border-slate-800 rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Texto copiado para a área de transferência!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>Copiar Mensagem Formatada</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 text-center">
                <span>{lawyerConfig.responseTime}</span> · <span>Sigilo resguardado pelo Estatuto da OAB</span>
              </div>
            </form>
          </div>

          {/* Right Column: Office Credentials & Compact FAQ */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Office direct contacts card */}
            <div className="bg-[#111e38] border border-slate-700/80 rounded-xl p-6 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                Sede & Contatos Diretos
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>{lawyerConfig.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>{lawyerConfig.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>{lawyerConfig.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>{lawyerConfig.hours}</span>
                </div>
              </div>
            </div>

            {/* Quick FAQ (top questions essential for conversion) */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                Dúvidas Frequentes Rápidas
              </div>

              {faqItems.slice(0, 3).map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-lg border border-slate-800 bg-[#0c1426] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-[#111e38]/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-medium text-xs sm:text-sm text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-[#c5a880]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-slate-300 text-xs leading-relaxed border-t border-slate-800/60">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
