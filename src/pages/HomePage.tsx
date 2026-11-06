import React, { useEffect } from 'react';
import { HeroShowreel } from '../components/home/HeroShowreel';
import { ServicesTicker } from '../components/home/ServicesTicker';
import { CircularProjectsShowcase } from '../components/home/CircularProjectsShowcase';
import { ServicesShowcase } from '../components/home/ServicesShowcase';
import { InstitutionalIntro } from '../components/home/InstitutionalIntro';
import { AcmConstructionInteraction } from '../components/home/AcmConstructionInteraction';
import { SelectedProjects } from '../components/home/SelectedProjects';
import { WhyChooseSanatel } from '../components/home/WhyChooseSanatel';
import { ProductionCapabilities } from '../components/home/ProductionCapabilities';
import { ConversionCta } from '../components/home/ConversionCta';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "SANATEL — Fachadas em ACM, Letras Caixa e Comunicação Visual em Brasília DF";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-sanatel-black text-white">
      {/* 01. Flagship Hero with Motion Graphics on Right & 3D Scroll Depth */}
      <HeroShowreel />

      {/* 02. Infinite Services Ticker */}
      <ServicesTicker />

      {/* 03. NOVA SEGUNDA PÁGINA: Galeria Cilíndrica 3D Circular com todos os projetos executados */}
      <CircularProjectsShowcase />

      {/* 04. Serviços Flagship & Matriz (Posição trocada com badge removido) */}
      <ServicesShowcase />

      {/* 05. Apresentação Institucional e Liderança Técnica */}
      <InstitutionalIntro />

      {/* 06. Signature ACM Construction Interaction */}
      <AcmConstructionInteraction />

      {/* 07. Selected Real Projects in Brasília */}
      <SelectedProjects />

      {/* 08. Why Choose Sanatel Technical Differentiators */}
      <WhyChooseSanatel />

      {/* 09. Manufacturing & Production Machinery Capabilities */}
      <ProductionCapabilities />

      {/* 10. High-Conversion Dual CTA */}
      <ConversionCta />
    </div>
  );
};
