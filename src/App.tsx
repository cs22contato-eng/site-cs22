import { MouseEvent, useEffect, useState } from 'react';
import { AudienceSection, DifferentialSection } from './components/AudienceSection';
import { ConsultationModal } from './components/ConsultationModal';
import { FinalCtaFooter } from './components/FinalCtaFooter';
import { GallerySection } from './components/GallerySection';
import { GhostScrollProgress } from './components/GhostMotion';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PlansSection } from './components/PlansSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { StandaloneServicesSection } from './components/StandaloneServicesSection';
import { SystemsBridgeSection } from './components/SystemsBridgeSection';
import { SystemsPreviewPage } from './components/SystemsPreviewPage';
import {
  CommercialSelection,
  PlanId,
  StandaloneServiceId,
} from './utils/cs22Logic';

export default function App() {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/',
  );
  const [modalSelection, setModalSelection] = useState<CommercialSelection>({
    kind: 'plan',
    id: 'presenca',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const isSystemsRoute = normalizedPath === '/sistemas';

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.title = isSystemsRoute
      ? 'CS22 Sistemas — Gestão e Presença Digital Automotiva'
      : 'CS22 Marketing — Marketing Automotivo Profissional';

    const currentUrl = window.location.origin + normalizedPath;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = currentUrl;
  }, [isSystemsRoute, normalizedPath]);

  const navigateTo = (targetPath: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
      setPathname(targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDefaultConsultation = () => {
    setModalSelection({ kind: 'plan', id: 'presenca' });
    setIsModalOpen(true);
  };

  const handleSelectPlan = (planId: PlanId) => {
    setModalSelection({ kind: 'plan', id: planId });
    setIsModalOpen(true);
  };

  const handleSelectService = (serviceId: StandaloneServiceId) => {
    setModalSelection({ kind: 'service', id: serviceId });
    setIsModalOpen(true);
  };

  if (isSystemsRoute) {
    return (
      <>
        <GhostScrollProgress />
        <SystemsPreviewPage
          onBackToMarketing={navigateTo('/')}
          onOpenConsultation={openDefaultConsultation}
        />
        <ConsultationModal
          isOpen={isModalOpen}
          initialSelection={modalSelection}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  return (
    <div className="ghost-canvas min-h-screen text-[#171B20]">
      <GhostScrollProgress />

      {/* Heavy optical refraction orbs, caustic prism beam, and architectural grid */}
      <div className="ghost-orb ghost-orb-copper-top" aria-hidden="true" />
      <div className="ghost-orb ghost-orb-silver-mid" aria-hidden="true" />
      <div className="ghost-orb ghost-orb-copper-low" aria-hidden="true" />
      <div className="ghost-caustic-beam" aria-hidden="true" />
      <div className="ghost-grid-overlay fixed inset-0 z-0" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar onOpenConsultation={openDefaultConsultation} />

        <main className="flex-1">
          <HeroSection onOpenConsultation={openDefaultConsultation} />

          <ProblemSolutionSection />

          <GallerySection />

          <AudienceSection />

          <PlansSection
            onSelectPlan={handleSelectPlan}
            onFindMyPlan={openDefaultConsultation}
          />

          <StandaloneServicesSection onSelectService={handleSelectService} />

          <DifferentialSection />

          <SystemsBridgeSection onNavigateToSistemas={navigateTo('/sistemas')} />

          <FinalCtaFooter onOpenConsultation={openDefaultConsultation} />
        </main>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        initialSelection={modalSelection}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
