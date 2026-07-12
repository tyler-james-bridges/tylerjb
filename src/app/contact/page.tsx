'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

function ContactForm() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError('');
    setSuccess(false);

    const form = event.currentTarget;
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Request failed');
      setSuccess(true);
      form.reset();
    } catch {
      setError('The form could not send. Please use the email link below.');
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      className="form-panel space-y-5"
      onSubmit={handleSubmit}
      aria-busy={sending}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="work-meta mb-2 block text-foreground"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="work-meta mb-2 block text-foreground"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="purpose"
          className="work-meta mb-2 block text-foreground"
        >
          Topic
        </label>
        <select
          id="purpose"
          name="purpose"
          required
          className="flex min-h-12 w-full bg-background px-3 py-2 text-base shadow-[0_0_0_1px_var(--rule)] focus-visible:outline-none"
        >
          <option value="">Select a topic</option>
          <option value="Developer tooling">Developer tooling</option>
          <option value="Quality infrastructure">Quality infrastructure</option>
          <option value="Agent systems">Agent systems</option>
          <option value="Open-source collaboration">
            Open-source collaboration
          </option>
          <option value="General conversation">General conversation</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="work-meta mb-2 block text-foreground"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What would you like to discuss?"
        />
      </div>

      <Button
        type="submit"
        disabled={sending}
        className="min-h-12 w-full pressable"
      >
        {sending ? 'Sending…' : 'Send message'}
      </Button>

      <div aria-live="polite" aria-atomic="true">
        {success && (
          <p className="bg-[hsl(var(--accent)/0.12)] p-3 text-center text-sm text-foreground">
            Message sent. Thank you for reaching out.
          </p>
        )}
        {error && (
          <p className="bg-destructive/10 p-3 text-center text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="kicker reveal">Contact</p>
        <h1 className="page-title reveal reveal-delay-1">
          Let&apos;s compare notes.
        </h1>
        <p className="lede reveal reveal-delay-2">
          Developer tooling, quality infrastructure, agent systems, open-source
          collaboration, or a good drumming conversation.
        </p>
      </header>

      <section className="section-row" aria-labelledby="contact-form-title">
        <div className="section-index">
          <strong>01</strong>
          Send a note
        </div>
        <div className="section-body">
          <h2 id="contact-form-title" className="section-title">
            What are you working on?
          </h2>
          <ContactForm />
        </div>
      </section>

      <section className="section-row" aria-labelledby="direct-title">
        <div className="section-index">
          <strong>02</strong>
          Direct links
        </div>
        <div className="section-body">
          <h2 id="direct-title" className="section-title">
            Elsewhere on the internet
          </h2>
          <div className="work-list">
            {[
              [
                'Email',
                'tylerjamesbridges@gmail.com',
                'mailto:tylerjamesbridges@gmail.com',
              ],
              [
                'GitHub',
                '@tyler-james-bridges',
                'https://github.com/tyler-james-bridges',
              ],
              [
                'LinkedIn',
                'Tyler James-Bridges',
                'https://www.linkedin.com/in/tyler-james-bridges-4344abab',
              ],
            ].map(([label, value, href], index) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={
                  href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className="work-item group"
              >
                <span className="work-number tabular">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{label}</h3>
                <p className="flex items-center gap-2 group-hover:text-accent">
                  {value}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
