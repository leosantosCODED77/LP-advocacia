import React, { useState, useEffect } from "react";
import { lawyerConfig } from "../config/lawyerConfig";
import { buildWhatsAppUrl, copyToClipboard } from "../utils/whatsapp";
import { X, Calendar, Send, Copy, Check, ShieldCheck, MapPin, Video, Clock } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [modality, setModality] = useState<"online" | "presencial">("online");
  const [period, setPeriod] = useState<string>("Manhã (09h às 12h)");
  const [subject, setSubject] = useState("");
  const [step, setStep] = useState<"form" | "confirm">("form");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalityText =
    modality === "online"
      ? "Videoconferência Segura (Google Meet/Teams)"
      : "Presencial (Av. Paulista, 1800 - São Paulo/SP)";

  const bookingMessage = `*Solicitação de Agendamento — Dr. Ricardo Silva Advocacia*
---------------------------------------
*Cliente:* ${name || "Não informado"}
*WhatsApp:* ${phone || "Não informado"}
*Modalidade:* ${modalityText}
*Período Desejado:* ${period}
*Assunto / Área:* ${subject || "Consulta jurídica geral"}
---------------------------------------
_Origem: Solicitação de consulta via landing page oficial._`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Por favor, preencha o seu nome.");
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
      setError("Por favor, preencha um WhatsApp válido com DDD.");
      return;
    }
    setError("");
    setStep("confirm");
  };

  const handleSendWhatsApp = () => {
    const url = buildWhatsAppUrl(bookingMessage);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopy = async () => {
    const ok = await copyToClipboard(bookingMessage);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#111e38] border border-slate-700 rounded-xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1 pr-8">
              <div className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                Atendimento Direto
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Agendar Consulta Jurídica
              </h3>
              <p className="text-xs text-slate-400">
                Escolha a modalidade de sua preferência. Retornaremos com opções de horários na agenda do Dr. Ricardo Silva.
              </p>
            </div>

            {error && (
              <div className="p-3 text-xs bg-rose-950/60 border border-rose-800 text-rose-200 rounded">
                {error}
              </div>
            )}

            {/* Modalidade */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                Modalidade de Atendimento:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setModality("online")}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col gap-1 ${
                    modality === "online"
                      ? "bg-[#18294a] border-[#c5a880] text-white"
                      : "bg-[#0c1426] border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <Video className="w-4 h-4 text-[#c5a880]" />
                    <span>Videoconferência</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Todo o Brasil e exterior</span>
                </button>

                <button
                  type="button"
                  onClick={() => setModality("presencial")}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col gap-1 ${
                    modality === "presencial"
                      ? "bg-[#18294a] border-[#c5a880] text-white"
                      : "bg-[#0c1426] border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <MapPin className="w-4 h-4 text-[#c5a880]" />
                    <span>Presencial</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Av. Paulista, São Paulo</span>
                </button>
              </div>
            </div>

            {/* Nome */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Dra. Mariana Costa ou Roberto Souza"
                className="w-full px-4 py-2.5 rounded bg-[#0c1426] border border-slate-800 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
              />
            </div>

            {/* WhatsApp */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
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

            {/* Período Preferencial */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                Período Preferencial:
              </label>
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="w-full px-4 py-2.5 rounded bg-[#0c1426] border border-slate-800 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors cursor-pointer"
              >
                <option value="Manhã (09h às 12h)">Manhã (09h às 12h)</option>
                <option value="Tarde (14h às 18h)">Tarde (14h às 18h)</option>
                <option value="Final do Dia (18h às 19h30)">Final do Dia (18h às 19h30)</option>
                <option value="Urgência (Mais breve possível)">Urgência (Mais breve possível)</option>
              </select>
            </div>

            {/* Assunto resumido */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                Assunto ou Área do Caso:
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Ex: Revisão de contrato societário / Dívida em execução"
                className="w-full px-4 py-2.5 rounded bg-[#0c1426] border border-slate-800 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                <span>Sigilo OAB Garantido</span>
              </div>

              <button
                type="submit"
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0b1325] bg-[#c5a880] hover:bg-[#d6bc96] rounded transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Avançar</span>
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2 pr-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c5a880]">
                <Check className="w-4 h-4" />
                <span>Solicitação Estruturada</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Confirmar Agendamento no WhatsApp
              </h3>
              <p className="text-xs text-slate-400">
                Revise os dados abaixo. Ao clicar no botão, o WhatsApp do Dr. Ricardo Silva será aberto para você confirmar o envio.
              </p>
            </div>

            {/* Message Preview */}
            <div className="p-4 rounded-lg bg-[#0c1426] border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed select-all">
              {bookingMessage}
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-[#0b1325] bg-[#c5a880] hover:bg-[#d6bc96] rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c5a880]/10"
              >
                <Send className="w-4 h-4" />
                <span>Abrir WhatsApp e Enviar</span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-[#18294a] hover:bg-[#203660] border border-slate-700 rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copiado para a área de transferência!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#c5a880]" />
                    <span>Copiar Dados do Agendamento</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{lawyerConfig.responseTime}</span>
              </span>
              <button
                type="button"
                onClick={() => setStep("form")}
                className="hover:text-white underline cursor-pointer"
              >
                Editar Informações
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
