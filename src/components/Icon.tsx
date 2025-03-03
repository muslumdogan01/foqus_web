import React, { CSSProperties } from 'react';
import iconConfig from '../../public/fonts/papyon-icons/config.json';

type IconProps = {
  icon: string;
  size?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
};

export function Icon({
  icon,
  size = 20,
  color = 'black',
  width,
  height,
  className = '',
  style,
}: IconProps) {
  const iconSize = size || width;
  
  // Find the icon data from config
  const iconData = iconConfig.glyphs.find(glyph => glyph.css === icon);
  
  if (!iconData) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  return (
    <svg
      width={iconSize}
      height={iconSize || height}
      viewBox={`0 0 ${iconData.svg.width} ${iconData.svg.width}`}
      className={className}
      style={style}
    >
      <path
        d={iconData.svg.path}
        fill={color}
      />
    </svg>
  );
} 