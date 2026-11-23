import { MouseEvent } from 'react';
import { ArrowLeft, BarChart3, CarFront, Globe, Instagram, MessageCircle, Smartphone } from 'lucide-react';
import { CS22_ASSETS, CS22_CONTACT } from '../utils/cs22Logic';

interface SystemsPreviewPageProps {
  onBackToMarketing: (e: MouseEvent<HTMLAnchorElement>) => void;
  onOpenConsultation: () => void;
}

const MODULES = [
  {
    title: 'Gestão financeira',
    description:
      'Organize suas contas a pagar e receber, acompanhe movimentações financeiras e tenha mais visibilidade sobre os resultados da sua empresa.',
    icon: BarChart3,
  },
  {
    title: 'Controle de estoque',
    description:
      'Gerencie seus veículos, acompanhe o estoque disponível e tenha informações organizadas para tomar decisões melhores.',
    icon: CarFront,
  },
  {
    title: 'E-commerce e loja virtual',
    description:
      'Apresente seus veículos na internet por meio de uma vitrine digital profissional, facilitando o acesso dos clientes ao seu estoque.',
    icon: Globe,
  },
  {
    title: 'Link na bio',
    description:
      'Reúna seus veículos, informações comerciais e canais de contato em uma página personalizada para sua loja.',
    icon: Smartphone,
  },
];

export function SystemsPreviewPage({
  onBackToMarketing,
  onOpenConsultation,
}: SystemsPreviewPageProps) {
  return (
    <div className="ghost-dark-band min-h-screen flex flex-col">
      <div className="ghost-dark-grid fixed inset-0" aria-hidden="true" />

      <header className="relative z-10 border-b border-[#AAB4C0]/15 bg-[#171B20]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 sm:h-[72px] max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            onClick={onBackToMarketing}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F4F6F8] hover:text-[#E58B45] transition-colors whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Voltar para CS22 Marketing</span>
          </a>

          <img
            src={CS22_ASSETS.logoTransparent}
            alt="CS22 Sistemas"
            referrerPolicy="no-referrer"
            className="hidden sm:block h-8 w-auto object-contain"
          />

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={CS22_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${CS22_CONTACT.instagramHandle}`}
              title={CS22_CONTACT.instagramHandle}
              className="ghost-dark-card inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#F4F6F8] hover:text-[#E58B45] transition-colors"
            >
              <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="ghost-btn-primary inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-bold whitespace-nowrap shrink-0 cursor-pointer"
            >
              Falar com a CS22
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-[#E58B45]">
              CS22 Sistemas · Tecnologia para o mercado automotivo
            </p>
            <h1 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-[#F4F6F8] sm:text-5xl">
              Sua loja mais organizada. Seu negócio mais controlado.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#AAB4C0] sm:text-lg">
              Conheça a frente de tecnologia e gestão empresarial da CS22, integrada ao marketing e à presença digital da sua loja automotiva.
            </p>
          </div>

          <div className="ghost-dark-panel mt-12 rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {MODULES.map((mod) => {
                const Icon = mod.icon;
                return (
                  <article key={mod.title} className="ghost-dark-card rounded-2xl p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C47A38]/35 bg-[#C47A38]/12 text-[#E58B45]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h2 className="font-display mt-4 text-xl font-bold text-[#F4F6F8]">
                      {mod.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#AAB4C0]">
                      {mod.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-[#AAB4C0]/12 pt-8 text-center">
              <p className="text-sm font-semibold text-[#F4F6F8]">
                MARKETING + GESTÃO + PRESENÇA DIGITAL
              </p>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="ghost-btn-primary inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-7 py-3 text-sm font-bold cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>CONHECER AS SOLUÇÕES DE GESTÃO</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
