import { ArrowRight, ChevronDown } from 'lucide-react';
import { CS22_ASSETS } from '../utils/cs22Logic';
import { GhostReveal, GhostSpotlight } from './GhostMotion';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Copy & Primary Conversion */}
          <GhostReveal immediate delay={0.04} className="flex min-w-0 flex-col justify-center lg:col-span-6">
            <p className="text-sm font-semibold text-[#9E591F]">
              CS22 Marketing · Marketing especializado no mercado automotivo
            </p>

            <h1 className="font-display mt-3 text-[clamp(2.25rem,3.8vw,3.35rem)] font-bold leading-[1.08] tracking-tight text-[#171B20]">
              Seu estoque merece muito mais do que uma foto de celular.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-[#202832] sm:text-lg max-w-xl">
              Transformamos veículos em apresentações comerciais profissionais para a sua loja se destacar, transmitir confiança e atrair mais interessados no ambiente digital.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#47525E] sm:text-base max-w-xl">
              Fotografia automotiva, tratamento de imagens e conteúdo estratégico para lojas que querem valorizar seus veículos e fortalecer sua marca.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="ghost-btn-primary inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold tracking-wide whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171B20] sm:text-sm"
              >
                <span>QUERO VALORIZAR MINHA LOJA</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#planos"
                className="ghost-btn-secondary inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A38] sm:text-sm"
              >
                <span>CONHECER NOSSOS PLANOS</span>
                <ChevronDown className="h-4 w-4 text-[#202832]" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-6 text-sm font-medium text-[#47525E]">
              Atendimento especializado para garagens, revendas e concessionárias.
            </p>
          </GhostReveal>

          {/* Right Column: Heavy Ghost Glass Studio Visual Layer */}
          <GhostReveal immediate delay={0.14} className="flex min-w-0 flex-col justify-center lg:col-span-6">
            <GhostSpotlight className="ghost-glass-elevated ghost-metallic-edge relative flex flex-col gap-3.5 overflow-hidden rounded-3xl p-3.5 sm:p-4">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#171B20] shadow-inner">
                <ResilientImage
                  src={CS22_ASSETS.tCross}
                  alt="Volkswagen T-Cross em estúdio fotográfico da CS22 Marketing"
                  fallbackTitle="Volkswagen T-Cross · Estúdio CS22"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.02]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171B20]/35 via-transparent to-transparent"
                />
              </div>

              <div className="ghost-glass-panel flex items-center justify-between gap-4 rounded-2xl px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={CS22_ASSETS.logoEmblem}
                    alt="Emblema CS22"
                    referrerPolicy="no-referrer"
                    className="h-10 w-10 shrink-0 rounded-xl border border-[#C47A38]/40 object-cover shadow-sm"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-[#171B20]">
                      Apresentação Automotiva de Estúdio
                    </p>
                    <p className="truncate text-xs font-medium text-[#47525E]">
                      Fotografia · Padronização Visual · Direção Criativa
                    </p>
                  </div>
                </div>
                <span className="hidden shrink-0 text-xs font-bold text-[#9E591F] sm:inline-block">
                  CS22 Studio
                </span>
              </div>
            </GhostSpotlight>
          </GhostReveal>
        </div>
      </div>
    </section>
  );
}
