import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

const description = 'Contact Tyler James-Bridges by email or message form.';

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
