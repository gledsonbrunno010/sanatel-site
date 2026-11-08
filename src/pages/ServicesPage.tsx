import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Ruler, ArrowUpRight, Sparkles, Target, ZoomIn } from 'lucide-react';
import { SERVICES } from '../data/companyData';
import { ConversionCta } from '../components/home/ConversionCta';
import AnimatedContent from '../components/ui/AnimatedContent';
import { ImageModal, ImageModalData } from '../components/common/ImageModal';

export const ServicesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageModalData | null>(null);

  useEffect(() => {
    document.title = "Serviços de Comunicação Visual em Brasília DF | Fachadas em ACM e Letras Caixa | Sanatel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-sanatel-black text-white">
      {/* Hero Header */}
      <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] to-[#180306] border-b border-sanatel-border overflow-hidden">
        <div className="absolute inset-0 bg-arch-grid opacity-35 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-crimson pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
            <div className="max-w-3xl space-y-4">
              <span className="tech-label text-xs font-bold text-sanatel-red bg-sanatel-surface px-3 py-1 rounded-md border border-sanatel-border">
                SOLUÇÕES INTEGRADAS // BRASÍLIA DF
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-tight">
                CATÁLOGO DE SERVIÇOS & ENGENHARIA VISUAL
              </h1>
              <p className="text-lg text-sanatel-gray-300 leading-relaxed">
                Matriz completa de soluções para fachadas corporativas, letreiros luminosos, tipografia 3D, acrílicos lapidados e sinalização predial no Distrito Federal. Cada serviço conta com linha de usinagem industrial própria e tolerância milimétrica.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Services Detailed List (2-Color Gradient between White and Soft Architectural Red with Dark Accents) */}
      <section className="py-24 bg-gradient-to-b from-white to-[#FAF0F0] border-b border-slate-300 text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-light-blueprint opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          {SERVICES.map((service, index) => (
            <AnimatedContent key={service.id} distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
              <div className="relative p-[2.5px] rounded-3xl overflow-hidden group shadow-xl shadow-slate-900/10">
                {/* Luminous Animated Edge Beam */}
                <div
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(227,38,46,0.5)_240deg,#E3262E_310deg,#FFFFFF_345deg,#E3262E_355deg,transparent_360deg)] opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_8s_linear_infinite] drop-shadow-[0_0_12px_rgba(227,38,46,0.35)]"
                  style={{
                    animationDuration: `${7.5 + index * 0.8}s`,
                    willChange: 'transform'
                  }}
                />
                <div className="absolute inset-0 rounded-3xl border border-slate-200/90 pointer-events-none" />

                <div
                  className={`relative z-10 w-full h-full rounded-[21.5px] overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
              {/* Image Side (6 cols) Framed in Dark Bezel - Click to Open Pop-up */}
              <div 
                className={`lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-slate-300 shadow-xl group cursor-pointer ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
                onClick={() => setSelectedImage({
                  src: service.image,
                  alt: service.title,
                  title: service.title,
                  subtitle: service.subtitle,
                  badge: service.badge,
                  description: service.commercialHook || service.description,
                  serviceSlug: service.slug
                })}
                title={`Clique para ampliar foto de ${service.title}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="tech-label text-xs font-bold bg-slate-950/90 text-sanatel-red px-3 py-1 rounded-md border border-slate-800 backdrop-blur-md shadow-md">
                    {service.badge}
                  </span>
                </div>

                {/* Subtle Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-slate-950/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-xl">
                    <ZoomIn className="w-4 h-4 text-sanatel-red" />
                    <span>Clique para ampliar foto</span>
                  </span>
                </div>
              </div>

              {/* Content Side (6 cols) */}
              <div className={`lg:col-span-6 space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <span className="tech-label text-xs font-bold text-sanatel-red tracking-wider">
                    {service.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    {service.title}
                  </h2>
                </div>

                {service.commercialHook && (
                  <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200/90 text-xs text-slate-800 flex items-start space-x-2 font-medium">
                    <Target className="w-4 h-4 text-sanatel-red flex-shrink-0 mt-0.5" />
                    <span>{service.commercialHook}</span>
                  </div>
                )}

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  {service.benefits.slice(0, 3).map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start text-xs text-slate-700 space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-sanatel-red flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-950 font-bold">{b.title}:</strong> {b.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/${service.slug}`}
                    className="inline-flex items-center text-xs font-bold tech-label tracking-wider text-white bg-sanatel-red hover:bg-sanatel-red-hover px-6 py-3.5 rounded-xl transition-all shadow-lg group/btn"
                  >
                    <span>Conhecer Solução Completa</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/contato"
                    className="inline-flex items-center text-xs font-bold tech-label text-slate-700 hover:text-sanatel-red transition-colors"
                  >
                    Solicitar Visita Técnica →
                  </Link>
                </div>
              </div>

              </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <ConversionCta />

      {/* Services Image Preview Pop-up Modal */}
      <ImageModal
        data={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};
