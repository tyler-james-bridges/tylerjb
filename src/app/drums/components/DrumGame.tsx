'use client';

import { useDrumGame } from '../hooks/useDrumGame';
import DrumPad from './DrumPad';
import NotationDisplay from './NotationDisplay';
import GameHeader from './GameHeader';
import RudimentSelect from './RudimentSelect';
import GameResults from './GameResults';

export default function DrumGame() {
  const {
    gameState,
    upcomingNotes,
    hitFeedback,
    expectedHand,
    startGame,
    handleTap,
    togglePause,
    resetGame,
    setDifficulty,
    allRudiments,
  } = useDrumGame();

  const { status, difficulty, currentRudiment } = gameState;

  // Idle state - show rudiment selection
  if (status === 'idle') {
    return (
      <div className="animate-slide-up">
        <header className="content-header">
          <h1 className="text-2xl font-bold">🥁 Rudiment Trainer</h1>
        </header>

        <div className="content-body">
          <p className="text-muted-foreground mb-6">
            Master the 40 PAS International Drum Rudiments
          </p>

          <RudimentSelect
            rudiments={allRudiments}
            difficulty={difficulty}
            onSelectDifficulty={setDifficulty}
            onSelectRudiment={(id) => startGame(difficulty, id)}
            onStartRandom={() => startGame(difficulty)}
          />
        </div>
      </div>
    );
  }

  // Countdown state
  if (status === 'countdown') {
    return (
      <div className="animate-slide-up min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-muted-foreground mb-4">{currentRudiment?.name}</h2>
          <div className="text-6xl sm:text-8xl font-bold text-foreground animate-pulse">
            Get Ready!
          </div>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            {currentRudiment?.description}
          </p>
          <p className="text-muted-foreground/50 mt-2 text-sm">
            Pattern plays 4 times
          </p>
        </div>
      </div>
    );
  }

  // Playing or Paused state
  if (status === 'playing' || status === 'paused') {
    return (
      <div className="animate-slide-up p-3 sm:p-4 flex flex-col min-h-[calc(100vh-80px)] pb-20">
        {/* Header with stats */}
        <GameHeader
          gameState={gameState}
          onPause={togglePause}
          onEnd={resetGame}
        />

        {/* Pause overlay */}
        {status === 'paused' && (
          <div className="fixed inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">Paused</h2>
              <div className="flex flex-col gap-3">
                <button
                  onClick={togglePause}
                  className="px-8 py-3 bg-foreground text-background hover:opacity-90 rounded-xl font-bold transition-all"
                >
                  Resume
                </button>
                <button
                  onClick={resetGame}
                  className="px-8 py-3 bg-muted hover:bg-muted/80 rounded-xl text-foreground font-bold transition-colors"
                >
                  Exit to Menu
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main game area */}
        <div className="flex-1 flex flex-col items-center justify-between py-4 gap-4">
          {/* Notation display */}
          <NotationDisplay
            notes={upcomingNotes}
            currentIndex={gameState.currentNoteIndex}
            rudimentName={currentRudiment?.name}
          />

          {/* Single drum pad */}
          <DrumPad
            onTap={handleTap}
            expectedHand={expectedHand}
            feedback={hitFeedback}
            disabled={status === 'paused'}
          />

          {/* Tap instruction */}
          <p className="text-muted-foreground text-sm">Tap the drum!</p>
        </div>
      </div>
    );
  }

  // Complete state - show results
  if (status === 'complete') {
    return (
      <div className="animate-slide-up min-h-[80vh] p-4 flex items-center justify-center">
        <GameResults
          gameState={gameState}
          onPlayAgain={() => startGame(difficulty, currentRudiment?.id)}
          onSelectNew={resetGame}
        />
      </div>
    );
  }

  return null;
}
