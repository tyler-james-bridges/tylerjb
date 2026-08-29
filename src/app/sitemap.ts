import type { MetadataRoute } from 'next';

const siteUpdated = new Date('2026-07-12');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tylerjb.dev';
  const staticRoutes = [
    ['', 'weekly', 1],
    ['/projects', 'monthly', 0.9],
    ['/experience', 'monthly', 0.9],
    ['/about', 'monthly', 0.8],
    ['/journey', 'yearly', 0.6],
    ['/contact', 'yearly', 0.6],
    ['/drums', 'yearly', 0.5],
    ['/playground', 'yearly', 0.4],
  ] as const;

  const pages: MetadataRoute.Sitemap = staticRoutes.map(
    ([route, changeFrequency, priority]) => ({
      url: `${baseUrl}${route}`,
      lastModified: siteUpdated,
      changeFrequency,
      priority,
    })
  );

  return pages;
}
