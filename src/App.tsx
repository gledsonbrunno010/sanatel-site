import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

// Component to scroll top and sync GSAP ScrollTrigger on each route transition
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const rAF = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(rAF);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-sanatel-black text-white selection:bg-sanatel-red selection:text-white">
        <Header />
        
        <main className="flex-grow">
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
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
};

export default App;

