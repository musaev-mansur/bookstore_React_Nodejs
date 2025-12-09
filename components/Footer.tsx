import React from 'react';
import { FooterBloodPool } from './BloodEffects';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-noir border-t border-white/10 py-16 text-center relative overflow-hidden">
      {/* Blood Pool Effect */}
      <FooterBloodPool />

      {/* Ushkaloy Twin Towers Background Illustration */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20 pointer-events-none z-10">
         <svg viewBox="0 0 1000 300" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
            <linearGradient id="rockGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#333" stopOpacity="0" />
              <stop offset="100%" stopColor="#333" stopOpacity="0.8" />
            </linearGradient>

            {/* Rock Niche / Overhang shape */}
            <path d="M0,0 Q250,150 500,50 Q750,-50 1000,0 V300 H0 Z" fill="url(#rockGradient)" stroke="#444" strokeWidth="0.5" opacity="0.5"/>

            {/* The Ushkaloy Twin Towers */}
            <g transform="translate(500, 180)" fill="#1a1a20" stroke="#333" strokeWidth="1">
               {/* Left Tower */}
               <path d="M-40,120 L-35,0 L-15,0 L-10,120 Z" />
               <path d="M-35,10 h20 M-34,30 h18 M-33,50 h16" strokeOpacity="0.3" />
               {/* Left Tower Entrance */}
               <path d="M-30,80 h10 v15 h-10 Z" fill="#000" />

               {/* Right Tower */}
               <path d="M10,120 L15,0 L35,0 L40,120 Z" />
               <path d="M15,10 h20 M16,30 h18 M17,50 h16" strokeOpacity="0.3" />
               {/* Right Tower Entrance */}
               <path d="M20,80 h10 v15 h-10 Z" fill="#000" />
            </g>

            {/* River Line - changed to reflect the blood pool theme */}
            <path d="M0,300 C300,280 700,290 1000,295" stroke="#8a1c1c" strokeWidth="2" strokeOpacity="0.3" fill="none" />
         </svg>
      </div>

      {/* Footer Glitch Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/5 z-0" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/5 z-0" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="mb-8 flex justify-center gap-6">
          <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110 group">
            <Instagram size={20} className="group-hover:stroke-chechen-red" />
          </a>
          <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110 group">
            <Twitter size={20} className="group-hover:stroke-chechen-red" />
          </a>
          <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110 group">
            <Facebook size={20} className="group-hover:stroke-chechen-red" />
          </a>
        </div>

        <h4 className="text-2xl font-ancient font-bold text-white mb-2 tracking-widest">RETROSPECTRUM</h4>
        <p className="font-cyber font-bold text-gray-500 text-sm mb-8 tracking-[0.2em] uppercase">Taimaskha Chronicles // Vol. 1</p>

        <div className="text-xs text-gray-600 font-cyber font-bold flex flex-col md:flex-row justify-center gap-4">
           <span>© {new Date().getFullYear()} Retrospectrum. All rights reserved.</span>
           <span className="hidden md:inline">|</span>
           <a href="#" className="hover:text-spectral-cyan transition-colors">Privacy Protocol</a>
           <a href="#" className="hover:text-spectral-cyan transition-colors">Terms of Engagement</a>
        </div>
      </div>
    </footer>
  );
};

