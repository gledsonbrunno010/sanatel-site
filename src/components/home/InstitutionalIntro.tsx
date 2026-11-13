import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Cpu, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import AnimatedContent from '../ui/AnimatedContent';

export const InstitutionalIntro: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#120a0e] to-[#1e080d] relative border-b border-sanatel-border overflow-hidden">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-crimson opacity-85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Visual Storytelling & Factory */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedContent
              distance={60}
              direction="vertical"
              duration={0.8}
              ease="power3.out"
              threshold={0.15}
            >
              <div className="relative">
                {/* Main Machine / Director Image */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-sanatel-red/30 shadow-2xl bg-sanatel-surface aspect-[4/3] group">
                  <img
                    src="/assets/direcao-tecnica-sanatel.webp"
                    alt="Direção Técnica no Canteiro de Obras no DF - Michael Thiago Silva Cardoso da Sanatel"
                    width={640}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Engineering Badge */}
                <div className="absolute -bottom-6 -right-6 bg-sanatel-dark/95 border border-sanatel-border p-4 rounded-xl shadow-2xl backdrop-blur-md hidden sm:block max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-sanatel-red/20 text-sanatel-red">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tech-label">ENGENHARIA VISUAL DE PRECISÃO</div>
                      <div className="text-[11px] text-sanatel-gray-400">Padrão industrial milimétrico & durabilidade extrema no DF</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* Right Column: Architectural Narrative & Credibility (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedContent
              distance={70}
              direction="vertical"
              duration={0.85}
              ease="power3.out"
              stagger={0.08}
              threshold={0.15}
            >
              <div className="space-y-3 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 text-xs font-bold tech-label text-sanatel-red bg-sanatel-surface px-3 py-1 rounded-md border border-sanatel-border mx-auto lg:mx-0">
                  <Target className="w-3.5 h-3.5" />
                  <span>POSICIONAMENTO ESTRATÉGICO // BRASÍLIA DF</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase text-center lg:text-left">
                  COMUNICAÇÃO VISUAL NÃO É DECORAÇÃO. É O MAIOR ATIVO DE VENDAS DO SEU PONTO COMERCIAL.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-sanatel-gray-300 leading-relaxed pt-2">
                Quantos clientes qualificados sua empresa já perdeu para concorrentes que simplesmente <strong className="text-white">parecem mais profissionais do lado de fora</strong>? No mercado do Distrito Federal, seu ponto físico é julgado em frações de segundo. Uma fachada desbotada ou ondulada afasta compradores antes mesmo de entrarem.
              </p>

              <p className="text-sm sm:text-base text-sanatel-gray-400 leading-relaxed">
                Sob a liderança de <strong className="text-white">Michael Thiago Silva Cardoso</strong>, a <strong className="text-white">SANATEL COMUNICAÇÃO VISUAL</strong> elimina intermediários: projetamos, fabricamos com maquinário próprio e instalamos fachadas em ACM e letras caixa de alto padrão que impõem respeito e posicionam seu negócio como líder incontestável.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-sanatel-surface/50 border border-sanatel-border">
                  <CheckCircle2 className="w-5 h-5 text-sanatel-red flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Preço Justo Direto de Fábrica</h4>
                    <p className="text-xs text-sanatel-gray-400 mt-1">Sem margens de agenciadores. Seu investimento é 100% aplicado em material nobre.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-sanatel-surface/50 border border-sanatel-border">
                  <CheckCircle2 className="w-5 h-5 text-sanatel-red flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Prazos Rigorosamente Cumpridos</h4>
                    <p className="text-xs text-sanatel-gray-400 mt-1">Sua inauguração não pode atrasar. Controle absoluto do cronograma no DF.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <Link
                  to="/sobre"
                  className="inline-flex items-center text-sm font-bold tech-label tracking-wider text-sanatel-red hover:text-white transition-colors group"
                >
                  <span>Conhecer a infraestrutura da Sanatel</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedContent>
          </div>

        </div>
      </div>
    </section>
  );
};
