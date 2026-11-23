import { useEffect, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_VEHICLES, GalleryVehicle } from '../utils/cs22Logic';
import { GhostReveal } from './GhostMotion';
import { ResilientImage } from './ResilientImage';

export function GallerySection() {
  const [activeVehicle, setActiveVehicle] = useState<GalleryVehicle | null>(null);

  useEffect(() => {
    if (!activeVehicle) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVehicle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVehicle]);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="ghost-hairline-divider" aria-hidden="true" />
      </div>

      {/* SEÇÃO 4 — GALERIA */}
      <section id="galeria" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#9E591F]">
                Galeria
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-[#171B20] sm:text-3xl lg:text-4xl">
                Seu estoque apresentado em outro nível.
              </h2>
            </div>
            <div className="max-w-md text-sm leading-relaxed text-[#47525E] sm:text-base">
              <p>Cada veículo tem características que merecem ser valorizadas.</p>
              <p className="mt-1">
                Conheça um pouco do padrão visual que buscamos entregar em nossos projetos.
              </p>
            </div>
          </div>

          {/* 3 Official Automotive Studio Photographs */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {GALLERY_VEHICLES.map((vehicle, index) => {
              const isLead = index === 0;
              return (
                <GhostReveal
                  key={vehicle.id}
                  delay={index * 0.08}
                  className={isLead ? 'lg:col-span-12' : 'lg:col-span-6'}
                >
                  <article className="ghost-glass-elevated ghost-glass-panel-interactive ghost-metallic-edge group flex flex-col overflow-hidden rounded-3xl p-3 sm:p-3.5">
                  <button
                    type="button"
                    onClick={() => setActiveVehicle(vehicle)}
                    aria-label={`Ampliar fotografia de estúdio: ${vehicle.model}`}
                    className={`relative w-full overflow-hidden rounded-2xl bg-[#171B20] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A38] ${
                      isLead ? 'aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <ResilientImage
                      src={vehicle.imageUrl}
                      alt={vehicle.alt}
                      fallbackTitle={vehicle.model}
                      className="h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171B20]/90 via-[#171B20]/20 to-transparent"
                    />

                    <span className="absolute top-3.5 right-3.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-[#171B20]/55 text-[#F4F6F8] backdrop-blur-md transition-colors group-hover:bg-[#171B20]/80">
                      <Maximize2 className="h-4 w-4 text-[#E58B45]" aria-hidden="true" />
                    </span>

                    <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1 sm:inset-x-5 sm:bottom-5">
                      <span className="text-xs font-semibold text-[#E58B45]">
                        {vehicle.category}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-[#F4F6F8] sm:text-xl">
                        {vehicle.model}
                      </h3>
                      <p className="max-w-2xl text-xs leading-relaxed text-[#E2E7ED] sm:text-sm">
                        {vehicle.focusNote}
                      </p>
                    </div>
                  </button>
                  </article>
                </GhostReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Heavy Light Ghost Glass Lightbox Modal */}
      {activeVehicle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171B20]/45 p-4 backdrop-blur-xl"
          onClick={() => setActiveVehicle(null)}
        >
          <div
            className="ghost-glass-elevated ghost-metallic-edge relative w-full max-w-4xl overflow-hidden rounded-3xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-3.5">
              <div>
                <p className="text-xs font-bold text-[#9E591F]">
                  {activeVehicle.category}
                </p>
                <h3
                  id="gallery-modal-title"
                  className="font-display text-xl font-bold text-[#171B20]"
                >
                  {activeVehicle.model}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Fechar visualização ampliada"
                onClick={() => setActiveVehicle(null)}
                className="ghost-glass-subtle inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#171B20] hover:border-[#C47A38]/60 cursor-pointer"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl bg-[#171B20] shadow-md">
              <ResilientImage
                src={activeVehicle.imageUrl}
                alt={activeVehicle.alt}
                fallbackTitle={activeVehicle.model}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#47525E]">
              {activeVehicle.focusNote}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
