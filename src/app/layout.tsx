import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { JSX, ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import MobileNav from "./components/MobileNav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function SiteFooter() {
  return (
    <footer className="w-full py-6 mt-16 text-center text-sm text-neutral-500 border-t border-neutral-800">
      <div>
        Or email:{" "}
        <a href="mailto:tylerjamesbridges@gmail.com" className="underline">
          tylerjamesbridges@gmail.com
        </a>
      </div>
      <div className="mt-2">
        Find me on{" "}
        <a
          href="https://www.linkedin.com/in/tyler-james-bridges-4344abab"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" | "}
        <a
          href="https://github.com/tyler-james-bridges"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://x.com/tmoney_145"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>
    </footer>
  );
}

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
        <MobileNav />
        <main className="w-full max-w-5xl mx-auto px-4">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
