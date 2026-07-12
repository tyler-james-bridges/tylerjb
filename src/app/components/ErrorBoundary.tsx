'use client';

import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      this.props.fallback || (
        <main className="page-shell flex min-h-dvh items-center">
          <div className="max-w-2xl">
            <p className="kicker">Unexpected error</p>
            <h1 className="page-title">Something broke.</h1>
            <p className="lede">
              The page could not recover cleanly. Refresh it, or email me if the
              problem continues.
            </p>
            <div className="button-row mt-8">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="button-primary pressable"
              >
                Refresh page
              </button>
              <a
                href="mailto:tylerjamesbridges@gmail.com"
                className="button-secondary pressable"
              >
                Email Tyler
              </a>
            </div>
          </div>
        </main>
      )
    );
  }
}
