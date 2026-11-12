import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { BrandIntroOverlay } from './components/common/BrandIntroOverlay';
import { PageLoader } from './components/common/PageLoader';

// Canonical route title mapping to eliminate page title lag during lazy chunk loading
const ROUTE_TITLES: Record<string, string> = {
  '/': 'SANATEL — Fachadas em ACM, Letras Caixa e Comunicação Visual em Brasília DF',
  '/sobre': 'Sobre a Sanatel | Excelência em Comunicação Visual e Fachadas em Brasília DF',
  '/servicos': 'Serviços de Comunicação Visual em Brasília DF | Fachadas em ACM e Letras Caixa | Sanatel',
  '/fachadas-em-acm-brasilia': 'Fachadas em ACM em Brasília DF | Alta Performance | Sanatel',
  '/letras-caixa-brasilia': 'Letras Caixa em Brasília DF | Inox, Acrílico e PVC | Sanatel',
  '/letreiros-e-luminosos': 'Letreiros e Luminosos em Brasília DF | LED e Caixas de Luz | Sanatel',
  '/pecas-em-acrilico-brasilia': 'Peças em Acrílico em Brasília DF | Displays e Totens | Sanatel',
  '/adesivos-e-comunicacao-visual': 'Adesivos e Envelopamento de Frotas em Brasília DF | Sanatel',
  '/placas-de-sinalizacao-brasilia': 'Placas de Sinalização Predial em Brasília DF | Sanatel',
  '/projetos': 'Obras e Fachadas em Brasília DF | Portfólio Sanatel Comunicação Visual',
  '/contato': 'Contato & Orçamento | Sanatel Comunicação Visual Brasília DF',
};

// Code-splitting via React.lazy for instant initial load and smooth navigation
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Component to scroll top, sync GSAP ScrollTrigger, and track SPA route changes in Google Tag Manager dataLayer
const ScrollToTop = () => {
  const location = useLocation();
  const lastTrackedPathRef = useRef<string | null>(null);
  const isInitialMountRef = useRef<boolean>(true);

  useEffect(() => {
    const currentPath = location.pathname + (location.search || '');

    // Prevent duplicate event dispatch if the path has not changed
    if (lastTrackedPathRef.current === currentPath) {
      return;
    }
    lastTrackedPathRef.current = currentPath;

    // Synchronize page title synchronously to prevent title lag during lazy route loading
    const resolvedTitle = ROUTE_TITLES[location.pathname] || document.title;
    if (ROUTE_TITLES[location.pathname]) {
      document.title = resolvedTitle;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const isInitial = isInitialMountRef.current;
    isInitialMountRef.current = false;

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();

      // Dispatch virtual pageview event to Google Tag Manager dataLayer on valid SPA transitions
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'virtual_pageview',
          page_path: currentPath,
          page_title: document.title || resolvedTitle,
          page_location: window.location.href,
          is_initial_load: isInitial,
        });
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BrandIntroOverlay />
      <div className="min-h-screen flex flex-col bg-sanatel-black text-white selection:bg-sanatel-red selection:text-white">
        <Header />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/servicos" element={<ServicesPage />} />
              
              {/* 6 Dedicated Service Pages */}
              <Route 
                path="/fachadas-em-acm-brasilia" 
                element={<ServiceDetailPage slugOverride="fachadas-em-acm-brasilia" />} 
              />
              <Route 
                path="/letras-caixa-brasilia" 
                element={<ServiceDetailPage slugOverride="letras-caixa-brasilia" />} 
              />
              <Route 
                path="/letreiros-e-luminosos" 
                element={<ServiceDetailPage slugOverride="letreiros-e-luminosos" />} 
              />
              <Route 
                path="/pecas-em-acrilico-brasilia" 
                element={<ServiceDetailPage slugOverride="pecas-em-acrilico-brasilia" />} 
              />
              <Route 
                path="/adesivos-e-comunicacao-visual" 
                element={<ServiceDetailPage slugOverride="adesivos-e-comunicacao-visual" />} 
              />
              <Route 
                path="/placas-de-sinalizacao-brasilia" 
                element={<ServiceDetailPage slugOverride="placas-de-sinalizacao-brasilia" />} 
              />
              
              {/* Portfolio and Contact */}
              <Route path="/projetos" element={<ProjectsPage />} />
              <Route path="/contato" element={<ContactPage />} />

              {/* Fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
};

export default App;

