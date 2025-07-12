"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");
    setSuccess(false);
    const form = e.currentTarget;
    const data = {
      name: (form.name as any).value,
      email: (form.email as any).value,
      message: (form.message as any).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setSending(false);
  }

  return (
    <main className="min-h-screen bg-background text-foreground font-serif px-6 py-16 transition-colors duration-300">
      <div className="max-w-2xl mx-auto space-y-10 px-2 md:px-0">
        <header className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact
          </h1>
          <p className="text-lg text-neutral-500">
            Want to get in touch? Fill out the form below or reach out via
            email/social.
          </p>
        </header>
        <section className="space-y-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full rounded-md border border-neutral-300 bg-neutral-900 text-neutral-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-neutral-300 bg-neutral-900 text-neutral-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border border-neutral-300 bg-neutral-900 text-neutral-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-teal-500 text-white font-semibold hover:bg-teal-600 transition"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </form>
          {success && (
            <div className="text-green-500 text-center font-semibold">
              Message sent! I'll get back to you soon.
            </div>
          )}
          {error && (
            <div className="text-red-500 text-center font-semibold">
              {error}
            </div>
          )}
          <div className="pt-8 text-center text-sm text-neutral-500">
            <p>
              Or email:{" "}
              <a
                href="mailto:tylerjamesbridges@gmail.com"
                className="underline"
              >
                tylerjamesbridges@gmail.com
              </a>
            </p>
            <p>
              Find me on{" "}
              <a
                href="https://www.linkedin.com/in/tyler-james-bridges-4344abab"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
