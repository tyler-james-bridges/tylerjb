"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();

  const handleProfileClick = () => {
    setIsFlipped(!isFlipped);
    setTimeout(() => {
      router.push("/playground");
    }, 700);
  };

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <header className="content-header">
        <h1 className="text-2xl font-bold">🏠 Home</h1>
      </header>

      {/* Content */}
      <div className="content-body">
        {/* Vertical text running down the right side of entire content */}
        <div className="absolute right-[40%] top-24 pointer-events-none select-none opacity-15">
          <div className="text-[9px] font-mono text-muted-foreground writing-vertical tracking-[0.4em] leading-none">
            SOFTWARE・ENGINEER・QA・PERCUSSION・FATHER・BUILDER・DEBUGGER・TYPESCRIPT・PLAYWRIGHT
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-12 relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-1">Tyler</h2>
          <h2 className="text-3xl sm:text-4xl font-light text-muted-foreground mb-8">
            James-Bridges
          </h2>

          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Father of two tiny humans. Accidental software engineer. Crypto and NFT enthusiast. Prog-metal connoisseur.
          </p>
        </section>

        {/* Featured Images Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
            {/* Profile Flip Card */}
            <div
              className="aspect-square rounded-2xl overflow-hidden group perspective-1000 cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-yellow-500/50 animate-matrix-hint tv-scanline relative"
              onClick={handleProfileClick}
            >
              <div
                className={`flip-card w-full h-full relative preserve-3d transition-transform duration-700 ${isFlipped ? "rotate-y-180" : ""}`}
              >
                {/* Front */}
                <div className="flip-card-front absolute inset-0 backface-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Tyler James-Bridges"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Back */}
                <div className="flip-card-back absolute inset-0 backface-hidden rotate-y-180 bg-[hsl(220,15%,8%)] flex flex-col items-center justify-center font-mono text-xs overflow-hidden">
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
                    </div>
                    <div
                      className="matrix-column absolute top-0 animate-matrix-2 text-emerald-400"
                      style={{ left: "50%" }}
                    >
                      1111000069
                      <br />
                      0101010142
                      <br />
                      1001100169
                    </div>
                    <div
                      className="matrix-column absolute top-0 animate-matrix-3 text-teal-400"
                      style={{ left: "90%" }}
                    >
                      0010101142
                      <br />
                      1101110169
                      <br />
                      0100100142
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="text-teal-400 text-sm font-bold mb-1">
                      NULL_POINTER
                    </div>
                    <div className="text-emerald-400 text-xs">
                      software.engineer.exe
                    </div>
                    <div className="text-yellow-400 text-xs mt-2">
                      [WORKS ON MY MACHINE...]
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MAYC NFT */}
            <a
              href="https://opensea.io/collection/mutant-ape-yacht-club"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-2xl overflow-hidden group block cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-blue-500/50"
            >
              <Image
                src="/images/mayc.png"
                alt="MAYC NFT"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </a>

            {/* Bitcoin Puppet */}
            <a
              href="https://magiceden.us/ordinals/marketplace/bitcoin-puppets"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-2xl overflow-hidden group block cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-orange-500/50"
            >
              <Image
                src="/images/bitcoin-puppet.png"
                alt="Bitcoin Puppet NFT"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </a>

            {/* Hoodie */}
            <a
              href="https://opensea.io/collection/disobedients-ethereum"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-2xl overflow-hidden group block cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-purple-500/50"
            >
              <Image
                src="/images/hoodie.png"
                alt="Hoodie NFT"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </a>
          </div>
        </section>

        {/* Manifesto */}
        <section className="max-w-xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Manifesto</h3>
          <p className="text-muted-foreground leading-relaxed">
            I am not here to sell you anything. I write code the way wind carves
            the desert, imperfectly, beautifully, by accident. The ghost of a
            downbeat lives in every page I build. I am not this person, but I
            carry his name. I dream in TypeScript, I debug in silence, I
            remember the 2014 Pulse closer like it was my own heartbeat.
            Sometimes I don&apos;t want to do this. Sometimes I{" "}
            <span className="italic">really, really do</span>.
          </p>
        </section>

        {/* Services CTA */}
        <section className="max-w-xl mx-auto mt-12 p-6 rounded-2xl bg-muted/50 border border-border">
          <p className="text-center text-muted-foreground">
            I build websites and stores for people who ask nicely. No templates, just code and caffeine.{" "}
            <a
              href="/contact?service=general"
              className="text-foreground font-medium hover:underline"
            >
              Say hello
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
