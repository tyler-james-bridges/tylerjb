'use client';

import { useState, type FormEvent } from 'react';
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
    <form className="form-panel" onSubmit={handleSubmit} aria-busy={sending}>
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
        <select id="purpose" name="purpose" required className="form-control">
          <option value="">Select a topic</option>
          <option value="Developer tooling">Developer tooling</option>
          <option value="Test infrastructure">Test infrastructure</option>
          <option value="Agent systems">Agent systems</option>
          <option value="Open-source collaboration">
            Open-source collaboration
          </option>
          <option value="Other">Other</option>
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
          placeholder="Message"
        />
      </div>

      <Button type="submit" disabled={sending} className="submit-button">
        {sending ? 'Sending…' : 'Send message'}
      </Button>

      <div aria-live="polite" aria-atomic="true">
        {success && <p className="form-status">Message sent.</p>}
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
        <h1>Contact</h1>
        <p className="lede">Messages go directly to Tyler&apos;s email.</p>
      </header>

      <section className="content-section" aria-labelledby="contact-form-title">
        <div className="section-heading">
          <h2 id="contact-form-title">Message</h2>
        </div>
        <ContactForm />
      </section>

      <section className="content-section" aria-labelledby="direct-title">
        <div className="section-heading">
          <h2 id="direct-title">Links</h2>
        </div>
        <div className="record-list">
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
          ].map(([label, value, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="record-row contact-row"
            >
              <h3>{label}</h3>
              <p>
                {value}
                {href.startsWith('http') && <span aria-hidden="true"> ↗</span>}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
