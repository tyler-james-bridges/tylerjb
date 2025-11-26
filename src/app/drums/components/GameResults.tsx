'use client';

import { GameState } from '../types';

interface GameResultsProps {
  gameState: GameState;
  onPlayAgain: () => void;
  onSelectNew: () => void;
}

export default function GameResults({ gameState, onPlayAgain, onSelectNew }: GameResultsProps) {
  const { score, maxCombo, hits, currentRudiment, difficulty, bpm } = gameState;

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Results card */}
      <div className="bg-muted/50 rounded-2xl p-6 border border-border text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {currentRudiment?.name || 'Complete!'}
        </h2>
        <p className="text-sm text-muted-foreground mb-6 capitalize">
          {difficulty} - {bpm} BPM
        </p>

        {/* Celebration */}
        <div className="text-6xl mb-6">
          {maxCombo >= 20 ? '🔥' : maxCombo >= 10 ? '👏' : '🥁'}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-background/50 rounded-lg p-4 border border-border">
            <div className="text-3xl font-bold text-foreground font-mono">
              {Math.round(score).toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground uppercase mt-1">Score</div>
          </div>

          <div className="bg-background/50 rounded-lg p-4 border border-border">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 font-mono">
              {maxCombo}x
            </div>
            <div className="text-xs text-muted-foreground uppercase mt-1">Max Combo</div>
          </div>

          <div className="col-span-2 bg-background/50 rounded-lg p-4 border border-border">
            <div className="text-3xl font-bold text-foreground font-mono">
              {hits}
            </div>
            <div className="text-xs text-muted-foreground uppercase mt-1">Total Hits</div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onPlayAgain}
            className="flex-1 py-3 bg-foreground text-background hover:opacity-90 rounded-xl font-bold transition-all"
          >
            Play Again
          </button>
          <button
            onClick={onSelectNew}
            className="flex-1 py-3 bg-muted hover:bg-muted/80 rounded-xl text-foreground font-bold transition-colors"
          >
            New Rudiment
          </button>
        </div>
      </div>

      {/* Encouragement */}
      <div className="bg-muted/50 border border-border rounded-xl p-4 text-center">
        <p className="text-muted-foreground text-sm">
          {maxCombo >= 20
            ? "🔥 Amazing combo! You're on fire!"
            : maxCombo >= 10
            ? "👏 Great job keeping that combo going!"
            : "🥁 Keep practicing to build longer combos!"
          }
        </p>
      </div>
    </div>
  );
}
