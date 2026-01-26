import { MetadataRoute } from 'next';
import { products } from './masters/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mibindustries.in';
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/products',
    '/services',
    '/contact-us'
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date(), changeFrequency: 'weekly', priority: p === '' ? 1 : 0.7 }));

  const productRoutes: MetadataRoute.Sitemap = products.map(p => ({
    url: `${base}/products/${encodeURIComponent(p.slug)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [ ...staticRoutes, ...productRoutes ];
}
