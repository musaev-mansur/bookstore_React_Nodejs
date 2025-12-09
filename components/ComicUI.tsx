import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface PanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glitch' | 'gold';
}

export const ComicPanel: React.FC<PanelProps> = ({ children, className = '', variant = 'default' }) => {
  const borderClass = variant === 'gold' ? 'border-antique-gold' :
                      variant === 'glitch' ? 'border-spectral-cyan' : 'border-white/20';

  const shadowClass = variant === 'gold' ? 'hover:shadow-neon-gold' :
                      variant === 'glitch' ? 'hover:shadow-neon-blue' : 'hover:shadow-lg';

  return (
    <div className={`relative group border-4 ${borderClass} bg-noir overflow-hidden transition-all duration-300 ${shadowClass} ${className}`}>
      {children}
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-inherit z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-inherit z-10" />
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const ComicButton: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyle = "relative px-8 py-3 font-cyber text-xl font-bold tracking-widest uppercase transition-all duration-300 clip-comic group overflow-hidden";
  const variants = {
    primary: "bg-chechen-red text-white border-2 border-transparent hover:bg-red-700 hover:shadow-neon-gold",
    secondary: "bg-transparent text-spectral-cyan border-2 border-spectral-cyan hover:bg-spectral-cyan/10 hover:shadow-neon-blue"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
    </button>
  );
};

export const SectionTitle: React.FC<{ children: ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
  <div className="mb-12 text-center relative">
    <h2 className="text-4xl md:text-6xl font-ancient text-transparent bg-clip-text bg-gradient-to-r from-antique-gold via-white to-antique-gold tracking-wider uppercase drop-shadow-md">
      {children}
    </h2>
    {subtitle && (
      <p className="mt-2 font-cyber text-spectral-cyan text-lg tracking-[0.3em] uppercase opacity-80 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-spectral-cyan/50"></span>
        // {subtitle}
        <span className="h-px w-8 bg-spectral-cyan/50"></span>
      </p>
    )}
    <div className="w-24 h-1 bg-chechen-red mx-auto mt-6" />
  </div>
);

export const SpeechBubble: React.FC<{ children: ReactNode; author: string; role?: string }> = ({ children, author, role }) => {
  return (
    <div className="relative p-6 bg-paper text-ink-black font-sans text-lg font-medium leading-relaxed shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] border-2 border-ink-black hover:-translate-y-1 transition-transform">
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-chechen-red flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <p className="italic mb-4 relative z-10">"{children}"</p>
      <div className="mt-4 pt-4 border-t border-ink-black/20 flex flex-col sm:flex-row justify-between sm:items-end gap-1">
        <span className="font-ancient text-xl text-chechen-red">{author}</span>
        {role && <span className="text-sm font-cyber font-bold text-ink-black/60 uppercase tracking-widest">{role}</span>}
      </div>
    </div>
  );
};

export const PetroglyphDecoration: React.FC<{ className?: string, size?: number, color?: string }> = ({ className = '', size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth="3">
    {/* Solar Symbol / Spiral Motif common in Caucasus */}
    <circle cx="50" cy="50" r="40" strokeOpacity="0.5" strokeDasharray="5,5" />
    <path d="M50 10 v80 M10 50 h80" strokeOpacity="0.8" />
    <path d="M22 22 L78 78 M78 22 L22 78" strokeOpacity="0.8" />
    <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" fill="none" strokeWidth="2" />
  </svg>
);