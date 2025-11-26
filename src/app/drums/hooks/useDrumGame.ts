'use client';

import { useState, useCallback, useRef } from 'react';
import { GameState, Difficulty, Note } from '../types';
import { rudiments, getRandomRudiment, getRudimentsByDifficulty } from '../data/rudiments';
import { useAudio } from './useAudio';

const INITIAL_STATE: GameState = {
  status: 'idle',
  currentRudiment: null,
  score: 0,
  combo: 0,
  maxCombo: 0,
  hits: 0,
  misses: 0,
  currentNoteIndex: 0,
  difficulty: 'beginner',
  bpm: 80,
};

export function useDrumGame() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [upcomingNotes, setUpcomingNotes] = useState<(Note & { id: number })[]>([]);
  const [hitFeedback, setHitFeedback] = useState<'hit' | null>(null);
  const [expectedHand, setExpectedHand] = useState<'L' | 'R' | null>(null);

  const { initAudio, playHit } = useAudio();

  const noteIdCounter = useRef<number>(0);
  const patternLoopCount = useRef<number>(0);
  const lastTapTime = useRef<number>(0);
  const isProcessingTap = useRef<boolean>(false);

  // Start the game
  const startGame = useCallback(async (difficulty: Difficulty, rudimentId?: string) => {
    await initAudio();

    const rudiment = rudimentId
      ? rudiments.find(r => r.id === rudimentId) || getRandomRudiment(difficulty)
      : getRandomRudiment(difficulty);

    const bpm = rudiment.bpm[difficulty];

    setGameState({
      ...INITIAL_STATE,
      status: 'countdown',
      currentRudiment: rudiment,
      difficulty,
      bpm,
    });

    // Reset counters
    noteIdCounter.current = 0;
    patternLoopCount.current = 0;

    // Countdown then start
    setTimeout(() => {
      // Generate initial notes
      const initialNotes = rudiment.pattern.map((note) => ({
        ...note,
        id: noteIdCounter.current++,
      }));

      setUpcomingNotes(initialNotes);

      // Set expected hand for first note
      const firstNote = initialNotes[0];
      if (firstNote) {
        const hand = getHandFromNote(firstNote.type);
        setExpectedHand(hand);
      }

      setGameState(prev => ({
        ...prev,
        status: 'playing',
        currentNoteIndex: 0,
      }));
    }, 2000); // 2 second countdown
  }, [initAudio]);

  // Get hand from note type
  const getHandFromNote = (noteType: string): 'L' | 'R' => {
    if (noteType.includes('R') || noteType === 'r') return 'R';
    return 'L';
  };

  // Handle a tap - minimal debounce for realistic fast playing
  const handleTap = useCallback(() => {
    if (gameState.status !== 'playing' || !gameState.currentRudiment) return;
    if (isProcessingTap.current) return;

    const currentNote = upcomingNotes[0];
    if (!currentNote) return;

    // Very short minimum interval to prevent double-triggers but allow fast playing
    const minInterval = 40; // 40ms = allows up to 25 hits per second (very fast rolls)
    const now = Date.now();
    if (now - lastTapTime.current < minInterval) {
      return; // Too fast, ignore this tap
    }
    lastTapTime.current = now;
    isProcessingTap.current = true;

    // Play sound based on note type
    playHit(currentNote.type, currentNote.accent || false);

    // Show hit feedback
    setHitFeedback('hit');
    setTimeout(() => setHitFeedback(null), 150);

    // Update score - every hit counts!
    setGameState(prev => {
      const newCombo = prev.combo + 1;
      const points = 100 * (1 + Math.floor(newCombo / 10) * 0.1);
      return {
        ...prev,
        score: prev.score + points,
        combo: newCombo,
        maxCombo: Math.max(prev.maxCombo, newCombo),
        hits: prev.hits + 1,
        currentNoteIndex: prev.currentNoteIndex + 1,
      };
    });

    // Advance to next note
    setUpcomingNotes(prev => {
      const remaining = prev.slice(1);

      // If pattern complete, loop it (up to 4 times then end)
      if (remaining.length === 0 && gameState.currentRudiment) {
        patternLoopCount.current++;

        // End after 4 loops
        if (patternLoopCount.current >= 4) {
          setTimeout(() => {
            setGameState(p => ({ ...p, status: 'complete' }));
          }, 300);
          return [];
        }

        // Generate next loop
        const newNotes = gameState.currentRudiment.pattern.map((note) => ({
          ...note,
          id: noteIdCounter.current++,
        }));

        // Update expected hand for next note
        if (newNotes[0]) {
          setExpectedHand(getHandFromNote(newNotes[0].type));
        }

        return newNotes;
      }

      // Update expected hand for next note
      if (remaining[0]) {
        setExpectedHand(getHandFromNote(remaining[0].type));
      }

      return remaining;
    });

    // Allow next tap immediately after state update
    isProcessingTap.current = false;
  }, [gameState, upcomingNotes, playHit]);

  // Pause/resume
  const togglePause = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      status: prev.status === 'playing' ? 'paused' : 'playing',
    }));
  }, []);

  // End game
  const endGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      status: 'complete',
    }));
  }, []);

  // Reset game
  const resetGame = useCallback(() => {
    setGameState(INITIAL_STATE);
    setUpcomingNotes([]);
    setExpectedHand(null);
    setHitFeedback(null);
  }, []);

  // Change difficulty
  const setDifficulty = useCallback((difficulty: Difficulty) => {
    setGameState(prev => ({ ...prev, difficulty }));
  }, []);

  // Get available rudiments for current difficulty
  const getAvailableRudiments = useCallback(() => {
    return getRudimentsByDifficulty(gameState.difficulty);
  }, [gameState.difficulty]);

  return {
    gameState,
    upcomingNotes,
    hitFeedback,
    expectedHand,
    startGame,
    handleTap,
    togglePause,
    endGame,
    resetGame,
    setDifficulty,
    getAvailableRudiments,
    allRudiments: rudiments,
  };
}
