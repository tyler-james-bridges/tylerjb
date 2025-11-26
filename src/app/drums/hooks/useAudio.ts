'use client';

import { useRef, useCallback, useEffect } from 'react';

interface AudioSamples {
  tap: AudioBuffer | null;
  accent: AudioBuffer | null;
  flam: AudioBuffer | null;
  drag: AudioBuffer | null;
  buzz: AudioBuffer | null;
}

/**
 * Custom hook for managing drum audio
 * Uses Web Audio API for low-latency playback
 * Tuned for marching snare drum sound characteristics
 */
export function useAudio() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const samplesRef = useRef<AudioSamples>({
    tap: null,
    accent: null,
    flam: null,
    drag: null,
    buzz: null,
  });

  // Initialize AudioContext on first user interaction
  const initAudio = useCallback(async () => {
    if (audioContextRef.current) return;

    audioContextRef.current = new AudioContext();

    // Generate synthetic marching snare sounds
    samplesRef.current = {
      tap: createMarchingSnareTap(audioContextRef.current),
      accent: createMarchingSnareAccent(audioContextRef.current),
      flam: createMarchingSnareFlam(audioContextRef.current),
      drag: createMarchingSnareDrag(audioContextRef.current),
      buzz: createMarchingSnareBuzz(audioContextRef.current),
    };
  }, []);

  // Play a sound with high-pass filter for that crisp marching snare cut
  const playSound = useCallback((type: 'tap' | 'accent' | 'flam' | 'drag' | 'buzz', hand: 'L' | 'R') => {
    if (!audioContextRef.current) return;

    const buffer = samplesRef.current[type];
    if (!buffer) return;

    const ctx = audioContextRef.current;
    const source = ctx.createBufferSource();
    const gainNode = ctx.createGain();
    const panNode = ctx.createStereoPanner();
    const highPass = ctx.createBiquadFilter();
    const lowShelf = ctx.createBiquadFilter();

    source.buffer = buffer;

    // High-pass filter to cut mud (marching snares are bright)
    highPass.type = 'highpass';
    highPass.frequency.value = 150;
    highPass.Q.value = 0.7;

    // Low shelf boost for body/crack
    lowShelf.type = 'lowshelf';
    lowShelf.frequency.value = 200;
    lowShelf.gain.value = 3;

    // Pan left or right based on hand
    panNode.pan.value = hand === 'L' ? -0.2 : 0.2;

    // Slight volume variation for realism
    gainNode.gain.value = 0.8 + Math.random() * 0.2;

    source.connect(highPass);
    highPass.connect(lowShelf);
    lowShelf.connect(gainNode);
    gainNode.connect(panNode);
    panNode.connect(ctx.destination);

    source.start();
  }, []);

  // Play hit sound based on note type
  const playHit = useCallback((noteType: string, isAccent: boolean) => {
    const hand = noteType.includes('R') ? 'R' : 'L';

    if (noteType.startsWith('F')) {
      playSound('flam', hand);
    } else if (noteType.startsWith('D')) {
      playSound('drag', hand);
    } else if (noteType === 'B') {
      playSound('buzz', hand);
    } else if (isAccent) {
      playSound('accent', hand);
    } else {
      playSound('tap', hand);
    }
  }, [playSound]);

  // Cleanup
  useEffect(() => {
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  return { initAudio, playSound, playHit };
}

/**
 * Marching snare characteristics:
 * - Very high fundamental pitch (350-450 Hz) due to extreme tension kevlar heads
 * - Very short, punchy attack
 * - Prominent snare wire buzz (bright, cutting)
 * - Quick decay
 * - "Crack" transient at the start
 */

/** Create a marching snare tap sound */
function createMarchingSnareTap(ctx: AudioContext): AudioBuffer {
  const sampleRate = ctx.sampleRate;
  const duration = 0.1;
  const buffer = ctx.createBuffer(2, sampleRate * duration, sampleRate);

  for (let channel = 0; channel < 2; channel++) {
    const data = buffer.getChannelData(channel);
    for (let i = 0; i < data.length; i++) {
      const t = i / sampleRate;

      // Sharp attack transient (the "crack")
      const attack = Math.exp(-t * 300) * 0.9;

      // High-pitched drum head tone (marching snares are tuned VERY high)
      const headTone = Math.sin(2 * Math.PI * 400 * t) * Math.exp(-t * 70);
      const headOvertone = Math.sin(2 * Math.PI * 800 * t) * Math.exp(-t * 90) * 0.35;
      const headOvertone2 = Math.sin(2 * Math.PI * 1200 * t) * Math.exp(-t * 110) * 0.2;

      // Snare wire buzz (filtered noise, brighter for marching)
      const wireNoise = (Math.random() * 2 - 1) * Math.exp(-t * 55);
      // Add some high frequency sizzle
      const wireSizzle = (Math.random() * 2 - 1) * Math.exp(-t * 70) * 0.5;

      // Shell resonance (higher)
      const shell = Math.sin(2 * Math.PI * 280 * t) * Math.exp(-t * 60) * 0.15;

      data[i] = (
        attack * 0.35 +
        headTone * 0.25 +
        headOvertone * 0.15 +
        headOvertone2 * 0.1 +
        wireNoise * 0.45 +
        wireSizzle * 0.35 +
        shell * 0.1
      ) * 0.7;
    }
  }

  return buffer;
}

/** Create a marching snare accent (louder, more crack) */
function createMarchingSnareAccent(ctx: AudioContext): AudioBuffer {
  const sampleRate = ctx.sampleRate;
  const duration = 0.14;
  const buffer = ctx.createBuffer(2, sampleRate * duration, sampleRate);

  for (let channel = 0; channel < 2; channel++) {
    const data = buffer.getChannelData(channel);
    for (let i = 0; i < data.length; i++) {
      const t = i / sampleRate;

      // Stronger attack transient
      const attack = Math.exp(-t * 250) * 1.0;

      // Head tone - higher pitch for marching
      const headTone = Math.sin(2 * Math.PI * 420 * t) * Math.exp(-t * 55);
      const headOvertone = Math.sin(2 * Math.PI * 840 * t) * Math.exp(-t * 70) * 0.4;
      const headOvertone2 = Math.sin(2 * Math.PI * 1260 * t) * Math.exp(-t * 90) * 0.25;

      // More prominent snare wire response
      const wireNoise = (Math.random() * 2 - 1) * Math.exp(-t * 45);
      const wireSizzle = (Math.random() * 2 - 1) * Math.exp(-t * 60) * 0.55;

      // Rim click component (accents often catch the rim)
      const rimClick = Math.sin(2 * Math.PI * 1500 * t) * Math.exp(-t * 300) * 0.35;

      data[i] = (
        attack * 0.4 +
        headTone * 0.28 +
        headOvertone * 0.18 +
        headOvertone2 * 0.12 +
        wireNoise * 0.45 +
        wireSizzle * 0.4 +
        rimClick * 0.25
      ) * 0.85;
    }
  }

  return buffer;
}

/** Create a marching snare flam */
function createMarchingSnareFlam(ctx: AudioContext): AudioBuffer {
  const sampleRate = ctx.sampleRate;
  const duration = 0.15;
  const buffer = ctx.createBuffer(2, sampleRate * duration, sampleRate);

  for (let channel = 0; channel < 2; channel++) {
    const data = buffer.getChannelData(channel);
    const graceDelay = 0.022; // Tight flam spacing for marching

    for (let i = 0; i < data.length; i++) {
      const t = i / sampleRate;

      // Grace note (softer, slightly muffled)
      const graceAttack = Math.exp(-t * 350) * 0.45;
      const graceTone = Math.sin(2 * Math.PI * 380 * t) * Math.exp(-t * 100) * 0.3;
      const graceNoise = (Math.random() * 2 - 1) * Math.exp(-t * 80) * 0.35;

      // Main note (after grace delay)
      const mainT = Math.max(0, t - graceDelay);
      const mainAttack = Math.exp(-mainT * 280) * 0.95;
      const mainTone = Math.sin(2 * Math.PI * 410 * mainT) * Math.exp(-mainT * 65);
      const mainOvertone = Math.sin(2 * Math.PI * 820 * mainT) * Math.exp(-mainT * 85) * 0.4;
      const mainNoise = (Math.random() * 2 - 1) * Math.exp(-mainT * 50) * 0.5;
      const mainSizzle = (Math.random() * 2 - 1) * Math.exp(-mainT * 65) * 0.45;

      data[i] = (
        graceAttack * 0.22 +
        graceTone * 0.15 +
        graceNoise * 0.25 +
        mainAttack * 0.35 +
        mainTone * 0.25 +
        mainOvertone * 0.15 +
        mainNoise * 0.42 +
        mainSizzle * 0.35
      ) * 0.75;
    }
  }

  return buffer;
}

/** Create a marching snare drag (ruff) */
function createMarchingSnareDrag(ctx: AudioContext): AudioBuffer {
  const sampleRate = ctx.sampleRate;
  const duration = 0.16;
  const buffer = ctx.createBuffer(2, sampleRate * duration, sampleRate);

  for (let channel = 0; channel < 2; channel++) {
    const data = buffer.getChannelData(channel);

    for (let i = 0; i < data.length; i++) {
      const t = i / sampleRate;

      // Two grace notes (diddles before main)
      const grace1Attack = Math.exp(-t * 400) * 0.35;
      const grace1Noise = (Math.random() * 2 - 1) * Math.exp(-t * 100) * 0.28;

      const grace2T = Math.max(0, t - 0.015);
      const grace2Attack = Math.exp(-grace2T * 380) * 0.38;
      const grace2Noise = (Math.random() * 2 - 1) * Math.exp(-grace2T * 95) * 0.3;

      // Main note
      const mainT = Math.max(0, t - 0.032);
      const mainAttack = Math.exp(-mainT * 260) * 0.9;
      const mainTone = Math.sin(2 * Math.PI * 400 * mainT) * Math.exp(-mainT * 60);
      const mainOvertone = Math.sin(2 * Math.PI * 800 * mainT) * Math.exp(-mainT * 80) * 0.35;
      const mainNoise = (Math.random() * 2 - 1) * Math.exp(-mainT * 48) * 0.48;
      const mainSizzle = (Math.random() * 2 - 1) * Math.exp(-mainT * 60) * 0.4;

      data[i] = (
        grace1Attack * 0.18 +
        grace1Noise * 0.22 +
        grace2Attack * 0.2 +
        grace2Noise * 0.24 +
        mainAttack * 0.32 +
        mainTone * 0.24 +
        mainOvertone * 0.14 +
        mainNoise * 0.4 +
        mainSizzle * 0.32
      ) * 0.75;
    }
  }

  return buffer;
}

/** Create a marching snare buzz roll */
function createMarchingSnareBuzz(ctx: AudioContext): AudioBuffer {
  const sampleRate = ctx.sampleRate;
  const duration = 0.2;
  const buffer = ctx.createBuffer(2, sampleRate * duration, sampleRate);

  for (let channel = 0; channel < 2; channel++) {
    const data = buffer.getChannelData(channel);

    for (let i = 0; i < data.length; i++) {
      const t = i / sampleRate;

      // Sustained multiple bounce buzz
      const buzzRate = 40; // Bounces per second
      const buzzEnvelope = Math.sin(2 * Math.PI * buzzRate * t) * 0.25 + 0.75;

      // Head tone (sustained) - higher pitch
      const headTone = Math.sin(2 * Math.PI * 390 * t) * Math.exp(-t * 15) * buzzEnvelope;

      // Dense snare wire noise
      const wireNoise = (Math.random() * 2 - 1) * Math.exp(-t * 12) * buzzEnvelope;
      const wireSizzle = (Math.random() * 2 - 1) * Math.exp(-t * 18) * 0.55 * buzzEnvelope;

      // Attack transient
      const attack = Math.exp(-t * 200) * 0.6;

      data[i] = (
        attack * 0.3 +
        headTone * 0.25 +
        wireNoise * 0.5 +
        wireSizzle * 0.45
      ) * 0.65;
    }
  }

  return buffer;
}
