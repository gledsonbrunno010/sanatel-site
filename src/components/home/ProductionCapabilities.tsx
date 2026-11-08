import React from 'react';
import { Cpu, Printer, Hammer, Gauge, ShieldAlert, Sparkles } from 'lucide-react';
import AnimatedContent from '../ui/AnimatedContent';

export const ProductionCapabilities: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#120a0e] to-[#220c11] relative border-b border-sanatel-border overflow-hidden">
      {/* High-Tech Background Ambiance */}
      <div className="absolute inset-0 bg-arch-grid opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-crimson opacity-85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-sanatel-border text-center md:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-bold tech-label text-sanatel-red bg-sanatel-surface px-3 py-1 rounded-md border border-sanatel-border mx-auto md:mx-0">
                <Cpu className="w-3.5 h-3.5" />
                <span>INFRAESTRUTURA INDUSTRIAL PRÓPRIA</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase text-center md:text-left">
                CAPACIDADE DE PRODUÇÃO & MAQUINÁRIO
              </h2>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-sanatel-gray-400 max-w-sm text-center md:text-left mx-auto md:mx-0">
              Investimos em máquinas de grande porte para garantir total independência operacional, rapidez de entrega e tolerâncias industriais.
            </div>
          </div>
        </AnimatedContent>

        {/* Machinery Grid (2 large featured items) */}
        <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll" stagger={0.1} delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Machine 1: Mesa de Corte e Usinagem */}
            <div className="relative p-[2.5px] rounded-3xl overflow-hidden group shadow-2xl shadow-black/50 flex flex-col justify-between">
              {/* Luminous Animated Edge Beam */}
              <div
                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(227,38,46,0.45)_240deg,#E3262E_310deg,#FFFFFF_345deg,#E3262E_355deg,transparent_360deg)] opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_8s_linear_infinite] drop-shadow-[0_0_15px_rgba(227,38,46,0.45)]"
                style={{ willChange: 'transform' }}
              />
              <div className="absolute inset-0 rounded-3xl border border-sanatel-border/80 pointer-events-none" />

              <div className="relative z-10 w-full h-full rounded-[21.5px] overflow-hidden bg-sanatel-surface p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sanatel-black border border-sanatel-border">
                    <img
                      src="/assets/maquina-usinagem-industrial.png"
                      alt="Centro de Usinagem e Corte de Alta Precisão Sanatel - Corte e Fresagem de ACM e Acrílico"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="tech-label text-xs font-bold bg-sanatel-black/90 text-sanatel-red border border-sanatel-border px-3 py-1 rounded-md backdrop-blur-md">
                        USINAGEM & CORTE INDUSTRIAL
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-sanatel-red transition-colors">
                      Corte & Usinagem Computadorizada
                    </h3>
                    <p className="text-xs sm:text-sm text-sanatel-gray-400 leading-relaxed">
                      Usinagem de chapas inteiras de ACM, acrílico virgem, MDF, PVC expandido e plásticos técnicos. A fresagem com ângulo de 90° permite dobras perfeitas de bandejas de ACM com cantos vivos e fechamento impecável.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-sanatel-border/60 text-xs">
                  <div className="bg-sanatel-black p-3 rounded-xl border border-sanatel-border">
                    <span className="text-sanatel-gray-400 block text-[10px] tech-label">ÁREA ÚTIL</span>
                    <span className="font-bold text-white tech-label">Grande Formato</span>
                  </div>
                  <div className="bg-sanatel-black p-3 rounded-xl border border-sanatel-border">
                    <span className="text-sanatel-gray-400 block text-[10px] tech-label">PRECISÃO</span>
                    <span className="font-bold text-sanatel-red tech-label">±0.05mm</span>
                  </div>
                  <div className="bg-sanatel-black p-3 rounded-xl border border-sanatel-border">
                    <span className="text-sanatel-gray-400 block text-[10px] tech-label">MATERIAIS</span>
                    <span className="font-bold text-white tech-label">ACM / Acrílico</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Machine 2: Impressão Digital Solvente */}
            <div className="relative p-[2.5px] rounded-3xl overflow-hidden group shadow-2xl shadow-black/50 flex flex-col justify-between">
              {/* Luminous Animated Edge Beam */}
              <div
                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(227,38,46,0.45)_240deg,#E3262E_310deg,#FFFFFF_345deg,#E3262E_355deg,transparent_360deg)] opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_9s_linear_infinite] drop-shadow-[0_0_15px_rgba(227,38,46,0.45)]"
                style={{ willChange: 'transform' }}
              />
              <div className="absolute inset-0 rounded-3xl border border-sanatel-border/80 pointer-events-none" />

              <div className="relative z-10 w-full h-full rounded-[21.5px] overflow-hidden bg-sanatel-surface p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sanatel-black border border-sanatel-border">
                    <img
                      src="/assets/maquina-impressao-digital.jpg"
                      alt="Máquina de Impressão Digital Solvente de Alta Resolução Sanatel"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="tech-label text-xs font-bold bg-sanatel-black/90 text-sanatel-red border border-sanatel-border px-3 py-1 rounded-md backdrop-blur-md">
                        IMPRESSORA DIGITAL SOLVENTE
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-sanatel-red transition-colors">
                      Impressão Digital Solvente de Alta Fidelidade
                    </h3>
                    <p className="text-xs sm:text-sm text-sanatel-gray-400 leading-relaxed">
                      Sistema de impressão de altíssima definição fotográfica com tintas originais resistentes à radiação ultravioleta. Utilizada para adesivagem de frotas comerciais, vitrines, lonas translúcidas e sinalização de interiores.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-sanatel-border/60 text-xs">
                  <div className="bg-sanatel-black p-3 rounded-xl border border-sanatel-border">
                    <span className="text-sanatel-gray-400 block text-[10px] tech-label">RESOLUÇÃO</span>
                    <span className="font-bold text-white tech-label">1440 DPI</span>
                  </div>
                  <div className="bg-sanatel-black p-3 rounded-xl border border-sanatel-border">
                    <span className="text-sanatel-gray-400 block text-[10px] tech-label">TINTAS</span>
                    <span className="font-bold text-sanatel-red tech-label">Eco-Solvente UV</span>
                  </div>
                  <div className="bg-sanatel-black p-3 rounded-xl border border-sanatel-border">
                    <span className="text-sanatel-gray-400 block text-[10px] tech-label">SUPORTE</span>
                    <span className="font-bold text-white tech-label">Vinil & Lona</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AnimatedContent>

      </div>
    </section>
  );
};

