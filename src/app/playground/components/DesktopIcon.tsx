'use client';

import { useState } from 'react';

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
  isImage?: boolean;
}

export default function DesktopIcon({
  icon,
  label,
  onDoubleClick,
  isImage = false,
}: DesktopIconProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleDoubleClick = () => {
    onDoubleClick();
    setIsSelected(false);
  };

  return (
    <div
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="icon-image">
        {isImage ? (
          <img
            src={icon}
            alt={label}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          icon
        )}
      </div>
      <div className="icon-label">{label}</div>
    </div>
  );
}
