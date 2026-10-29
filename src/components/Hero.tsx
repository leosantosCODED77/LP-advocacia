import React from "react";
import { lawyerConfig } from "../config/lawyerConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { Calendar, MessageSquare, ArrowRight, ShieldCheck, Check } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const quickWhatsAppUrl = buildWhatsAppUrl(
    "Olá, Dr. Ricardo Silva. Gostaria de solicitar uma análise prévia e agendar uma consulta jurídica estratégica."
  );

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-6 pb-12 md:pt-8 md:pb-14 border-b border-slate-800/80 bg-gradient-to-b from-[#0b1325] via-[#0d172e] to-[#0b1325]"
    >
      {/* Background subtle textures */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main 2-Column Split: Exact text alongside the Lawyer's Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subheadline & Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata (Strictly no pill chips) */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium tracking-wide text-[#c5a880]">
              <span className="font-semibold">{lawyerConfig.oab}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Direito Empresarial & Cível Estratégico</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>São Paulo & Nacional</span>
            </div>

            {/* Exact Headline as requested by user */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.14] [text-wrap:balance]">
              Defesa jurídica rigorosa e estratégica para proteger seu patrimônio.
            </h1>

            {/* Subheadline focused on decisive personal representation */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light max-w-xl">
              Atuação contenciosa e preventiva com foco em resultados concretos. Atendimento direto e pessoal com o Dr. Ricardo Silva, especialista pela USP e FGV, com total sigilo e agilidade para empresas, sócios e famílias.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b1325] bg-[#c5a880] hover:bg-[#d6bc96] rounded transition-all shadow-lg shadow-[#c5a880]/15 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
              >
                <Calendar className="w-4 h-4 text-[#0b1325]" />
                <span>Agendar Consulta</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-[#111e38] hover:bg-[#18294a] border border-slate-700/80 rounded transition-all flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4 text-[#c5a880]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Trust points list */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <span>Atendimento direto pelo Dr. Ricardo</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <span>Presencial na Paulista ou Videoconferência</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <span>Sigilo profissional integral (OAB e LGPD)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <span>Prioridade máxima para prazos judiciais</span>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Lawyer's Portrait right beside the text, refined and compact */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[330px] xl:max-w-[350px]">
              
              {/* Outer decorative soft glow with matching radius */}
              <div className="absolute -inset-1.5 rounded-[22px] bg-gradient-to-tr from-[#c5a880]/30 via-transparent to-[#c5a880]/15 blur-sm pointer-events-none" />

              {/* Main Photo Card with elegant rounded borders */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c5a880]/40 bg-[#111e38] shadow-2xl shadow-black/80 aspect-[4/5]">
                <img
                  src="/src/assets/images/lawyer_portrait_hero_1793283286738.jpg"
                  alt="Dr. Ricardo Silva - Advogado especialista ao lado do texto de defesa jurídica e patrimonial"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500 rounded-2xl"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Scrim caption seamlessly rounded */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1325]/95 via-[#0b1325]/75 to-transparent p-4 pt-8 rounded-b-2xl">
                  <div className="text-white font-serif text-base sm:text-lg font-bold">
                    Dr. Ricardo Silva
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#c5a880] font-mono tracking-wide">
                    OAB/SP 412.890 · Advogado Titular
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 KPI Figures strip (tight and clean) */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {lawyerConfig.kpis.map((kpi, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                {kpi.value}
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
