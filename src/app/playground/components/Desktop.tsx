'use client';

import { ReactNode, useState, useEffect } from 'react';
import StartMenu from './StartMenu';
import SoundStudio from './apps/SoundStudio';

interface DesktopProps {
  children: ReactNode;
  onOpenApp: (appType: string) => void;
}

export default function Desktop({ children, onOpenApp }: DesktopProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const desktopApps = [
    { id: 'soundstudio', icon: '🎹', label: 'QA Sound Studio' },
    { id: 'terminal', icon: '📟', label: 'Terminal' },
    { id: 'texteditor', icon: '📝', label: 'Text Editor' },
    { id: 'about', icon: '/images/profile.jpg', label: 'About Me', isImage: true },
    { id: 'bughunter', icon: '🐛', label: 'Bug Hunter' },
    { id: 'music', icon: '🎵', label: 'Music Player' },
  ];

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  return (
    <div className="desktop-container">
      {/* Desktop wallpaper */}
      <div className="desktop-wallpaper">
        {/* Unified macOS-style dock with apps and sound studio */}
        <div className="absolute bottom-16 md:bottom-24 left-1/2 transform -translate-x-1/2 pointer-events-none max-w-[95vw]">
          <div className="pointer-events-auto">
            <div className="flex gap-2 md:gap-3 p-3 md:p-4 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 shadow-lg overflow-x-auto">
              {/* App icons */}
              {desktopApps.filter(app => app.id !== 'soundstudio').map(app => (
                <button
                  key={app.id}
                  onClick={() => onOpenApp(app.id)}
                  className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-110 hover:bg-white/15 transition-all duration-200 flex items-center justify-center group flex-shrink-0"
                >
                  {app.isImage ? (
                    <img 
                      src={app.icon} 
                      alt={app.label}
                      className="w-6 h-6 md:w-8 md:h-8 object-cover rounded-md"
                    />
                  ) : (
                    <div className="text-lg md:text-2xl">{app.icon}</div>
                  )}
                </button>
              ))}
              
              {/* Divider */}
              <div className="w-px h-10 md:h-12 bg-white/20 self-center mx-1 flex-shrink-0"></div>
              
              {/* QA Sound Studio buttons */}
              <SoundStudio embedded={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Windows container */}
      <div className="windows-container">
        {children}
      </div>

      {/* Start Menu */}
      <StartMenu 
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        onOpenApp={onOpenApp}
      />

      {/* Taskbar */}
      <div className="taskbar">
        <button 
          className={`start-button ${isStartMenuOpen ? 'active' : ''}`}
          onClick={toggleStartMenu}
        >
          <span className="text-sm font-bold">Start</span>
        </button>
        <div className="taskbar-apps">
          {/* Running apps will be shown here */}
        </div>
        <div className="system-tray">
          <span className="clock">{currentTime.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}</span>
        </div>
      </div>
    </div>
  );
}
