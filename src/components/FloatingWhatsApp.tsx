import React, { useState } from "react";
import { lawyerConfig } from "../config/lawyerConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { MessageSquare, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directUrl = buildWhatsAppUrl(
    "Olá, Dr. Ricardo Silva. Gostaria de solicitar informações sobre uma consulta jurídica."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip bubble on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#111e38] border border-slate-700 text-xs text-white shadow-xl animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="space-y-0.5">
            <p className="font-semibold text-[#c5a880]">Atendimento Direto</p>
            <p className="text-[11px] text-slate-300">Plantão para urgências judiciais</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={directUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0b1325]"
        aria-label="Conversar pelo WhatsApp com Dr. Ricardo Silva"
      >
        <MessageSquare className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
};
