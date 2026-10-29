import React from "react";
import { lawyerConfig } from "../config/lawyerConfig";
import { Shield, MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060b14] border-t border-slate-800 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Top 3-Zone Mirror */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded border border-[#c5a880]/40 bg-[#111e38] flex items-center justify-center text-[#c5a880]">
                <Shield className="w-4 h-4 text-[#c5a880]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">
                {lawyerConfig.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Advocacia consultiva e contenciosa de alto padrão, focada na segurança jurídica de empresas, contratos e patrimônios.
            </p>
            <div className="text-[#c5a880] font-semibold text-xs font-mono">
              {lawyerConfig.oab}
            </div>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Atendimento & Localização
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{lawyerConfig.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>{lawyerConfig.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>{lawyerConfig.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>{lawyerConfig.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2">
              {lawyerConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#c5a880] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Ethical OAB Disclaimer */}
        <div className="p-4 rounded-lg bg-[#0b1325] border border-slate-800/80 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong className="text-slate-300">Aviso Legal & Ético:</strong> Este site tem finalidade estritamente informativa e institucional, em total conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB e com o Código de Ética e Disciplina da Advocacia. As informações aqui contidas não constituem parecer formal ou promessa de resultado vinculante. Cada caso exige análise aprofundada de documentos e circunstâncias específicas.
          </p>
        </div>

        {/* Bottom line: Copyright & Rights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {lawyerConfig.name} — Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacidade & LGPD Respeitada</span>
            <span>·</span>
            <span>São Paulo / Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
