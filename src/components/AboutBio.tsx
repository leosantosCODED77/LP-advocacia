import React from "react";
import { lawyerConfig } from "../config/lawyerConfig";
import { GraduationCap, Shield, UserCheck, Award, ArrowRight } from "lucide-react";

interface AboutBioProps {
  onOpenConsultation: () => void;
}

export const AboutBio: React.FC<AboutBioProps> = ({ onOpenConsultation }) => {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-[#0b1325] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
            Sobre o Advogado Titular
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Rigor artesanal, formação de excelência e visão estratégica.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Com mais de 14 anos de experiência no contencioso cível e consultoria empresarial, o Dr. Ricardo Silva conduz pessoalmente cada caso, eliminando os ruídos de escritórios de massa.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo & Local presence */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-[#111e38] shadow-2xl group aspect-[4/3]">
              <img
                src="/src/assets/images/lawyer_in_action_1793283287136.jpg"
                alt="Dr. Ricardo Silva em análise minuciosa de documentos contratuais e processo"
                className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0b1325] via-[#0b1325]/80 to-transparent flex items-center justify-between text-xs">
                <span className="text-white font-medium">Análise direta de cada peça processual</span>
                <span className="text-[#c5a880] font-mono">São Paulo · SP</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#111e38] border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>Atendimento presencial na Av. Paulista ou videoconferência</span>
              <span className="text-[#c5a880] font-semibold">{lawyerConfig.oab}</span>
            </div>
          </div>

          {/* Academic Background & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Formado pela tradicional <strong className="text-white font-medium">Faculdade de Direito da USP (Largo de São Francisco)</strong> e especialista em Direito Societário e Contratos Empresariais pela <strong className="text-white font-medium">FGV Direito SP</strong>, alia o domínio doutrinário à agilidade que o mercado moderno exige.
            </p>

            {/* Academic Credentials */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Formação & Especializações</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lawyerConfig.credentials.slice(0, 2).map((cred, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#111e38] border border-slate-800 text-xs">
                    <span className="font-semibold text-white block">{cred.degree}</span>
                    <span className="text-slate-400 block mt-0.5">{cred.institution} ({cred.year})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-[#111e38] border border-slate-800 flex items-center gap-2.5 text-xs">
                <UserCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span className="text-slate-200">Atendimento sem intermediários</span>
              </div>
              <div className="p-3 rounded-lg bg-[#111e38] border border-slate-800 flex items-center gap-2.5 text-xs">
                <Shield className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span className="text-slate-200">Sigilo profissional OAB & LGPD</span>
              </div>
              <div className="p-3 rounded-lg bg-[#111e38] border border-slate-800 flex items-center gap-2.5 text-xs">
                <Award className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span className="text-slate-200">Transparência em honorários</span>
              </div>
              <div className="p-3 rounded-lg bg-[#111e38] border border-slate-800 flex items-center gap-2.5 text-xs">
                <GraduationCap className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span className="text-slate-200">Atuação nacional eletrônica</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0b1325] bg-[#c5a880] hover:bg-[#d6bc96] rounded transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Falar Diretamente com o Dr. Ricardo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
