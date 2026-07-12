import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

const description =
  'Send Tyler James-Bridges a message about work, open source, drums, or anything else.';

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
