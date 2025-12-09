import React, { useState } from 'react';
import { ComicPanel, PetroglyphDecoration } from '../ComicUI';
import { Language } from '../../types';
import { Calendar, Mountain } from 'lucide-react';
import { translations } from '../../data/translations';

export const DescriptionSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="description" className="py-24 bg-noir relative overflow-hidden">
      {/* Background Petroglyphs */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none transform rotate-12">
        <PetroglyphDecoration size={200} color="#d4af37" />
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="md:w-1/2 relative">
          <div 
            className="relative aspect-[3.5/5] cursor-pointer perspective-1000"
            onClick={handleFlip}
            style={{ perspective: '1000px' }}
          >
            <div
              className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
              style={{
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Лицевая сторона обложки */}
              <div
                className="absolute inset-0 w-full h-full backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <ComicPanel variant="gold" className="transform -rotate-1 h-full w-full overflow-visible">
                  <div className="relative h-full w-full">
                    <img src="/images/taymaskha_front.png" alt="Cover" className="h-full w-full object-cover" />
                    <div className="absolute bottom-4 left-4 border-l-2 border-chechen-red pl-4 z-10">
                      <p className="text-white font-ancient text-4xl mb-1 drop-shadow-lg">{translations[lang].cover.title}</p>
                      <p className="text-antique-gold font-cyber text-sm tracking-[0.2em] drop-shadow-lg">{translations[lang].cover.subtitle}</p>
                    </div>
                  </div>
                </ComicPanel>
              </div>

              {/* Обратная сторона обложки */}
              <div
                className="absolute inset-0 w-full h-full backface-hidden rotate-y-180"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <ComicPanel variant="gold" className="transform rotate-1 h-full w-full overflow-visible">
                  <div className="relative h-full w-full bg-noir">
                    <img src="/images/taymaskha_back.png" alt="Cover Back" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                      <PetroglyphDecoration size={80} color="#d4af37" className="mb-6 opacity-60" />
                      <h3 className="text-3xl font-ancient text-antique-gold mb-4 tracking-wider drop-shadow-lg">{translations[lang].cover.backTitle}</h3>
                      <div className="w-24 h-1 bg-chechen-red mb-6" />
                      <p className="text-white font-cyber text-sm tracking-[0.2em] mb-4 uppercase drop-shadow-lg">{translations[lang].cover.backSubtitle}</p>
                      <p className="text-gray-200 font-sans text-xs leading-relaxed max-w-xs drop-shadow-lg">
                        {translations[lang].cover.backDescription}
                      </p>
                      <div className="mt-8 pt-6 border-t border-antique-gold/30 w-full">
                        <p className="text-antique-gold font-cyber text-xs tracking-widest">Vol. 1</p>
                      </div>
                    </div>
                  </div>
                </ComicPanel>
              </div>
            </div>
          </div>
        </div>
      <div className="md:w-1/2 text-left">
        <div className="flex items-center gap-2 mb-4 text-antique-gold font-cyber text-sm tracking-wider">
          <Mountain size={16} />
          <span>{translations[lang].description.location}</span>
          <span className="mx-2 text-gray-600">//</span>
          <Calendar size={16} />
          <span>{translations[lang].description.period}</span>
        </div>
        
        <h3 className="text-3xl md:text-5xl font-ancient text-white mb-6 leading-tight">
          {translations[lang].description.title}<br/>
          <span className="text-chechen-red font-cyber tracking-tighter">{translations[lang].description.subtitle}</span>
        </h3>
        
        <div className="space-y-6 text-lg font-light text-gray-300 leading-relaxed font-sans">
          <p>
            <span className="text-spectral-cyan font-medium font-cyber tracking-wide">{translations[lang].description.intro}</span> {translations[lang].description.text1}
          </p>
          <p>
            {translations[lang].description.text2}
            <span className="text-white font-ancient text-xl border-b border-chechen-red/50">{translations[lang].description.text2Highlight}</span>
            {translations[lang].description.text2End}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
           <div className="border border-antique-gold/30 p-4 bg-noir/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-antique-gold/5 group-hover:bg-antique-gold/10 transition-colors" />
              <h4 className="text-antique-gold font-cyber text-sm mb-2 uppercase tracking-widest">{translations[lang].description.architecture}</h4>
              <p className="font-ancient text-white text-xl">{translations[lang].description.architectureDesc}</p>
           </div>
           <div className="border border-chechen-red/30 p-4 bg-noir/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-chechen-red/5 group-hover:bg-chechen-red/10 transition-colors" />
              <h4 className="text-chechen-red font-cyber text-sm mb-2 uppercase tracking-widest">{translations[lang].description.atmosphere}</h4>
              <p className="font-ancient text-white text-xl">{translations[lang].description.atmosphereDesc}</p>
           </div>
        </div>
      </div>
    </div>
    </section>
  );
};

