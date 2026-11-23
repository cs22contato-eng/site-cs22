import { Instagram, MessageCircle } from 'lucide-react';
import {
  CS22_ASSETS,
  CS22_CONTACT,
  buildDirectWhatsAppUrl,
} from '../utils/cs22Logic';
import { GhostReveal, GhostSpotlight } from './GhostMotion';

interface FinalCtaFooterProps {
  onOpenConsultation: () => void;
}

export function FinalCtaFooter({ onOpenConsultation }: FinalCtaFooterProps) {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="ghost-hairline-divider" aria-hidden="true" />
      </div>

      {/* SEÇÃO 8 — CHAMADA FINAL */}
      <section id="contato" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <GhostReveal>
            <GhostSpotlight className="ghost-glass-featured ghost-metallic-edge rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
              <p className="text-sm font-semibold text-[#9E591F]">
                Próximo Passo
              </p>
              <h2 className="font-display mx-auto mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-[#171B20] sm:text-4xl">
                Está na hora de apresentar sua loja à altura do seu negócio.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#47525E]">
                Vamos conversar sobre como melhorar a apresentação dos seus veículos e fortalecer a presença digital da sua empresa.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="ghost-btn-primary inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold tracking-wide whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171B20]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>QUERO FALAR COM A CS22</span>
                </button>
                <p className="text-xs font-semibold text-[#47525E]">
                  Atendimento comercial pelo WhatsApp:{' '}
                  <a
                    href={buildDirectWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#9E591F] underline decoration-[#C47A38]/40 underline-offset-2 hover:text-[#171B20]"
                  >
                    {CS22_CONTACT.whatsappDisplay}
                  </a>
                </p>
              </div>
            </GhostSpotlight>
          </GhostReveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-[#202832]/12 bg-white/55 backdrop-blur-xl py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <img
              src={CS22_ASSETS.logoTransparent}
              alt="CS22 Marketing — Tecnologia que impulsiona negócios"
              referrerPolicy="no-referrer"
              className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(23,27,32,0.12)]"
            />
            <div>
              <p className="font-display text-sm font-bold text-[#171B20]">
                CS22 Marketing
              </p>
              <p className="text-xs font-medium text-[#47525E]">
                Marketing e produção visual para o mercado automotivo.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={buildDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp CS22 ${CS22_CONTACT.whatsappDisplay}`}
                className="ghost-glass-subtle inline-flex min-h-[40px] items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold text-[#171B20] transition-colors hover:border-[#C47A38]/60 hover:text-[#9E591F]"
              >
                <MessageCircle className="h-4 w-4 text-[#C47A38]" aria-hidden="true" />
                <span className="tabular-nums">{CS22_CONTACT.whatsappDisplay}</span>
              </a>

              <a
                href={CS22_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${CS22_CONTACT.instagramHandle}`}
                className="ghost-glass-subtle inline-flex min-h-[40px] items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold text-[#171B20] transition-colors hover:border-[#C47A38]/60 hover:text-[#9E591F]"
              >
                <Instagram className="h-4 w-4 text-[#C47A38]" aria-hidden="true" />
                <span>{CS22_CONTACT.instagramHandle}</span>
              </a>
            </div>

            <p className="text-xs font-semibold text-[#202832]">
              CS22 — Tecnologia que move negócios.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
