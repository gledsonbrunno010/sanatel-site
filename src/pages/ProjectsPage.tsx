import React, { useState, useEffect } from 'react';
import { MapPin, X, Sparkles, TrendingUp } from 'lucide-react';
import { PROJECTS, ProjectItem, COMPANY_INFO } from '../data/companyData';
import { ConversionCta } from '../components/home/ConversionCta';
import AnimatedContent from '../components/ui/AnimatedContent';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    document.title = "Obras e Fachadas em Brasília DF | Portfólio Sanatel Comunicação Visual";
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll and handle Escape key for modal
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProject]);

  const categories = [
    { label: 'Todas as Obras', value: 'all' },
    { label: 'Fachadas em ACM', value: 'Fachada em ACM' },
    { label: 'Letras Caixa', value: 'Letras Caixa' },
    { label: 'Peças em Acrílico', value: 'Peças em Acrílico' },
    { label: 'Sinalização', value: 'Placas de Sinalização' }
  ];

  const filtered = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="bg-sanatel-black text-white">
      {/* Hero Header */}
      <section className="relative py-24 bg-gradient-to-b from-[#120a0e] to-[#1c080c] border-b border-sanatel-border overflow-hidden">
        <div className="absolute inset-0 bg-arch-grid opacity-35 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-crimson opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
            <div className="max-w-3xl space-y-4">
              <span className="tech-label text-xs font-bold text-sanatel-red bg-sanatel-surface px-3 py-1 rounded-md border border-sanatel-border">
                PORTFÓLIO COMPROVADO // OBRAS NO DF
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-tight">
                OBRAS EXECUTADAS COM RIGOR INDUSTRIAL NO DF
              </h1>
              <p className="text-lg text-sanatel-gray-300 leading-relaxed">
                Fotografias reais de projetos entregues pela Sanatel em Brasília e cidades satélites. Cada fachada e letreiro representa um cliente que elevou seu tíquete médio e autoridade no mercado local.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Filter Tabs - Compact & Single-Row Scrollable on Mobile */}
      <section className="py-2.5 sm:py-3.5 bg-sanatel-black border-b border-sanatel-border sticky top-[48px] sm:top-[54px] lg:top-[58px] z-30 backdrop-blur-md bg-sanatel-black/95">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap pb-0.5 sm:pb-0">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setActiveCategory(c.value)}
                className={`text-[11px] sm:text-xs tech-label px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border transition-all flex-shrink-0 whitespace-nowrap ${activeCategory === c.value
                  ? 'bg-sanatel-red text-white border-sanatel-red shadow-[0_0_12px_rgba(227,38,46,0.35)]'
                  : 'bg-sanatel-surface text-sanatel-gray-300 border-sanatel-border hover:text-white hover:border-sanatel-gray-500'
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Editorial Gallery (2-Color Gradient between White and Warm Architectural Red with Dark Accents) */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FAF0F0] border-b border-slate-300 text-slate-900 relative overflow-hidden">
        {/* Refined Architectural Blueprint Watermark */}
        <div className="absolute inset-0 bg-light-blueprint opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll" stagger={0.06}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, idx) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="relative p-[2.5px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Luminous Animated Red Beam */}
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(227,38,46,0.4)_240deg,#E3262E_300deg,#FF4D55_335deg,#E3262E_355deg,transparent_360deg)] opacity-85 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_7s_linear_infinite]"
                    style={{
                      animationDuration: `${6.5 + (idx % 6) * 0.8}s`,
                      willChange: 'transform'
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-slate-200/80 pointer-events-none" />

                  <div className="relative z-10 w-full h-full rounded-[13.5px] overflow-hidden bg-white flex flex-col justify-between">
                    {/* Image - 100% Bright, Crisp and Clear without Dark Filter or Overlay */}
                    <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />

                      <div className="absolute top-3 left-3 z-10">
                        <span className="tech-label text-[10px] font-bold bg-slate-950/95 text-sanatel-red px-2.5 py-1 rounded-md border border-slate-800 shadow-md">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 z-10 flex items-center text-xs text-white bg-slate-950/95 px-2.5 py-1 rounded-md border border-slate-700 shadow-md font-medium">
                        <MapPin className="w-3.5 h-3.5 text-sanatel-red mr-1.5" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-sanatel-red tech-label">
                          CLIENTE: {project.client}
                        </span>
                        <h3 className="text-lg font-extrabold text-slate-950 group-hover:text-sanatel-red transition-colors mt-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {project.commercialImpact && (
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-green-400 font-medium flex items-center shadow-inner">
                          <TrendingUp className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-sanatel-red" />
                          <span className="truncate">{project.commercialImpact}</span>
                        </div>
                      )}

                      <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs tech-label text-slate-500 font-semibold">
                        <span>Clique para ver especificações</span>
                        <span className="text-sanatel-red font-bold">Ver +</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="bg-sanatel-dark border border-sanatel-border rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-sanatel-black/80 hover:bg-sanatel-red border border-sanatel-border text-white flex items-center justify-center transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="tech-label text-xs font-bold text-sanatel-red">
                  {selectedProject.category} // {selectedProject.location}
                </span>
                <h3 id="modal-project-title" className="text-2xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <div className="text-xs text-sanatel-gray-400 font-semibold">
                  Cliente: {selectedProject.client} • Conclusão: {selectedProject.year}
                </div>
              </div>

              <p className="text-sm text-sanatel-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Commercial Impact Highlight */}
              {selectedProject.commercialImpact && (
                <div className="p-4 rounded-xl bg-sanatel-surface border border-green-500/30 flex items-start space-x-3 text-xs">
                  <Sparkles className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Resultado Comercial Obtido:</span>
                    <span className="text-green-300">{selectedProject.commercialImpact}</span>
                  </div>
                </div>
              )}

              {/* Technical Specifications */}
              <div className="space-y-2 pt-2 border-t border-sanatel-border">
                <span className="tech-label text-xs font-bold text-white block">
                  ESPECIFICAÇÕES APLICADAS NA OBRA:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.specs.map((s, idx) => (
                    <span key={idx} className="text-xs bg-sanatel-surface border border-sanatel-border px-3 py-1.5 rounded-lg text-sanatel-gray-200">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-sanatel-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Olá! Vi a obra "${selectedProject.title}" no site da Sanatel e gostaria de uma proposta similar para minha empresa no DF.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-sanatel-red hover:bg-sanatel-red-hover text-white text-xs font-bold tech-label rounded-xl tracking-wider uppercase transition-colors shadow-lg"
                >
                  Solicitar Proposta Similar no WhatsApp
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-sanatel-gray-400 hover:text-white"
                >
                  Fechar Visualização
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      <ConversionCta />
    </div>
  );
};
