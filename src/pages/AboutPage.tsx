import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Cpu, Users, Target, CheckCircle2, ArrowRight, Wrench, Factory } from 'lucide-react';
import { COMPANY_INFO, WORK_PROCESS_STEPS } from '../data/companyData';
import { ConversionCta } from '../components/home/ConversionCta';
import AnimatedContent from '../components/ui/AnimatedContent';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "Sobre a Sanatel | Excelência em Comunicação Visual e Fachadas em Brasília DF";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-sanatel-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A0306] border-b border-sanatel-border overflow-hidden">
        <div className="absolute inset-0 bg-arch-grid opacity-35 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-crimson pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll" stagger={0.08}>
            <div className="max-w-3xl space-y-4">
              <span className="tech-label text-xs font-bold text-sanatel-red bg-sanatel-surface px-3 py-1 rounded-md border border-sanatel-border">
                QUEM SOMOS // AUTORIDADE NO DISTRITO FEDERAL
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-tight">
                ENGENHARIA VISUAL & IDENTIDADE CORPORATIVA DE ALTO IMPACTO
              </h1>
              <p className="text-lg text-sanatel-gray-300 leading-relaxed">
                Combinamos maquinário próprio de alta precisão, rigor de engenharia estrutural e equipe qualificada para entregar fachadas e sinalizações que transformam pontos comerciais em referências arquitetônicas no DF.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Main Story & Leadership (2-Color Gradient between White and Soft Architectural Red) */}
      <section className="py-24 bg-gradient-to-b from-white to-[#FAF0F0] border-b border-slate-300 text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-light-blueprint opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 relative">
                <div className="rounded-3xl overflow-hidden border-2 border-sanatel-red/30 shadow-2xl aspect-[4/3] bg-slate-950 group">
                  <img
                    src="/assets/direcao-tecnica-sanatel.webp"
                    alt="Direção Técnica e Engenharia Visual no DF - Michael Thiago Silva Cardoso na Sanatel Comunicação Visual"
                    width={640}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-slate-950 border border-slate-800 p-5 rounded-2xl shadow-2xl backdrop-blur-md hidden sm:block max-w-xs text-white">
                  <div className="text-xs tech-label text-sanatel-red font-bold">DIREÇÃO GERAL & RESPONSABILIDADE TÉCNICA</div>
                  <div className="text-base font-bold text-white mt-0.5">{COMPANY_INFO.director}</div>
                  <div className="text-xs text-slate-400 mt-1">Supervisão técnica presencial e rigor construtivo em cada obra no DF.</div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="tech-label text-xs font-bold text-sanatel-red">
                  NOSSA TRAJETÓRIA E COMPROMISSO
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-slate-950">
                  DA OFICINA DE PRECISÃO À REFERÊNCIA EM FACHADAS NO DISTRITO FEDERAL
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A <strong className="text-slate-950 font-bold">Sanatel Comunicação Visual</strong> foi estruturada com uma premissa clara: resolver a principal dor de empresas e arquitetos em Brasília — a falta de acabamento milimétrico, atrasos sistemáticos e o desgaste prematuro de fachadas expostas ao clima rigoroso do Planalto Central.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Para entregar um padrão inigualável, investimos pesado em <strong className="text-slate-950 font-bold">maquinário industrial próprio de grande porte</strong> e impressoras industriais. Ao eliminar intermediários e subcontratados, entregamos preço competitivo direto da fábrica, cumprimento escrupuloso de cronogramas e tolerância métrica de 0,05mm em dobras e usinagens.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md">
                    <div className="text-2xl font-extrabold text-sanatel-red tech-label">100%</div>
                    <div className="text-xs text-slate-700 font-semibold mt-1">Produção Própria em Brasília</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md">
                    <div className="text-2xl font-extrabold text-slate-950 tech-label">NR-35</div>
                    <div className="text-xs text-slate-700 font-semibold mt-1">Equipe Certificada p/ Altura</div>
                  </div>
                </div>
              </div>

            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-gradient-to-b from-[#120305] to-[#0A0A0A] border-b border-sanatel-border relative overflow-hidden">
        <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-crimson pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="tech-label text-xs font-bold text-sanatel-red">
                ENGENHARIA DO PROCESSO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white">
                COMO TRABALHAMOS DO PROJETO À ENTREGA DA CHAVE
              </h2>
              <p className="text-sm text-sanatel-gray-400">
                Fluxo industrial transparente, metrificado e sem improvisos no canteiro de obras.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll" stagger={0.08} delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WORK_PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className="relative p-[2.5px] rounded-2xl overflow-hidden group shadow-xl shadow-black/40 flex flex-col justify-between"
                >
                  {/* Luminous Animated Edge Beam */}
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(227,38,46,0.45)_240deg,#E3262E_310deg,#FFFFFF_345deg,#E3262E_355deg,transparent_360deg)] opacity-85 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_6s_linear_infinite] drop-shadow-[0_0_12px_rgba(227,38,46,0.45)]"
                    style={{
                      animationDuration: `${5.5 + idx * 0.7}s`,
                      willChange: 'transform'
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-sanatel-border/80 pointer-events-none" />

                  <div className="relative z-10 w-full h-full p-6 sm:p-7 rounded-[13.5px] bg-[#161619] group-hover:bg-[#19191d] transition-colors duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="font-mono text-3xl font-extrabold text-sanatel-red">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-sanatel-red transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-sanatel-gray-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Production Facilities Highlight (2-Color Gradient between Soft Red-White and Pure White) */}
      <section className="py-24 bg-gradient-to-b from-[#FAF0F0] to-white border-b border-slate-300 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div className="space-y-6">
                <span className="tech-label text-xs font-bold text-sanatel-red">
                  PARQUE DE MAQUINÁRIO PRÓPRIO
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-slate-950">
                  PRECISÃO INDUSTRIAL & SEGURANÇA ESTRUTURAL
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Nossa linha de produção em Brasília conta com maquinário próprio de alta precisão capaz de processar chapas inteiras de ACM e acrílico com tolerância micrométrica. Isso elimina arestas vivas, desníveis de bandejas e falhas de encaixe que comprometem fachadas executadas manualmente.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-sanatel-red mr-3 flex-shrink-0" />
                    <span>Mesa de usinagem com área útil para chapas inteiras de ACM</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-sanatel-red mr-3 flex-shrink-0" />
                    <span>Solda MIG/TIG e tratamento anticorrosivo de subestruturas</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-sanatel-red mr-3 flex-shrink-0" />
                    <span>Equipe própria de instalação treinada com NR-35 e NR-10</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-xl aspect-square bg-slate-900 group">
                  <img
                    src="/assets/maquina-usinagem-industrial.webp"
                    alt="Centro de Usinagem Sanatel"
                    width={500}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-xl aspect-square bg-slate-900 group">
                  <img
                    src="/assets/maquina-impressao-digital.webp"
                    alt="Impressão Digital Solvente Sanatel"
                    width={500}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </AnimatedContent>
        </div>
      </section>

      <ConversionCta />
    </div>
  );
};
