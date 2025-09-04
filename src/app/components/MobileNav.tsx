"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const showServices = process.env.NEXT_PUBLIC_FEATURE_SERVICES === 'true';

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile header bar - matches OpenSea style */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-700">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Hamburger menu button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0.5" : ""}`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </div>
          </button>

          {/* Logo/Title */}
          <div className="flex-1 text-center">
            <Link href="/" className="text-lg font-bold text-neutral-100">
              Tyler James-Bridges
            </Link>
          </div>

          {/* Right side - empty div for spacing */}
          <div className="w-12"></div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Slide-out menu */}
      <nav
        className={`
        md:hidden fixed top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-neutral-900/95 backdrop-blur-sm border-r border-neutral-700 z-40 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col p-6 gap-3">
          {/* Profile/User section */}
          <div className="pb-4 mb-4 border-b border-neutral-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TJB</span>
              </div>
              <div>
                <div className="text-neutral-100 font-medium">
                  Tyler James-Bridges
                </div>
                <div className="text-neutral-400 text-sm">
                  Engineer & Educator
                </div>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <Link
            href="/"
            onClick={closeMenu}
            className="mobile-nav-link flex items-center gap-3 px-4 py-3 text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </Link>
          <a
            href="/about"
            onClick={closeMenu}
            className="mobile-nav-link flex items-center gap-3 px-4 py-3 text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            About
          </a>
          <a
            href="/experience"
            onClick={closeMenu}
            className="mobile-nav-link flex items-center gap-3 px-4 py-3 text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path d="M20 6H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z"/>
              <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
            </svg>
            Experience
          </a>
          {showServices && (
            <a
              href="/services"
              onClick={closeMenu}
              className="mobile-nav-link flex items-center gap-3 px-4 py-3 text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              Services
            </a>
          )}
          <a
            href="/contact"
            onClick={closeMenu}
            className="mobile-nav-link flex items-center gap-3 px-4 py-3 text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 7.89a2 2 0 002.82 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact
          </a>

          {/* Additional sections like OpenSea */}
          <div className="mt-6 pt-4 border-t border-neutral-700">
            <div className="text-neutral-400 text-xs font-medium uppercase tracking-wider mb-3 px-4">
              Social
            </div>
            <a
              href="https://github.com/tyler-james-bridges"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tyler-james-bridges-4344abab"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://x.com/tmoney_145"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X
            </a>
          </div>
        </div>
      </nav>

      {/* Desktop navigation - hidden on mobile */}
      <nav className="hidden md:flex w-full max-w-2xl mx-auto mt-6 mb-8 justify-center sticky top-4 z-30">
        <div className="flex gap-1 p-1 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl">
          <Link
            href="/"
            className="nav-item px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-700/70 hover:text-teal-300 rounded-xl transition-all duration-200"
          >
            Home
          </Link>
          <a
            href="/about"
            className="nav-item px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-700/70 hover:text-green-300 rounded-xl transition-all duration-200"
          >
            About
          </a>
          <a
            href="/experience"
            className="nav-item px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-700/70 hover:text-teal-300 rounded-xl transition-all duration-200"
          >
            Experience
          </a>
          {showServices && (
            <a
              href="/services"
              className="nav-item px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-700/70 hover:text-emerald-300 rounded-xl transition-all duration-200"
            >
              Services
            </a>
          )}
          <a
            href="/contact"
            className="nav-item px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-700/70 hover:text-orange-300 rounded-xl transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
