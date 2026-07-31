import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lereve.de';

  const routes = [
    '',
    '/agb',
    '/anfahrt',
    '/blog',
    '/blog/entspannung-im-alltag',
    '/blog/vorteile-schwangerschaftsmassage',
    '/booking',
    '/datenschutz',
    '/faq',
    '/gutscheine',
    '/hausbesuche',
    '/impressum',
    '/kontakt',
    '/philosophie',
    '/preise',
    '/specials',
    '/treatments',
    '/treatments/aroma',
    '/treatments/braut-massage',
    '/treatments/gesichtsbehandlungen',
    '/treatments/head-spa',
    '/treatments/hot-stone',
    '/treatments/massagen',
    '/treatments/schwangerschaftsmassage',
    '/treueprogramm',
    '/ueber-mich',
    '/vorbereitung'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
