import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { WhatsAppIcon } from '../common/Icons';
import { COMPANY_INFO } from '../../data/companyData';
import AnimatedContent from '../ui/AnimatedContent';

export const ConversionCta: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#120a0e] to-[#200c12] relative overflow-hidden">
      {/* Visual Accent Glows & Architectural Ambiance */}
      <div className="absolute inset-0 bg-arch-grid opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-crimson-bottom opacity-90 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sanatel-red/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll" stagger={0.08}>
          <div className="inline-flex items-center space-x-2 text-xs font-bold tech-label text-sanatel-red bg-sanatel-surface px-4 py-1.5 rounded-full border border-sanatel-border">
            <Clock className="w-3.5 h-3.5" />
            <span>RESPOSTA ÁGIL EM ATÉ 2 HORAS ÚTEIS // VISITA TÉCNICA NO DF</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight pt-4">
            SUA EMPRESA NÃO PODE SE DAR AO LUXO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sanatel-red to-white">
              DE PASSAR DESPERCEBIDA NO DISTRITO FEDERAL
            </span>
          </h2>

          <p className="text-base sm:text-xl text-sanatel-gray-300 max-w-3xl mx-auto leading-relaxed pt-2">
            Cada dia com uma fachada apagada, desgastada ou amadora é um dia entregando clientes qualificados para a concorrência. Solicite uma consultoria presencial de medição e estudo de visibilidade — sem custo e sem intermediários.
          </p>

          {/* Dual Conversion Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              to="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-sm font-bold tech-label tracking-wider text-white uppercase bg-sanatel-red hover:bg-sanatel-red-hover rounded-xl shadow-[0_0_35px_rgba(227,38,46,0.5)] hover:shadow-[0_0_50px_rgba(227,38,46,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Solicitar Visita Técnica no DF</span>
              <ArrowRight className="w-4 h-4 ml-2.5" />
            </Link>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold tech-label tracking-wider text-white bg-[#166534] hover:bg-[#15803d] border-2 border-[#25D366] rounded-xl transition-all animate-pulse-whatsapp cursor-pointer relative group"
            >
              <span className="relative flex h-2.5 w-2.5 mr-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ade80]"></span>
              </span>
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              <span>Chamar no WhatsApp Direto da Fábrica</span>
            </a>
          </div>

          {/* Guarantees Badges */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-sanatel-gray-400">
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-sanatel-red mr-1.5" />
              Visita técnica presencial sem taxa de deslocamento no DF
            </span>
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-sanatel-red mr-1.5" />
              Mockup 3D realista antes de fabricar
            </span>
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-sanatel-red mr-1.5" />
              Garantia estrutural por escrito com laudo
            </span>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
