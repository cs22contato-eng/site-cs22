import test from 'node:test';
import assert from 'node:assert/strict';
import {
  COMMERCIAL_PLANS,
  COMMERCIAL_TERMS,
  CS22_CONTACT,
  GALLERY_VEHICLES,
  STANDALONE_SERVICES,
  buildDirectWhatsAppUrl,
  buildWhatsAppInquiryUrl,
  formatBrazilianPhone,
  getSelectionSummary,
  validateConsultationForm,
} from './cs22Logic';

test('gallery includes all three official CS22 automotive photographs', () => {
  assert.equal(GALLERY_VEHICLES.length, 3);
  const models = GALLERY_VEHICLES.map((v) => v.model);
  assert.deepEqual(models, ['Volkswagen T-Cross', 'Hyundai Cinza', 'Nissan SUV']);
});

test('commercial plans provide Essencial, Presença (featured), and Performance with exact pricing', () => {
  assert.equal(COMMERCIAL_PLANS.length, 3);
  assert.deepEqual(
    COMMERCIAL_PLANS.map((p) => [p.name, p.priceLabel]),
    [
      ['PLANO ESSENCIAL', 'R$ 397,00'],
      ['PLANO PRESENÇA', 'R$ 597,00'],
      ['PLANO PERFORMANCE', 'R$ 897,00'],
    ],
  );
  const featured = COMMERCIAL_PLANS.filter((p) => p.featured);
  assert.equal(featured.length, 1);
  assert.equal(featured[0].id, 'presenca');
  assert.equal(featured[0].badgeLabel, 'MAIS CONTRATADO');
});

test('standalone services include all six official services and prices', () => {
  assert.equal(STANDALONE_SERVICES.length, 6);
  assert.deepEqual(
    STANDALONE_SERVICES.map((s) => [s.name, s.priceLabel]),
    [
      ['Fotografia de veículo', 'R$ 45,00'],
      ['Pacote de 10 veículos fotografados', 'R$ 350,00'],
      ['Vídeo comercial de veículo', 'R$ 179,00'],
      ['Edição de vídeo fornecido pelo cliente', 'R$ 79,00'],
      ['Produção de conteúdo presencial', 'A partir de R$ 250,00'],
      ['Arte comercial avulsa', 'R$ 35,00'],
    ],
  );
  assert.equal(COMMERCIAL_TERMS.length, 5);
});

test('getSelectionSummary resolves both monthly plans and standalone services', () => {
  assert.deepEqual(getSelectionSummary({ kind: 'plan', id: 'presenca' }), {
    title: 'PLANO PRESENÇA',
    priceText: 'R$ 597,00/mês',
  });
  assert.deepEqual(getSelectionSummary({ kind: 'service', id: 'pacote-10-veiculos' }), {
    title: 'Pacote de 10 veículos fotografados',
    priceText: 'R$ 350,00',
  });
});

test('formatBrazilianPhone formats 10 and 11 digit numbers', () => {
  assert.equal(formatBrazilianPhone('18999998888'), '(18) 99999-8888');
  assert.equal(formatBrazilianPhone('1836221100'), '(18) 3622-1100');
  assert.equal(formatBrazilianPhone(''), '');
});

test('validateConsultationForm rejects empty or invalid inputs and accepts valid data', () => {
  const invalid = validateConsultationForm({
    storeName: '',
    contactName: 'A',
    whatsapp: '1234',
    selection: { kind: 'plan', id: 'presenca' },
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.storeName);
  assert.ok(invalid.errors.contactName);
  assert.ok(invalid.errors.whatsapp);

  const valid = validateConsultationForm({
    storeName: 'Auto Prime Araçatuba',
    contactName: 'Carlos Silva',
    whatsapp: '18999998888',
    selection: { kind: 'plan', id: 'presenca' },
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('buildWhatsAppInquiryUrl encodes store, selected service/plan, and price cleanly', () => {
  const url = buildWhatsAppInquiryUrl({
    storeName: 'Garagem Central',
    contactName: 'Marcos',
    whatsapp: '18988776655',
    selection: { kind: 'service', id: 'video-veiculo' },
    notes: 'Agendar para terça-feira.',
  });
  assert.ok(url.startsWith('https://wa.me/5518991621455?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.ok(decoded.includes('Garagem Central'));
  assert.ok(decoded.includes('Vídeo comercial de veículo (R$ 179,00)'));
  assert.ok(decoded.includes('(18) 98877-6655'));
});

test('CS22 official WhatsApp and Instagram contact targets are configured correctly', () => {
  assert.equal(CS22_CONTACT.whatsappDigits, '5518991621455');
  assert.equal(CS22_CONTACT.whatsappDisplay, '(18) 99162-1455');
  assert.equal(CS22_CONTACT.instagramHandle, '@cs22.tech');
  assert.equal(CS22_CONTACT.instagramUrl, 'https://www.instagram.com/cs22.tech/');
  assert.ok(buildDirectWhatsAppUrl().startsWith('https://wa.me/5518991621455?text='));
});
