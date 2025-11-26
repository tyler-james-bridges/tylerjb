/** Note types for marching snare */
export type NoteType =
  | 'R'      // Right hand tap
  | 'L'      // Left hand tap
  | 'r'      // Right hand ghost/soft
  | 'l'      // Left hand ghost/soft
  | 'FR'     // Flam with right hand primary
  | 'FL'     // Flam with left hand primary
  | 'DR'     // Drag with right hand primary
  | 'DL'     // Drag with left hand primary
  | 'B'      // Buzz/roll
  | 'rest';  // Rest

/** A single note in a pattern */
export interface Note {
  type: NoteType;
  accent?: boolean;
  time: number; // Beat position (0, 0.25, 0.5, etc.)
}

/** Rudiment category per PAS */
export type RudimentCategory =
  | 'roll'
  | 'diddle'
  | 'flam'
  | 'drag';

/** Difficulty level */
export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

/** A rudiment definition */
export interface Rudiment {
  id: string;
  name: string;
  category: RudimentCategory;
  description: string;
  pattern: Note[];
  bpm: {
    beginner: number;
    intermediate: number;
    advanced: number;
    expert: number;
  };
  difficulty: Difficulty;
  timeSignature: [number, number]; // e.g., [4, 4]
  beatsPerPattern: number;
}

/** Game state */
export interface GameState {
  status: 'idle' | 'countdown' | 'playing' | 'paused' | 'complete';
  currentRudiment: Rudiment | null;
  score: number;
  combo: number;
  maxCombo: number;
  hits: number;
  misses: number;
  currentNoteIndex: number;
  difficulty: Difficulty;
  bpm: number;
}

/** Hit result for scoring */
export interface HitResult {
  timing: 'perfect' | 'good' | 'okay' | 'miss';
  points: number;
  hand: 'L' | 'R';
}

/** Timing windows in milliseconds */
export const TIMING_WINDOWS = {
  perfect: 50,  // +/- 50ms
  good: 100,    // +/- 100ms
  okay: 150,    // +/- 150ms
} as const;

/** Points per timing */
export const TIMING_POINTS = {
  perfect: 100,
  good: 50,
  okay: 25,
  miss: 0,
} as const;
