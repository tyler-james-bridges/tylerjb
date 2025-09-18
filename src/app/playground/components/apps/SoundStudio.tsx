'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface QASound {
  id: string;
  name: string;
  description: string;
  url: string;
  emoji: string;
}

const qaSounds: QASound[] = [
  {
    id: 'bug-found',
    name: 'Bug Found!',
    description: 'When you spot that sneaky bug',
    url: '',
    emoji: '🐛'
  },
  {
    id: 'test-pass',
    name: 'All Tests Pass',
    description: 'Green build, ship it!',
    url: '',
    emoji: '✅'
  },
  {
    id: 'test-fail',
    name: 'Tests Failed',
    description: 'Back to the drawing board',
    url: '',
    emoji: '❌'
  },
  {
    id: 'coffee-break',
    name: 'Coffee Break',
    description: 'Time to refuel the QA engine',
    url: '',
    emoji: '☕'
  },
  {
    id: 'prod-down',
    name: 'Prod is Down!',
    description: 'All hands on deck',
    url: '',
    emoji: '🚨'
  },
  {
    id: 'deploy',
    name: 'Deploy Success',
    description: 'Another successful release',
    url: '',
    emoji: '🚀'
  },
  {
    id: 'meeting-time',
    name: 'Meeting Time',
    description: 'Daily standup incoming',
    url: '',
    emoji: '📅'
  },
  {
    id: 'code-review',
    name: 'Code Review',
    description: 'Time to nitpick some code',
    url: '',
    emoji: '👀'
  },
  {
    id: 'works-on-my-machine',
    name: 'Works on My Machine',
    description: 'The classic clown response 🎪',
    url: '',
    emoji: '🤡'
  }
];

interface SoundStudioProps {
  embedded?: boolean;
}

