import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract Icon representing the logo shape */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 90 C 20 90 10 50 30 30" stroke="#6eb43f" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M50 90 C 80 90 90 50 70 30" stroke="#007cc2" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M50 20 L 50 40" stroke="#e63e26" strokeWidth="8" strokeLinecap="round" />
          <circle cx="50" cy="50" r="10" fill="#f4b800" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-xl tracking-wide text-gray-900">
          TRIÓNICA
        </span>
        <div className="relative">
          <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-gray-600 uppercase">
            Moçambique
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-trio-yellow"></div>
          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-trio-green"></div>
        </div>
      </div>
    </div>
  );
};