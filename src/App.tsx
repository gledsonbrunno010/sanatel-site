import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { BrandIntroOverlay } from './components/common/BrandIntroOverlay';
import { PageLoader } from './components/common/PageLoader';

// Code-splitting via React.lazy for instant initial load and smooth navigation
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Component to scroll top and sync GSAP ScrollTrigger on each route transition with debounce to prevent frame-drop
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);
    return () => clearTimeout(timer);
  }, [pathname]);

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

