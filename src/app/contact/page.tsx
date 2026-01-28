'use client';

import React, { useState, Suspense } from 'react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

function ContactFormWithParams() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError('');
    setSuccess(false);
    const form = e.currentTarget;
    const purpose = (form.elements.namedItem('purpose') as HTMLSelectElement)
      .value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)
      .value;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: `[${purpose}] ${message}`.trim(),
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setSending(false);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            className="input-glow"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="input-glow"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="purpose"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          What brings you here?
        </label>
        <select
          id="purpose"
          name="purpose"
          required
          className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background input-glow focus-visible:outline-none"
        >
          <option value="">Select an option...</option>
          <option value="Hiring / Job Opportunity">
            Hiring / Job Opportunity
          </option>
          <option value="Freelance Project">Freelance Project</option>
          <option value="Just Saying Hi">Just Saying Hi</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Message{' '}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell me a bit more..."
          className="input-glow"
        />
      </div>
      <Button
        type="submit"
        disabled={sending}
        className="w-full btn-lift rounded-xl"
      >
        {sending ? 'Sending...' : 'Send Message'}
      </Button>
      {success && (
        <div className="text-green-600 dark:text-green-400 text-center text-sm p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          Message sent! I&apos;ll get back to you soon.
        </div>
      )}
      {error && (
        <div className="text-red-600 dark:text-red-400 text-center text-sm p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          {error}
        </div>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="animate-slide-up">
      {/* Header */}
      <header className="content-header">
        <h1 className="text-2xl font-bold">✉️ Contact</h1>
      </header>

      {/* Content */}
      <div className="content-body prose-notes">
        <p className="text-muted-foreground mb-6">
          Want to get in touch? Fill out the form below or reach out via email.
        </p>

        <Suspense
          fallback={
            <div className="text-muted-foreground">Loading form...</div>
          }
        >
          <ContactFormWithParams />
        </Suspense>

        <p className="text-xs text-muted-foreground text-center mt-4">
          I typically respond within 24 hours.
        </p>

        <div className="mt-8 pt-6 border-t border-border">
          <h2>Other ways to reach me</h2>
          <ul className="space-y-2">
            <li>
              <span className="text-muted-foreground">Email:</span>{' '}
              <a
                href="mailto:tylerjamesbridges@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                tylerjamesbridges@gmail.com
              </a>
            </li>
            <li>
              <span className="text-muted-foreground">GitHub:</span>{' '}
              <a
                href="https://github.com/tyler-james-bridges"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                @tyler-james-bridges
              </a>
            </li>
            <li>
              <span className="text-muted-foreground">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/tyler-james-bridges-4344abab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Tyler James-Bridges
              </a>
            </li>
            <li>
              <span className="text-muted-foreground">X:</span>{' '}
              <a
                href="https://x.com/tmoney_145"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                @tmoney_145
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
