import { useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { CS22_ASSETS, CS22_CONTACT } from '../utils/cs22Logic';

interface NavbarProps {
  onOpenConsultation: () => void;
}

const NAV_LINKS = [
  { href: '#solucao', label: 'Solução' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#planos', label: 'Planos' },
  { href: '#servicos-avulsos', label: 'Avulsos' },
  { href: '#sistemas', label: 'Sistemas' },
];

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="ghost-nav-header sticky top-0 z-40 w-full">
      <div className="mx-auto flex h-16 sm:h-[72px] max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Transparent CS22 Logo Mark */}
        <a
          href="#hero"
          aria-label="CS22 Marketing — Início"
          className="flex items-center whitespace-nowrap shrink-0 rounded-md py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C47A38]"
        >
          <img
            src={CS22_ASSETS.logoTransparent}
            alt="CS22 Marketing — Tecnologia que impulsiona negócios"
            referrerPolicy="no-referrer"
            className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(23,27,32,0.12)]"
          />
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#202832]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#9E591F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C47A38] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C47A38] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Instagram Icon + Primary Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={CS22_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${CS22_CONTACT.instagramHandle}`}
            title={CS22_CONTACT.instagramHandle}
            className="ghost-glass-subtle inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#171B20] transition-colors hover:border-[#C47A38]/60 hover:text-[#9E591F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A38]"
          >
            <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="ghost-btn-primary hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-bold whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171B20]"
          >
            Falar com a CS22
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="ghost-glass-subtle inline-flex md:hidden h-11 w-11 items-center justify-center rounded-xl text-[#171B20] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A38]"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="ghost-glass-elevated md:hidden border-t border-[#202832]/10 px-4 py-4">
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-sm font-semibold text-[#171B20] transition-colors hover:bg-white/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CS22_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center gap-2.5 rounded-xl px-3 text-sm font-semibold text-[#171B20] transition-colors hover:bg-white/70"
            >
              <Instagram className="h-4 w-4 text-[#9E591F]" aria-hidden="true" />
              <span>Instagram {CS22_CONTACT.instagramHandle}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenConsultation();
              }}
              className="ghost-btn-primary mt-2 flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold cursor-pointer"
            >
              Falar com a CS22
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
