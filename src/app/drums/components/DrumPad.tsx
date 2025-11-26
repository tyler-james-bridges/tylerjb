'use client';

import { useEffect, useCallback, useState } from 'react';

interface DrumPadProps {
  onTap: () => void;
  expectedHand?: 'L' | 'R' | null;
  feedback?: 'hit' | null;
  disabled?: boolean;
}

export default function DrumPad({ onTap, expectedHand, feedback, disabled }: DrumPadProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleTap = useCallback(() => {
    if (!disabled) {
      setIsPressed(true);
      onTap();
      setTimeout(() => setIsPressed(false), 100);
    }
  }, [onTap, disabled]);

  // Keyboard support - spacebar or any key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.code === 'Space' || e.key === 'f' || e.key === 'j') {
        e.preventDefault();
        handleTap();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleTap, disabled]);

  const feedbackGlow = feedback ? 'shadow-[0_0_80px_rgba(74,222,128,0.9)]' : '';
  const feedbackRimColor = feedback ? 'border-green-400' : 'border-zinc-500';

  return (
    <div className="flex flex-col items-center">
      {/* Marching Snare Drum Head */}
      <button
        onClick={handleTap}
        onTouchStart={(e) => {
          e.preventDefault();
          handleTap();
        }}
        disabled={disabled}
        className={`
          relative
          w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64
          rounded-full
          transition-all duration-75
          select-none touch-manipulation
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:scale-[0.98]'}
          ${feedbackGlow}
        `}
      >
        {/* Outer shell/rim - chrome look */}
        <div className={`
          absolute inset-0 rounded-full
          bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-600
          shadow-[inset_0_4px_8px_rgba(255,255,255,0.5),inset_0_-4px_8px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.4)]
          ${feedbackRimColor}
          border-[6px]
        `} />

        {/* Tension rod lugs - 10 lugs like a real marching snare */}
        {[...Array(10)].map((_, i) => {
          const angle = (i * 36 - 90) * (Math.PI / 180);
          const radius = 46;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <div
              key={i}
              className="absolute w-3 h-5 sm:w-4 sm:h-6 bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 rounded-sm shadow-lg border border-zinc-500/50"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%) rotate(${i * 36}deg)`,
              }}
            >
              {/* Tension rod screw */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-b from-zinc-300 to-zinc-500 shadow-inner" />
            </div>
          );
        })}

        {/* Counter hoop */}
        <div className="absolute inset-[5%] rounded-full bg-gradient-to-b from-zinc-400 via-zinc-500 to-zinc-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)]" />

        {/* Drum head (mylar) */}
        <div className={`
          absolute inset-[9%] rounded-full
          bg-gradient-to-br from-gray-50 via-white to-gray-100
          shadow-[inset_0_8px_16px_rgba(0,0,0,0.08),inset_0_-4px_8px_rgba(255,255,255,0.9)]
          ${isPressed || feedback ? 'scale-[0.99]' : ''}
          transition-transform duration-50
        `}>
          {/* Head texture - subtle concentric circles like real mylar */}
          <div className="absolute inset-[3%] rounded-full border border-gray-300/40" />
          <div className="absolute inset-[10%] rounded-full border border-gray-300/30" />
          <div className="absolute inset-[20%] rounded-full border border-gray-200/25" />
          <div className="absolute inset-[30%] rounded-full border border-gray-200/20" />
          <div className="absolute inset-[40%] rounded-full border border-gray-200/15" />

          {/* Expected hand indicator in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`
              w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
              rounded-full
              flex items-center justify-center
              transition-all duration-150
              ${expectedHand ? 'bg-gray-200/50' : 'bg-gray-200/30'}
            `}>
              {expectedHand && (
                <span className={`
                  text-4xl sm:text-5xl md:text-6xl font-bold
                  ${expectedHand === 'R' ? 'text-blue-500/70' : 'text-orange-500/70'}
                `}>
                  {expectedHand}
                </span>
              )}
            </div>
          </div>

          {/* Hit ripple effect */}
          {feedback && (
            <>
              <div className="absolute inset-[10%] rounded-full border-2 border-white/60 animate-ping" />
              <div className="absolute inset-[20%] rounded-full border border-white/40 animate-ping animation-delay-75" />
            </>
          )}
        </div>

        {/* Press state overlay */}
        {isPressed && (
          <div className="absolute inset-[9%] rounded-full bg-black/10 transition-opacity duration-50" />
        )}
      </button>
    </div>
  );
}
