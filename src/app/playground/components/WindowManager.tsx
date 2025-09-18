'use client';

import { useState, ReactNode, forwardRef, useImperativeHandle } from 'react';
import Window from './Window';
import Terminal from './apps/Terminal';
import TextEditor from './apps/TextEditor';
import AboutMe from './apps/AboutMe';
import BugHunter from './apps/BugHunter';
import MusicPlayer from './apps/MusicPlayer';
import SoundStudio from './apps/SoundStudio';

interface AppWindow {
  id: string;
  title: string;
  content: ReactNode;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isMinimized: boolean;
  isMaximized: boolean;
  originalPosition?: { x: number; y: number };
  originalSize?: { width: number; height: number };
  zIndex: number;
}

export interface WindowManagerRef {
  openApp: (appType: string) => void;
}

const WindowManager = forwardRef<WindowManagerRef>(function WindowManager(props, ref) {
  const [windows, setWindows] = useState<AppWindow[]>([
    {
      id: 'welcome',
      title: 'Welcome to TylerOS',
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-3">Welcome to TylerOS!</h2>
          <p className="mb-2">A browser-based operating system built with React and TypeScript.</p>
          <p className="text-sm text-gray-600">
            Try dragging windows around, opening applications, and exploring the OS!
          </p>
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm font-medium mb-2">Available Applications:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button 
                onClick={() => openApp('terminal')}
                className="p-2 bg-black text-green-400 rounded text-left"
              >
                📟 Terminal
              </button>
              <button 
                onClick={() => openApp('texteditor')}
                className="p-2 bg-blue-50 border rounded text-left"
              >
                📝 Text Editor
              </button>
              <button 
                onClick={() => openApp('about')}
                className="p-2 bg-purple-50 border rounded text-left"
              >
                👤 About Me
              </button>
              <button 
                onClick={() => openApp('bughunter')}
                className="p-2 bg-red-50 border rounded text-left"
              >
                🐛 Bug Hunter
              </button>
            </div>
          </div>
        </div>
      ),
      position: { x: 50, y: 50 },
      size: { width: 400, height: 320 },
      isMinimized: false,
      isMaximized: false,
      zIndex: 1
    }
  ]);

  const [highestZIndex, setHighestZIndex] = useState(1);

  const openApp = (appType: string) => {
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);

    // Mobile-responsive default positioning and sizing
    const isMobile = window.innerWidth <= 768;
    const mobileOffset = isMobile ? 20 : 0;
    const mobileWidth = isMobile ? Math.min(window.innerWidth - 40, 600) : 0;
    const mobileHeight = isMobile ? Math.min(window.innerHeight - 120, 500) : 0;

    const apps: Record<string, Omit<AppWindow, 'id' | 'zIndex'>> = {
      terminal: {
        title: 'Terminal',
        content: <Terminal />,
        position: { x: isMobile ? mobileOffset : 150, y: isMobile ? mobileOffset : 120 },
        size: { width: isMobile ? mobileWidth : 600, height: isMobile ? mobileHeight : 400 },
        isMinimized: false,
        isMaximized: false
      },
      texteditor: {
        title: 'Text Editor',
        content: <TextEditor />,
        position: { x: isMobile ? mobileOffset : 200, y: isMobile ? mobileOffset : 100 },
        size: { width: isMobile ? mobileWidth : 700, height: isMobile ? mobileHeight : 500 },
        isMinimized: false,
        isMaximized: false
      },
      about: {
        title: 'About Tyler James-Bridges',
        content: <AboutMe />,
        position: { x: isMobile ? mobileOffset : 250, y: isMobile ? mobileOffset : 80 },
        size: { width: isMobile ? mobileWidth : 600, height: isMobile ? mobileHeight : 550 },
        isMinimized: false,
        isMaximized: false
      },
      bughunter: {
        title: 'Bug Hunter - QA Game',
        content: <BugHunter />,
        position: { x: isMobile ? mobileOffset : 100, y: isMobile ? mobileOffset : 60 },
        size: { width: isMobile ? mobileWidth : 800, height: isMobile ? mobileHeight : 600 },
        isMinimized: false,
        isMaximized: false
      },
      music: {
        title: 'Music Player',
        content: <MusicPlayer />,
        position: { x: isMobile ? mobileOffset : 150, y: isMobile ? mobileOffset : 100 },
        size: { width: isMobile ? mobileWidth : 900, height: isMobile ? mobileHeight : 650 },
        isMinimized: false,
        isMaximized: false
      },
      soundstudio: {
        title: '🎹 QA Sound Studio',
        content: <SoundStudio />,
        position: { x: isMobile ? mobileOffset : 200, y: isMobile ? mobileOffset : 80 },
        size: { width: isMobile ? mobileWidth : 500, height: isMobile ? mobileHeight : 550 },
        isMinimized: false,
        isMaximized: false
      }
    };

    const appConfig = apps[appType];
    if (appConfig) {
      const newWindow: AppWindow = {
        id: `${appType}-${Date.now()}`,
        zIndex: newZIndex,
        ...appConfig
      };
      setWindows([...windows, newWindow]);
    }
  };

  useImperativeHandle(ref, () => ({
    openApp
  }));

  const handleClose = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const handleMinimize = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  };

  const handleMaximize = (id: string) => {
    setWindows(windows.map(w => {
      if (w.id === id) {
        if (w.isMaximized) {
          // Restore to original position and size
          return {
            ...w,
            isMaximized: false,
            position: w.originalPosition || w.position,
            size: w.originalSize || w.size,
            originalPosition: undefined,
            originalSize: undefined
          };
        } else {
          // Maximize: save current position/size and set to fullscreen
          return {
            ...w,
            isMaximized: true,
            originalPosition: w.position,
            originalSize: w.size
          };
        }
      }
      return w;
    }));
  };

  const handleFocus = (id: string) => {
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);
    setWindows(windows.map(w => 
      w.id === id ? { ...w, zIndex: newZIndex } : w
    ));
  };

  const handlePositionChange = (id: string, position: { x: number; y: number }) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, position } : w
    ));
  };

  const handleSizeChange = (id: string, size: { width: number; height: number }) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, size } : w
    ));
  };

  return (
    <>
      {windows.map(window => (
        !window.isMinimized && (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            position={window.position}
            size={window.size}
            zIndex={window.zIndex}
            isMaximized={window.isMaximized}
            onClose={() => handleClose(window.id)}
            onMinimize={() => handleMinimize(window.id)}
            onMaximize={() => handleMaximize(window.id)}
            onFocus={() => handleFocus(window.id)}
            onPositionChange={(pos) => handlePositionChange(window.id, pos)}
            onSizeChange={(size) => handleSizeChange(window.id, size)}
          >
            {window.content}
          </Window>
        )
      ))}
    </>
  );
});

export default WindowManager;