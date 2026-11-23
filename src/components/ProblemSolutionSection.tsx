import { AlertCircle, Camera, Layers, Share2, Sparkles } from 'lucide-react';
import { GhostReveal, GhostSpotlight } from './GhostMotion';

const PROBLEMS = [
  'Fotografias que não valorizam os veículos.',
  'Publicações sem identidade visual.',
  'Redes sociais sem padronização.',
  'Apresentações visuais que não despertam interesse.',
  'Dificuldade para manter uma presença digital profissional.',
  'Concorrentes com apresentações mais atrativas.',
];

const SOLUTIONS = [
  {
    index: '01.',
    title: 'Fotografia automotiva',
    description:
      'Imagens profissionais que valorizam os detalhes, o acabamento e a apresentação de cada veículo.',
    icon: Camera,
  },
  {
    index: '02.',
    title: 'Edição e tratamento de imagens',
    description:
      'Padronização visual e tratamento profissional para manter uma apresentação consistente.',
    icon: Layers,
  },
  {
    index: '03.',
    title: 'Conteúdo para redes sociais',
    description:
      'Materiais desenvolvidos para fortalecer a presença digital da sua empresa.',
    icon: Share2,
  },
  {
    index: '04.',
    title: 'Identidade visual e campanhas',
    description:
      'Comunicação visual alinhada à identidade da sua loja e aos objetivos comerciais.',
    icon: Sparkles,
  },
];

export function ProblemSolutionSection() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="ghost-hairline-divider" aria-hidden="true" />
      </div>

      {/* SEÇÃO 2 — O PROBLEMA */}
      <section id="problema" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <GhostReveal className="lg:col-span-5">
              <p className="text-sm font-semibold text-[#9E591F]">
                O Problema
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-[#171B20] sm:text-3xl lg:text-4xl">
                Você investe em veículos. Por que não investir na forma como eles são apresentados?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#47525E]">
                Um veículo pode ter excelente procedência, preço competitivo e ótimas condições. Mas, quando chega às redes sociais com fotografias improvisadas e apresentações pouco profissionais, perde oportunidades de causar uma boa primeira impressão.
              </p>
              <p className="mt-6 text-sm font-semibold leading-relaxed text-[#202832]">
                O mercado automotivo é competitivo. A maneira como sua loja se apresenta também faz parte da experiência de compra.
              </p>
            </GhostReveal>

            <GhostReveal delay={0.1} className="lg:col-span-7">
              <GhostSpotlight className="ghost-glass-elevated ghost-metallic-edge rounded-3xl p-6 sm:p-8">
                <p className="text-sm font-bold text-[#171B20]">
                  Sua loja pode estar enfrentando situações como:
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {PROBLEMS.map((item, idx) => (
                    <li
                      key={item}
                      className="ghost-glass-subtle flex items-start gap-3 rounded-2xl p-4"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#C47A38]/35 bg-[#E58B45]/15 text-[#9E591F]">
                        <AlertCircle className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[11px] font-bold tracking-wider text-[#9E591F] tabular-nums">
                          0{idx + 1}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium leading-snug text-[#171B20]">
                          {item}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </GhostSpotlight>
            </GhostReveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="ghost-hairline-divider" aria-hidden="true" />
      </div>

      {/* SEÇÃO 3 — NOSSA SOLUÇÃO */}
      <section id="solucao" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#9E591F]">
              Nossa Solução
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-[#171B20] sm:text-3xl lg:text-4xl">
              Não mostramos apenas veículos. Valorizamos a apresentação da sua loja.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#47525E]">
              A CS22 desenvolve soluções de marketing e produção visual direcionadas ao mercado automotivo. Unimos fotografia, edição, design e comunicação visual para construir uma presença digital mais profissional para o seu negócio.
            </p>
          </div>

          <p className="mt-10 text-sm font-bold text-[#202832]">
            Nosso trabalho envolve:
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {SOLUTIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <GhostReveal key={item.title} delay={idx * 0.06} className="h-full">
                  <GhostSpotlight className="h-full rounded-3xl">
                    <article className="ghost-glass-panel ghost-glass-panel-interactive ghost-metallic-edge flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7">
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-display text-sm font-bold text-[#9E591F] tabular-nums">
                            {item.index}
                          </span>
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#202832]/12 bg-white/75 shadow-sm">
                            <Icon className="h-5 w-5 text-[#C47A38]" aria-hidden="true" />
                          </div>
                        </div>
                        <h3 className="font-display mt-5 text-lg font-bold text-[#171B20]">
                          {item.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-[#47525E]">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </GhostSpotlight>
                </GhostReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
