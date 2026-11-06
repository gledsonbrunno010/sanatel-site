import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Sparkles, ArrowRight, Target } from 'lucide-react';
import { SERVICES } from '../../data/companyData';
import AnimatedContent from '../ui/AnimatedContent';

const FACADE_SLIDES = [
  {
    image: '/assets/fachada-acm-bellavia-esquina.webp',
    title: 'Supermercados Bellavia (CNB 14 / Taguatinga)',
    spec: 'Mega Fachada de Esquina em ACM 4mm'
  },
  {
    image: '/assets/fachada-pronto-sam.jpg',
    title: 'Clínica Pronto Sam (Samambaia / Brasília)',
    spec: 'Fachada Monumental em ACM 4mm'
  },
  {
    image: '/assets/fachada-outlet-bras.png',
    title: 'Megaloja Outlet do Brás (DF)',
    spec: 'Painéis em ACM & Letras Caixa Gigantes'
  },
  {
    image: '/assets/fachada-cozinha-saborelle.webp',
    title: 'Cozinha Saborelle Gastronomia (DF)',
    spec: 'ACM Carmesim com Letras 3D Iluminadas'
  },
  {
    image: '/assets/fachada-supergasbras.webp',
    title: 'Supergasbras Distribuidora (DF)',
    spec: 'Fachada Corporativa em ACM Angular'
  },
  {
    image: '/assets/sede-sanatel.jpg',
    title: 'Unidade Fabril Sanatel (Brasília - DF)',
    spec: 'Modulação de ACM com Dobras de Precisão'
  }
];

