import React from 'react';
import { motion } from 'framer-motion';

export const HeroMotionGraphics: React.FC = () => {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto aspect-square flex items-center justify-center select-none overflow-visible">
      
      {/* 01. Dynamic Multi-Layered Red Glow Blur Behind the Logo (Optimized for Mobile GPU) */}
      <div className="absolute w-64 h-64 sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] bg-sanatel-red/30 rounded-full blur-[45px] sm:blur-[85px] pointer-events-none animate-pulse will-change-transform" />
      <div className="absolute w-48 h-48 sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] bg-sanatel-red/40 rounded-full blur-[35px] sm:blur-[60px] pointer-events-none will-change-transform" />

      {/* 02. Motion Graphics Concentric Rotating Tech Rings (Responsive for Mobile Screens) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[480px] lg:h-[480px] rounded-full border border-dashed border-sanatel-red/40 pointer-events-none will-change-transform"
      />
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] lg:w-[530px] lg:h-[530px] rounded-full border border-dotted border-sanatel-red/30 pointer-events-none will-change-transform"
      />

      {/* Satellite Optical Orbit Dots */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-[275px] h-[275px] sm:w-[360px] sm:h-[360px] lg:w-[505px] lg:h-[505px] rounded-full pointer-events-none will-change-transform"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white shadow-[0_0_10px_#FFF]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-sanatel-red shadow-[0_0_10px_#E3262E]" />
      </motion.div>

      {/* 03. Core Logo Container with Hardware-Accelerated Glowing Pulse (Zero Repaints) */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-20 w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full p-2 sm:p-4 flex items-center justify-center border-[2.5px] sm:border-[3px] border-sanatel-red shadow-[0_0_35px_rgba(227,38,46,0.55)] will-change-transform"
      >
        {/* Hardware-accelerated halo glow layer animating opacity only */}
        <motion.div
          animate={{
            opacity: [0.55, 0.95, 0.55],
            scale: [0.98, 1.05, 0.98]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -inset-1 rounded-full bg-sanatel-red/25 blur-md pointer-events-none will-change-transform"
        />
        
        {/* Subtle Inner Reddish Glow Ring */}
        <div className="absolute inset-1 sm:inset-1.5 rounded-full border border-red-500/40 pointer-events-none" />

        {/* Laser Sweep across the logo */}
        <motion.div
          animate={{
            y: ['-100%', '200%', '-100%'],
            opacity: [0, 0.85, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-3 right-3 top-0 h-[2px] sm:h-[2.5px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_12px_#FFF] pointer-events-none z-30 will-change-transform"
        />

        {/* The Official Company Logo in WebP (High-Performance LCP Element) */}
        <img
          src="/assets/logo-sanatel.webp"
          srcSet="/assets/logo-sanatel.webp 512w, /assets/logo-sanatel-4k.webp 2048w"
          sizes="(max-width: 640px) 192px, (max-width: 1024px) 320px, 380px"
          alt="Sanatel Comunicação Visual"
          width={380}
          height={380}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(227,38,46,0.6)] sm:drop-shadow-[0_0_20px_rgba(227,38,46,0.7)] relative z-10 transition-transform duration-300"
        />
      </motion.div>

    </div>
  );
};
