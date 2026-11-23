import { Building2, CarFront, Check, Compass, ShieldCheck, Store } from 'lucide-react';
import { GhostReveal, GhostSpotlight } from './GhostMotion';

const AUDIENCE_SEGMENTS = [
  {
    label: 'Garagens e revendas multimarcas.',
    icon: Store,
  },
  {
    label: 'Lojas de veículos seminovos.',
    icon: CarFront,
  },
  {
    label: 'Concessionárias.',
    icon: Building2,
  },
  {
    label: 'Revendedores independentes.',
    icon: Compass,
  },
  {
    label: 'Empresas do segmento automotivo.',
    icon: ShieldCheck,
  },
];

export function AudienceSection() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="ghost-hairline-divider" aria-hidden="true" />
      </div>

      {/* SEÇÃO 5 — PARA QUEM É */}
      <section id="para-quem-e" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <GhostReveal>
            <GhostSpotlight className="ghost-glass-elevated ghost-metallic-edge rounded-3xl p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <p className="text-sm font-semibold text-[#9E591F]">
                    Para Quem É
                  </p>
                  <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-[#171B20] sm:text-3xl lg:text-4xl">
                    Feito para quem vive o mercado automotivo.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#47525E]">
                    Atendemos negócios que entendem a importância de uma apresentação profissional.
                  </p>
                  <p className="mt-5 text-sm font-semibold leading-relaxed text-[#202832]">
                    Se a sua empresa trabalha com veículos, podemos desenvolver uma comunicação alinhada ao seu negócio.
                  </p>
                </div>

              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {AUDIENCE_SEGMENTS.map((segment) => {
                    const Icon = segment.icon;
                    return (
                      <li
                        key={segment.label}
                        className="ghost-glass-subtle flex items-center gap-3.5 rounded-2xl px-4 py-4"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C47A38]/40 bg-[#E58B45]/15 text-[#9E591F]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-semibold text-[#171B20]">
                          {segment.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            </GhostSpotlight>
          </GhostReveal>
        </div>
      </section>
    </>
  );
}

export function DifferentialSection() {
  const pillars = [
    'Comunicação visual consistente e padronizada',
    'Alinhamento real à dinâmica do mercado automotivo',
    'Percepção de valor elevada em cada imagem e campanha',
    'Presença comercial que reflete a qualidade do estoque',
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="ghost-hairline-divider" aria-hidden="true" />
      </div>

      {/* SEÇÃO 7 — DIFERENCIAL CS22 */}
      <section id="diferencial" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <GhostReveal className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#9E591F]">
                Diferencial CS22
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-[#171B20] sm:text-3xl lg:text-4xl">
                Sua loja não precisa de mais publicações. Precisa de uma apresentação melhor.
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#47525E]">
                <p>
                  Nosso foco é desenvolver uma comunicação visual consistente, profissional e alinhada à realidade do mercado automotivo.
                </p>
                <p>
                  Trabalhamos para que cada imagem e conteúdo contribua para a percepção de valor da sua empresa.
                </p>
                <p className="font-semibold text-[#171B20]">
                  Na CS22, marketing não é apenas preencher o feed. É construir uma presença comercial que represente a qualidade do seu negócio.
                </p>
              </div>
            </GhostReveal>

            <GhostReveal delay={0.1} className="lg:col-span-5">
              <GhostSpotlight className="ghost-glass-elevated ghost-metallic-edge rounded-3xl p-6 sm:p-8">
                <p className="text-sm font-bold text-[#9E591F]">
                  Padrão de Entrega CS22
                </p>
                <ul className="mt-5 space-y-4">
                  {pillars.map((pillar) => (
                    <li key={pillar} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-[#C47A38]/40 bg-[#E58B45]/18 text-[#9E591F]">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium leading-relaxed text-[#171B20]">
                        {pillar}
                      </span>
                    </li>
                  ))}
                </ul>
              </GhostSpotlight>
            </GhostReveal>
          </div>
        </div>
      </section>
    </>
  );
}
