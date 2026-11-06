import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sliders, CheckCircle2, Shield, Ruler, Sparkles, Cpu, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedContent from '../ui/AnimatedContent';

interface LayerStage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  highlight: string;
  progress: number;
}

const STAGES: LayerStage[] = [
  {
    id: 1,
    title: "01. Subestrutura Tubular Galvanizada",
    subtitle: "Esquadro e Nivelamento a Laser",
    description: "Treliças e tubos de aço galvanizado soldados e fixados na alvenaria com parabolts de alta carga. Todo o plano é aferido com nível laser óptico para garantir tolerância zero de deformação sob vento.",
    specs: [
      { label: "Material da Estrutura", value: "Aço Carbono Galvanizado SAE 1020" },
      { label: "Ancoragem", value: "Chumbadores mecânicos parabolt inox" },
      { label: "Alinhamento", value: "Laser de prumo 3D milimétrico" }
    ],
    highlight: "Base estrutural com cálculo estático para ventos do DF",
    progress: 25
  },
  {
    id: 2,
    title: "02. Modulação & Bandejas de ACM",
    subtitle: "Usinagem Especializada & Fixação Oculta",
    description: "Chapas de alumínio composto (ACM 4mm) usinadas com fresa a 90° em formato de bandejas de alta precisão. Fixação estrutural com fita 3M VHB de alta adesão e vedação com silicone neutro PU.",
    specs: [
      { label: "Espessura do ACM", value: "4.0mm (lâminas de 0.21mm a 0.50mm)" },
      { label: "Adesivo Estrutural", value: "Fita Dupla Face Acrílica 3M VHB" },
      { label: "Juntas de Dilatação", value: "10mm com cordão de polietileno + silicone" }
    ],
    highlight: "Zero parafusos aparentes na face externa",
    progress: 50
  },
  {
    id: 3,
    title: "03. Iluminação & Letras Caixa 3D",
    subtitle: "Módulos LED IP67 & Tipografia em Relevo",
    description: "Instalação da tipografia tridimensional com relevo nobre de até 150mm. Passagem oculta de chicotes elétricos blindados e fixação de réguas LED com lentes de dispersão a 160°.",
    specs: [
      { label: "LEDs Empregados", value: "SMD 2835 alto fluxo IP67 (blindados)" },
      { label: "Consumo Elétrico", value: "Baixo consumo 12V com fontes automotivas" },
      { label: "Acabamento da Letra", value: "Acrílico difusor + lateral em PVC ou inox" }
    ],
    highlight: "Iluminação homogênea sem pontos escuros",
    progress: 75
  },
  {
    id: 4,
    title: "04. Fachada Concluída & Iluminada",
    subtitle: "Entrega Técnica & Máximo Impacto Comercial",
    description: "A composição final unificada: revestimento hermético, geometria monumental e identidade visual que valoriza o empreendimento e atrai clientes 24 horas por dia.",
    specs: [
      { label: "Pintura & Proteção", value: "Poliéster Kynar 500 c/ filtro UV" },
      { label: "Garantia Estrutural", value: "Garantia total Sanatel com laudo técnico" },
      { label: "Conformidade", value: "NR-35 trabalho em altura e normas ABNT" }
    ],
    highlight: "Obra autêntica entregue no Distrito Federal",
    progress: 100
  }
];

