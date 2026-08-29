import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

const description =
  'Interface studies, mobile-development workflows, and music-tool experiments by Tyler James-Bridges.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Lab',
  description,
  path: '/playground',
});

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
