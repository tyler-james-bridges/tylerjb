'use client';

import { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([
    'TylerOS Terminal v4.20',
    'Type "help" for available commands',
    ''
  ]);
  const [currentLine, setCurrentLine] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, () => string | string[]> = {
    help: () => [
      'Available commands:',
      '  help     - Show this help message',
      '  about    - About Tyler James-Bridges',
      '  skills   - List technical skills',
      '  projects - Show recent projects',
      '  contact  - Contact information',
      '  clear    - Clear terminal',
      '  date     - Current date and time',
      '  whoami   - Current user info'
    ],
    about: () => [
      'Tyler James-Bridges',
      'Senior Quality Engineer → Software Engineer',
      '10+ years in QA/Testing, now building full-stack applications',
      'Passionate about quality-first development and user experience'
    ],
    skills: () => [
      'Languages: JavaScript, TypeScript, Python, Ruby',
      'Frontend: React, Next.js, Tailwind CSS',
      'Testing: Playwright, Jest, Cypress',
      'Backend: Node.js, Express, PostgreSQL',
      'Tools: Git, Docker, AWS, CI/CD'
    ],
    projects: () => [
      'Recent Projects:',
      '• TylerOS - Browser-based operating system',
      '• Portfolio Site - Personal website with Matrix animations',
      '• Test Automation Framework - Custom Playwright framework',
      '• QA Dashboard - Metrics and reporting system'
    ],
    contact: () => [
      'Email: tyler@example.com',
      'GitHub: github.com/tylerjames-bridges',
      'LinkedIn: linkedin.com/in/tylerjames-bridges'
    ],
    clear: () => {
      setHistory(['']);
      return '';
    },
    date: () => new Date().toString(),
    whoami: () => 'tyler@tylerOS:~$'
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const output = commands[trimmedCmd] 
      ? commands[trimmedCmd]() 
      : `Command not found: ${cmd}. Type "help" for available commands.`;
    
    const newHistory = [
      ...history,
      `$ ${cmd}`,
      ...(Array.isArray(output) ? output : [output]),
      ''
    ];
    
    setHistory(trimmedCmd === 'clear' ? [''] : newHistory);
    setCurrentLine('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentLine.trim()) {
      handleCommand(currentLine);
    }
  };

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div 
      className="bg-black text-green-400 p-2 md:p-4 h-full font-mono text-xs md:text-sm overflow-auto cursor-text"
      onClick={() => inputRef.current?.focus()}
      ref={terminalRef}
      style={{ touchAction: 'manipulation' }}
    >
      {history.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">
          {line}
        </div>
      ))}
      <div className="flex">
        <span>$ </span>
        <input
          ref={inputRef}
          type="text"
          value={currentLine}
          onChange={(e) => setCurrentLine(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none ml-2"
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
