import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon, PhoneGreenIcon } from './common/Icons';
import { SERVICES, COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sanatel-black border-t border-sanatel-border relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center space-x-3 group inline-block">
              <div className="relative w-12 h-12 flex-shrink-0">
                <img 
                  src="/assets/logo-sanatel.webp" 
                  alt="Sanatel Comunicação Visual" 
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(227,38,46,0.3)] group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight leading-none text-white">
                  SANATEL
                </span>
                <span className="tech-label text-xs text-sanatel-gray-400 tracking-[0.22em] font-medium leading-tight">
                  COMUNICAÇÃO VISUAL
                </span>
              </div>
            </Link>

            <p className="text-sm text-sanatel-gray-400 leading-relaxed max-w-sm">
              Especialistas em fachadas arquitetônicas em ACM, tipografia tridimensional em letras caixa, letreiros luminosos e sinalização corporativa de alta precisão em Brasília e DF.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-sanatel-surface hover:bg-sanatel-elevated border border-sanatel-border flex items-center justify-center hover:border-pink-500/40 transition-all shadow-sm group"
                aria-label="Instagram Sanatel"
              >
                <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-sanatel-surface hover:bg-sanatel-elevated border border-sanatel-border flex items-center justify-center hover:border-green-500/40 transition-all shadow-sm group"
                aria-label="WhatsApp Sanatel"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center text-xs text-sanatel-gray-400 bg-sanatel-surface px-3 py-1.5 rounded-md border border-sanatel-border">
                <ShieldCheck className="w-4 h-4 mr-2 text-sanatel-red" />
                <span>Empresa Certificada • NR-35 Trabalho em Altura</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="tech-label text-xs font-bold text-sanatel-red tracking-wider">
              NOSSOS SERVIÇOS
            </h4>
            <ul className="space-y-2.5 text-sm text-sanatel-gray-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/${s.slug}`}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-sanatel-border mr-2"></span>
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="tech-label text-xs font-bold text-sanatel-red tracking-wider">
              NAVEGAÇÃO RÁPIDA
            </h4>
            <ul className="space-y-2.5 text-sm text-sanatel-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors">Sobre a Sanatel</Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">Todos os Serviços</Link>
              </li>
              <li>
                <Link to="/projetos" className="hover:text-white transition-colors">Portfólio & Obras</Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">Solicitar Orçamento</Link>
              </li>
            </ul>

            <div className="pt-3">
              <h5 className="tech-label text-[11px] text-sanatel-gray-400 font-bold mb-1">
                TECNOLOGIA FABRIL
              </h5>
              <p className="text-xs text-sanatel-gray-400">
                Usinagem de alta precisão 0.05mm e impressão solvente de 1440 DPI.
              </p>
            </div>
          </div>

          {/* Contact & Location Column */}
          <div className="space-y-4">
            <h4 className="tech-label text-xs font-bold text-sanatel-red tracking-wider">
              ATENDIMENTO & CONTATO
            </h4>
            <ul className="space-y-3 text-sm text-sanatel-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sanatel-red flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.city} — Atendimento em todo o Distrito Federal e Entorno</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <PhoneGreenIcon className="w-4 h-4 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sanatel-red flex-shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="hover:text-white transition-colors break-all text-xs"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="text-xs text-sanatel-gray-400 pt-1">
                Horário: {COMPANY_INFO.businessHours}
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/contato"
                className="inline-flex items-center text-xs font-bold text-white bg-sanatel-surface hover:bg-sanatel-elevated px-4 py-2 rounded-lg border border-sanatel-border hover:border-sanatel-red/50 transition-all"
              >
                Solicitar cotação técnica <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-sanatel-red" />
              </Link>
            </div>
          </div>

        </div>

        {/* Coverage Tags Bar (SEO Boost) */}
        <div className="mt-12 pt-6 border-t border-sanatel-border/60">
          <div className="text-xs text-sanatel-gray-400 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-sanatel-gray-400 tech-label">COBERTURA TÉCNICA DF:</span>
            <span>Plano Piloto</span> •
            <span>Taguatinga</span> •
            <span>Águas Claras</span> •
            <span>Ceilândia</span> •
            <span>Samambaia</span> •
            <span>Sudoeste & Octogonal</span> •
            <span>Noroeste</span> •
            <span>Asa Norte</span> •
            <span>Asa Sul</span> •
            <span>Lago Norte</span> •
            <span>Lago Sul</span> •
            <span>Guará</span> •
            <span>Vicente Pires</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-sanatel-border/40 flex flex-col sm:flex-row items-center justify-between text-xs text-sanatel-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-4">
            <span className="tech-label text-[10px] text-sanatel-gray-400">
              ENG • ARQ • SINALIZAÇÃO CORPORATIVA
            </span>
            <button
              onClick={scrollToTop}
              className="text-sanatel-gray-400 hover:text-sanatel-red transition-colors flex items-center"
            >
              Voltar ao topo ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