export default function SoundStudio({ embedded = false }: SoundStudioProps) {
  const [activePad, setActivePad] = useState<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef<Set<string>>(new Set());

  // Initialize AudioContext once
  const getAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    return audioContextRef.current;
  };

  // Simple Web Audio API beep function with proper cleanup
  const playBeep = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine') => {
    try {
      const audioContext = getAudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = type;
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
      
      // Clean up oscillator after it finishes
      oscillator.addEventListener('ended', () => {
        oscillator.disconnect();
        gainNode.disconnect();
      });
    } catch {
      console.log('Audio playback failed');
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playSound = useCallback(async (sound: QASound) => {
    // Prevent rapid-fire clicks on the same sound
    if (isPlayingRef.current.has(sound.id)) {
      return;
    }
    
    isPlayingRef.current.add(sound.id);
    
    try {
      switch (sound.id) {
        case 'bug-found':
          // Urgent bug alert - rapid beeping
          playBeep(800, 0.1, 'square');
          setTimeout(() => playBeep(800, 0.1, 'square'), 150);
          setTimeout(() => playBeep(600, 0.3, 'square'), 300);
          break;
        case 'test-pass':
          // Success chime - ascending notes
          playBeep(523, 0.2); // C5
          setTimeout(() => playBeep(659, 0.2), 200); // E5
          setTimeout(() => playBeep(784, 0.4), 400); // G5
          break;
        case 'test-fail':
          // Error buzz - low dissonant tone
          playBeep(200, 0.5, 'sawtooth');
          break;
        case 'coffee-break':
          // Happy coffee break - cheerful melody
          playBeep(440, 0.15); // A4
          setTimeout(() => playBeep(554, 0.15), 150); // C#5
          setTimeout(() => playBeep(659, 0.3), 300); // E5
          break;
        case 'prod-down':
          // Emergency alarm - urgent repeating
          for (let i = 0; i < 5; i++) {
            setTimeout(() => playBeep(1000, 0.1, 'square'), i * 120);
          }
          break;
        case 'deploy':
          // Success fanfare - triumphant
          playBeep(523, 0.2); // C5
          setTimeout(() => playBeep(659, 0.2), 150); // E5
          setTimeout(() => playBeep(784, 0.2), 300); // G5
          setTimeout(() => playBeep(1047, 0.4), 450); // C6
          break;
        case 'meeting-time':
          // Meeting notification - gentle reminder
          playBeep(880, 0.3); // A5
          setTimeout(() => playBeep(880, 0.2), 400);
          break;
        case 'code-review':
          // Code review - thoughtful tone
          playBeep(349, 0.2); // F4
          setTimeout(() => playBeep(440, 0.2), 200); // A4
          setTimeout(() => playBeep(523, 0.3), 400); // C5
          break;
        case 'works-on-my-machine':
          // Classic circus intro melody
          const noteInterval = 60000 / 145 / 8;
          playBeep(392, 0.15, 'square'); // G4
          setTimeout(() => playBeep(523, 0.15, 'square'), noteInterval); // C5
          setTimeout(() => playBeep(659, 0.15, 'square'), noteInterval * 2); // E5
          setTimeout(() => playBeep(784, 0.15, 'square'), noteInterval * 3); // G5
          setTimeout(() => playBeep(659, 0.15, 'square'), noteInterval * 4); // E5
          setTimeout(() => playBeep(523, 0.15, 'square'), noteInterval * 5); // C5
          setTimeout(() => playBeep(392, 0.15, 'square'), noteInterval * 6); // G4
          setTimeout(() => playBeep(523, 0.3, 'square'), noteInterval * 7); // C5
          break;
        default:
          playBeep(440, 0.3);
      }
    } catch {
      console.log('Audio not supported or blocked');
    } finally {
      // Clear the playing flag after a short delay
      setTimeout(() => {
        isPlayingRef.current.delete(sound.id);
      }, 100);
    }
    
    // Visual notification positioned above the clicked button
    const button = document.getElementById(`sound-${sound.id}`);
    if (button) {
      const rect = button.getBoundingClientRect();
      const notification = document.createElement('div');
      notification.textContent = `${sound.emoji} ${sound.name}`;
      notification.className = 'fixed bg-teal-500 text-white px-3 py-1 rounded-lg shadow-lg z-50 animate-bounce text-sm font-medium';
      notification.style.left = `${rect.left + rect.width / 2}px`;
      notification.style.top = `${rect.top - 40}px`;
      notification.style.transform = 'translateX(-50%)';
      document.body.appendChild(notification);
      setTimeout(() => document.body.removeChild(notification), 2000);
    }
  }, [playBeep]);

  // Keyboard support for number keys
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = parseInt(e.key);
      if (key >= 1 && key <= 9 && qaSounds[key - 1]) {
        playSound(qaSounds[key - 1]);
        setActivePad(key - 1);
        setTimeout(() => setActivePad(null), 200);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [playSound]);

  if (embedded) {
    // Embedded dock mode - part of unified dock
    return (
      <>
        {qaSounds.map((sound, index) => {
          // Softer, more modern gradients
          const gradients = [
            'from-rose-500/80 to-pink-600/80',
            'from-orange-500/80 to-amber-600/80',
            'from-yellow-500/80 to-lime-600/80',
            'from-emerald-500/80 to-teal-600/80',
            'from-cyan-500/80 to-blue-600/80',
            'from-blue-500/80 to-indigo-600/80',
            'from-indigo-500/80 to-purple-600/80',
            'from-purple-500/80 to-pink-600/80',
            'from-teal-500/80 to-emerald-600/80'
          ];
          
          const isActive = activePad === index;
          
          return (
            <button
              key={sound.id}
              id={`sound-${sound.id}`}
              onClick={() => {
                playSound(sound);
                setActivePad(index);
                setTimeout(() => setActivePad(null), 200);
              }}
              style={{ touchAction: 'manipulation' }}
              className={`
                relative w-10 h-10 md:w-14 md:h-14 rounded-lg
                bg-gradient-to-br ${gradients[index % gradients.length]}
                transform transition-all duration-200 ease-out
                ${isActive ? 'scale-95 brightness-125' : 'hover:scale-110 hover:brightness-110'}
                shadow-lg hover:shadow-xl
                flex items-center justify-center
                cursor-pointer
                backdrop-blur-sm
                border border-white/20
                flex-shrink-0
              `}
            >
              {/* Gloss effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-transparent via-white/5 to-white/15 opacity-80" />
              
              {/* Number hint - always visible but subtle */}
              <div className="absolute top-0.5 right-0.5 md:top-1 md:right-1 text-xs font-medium text-white/50">
                {index + 1}
              </div>
              
              {/* Content */}
              <div className="text-sm md:text-xl filter drop-shadow-sm">{sound.emoji}</div>
              
              {/* Active pulse effect */}
              {isActive && (
                <div className="absolute inset-0 rounded-lg bg-white/20 animate-pulse" />
              )}
            </button>
          );
        })}
      </>
    );
  }

  // Regular windowed mode
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">QA Sound Studio</h3>
        <p className="text-gray-400 text-sm">Press number keys 1-9 or tap the pads</p>
      </div>
      
      <div className="grid grid-cols-3 gap-3 p-6 bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-2xl">
        {qaSounds.map((sound, index) => {
          // Softer, more modern gradients
          const gradients = [
            'from-rose-500 to-pink-600',
            'from-orange-500 to-amber-600',
            'from-yellow-500 to-lime-600',
            'from-emerald-500 to-teal-600',
            'from-cyan-500 to-blue-600',
            'from-blue-500 to-indigo-600',
            'from-indigo-500 to-purple-600',
            'from-purple-500 to-pink-600',
            'from-teal-500 to-emerald-600'
          ];
          
          const isActive = activePad === index;
          
          return (
            <button
              key={sound.id}
              id={`sound-${sound.id}`}
              onClick={() => {
                playSound(sound);
                setActivePad(index);
                setTimeout(() => setActivePad(null), 200);
              }}
              className={`
                relative w-24 h-24 rounded-lg
                bg-gradient-to-br ${gradients[index % gradients.length]}
                transform transition-all duration-150
                ${isActive ? 'scale-95 brightness-125' : 'hover:scale-105 hover:brightness-110'}
                shadow-xl hover:shadow-2xl
                flex flex-col items-center justify-center
                group cursor-pointer
              `}
            >
              {/* Gloss effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-60" />
              
              {/* Number hint - shows on hover */}
              <div className="absolute top-1 right-1 text-xs font-bold text-white/70 group-hover:text-white/90 transition-colors">
                {index + 1}
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-3xl mb-1 filter drop-shadow-lg">{sound.emoji}</div>
                <div className="font-bold text-xs text-white/90 px-2 text-center leading-tight drop-shadow-md">
                  {sound.name}
                </div>
              </div>
              
              {/* Active pulse effect */}
              {isActive && (
                <div className="absolute inset-0 rounded-lg bg-white/30 animate-ping" />
              )}
            </button>
          );
        })}
      </div>
      
      {/* Keyboard hint */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        <span className="inline-block px-3 py-1 bg-gray-800/50 rounded-lg">
          💡 Tip: Use keyboard keys 1-9 for quick access
        </span>
      </div>
    </div>
  );
}