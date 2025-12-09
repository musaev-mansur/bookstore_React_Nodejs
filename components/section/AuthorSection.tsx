import React from 'react';
import { PetroglyphDecoration } from '../ComicUI';
import { Language } from '../../types';
import { translations } from '../../data/translations';

export const AuthorSection: React.FC<{ lang: Language }> = ({ lang }) => (
  <section id="author" className="py-24 bg-noir relative">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Author Image Frame */}
        <div className="md:w-5/12 relative">
             <div className="absolute inset-0 border-2 border-chechen-red transform translate-x-4 translate-y-4" />
             <div className="relative border-2 border-antique-gold bg-noir p-2">
                <img src="/images/fight-club.jpeg" alt="Adam Salakhanov" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />

                {/* Decorative T-shape overlay */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                   <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="10" y1="10" x2="90" y2="10" stroke="#d4af37" strokeWidth="0.5" />
                      <line x1="50" y1="10" x2="50" y2="90" stroke="#d4af37" strokeWidth="0.5" />
                   </svg>
                </div>
             </div>
        </div>

        <div className="md:w-7/12">
            <div className="mb-6 flex items-center gap-4">
               <PetroglyphDecoration size={32} color="#8a1c1c" />
               <span className="font-cyber font-bold text-chechen-red text-sm tracking-[0.2em] uppercase">{translations[lang].author.label}</span>
            </div>

            <h3 className="text-5xl font-ancient text-white mb-8">{translations[lang].author.name}</h3>

            <div className="prose prose-invert max-w-none font-sans font-light text-gray-300">
              <p className="text-xl mb-6">
                {translations[lang].author.text1}
              </p>
              <p className="mb-6">
                {translations[lang].author.text2}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-3">
               {['#Nikaroy', '#ChechenHistory', '#Cyberpunk', '#AbrekStyle'].map(tag => (
                 <span key={tag} className="text-sm font-cyber font-semibold text-antique-gold border border-antique-gold/20 px-3 py-1 rounded-sm hover:bg-antique-gold/10 cursor-default">
                   {tag}
                 </span>
               ))}
            </div>
        </div>
      </div>
    </div>
  </section>
);

