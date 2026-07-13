import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playground | Tyler James-Bridges',
  description:
    'TylerOS — a desktop-style playground with a terminal, music tools, and other experiments.',
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
