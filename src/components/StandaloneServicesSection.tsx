import { MessageCircle, Minus } from 'lucide-react';
import {
  COMMERCIAL_TERMS,
  STANDALONE_SERVICES,
  StandaloneServiceId,
} from '../utils/cs22Logic';
import { GhostReveal, GhostSpotlight } from './GhostMotion';

interface StandaloneServicesSectionProps {
  onSelectService: (serviceId: StandaloneServiceId) => void;
}

export function StandaloneServicesSection({
  onSelectService,
}: StandaloneServicesSectionProps) {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="ghost-hairline-divider" aria-hidden="true" />
      </div>

      {/* SERVIÇOS AVULSOS */}
      <section id="servicos-avulsos" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#9E591F]">
              Serviços Avulsos
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-[#171B20] sm:text-3xl lg:text-4xl">
              Precisa de algo específico? Contrate serviços avulsos.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#47525E]">
              Nem toda empresa precisa de um plano mensal. Contrate produções individuais conforme a necessidade do seu negócio.
            </p>
          </div>

          {/* 6 Standalone Service Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STANDALONE_SERVICES.map((service, idx) => (
              <GhostReveal key={service.id} delay={(idx % 3) * 0.06} className="h-full">
                <GhostSpotlight className="h-full rounded-3xl">
                  <article
                    data-testid={`service-card-${service.id}`}
                    className="ghost-glass-panel ghost-glass-panel-interactive ghost-metallic-edge flex h-full flex-col justify-between rounded-3xl p-6"
                  >
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#171B20]">
                        {service.name}
                      </h3>

                      <p className="font-display mt-3 text-2xl font-bold tracking-tight text-[#9E591F] tabular-nums">
                        {service.priceLabel}
                      </p>

                      <p className="mt-3 text-sm leading-relaxed text-[#47525E]">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#202832]/10">
                      <button
                        type="button"
                        onClick={() => onSelectService(service.id)}
                        aria-label={`${service.ctaLabel}: ${service.name}`}
                        className="ghost-btn-secondary flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A38]"
                      >
                        <MessageCircle className="h-4 w-4 text-[#C47A38]" aria-hidden="true" />
                        <span>{service.ctaLabel}</span>
                      </button>
                    </div>
                  </article>
                </GhostSpotlight>
              </GhostReveal>
            ))}
          </div>

          {/* CONDIÇÕES COMERCIAIS */}
          <aside
            aria-label="Condições comerciais"
            className="ghost-glass-subtle mt-10 rounded-2xl p-6 sm:p-7"
          >
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#202832]">
              Condições comerciais
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 text-xs leading-relaxed text-[#47525E] sm:grid-cols-2 lg:grid-cols-3">
              {COMMERCIAL_TERMS.map((term) => (
                <li key={term} className="flex items-start gap-2">
                  <Minus aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C47A38]" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
