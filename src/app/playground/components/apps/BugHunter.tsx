'use client';

import { useState } from 'react';

interface Bug {
  id: string;
  line: number;
  type: 'syntax' | 'logic' | 'runtime' | 'edge-case';
  description: string;
  hint: string;
}

interface CodeChallenge {
  id: string;
  title: string;
  code: string[];
  bugs: Bug[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  language: string;
}

const challenges: CodeChallenge[] = [
  {
    id: 'react-hook',
    title: 'React useState Hook',
    difficulty: 'Easy',
    language: 'JavaScript',
    code: [
      'function Counter() {',
      '  const [count, setCount] = useState(0);',
      '',
      '  const increment = () => {',
      '    setCount(count + 1);',
      '    setCount(count + 1); // Double increment?',
      '  };',
      '',
      '  return (',
      '    <div>',
      '      <p>Count: {count}</p>',
      '      <button onClick={increment}>+</button>',
      '    </div>',
      '  );',
      '}',
    ],
    bugs: [
      {
        id: 'stale-closure',
        line: 5,
        type: 'logic',
        description:
          'Stale closure - both setCount calls use the same count value',
        hint: 'State updates are asynchronous. Consider using the functional update pattern.',
      },
      {
        id: 'double-increment',
        line: 6,
        type: 'logic',
        description: "Redundant state update - this won't increment by 2",
        hint: "Multiple setState calls with the same value don't accumulate.",
      },
    ],
  },
  {
    id: 'async-function',
    title: 'Async Data Fetching',
    difficulty: 'Medium',
    language: 'JavaScript',
    code: [
      'async function fetchUserData(userId) {',
      '  const response = await fetch(`/api/users/${userId}`);',
      '  const userData = response.json();',
      '  ',
      '  if (userData.status === "active") {',
      '    return userData;',
      '  }',
      '  ',
      '  throw new Error("User not active");',
      '}',
      '',
      'fetchUserData(123).then(user => {',
      '  console.log(user.name.toUpperCase());',
      '});',
    ],
    bugs: [
      {
        id: 'missing-await',
        line: 3,
        type: 'runtime',
        description: 'Missing await - response.json() returns a Promise',
        hint: 'JSON parsing is also asynchronous and needs await.',
      },
      {
        id: 'no-error-handling',
        line: 12,
        type: 'edge-case',
        description: 'No error handling for the Promise chain',
        hint: 'What happens if the API call fails or user.name is undefined?',
      },
      {
        id: 'null-reference',
        line: 13,
        type: 'edge-case',
        description: 'Potential null reference if user.name is undefined',
        hint: 'API responses might not always have the expected structure.',
      },
    ],
  },
  {
    id: 'array-loop',
    title: 'Array Processing',
    difficulty: 'Hard',
    language: 'JavaScript',
    code: [
      'function processOrders(orders) {',
      '  let total = 0;',
      '  const validOrders = [];',
      '  ',
      '  for (let i = 0; i <= orders.length; i++) {',
      '    const order = orders[i];',
      '    ',
      '    if (order.amount > 0) {',
      '      total += order.amount;',
      '      validOrders.push(order);',
      '    }',
      '  }',
      '  ',
      '  const average = total / validOrders.length;',
      '  ',
      '  return {',
      '    total: total,',
      '    average: average,',
      '    count: validOrders.length',
      '  };',
      '}',
    ],
    bugs: [
      {
        id: 'off-by-one',
        line: 5,
        type: 'runtime',
        description: 'Off-by-one error: should be i < orders.length',
        hint: 'Array indices go from 0 to length-1, not length.',
      },
      {
        id: 'division-by-zero',
        line: 13,
        type: 'edge-case',
        description: 'Division by zero if no valid orders exist',
        hint: 'What happens if validOrders.length is 0?',
      },
      {
        id: 'null-property-access',
        line: 7,
        type: 'runtime',
        description:
          'No null check - order might be undefined due to off-by-one error',
        hint: 'Due to the loop condition, order could be undefined on the last iteration.',
      },
    ],
  },
];

export default function BugHunter() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [foundBugs, setFoundBugs] = useState<string[]>([]);
  const [selectedLine, setSelectedLine] = useState<number | null>(null);
  const [showHint, setShowHint] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const challenge = challenges[currentChallenge];
  const allBugsFound = challenge.bugs.every((bug) =>
    foundBugs.includes(bug.id)
  );

