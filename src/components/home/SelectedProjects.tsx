import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/companyData';
import AnimatedContent from '../ui/AnimatedContent';

export const SelectedProjects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS.slice(0, 12)
    : PROJECTS.filter(p => p.category.toLowerCase().includes(filter.toLowerCase())).slice(0, 12);

  const categories = [
    { label: 'Todos os Projetos', value: 'all' },
    { label: 'Fachadas em ACM', value: 'acm' },
    { label: 'Letras Caixa', value: 'letras' },
    { label: 'Peças em Acrílico', value: 'acrílico' },
    { label: 'Sinalização', value: 'sinalização' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FAF0F0] relative border-b border-slate-300/70 text-slate-900 overflow-hidden">
      {/* Refined Architectural Blueprint Watermark */}
      <div className="absolute inset-0 bg-light-blueprint opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-300/80 text-center md:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-bold tech-label text-sanatel-red bg-slate-950 px-3.5 py-1.5 rounded-md border border-slate-800 shadow-md mx-auto md:mx-0">
                <span>CASES REAIS ENTREGUES NO DF</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 uppercase text-center md:text-left">
                PORTFÓLIO DE OBRAS EXECUTADAS
              </h2>
            </div>
            
            {/* Category Filter Pills (Preserving the Dark Tone) */}
            <div className="mt-6 md:mt-0 flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setFilter(c.value)}
                  className={`text-xs tech-label px-3.5 py-1.5 rounded-lg border transition-all ${
                    filter === c.value
                      ? 'bg-sanatel-red text-white border-sanatel-red shadow-[0_0_12px_rgba(227,38,46,0.35)]'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* Projects Grid with Crisp Architectural Cards */}
        <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll" stagger={0.08} delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-sanatel-red/60 transition-all duration-300 group shadow-xl shadow-slate-900/10 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Project Image - 100% Bright, Zero Dark Overlay for Crystal-Clear Visibility */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="tech-label text-[11px] font-bold bg-slate-950/95 text-sanatel-red border border-slate-800 px-3 py-1 rounded-md shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-3 left-3 z-10 flex items-center text-xs text-white bg-slate-950/95 px-2.5 py-1 rounded-md border border-slate-700 shadow-lg font-medium">
                    <MapPin className="w-3.5 h-3.5 text-sanatel-red mr-1.5" />
                    <span>{project.location}</span>
                  </div>
                </div>

              {/* Project Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-sanatel-red tech-label">
                    CLIENTE: {project.client}
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-950 group-hover:text-sanatel-red transition-colors leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technical Specs Tags */}
                <div className="pt-3 border-t border-slate-200">
                  <div className="flex flex-wrap gap-1.5">
                    {project.specs.slice(0, 2).map((spec, sIdx) => (
                      <span key={sIdx} className="text-[10px] tech-label bg-slate-100 text-slate-800 px-2 py-1 rounded border border-slate-200/90 font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
          </div>
        </AnimatedContent>

        {/* View All Projects CTA */}
        <AnimatedContent distance={40} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
          <div className="mt-14 text-center">
            <Link
              to="/projetos"
              className="inline-flex items-center text-sm font-bold tech-label tracking-wider text-white bg-slate-950 hover:bg-black border border-slate-800 hover:border-sanatel-red/60 px-8 py-4 rounded-xl transition-all shadow-xl group"
            >
              <span>Acessar Galeria Completa de Obras</span>
              <ArrowRight className="w-4 h-4 ml-2.5 text-sanatel-red group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </AnimatedContent>

      </div>
    </section>
  );
};

