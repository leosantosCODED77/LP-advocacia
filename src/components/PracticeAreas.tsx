import React from "react";
import { practiceAreas } from "../config/lawyerConfig";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface PracticeAreasProps {
  onConsultArea: (areaTitle: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onConsultArea }) => {
  return (
    <section id="atuacao" className="py-16 md:py-20 bg-[#080e1c] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
            Áreas de Atuação
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Soluções jurídicas estruturadas para cenários de alto impacto.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Concentramos nossa atuação em quatro núcleos estratégicos onde a rapidez de intervenção e a precisão técnica evitam perdas financeiras irreversíveis.
          </p>
        </div>

        {/* 4 Focused Cards in a 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="bg-[#111e38] border border-slate-700/80 hover:border-[#c5a880]/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#c5a880]">
                    {area.number}.
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                    Especialidade Titular
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {area.summary}
                </p>

                {/* Practical problems solved */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-medium text-slate-400">
                    Demandas frequentes solucionadas:
                  </div>
                  <ul className="space-y-1.5">
                    {area.problemsSolved.slice(0, 3).map((prob, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-[#c5a880] font-medium">
                  {area.highlight}
                </span>
                <button
                  onClick={() => onConsultArea(area.title)}
                  className="px-3 py-1.5 text-xs font-semibold text-white group-hover:text-[#0b1325] group-hover:bg-[#c5a880] bg-[#18294a] rounded transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Analisar Caso</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
