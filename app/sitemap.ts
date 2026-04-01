import { MetadataRoute } from 'next';
import products from '@/data/products.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://referral-codes.vercel.app';

  const productUrls = products.products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...productUrls,
  ];
}
