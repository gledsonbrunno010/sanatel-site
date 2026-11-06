import React from 'react';

const TICKER_ITEMS = [
  "SUA EMPRESA EM DESTAQUE NO DISTRITO FEDERAL",
  "FACHADAS EM ACM COM FABRICAÇÃO PRÓPRIA",
  "LETRAS CAIXA EM ALTO-RELEVO COM LED HALO",
  "LETREIROS E LUMINOSOS 24H EM BRASÍLIA",
  "PEÇAS EM ACRÍLICO VIRGEM LAPIDADAS A LASER",
  "ENVELOPAMENTO PROFISSIONAL DE FROTAS COMERCIAIS",
  "SINALIZAÇÃO PREDIAL WAYFINDING EM CONFORMIDADE CBMDF",
  "FABRICAÇÃO PRÓPRIA • PREÇO DIRETO DE FÁBRICA"
];

export const ServicesTicker: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#B31217] to-[#0A0A0A] border-y-2 border-sanatel-red/60 shadow-[0_0_30px_rgba(227,38,46,0.35)] overflow-hidden py-4 sm:py-5 select-none relative">
      {/* Edge gradient masks for seamless overflow */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-[#B31217] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center space-x-6 whitespace-nowrap">
            <span className="tech-label text-xs sm:text-sm font-extrabold tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] hover:text-red-200 transition-colors">
              {item}
            </span>
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white shadow-[0_0_10px_#FFFFFF]" />
          </div>
        ))}
      </div>
    </div>
  );
};
