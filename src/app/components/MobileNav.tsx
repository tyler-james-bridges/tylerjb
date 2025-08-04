"use client";

import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile hamburger button - only show on mobile */}
      <button
        onClick={toggleMenu}
        className={`md:hidden fixed top-4 z-50 p-2 bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-xl hover:bg-teal-600 transition-all duration-300 ${
          isOpen ? "left-72" : "left-4"
        }`}
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
        md:hidden fixed top-0 left-0 h-full w-64 bg-neutral-900 border-r border-neutral-700 z-40 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col p-6 pt-16 gap-4">
          <a
            href="/"
            onClick={closeMenu}
            className="px-4 py-3 font-semibold bg-neutral-800 text-neutral-100 border border-neutral-600 rounded-xl hover:bg-teal-600 hover:text-white transition-colors duration-200 text-center"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={closeMenu}
            className="px-4 py-3 font-semibold bg-neutral-800 text-neutral-100 border border-neutral-600 rounded-xl hover:bg-teal-600 hover:text-white transition-colors duration-200 text-center"
          >
            About
          </a>
          <a
            href="/contact"
            onClick={closeMenu}
            className="px-4 py-3 font-semibold bg-neutral-800 text-neutral-100 border border-neutral-600 rounded-xl hover:bg-teal-600 hover:text-white transition-colors duration-200 text-center"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Desktop navigation - hidden on mobile */}
      <nav className="hidden md:flex w-full max-w-2xl mx-auto mt-6 mb-8 justify-center sticky top-4 z-30">
        <div className="flex gap-1 p-1 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl">
          <a
            href="/"
            className="px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-700/70 rounded-xl transition-all duration-200 hover:scale-105"
          >
            Home
          </a>
          <a
            href="/about"
            className="px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-700/70 rounded-xl transition-all duration-200 hover:scale-105"
          >
            About
          </a>
          <a
            href="/contact"
            className="px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-700/70 rounded-xl transition-all duration-200 hover:scale-105"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
