export type PlanId = 'essencial' | 'presenca' | 'performance';

export type StandaloneServiceId =
  | 'foto-veiculo'
  | 'pacote-10-veiculos'
  | 'video-veiculo'
  | 'edicao-video-cliente'
  | 'producao-presencial'
  | 'arte-comercial';

export type CommercialSelection =
  | { kind: 'plan'; id: PlanId }
  | { kind: 'service'; id: StandaloneServiceId };

export interface GalleryVehicle {
  id: string;
  model: string;
  brand: string;
  category: string;
  imageUrl: string;
  alt: string;
  focusNote: string;
  aspectClass: string;
}

export interface CommercialPlan {
  id: PlanId;
  name: string;
  priceLabel: string;
  periodLabel: string;
  subtitle: string;
  featured: boolean;
  badgeLabel?: string;
  deliverables: string[];
  ctaLabel: string;
}

export interface StandaloneService {
  id: StandaloneServiceId;
  name: string;
  priceLabel: string;
  description: string;
  ctaLabel: string;
}

export interface ConsultationFormInput {
  storeName: string;
  contactName: string;
  whatsapp: string;
  selection: CommercialSelection;
  notes?: string;
}

export interface ConsultationValidationErrors {
  storeName?: string;
  contactName?: string;
  whatsapp?: string;
}

export interface ConsultationValidationResult {
  isValid: boolean;
  errors: ConsultationValidationErrors;
}

export const CS22_CONTACT = {
  whatsappDigits: '5518991621455',
  whatsappDisplay: '(18) 99162-1455',
  instagramHandle: '@cs22.tech',
  instagramUrl: 'https://www.instagram.com/cs22.tech/',
} as const;

export const CS22_ASSETS = {
  logoTransparent: '/assets/cs22-logo-transparent.png',
  logoWide: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_23.47.16_d4378a43.jpeg',
  logoEmblem: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_23.47.17_7b9a96a4.jpeg',
  tCross: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_00.00.38__2__a0bd5f85.jpeg',
  hyundaiCinza: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_00.00.38__1__1957e062.jpeg',
  nissanSuv: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_00.00.38_cde364e9.jpeg',
} as const;

export const GALLERY_VEHICLES: GalleryVehicle[] = [
  {
    id: 'vw-tcross',
    model: 'Volkswagen T-Cross',
    brand: 'Volkswagen',
    category: 'SUV Compacto · Estúdio CS22',
    imageUrl: CS22_ASSETS.tCross,
    alt: 'Fotografia automotiva profissional do Volkswagen T-Cross em estúdio CS22 Marketing',
    focusNote:
      'Iluminação direcionada para realçar vincos de lataria, assinatura óptica em LED e contraste metálico em estúdio.',
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'hyundai-cinza',
    model: 'Hyundai Cinza',
    brand: 'Hyundai',
    category: 'Sedã · Estúdio CS22',
    imageUrl: CS22_ASSETS.hyundaiCinza,
    alt: 'Fotografia automotiva profissional do Hyundai cinza em estúdio CS22 Marketing',
    focusNote:
      'Enquadramento de três quartos com tratamento tonal prata e grafite para valorizar acabamento e proporções.',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'nissan-suv',
    model: 'Nissan SUV',
    brand: 'Nissan',
    category: 'SUV · Estúdio CS22',
    imageUrl: CS22_ASSETS.nissanSuv,
    alt: 'Fotografia automotiva profissional do Nissan SUV em estúdio CS22 Marketing',
    focusNote:
      'Reflexos controlados sobre superfície metálica e padronização visual pensada para gerar confiança imediata no digital.',
    aspectClass: 'aspect-[4/3]',
  },
];

export const COMMERCIAL_PLANS: CommercialPlan[] = [
  {
    id: 'essencial',
    name: 'PLANO ESSENCIAL',
    priceLabel: 'R$ 397,00',
    periodLabel: '/mês',
    subtitle: 'Para empresas que precisam manter uma presença profissional nas redes sociais.',
    featured: false,
    deliverables: [
      '8 publicações mensais.',
      'Criação de artes e legendas.',
      'Planejamento básico de conteúdo.',
      'Organização do Instagram.',
      'Conteúdo produzido a partir dos materiais fornecidos pelo cliente.',
    ],
    ctaLabel: 'QUERO O ESSENCIAL',
  },
  {
    id: 'presenca',
    name: 'PLANO PRESENÇA',
    priceLabel: 'R$ 597,00',
    periodLabel: '/mês',
    subtitle: 'Para empresas que desejam fortalecer sua presença digital com conteúdo mais dinâmico.',
    featured: true,
    badgeLabel: 'MAIS CONTRATADO',
    deliverables: [
      '12 publicações mensais.',
      'Até 4 vídeos curtos editados.',
      'Criação de artes e legendas.',
      'Planejamento mensal de conteúdo.',
      'Organização de conteúdo para Instagram e Facebook.',
    ],
    ctaLabel: 'QUERO O PRESENÇA',
  },
  {
    id: 'performance',
    name: 'PLANO PERFORMANCE',
    priceLabel: 'R$ 897,00',
    periodLabel: '/mês',
    subtitle: 'Para empresas que buscam uma presença digital mais completa e uma comunicação comercial consistente.',
    featured: false,
    deliverables: [
      '16 publicações mensais.',
      'Até 8 vídeos curtos editados.',
      'Planejamento estratégico de conteúdo.',
      'Produção de materiais comerciais.',
      'Uma sessão mensal de captação presencial, com duração e escopo previamente definidos.',
    ],
    ctaLabel: 'QUERO O PERFORMANCE',
  },
];

