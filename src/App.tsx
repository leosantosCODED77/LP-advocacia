/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PracticeAreas } from "./components/PracticeAreas";
import { AboutBio } from "./components/AboutBio";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ConsultationModal } from "./components/ConsultationModal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleConsultArea = (_areaTitle: string) => {
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b111e] text-slate-100 flex flex-col font-sans selection:bg-[#c5a880] selection:text-[#0b111e]">
      {/* Top Bar Navigation (Top Bar Contract) */}
      <Navbar onOpenConsultation={() => setIsConsultationModalOpen(true)} />

      {/* Landing page enxuta e focada em alta conversão - Exatamente 4 dobras/seções */}
      <main className="flex-grow">
        {/* DOBRA 1: Início - Foto do advogado ao lado do texto de defesa jurídica e patrimonial */}
        <Hero
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* DOBRA 2: Áreas de Atuação - 4 núcleos estratégicos objetivos */}
        <PracticeAreas onConsultArea={handleConsultArea} />

        {/* DOBRA 3: Sobre o Dr. Ricardo - Trajetória, formação USP/FGV e foto em atuação */}
        <AboutBio onOpenConsultation={() => setIsConsultationModalOpen(true)} />

        {/* DOBRA 4: Atendimento, Contato & FAQ - Envio direto no WhatsApp e respostas essenciais */}
        <ContactSection />
      </main>

      {/* Rodapé institucional com conformidade OAB */}
      <Footer />

      {/* Modal de Agendamento Direto */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      {/* Botão de WhatsApp Flutuante */}
      <FloatingWhatsApp />
    </div>
  );
}
