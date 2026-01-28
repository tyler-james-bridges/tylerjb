'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (appType: string) => void;
}

export default function StartMenu({
  isOpen,
  onClose,
  onOpenApp,
}: StartMenuProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const menuItems = [
    {
      id: 'terminal',
      icon: '📟',
      label: 'Terminal',
      description: 'Command line interface',
    },
    {
      id: 'texteditor',
      icon: '📝',
      label: 'Text Editor',
      description: 'Simple text editing',
    },
    {
      id: 'about',
      icon: '👤',
      label: 'About Me',
      description: 'Personal information',
    },
    {
      id: 'bughunter',
      icon: '🐛',
      label: 'Bug Hunter',
      description: 'Find bugs in code - QA game',
    },
    {
      id: 'music',
      icon: '🎵',
      label: 'Music Player',
      description: 'Play music files',
    },
  ];

  const systemItems = [
    {
      id: 'shutdown',
      icon: '🔌',
      label: 'Shutdown',
      description: 'Power off system',
    },
  ];

  const handleItemClick = (id: string) => {
    if (id === 'shutdown') {
      if (confirm('Are you sure you want to shutdown TylerOS?')) {
        router.push('/');
      }
    } else {
      onOpenApp(id);
    }
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[9998]" onClick={onClose} />

      {/* Start Menu */}
      <div className="start-menu">
        <div className="start-menu-header">
          <div className="user-avatar">TJB</div>
          <div className="user-info">
            <div className="username">Tyler James-Bridges</div>
            <div className="user-status">QA Engineer → SWE</div>
          </div>
        </div>

        <div className="start-menu-content">
          <div className="menu-section">
            <h3 className="section-title">Applications</h3>
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="menu-item"
                onClick={() => handleItemClick(item.id)}
              >
                <span className="menu-icon">{item.icon}</span>
                <div className="menu-text">
                  <div className="menu-label">{item.label}</div>
                  <div className="menu-description">{item.description}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="menu-separator" />

          <div className="menu-section">
            <h3 className="section-title">System</h3>
            {systemItems.map((item) => (
              <button
                key={item.id}
                className="menu-item"
                onClick={() => handleItemClick(item.id)}
              >
                <span className="menu-icon">{item.icon}</span>
                <div className="menu-text">
                  <div className="menu-label">{item.label}</div>
                  <div className="menu-description">{item.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="start-menu-footer">
          <div className="system-info">
            TylerOS v4.20 • {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </>
  );
}
