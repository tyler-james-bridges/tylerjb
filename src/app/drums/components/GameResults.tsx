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
      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          {currentRudiment?.name || 'Complete!'}
        </h2>
        <p className="text-sm text-white/50 mb-6">
          {difficulty} - {bpm} BPM
        </p>

        {/* Celebration */}
        <div className="text-6xl mb-6">
          {maxCombo >= 20 ? '🔥' : maxCombo >= 10 ? '👏' : '🥁'}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-3xl font-bold text-white font-mono">
              {Math.round(score).toLocaleString()}
            </div>
            <div className="text-xs text-white/50 uppercase mt-1">Score</div>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-3xl font-bold text-yellow-400 font-mono">
              {maxCombo}x
            </div>
            <div className="text-xs text-white/50 uppercase mt-1">Max Combo</div>
          </div>

          <div className="col-span-2 bg-white/5 rounded-lg p-4">
            <div className="text-3xl font-bold text-teal-400 font-mono">
              {hits}
            </div>
            <div className="text-xs text-white/50 uppercase mt-1">Total Hits</div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onPlayAgain}
            className="flex-1 py-3 bg-teal-500 hover:bg-teal-400 rounded-xl text-white font-bold transition-colors"
          >
            Play Again
          </button>
          <button
            onClick={onSelectNew}
            className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-bold transition-colors"
          >
            New Rudiment
          </button>
        </div>
      </div>

      {/* Encouragement */}
      <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4 text-center">
        <p className="text-teal-400 text-sm">
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
