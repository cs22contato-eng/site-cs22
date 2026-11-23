import { MouseEvent } from 'react';
import {
  ArrowRight,
  BarChart3,
  CarFront,
  Globe,
  Link2,
  MapPin,
  MessageCircle,
  Smartphone,
} from 'lucide-react';
import { CS22_ASSETS } from '../utils/cs22Logic';
import { GhostReveal } from './GhostMotion';
import { ResilientImage } from './ResilientImage';

interface SystemsBridgeSectionProps {
  onNavigateToSistemas: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export function SystemsBridgeSection({ onNavigateToSistemas }: SystemsBridgeSectionProps) {
  return (
    <section
      id="sistemas"
      aria-labelledby="sistemas-bridge-title"
      className="ghost-dark-band border-y border-[#AAB4C0]/15 py-20 sm:py-28"
    >
      <div className="ghost-dark-grid absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <GhostReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#E58B45]">
            Sua loja mais organizada. Seu negócio mais controlado.
          </p>

          <h2
            id="sistemas-bridge-title"
            className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-[#F4F6F8] sm:text-4xl lg:text-[2.75rem]"
          >
            Sua loja precisa de mais do que marketing.
          </h2>

          <p className="mt-4 text-lg font-medium text-[#F4F6F8]/90 sm:text-xl">
            Conheça também as soluções de gestão e presença digital da CS22.
          </p>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#AAB4C0] sm:text-base">
            <p>
              Atrair clientes é importante. Mas administrar bem o estoque, acompanhar as finanças e organizar a operação também faz parte do crescimento da sua empresa.
            </p>
            <p>
              Com as soluções da CS22, sua loja pode reunir ferramentas para controlar a operação e fortalecer sua presença comercial.
            </p>
          </div>
        </GhostReveal>

        {/* Central Technological Panel with 4 Translucent Illustrative Cards */}
        <GhostReveal delay={0.1} className="ghost-dark-panel mt-12 rounded-3xl p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#AAB4C0]/12 pb-4">
            <div className="flex items-center gap-3">
              <img
                src={CS22_ASSETS.logoEmblem}
                alt="Emblema CS22"
                referrerPolicy="no-referrer"
                className="h-8 w-8 rounded-lg border border-[#C47A38]/40 object-cover"
              />
              <span className="font-display text-sm font-semibold text-[#F4F6F8]">
                Ecossistema CS22 Sistemas
              </span>
            </div>
            <span className="text-xs font-semibold tracking-wide text-[#E58B45]">
              Marketing · Gestão · Presença Digital
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* 1. GESTÃO FINANCEIRA */}
            <article className="ghost-dark-card flex flex-col justify-between rounded-2xl p-5 sm:p-6">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E58B45]">
                    01 · Gestão Financeira
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#C47A38]/35 bg-[#C47A38]/12 text-[#E58B45]">
                    <BarChart3 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="font-display mt-3 text-xl font-bold text-[#F4F6F8]">
                  Gestão financeira
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#AAB4C0]">
                  Organize suas contas a pagar e receber, acompanhe movimentações financeiras e tenha mais visibilidade sobre os resultados da sua empresa.
                </p>
              </div>

              {/* Illustrative Software Frame */}
              <div
                aria-hidden="true"
                className="ghost-dark-inner mt-5 rounded-xl p-4"
              >
                <div className="flex items-center justify-between border-b border-[#AAB4C0]/10 pb-2.5">
                  <span className="text-xs font-semibold text-[#F4F6F8]">
                    Painel Financeiro · Visão ilustrativa
                  </span>
                  <span className="text-[11px] font-medium text-[#E58B45]">
                    Consolidado
                  </span>
                </div>

                <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-[#AAB4C0]/10 bg-[#202832]/70 p-2.5">
                    <span className="block text-[11px] text-[#AAB4C0]">Contas a receber</span>
                    <div className="mt-2 h-2 w-4/5 rounded-full bg-gradient-to-r from-[#E58B45] to-[#C47A38]" />
                  </div>
                  <div className="rounded-lg border border-[#AAB4C0]/10 bg-[#202832]/70 p-2.5">
                    <span className="block text-[11px] text-[#AAB4C0]">Contas a pagar</span>
                    <div className="mt-2 h-2 w-3/5 rounded-full bg-[#AAB4C0]/55" />
                  </div>
                </div>

                <div className="mt-3.5 flex items-end gap-2 pt-1 h-16">
                  {[38, 56, 48, 72, 64, 88, 76].map((pct, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end h-full">
                      <div
                        style={{ height: `${pct}%` }}
                        className={`w-full rounded-t-md ${
                          i >= 5
                            ? 'bg-gradient-to-t from-[#C47A38] to-[#E58B45]'
                            : 'bg-[#AAB4C0]/25'
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* 2. CONTROLE DE ESTOQUE */}
            <article className="ghost-dark-card flex flex-col justify-between rounded-2xl p-5 sm:p-6">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E58B45]">
                    02 · Controle de Estoque
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#C47A38]/35 bg-[#C47A38]/12 text-[#E58B45]">
                    <CarFront className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="font-display mt-3 text-xl font-bold text-[#F4F6F8]">
                  Controle de estoque
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#AAB4C0]">
                  Gerencie seus veículos, acompanhe o estoque disponível e tenha informações organizadas para tomar decisões melhores.
                </p>
              </div>

              {/* Illustrative Inventory Frame */}
              <div
                aria-hidden="true"
                className="ghost-dark-inner mt-5 rounded-xl p-4"
              >
                <div className="flex items-center justify-between border-b border-[#AAB4C0]/10 pb-2.5">
                  <span className="text-xs font-semibold text-[#F4F6F8]">
                    Inventário de Pátio · Exemplo
                  </span>
                  <span className="text-[11px] font-medium text-[#AAB4C0]">
                    Status operacional
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  {[
                    { name: 'SUV Compacto · Linha Estúdio', status: 'Disponível', highlight: true },
                    { name: 'Sedã Executivo · Revisado', status: 'Em vitrine', highlight: false },
                    { name: 'SUV Médio · Documentação em dia', status: 'Disponível', highlight: true },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between gap-3 rounded-lg border border-[#AAB4C0]/10 bg-[#202832]/65 px-3 py-2"
                    >
                      <span className="truncate text-xs font-medium text-[#F4F6F8]">
                        {row.name}
                      </span>
                      <span
                        className={`shrink-0 text-[11px] font-semibold ${
                          row.highlight ? 'text-[#E58B45]' : 'text-[#AAB4C0]'
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* 3. E-COMMERCE */}
            <article className="ghost-dark-card flex flex-col justify-between rounded-2xl p-5 sm:p-6">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E58B45]">
                    03 · E-commerce e Loja Virtual
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#C47A38]/35 bg-[#C47A38]/12 text-[#E58B45]">
                    <Globe className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="font-display mt-3 text-xl font-bold text-[#F4F6F8]">
                  E-commerce e loja virtual
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#AAB4C0]">
                  Apresente seus veículos na internet por meio de uma vitrine digital profissional, facilitando o acesso dos clientes ao seu estoque.
                </p>
              </div>

              {/* Illustrative Storefront Browser Mockup */}
              <div
                aria-hidden="true"
                className="ghost-dark-inner mt-5 overflow-hidden rounded-xl"
              >
                <div className="flex items-center justify-between border-b border-[#AAB4C0]/10 bg-[#202832]/85 px-3.5 py-2">
                  <span className="text-[11px] font-semibold text-[#E58B45]">
                    Vitrine Digital
                  </span>
                  <span className="text-[11px] font-medium text-[#AAB4C0]">
                    loja.suaempresa.com.br
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3.5">
                  <div className="overflow-hidden rounded-lg border border-[#AAB4C0]/12 bg-[#202832]/70">
                    <div className="aspect-[16/10] w-full overflow-hidden">
                      <ResilientImage
                        src={CS22_ASSETS.tCross}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <span className="block truncate text-[11px] font-semibold text-[#F4F6F8]">
                        Catálogo SUV
                      </span>
                      <span className="block text-[10px] text-[#E58B45]">
                        Ver ficha técnica
                      </span>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg border border-[#AAB4C0]/12 bg-[#202832]/70">
                    <div className="aspect-[16/10] w-full overflow-hidden">
                      <ResilientImage
                        src={CS22_ASSETS.hyundaiCinza}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <span className="block truncate text-[11px] font-semibold text-[#F4F6F8]">
                        Catálogo Sedã
                      </span>
                      <span className="block text-[10px] text-[#E58B45]">
                        Ver ficha técnica
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 4. LINK NA BIO */}
            <article className="ghost-dark-card flex flex-col justify-between rounded-2xl p-5 sm:p-6">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E58B45]">
                    04 · Link na Bio
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#C47A38]/35 bg-[#C47A38]/12 text-[#E58B45]">
                    <Smartphone className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="font-display mt-3 text-xl font-bold text-[#F4F6F8]">
                  Link na bio
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#AAB4C0]">
                  Reúna seus veículos, informações comerciais e canais de contato em uma página personalizada para sua loja.
                </p>
              </div>

              {/* Illustrative Smartphone Garage Bio Mockup */}
              <div
                aria-hidden="true"
                className="mt-5 flex justify-center"
              >
                <div className="ghost-dark-inner w-full max-w-[260px] rounded-2xl border border-[#AAB4C0]/25 p-3">
                  <div className="mx-auto mb-2.5 h-1 w-10 rounded-full bg-[#AAB4C0]/30" />

                  <div className="flex items-center gap-2.5 rounded-xl bg-[#202832]/80 p-2.5">
                    <div className="h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-[#C47A38]/40">
                      <ResilientImage
                        src={CS22_ASSETS.nissanSuv}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block truncate text-xs font-bold text-[#F4F6F8]">
                        Sua Garagem Multimarcas
                      </span>
                      <span className="block truncate text-[10px] text-[#AAB4C0]">
                        Atendimento e estoque digital
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 space-y-1.5">
                    <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-[#E58B45] to-[#C47A38] px-3 py-1.5 text-[11px] font-bold text-[#171B20]">
                      <span>Falar no WhatsApp</span>
                      <MessageCircle className="h-3 w-3" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-[#AAB4C0]/15 bg-[#202832]/65 px-3 py-1.5 text-[11px] font-medium text-[#F4F6F8]">
                      <span>Conferir estoque</span>
                      <Link2 className="h-3 w-3 text-[#E58B45]" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-[#AAB4C0]/15 bg-[#202832]/65 px-3 py-1.5 text-[11px] font-medium text-[#AAB4C0]">
                      <span>Como chegar</span>
                      <MapPin className="h-3 w-3 text-[#AAB4C0]" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </GhostReveal>

        {/* Bridge Closing & CTA to /sistemas */}
        <div className="mt-10 flex flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E58B45]">
            MARKETING + GESTÃO + PRESENÇA DIGITAL
          </p>
          <p className="mt-2 text-base font-medium text-[#F4F6F8]">
            Tudo conectado às necessidades do seu negócio.
          </p>
          <p className="mt-2 max-w-xl text-sm text-[#AAB4C0]">
            Conheça a CS22 Sistemas e descubra como a tecnologia pode ajudar sua empresa a trabalhar melhor.
          </p>

          <div className="mt-7">
            <a
              href="/sistemas"
              onClick={onNavigateToSistemas}
              className="ghost-btn-primary inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-7 py-3 text-sm font-bold tracking-wide whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4F6F8]"
            >
              <span>Conhecer CS22 Sistemas</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
