import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, ShieldCheck, Ruler, Sparkles, Layers,
  Phone, MessageSquare, MapPin, Eye, Cpu, Award, XCircle, HelpCircle, ChevronDown, ChevronUp, ZoomIn
} from 'lucide-react';
import { SERVICES, PROJECTS, COMPANY_INFO } from '../data/companyData';
import { ContactForm } from '../components/common/ContactForm';
import { ConversionCta } from '../components/home/ConversionCta';
import AnimatedContent from '../components/ui/AnimatedContent';
import { ImageModal, ImageModalData } from '../components/common/ImageModal';

export const ServiceDetailPage: React.FC<{ slugOverride?: string }> = ({ slugOverride }) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const activeSlug = slugOverride || paramSlug;

  const service = SERVICES.find(s => s.slug === activeSlug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedImage, setSelectedImage] = useState<ImageModalData | null>(null);

  useEffect(() => {
    if (service) {
      document.title = `${service.metaTitle}`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  // Filter real projects related to this service
  const relatedProjects = PROJECTS.filter(p => p.serviceSlug === service.slug);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-sanatel-black text-white">

      {/* 01. DEDICATED SERVICE HERO SECTION */}
      <section className="relative py-24 lg:py-32 bg-sanatel-dark border-b border-sanatel-border overflow-hidden">
        {/* Background photo overlay - gently brightened without excess as requested */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sanatel-dark/50 to-transparent" />
          <div className="absolute inset-0 bg-arch-grid opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Title & Commercial Hook (7 cols) */}
              <div className="lg:col-span-8 space-y-6">

                <div className="inline-flex items-center space-x-2 text-xs font-bold tech-label text-sanatel-red bg-sanatel-surface/90 px-3.5 py-1.5 rounded-md border border-sanatel-border backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SOLUÇÃO ESPECIALIZADA SANATEL // BRASÍLIA DF</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.08] text-white">
                  {service.title}
                </h1>

                <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-sanatel-gray-300 leading-snug">
                  {service.heroTagline}
                </p>

                <div className="p-4 rounded-xl bg-sanatel-surface/90 border border-sanatel-red/30 max-w-2xl backdrop-blur-md">
                  <p className="text-sm text-sanatel-gray-200 leading-relaxed font-medium">
                    {service.commercialHook}
                  </p>
                </div>

                {/* Conversion Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <a
                    href="#orcamento"
                    className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tech-label tracking-wider text-white uppercase bg-sanatel-red hover:bg-sanatel-red-hover rounded-xl shadow-[0_0_25px_rgba(227,38,46,0.4)] transition-all"
                  >
                    <span>Solicitar Cotação para {service.shortTitle}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para ${service.title} em Brasília.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-4 text-xs font-semibold tech-label text-sanatel-gray-200 hover:text-white bg-sanatel-surface/90 hover:bg-sanatel-elevated border border-sanatel-border rounded-xl transition-all"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 text-[#25D366]" />
                    <span>Conversar com Técnico no WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Highlight Card (4 cols) */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="rounded-2xl overflow-hidden border border-sanatel-border bg-sanatel-surface/90 shadow-2xl p-6 backdrop-blur-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-sanatel-border">
                    <span className="tech-label text-xs font-bold text-sanatel-red">{service.badge}</span>
                    <span className="text-[11px] text-green-400 font-mono">TOLERÂNCIA ±0.05MM</span>
                  </div>
                  <div 
                    className="aspect-[4/3] rounded-xl overflow-hidden bg-black relative group cursor-pointer"
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-sanatel-black/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-xl">
                        <ZoomIn className="w-3.5 h-3.5 text-sanatel-red" />
                        <span>Clique para ampliar foto</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-sanatel-gray-300">
                    Instalação técnica em todo o Distrito Federal por profissionais certificados com NR-35 e maquinário industrial próprio.
                  </div>
                </div>
              </div>

            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* 02. PROJETOS EXECUTADOS NO DF (MOVED UP TO SECTION 02 AS REQUESTED) */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-white to-[#FAF0F0] border-b border-slate-300 text-slate-900 relative overflow-hidden">
          {/* Refined Architectural Blueprint Watermark */}
          <div className="absolute inset-0 bg-light-blueprint opacity-70 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-300">
              <div>
                <span className="tech-label text-xs font-bold text-sanatel-red">PROJETOS EXECUTADOS NO DF</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase text-slate-950 mt-1">
                  OBRAS DE {service.shortTitle.toUpperCase()} EM BRASÍLIA
                </h3>
              </div>
              <Link to="/projetos" className="text-xs font-bold text-slate-700 hover:text-sanatel-red flex items-center mt-3 md:mt-0 transition-colors">
                Ver todos os projetos <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((proj) => (
                <div key={proj.id} className="rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:border-sanatel-red/60 transition-all flex flex-col justify-between group">
                  <div 
                    className="aspect-[4/3] bg-slate-900 overflow-hidden relative group/img cursor-pointer"
                    onClick={() => setSelectedImage({
                      src: proj.image,
                      alt: proj.title,
                      title: proj.title,
                      subtitle: `${proj.client} // ${proj.category}`,
                      badge: proj.category,
                      description: proj.description,
                      serviceSlug: proj.serviceSlug
                    })}
                    title={`Clique para ampliar foto de ${proj.title}`}
                  >
                    <img src={proj.image} alt={proj.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-950/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-xl">
                        <ZoomIn className="w-3.5 h-3.5 text-sanatel-red" />
                        <span>Clique para ampliar foto</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs tech-label text-sanatel-red font-bold">{proj.client}</div>
                      <div className="text-base font-extrabold text-slate-950 group-hover:text-sanatel-red transition-colors mt-1">{proj.title}</div>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">{proj.description}</p>
                    </div>

                    {proj.commercialImpact && (
                      <div className="pt-3 border-t border-slate-200 text-xs text-slate-800 font-semibold flex items-center">
                        <span className="text-sanatel-red mr-1.5">★</span> {proj.commercialImpact}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 02. COMMERCIAL CONTRAST SECTION (Why Ordinary Fails vs Sanatel Standard) */}
      {service.commercialContrast && (
        <section className="py-20 bg-sanatel-surface/50 border-b border-sanatel-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="tech-label text-xs font-bold text-sanatel-red">
                ANÁLISE DE RISCO X RETORNO
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white">
                O QUE ESTÁ EM JOGO NA SUA ESCOLHA
              </h2>
              <p className="text-sm text-sanatel-gray-400">
                A diferença visível entre o trabalho amador com custos ocultos e a engenharia visual profissional da Sanatel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Ordinary Competitor Card */}
              <div className="p-8 rounded-2xl bg-sanatel-black border border-red-950/60 space-y-4 shadow-xl relative overflow-hidden">
                <div className="flex items-center space-x-3 text-red-500 font-bold tech-label text-sm pb-4 border-b border-red-950">
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  <span>SEM A SANATEL (PADRÃO AMADOR DE MERCADO)</span>
                </div>
                <p className="text-sm text-sanatel-gray-400 leading-relaxed">
                  {service.commercialContrast.withoutSanatel}
                </p>
                <div className="text-xs text-red-400/80 pt-2 font-mono">
                  ⚠ Alto custo com retrabalho, perda de credibilidade e depreciação comercial.
                </div>
              </div>

              {/* Sanatel Standard Card */}
              <div className="p-8 rounded-2xl bg-sanatel-surface border border-sanatel-red/50 space-y-4 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sanatel-red/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center space-x-3 text-green-400 font-bold tech-label text-sm pb-4 border-b border-sanatel-border">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>COM A SANATEL (ENGENHARIA VISUAL INDUSTRIAL)</span>
                </div>
                <p className="text-sm text-sanatel-gray-200 leading-relaxed font-medium">
                  {service.commercialContrast.withSanatel}
                </p>
                <div className="text-xs text-green-400 pt-2 font-mono">
                  ✓ Garantia real, valorização do ponto comercial e atração contínua de clientes.
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 03. DETAILED SERVICE EXPLANATION & TECHNICAL SPECS */}
      <section className="py-24 border-b border-sanatel-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Description & Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="tech-label text-xs font-bold text-sanatel-red">
                VISÃO TÉCNICA E DIFERENCIAIS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
                PROJETADO PARA MÁXIMA DURABILIDADE NO CLIMA DE BRASÍLIA
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-sanatel-gray-300 leading-relaxed">
                {service.longDescription.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Applications List */}
              <div className="pt-6 border-t border-sanatel-border/60 space-y-3">
                <h4 className="tech-label text-xs font-bold text-white tracking-wider">
                  APLICAÇÕES PRINCIPAIS EM BRASÍLIA:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.applications.map((app, aIdx) => (
                    <div key={aIdx} className="flex items-center text-xs text-sanatel-gray-300 bg-sanatel-surface p-3 rounded-lg border border-sanatel-border">
                      <CheckCircle2 className="w-4 h-4 text-sanatel-red mr-2.5 flex-shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Technical Specifications Table (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-sanatel-surface border border-sanatel-border shadow-xl space-y-6">
                <div className="flex items-center space-x-3 pb-4 border-b border-sanatel-border">
                  <Ruler className="w-5 h-5 text-sanatel-red" />
                  <h3 className="text-lg font-bold text-white tech-label">
                    FICHA TÉCNICA DO SERVIÇO
                  </h3>
                </div>

                <div className="space-y-3">
                  {service.technicalSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-sanatel-black border border-sanatel-border/80 space-y-1">
                      <div className="text-[10px] tech-label text-sanatel-red font-bold">
                        {spec.label}
                      </div>
                      <div className="text-xs font-semibold text-white">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-sanatel-black/60 border border-sanatel-border text-xs text-sanatel-gray-400 space-y-2">
                  <div className="flex items-center text-white font-bold">
                    <ShieldCheck className="w-4 h-4 text-green-400 mr-2" />
                    Garantia e Suporte Sanatel
                  </div>
                  <div>
                    Acompanhamento técnico presencial com visita de medição gratuita em Brasília e no DF.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04. BENEFITS GRID */}
      <section className="py-24 bg-sanatel-dark border-b border-sanatel-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="tech-label text-xs font-bold text-sanatel-red">
              VANTAGENS COMPETITIVAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white">
              BENEFÍCIOS EXCLUSIVOS SANATEL
            </h2>
            <p className="text-sm text-sanatel-gray-400">
              Por que investir em {service.shortTitle} com nossa engenharia própria em Brasília.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((b, bIdx) => (
              <div
                key={bIdx}
                className="p-6 rounded-2xl bg-sanatel-surface border border-sanatel-border hover:border-sanatel-red/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-sanatel-red/20 text-sanatel-red flex items-center justify-center font-bold font-mono">
                    0{bIdx + 1}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-sanatel-red transition-colors">
                    {b.title}
                  </h4>
                  <p className="text-xs text-sanatel-gray-400 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. FREQUENTLY ASKED QUESTIONS (FAQ) PER SERVICE */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 bg-sanatel-dark border-b border-sanatel-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="tech-label text-xs font-bold text-sanatel-red">
                DÚVIDAS FREQUENTES & TRANQUILIDADE TÉCNICA
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white">
                PERGUNTAS SOBRE {service.shortTitle.toUpperCase()} EM BRASÍLIA
              </h2>
              <p className="text-xs sm:text-sm text-sanatel-gray-400">
                Esclareça prazos, garantias, processos de instalação e normas técnicas antes de contratar.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-sanatel-surface border border-sanatel-border overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:bg-sanatel-elevated transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                    <span className="text-sanatel-red flex-shrink-0">
                      {openFaqIndex === fIdx ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {openFaqIndex === fIdx && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-sanatel-gray-300 leading-relaxed border-t border-sanatel-border/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 07. DEDICATED CONVERSION QUOTE FORM */}
      <section id="orcamento" className="py-24 bg-sanatel-black border-b border-sanatel-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm defaultServiceSlug={service.slug} />
        </div>
      </section>

      {/* Internal Navigation to Other Services */}
      <section className="py-16 bg-sanatel-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between pb-6 border-b border-sanatel-border mb-6">
            <span className="tech-label text-xs font-bold text-sanatel-gray-400">OUTROS SERVIÇOS DISPONÍVEIS:</span>
            <Link to="/servicos" className="text-xs text-sanatel-red hover:underline">Ver matriz completa</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SERVICES.filter(s => s.slug !== service.slug).map((other) => (
              <Link
                key={other.id}
                to={`/${other.slug}`}
                className="p-3.5 rounded-xl bg-sanatel-surface hover:bg-sanatel-elevated border border-sanatel-border hover:border-sanatel-red/50 transition-all text-left"
              >
                <div className="text-[10px] tech-label text-sanatel-red font-bold">SANATEL</div>
                <div className="text-xs font-semibold text-white mt-1 truncate">{other.shortTitle}</div>
              </Link>
            ))}
          </div>
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
