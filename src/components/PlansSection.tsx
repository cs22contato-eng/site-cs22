import { ArrowRight, Check } from 'lucide-react';
import { COMMERCIAL_PLANS, PlanId } from '../utils/cs22Logic';
import { GhostReveal, GhostSpotlight } from './GhostMotion';

interface PlansSectionProps {
  onSelectPlan: (planId: PlanId) => void;
  onFindMyPlan: () => void;
}

export function PlansSection({ onSelectPlan, onFindMyPlan }: PlansSectionProps) {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="ghost-hairline-divider" aria-hidden="true" />
      </div>

      {/* SEÇÃO 6 — PLANOS MENSAIS */}
      <section id="planos" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#9E591F]">
                Planos Mensais · Araçatuba e região
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-[#171B20] sm:text-3xl lg:text-4xl">
                Escolha o nível de presença digital que sua loja precisa.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#47525E]">
                Cada negócio possui uma realidade e uma necessidade diferentes. Conheça nossos planos de marketing com valores transparentes e encontre a estrutura mais adequada para a sua empresa.
              </p>
            </div>
          </div>

          {/* 3 Official Commercial Plan Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
            {COMMERCIAL_PLANS.map((plan, idx) => (
              <GhostReveal key={plan.id} delay={idx * 0.08} className="h-full">
                <GhostSpotlight className="h-full rounded-3xl">
                  <article
                    data-testid={`plan-card-${plan.id}`}
                    data-featured={plan.featured ? 'true' : 'false'}
                    className={`ghost-metallic-edge flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-200 ${
                      plan.featured
                        ? 'ghost-glass-featured'
                        : 'ghost-glass-panel ghost-glass-panel-interactive'
                    }`}
                  >
                <div>
                  <div className="min-h-[20px]">
                    {plan.badgeLabel ? (
                      <span className="text-[11px] font-bold tracking-[0.14em] text-[#9E591F]">
                        {plan.badgeLabel}
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold tracking-[0.12em] text-[#47525E]">
                        PLANO MENSAL
                      </span>
                    )}
                  </div>

                  <h3 className="font-display mt-1 text-lg font-bold tracking-wide text-[#171B20] whitespace-nowrap">
                    {plan.name}
                  </h3>

                  {/* Direct Price Display */}
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-display text-3xl font-bold tracking-tight text-[#171B20] tabular-nums sm:text-4xl">
                      {plan.priceLabel}
                    </span>
                    <span className="text-sm font-semibold text-[#47525E]">
                      {plan.periodLabel}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#47525E]">
                    {plan.subtitle}
                  </p>

                  <div className="ghost-hairline-divider my-5" aria-hidden="true" />

                  <p className="text-xs font-bold uppercase tracking-wider text-[#9E591F]">
                    Inclui:
                  </p>

                  <ul className="mt-3.5 space-y-3">
                    {plan.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#171B20]">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C47A38]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.id)}
                    className={`flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold tracking-wide whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A38] ${
                      plan.featured ? 'ghost-btn-primary' : 'ghost-btn-secondary'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                  </article>
                </GhostSpotlight>
              </GhostReveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={onFindMyPlan}
              className="ghost-btn-secondary inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl px-7 py-3 text-sm font-bold tracking-wide whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A38]"
            >
              <span>QUERO ENCONTRAR MEU PLANO</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
