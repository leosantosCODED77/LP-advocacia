import React, { useState } from "react";
import { lawyerConfig } from "../config/lawyerConfig";
import { Menu, X, Shield, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b1325]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, no subtext pill clutter) */}
        <a
          href="#"
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-slate-100 hover:text-[#c5a880] transition-colors"
        >
          <div className="w-10 h-10 rounded border border-[#c5a880]/40 bg-[#111e38] flex items-center justify-center text-[#c5a880] group-hover:border-[#c5a880] transition-colors">
            <Shield className="w-5 h-5 text-[#c5a880]" />
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-white">
            {lawyerConfig.name}
          </span>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {lawyerConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#c5a880] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a880] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action Button */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0b1325] bg-[#c5a880] hover:bg-[#d6bc96] rounded transition-all shadow-sm flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
          >
            <span>Agendar Consulta</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded hover:bg-slate-800/60 transition-colors"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0b1325] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3">
            {lawyerConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-[#c5a880] py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#0b1325] bg-[#c5a880] rounded hover:bg-[#d6bc96] transition-all flex items-center justify-center gap-2"
            >
              <span>Agendar Consulta Jurídica</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs text-slate-400 text-center pt-2">
            <span>{lawyerConfig.oab}</span> · <span>Atendimento com horário marcado</span>
          </div>
        </div>
      )}
    </header>
  );
};
