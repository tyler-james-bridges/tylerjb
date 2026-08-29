import type { Metadata, Viewport } from 'next';
import type { JSX, ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';
import SidebarLayout from './components/SidebarLayout';

const siteDescription =
  'Tyler James-Bridges is a software engineer at Weedmaps who builds developer tooling, test infrastructure, and open-source agent tools.';

export const metadata: Metadata = {
  metadataBase: new URL('https://tylerjb.dev'),
  title: {
    default: 'Tyler James-Bridges — Software Engineer',
    template: '%s | Tyler James-Bridges',
  },
  description: siteDescription,
  keywords: [
    'Tyler James-Bridges',
    'Software Engineer',
    'Developer Experience',
    'DevEx',
    'Quality Engineering',
    'Playwright',
    'TypeScript',
    'Agent Infrastructure',
    'Ethereum',
  ],
  authors: [{ name: 'Tyler James-Bridges', url: 'https://tylerjb.dev' }],
  creator: 'Tyler James-Bridges',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tylerjb.dev',
    title: 'Tyler James-Bridges — Software Engineer',
    description: siteDescription,
    siteName: 'Tyler James-Bridges',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyler James-Bridges — Software Engineer',
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

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf8' },
    { media: '(prefers-color-scheme: dark)', color: '#151514' },
  ],
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
  knowsAbout: [
    'Developer experience',
    'Quality engineering',
    'Test automation',
    'TypeScript',
    'Playwright',
    'AI agent infrastructure',
  ],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          disableTransitionOnChange
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
