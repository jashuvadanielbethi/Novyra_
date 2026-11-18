import React from 'react';

interface NovyraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export const NovyraLogo: React.FC<NovyraLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const symbolSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.26em]',
    md: 'text-xl tracking-[0.28em]',
    lg: 'text-2xl tracking-[0.30em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none shrink-0 whitespace-nowrap ${className}`}>
      {/* Preserved geometric NOVYRA 'N' ribbon mark rendered in champagne gold */}
      <svg
        className={`${symbolSizes[size]} shrink-0`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="novyraGoldPrimary" x1="6" y1="34" x2="26" y2="6" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A98B59" />
            <stop offset="55%" stopColor="#C5A46D" />
            <stop offset="100%" stopColor="#E3CFA4" />
          </linearGradient>
          <linearGradient id="novyraGoldDiagonal" x1="10" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E3CFA4" />
            <stop offset="100%" stopColor="#A98B59" />
          </linearGradient>
        </defs>

        {/* Left vertical pillar */}
        <path
          d="M8.5 32.5C6.5 32.5 5 31 5 29V11C5 9 6.5 7.5 8.5 7.5C10.5 7.5 12 9 12 11V29C12 31 10.5 32.5 8.5 32.5Z"
          fill="url(#novyraGoldPrimary)"
        />

        {/* Diagonal architectural bridge */}
        <path
          d="M8.2 9.2L28.8 30.8C30.2 32.2 32.5 31.8 33.5 30C34.2 28.8 34 27.2 33 26.2L14.5 7.5C13.2 6.2 11 6.5 10 8.2L8.2 9.2Z"
          fill="url(#novyraGoldDiagonal)"
        />

        {/* Right vertical pillar */}
        <path
          d="M31.5 32.5C29.5 32.5 28 31 28 29V11C28 9 29.5 7.5 31.5 7.5C33.5 7.5 35 9 35 11V29C35 31 33.5 32.5 31.5 32.5Z"
          fill="url(#novyraGoldPrimary)"
        />
      </svg>

      {showWordmark && (
        <span
          className={`font-display font-semibold uppercase text-[#F5F1E9] leading-none ${textSizes[size]}`}
        >
          NOVYRA
        </span>
      )}
    </div>
  );
};
