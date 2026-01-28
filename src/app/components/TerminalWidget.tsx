'use client';

import { useState, useEffect } from 'react';

interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'comment' | 'success' | 'highlight';
  delay: number;
}

const terminalLines: TerminalLine[] = [
  {
    text: '# Built from iPhone via mobile dev stack',
    type: 'comment',
    delay: 0,
  },
  { text: '$ ssh tyler@macbook --via tailscale', type: 'command', delay: 800 },
  {
    text: 'Connected via Termius → Tailscale tunnel',
    type: 'output',
    delay: 1600,
  },
  { text: '', type: 'output', delay: 2000 },
  { text: '$ claude', type: 'command', delay: 2400 },
  {
    text: '╭─────────────────────────────────────╮',
    type: 'highlight',
    delay: 3000,
  },
  {
    text: '│  Claude Code v1.0.0                 │',
    type: 'highlight',
    delay: 3100,
  },
  {
    text: '│  /tylerjb (Next.js)                 │',
    type: 'highlight',
    delay: 3200,
  },
  {
    text: '╰─────────────────────────────────────╯',
    type: 'highlight',
    delay: 3300,
  },
  { text: '', type: 'output', delay: 3500 },
  {
    text: '> Build terminal widget for portfolio',
    type: 'command',
    delay: 3800,
  },
  { text: 'Creating component...', type: 'output', delay: 4400 },
  { text: '✓ TerminalWidget.tsx created', type: 'success', delay: 5000 },
  { text: '✓ Deployed to vercel', type: 'success', delay: 5600 },
  { text: '', type: 'output', delay: 6000 },
  { text: "# You're looking at it right now 📱", type: 'comment', delay: 6400 },
];

export default function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) {
      setIsComplete(true);
      setIsTyping(false);
      return;
    }

    const currentLine = terminalLines[visibleLines];
    const targetText = currentLine.text;

    // Typewriter effect for commands
    if (
      currentLine.type === 'command' &&
      currentText.length < targetText.length
    ) {
      const timeout = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }

    // Move to next line
    if (currentText === targetText || currentLine.type !== 'command') {
      const nextDelay =
        visibleLines < terminalLines.length - 1
          ? terminalLines[visibleLines + 1].delay - currentLine.delay
          : 2000;

      const timeout = setTimeout(
        () => {
          setVisibleLines((v) => v + 1);
          setCurrentText('');
        },
        currentLine.type === 'command' ? 300 : Math.max(nextDelay, 100)
      );

      return () => clearTimeout(timeout);
    }
  }, [visibleLines, currentText]);

  // Restart animation after completion
  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        setVisibleLines(0);
        setCurrentText('');
        setIsTyping(true);
        setIsComplete(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isComplete]);

  const getLineClass = (type: TerminalLine['type']) => {
    switch (type) {
      case 'command':
        return 'text-emerald-400';
      case 'comment':
        return 'text-zinc-500';
      case 'success':
        return 'text-teal-400';
      case 'highlight':
        return 'text-amber-400';
      default:
        return 'text-zinc-400';
    }
  };

  return (
    <div className="terminal-widget rounded-xl border border-border overflow-hidden bg-[#0d1117] shadow-lg">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-zinc-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-zinc-500 font-mono">
            tyler@macbook — termius
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-zinc-600 font-mono">📱 iPhone</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm min-h-[280px] terminal-scanline">
        {terminalLines.slice(0, visibleLines).map((line, index) => (
          <div
            key={index}
            className={`${getLineClass(line.type)} leading-relaxed terminal-line-appear`}
            style={{ minHeight: line.text === '' ? '1rem' : 'auto' }}
          >
            {line.text}
          </div>
        ))}

        {/* Currently typing line */}
        {visibleLines < terminalLines.length &&
          terminalLines[visibleLines].type === 'command' && (
            <div className={`${getLineClass('command')} leading-relaxed`}>
              {currentText}
              <span className="terminal-cursor">▋</span>
            </div>
          )}

        {/* Cursor when not typing a command */}
        {isTyping &&
          visibleLines < terminalLines.length &&
          terminalLines[visibleLines].type !== 'command' && (
            <div className="text-emerald-400">
              <span className="terminal-cursor">▋</span>
            </div>
          )}
      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2 bg-[#161b22] border-t border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-zinc-600 font-mono flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            tailscale
          </span>
          <span className="text-[10px] text-zinc-600 font-mono">
            claude code
          </span>
        </div>
        <span className="text-[10px] text-zinc-500 font-mono">
          {isComplete ? '↻ replaying...' : 'live'}
        </span>
      </div>
    </div>
  );
}
