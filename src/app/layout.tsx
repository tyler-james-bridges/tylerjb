import type { Metadata } from 'next';
import './globals.css';
import type { JSX, ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';
import SidebarLayout from './components/SidebarLayout';
import { GeistMono } from 'geist/font/mono';

const siteDescription =
  'Tyler James-Bridges — Software Engineer III on the DevEx team at Weedmaps. A decade of quality engineering, now building developer tooling and agent infrastructure on Ethereum L2s.';

export const metadata: Metadata = {
  metadataBase: new URL('https://tylerjb.dev'),
  title: {
    default: 'Tyler James-Bridges',
    template: '%s | Tyler James-Bridges',
  },
  description: siteDescription,
  keywords: [
    'Tyler James-Bridges',
    'Software Engineer',
    'Developer Experience',
    'DevEx',
    'QA',
    'Testing',
    'Playwright',
    'Agent Infrastructure',
    'Ethereum',
    'Percussion',
  ],
  authors: [{ name: 'Tyler James-Bridges', url: 'https://tylerjb.dev' }],
  creator: 'Tyler James-Bridges',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tylerjb.dev',
    title: 'Tyler James-Bridges',
    description: siteDescription,
    siteName: 'Tyler James-Bridges',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyler James-Bridges',
    description: siteDescription,
    creator: '@tmoney_145',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tyler James-Bridges',
  jobTitle: 'Software Engineer III',
  worksFor: {
    '@type': 'Organization',
    name: 'Weedmaps',
  },
  url: 'https://tylerjb.dev',
  sameAs: [
    'https://github.com/tyler-james-bridges',
    'https://www.linkedin.com/in/tyler-james-bridges-4344abab',
    'https://x.com/tmoney_145',
  ],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning className={GeistMono.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ErrorBoundary>
            <SidebarLayout>{children}</SidebarLayout>
          </ErrorBoundary>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
