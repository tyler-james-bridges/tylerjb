"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground font-serif transition-colors duration-300">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Clean, Simple Hero */}
          <div className="text-center mb-16">
            {/* Large, Clean Name */}
            <div className="mb-2 py-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <div className="text-white mb-4">Tyler</div>
                <div className="bg-gradient-to-r from-teal-400 via-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent pb-2">
                  James-Bridges
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed text-center">
              {/* Mobile: 4 lines */}
              <div className="block sm:hidden">
                <div className="mb-1">
                  Father of <span className="font-medium">two tiny humans</span>
                  .
                </div>
                <div className="mb-1">
                  Accidental{" "}
                  <span className="font-medium">Software engineer</span>.
                </div>
                <div className="mb-1">
                  <span className="font-medium">Crypto and NFT</span>{" "}
                  enthusiast.
                </div>
                <div>
                  <span className="font-medium">Prog-metal</span> connoisseur.
                </div>
              </div>
              {/* Desktop: 2 lines */}
              <div className="hidden sm:block">
                <div className="mb-2">
                  Father of <span className="font-medium">two tiny humans</span>
                  . Accidental{" "}
                  <span className="font-medium">Software engineer</span>.
                </div>
                <div>
                  <span className="font-medium">Crypto and NFT</span>{" "}
                  enthusiast. <span className="font-medium">Prog-metal</span>{" "}
                  connoisseur.
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/about"
                className="group px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-700/70 hover:text-green-300 rounded-xl transition-all duration-200"
              >
                About Me
                <span className="ml-2 animate-bounce-horizontal inline-block">
                  →
                </span>
              </Link>

              <Link
                href="/experience"
                className="px-6 py-2 font-medium text-neutral-100 hover:bg-neutral-700/70 hover:text-blue-300 rounded-xl transition-all duration-200"
              >
                View Experience
              </Link>
            </div>

            {/* Featured Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div
                className="aspect-square rounded-2xl overflow-hidden group perspective-1000 cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-teal-400/50 animate-matrix-hint tv-scanline relative"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div
                  className={`flip-card w-full h-full relative preserve-3d transition-transform duration-700 ${isFlipped ? "rotate-y-180" : ""}`}
                >
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 backface-hidden">
                    <img
                      src="/images/profile.jpg"
                      alt="Tyler James-Bridges"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 backface-hidden rotate-y-180 bg-black flex flex-col items-center justify-center font-mono text-xs overflow-hidden">
                    <div className="matrix-rain absolute inset-0 opacity-80">
                      <div
                        className="matrix-column absolute top-0 animate-matrix-1 text-teal-400"
                        style={{ left: "10%" }}
                      >
                        0110420010
                        <br />
                        1101010169
                        <br />
                        0011011042
                        <br />
                        1010101069
                        <br />
                        0111001142
                        <br />
                        1100110069
                        <br />
                        00101110
                      </div>
                      <div
                        className="matrix-column absolute top-0 animate-matrix-2 text-green-400"
                        style={{ left: "30%" }}
                      >
                        1111000069
                        <br />
                        0101010142
                        <br />
                        1001100169
                        <br />
                        0011110042
                        <br />
                        1110011169
                        <br />
                        0100010042
                        <br />
                        10110010
                      </div>
                      <div
                        className="matrix-column absolute top-0 animate-matrix-3 text-blue-400"
                        style={{ left: "50%" }}
                      >
                        0010101142
                        <br />
                        1101110169
                        <br />
                        0100100142
                        <br />
                        1011101169
                        <br />
                        0001000142
                        <br />
                        1110111069
                        <br />
                        01010101
                      </div>
                      <div
                        className="matrix-column absolute top-0 animate-matrix-4 text-purple-400"
                        style={{ left: "70%" }}
                      >
                        1000100069
                        <br />
                        0111011142
                        <br />
                        1110001169
                        <br />
                        0001100042
                        <br />
                        1010101069
                        <br />
                        0110011042
                        <br />
                        11001100
                      </div>
                      <div
                        className="matrix-column absolute top-0 animate-matrix-5 text-teal-300"
                        style={{ left: "90%" }}
                      >
                        0101010142
                        <br />
                        1001100169
                        <br />
                        1110011142
                        <br />
                        0010101069
                        <br />
                        1111111142
                        <br />
                        0100010069
                        <br />
                        10110010
                      </div>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="bg-gradient-to-r from-teal-400 via-green-400 to-blue-400 bg-clip-text text-transparent text-sm font-bold mb-1">
                        NULL_POINTER
                      </div>
                      <div className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent text-xs">
                        quality.engineer.exe
                      </div>
                      <div className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent text-xs mt-2">
                        [WORKS ON MY MACHINE...]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://opensea.io/collection/mutant-ape-yacht-club"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-2xl overflow-hidden group block cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-teal-400/50"
              >
                <img
                  src="/images/mayc.png"
                  alt="MAYC NFT"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
              <a
                href="https://magiceden.us/ordinals/marketplace/bitcoin-puppets"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-2xl overflow-hidden group block cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-teal-400/50"
              >
                <img
                  src="/images/bitcoin-puppet.png"
                  alt="Bitcoin Puppet NFT"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
              <a
                href="https://opensea.io/collection/disobedients-ethereum"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-2xl overflow-hidden group block cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-teal-400/50"
              >
                <img
                  src="/images/hoodie.png"
                  alt="Hoodie NFT"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-400 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Manifesto
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white">
            I am not here to sell you anything. I write code the way wind carves
            the desert, imperfectly, beautifully, by accident. The ghost of a
            downbeat lives in every page I build. I am not this person, but I
            carry his name. I dream in TypeScript, I debug in silence, I
            remember the 2014 Pulse closer like it was my own heartbeat.
            Sometimes I don&apos;t want to do this. Sometimes I{" "}
            <span className="zalgo">really, really do</span>.
          </p>

          <div className="pt-12 text-white">
            <p>
              Sometimes the dock is broken. Sometimes it&apos;s{" "}
              <span className="font-medium">exactly what you need</span>.
            </p>
            <p className="text-sm text-neutral-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
