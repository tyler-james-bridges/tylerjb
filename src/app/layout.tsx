import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { JSX, ReactNode } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyler James-Bridges — Engineer & Educator",
  description: "Resume and project site for Tyler James-Bridges",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950`}
      >
        <nav className="w-full max-w-3xl mx-auto mt-6 mb-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center sm:sticky sm:top-4 z-30">
          <a
            href="/"
            className="max-w-xs w-full sm:w-auto mx-auto px-4 py-2 font-semibold bg-neutral-900 text-neutral-100 border border-neutral-700 hover:bg-teal-600 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70 text-center"
          >
            Home
          </a>
          <a
            href="/about"
            className="max-w-xs w-full sm:w-auto mx-auto px-4 py-2 font-semibold bg-neutral-900 text-neutral-100 border border-neutral-700 hover:bg-teal-600 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70 text-center"
          >
            About
          </a>
          <a
            href="/contact"
            className="max-w-xs w-full sm:w-auto mx-auto px-4 py-2 font-semibold bg-neutral-900 text-neutral-100 border border-neutral-700 hover:bg-teal-600 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70 text-center"
          >
            Contact
          </a>
        </nav>
        <main className="w-full max-w-3xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
