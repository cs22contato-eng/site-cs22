import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, ExternalLink, MessageCircle, X } from 'lucide-react';
import {
  COMMERCIAL_PLANS,
  CS22_CONTACT,
  CommercialSelection,
  ConsultationValidationErrors,
  PlanId,
  STANDALONE_SERVICES,
  StandaloneServiceId,
  buildDirectWhatsAppUrl,
  buildWhatsAppInquiryUrl,
  formatBrazilianPhone,
  getSelectionSummary,
  validateConsultationForm,
} from '../utils/cs22Logic';

interface ConsultationModalProps {
  isOpen: boolean;
  initialSelection: CommercialSelection;
  onClose: () => void;
}

function serializeSelection(sel: CommercialSelection): string {
  return `${sel.kind}:${sel.id}`;
}

function parseSelection(raw: string): CommercialSelection {
  const [kind, id] = raw.split(':');
  if (kind === 'service') {
    return { kind: 'service', id: id as StandaloneServiceId };
  }
  return { kind: 'plan', id: id as PlanId };
}

export function ConsultationModal({
  isOpen,
  initialSelection,
  onClose,
}: ConsultationModalProps) {
  const [storeName, setStoreName] = useState('');
  const [contactName, setContactName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [selection, setSelection] = useState<CommercialSelection>(initialSelection);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<ConsultationValidationErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSelection(initialSelection);
      setErrors({});
      setSubmittedUrl(null);
    }
  }, [isOpen, initialSelection]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const summary = getSelectionSummary(selection);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validateConsultationForm({
      storeName,
      contactName,
      whatsapp,
      selection,
      notes,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const url = buildWhatsAppInquiryUrl({
      storeName,
      contactName,
      whatsapp,
      selection,
      notes,
    });
    setSubmittedUrl(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#171B20]/45 p-4 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="ghost-glass-elevated ghost-metallic-edge relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-[#9E591F]">
              Atendimento Comercial CS22 · Araçatuba e região
            </p>
            <h3
              id="consultation-modal-title"
              className="font-display mt-1 text-xl font-bold text-[#171B20] sm:text-2xl"
            >
              {submittedUrl ? 'Solicitação pronta para o WhatsApp' : 'Solicitar atendimento comercial'}
            </h3>
          </div>
          <button
            type="button"
            aria-label="Fechar janela de atendimento"
            onClick={onClose}
            className="ghost-glass-subtle inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#171B20] hover:border-[#C47A38]/60 cursor-pointer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {submittedUrl ? (
          <div className="mt-6 space-y-5">
            <div className="ghost-glass-subtle rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9E591F]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-[#171B20]">
                    Resumo preparado para {storeName}
                  </p>
                  <p className="mt-1 text-sm text-[#47525E]">
                    Interesse: <strong className="text-[#171B20]">{summary.title}</strong> ({summary.priceText})
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={submittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn-primary inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Abrir conversa no WhatsApp</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setSubmittedUrl(null)}
                className="ghost-btn-secondary inline-flex min-h-[46px] items-center justify-center rounded-xl px-5 py-3 text-sm font-bold cursor-pointer"
              >
                Editar dados
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <div>
              <label htmlFor="cs22-store-name" className="block text-xs font-bold text-[#171B20]">
                Nome da loja / concessionária
              </label>
              <input
                id="cs22-store-name"
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                placeholder="Ex.: Auto Prime Araçatuba"
                className="mt-1.5 w-full rounded-xl border border-[#202832]/18 bg-white/75 px-3.5 py-2.5 text-sm text-[#171B20] placeholder:text-[#47525E]/60 focus:border-[#C47A38] focus:bg-white focus:outline-none"
              />
              {errors.storeName && (
                <p role="alert" className="mt-1 text-xs font-semibold text-[#9E591F]">
                  {errors.storeName}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cs22-contact-name" className="block text-xs font-bold text-[#171B20]">
                  Seu nome
                </label>
                <input
                  id="cs22-contact-name"
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Ex.: Carlos Silva"
                  className="mt-1.5 w-full rounded-xl border border-[#202832]/18 bg-white/75 px-3.5 py-2.5 text-sm text-[#171B20] placeholder:text-[#47525E]/60 focus:border-[#C47A38] focus:bg-white focus:outline-none"
                />
                {errors.contactName && (
                  <p role="alert" className="mt-1 text-xs font-semibold text-[#9E591F]">
                    {errors.contactName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="cs22-whatsapp" className="block text-xs font-bold text-[#171B20]">
                  WhatsApp com DDD
                </label>
                <input
                  id="cs22-whatsapp"
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(formatBrazilianPhone(e.target.value))}
                  placeholder="(18) 99999-9999"
                  className="mt-1.5 w-full rounded-xl border border-[#202832]/18 bg-white/75 px-3.5 py-2.5 text-sm text-[#171B20] placeholder:text-[#47525E]/60 tabular-nums focus:border-[#C47A38] focus:bg-white focus:outline-none"
                />
                {errors.whatsapp && (
                  <p role="alert" className="mt-1 text-xs font-semibold text-[#9E591F]">
                    {errors.whatsapp}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="cs22-selection-select" className="block text-xs font-bold text-[#171B20]">
                Plano ou serviço avulso de interesse
              </label>
              <select
                id="cs22-selection-select"
                value={serializeSelection(selection)}
                onChange={(e) => setSelection(parseSelection(e.target.value))}
                className="mt-1.5 w-full rounded-xl border border-[#202832]/18 bg-white/75 px-3.5 py-2.5 text-sm text-[#171B20] focus:border-[#C47A38] focus:bg-white focus:outline-none"
              >
                <optgroup label="Planos Mensais">
                  {COMMERCIAL_PLANS.map((plan) => (
                    <option key={plan.id} value={`plan:${plan.id}`}>
                      {plan.name} — {plan.priceLabel}{plan.periodLabel}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Serviços Avulsos">
                  {STANDALONE_SERVICES.map((service) => (
                    <option key={service.id} value={`service:${service.id}`}>
                      {service.name} — {service.priceLabel}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div>
              <label htmlFor="cs22-notes" className="block text-xs font-bold text-[#171B20]">
                Observações ou cidade (opcional)
              </label>
              <textarea
                id="cs22-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex.: Loja em Araçatuba, gostaria de agendar captação para o estoque."
                className="mt-1.5 w-full rounded-xl border border-[#202832]/18 bg-white/75 px-3.5 py-2 text-sm text-[#171B20] placeholder:text-[#47525E]/60 focus:border-[#C47A38] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                type="submit"
                className="ghost-btn-primary flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Continuar para atendimento no WhatsApp</span>
              </button>
              <p className="text-center text-xs text-[#47525E]">
                Ou fale diretamente pelo WhatsApp:{' '}
                <a
                  href={buildDirectWhatsAppUrl(
                    `Olá, equipe CS22 Marketing! Tenho interesse em: ${summary.title} (${summary.priceText}).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#9E591F] underline decoration-[#C47A38]/40 underline-offset-2 hover:text-[#171B20]"
                >
                  {CS22_CONTACT.whatsappDisplay}
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
