import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const STORAGE_KEY = 'sanatel_brand_intro_seen';

interface BrandIntroOverlayProps {
  forceShow?: boolean;
  onComplete?: () => void;
}

export const BrandIntroOverlay: React.FC<BrandIntroOverlayProps> = ({
  forceShow = false,
  onComplete,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Determine initial visibility synchronously to avoid any layout flash
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    if (forceShow) return true;
    try {
      // Allow developer/tester override via ?intro=true or ?replay_intro=1
      const params = new URLSearchParams(window.location.search);
      if (params.get('intro') === 'true' || params.get('replay_intro') === '1') {
        return true;
      }
      return sessionStorage.getItem(STORAGE_KEY) !== 'true';
    } catch {
      return false;
    }
  });

  const [isExiting, setIsExiting] = useState(false);
  const exitTimeoutRef = useRef<number | null>(null);
  const completionTimeoutRef = useRef<number | null>(null);

  // Mark completion in storage and unlock scroll
  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore storage access errors in private/iframe modes
    }
    document.body.style.overflow = '';
    setIsVisible(false);
    if (onComplete) onComplete();
  }, [onComplete]);

  // Trigger smooth cinematic exit
  const triggerExit = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    
    // Duration of exit dissolve: 550ms (or 250ms for reduced motion)
    const exitDuration = shouldReduceMotion ? 250 : 550;
    completionTimeoutRef.current = window.setTimeout(() => {
      finishIntro();
    }, exitDuration);
  }, [finishIntro, isExiting, shouldReduceMotion]);

  // Main lifecycle orchestration
  useEffect(() => {
    if (!isVisible) return;

    // Lock body scroll during brand intro
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // If reduced motion is preferred, show brief 0.5s static branding and dissolve
    if (shouldReduceMotion) {
      exitTimeoutRef.current = window.setTimeout(() => {
        triggerExit();
      }, 600);
    } else {
      // Natural cinematic pacing:
      // 0.0s - 1.2s: Symbol S & Precision Rings
      // 1.2s - 2.0s: Brand Name SANATEL
      // 2.0s - 2.7s: Subtitle COMUNICAÇÃO VISUAL & Architectural Line
      // 2.7s - 3.3s: Brand Lockup Climax & Appreciation
      // 3.3s: Trigger Exit Dissolve
      exitTimeoutRef.current = window.setTimeout(() => {
        triggerExit();
      }, 3350);
    }

    // Keyboard shortcut: Escape to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        triggerExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
      if (completionTimeoutRef.current) clearTimeout(completionTimeoutRef.current);
    };
  }, [isVisible, shouldReduceMotion, triggerExit]);

  // If not visible or already seen, render nothing (zero runtime overhead)
  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="sanatel-brand-intro"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 1.04 : 1,
          filter: isExiting ? 'blur(4px)' : 'blur(0px)',
        }}
        transition={{
          duration: shouldReduceMotion ? 0.25 : 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-0 z-[99999] bg-[#070506] flex flex-col items-center justify-center select-none overflow-hidden ${
          isExiting ? 'pointer-events-none' : ''
        }`}
        style={{ willChange: 'opacity, transform' }}
        aria-label="Sanatel Comunicação Visual — Abertura Institucional"
        role="dialog"
        aria-modal="true"
      >
        {/* Architectural Background Grid with Subtle Technical Presence */}
        <div 
          className="absolute inset-0 bg-arch-grid opacity-[0.09] pointer-events-none"
          style={{ backgroundSize: '40px 40px' }}
        />

        {/* Ambient Crimson Center Light Bloom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.75, 0.55],
            scale: [0.9, 1.1, 0.95],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] lg:w-[620px] lg:h-[620px] rounded-full bg-sanatel-red/25 blur-[75px] sm:blur-[110px] pointer-events-none will-change-transform"
        />

        {/* Discrete "Pular" / ESC Button */}
        <motion.button
          onClick={triggerExit}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[100000] inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-sanatel-gray-400 hover:text-white transition-all text-[11px] sm:text-xs font-medium backdrop-blur-md cursor-pointer group"
          title="Pular animação de abertura (ESC)"
        >
          <span>Pular</span>
          <span className="hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-tech text-sanatel-gray-400 bg-white/[0.08] rounded border border-white/10 group-hover:text-white group-hover:border-white/20">
            ESC
          </span>
        </motion.button>

        {/* Brand Intro Central Composition */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-sm sm:max-w-xl text-center">
          
          {/* ======================================================== */}
          {/* ETAPA 1 — APARIÇÃO DO SÍMBOLO S COM MOTION GRAPHICS      */}
          {/* ======================================================== */}
          <div className="relative flex items-center justify-center mb-6 sm:mb-8">
            
            {/* 1.1 Concentric Rotating Precision Tech Rings */}
            {!shouldReduceMotion && (
              <>
                {/* Outer Dashed Architectural Ring */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 0.65, scale: 1, rotate: 360 }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.1 },
                    scale: { duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
                    rotate: { duration: 22, repeat: Infinity, ease: 'linear' },
                  }}
                  className="absolute w-[140px] h-[140px] sm:w-[185px] sm:h-[185px] lg:w-[210px] lg:h-[210px] rounded-full border border-dashed border-sanatel-red/40 pointer-events-none will-change-transform"
                />

                {/* Inner Dotted Fine Ring with Counter-Rotation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.45, scale: 1, rotate: -360 }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.2 },
                    scale: { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                    rotate: { duration: 18, repeat: Infinity, ease: 'linear' },
                  }}
                  className="absolute w-[122px] h-[122px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full border border-dotted border-white/25 pointer-events-none will-change-transform"
                />

                {/* SVG Precision Perimeter Tracing Ring */}
                <svg
                  className="absolute w-[108px] h-[108px] sm:w-[145px] sm:h-[145px] lg:w-[165px] lg:h-[165px] -rotate-90 pointer-events-none"
                  viewBox="0 0 100 100"
                >
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#E3262E"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0.85] }}
                    transition={{
                      pathLength: { duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.6, delay: 0.15 },
                    }}
                  />
                </svg>

                {/* 4 Architectural Cardinal Crosshairs */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute w-[150px] h-[150px] sm:w-[195px] sm:h-[195px] pointer-events-none"
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-[1.5px] bg-sanatel-red" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-[1.5px] bg-sanatel-red" />
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 w-[1.5px] bg-sanatel-red" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-[1.5px] bg-sanatel-red" />
                </motion.div>
              </>
            )}

            {/* 1.2 The Official Sanatel Emblem Container */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.72, y: 10 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{
                duration: shouldReduceMotion ? 0.3 : 1.0,
                delay: shouldReduceMotion ? 0.1 : 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full flex items-center justify-center p-2.5 sm:p-3 border-[2px] sm:border-[2.5px] border-sanatel-red shadow-[0_0_35px_rgba(227,38,46,0.6)] bg-gradient-to-b from-[#1E090B] to-[#0A0506]"
            >
              {/* Inner Reddish Bezel Glow */}
              <div className="absolute inset-1 rounded-full border border-red-500/30 pointer-events-none" />

              {/* Laser Light Sweep across the Emblem */}
              {!shouldReduceMotion && (
                <motion.div
                  initial={{ y: '-110%', opacity: 0 }}
                  animate={{
                    y: ['-110%', '170%'],
                    opacity: [0, 0.95, 0],
                  }}
                  transition={{
                    duration: 1.1,
                    delay: 0.85,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="absolute left-2 right-2 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_#FFFFFF] pointer-events-none z-30"
                />
              )}

              {/* Sanatel 4K Official Logo (S Symbol) */}
              <img
                src="/assets/logo-sanatel-4k.png"
                alt="Sanatel Símbolo Oficial"
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(227,38,46,0.7)] relative z-10"
              />
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* ETAPA 2 — REVELAÇÃO DA MARCA: SANATEL                     */}
          {/* ======================================================== */}
          <div className="relative overflow-visible">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 18, filter: 'blur(3px)' }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, filter: 'blur(0px)' }
              }
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.8,
                delay: shouldReduceMotion ? 0.2 : 1.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative inline-block"
            >
              <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-[0.20em] sm:tracking-[0.26em] uppercase leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                SANATEL
              </h1>

              {/* Metallic Light Shimmer Gradient Reflex */}
              {!shouldReduceMotion && (
                <motion.div
                  initial={{ x: '-120%', opacity: 0 }}
                  animate={{
                    x: ['-120%', '160%'],
                    opacity: [0, 0.75, 0],
                  }}
                  transition={{
                    duration: 1.1,
                    delay: 1.6,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none"
                />
              )}
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* ETAPA 3 — ASSINATURA INSTITUCIONAL: COMUNICAÇÃO VISUAL    */}
          {/* ======================================================== */}
          <div className="flex flex-col items-center mt-3 sm:mt-4 w-full">
            
            {/* Fine Technical Architectural Divider Line expanding from center */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { scaleX: 0, opacity: 0 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { scaleX: 1, opacity: 1 }
              }
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.7,
                delay: shouldReduceMotion ? 0.3 : 1.95,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-44 sm:w-64 lg:w-72 h-[1px] bg-gradient-to-r from-transparent via-sanatel-red to-transparent origin-center shadow-[0_0_8px_rgba(227,38,46,0.6)]"
            />

            {/* Subtitle COMUNICAÇÃO VISUAL in Technical Architectural Typography */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 8, letterSpacing: '0.22em' }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, letterSpacing: '0.34em' }
              }
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.75,
                delay: shouldReduceMotion ? 0.35 : 2.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2.5 sm:mt-3"
            >
              <span className="font-tech text-[10px] sm:text-xs lg:text-[13px] font-semibold text-sanatel-gray-300 tracking-[0.28em] sm:tracking-[0.38em] uppercase block">
                COMUNICAÇÃO VISUAL
              </span>
            </motion.div>

            {/* Subtle Engineering Badge / Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0.4 : 2.5,
              }}
              className="mt-4 flex items-center space-x-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sanatel-red animate-pulse" />
              <span className="font-tech text-[9px] sm:text-[10px] text-sanatel-gray-400 tracking-[0.18em] uppercase">
                DISTRITO FEDERAL // PADRÃO INDUSTRIAL
              </span>
            </motion.div>
          </div>

        </div>

        {/* Ambient Subtle Tech Frame Details at Screen Corners (Desktop Only) */}
        <div className="hidden lg:block absolute bottom-6 left-8 pointer-events-none opacity-40">
          <span className="font-tech text-[10px] text-sanatel-gray-500 tracking-widest block">
            SANATEL INDÚSTRIA & ENGENHARIA VISUAL
          </span>
        </div>
        <div className="hidden lg:block absolute bottom-6 right-8 pointer-events-none opacity-40">
          <span className="font-tech text-[10px] text-sanatel-gray-500 tracking-widest block">
            EST. BRASÍLIA / DF
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

