'use client';

import { Rudiment, Difficulty } from '../types';

interface RudimentSelectProps {
  rudiments: Rudiment[];
  difficulty: Difficulty;
  onSelectRudiment: (rudimentId: string) => void;
  onSelectDifficulty: (difficulty: Difficulty) => void;
  onStartRandom: () => void;
}

const difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced', 'expert'];

const categoryEmoji: Record<string, string> = {
  roll: '🥁',
  diddle: '🎵',
  flam: '💥',
  drag: '🔥',
};

export default function RudimentSelect({
  rudiments,
  difficulty,
  onSelectRudiment,
  onSelectDifficulty,
  onStartRandom,
}: RudimentSelectProps) {
  // Group rudiments by category
  const grouped = rudiments.reduce((acc, r) => {
    if (!acc[r.category]) acc[r.category] = [];
    acc[r.category].push(r);
    return acc;
  }, {} as Record<string, Rudiment[]>);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Difficulty selector */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <h3 className="text-sm text-white/50 uppercase tracking-wider mb-3">Difficulty</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {difficulties.map(d => (
            <button
              key={d}
              onClick={() => onSelectDifficulty(d)}
              className={`
                px-4 py-2.5 rounded-lg text-sm font-medium capitalize transition-all
                ${difficulty === d
                  ? 'bg-teal-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
                }
              `}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Random start button */}
      <button
        onClick={onStartRandom}
        className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 rounded-xl text-white font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/25"
      >
        🎲 Random Rudiment
      </button>

      {/* Rudiment list by category */}
      <div className="space-y-4">
        {Object.entries(grouped).map(([category, categoryRudiments]) => (
          <div key={category} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <h3 className="text-sm text-white/50 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>{categoryEmoji[category]}</span>
              <span>{category} Rudiments</span>
              <span className="text-white/30">({categoryRudiments.length})</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {categoryRudiments.map(r => (
                <button
                  key={r.id}
                  onClick={() => onSelectRudiment(r.id)}
                  className="text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-white font-medium group-hover:text-teal-400 transition-colors">
                        {r.name}
                      </div>
                      <div className="text-xs text-white/40 mt-1">
                        {r.bpm[difficulty]} BPM
                      </div>
                    </div>
                    <span className={`
                      text-xs px-2 py-0.5 rounded capitalize
                      ${r.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' : ''}
                      ${r.difficulty === 'intermediate' ? 'bg-blue-500/20 text-blue-400' : ''}
                      ${r.difficulty === 'advanced' ? 'bg-orange-500/20 text-orange-400' : ''}
                      ${r.difficulty === 'expert' ? 'bg-red-500/20 text-red-400' : ''}
                    `}>
                      {r.difficulty}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
