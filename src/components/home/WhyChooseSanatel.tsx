import React from 'react';
import { ShieldCheck, Cpu, Ruler, Clock, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/companyData';
import AnimatedContent from '../ui/AnimatedContent';

export const WhyChooseSanatel: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#200c11] to-[#120a0e] relative border-b border-sanatel-border overflow-hidden">
      {/* High-Tech Background Ambiance */}
      <div className="absolute inset-0 bg-arch-grid opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-crimson-center opacity-85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          threshold={0.15}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-bold tech-label text-sanatel-red bg-sanatel-surface px-3 py-1 rounded-md border border-sanatel-border">
            <span>DIFERENCIAIS TÉCNICOS & ENGENHARIA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            POR QUE ESCOLHER A SANATEL
          </h2>
          <p className="text-sm sm:text-base text-sanatel-gray-400">
            Eliminamos riscos na sua obra através de infraestrutura industrial própria, rigor métrico e compromisso inegociável com a segurança.
          </p>
        </AnimatedContent>

        {/* 4 Pillars Grid with Luminous Animated Borders */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          stagger={0.1}
          threshold={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {WHY_CHOOSE_US.map((pillar, idx) => (
            <div
              key={idx}
              className="relative p-[2.5px] rounded-2xl overflow-hidden group flex flex-col justify-between shadow-2xl shadow-black/50"
            >
              {/* Luminous Animated Edge Beam (Enhanced Visibility & 60fps Conic Rotation) */}
              <div
                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(227,38,46,0.45)_240deg,#E3262E_310deg,#FFFFFF_345deg,#E3262E_355deg,transparent_360deg)] opacity-85 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_6s_linear_infinite] drop-shadow-[0_0_12px_rgba(227,38,46,0.45)]"
                style={{
                  animationDuration: `${5.5 + idx * 0.7}s`,
                  willChange: 'transform'
                }}
              />

              {/* Ambient Static Border Layer */}
              <div className="absolute inset-0 rounded-2xl border border-sanatel-border/80 pointer-events-none" />

              {/* Solid High-Tech Card Body */}
              <div className="relative z-10 w-full h-full p-7 sm:p-8 rounded-[13.5px] bg-[#161619] group-hover:bg-[#19191d] transition-colors duration-300 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-3xl font-mono text-sanatel-red/80 group-hover:text-sanatel-red transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-sanatel-red/40 group-hover:bg-sanatel-red group-hover:scale-125 transition-all shadow-[0_0_8px_#E3262E]" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-sanatel-red transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-sanatel-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-sanatel-border/60 flex items-center text-[11px] tech-label text-sanatel-gray-400 group-hover:text-sanatel-gray-300">
                  <CheckCircle className="w-3.5 h-3.5 text-sanatel-red mr-2" />
                  <span>PADRÃO SANATEL</span>
                </div>
              </div>
            </div>
          ))}
        </AnimatedContent>

      </div>
    </section>
  );
};
