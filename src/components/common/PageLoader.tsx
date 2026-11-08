import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-[55vh] flex flex-col items-center justify-center py-20 px-4 select-none">
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Soft pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-sanatel-red/40 border-t-sanatel-red animate-spin" />
        <img
          src="/assets/logo-sanatel-4k.png"
          alt="Carregando..."
          className="w-7 h-7 object-contain opacity-80"
        />
      </div>
      <span className="mt-4 font-tech text-[11px] text-sanatel-gray-400 tracking-[0.2em] uppercase animate-pulse">
        Carregando // Sanatel
      </span>
    </div>
  );
};

