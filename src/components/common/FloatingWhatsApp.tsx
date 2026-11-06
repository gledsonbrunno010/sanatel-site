import React from 'react';
import { WhatsAppIcon } from './Icons';
import { COMPANY_INFO } from '../../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      aria-label="Falar com a Sanatel pelo WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-xs tech-label ml-0 group-hover:ml-2">
        Orçamento Rápido
      </span>
      {/* Subtle Ping Animation */}
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500"></span>
    </a>
  );
};