export const STANDALONE_SERVICES: StandaloneService[] = [
  {
    id: 'foto-veiculo',
    name: 'Fotografia de veículo',
    priceLabel: 'R$ 45,00',
    description:
      'Ensaio individual com enquadramento comercial para valorizar detalhes externos e internos.',
    ctaLabel: 'Solicitar pelo WhatsApp',
  },
  {
    id: 'pacote-10-veiculos',
    name: 'Pacote de 10 veículos fotografados',
    priceLabel: 'R$ 350,00',
    description:
      'Padronização visual completa para lote de até 10 veículos do estoque da sua loja.',
    ctaLabel: 'Solicitar pelo WhatsApp',
  },
  {
    id: 'video-veiculo',
    name: 'Vídeo comercial de veículo',
    priceLabel: 'R$ 179,00',
    description:
      'Captação e edição dinâmica focada em apresentar diferenciais do veículo para redes sociais.',
    ctaLabel: 'Solicitar pelo WhatsApp',
  },
  {
    id: 'edicao-video-cliente',
    name: 'Edição de vídeo fornecido pelo cliente',
    priceLabel: 'R$ 79,00',
    description:
      'Tratamento, cortes dinâmicos, ritmo comercial e legendas a partir das imagens enviadas pela loja.',
    ctaLabel: 'Solicitar pelo WhatsApp',
  },
  {
    id: 'producao-presencial',
    name: 'Produção de conteúdo presencial',
    priceLabel: 'A partir de R$ 250,00',
    description:
      'Sessão presencial em Araçatuba e região para captação de fotos e materiais comerciais na loja.',
    ctaLabel: 'Solicitar pelo WhatsApp',
  },
  {
    id: 'arte-comercial',
    name: 'Arte comercial avulsa',
    priceLabel: 'R$ 35,00',
    description:
      'Peça gráfica profissional para ofertas pontuais, condições especiais e destaques de estoque.',
    ctaLabel: 'Solicitar pelo WhatsApp',
  },
];

export const COMMERCIAL_TERMS: string[] = [
  'Os planos possuem mensalidade recorrente.',
  'Serviços avulsos podem ser contratados separadamente.',
  'Investimento em anúncios patrocinados não está incluído nos planos.',
  'Deslocamentos e produções externas podem ter custos adicionais.',
  'Captação presencial sujeita a agendamento prévio em Araçatuba e região.',
];

export function getPlanById(planId: PlanId): CommercialPlan {
  return COMMERCIAL_PLANS.find((plan) => plan.id === planId) ?? COMMERCIAL_PLANS[1];
}

export function getServiceById(serviceId: StandaloneServiceId): StandaloneService {
  return STANDALONE_SERVICES.find((service) => service.id === serviceId) ?? STANDALONE_SERVICES[0];
}

export function getSelectionSummary(selection: CommercialSelection): {
  title: string;
  priceText: string;
} {
  if (selection.kind === 'plan') {
    const plan = getPlanById(selection.id);
    return {
      title: plan.name,
      priceText: `${plan.priceLabel}${plan.periodLabel}`,
    };
  }
  const service = getServiceById(selection.id);
  return {
    title: service.name,
    priceText: service.priceLabel,
  };
}

export function stripNonDigits(value: string): string {
  return value.replace(/\D/g, '');
}

export function formatBrazilianPhone(raw: string): string {
  const digits = stripNonDigits(raw).slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function validateConsultationForm(
  input: ConsultationFormInput,
): ConsultationValidationResult {
  const errors: ConsultationValidationErrors = {};

  if (!input.storeName || input.storeName.trim().length < 2) {
    errors.storeName = 'Informe o nome da sua loja ou concessionária.';
  }

  if (!input.contactName || input.contactName.trim().length < 2) {
    errors.contactName = 'Informe seu nome para atendimento.';
  }

  const phoneDigits = stripNonDigits(input.whatsapp || '');
  if (phoneDigits.length < 10 || phoneDigits.length > 11) {
    errors.whatsapp = 'Informe um WhatsApp válido com DDD (10 ou 11 dígitos).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildDirectWhatsAppUrl(
  message = 'Olá, equipe CS22 Marketing! Gostaria de saber mais sobre os serviços.',
  whatsappNumber: string = CS22_CONTACT.whatsappDigits,
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encoded}`;
}

export function buildWhatsAppInquiryUrl(
  input: ConsultationFormInput,
  whatsappNumber: string = CS22_CONTACT.whatsappDigits,
): string {
  const summary = getSelectionSummary(input.selection);
  const lines = [
    'Olá, equipe CS22 Marketing!',
    `Loja: ${input.storeName.trim()}`,
    `Responsável: ${input.contactName.trim()}`,
    `WhatsApp: ${formatBrazilianPhone(input.whatsapp)}`,
    `Interesse: ${summary.title} (${summary.priceText})`,
  ];

  if (input.notes && input.notes.trim().length > 0) {
    lines.push(`Observações: ${input.notes.trim()}`);
  }

  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${whatsappNumber}?text=${encoded}`;
}