export const ServicesShowcase: React.FC = () => {
  const acmService = SERVICES[0]; // Fachadas em ACM
  const otherServices = SERVICES.slice(1); // The other 5 services
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Monitor visibility so 2s timer only runs when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Infinite loop with exactly 2 seconds speed, active only when visible
  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return;
      setActiveSlide((prev) => (prev + 1) % FACADE_SLIDES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#120a0e] to-[#1c080c] relative border-b border-sanatel-border overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-crimson opacity-85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Aggressive Conversion Focus */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          threshold={0.15}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-sanatel-border text-center md:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight text-center md:text-left">
                SOLUÇÕES DE ALTO PADRÃO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sanatel-red to-white">
                  QUE TRANSFORMAM SEU PONTO EM UM ATIVO DE VENDAS
                </span>
              </h2>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-sanatel-gray-400 max-w-sm text-center md:text-left mx-auto md:mx-0">
              Da monumentalidade de fachadas em ACM ao requinte de letras caixa e acrílicos lapidados. Sem terceirização, com tolerância milimétrica na usinagem.
            </div>
          </div>
        </AnimatedContent>

        {/* FLAGSHIP HERO SERVICE CARD: Fachadas em ACM (Asymmetric Layout) */}
        <AnimatedContent
          distance={80}
          direction="vertical"
          duration={0.85}
          ease="power3.out"
          threshold={0.15}
        >
          <div className="mb-14 rounded-3xl overflow-hidden bg-gradient-to-br from-sanatel-dark to-sanatel-surface border border-sanatel-red/40 shadow-2xl relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

              {/* Visual Side (7 cols) - Full Height & 2s Infinite Loop Slideshow */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-sanatel-black">
                {FACADE_SLIDES.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}

                {/* Flagship Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex items-center space-x-2">
                  <span className="tech-label text-[11px] sm:text-xs font-bold bg-sanatel-red text-white px-3 sm:px-3.5 py-1.5 rounded-lg shadow-lg">
                    ★ SERVIÇO FLAGSHIP // N°1 EM BRASÍLIA
                  </span>
                </div>

                {/* Real-time Work Legend & 2s Progress Indicators - Clean and Non-overlapping */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-5 sm:right-5 z-20 flex items-end justify-between gap-2">
                  <div className="bg-black/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/10 max-w-[75%] sm:max-w-[80%]">
                    <div className="text-[9px] sm:text-[10px] tech-label text-sanatel-red font-bold">OBRA REAL NO DF:</div>
                    <div className="text-[11px] sm:text-xs font-bold text-white truncate">{FACADE_SLIDES[activeSlide].title}</div>
                  </div>

                  {/* Looping Dots */}
                  <div className="flex items-center space-x-1.5 pb-1">
                    {FACADE_SLIDES.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        className={`block h-1.5 rounded-full transition-all duration-300 ${dotIdx === activeSlide ? 'w-5 sm:w-6 bg-sanatel-red shadow-[0_0_8px_#E3262E]' : 'w-1.5 bg-white/40'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Information & Specs Side (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="tech-label text-xs font-bold text-sanatel-red tracking-wider">
                      {acmService.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {acmService.title}
                    </h3>
                  </div>

                  {/* Commercial Hook Box */}
                  <div className="p-3.5 rounded-xl bg-sanatel-black border border-sanatel-border text-xs text-sanatel-gray-200 flex items-start space-x-2.5">
                    <Target className="w-4 h-4 text-sanatel-red flex-shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{acmService.commercialHook}</span>
                  </div>

                  <p className="text-sm text-sanatel-gray-300 leading-relaxed">
                    {acmService.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center text-xs text-sanatel-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-sanatel-red mr-2.5 flex-shrink-0" />
                      <span>Usinagem especializada com encaixes invisíveis e alta precisão</span>
                    </div>
                    <div className="flex items-center text-xs text-sanatel-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-sanatel-red mr-2.5 flex-shrink-0" />
                      <span>Chapas com pintura Kynar 500 resistentes à forte insolação do DF</span>
                    </div>
                    <div className="flex items-center text-xs text-sanatel-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-sanatel-red mr-2.5 flex-shrink-0" />
                      <span>Subestrutura em aço galvanizado calculada contra rajadas de vento</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-sanatel-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <Link
                    to={`/${acmService.slug}`}
                    className="inline-flex items-center justify-center text-xs font-bold tech-label tracking-wider text-white bg-sanatel-red hover:bg-sanatel-red-hover px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(227,38,46,0.35)] group/btn"
                  >
                    <span>Quero Valorizar Minha Fachada</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="tech-label text-xs text-sanatel-gray-400 text-center sm:text-right">
                    ATENDIMENTO EM TODO O DF
                  </span>
                </div>
              </div>

            </div>
          </div>
        </AnimatedContent>

        {/* 5 COMPLEMENTARY SERVICES (Modular Editorial Grid) */}
        <AnimatedContent
          distance={70}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          stagger={0.1}
          threshold={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {otherServices.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-2xl overflow-hidden bg-sanatel-surface border border-sanatel-border hover:border-sanatel-red/50 transition-all duration-300 flex flex-col justify-between group shadow-lg ${index === 0 ? 'lg:col-span-2 md:col-span-2' : ''
                }`}
            >
              {/* Card Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-sanatel-black">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="tech-label text-[10px] font-bold bg-sanatel-black/95 text-sanatel-red border border-sanatel-border px-2.5 py-1 rounded-md shadow-md">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <span className="tech-label text-[11px] text-sanatel-gray-400 font-medium">
                    {service.subtitle}
                  </span>
                  <h4 className="text-xl font-bold text-white group-hover:text-sanatel-red transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-sanatel-gray-300 leading-relaxed">
                    {service.commercialHook}
                  </p>
                </div>

                <div className="pt-4 border-t border-sanatel-border/60 flex items-center justify-between">
                  <Link
                    to={`/${service.slug}`}
                    className="inline-flex items-center text-xs font-bold tech-label tracking-wider text-sanatel-gray-200 group-hover:text-white transition-colors"
                  >
                    <span>Conhecer Detalhes & Orçamento</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-sanatel-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-sanatel-gray-400 font-mono">
                    DIRETO DA FÁBRICA
                  </span>
                </div>
              </div>

            </div>
          ))}
        </AnimatedContent>

      </div>
    </section>
  );
};
