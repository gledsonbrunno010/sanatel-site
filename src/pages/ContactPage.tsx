import React, { useEffect } from 'react';
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon, PhoneGreenIcon } from '../components/common/Icons';
import { COMPANY_INFO } from '../data/companyData';
import { ContactForm } from '../components/common/ContactForm';
import AnimatedContent from '../components/ui/AnimatedContent';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contato & Orçamento | Sanatel Comunicação Visual Brasília DF";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-sanatel-black text-white">
      {/* Hero Header */}
      <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] to-[#180306] border-b border-sanatel-border overflow-hidden">
        <div className="absolute inset-0 bg-arch-grid opacity-35 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-crimson pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
            <div className="max-w-3xl space-y-4">
              <span className="tech-label text-xs font-bold text-sanatel-red bg-sanatel-surface px-3 py-1 rounded-md border border-sanatel-border">
                CANAL DIRETO // ENGENHARIA VISUAL
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-tight">
                FALE COM OS ESPECIALISTAS DA SANATEL
              </h1>
              <p className="text-lg text-sanatel-gray-300 leading-relaxed">
                Agende uma visita técnica no local da sua obra no Distrito Federal ou solicite uma prévia orçamentária via WhatsApp com nossa equipe de projetos.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Main Content: Info + Form (2-Color Gradient between White and Soft Red with Dark Accents) */}
      <section className="py-24 bg-gradient-to-b from-white to-[#FAF0F0] border-b border-slate-300 text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-light-blueprint opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Channels & Verification (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="tech-label text-xs font-bold text-sanatel-red">
                  ATENDIMENTO CORPORATIVO
                </span>
                <h2 className="text-3xl font-extrabold uppercase text-slate-950">
                  INFORMAÇÕES DE CONTATO
                </h2>
                <p className="text-sm text-slate-600">
                  Estamos prontos para atender arquitetos, engenheiros, construtoras, agências e empresários de todo o DF.
                </p>
              </div>

              {/* Cards with Luminous Animated Edge Beam */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <div className="relative p-[2px] rounded-2xl overflow-hidden group shadow-xl shadow-slate-900/10">
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(37,211,102,0.45)_240deg,#25D366_310deg,#FFFFFF_345deg,#25D366_355deg,transparent_360deg)] opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_7s_linear_infinite] drop-shadow-[0_0_12px_rgba(37,211,102,0.4)]"
                    style={{ willChange: 'transform' }}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-slate-200/90 pointer-events-none" />
                  
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-full h-full rounded-[14px] overflow-hidden bg-white p-6 flex items-start space-x-4 block"
                  >
                    <div className="p-3 rounded-xl bg-emerald-50 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs tech-label text-slate-500 font-bold">WHATSAPP DIRETO</div>
                      <div className="text-lg font-extrabold text-slate-950 group-hover:text-emerald-600 transition-colors">
                        {COMPANY_INFO.phone}
                      </div>
                      <div className="text-xs text-green-600 font-semibold flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                        Online em horário comercial
                      </div>
                    </div>
                  </a>
                </div>

                {/* E-mail */}
                <div className="relative p-[2px] rounded-2xl overflow-hidden group shadow-xl shadow-slate-900/10">
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(227,38,46,0.45)_240deg,#E3262E_310deg,#FFFFFF_345deg,#E3262E_355deg,transparent_360deg)] opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_8s_linear_infinite] drop-shadow-[0_0_12px_rgba(227,38,46,0.4)]"
                    style={{ willChange: 'transform' }}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-slate-200/90 pointer-events-none" />

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="relative z-10 w-full h-full rounded-[14px] overflow-hidden bg-white p-6 flex items-start space-x-4 block"
                  >
                    <div className="p-3 rounded-xl bg-red-50 text-sanatel-red group-hover:bg-sanatel-red group-hover:text-white transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs tech-label text-slate-500 font-bold">E-MAIL CORPORATIVO</div>
                      <div className="text-base font-extrabold text-slate-950 group-hover:text-sanatel-red transition-colors break-all">
                        {COMPANY_INFO.email}
                      </div>
                      <div className="text-xs text-slate-500">Envio de plantas e projetos executivos</div>
                    </div>
                  </a>
                </div>

                {/* Localização */}
                <div className="relative p-[2px] rounded-2xl overflow-hidden group shadow-xl shadow-slate-900/10">
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(227,38,46,0.45)_240deg,#E3262E_310deg,#FFFFFF_345deg,#E3262E_355deg,transparent_360deg)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_9s_linear_infinite] drop-shadow-[0_0_12px_rgba(227,38,46,0.4)]"
                    style={{ willChange: 'transform' }}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-slate-200/90 pointer-events-none" />

                  <div className="relative z-10 w-full h-full rounded-[14px] overflow-hidden bg-white p-6 flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-red-50 text-sanatel-red">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs tech-label text-slate-500 font-bold">REGIÃO DE ATENDIMENTO</div>
                      <div className="text-base font-extrabold text-slate-950">
                        {COMPANY_INFO.city}
                      </div>
                      <div className="text-xs text-slate-600">
                        {COMPANY_INFO.regionServed}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horário */}
                <div className="relative p-[2px] rounded-2xl overflow-hidden group shadow-xl shadow-slate-900/10">
                  <div
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(227,38,46,0.45)_240deg,#E3262E_310deg,#FFFFFF_345deg,#E3262E_355deg,transparent_360deg)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_10s_linear_infinite] drop-shadow-[0_0_12px_rgba(227,38,46,0.4)]"
                    style={{ willChange: 'transform' }}
                  />
                  <div className="absolute inset-0 rounded-2xl border border-slate-200/90 pointer-events-none" />

                  <div className="relative z-10 w-full h-full rounded-[14px] overflow-hidden bg-white p-6 flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-red-50 text-sanatel-red">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs tech-label text-slate-500 font-bold">HORÁRIO DE FUNCIONAMENTO</div>
                      <div className="text-base font-extrabold text-slate-950">
                        {COMPANY_INFO.businessHours}
                      </div>
                      <div className="text-xs text-slate-600">
                        Plantão via WhatsApp para obras em andamento
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Banner (Dark Tone Accent) with Animated Edge */}
              <div className="relative p-[2px] rounded-2xl overflow-hidden group shadow-xl">
                <div
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,rgba(227,38,46,0.45)_240deg,#E3262E_310deg,#FFFFFF_345deg,#E3262E_355deg,transparent_360deg)] opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_8s_linear_infinite] drop-shadow-[0_0_12px_rgba(227,38,46,0.4)]"
                  style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-0 rounded-2xl border border-slate-800 pointer-events-none" />

                <div className="relative z-10 w-full h-full rounded-[14px] overflow-hidden bg-slate-950 p-6 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    <InstagramIcon className="w-6 h-6 text-sanatel-red" />
                    <div>
                      <div className="text-xs tech-label text-slate-400">SIGA NOSSO TRABALHO</div>
                      <div className="text-sm font-bold text-white">{COMPANY_INFO.instagram}</div>
                    </div>
                  </div>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tech-label bg-sanatel-red hover:bg-sanatel-red-hover px-4 py-2 rounded-lg text-white shadow-md transition-all"
                  >
                    Seguir →
                  </a>
                </div>
              </div>

            </div>

            {/* Right: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* FAQ on Quotes */}
      <section className="py-20 bg-sanatel-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <AnimatedContent distance={50} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll">
            <div className="text-center space-y-2">
              <span className="tech-label text-xs font-bold text-sanatel-red">DÚVIDAS FREQUENTES</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                COMO FUNCIONA O ORÇAMENTO COM A SANATEL?
              </h3>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={60} direction="vertical" duration={0.8} ease="power3.out" trigger="scroll" stagger={0.08} delay={0.1}>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-sanatel-surface border border-sanatel-border space-y-2">
                <h4 className="text-base font-bold text-white">1. A visita técnica tem custo?</h4>
                <p className="text-xs sm:text-sm text-sanatel-gray-400 leading-relaxed">
                  Não. Para empresas e comércios no Distrito Federal, realizamos a visita técnica para conferência de medidas preliminares sem cobrança de taxa de deslocamento.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-sanatel-surface border border-sanatel-border space-y-2">
                <h4 className="text-base font-bold text-white">2. Vocês desenvolvem o mockup 3D da fachada antes de produzir?</h4>
                <p className="text-xs sm:text-sm text-sanatel-gray-400 leading-relaxed">
                  Sim! Após a aprovação inicial da cotação, geramos uma pré-visualização fotográfica realista da fachada montada com as cores exatas de ACM, iluminação e tipografia para validação do cliente.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-sanatel-surface border border-sanatel-border space-y-2">
                <h4 className="text-base font-bold text-white">3. Quais as formas de pagamento aceitas?</h4>
                <p className="text-xs sm:text-sm text-sanatel-gray-400 leading-relaxed">
                  Facilitamos o faturamento para empresas (PJ) mediante aprovação cadastral, parcelamento em cartão de crédito corporativo, Pix com desconto e condições especiais por etapas de medição.
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
};
