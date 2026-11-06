import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { HeroMotionGraphics } from './HeroMotionGraphics';
import AnimatedContent from '../ui/AnimatedContent';

export const HeroShowreel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Scroll-linked parallax & 3D depth transition (active on desktop for zero mobile jank)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Left Column (Text & CTAs): Rolls up and back into depth BEHIND the animation
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, -90]);
  const textScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.94]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0.2]);

  // Right Column (Motion Graphics Animation): Rises forward in front with higher z-index
  const animY = useTransform(scrollYProgress, [0, 0.8], [0, 25]);
  const animScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.06, 1.02]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-sanatel-black border-b border-sanatel-border [perspective:1200px]"
    >
      {/* 01. Clean Architectural Deep Black Background with Radiant Ambient Red Glows */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f0a0d] to-[#1a070a] pointer-events-none">
        {/* Architectural Tech Grid */}
        <div className="absolute inset-0 bg-arch-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-crimson opacity-80" />
        
        {/* Soft Ambient Cinematic Glows - Lightweight on mobile */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[220px] sm:h-[350px] bg-sanatel-red/20 rounded-full blur-[60px] sm:blur-[130px] will-change-transform" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[280px] sm:w-[500px] h-[200px] sm:h-[300px] bg-sanatel-red/25 rounded-full blur-[50px] sm:blur-[110px] will-change-transform" />
        
        {/* Bottom subtle gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-sanatel-black to-transparent" />
      </div>

      {/* Motion Trails & Geometric Overlay Vectors */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated Moving Point with Motion Trail */}
        <motion.div
          animate={{
            x: ['-10%', '110%'],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 h-[1px] w-48 bg-gradient-to-r from-transparent via-sanatel-red to-transparent will-change-transform"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFF]"></div>
        </motion.div>

        {/* Vertical and Horizontal Precision Lines */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden xl:block" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.03] hidden xl:block" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headlines, Subtitle, CTAs & Highlights (7 cols) 
              Rolls UP and BEHIND the animation on desktop scroll */}
          <motion.div 
            style={isDesktop ? { 
              y: textY, 
              scale: textScale, 
              opacity: textOpacity 
            } : undefined}
            className="lg:col-span-7 xl:col-span-6 space-y-6 relative z-10"
          >
            <AnimatedContent
              distance={80}
              direction="vertical"
              duration={0.9}
              ease="power3.out"
              trigger="mount"
              stagger={0.08}
            >
              {/* Top Architectural Badge with Squash-and-Stretch Circular Element */}
              <div className="inline-flex items-center space-x-3 bg-sanatel-surface/80 border border-sanatel-border rounded-full px-4 py-1.5 backdrop-blur-md">
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scaleX: [1, 1.25, 0.85, 1.15, 1],
                      scaleY: [1, 0.8, 1.25, 0.9, 1],
                      rotate: [0, 45, 90, 180, 360]
                    }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-3 h-3 rounded-full bg-sanatel-red shadow-[0_0_10px_#E3262E]"
                  />
                </div>
                <span className="tech-label text-xs font-semibold text-sanatel-gray-200 tracking-wider">
                  ★ ENGENHARIA VISUAL // DISTRITO FEDERAL
                </span>
              </div>

              {/* Oversized Expressive Headline in Original Format */}
              <div className="space-y-3 pt-4">
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05] uppercase">
                  FACHADAS EM ACM <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sanatel-red to-white">
                    EM BRASÍLIA
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Sua marca merece ser vista. Sua fachada precisa provar sua autoridade.
                </p>
                
                <p className="hidden sm:block text-sm sm:text-base text-sanatel-gray-300 max-w-2xl leading-relaxed">
                  Projetamos, fabricamos com maquinário próprio e instalamos fachadas em ACM e letras caixa de alto impacto no Distrito Federal. Não permita que sua empresa se confunda com a concorrência amadora.
                </p>
              </div>

              {/* Conversion Dual Actions - Sleek & Compact on Mobile */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2.5 sm:space-y-0 sm:space-x-4 pt-2 sm:pt-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center px-4 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold tech-label tracking-wider text-white uppercase bg-sanatel-red hover:bg-sanatel-red-hover rounded-xl shadow-[0_0_25px_rgba(227,38,46,0.35)] hover:shadow-[0_0_35px_rgba(227,38,46,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Solicitar Orçamento de Fachada</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" />
                </Link>

                <Link
                  to="/projetos"
                  className="inline-flex items-center justify-center px-4 py-2.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-medium tech-label tracking-wider text-sanatel-gray-200 hover:text-white bg-sanatel-surface/90 hover:bg-sanatel-elevated border border-sanatel-border hover:border-sanatel-red/50 rounded-xl transition-all"
                >
                  <span>Conhecer Obras Entregues no DF</span>
                </Link>
              </div>

              {/* Trust Highlights */}
              <div className="pt-6 grid grid-cols-2 gap-4 border-t border-sanatel-border/60 max-w-md">
                <div>
                  <div className="font-extrabold text-xl text-white tech-label">100%</div>
                  <div className="text-[11px] text-sanatel-gray-400">Fabricação Própria</div>
                </div>
                <div>
                  <div className="font-extrabold text-xl text-white tech-label">DF & Entorno</div>
                  <div className="text-[11px] text-sanatel-gray-400">Instalação c/ NR-35</div>
                </div>
              </div>
            </AnimatedContent>

          </motion.div>

          {/* Right Column: Motion Graphics Animation (5 cols on Desktop)
              Appears prominently on the right with higher z-index (z-30),
              making the left screen information scroll BEHIND it */}
          <motion.div 
            style={isDesktop ? { 
              y: animY, 
              scale: animScale 
            } : undefined}
            className="lg:col-span-5 xl:col-span-6 relative z-30 flex items-center justify-center"
          >
            <AnimatedContent
              distance={60}
              direction="vertical"
              duration={1}
              ease="power3.out"
              trigger="mount"
              delay={0.2}
            >
              <HeroMotionGraphics />
            </AnimatedContent>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
