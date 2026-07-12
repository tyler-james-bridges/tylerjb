import type { Metadata } from 'next';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'article';
}

/**
 * Next.js replaces nested metadata objects (openGraph, twitter) wholesale
 * rather than merging them with the root layout's values, so every page
 * must carry the full social-card field set itself.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  ogType = 'website',
}: PageMetadataInput): Metadata {
  const socialTitle = `${title} — Tyler James-Bridges`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      siteName: 'Tyler James-Bridges',
      title: socialTitle,
      description,
      url: path,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@tmoney_145',
      title: socialTitle,
      description,
    },
  };
}
