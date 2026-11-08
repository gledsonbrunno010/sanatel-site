import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export interface ImageModalData {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  serviceSlug?: string;
}

interface ImageModalProps {
  data: ImageModalData | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ data, onClose }) => {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!data) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data, onClose]);

  if (!data) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá! Estava visualizando a foto de "${data.title}" no site da Sanatel e gostaria de um orçamento para minha empresa no DF.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 select-none">
        
        {/* Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label={data.title}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-sanatel-dark border border-sanatel-border rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar with Badge & Close Button */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 bg-sanatel-surface/90 border-b border-sanatel-border/80">
            <div className="flex items-center space-x-2.5 overflow-hidden pr-2">
              {data.badge && (
                <span className="tech-label text-[10px] sm:text-xs font-bold text-sanatel-red bg-sanatel-black px-2.5 py-1 rounded-md border border-sanatel-border flex-shrink-0">
                  {data.badge}
                </span>
              )}
              <span className="text-xs sm:text-sm font-bold text-white truncate">
                {data.title}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-sanatel-red border border-white/10 hover:border-sanatel-red text-white flex items-center justify-center transition-all cursor-pointer flex-shrink-0 group"
              aria-label="Fechar visualização da imagem"
              title="Fechar (ESC)"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
            </button>
          </div>

          {/* High-Resolution Image Display Area */}
          <div className="relative flex-1 min-h-[220px] max-h-[58vh] sm:max-h-[64vh] bg-black flex items-center justify-center overflow-hidden">
            <img
              src={data.src}
              alt={data.alt || data.title}
              loading="eager"
              decoding="sync"
              className="w-full h-full object-contain max-h-[58vh] sm:max-h-[64vh]"
            />

            {/* Subtle Gradient Vignette at Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-sanatel-dark to-transparent pointer-events-none" />
          </div>

          {/* Modal Footer with Details & Action Button */}
          <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-sanatel-surface border-t border-sanatel-border/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              {data.subtitle && (
                <div className="tech-label text-[10px] sm:text-xs text-sanatel-red font-semibold">
                  {data.subtitle}
                </div>
              )}
              {data.description && (
                <p className="text-xs sm:text-sm text-sanatel-gray-300 line-clamp-2 max-w-xl leading-relaxed">
                  {data.description}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2.5 flex-shrink-0">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 bg-sanatel-red hover:bg-sanatel-red-hover text-white text-xs font-bold tech-label rounded-xl tracking-wider uppercase transition-all shadow-md group"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-white" />
                <span>Orçar no WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="hidden sm:inline-flex items-center justify-center px-3 py-2.5 bg-white/5 hover:bg-white/10 text-sanatel-gray-300 hover:text-white text-xs font-medium rounded-xl border border-white/10 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

