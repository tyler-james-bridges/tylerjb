import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services | Tyler Bridges',
  description:
    'Professional web development services at freelancer prices. Custom websites, landing pages, and e-commerce solutions with unlimited revisions. Save up to 80% compared to agencies.',
  keywords:
    'web development, website design, landing page, e-commerce, small business website, web developer, freelance developer',
  openGraph: {
    title: 'Web Development Services | Tyler Bridges',
    description:
      'Professional web development services at freelancer prices. Custom websites with unlimited revisions.',
    type: 'website',
    url: 'https://tylerbridges.com/services',
    siteName: 'Tyler Bridges',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tyler Bridges - Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services | Tyler Bridges',
    description:
      'Professional web development services at freelancer prices. Custom websites with unlimited revisions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://tylerbridges.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
