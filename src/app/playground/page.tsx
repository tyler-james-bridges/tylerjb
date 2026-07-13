'use client';

import { useRef } from 'react';
import Desktop from './components/Desktop';
import WindowManager from './components/WindowManager';
import './os-styles.css';

export default function PlaygroundPage() {
  const windowManagerRef = useRef<{ openApp: (appType: string) => void }>(null);

  const handleOpenApp = (appType: string) => {
    windowManagerRef.current?.openApp(appType);
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <h1 className="sr-only">Playground</h1>
      <Desktop onOpenApp={handleOpenApp}>
        <WindowManager ref={windowManagerRef} />
      </Desktop>
    </div>
  );
}
