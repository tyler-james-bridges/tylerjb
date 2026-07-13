import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Tyler James-Bridges',
  description:
    'Get in touch with Tyler James-Bridges about engineering work, developer tooling, or collaboration.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
