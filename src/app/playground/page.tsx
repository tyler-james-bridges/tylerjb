'use client';

import { useState, useEffect, useRef } from 'react';
import Desktop from './components/Desktop';
import WindowManager from './components/WindowManager';
import './os-styles.css';

export default function PlaygroundPage() {
  const [isLoading, setIsLoading] = useState(true);
  const windowManagerRef = useRef<{ openApp: (appType: string) => void }>(null);

  useEffect(() => {
    // Simulate OS boot sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenApp = (appType: string) => {
    windowManagerRef.current?.openApp(appType);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-green-400 font-mono text-xl mb-4">TylerOS v1.0</div>
          <div className="text-green-400 font-mono text-sm animate-pulse">Booting...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Desktop onOpenApp={handleOpenApp}>
        <WindowManager ref={windowManagerRef} />
      </Desktop>
    </div>
  );
}