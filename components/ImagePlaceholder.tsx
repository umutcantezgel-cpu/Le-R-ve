import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  icon?: string;
  text?: string;
}

export default function ImagePlaceholder({ className = '', icon = 'spa', text }: ImagePlaceholderProps) {
  return (
    <div 
      className={`flex flex-col items-center justify-center bg-surface-container text-primary-container border border-outline-variant/30 w-full h-full absolute inset-0 ${className}`}
      role="img"
      aria-label={text || "Image Placeholder"}
    >
      <span className="material-symbols-outlined text-4xl mb-2 opacity-80" aria-hidden="true">{icon}</span>
      {text && <span className="text-sm font-label-caps uppercase tracking-widest opacity-80">{text}</span>}
    </div>
  );
}
