import React from 'react';

interface NovyraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  lightMode?: boolean;
}

export const NovyraLogo: React.FC<NovyraLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  lightMode = false,
}) => {
  const symbolSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-sm tracking-[0.22em]',
    md: 'text-base tracking-[0.26em]',
    lg: 'text-lg tracking-[0.28em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none font-display ${className}`}>
      {/* Stylized geometric gradient 'N' ribbon mark matching design */}
      <svg
        className={`${symbolSizes[size]} shrink-0 transition-transform duration-200 hover:scale-105`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="novyraGradient1" x1="6" y1="34" x2="22" y2="6" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="novyraGradient2" x1="16" y1="34" x2="34" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="60%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient id="novyraGradientGlow" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left ascending rounded ribbon stem */}
        <path
          d="M8.5 32.5C6.5 32.5 5 31 5 29V11C5 9 6.5 7.5 8.5 7.5C10.5 7.5 12 9 12 11V29C12 31 10.5 32.5 8.5 32.5Z"
          fill="url(#novyraGradient1)"
        />

        {/* Dynamic diagonal bridge */}
        <path
          d="M8.5 8C10.2 8 11.5 8.9 12.8 10.8L28.2 30.2C29.2 31.5 30.8 32 32.2 31.2C33.6 30.4 34.2 28.7 33.5 27.2L20.8 9.5C19.8 8.1 18.2 7.5 16.8 8.1L8.5 8Z"
          fill="url(#novyraGradientGlow)"
        />

        {/* Right ascending rounded ribbon stem with sharp dynamic angle */}
        <path
          d="M8.2 9.2L28.8 30.8C30.2 32.2 32.5 31.8 33.5 30C34.2 28.8 34 27.2 33 26.2L14.5 7.5C13.2 6.2 11 6.5 10 8.2L8.2 9.2Z"
          fill="url(#novyraGradient2)"
        />

        {/* Right vertical column */}
        <path
          d="M31.5 32.5C29.5 32.5 28 31 28 29V11C28 9 29.5 7.5 31.5 7.5C33.5 7.5 35 9 35 11V29C35 31 33.5 32.5 31.5 32.5Z"
          fill="url(#novyraGradient1)"
        />
      </svg>

      {showWordmark && (
        <span
          className={`font-extrabold uppercase ${textSizes[size]} ${
            lightMode ? 'text-white' : 'text-slate-950'
          }`}
          style={{ letterSpacing: '0.28em' }}
        >
          NOVYRA
        </span>
      )}
    </div>
  );
};
