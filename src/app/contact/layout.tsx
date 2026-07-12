import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

const description =
  'Contact Tyler James-Bridges about developer tooling, quality infrastructure, agent systems, or open-source collaboration.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact',
  description,
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
