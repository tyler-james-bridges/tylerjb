import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Not found',
  description: 'The requested page does not exist on tylerjb.dev.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[70dvh] items-center">
      <div className="max-w-3xl">
        <p className="kicker">404 · Not found</p>
        <h1 className="page-title">This page is off the record.</h1>
        <p className="lede">
          The route may have moved, or it may never have existed. The working
          record starts at the homepage.
        </p>
        <Link href="/" className="button-primary pressable mt-8">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Return home
        </Link>
      </div>
    </div>
  );
}
