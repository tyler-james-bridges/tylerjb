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
    <div className="w-full max-w-2xl space-y-6">
      {/* Difficulty selector */}
      <div className="bg-muted/50 rounded-xl p-4 border border-border">
        <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Difficulty</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {difficulties.map(d => (
            <button
              key={d}
              onClick={() => onSelectDifficulty(d)}
              className={`
                px-4 py-2.5 rounded-lg text-sm font-medium capitalize transition-all
                ${difficulty === d
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
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
        className="w-full py-4 bg-foreground text-background hover:opacity-90 rounded-xl font-bold text-lg transition-all"
      >
        🎲 Random Rudiment
      </button>

      {/* Rudiment list by category */}
      <div className="space-y-4">
        {Object.entries(grouped).map(([category, categoryRudiments]) => (
          <div key={category} className="bg-muted/50 rounded-xl p-4 border border-border">
            <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>{categoryEmoji[category]}</span>
              <span>{category} Rudiments</span>
              <span className="text-muted-foreground/50">({categoryRudiments.length})</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {categoryRudiments.map(r => (
                <button
                  key={r.id}
                  onClick={() => onSelectRudiment(r.id)}
                  className="text-left p-3 bg-background/50 hover:bg-background rounded-lg transition-all group border border-transparent hover:border-border"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-foreground font-medium group-hover:text-foreground transition-colors">
                        {r.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {r.bpm[difficulty]} BPM
                      </div>
                    </div>
                    <span className={`
                      text-xs px-2 py-0.5 rounded capitalize
                      ${r.difficulty === 'beginner' ? 'bg-green-500/10 text-green-600 dark:text-green-400' : ''}
                      ${r.difficulty === 'intermediate' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : ''}
                      ${r.difficulty === 'advanced' ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400' : ''}
                      ${r.difficulty === 'expert' ? 'bg-red-500/10 text-red-600 dark:text-red-400' : ''}
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
