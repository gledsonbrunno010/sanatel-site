import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Ruler } from "lucide-react";

export interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
  description?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  ctaPrimary?: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
  trustBadges?: { value: string; label: string }[];
  children?: ReactNode;
}

export const ScrollExpandMedia: React.FC<ScrollExpandMediaProps> = ({
  mediaType = "image",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title = "FACHADAS EM ACM EM BRASÍLIA",
  subtitle = "Sua marca merece ser vista. Sua fachada precisa provar sua autoridade.",
  description = "Projetamos, fabricamos com maquinário próprio e instalamos fachadas em ACM e letras caixa de alto impacto no Distrito Federal.",
  date = "SANATEL COMUNICAÇÃO VISUAL // BRASÍLIA DF",
  scrollToExpand = "Role para expandir",
  textBlend = false,
  ctaPrimary = { label: "Solicitar Orçamento de Fachada", to: "/contato" },
  ctaSecondary = { label: "Conhecer Obras Entregues no DF", to: "/projetos" },
  trustBadges = [
    { value: "100%", label: "Fabricação Própria" },
    { value: "DF & Entorno", label: "Instalação c/ NR-35" }
  ],
  children,
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: globalThis.WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 10) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0012;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: globalThis.TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 10) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded && window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Responsive dimensions: from elegant floating card to full screen
  const mediaWidth = 340 + scrollProgress * (isMobileState ? 650 : 1300);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 260 : 450);
  const textTranslateX = scrollProgress * (isMobileState ? 160 : 150);

  const titleWords = title ? title.split(" ") : [];
  const midPoint = Math.ceil(titleWords.length / 2);
  const firstPart = titleWords.slice(0, midPoint).join(" ");
  const secondPart = titleWords.slice(midPoint).join(" ");

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden bg-sanatel-black"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          
          {/* Ambient Background Layer */}
          <motion.div
            className="absolute inset-0 z-0 h-full overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress * 0.9 }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt="Ambiente Sanatel"
              className="w-screen h-screen object-cover object-center filter brightness-[0.22] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sanatel-black via-sanatel-black/70 to-transparent" />
            <div className="absolute inset-0 bg-arch-grid opacity-25" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10 w-full px-4 sm:px-6">
            
            {/* 1st Screen Stage: Expanding Media Canvas */}
            <div className="flex flex-col items-center justify-center w-full min-h-[100dvh] relative py-10">
              
              {/* Expanding Media Box */}
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-3xl overflow-hidden border border-sanatel-border shadow-[0_0_60px_rgba(0,0,0,0.8)]"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "96vw",
                  maxHeight: "88vh",
                }}
              >
                {mediaType === "video" ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover rounded-3xl"
                      controls={false}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/40 rounded-3xl"
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={mediaSrc}
                      alt={title || "Fachada Sanatel em Brasília"}
                      className="w-full h-full object-cover rounded-3xl filter brightness-95 contrast-105"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/45 rounded-3xl"
                      animate={{ opacity: 0.6 - scrollProgress * 0.4 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                {/* Overlaid Card Info (Tag & Date) */}
                <div className="absolute inset-x-0 bottom-4 z-20 flex flex-col items-center text-center px-4">
                  {date && (
                    <p
                      className="text-xs sm:text-sm tech-label font-bold text-sanatel-red tracking-wider uppercase drop-shadow-md"
                      style={{ transform: `translateX(-${textTranslateX * 0.15}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-xs text-sanatel-gray-300 font-medium mt-1 drop-shadow-md"
                      style={{ transform: `translateX(${textTranslateX * 0.15}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              {/* Parting Title Effect that expands horizontally on scroll */}
              {title && (
                <div
                  className={`flex items-center justify-center text-center gap-2 sm:gap-4 w-full relative z-10 transition-none flex-col ${
                    textBlend ? "mix-blend-difference" : "mix-blend-normal"
                  }`}
                >
                  <motion.h2
                    className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase text-white tracking-tight leading-none drop-shadow-2xl"
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    {firstPart}
                  </motion.h2>
                  <motion.h2
                    className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-sanatel-red via-red-500 to-white tracking-tight leading-none drop-shadow-2xl"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {secondPart}
                  </motion.h2>
                </div>
              )}

              {/* Commercial Messaging & Conversion CTAs (fades as user expands to next page) */}
              <motion.div
                className="relative z-20 mt-6 max-w-2xl text-center space-y-4 px-4"
                animate={{
                  opacity: Math.max(1 - scrollProgress * 2.2, 0),
                  y: -scrollProgress * 25
                }}
              >
                {subtitle && (
                  <p className="text-base sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
                    {subtitle}
                  </p>
                )}
                {description && (
                  <p className="text-xs sm:text-sm text-sanatel-gray-300 leading-relaxed max-w-xl mx-auto drop-shadow-sm">
                    {description}
                  </p>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  {ctaPrimary && (
                    <Link
                      to={ctaPrimary.to}
                      className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-bold tech-label tracking-wider text-white uppercase bg-sanatel-red hover:bg-sanatel-red-hover rounded-xl shadow-[0_0_25px_rgba(227,38,46,0.4)] transition-all transform hover:-translate-y-0.5"
                    >
                      <span>{ctaPrimary.label}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  )}

                  {ctaSecondary && (
                    <Link
                      to={ctaSecondary.to}
                      className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-medium tech-label tracking-wider text-sanatel-gray-200 hover:text-white bg-sanatel-surface/90 hover:bg-sanatel-elevated border border-sanatel-border rounded-xl transition-all"
                    >
                      <span>{ctaSecondary.label}</span>
                    </Link>
                  )}
                </div>

                {/* Trust Badges */}
                {trustBadges && (
                  <div className="pt-4 flex items-center justify-center gap-6 border-t border-sanatel-border/50 max-w-md mx-auto">
                    {trustBadges.map((badge, bIdx) => (
                      <div key={bIdx} className="text-center">
                        <div className="font-extrabold text-sm sm:text-base text-white tech-label">{badge.value}</div>
                        <div className="text-[11px] text-sanatel-gray-400">{badge.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Floating Scroll Cue */}
              <motion.div
                className="absolute bottom-4 z-20 flex flex-col items-center space-y-2 pointer-events-none"
                animate={{
                  opacity: Math.max(1 - scrollProgress * 3.5, 0),
                  y: [0, 6, 0]
                }}
                transition={{
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <span className="text-[10px] tech-label text-sanatel-gray-400 font-bold tracking-widest uppercase">
                  {scrollToExpand}
                </span>
                <div className="w-5 h-8 rounded-full border border-sanatel-border flex items-start justify-center p-1 bg-sanatel-surface/40 backdrop-blur-sm">
                  <div className="w-1.5 h-2 rounded-full bg-sanatel-red animate-pulse" />
                </div>
              </motion.div>

            </div>

            {/* 2nd Screen Section (Children): Progressively reveals when expanded */}
            <motion.section
              className="flex flex-col w-full relative z-30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: showContent ? 1 : Math.max(scrollProgress - 0.2, 0) / 0.8,
                y: showContent ? 0 : (1 - scrollProgress) * 30
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {children}
            </motion.section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
