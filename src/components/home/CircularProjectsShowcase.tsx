import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Layers, Eye } from 'lucide-react';
import { PROJECTS } from '../../data/companyData';
import { CircularCarousel, CircularCarouselItem } from '../ui/CircularCarousel';
import AnimatedContent from '../ui/AnimatedContent';

export const CircularProjectsShowcase: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Select all real projects executed by Sanatel as requested
  const items: CircularCarouselItem[] = PROJECTS.map((p) => ({
    src: p.image,
    alt: p.title,
    title: p.client,
    subtitle: p.category
  }));

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#10090c] to-[#1e080d] relative border-b border-sanatel-border overflow-hidden">
      {/* High-Tech Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-crimson opacity-90 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          threshold={0.15}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-sanatel-border text-center md:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-bold tech-label text-sanatel-red bg-sanatel-surface px-3 py-1 rounded-md border border-sanatel-border mx-auto md:mx-0">
                <Layers className="w-3.5 h-3.5" />
                <span>GALERIA 3D // OBRAS EXECUTADAS NO DISTRITO FEDERAL</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight text-center md:text-left">
                PORTFÓLIO DE PROJETOS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sanatel-red to-white">
                  EM VISTA CILÍNDRICA 3D
                </span>
              </h2>
            </div>
            <div className="mt-4 md:mt-0 space-y-2 max-w-sm text-center md:text-left mx-auto md:mx-0">
              <p className="text-sm text-sanatel-gray-400">
                Arraste com o mouse ou toque na tela para girar as obras e fachadas entregues pela Sanatel em Brasília e entorno.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-xs text-sanatel-red font-semibold tech-label">
                <Eye className="w-3.5 h-3.5 animate-pulse" />
                <span>Interativo • Arraste ou clique para focar</span>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* 3D Circular Carousel Clean on Screen - No black enclosing border box */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.9}
          ease="power3.out"
          threshold={0.1}
        >
          <div className="w-full relative" style={{ height: isMobile ? '520px' : '650px' }}>
            <CircularCarousel
              items={items}
              preset="cylinder"
              intro="none"
              cardWidth={isMobile ? 260 : 360}
              aspectRatio={1}
              speed={12}
              captions={false}
              gap={isMobile ? 18 : 28}
              tilt={-5}
              curve={1}
              perspective={isMobile ? 1800 : 2500}
              autoplay="drift"
              interval={3}
              direction="left"
              momentum={0.65}
              snap
              pauseOnHover
              focusOnClick
              draggable
              parallax={0.15}
              stretch={0.25}
              fadeColor="#10080a"
              depthFade={0.35}
              innerShade={1}
              cornerRadius={14}
            />
          </div>

          {/* Clean Sub-Bar: Direct CTA without surrounding card */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sanatel-gray-400 px-2 pt-2 border-t border-sanatel-border/30">
            <span className="font-medium">
              ★ Total de <strong className="text-white">{items.length} obras corporativas</strong> em exibição na matriz 3D
            </span>
            <Link
              to="/projetos"
              className="inline-flex items-center font-bold tech-label tracking-wider text-sanatel-red hover:text-white transition-colors group"
            >
              <span>Acessar especificações técnicas completas</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedContent>

      </div>
    </section>
  );
};