  const handleLineClick = (lineIndex: number) => {
    if (!gameStarted) return;

    setSelectedLine(lineIndex);
    const bugOnLine = challenge.bugs.find((bug) => bug.line === lineIndex + 1);

    if (bugOnLine && !foundBugs.includes(bugOnLine.id)) {
      setFoundBugs([...foundBugs, bugOnLine.id]);
      setScore(
        score +
          (challenge.difficulty === 'Easy'
            ? 10
            : challenge.difficulty === 'Medium'
              ? 20
              : 30)
      );
      setShowHint(bugOnLine.id);
      setTimeout(() => setShowHint(null), 3000);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setFoundBugs([]);
    setScore(0);
    setSelectedLine(null);
    setShowHint(null);
  };

  const nextChallenge = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1);
      setFoundBugs([]);
      setSelectedLine(null);
      setShowHint(null);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-600 bg-green-100';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'Hard':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  if (!gameStarted) {
    return (
      <div className="p-6 h-full flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            🐛 Bug Hunter
          </h1>
          <p className="text-gray-600 mb-6">
            Welcome to Bug Hunter! Use your QA skills to find bugs in code
            snippets. Click on lines where you spot issues.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h3 className="font-semibold mb-2">Scoring:</h3>
            <div className="text-sm space-y-1">
              <div>🟢 Easy: 10 points per bug</div>
              <div>🟡 Medium: 20 points per bug</div>
              <div>🔴 Hard: 30 points per bug</div>
            </div>
          </div>
          <button
            onClick={startGame}
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-medium"
          >
            Start Hunting! 🎯
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold">🐛 Bug Hunter</h2>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}
          >
            {challenge.difficulty}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            Challenge {currentChallenge + 1} of {challenges.length}
          </div>
          <div className="font-bold text-teal-600">Score: {score}</div>
        </div>
      </div>

      {/* Challenge Info */}
      <div className="bg-white border-b p-4">
        <h3 className="font-semibold text-lg mb-1">{challenge.title}</h3>
        <p className="text-sm text-gray-600">
          Language: {challenge.language} | Bugs Found: {foundBugs.length}/
          {challenge.bugs.length}
        </p>
      </div>

      {/* Code Editor */}
      <div className="flex-1 bg-gray-900 text-gray-100 font-mono text-sm overflow-auto">
        <div className="p-4">
          {challenge.code.map((line, index) => {
            const lineNumber = index + 1;
            const hasBug = challenge.bugs.some(
              (bug) => bug.line === lineNumber
            );
            const bugFound = challenge.bugs.find(
              (bug) => bug.line === lineNumber && foundBugs.includes(bug.id)
            );
            const isSelected = selectedLine === index;

            return (
              <div
                key={index}
                className={`flex hover:bg-gray-800 cursor-pointer transition-colors ${
                  isSelected ? 'bg-teal-900' : ''
                } ${bugFound ? 'bg-green-900' : ''}`}
                onClick={() => handleLineClick(index)}
              >
                <div className="w-12 text-gray-500 text-right pr-4 select-none">
                  {lineNumber}
                </div>
                <div className="flex-1 relative">
                  {line}
                  {bugFound && (
                    <span className="ml-2 text-green-400">✓ Bug found!</span>
                  )}
                  {hasBug && !bugFound && (
                    <span className="absolute -left-2 text-red-400 animate-pulse">
                      ●
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bug Feedback */}
      {showHint && (
        <div className="bg-green-100 border-l-4 border-green-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-green-500">✓</span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                <strong>Bug Found!</strong>{' '}
                {challenge.bugs.find((b) => b.id === showHint)?.description}
              </p>
              <p className="text-xs text-green-600 mt-1">
                💡 {challenge.bugs.find((b) => b.id === showHint)?.hint}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Challenge Complete */}
      {allBugsFound && (
        <div className="bg-teal-100 border-l-4 border-teal-500 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-teal-800">
                🎉 Challenge Complete!
              </p>
              <p className="text-sm text-teal-600">
                You found all {challenge.bugs.length} bugs! +
                {challenge.bugs.length * 5} bonus points
              </p>
            </div>
            {currentChallenge < challenges.length - 1 && (
              <button
                onClick={nextChallenge}
                className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
              >
                Next Challenge →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