export const AcmConstructionInteraction: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(4);
  const [isExplodedView, setIsExplodedView] = useState<boolean>(false);

  const currentData = STAGES.find((s) => s.id === activeStage) || STAGES[3];

  return (
    <section className="py-24 bg-gradient-to-b from-[#18080c] to-[#120a0e] relative overflow-hidden border-b border-sanatel-border">
      {/* Background Architectural Grid & Ambiance */}
      <div className="absolute inset-0 bg-arch-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-crimson-center opacity-85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-sanatel-border text-center md:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-bold tech-label text-sanatel-red bg-sanatel-surface px-3 py-1 rounded-md border border-sanatel-border mx-auto md:mx-0">
                <Layers className="w-3.5 h-3.5" />
                <span>EXPERIÊNCIA DE ASSINATURA ARQUITETÔNICA</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase text-center md:text-left">
                COMO CONSTRUÍMOS UMA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sanatel-red to-white">
                  FACHADA EM ACM SANATEL
                </span>
              </h2>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-sanatel-gray-400 max-w-sm text-center md:text-left mx-auto md:mx-0">
              Da engenharia de subestrutura metálica à usinagem de alta precisão e instalação final no DF. Interaja com as camadas abaixo.
            </div>
          </div>
        </AnimatedContent>

        {/* Interactive Workspace Grid */}
        <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll" delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Reconstruction Canvas (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Canvas with 3D Perspective Exploded Effect */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sanatel-black border border-sanatel-border shadow-2xl group [perspective:1000px]">
              
              {/* Layer 1: Substructure Simulation Grid */}
              <div 
                style={{ 
                  transform: isExplodedView ? 'translate3d(0, -15px, -60px) scale(0.95)' : 'translate3d(0, 0, 0)',
                  transformStyle: 'preserve-3d'
                }}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeStage >= 1 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full bg-slate-900 flex flex-col justify-between p-6 relative">
                  {/* Galvanized Steel Tubular Grid Wireframe */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_2px,transparent_2px),linear-gradient(to_bottom,#334155_2px,transparent_2px)] bg-[size:32px_32px] opacity-40"></div>
                  <div className="relative z-10 flex justify-between items-start text-xs tech-label text-cyan-400 font-mono">
                    <span className="bg-slate-950/80 px-2.5 py-1 rounded border border-cyan-500/40">
                      SUBESTRUTURA METÁLICA AÇO GALVANIZADO
                    </span>
                    <span className="bg-slate-950/80 px-2 py-1 rounded">PRUMO LASER: 0.00°</span>
                  </div>
                  <div className="relative z-10 text-[11px] tech-label text-slate-400">
                    FIXAÇÃO: PARABOLT 3/8" c/ TRATAMENTO ANTICORROSIVO
                  </div>
                </div>
              </div>

              {/* Layer 2: ACM Modulated Trays */}
              <div 
                style={{
                  transform: isExplodedView ? 'translate3d(0, -5px, -20px) scale(0.98)' : 'translate3d(0,0,0)',
                  transformStyle: 'preserve-3d'
                }}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeStage >= 2 ? 'opacity-90' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-700/80 relative flex items-center justify-center p-8">
                  {/* ACM Joints Grid Lines */}
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-4 pointer-events-none">
                    <div className="border border-sanatel-red/40 bg-neutral-800/80 rounded flex items-center justify-center text-[10px] tech-label text-sanatel-gray-400">BANDEJA 01 [PRECISÃO]</div>
                    <div className="border border-sanatel-red/40 bg-neutral-800/80 rounded flex items-center justify-center text-[10px] tech-label text-sanatel-gray-400">BANDEJA 02 [PRECISÃO]</div>
                    <div className="border border-sanatel-red/40 bg-neutral-800/80 rounded flex items-center justify-center text-[10px] tech-label text-sanatel-gray-400">BANDEJA 03 [PRECISÃO]</div>
                    <div className="border border-sanatel-red/40 bg-neutral-800/80 rounded flex items-center justify-center text-[10px] tech-label text-sanatel-gray-400">BANDEJA 04 [PRECISÃO]</div>
                    <div className="border border-sanatel-red/40 bg-neutral-800/80 rounded flex items-center justify-center text-[10px] tech-label text-sanatel-gray-400">BANDEJA 05 [PRECISÃO]</div>
                    <div className="border border-sanatel-red/40 bg-neutral-800/80 rounded flex items-center justify-center text-[10px] tech-label text-sanatel-gray-400">BANDEJA 06 [PRECISÃO]</div>
                  </div>
                  <div className="relative z-10 bg-black/70 px-4 py-2 rounded-lg border border-sanatel-red/30 text-center">
                    <span className="tech-label text-xs font-bold text-sanatel-red block">CHAPA ACM 4MM COM USINAGEM DE ALTA PRECISÃO</span>
                    <span className="text-[11px] text-sanatel-gray-300">Fita Dupla Face 3M VHB Estrutural + Silicone PU</span>
                  </div>
                </div>
              </div>

              {/* Layer 3: 3D Channel Letters & Lighting Circuit */}
              <div 
                style={{
                  transform: isExplodedView ? 'translate3d(0, 5px, 25px)' : 'translate3d(0,0,0)',
                  transformStyle: 'preserve-3d'
                }}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeStage >= 3 ? 'opacity-95' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-center p-6 relative">
                  <div className="relative z-10 flex flex-col items-center space-y-3">
                    <div className="w-20 h-20 rounded-full border-2 border-sanatel-red p-2 bg-black/80 shadow-[0_0_30px_rgba(227,38,46,0.8)]">
                      <img src="/assets/logo-sanatel-4k.png" alt="Sanatel 3D Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_12px_#E3262E]" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-widest text-white text-center filter drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                      SANATEL
                    </div>
                    <div className="tech-label text-xs text-sanatel-red bg-black/90 px-3 py-1 rounded border border-sanatel-red/40 shadow-lg">
                      MÓDULOS LED SMD 2835 IP67 • EFEITO HALO BACKLIGHT
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer 4: Final High-Impact Real Facade Image */}
              <div 
                className={`absolute inset-0 transition-all duration-700 ${
                  activeStage === 4 && !isExplodedView ? 'opacity-100' : isExplodedView ? 'opacity-40' : 'opacity-0'
                }`}
              >
                <img
                  src="/assets/fachada-pronto-sam.jpg"
                  alt="Fachada Monumental em ACM Realizada pela Sanatel em Brasília"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs tech-label text-white bg-sanatel-black/85 backdrop-blur-md p-3 rounded-lg border border-sanatel-border">
                  <span className="flex items-center text-green-400 font-bold">
                    <CheckCircle2 className="w-4 h-4 mr-1.5" /> OBRA ENTREGUE: CLÍNICA MÉDICA PRONTO SAM (DF)
                  </span>
                  <span className="text-sanatel-gray-300">100% OPERACIONAL</span>
                </div>
              </div>

              {/* Live Status HUD in Canvas */}
              <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
                <span className="tech-label text-[11px] bg-sanatel-black/90 text-sanatel-red font-bold px-3 py-1 rounded-md border border-sanatel-border backdrop-blur-md">
                  ETAPA 0{activeStage} DE 04
                </span>
                {isExplodedView && (
                  <span className="tech-label text-[10px] bg-amber-500/90 text-black font-extrabold px-2.5 py-1 rounded-md">
                    VISTA EXPLODIDA ARQUITETÔNICA
                  </span>
                )}
              </div>

              {/* View Toggle Button */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setIsExplodedView(!isExplodedView)}
                  className={`text-xs tech-label px-3 py-1.5 rounded-lg border backdrop-blur-md transition-all flex items-center space-x-1.5 ${
                    isExplodedView 
                      ? 'bg-sanatel-red text-white border-sanatel-red' 
                      : 'bg-sanatel-black/80 text-sanatel-gray-300 border-sanatel-border hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isExplodedView ? 'Visão Normal' : 'Explodir Camadas'}</span>
                </button>
              </div>

            </div>

            {/* Interactive Timeline Stepper Buttons */}
            <div className="grid grid-cols-4 gap-2 pt-2">
              {STAGES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveStage(s.id);
                    setIsExplodedView(false);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeStage === s.id
                      ? 'bg-sanatel-surface border-sanatel-red text-white shadow-[0_0_15px_rgba(227,38,46,0.25)]'
                      : 'bg-sanatel-black border-sanatel-border text-sanatel-gray-400 hover:text-sanatel-gray-200 hover:border-sanatel-border/80'
                  }`}
                >
                  <div className="tech-label text-[10px] text-sanatel-red font-bold">ETAPA 0{s.id}</div>
                  <div className="text-xs font-semibold truncate mt-0.5">{s.title.split('. ')[1]}</div>
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Technical Specification Inspector (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-sanatel-surface border border-sanatel-border space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sanatel-red/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-2">
                <span className="tech-label text-xs text-sanatel-red font-bold tracking-wider">
                  DETALHAMENTO CONSTRUTIVO
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {currentData.title}
                </h3>
                <div className="text-sm font-medium text-sanatel-gray-300">
                  {currentData.subtitle}
                </div>
              </div>

              <p className="text-sm text-sanatel-gray-400 leading-relaxed">
                {currentData.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="space-y-2.5 pt-2 border-t border-sanatel-border/80">
                {currentData.specs.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs py-1.5 border-b border-sanatel-border/40">
                    <span className="text-sanatel-gray-400 tech-label">{item.label}</span>
                    <span className="font-semibold text-white text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Engineering Highlight */}
              <div className="p-3.5 rounded-xl bg-sanatel-black border border-sanatel-border flex items-center space-x-3 text-xs text-sanatel-gray-200">
                <Shield className="w-5 h-5 text-sanatel-red flex-shrink-0" />
                <span>{currentData.highlight}</span>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <Link
                  to="/fachadas-em-acm-brasilia"
                  className="w-full inline-flex items-center justify-center py-3 px-6 bg-sanatel-red hover:bg-sanatel-red-hover text-white text-xs font-bold tech-label rounded-xl tracking-wider uppercase transition-colors"
                >
                  Conhecer Solução Completa em ACM
                </Link>
              </div>

            </div>

          </div>

          </div>
        </AnimatedContent>

      </div>
    </section>
  );
};

