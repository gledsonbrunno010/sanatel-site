import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, AlertCircle } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../../data/companyData';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
}

export const ContactForm: React.FC<{ defaultServiceSlug?: string }> = ({ defaultServiceSlug }) => {
  const defaultServiceName = defaultServiceSlug
    ? SERVICES.find(s => s.slug === defaultServiceSlug)?.shortTitle || ''
    : '';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: defaultServiceName || 'Fachadas em ACM',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!formData.name.trim()) errs.name = 'Por favor, informe seu nome completo.';
    if (!formData.phone.trim()) errs.phone = 'Informe seu telefone ou WhatsApp.';
    if (!formData.service) errs.service = 'Selecione o serviço desejado.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Build personalized WhatsApp payload
    const text = `*NOVA SOLICITAÇÃO DE ORÇAMENTO — SITE SANATEL*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*E-mail:* ${formData.email || 'Não informado'}\n` +
      `*Serviço:* ${formData.service}\n` +
      `*Localidade no DF:* ${formData.location || 'Brasília - DF'}\n` +
      `*Detalhes:* ${formData.message || 'Sem observações'}`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;

    setLoading(false);
    setSubmitted(true);

    // On mobile & desktop, direct navigation prevents popup-blocker suppression in iOS Safari
    try {
      window.location.href = whatsappUrl;
    } catch {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-sanatel-surface border border-sanatel-border shadow-2xl relative overflow-hidden">
      <div className="space-y-3 mb-8">
        <span className="tech-label text-xs font-bold text-sanatel-red">
          COTAÇÃO RÁPIDA & ANÁLISE TÉCNICA
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Solicite seu Orçamento Sem Compromisso
        </h3>
        <p className="text-xs sm:text-sm text-sanatel-gray-400">
          Preencha o formulário abaixo para receber contato da nossa equipe técnica ou ser redirecionado diretamente ao WhatsApp corporativo.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto border border-green-500/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-white">Solicitação Encaminhada!</h4>
          <p className="text-sm text-sanatel-gray-300 max-w-md mx-auto">
            Abrimos o WhatsApp com seus dados preenchidos. Nossa equipe entrará em contato em instantes para agendar a medição ou enviar a proposta técnica.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs tech-label text-sanatel-red hover:underline"
            >
              Enviar outra solicitação
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nome */}
            <div className="space-y-1.5">
              <label className="text-xs tech-label text-sanatel-gray-300 font-medium">
                Seu Nome ou Empresa *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Carlos Silva / Construtora Bsb"
                className={`w-full px-4 py-3 rounded-xl bg-sanatel-black border text-sm text-white placeholder-sanatel-gray-600 focus:outline-none focus:border-sanatel-red transition-all ${
                  errors.name ? 'border-red-500' : 'border-sanatel-border'
                }`}
              />
              {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
            </div>

            {/* Telefone / WhatsApp */}
            <div className="space-y-1.5">
              <label className="text-xs tech-label text-sanatel-gray-300 font-medium">
                WhatsApp / Telefone *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(61) 99999-9999"
                className={`w-full px-4 py-3 rounded-xl bg-sanatel-black border text-sm text-white placeholder-sanatel-gray-600 focus:outline-none focus:border-sanatel-red transition-all ${
                  errors.phone ? 'border-red-500' : 'border-sanatel-border'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* E-mail */}
            <div className="space-y-1.5">
              <label className="text-xs tech-label text-sanatel-gray-300 font-medium">
                E-mail Corporativo
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seuemail@empresa.com.br"
                className="w-full px-4 py-3 rounded-xl bg-sanatel-black border border-sanatel-border text-sm text-white placeholder-sanatel-gray-600 focus:outline-none focus:border-sanatel-red transition-all"
              />
            </div>

            {/* Serviço */}
            <div className="space-y-1.5">
              <label className="text-xs tech-label text-sanatel-gray-300 font-medium">
                Serviço Desejado *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-sanatel-black border border-sanatel-border text-sm text-white focus:outline-none focus:border-sanatel-red transition-all"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.shortTitle}>
                    {s.title}
                  </option>
                ))}
                <option value="Comunicação Visual Completa">Comunicação Visual Completa (Múltiplos Serviços)</option>
              </select>
            </div>
          </div>

          {/* Localidade no DF */}
          <div className="space-y-1.5">
            <label className="text-xs tech-label text-sanatel-gray-300 font-medium">
              Bairro / Cidade no Distrito Federal
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Ex: Asa Sul, Taguatinga Centro, Águas Claras, Samambaia..."
              className="w-full px-4 py-3 rounded-xl bg-sanatel-black border border-sanatel-border text-sm text-white placeholder-sanatel-gray-600 focus:outline-none focus:border-sanatel-red transition-all"
            />
          </div>

          {/* Mensagem / Medidas */}
          <div className="space-y-1.5">
            <label className="text-xs tech-label text-sanatel-gray-300 font-medium">
              Descrição do Projeto ou Dimensões Estimadas
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Descreva detalhes como metragem aproximada, tipo de comércio, se já possui logotipo ou projeto arquitetônico..."
              className="w-full px-4 py-3 rounded-xl bg-sanatel-black border border-sanatel-border text-sm text-white placeholder-sanatel-gray-600 focus:outline-none focus:border-sanatel-red transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-4 px-6 bg-sanatel-red hover:bg-sanatel-red-hover disabled:bg-sanatel-red/50 text-white text-sm font-bold tech-label tracking-wider uppercase rounded-xl shadow-[0_0_25px_rgba(227,38,46,0.4)] transition-all"
            >
              {loading ? (
                <span>Preparando Proposta...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  <span>Enviar e Continuar no WhatsApp</span>
                </>
              )}
            </button>
          </div>

          <div className="text-center pt-2">
            <span className="text-[11px] text-sanatel-gray-400">
              Seus dados são protegidos e utilizados exclusivamente para elaboração da sua proposta técnica.
            </span>
          </div>
        </form>
      )}
    </div>
  );
};

