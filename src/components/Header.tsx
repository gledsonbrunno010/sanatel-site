import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/companyData';
import { WhatsAppIcon, PhoneGreenIcon } from './common/Icons';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-sanatel-black border-b border-sanatel-border text-xs text-sanatel-gray-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-sanatel-gray-300">
              <span className="inline-block w-2 h-2 rounded-full bg-sanatel-red mr-2 animate-pulse"></span>
              Atendimento especializado em Brasília e todo o DF
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sanatel-gray-300 hover:text-white transition-colors"
            >
              <PhoneGreenIcon className="w-3.5 h-3.5 mr-1.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-sanatel-gray-400">{COMPANY_INFO.businessHours}</span>
          </div>
        </div>
      </div>

      {/* Main Header - Sleek & Compact on Mobile and Desktop */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-sanatel-black/95 backdrop-blur-md border-b border-sanatel-border shadow-2xl py-1.5 sm:py-2 lg:py-2.5' 
            : 'bg-sanatel-black/85 backdrop-blur-sm border-b border-white/5 py-2 sm:py-2.5 lg:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 group">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex-shrink-0">
              <img 
                src="/assets/logo-sanatel.webp" 
                alt="Sanatel Comunicação Visual" 
                width={40}
                height={40}
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(227,38,46,0.35)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight leading-none text-white group-hover:text-sanatel-red transition-colors">
                SANATEL
              </span>
              <span className="tech-label text-[8px] sm:text-[9px] lg:text-[10px] text-sanatel-gray-400 tracking-[0.18em] sm:tracking-[0.2em] font-medium leading-tight">
                COMUNICAÇÃO VISUAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Projetos moved to 2nd position, Sobre to 3rd) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-sanatel-red ${
                location.pathname === '/' ? 'text-sanatel-red font-semibold' : 'text-sanatel-gray-300'
              }`}
            >
              Início
            </Link>

            <Link 
              to="/projetos" 
              className={`text-sm font-medium transition-colors hover:text-sanatel-red ${
                location.pathname === '/projetos' ? 'text-sanatel-red font-semibold' : 'text-sanatel-gray-300'
              }`}
            >
              Projetos
            </Link>

            <Link 
              to="/sobre" 
              className={`text-sm font-medium transition-colors hover:text-sanatel-red ${
                location.pathname === '/sobre' ? 'text-sanatel-red font-semibold' : 'text-sanatel-gray-300'
              }`}
            >
              Sobre
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/servicos"
                className={`flex items-center text-sm font-medium transition-colors hover:text-sanatel-red py-2 ${
                  location.pathname.startsWith('/servicos') || location.pathname.includes('-brasilia') || location.pathname.includes('letreiros') || location.pathname.includes('adesivos')
                    ? 'text-sanatel-red font-semibold' 
                    : 'text-sanatel-gray-300'
                }`}
              >
                <span>Serviços</span>
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-sanatel-red' : ''}`} />
              </Link>

              {/* Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-sanatel-dark/95 backdrop-blur-xl border border-sanatel-border rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-2 animate-fadeIn z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-sanatel-border/60 flex items-center justify-between px-2">
                    <span className="tech-label text-[11px] text-sanatel-red font-bold">SOLUÇÕES ARQUITETÔNICAS</span>
                    <Link to="/servicos" className="text-xs text-sanatel-gray-400 hover:text-white flex items-center transition-colors">
                      Ver todos <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                  {SERVICES.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/${srv.slug}`}
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-sanatel-surface transition-all group/item"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-sanatel-red/60 mt-1.5 group-hover/item:bg-sanatel-red group-hover/item:scale-125 transition-all"></div>
                      <div>
                        <div className="text-sm font-medium text-white group-hover/item:text-sanatel-red transition-colors">
                          {srv.shortTitle}
                        </div>
                        <div className="text-xs text-sanatel-gray-400 line-clamp-1">
                          {srv.subtitle}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contato" 
              className={`text-sm font-medium transition-colors hover:text-sanatel-red ${
                location.pathname === '/contato' ? 'text-sanatel-red font-semibold' : 'text-sanatel-gray-300'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-sanatel-surface hover:bg-sanatel-elevated border border-sanatel-border text-sanatel-gray-200 hover:text-white transition-all flex items-center space-x-2"
              title="WhatsApp Sanatel"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="text-xs font-medium text-[#25D366]">WhatsApp</span>
            </a>

            <Link
              to="/contato"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tech-label tracking-wider text-white uppercase transition-all duration-300 rounded-lg overflow-hidden group bg-sanatel-red hover:bg-sanatel-red-hover shadow-[0_0_20px_rgba(227,38,46,0.3)] hover:shadow-[0_0_30px_rgba(227,38,46,0.5)] active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                Solicitar Orçamento
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-sanatel-surface border border-sanatel-border text-sanatel-gray-300 hover:text-white min-h-[38px] min-w-[38px] flex items-center justify-center transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-sanatel-dark/98 border-b border-sanatel-border px-4 pt-4 pb-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-sanatel-surface text-sanatel-red font-bold'
                      : 'text-sanatel-gray-300 hover:bg-sanatel-surface hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Services Submenu */}
            <div className="pt-2 border-t border-sanatel-border/80">
              <span className="tech-label text-xs text-sanatel-red font-bold block px-3 py-1">
                TODOS OS SERVIÇOS
              </span>
              <div className="grid grid-cols-1 gap-1 mt-1">
                {SERVICES.map((srv) => (
                  <Link
                    key={srv.id}
                    to={`/${srv.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 text-sm text-sanatel-gray-300 hover:text-white hover:bg-sanatel-surface rounded-lg transition-colors"
                  >
                    • {srv.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 border-t border-sanatel-border space-y-2">
              <Link
                to="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3 bg-sanatel-red text-white text-sm font-bold tech-label rounded-lg uppercase tracking-wider active:scale-98 transition-transform"
              >
                Solicitar Orçamento
              </Link>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-2.5 bg-sanatel-surface border border-sanatel-border text-white text-sm rounded-lg active:scale-98 transition-transform"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

