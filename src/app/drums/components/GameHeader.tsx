'use client';

import { GameState } from '../types';

interface GameHeaderProps {
  gameState: GameState;
  onPause?: () => void;
  onEnd?: () => void;
}

export default function GameHeader({ gameState, onPause, onEnd }: GameHeaderProps) {
  const { score, combo, hits, misses, bpm, difficulty } = gameState;
  const accuracy = hits + misses > 0 ? Math.round((hits / (hits + misses)) * 100) : 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-muted/50 rounded-xl p-3 border border-border">
        {/* Top row - Stats */}
        <div className="grid grid-cols-4 gap-2 text-center">
          {/* Score */}
          <div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Score</div>
            <div className="text-lg sm:text-xl font-bold text-foreground font-mono">
              {Math.round(score).toLocaleString()}
            </div>
          </div>

          {/* Combo */}
          <div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Combo</div>
            <div className={`text-lg sm:text-xl font-bold font-mono ${
              combo >= 50 ? 'text-yellow-600 dark:text-yellow-400' :
              combo >= 20 ? 'text-green-600 dark:text-green-400' :
              combo >= 10 ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'
            }`}>
              {combo}x
            </div>
          </div>

          {/* Accuracy */}
          <div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Accuracy</div>
            <div className={`text-lg sm:text-xl font-bold font-mono ${
              accuracy >= 95 ? 'text-green-600 dark:text-green-400' :
              accuracy >= 80 ? 'text-blue-600 dark:text-blue-400' :
              accuracy >= 60 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {accuracy}%
            </div>
          </div>

          {/* BPM */}
          <div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider capitalize">
              {difficulty}
            </div>
            <div className="text-lg sm:text-xl font-bold text-foreground font-mono">
              {bpm}
            </div>
          </div>
        </div>

        {/* Bottom row - Controls */}
        <div className="flex justify-center gap-2 mt-2 pt-2 border-t border-border">
          {gameState.status === 'playing' && onPause && (
            <button
              onClick={onPause}
              className="px-4 py-1.5 bg-muted hover:bg-muted/80 rounded-lg text-foreground text-sm font-medium transition-colors"
            >
              Pause
            </button>
          )}
          {onEnd && (
            <button
              onClick={onEnd}
              className="px-4 py-1.5 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-600 dark:text-red-400 text-sm font-medium transition-colors"
            >
              Exit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
