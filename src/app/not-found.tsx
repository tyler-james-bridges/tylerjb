import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not found',
  description: 'The requested page does not exist on tylerjb.dev.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[70dvh] items-center">
      <div className="max-w-3xl">
        <p className="muted-text">404</p>
        <h1 className="page-title">Not found</h1>
        <p className="lede">The requested page does not exist.</p>
        <Link href="/" className="button-primary pressable mt-8">
          <span aria-hidden="true">←</span> Home
        </Link>
      </div>
    </div>
  );
}
