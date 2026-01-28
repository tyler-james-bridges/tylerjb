'use client';

import { ReactNode, useState, useEffect, useRef } from 'react';

interface WindowProps {
  id: string;
  title: string;
  children: ReactNode;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isMaximized?: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onPositionChange?: (position: { x: number; y: number }) => void;
  onSizeChange?: (size: { width: number; height: number }) => void;
}

export default function Window({
  title,
  children,
  position,
  size,
  zIndex,
  isMaximized = false,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onPositionChange,
  onSizeChange,
}: WindowProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState(position);
  const [currentSize, setCurrentSize] = useState(size);
  const [resizeStartPos, setResizeStartPos] = useState({ x: 0, y: 0 });
  const [resizeStartSize, setResizeStartSize] = useState({
    width: 0,
    height: 0,
  });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentPosition(position);
  }, [position]);

  useEffect(() => {
    setCurrentSize(size);
  }, [size]);

  // Unified pointer event handlers for mouse and touch
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only start drag from title bar, not from buttons
    if ((e.target as HTMLElement).closest('.window-controls')) {
      return;
    }

    // Don't allow dragging maximized windows
    if (isMaximized) {
      return;
    }

    onFocus();
    setIsDragging(true);

    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }

    // Capture pointer for smooth dragging
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  // Resize handle pointer down
  const handleResizePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (isMaximized) {
      return;
    }

    onFocus();
    setIsResizing(true);
    setResizeStartPos({ x: e.clientX, y: e.clientY });
    setResizeStartSize({
      width: currentSize.width,
      height: currentSize.height,
    });

    // Capture pointer for smooth resizing
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  // Double-click title bar to maximize/restore
  const handleTitleBarDoubleClick = () => {
    onMaximize();
  };

  // Unified pointer move and up handlers for dragging
  useEffect(() => {
    if (!isDragging && !isResizing) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const newX = Math.max(
          0,
          Math.min(
            window.innerWidth - currentSize.width,
            e.clientX - dragOffset.x
          )
        );
        const newY = Math.max(
          0,
          Math.min(
            window.innerHeight - 48 - currentSize.height,
            e.clientY - dragOffset.y
          )
        ); // 48px for taskbar

        const newPosition = { x: newX, y: newY };
        setCurrentPosition(newPosition);
        onPositionChange?.(newPosition);
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStartPos.x;
        const deltaY = e.clientY - resizeStartPos.y;

        // Mobile-responsive minimum sizes
        const isMobile = window.innerWidth <= 768;
        const minWidth = isMobile ? Math.min(250, window.innerWidth - 40) : 200;
        const minHeight = isMobile
          ? Math.min(200, window.innerHeight - 120)
          : 150;

        const newWidth = Math.max(
          minWidth,
          Math.min(window.innerWidth - 20, resizeStartSize.width + deltaX)
        );
        const newHeight = Math.max(
          minHeight,
          Math.min(window.innerHeight - 68, resizeStartSize.height + deltaY)
        ); // Account for taskbar

        const newSize = { width: newWidth, height: newHeight };
        setCurrentSize(newSize);
        onSizeChange?.(newSize);
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [
    isDragging,
    isResizing,
    dragOffset,
    currentSize,
    resizeStartPos,
    resizeStartSize,
    onPositionChange,
    onSizeChange,
  ]);

  const windowStyle = isMaximized
    ? {
        left: '0px',
        top: '0px',
        width: '100vw',
        height: 'calc(100vh - 48px)', // Subtract taskbar height
        zIndex,
      }
    : {
        left: `${currentPosition.x}px`,
        top: `${currentPosition.y}px`,
        width: `${currentSize.width}px`,
        height: `${currentSize.height}px`,
        zIndex,
        cursor: isDragging ? 'move' : isResizing ? 'nw-resize' : 'default',
      };

  return (
    <div
      ref={windowRef}
      className={`app-window ${isDragging ? 'dragging' : ''} ${isResizing ? 'resizing' : ''} ${isMaximized ? 'maximized' : ''}`}
      style={windowStyle}
      onPointerDown={onFocus}
    >
      {/* Title bar */}
      <div
        className="window-titlebar"
        onPointerDown={handlePointerDown}
        onDoubleClick={handleTitleBarDoubleClick}
        style={{ touchAction: 'none' }} // Prevent default touch behaviors
      >
        <span className="window-title">{title}</span>
        <div className="window-controls">
          <button
            className="window-control minimize"
            onClick={onMinimize}
            aria-label="Minimize"
          >
            −
          </button>
          <button
            className="window-control maximize"
            onClick={onMaximize}
            aria-label={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? '❐' : '□'}
          </button>
          <button
            className="window-control close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Window content */}
      <div className="window-content">{children}</div>

      {/* Resize handle - only show when not maximized */}
      {!isMaximized && (
        <div
          className="window-resize-handle"
          onPointerDown={handleResizePointerDown}
          style={{ touchAction: 'none' }}
        />
      )}
    </div>
  );
}
