import type { Metadata } from 'next';
import './globals.css';
import type { JSX, ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';
import SidebarLayout from './components/SidebarLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://tylerjb.dev'),
  title: {
    default: 'Tyler James-Bridges',
    template: '%s | Tyler James-Bridges',
  },
  description:
    'Software Engineer with 10+ years in QA and test automation. Percussionist and educator. Open to opportunities.',
  keywords: [
    'Tyler James-Bridges',
    'Software Engineer',
    'QA',
    'Testing',
    'Education',
    'Music',
    'Percussion',
  ],
  authors: [{ name: 'Tyler James-Bridges', url: 'https://tylerjb.dev' }],
  creator: 'Tyler James-Bridges',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tylerjb.dev',
    title: 'Tyler James-Bridges',
    description:
      'Software Engineer with 10+ years in QA and test automation. Percussionist and educator. Open to opportunities.',
    siteName: 'Tyler James-Bridges',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Tyler James-Bridges',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyler James-Bridges',
    description:
      'Software Engineer with 10+ years in QA and test automation. Percussionist and educator. Open to opportunities.',
    creator: '@tmoney_145',
    images: ['/images/profile.jpg'],
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

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
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
