import { Rudiment, Note } from '../types';

/** Helper to create notes at specific beat positions */
const n = (type: Note['type'], time: number, accent = false): Note => ({
  type,
  time,
  accent,
});

/**
 * All 40 PAS (Percussive Arts Society) International Drum Rudiments
 * Organized by category: Roll, Diddle, Flam, Drag
 */
export const rudiments: Rudiment[] = [
  // ============================================
  // ROLL RUDIMENTS (1-15)
  // ============================================
  {
    id: 'single-stroke-roll',
    name: 'Single Stroke Roll',
    category: 'roll',
    description: 'Alternating single strokes: R L R L',
    pattern: [
      n('R', 0), n('L', 0.25), n('R', 0.5), n('L', 0.75),
      n('R', 1), n('L', 1.25), n('R', 1.5), n('L', 1.75),
    ],
    bpm: { beginner: 60, intermediate: 90, advanced: 120, expert: 160 },
    difficulty: 'beginner',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'single-stroke-four',
    name: 'Single Stroke Four',
    category: 'roll',
    description: 'Four alternating strokes with accent on first: R L R L',
    pattern: [
      n('R', 0, true), n('L', 0.25), n('R', 0.5), n('L', 0.75),
    ],
    bpm: { beginner: 60, intermediate: 90, advanced: 120, expert: 160 },
    difficulty: 'beginner',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },
  {
    id: 'single-stroke-seven',
    name: 'Single Stroke Seven',
    category: 'roll',
    description: 'Seven alternating strokes',
    pattern: [
      n('R', 0, true), n('L', 0.167), n('R', 0.333), n('L', 0.5),
      n('R', 0.667), n('L', 0.833), n('R', 1, true),
    ],
    bpm: { beginner: 50, intermediate: 80, advanced: 110, expert: 140 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 1.167,
  },
  {
    id: 'double-stroke-roll',
    name: 'Double Stroke Roll',
    category: 'roll',
    description: 'Two strokes per hand: RR LL RR LL',
    pattern: [
      n('R', 0), n('R', 0.125), n('L', 0.25), n('L', 0.375),
      n('R', 0.5), n('R', 0.625), n('L', 0.75), n('L', 0.875),
    ],
    bpm: { beginner: 60, intermediate: 90, advanced: 120, expert: 160 },
    difficulty: 'beginner',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },
  {
    id: 'five-stroke-roll',
    name: 'Five Stroke Roll',
    category: 'roll',
    description: 'RR LL R or LL RR L',
    pattern: [
      n('R', 0), n('R', 0.125), n('L', 0.25), n('L', 0.375), n('R', 0.5, true),
    ],
    bpm: { beginner: 60, intermediate: 90, advanced: 120, expert: 150 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 0.75,
  },
  {
    id: 'six-stroke-roll',
    name: 'Six Stroke Roll',
    category: 'roll',
    description: 'R LL RR L with accents',
    pattern: [
      n('R', 0, true), n('L', 0.167), n('L', 0.333), n('R', 0.5), n('R', 0.667), n('L', 0.833, true),
    ],
    bpm: { beginner: 50, intermediate: 80, advanced: 110, expert: 140 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },
  {
    id: 'seven-stroke-roll',
    name: 'Seven Stroke Roll',
    category: 'roll',
    description: 'RR LL RR L',
    pattern: [
      n('R', 0), n('R', 0.125), n('L', 0.25), n('L', 0.375),
      n('R', 0.5), n('R', 0.625), n('L', 0.75, true),
    ],
    bpm: { beginner: 60, intermediate: 90, advanced: 120, expert: 150 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },
  {
    id: 'nine-stroke-roll',
    name: 'Nine Stroke Roll',
    category: 'roll',
    description: 'RR LL RR LL R',
    pattern: [
      n('R', 0), n('R', 0.125), n('L', 0.25), n('L', 0.375),
      n('R', 0.5), n('R', 0.625), n('L', 0.75), n('L', 0.875), n('R', 1, true),
    ],
    bpm: { beginner: 50, intermediate: 80, advanced: 110, expert: 140 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 1.25,
  },
  {
    id: 'ten-stroke-roll',
    name: 'Ten Stroke Roll',
    category: 'roll',
    description: 'RR LL RR LL R L',
    pattern: [
      n('R', 0), n('R', 0.1), n('L', 0.2), n('L', 0.3),
      n('R', 0.4), n('R', 0.5), n('L', 0.6), n('L', 0.7),
      n('R', 0.8, true), n('L', 0.9, true),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },
  {
    id: 'eleven-stroke-roll',
    name: 'Eleven Stroke Roll',
    category: 'roll',
    description: 'RR LL RR LL RR L',
    pattern: [
      n('R', 0), n('R', 0.083), n('L', 0.167), n('L', 0.25),
      n('R', 0.333), n('R', 0.417), n('L', 0.5), n('L', 0.583),
      n('R', 0.667), n('R', 0.75), n('L', 0.833, true),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },
  {
    id: 'thirteen-stroke-roll',
    name: 'Thirteen Stroke Roll',
    category: 'roll',
    description: 'RR LL RR LL RR LL R',
    pattern: [
      n('R', 0), n('R', 0.083), n('L', 0.167), n('L', 0.25),
      n('R', 0.333), n('R', 0.417), n('L', 0.5), n('L', 0.583),
      n('R', 0.667), n('R', 0.75), n('L', 0.833), n('L', 0.917), n('R', 1, true),
    ],
    bpm: { beginner: 50, intermediate: 70, advanced: 95, expert: 120 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 1.25,
  },
  {
    id: 'fifteen-stroke-roll',
    name: 'Fifteen Stroke Roll',
    category: 'roll',
    description: 'RR LL RR LL RR LL RR L',
    pattern: [
      n('R', 0), n('R', 0.067), n('L', 0.133), n('L', 0.2),
      n('R', 0.267), n('R', 0.333), n('L', 0.4), n('L', 0.467),
      n('R', 0.533), n('R', 0.6), n('L', 0.667), n('L', 0.733),
      n('R', 0.8), n('R', 0.867), n('L', 0.933, true),
    ],
    bpm: { beginner: 45, intermediate: 65, advanced: 90, expert: 115 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },
  {
    id: 'seventeen-stroke-roll',
    name: 'Seventeen Stroke Roll',
    category: 'roll',
    description: 'Extended double stroke roll',
    pattern: [
      n('R', 0), n('R', 0.0625), n('L', 0.125), n('L', 0.1875),
      n('R', 0.25), n('R', 0.3125), n('L', 0.375), n('L', 0.4375),
      n('R', 0.5), n('R', 0.5625), n('L', 0.625), n('L', 0.6875),
      n('R', 0.75), n('R', 0.8125), n('L', 0.875), n('L', 0.9375), n('R', 1, true),
    ],
    bpm: { beginner: 45, intermediate: 65, advanced: 85, expert: 110 },
    difficulty: 'expert',
    timeSignature: [4, 4],
    beatsPerPattern: 1.25,
  },
  {
    id: 'triple-stroke-roll',
    name: 'Triple Stroke Roll',
    category: 'roll',
    description: 'Three strokes per hand: RRR LLL',
    pattern: [
      n('R', 0), n('R', 0.083), n('R', 0.167),
      n('L', 0.25), n('L', 0.333), n('L', 0.417),
      n('R', 0.5), n('R', 0.583), n('R', 0.667),
      n('L', 0.75), n('L', 0.833), n('L', 0.917),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },

  // ============================================
  // DIDDLE RUDIMENTS (16-22)
  // ============================================
  {
    id: 'single-paradiddle',
    name: 'Single Paradiddle',
    category: 'diddle',
    description: 'R L R R L R L L',
    pattern: [
      n('R', 0, true), n('L', 0.25), n('R', 0.5), n('R', 0.75),
      n('L', 1, true), n('R', 1.25), n('L', 1.5), n('L', 1.75),
    ],
    bpm: { beginner: 60, intermediate: 90, advanced: 120, expert: 160 },
    difficulty: 'beginner',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'double-paradiddle',
    name: 'Double Paradiddle',
    category: 'diddle',
    description: 'R L R L R R L R L R L L',
    pattern: [
      n('R', 0, true), n('L', 0.167), n('R', 0.333), n('L', 0.5), n('R', 0.667), n('R', 0.833),
      n('L', 1, true), n('R', 1.167), n('L', 1.333), n('R', 1.5), n('L', 1.667), n('L', 1.833),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 135 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'triple-paradiddle',
    name: 'Triple Paradiddle',
    category: 'diddle',
    description: 'R L R L R L R R L R L R L R L L',
    pattern: [
      n('R', 0, true), n('L', 0.125), n('R', 0.25), n('L', 0.375),
      n('R', 0.5), n('L', 0.625), n('R', 0.75), n('R', 0.875),
      n('L', 1, true), n('R', 1.125), n('L', 1.25), n('R', 1.375),
      n('L', 1.5), n('R', 1.625), n('L', 1.75), n('L', 1.875),
    ],
    bpm: { beginner: 45, intermediate: 70, advanced: 95, expert: 125 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'paradiddle-diddle',
    name: 'Paradiddle-Diddle',
    category: 'diddle',
    description: 'R L R R L L',
    pattern: [
      n('R', 0, true), n('L', 0.167), n('R', 0.333), n('R', 0.5), n('L', 0.667), n('L', 0.833),
    ],
    bpm: { beginner: 55, intermediate: 80, advanced: 110, expert: 145 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },
  {
    id: 'single-ratamacue',
    name: 'Single Ratamacue',
    category: 'diddle',
    description: 'Drag followed by triplet with accent',
    pattern: [
      n('DL', 0), n('R', 0.333), n('L', 0.667), n('R', 1, true),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 1.25,
  },
  {
    id: 'double-ratamacue',
    name: 'Double Ratamacue',
    category: 'diddle',
    description: 'Two drags with triplet',
    pattern: [
      n('DL', 0), n('R', 0.25), n('DL', 0.5), n('R', 0.75), n('L', 1), n('R', 1.25, true),
    ],
    bpm: { beginner: 45, intermediate: 70, advanced: 95, expert: 120 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 1.5,
  },
  {
    id: 'triple-ratamacue',
    name: 'Triple Ratamacue',
    category: 'diddle',
    description: 'Three drags with triplet ending',
    pattern: [
      n('DL', 0), n('R', 0.2), n('DL', 0.4), n('R', 0.6), n('DL', 0.8), n('R', 1), n('L', 1.2), n('R', 1.4, true),
    ],
    bpm: { beginner: 40, intermediate: 60, advanced: 85, expert: 110 },
    difficulty: 'expert',
    timeSignature: [4, 4],
    beatsPerPattern: 1.6,
  },

  // ============================================
  // FLAM RUDIMENTS (23-34)
  // ============================================
  {
    id: 'flam',
    name: 'Flam',
    category: 'flam',
    description: 'Grace note followed by primary: lR or rL',
    pattern: [
      n('FR', 0), n('FL', 1),
    ],
    bpm: { beginner: 60, intermediate: 90, advanced: 120, expert: 150 },
    difficulty: 'beginner',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'flam-accent',
    name: 'Flam Accent',
    category: 'flam',
    description: 'Flam followed by two taps: lR L R',
    pattern: [
      n('FR', 0, true), n('L', 0.333), n('R', 0.667),
      n('FL', 1, true), n('R', 1.333), n('L', 1.667),
    ],
    bpm: { beginner: 55, intermediate: 80, advanced: 110, expert: 140 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'flam-tap',
    name: 'Flam Tap',
    category: 'flam',
    description: 'Flam followed by tap same hand: lR R rL L',
    pattern: [
      n('FR', 0, true), n('R', 0.5),
      n('FL', 1, true), n('L', 1.5),
    ],
    bpm: { beginner: 60, intermediate: 90, advanced: 120, expert: 150 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'flamacue',
    name: 'Flamacue',
    category: 'flam',
    description: 'Flam accent variation with final accent',
    pattern: [
      n('FR', 0, true), n('L', 0.25), n('R', 0.5), n('L', 0.75, true), n('R', 1),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 1.25,
  },
  {
    id: 'flam-paradiddle',
    name: 'Flam Paradiddle',
    category: 'flam',
    description: 'Flam followed by paradiddle: lR L R R',
    pattern: [
      n('FR', 0, true), n('L', 0.25), n('R', 0.5), n('R', 0.75),
      n('FL', 1, true), n('R', 1.25), n('L', 1.5), n('L', 1.75),
    ],
    bpm: { beginner: 55, intermediate: 80, advanced: 110, expert: 140 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'single-flammed-mill',
    name: 'Single Flammed Mill',
    category: 'flam',
    description: 'Flam paradiddle with accent pattern',
    pattern: [
      n('FR', 0, true), n('L', 0.25), n('R', 0.5), n('R', 0.75),
      n('FL', 1, true), n('R', 1.25), n('L', 1.5), n('L', 1.75),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'flam-paradiddle-diddle',
    name: 'Flam Paradiddle-Diddle',
    category: 'flam',
    description: 'Flam with paradiddle-diddle: lR L R R L L',
    pattern: [
      n('FR', 0, true), n('L', 0.167), n('R', 0.333), n('R', 0.5), n('L', 0.667), n('L', 0.833),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },
  {
    id: 'pataflafla',
    name: 'Pataflafla',
    category: 'flam',
    description: 'lR L R rL R L',
    pattern: [
      n('FR', 0, true), n('L', 0.25), n('R', 0.5), n('FL', 0.75, true), n('R', 1), n('L', 1.25),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 1.5,
  },
  {
    id: 'swiss-army-triplet',
    name: 'Swiss Army Triplet',
    category: 'flam',
    description: 'lR R L rL L R (triplet feel)',
    pattern: [
      n('FR', 0, true), n('R', 0.333), n('L', 0.667),
      n('FL', 1, true), n('L', 1.333), n('R', 1.667),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'inverted-flam-tap',
    name: 'Inverted Flam Tap',
    category: 'flam',
    description: 'Tap followed by flam: R lR L rL',
    pattern: [
      n('R', 0), n('FR', 0.5, true),
      n('L', 1), n('FL', 1.5, true),
    ],
    bpm: { beginner: 55, intermediate: 80, advanced: 110, expert: 140 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'flam-drag',
    name: 'Flam Drag',
    category: 'flam',
    description: 'Flam followed by drag: lR L drR',
    pattern: [
      n('FR', 0, true), n('L', 0.333), n('DR', 0.667),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },

  // ============================================
  // DRAG RUDIMENTS (35-40)
  // ============================================
  {
    id: 'drag',
    name: 'Drag (Ruff)',
    category: 'drag',
    description: 'Two grace notes before primary: llR or rrL',
    pattern: [
      n('DR', 0), n('DL', 1),
    ],
    bpm: { beginner: 60, intermediate: 90, advanced: 120, expert: 150 },
    difficulty: 'beginner',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'single-drag-tap',
    name: 'Single Drag Tap',
    category: 'drag',
    description: 'Drag followed by tap: llR L rrL R',
    pattern: [
      n('DR', 0), n('L', 0.5),
      n('DL', 1), n('R', 1.5),
    ],
    bpm: { beginner: 55, intermediate: 80, advanced: 110, expert: 140 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'double-drag-tap',
    name: 'Double Drag Tap',
    category: 'drag',
    description: 'Two drags followed by tap: llR llR L',
    pattern: [
      n('DR', 0), n('DR', 0.333), n('L', 0.667),
      n('DL', 1), n('DL', 1.333), n('R', 1.667),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'lesson-25',
    name: 'Lesson 25',
    category: 'drag',
    description: 'Three drags: llR llR llR',
    pattern: [
      n('DR', 0, true), n('DR', 0.333), n('DR', 0.667, true),
    ],
    bpm: { beginner: 50, intermediate: 75, advanced: 100, expert: 130 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 1,
  },
  {
    id: 'single-dragadiddle',
    name: 'Single Dragadiddle',
    category: 'drag',
    description: 'Drag paradiddle: llR R L L',
    pattern: [
      n('DR', 0, true), n('R', 0.25), n('L', 0.5), n('L', 0.75),
      n('DL', 1, true), n('L', 1.25), n('R', 1.5), n('R', 1.75),
    ],
    bpm: { beginner: 55, intermediate: 80, advanced: 105, expert: 135 },
    difficulty: 'intermediate',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
  {
    id: 'drag-paradiddle-1',
    name: 'Drag Paradiddle #1',
    category: 'drag',
    description: 'R llR L R R L rrL R L L',
    pattern: [
      n('R', 0, true), n('DR', 0.25), n('L', 0.5), n('R', 0.75), n('R', 1),
      n('L', 1.25, true), n('DL', 1.5), n('R', 1.75), n('L', 2), n('L', 2.25),
    ],
    bpm: { beginner: 45, intermediate: 70, advanced: 95, expert: 120 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 2.5,
  },
  {
    id: 'drag-paradiddle-2',
    name: 'Drag Paradiddle #2',
    category: 'drag',
    description: 'R llR L L R L rrL R R L',
    pattern: [
      n('R', 0, true), n('DR', 0.2), n('L', 0.4), n('L', 0.6), n('R', 0.8), n('L', 1, true),
      n('DL', 1.2), n('R', 1.4), n('R', 1.6), n('L', 1.8),
    ],
    bpm: { beginner: 45, intermediate: 70, advanced: 95, expert: 120 },
    difficulty: 'advanced',
    timeSignature: [4, 4],
    beatsPerPattern: 2,
  },
];

/** Get rudiments by category */
export const getRudimentsByCategory = (category: Rudiment['category']): Rudiment[] =>
  rudiments.filter(r => r.category === category);

/** Get rudiments by difficulty */
export const getRudimentsByDifficulty = (difficulty: Rudiment['difficulty']): Rudiment[] =>
  rudiments.filter(r => r.difficulty === difficulty);

/** Get a random rudiment */
export const getRandomRudiment = (difficulty?: Rudiment['difficulty']): Rudiment => {
  const pool = difficulty ? getRudimentsByDifficulty(difficulty) : rudiments;
  return pool[Math.floor(Math.random() * pool.length)];
};
