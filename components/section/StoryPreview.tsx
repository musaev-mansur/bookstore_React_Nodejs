import React from 'react';
import { SectionTitle, ComicPanel, PetroglyphDecoration } from '../ComicUI';
import { Language } from '../../types';
import { PREVIEW_PAGES, translations } from '../../data/translations';

export const StoryPreview: React.FC<{ lang: Language }> = ({ lang }) => (
  <section id="pages" className="py-24 bg-zinc-950 border-y border-white/5 relative">
    <div className="absolute inset-0 bg-[url('/images/voice.jpg')] bg-cover bg-center opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      <SectionTitle subtitle={translations[lang].story.subtitle}>{translations[lang].story.title}</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PREVIEW_PAGES[lang].map((page, idx) => (
          <div key={page.id} className="relative group cursor-pointer" style={{ marginTop: idx % 2 !== 0 ? '2rem' : '0' }}>
             <ComicPanel variant={idx % 2 === 0 ? "gold" : "glitch"} className="h-[450px] transition-all duration-500 group-hover:-translate-y-2">
                <img src={page.imageUrl} alt={page.caption} className="w-full h-full object-cover" />

                {/* Overlay with details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center backdrop-blur-sm">
                   <PetroglyphDecoration size={40} className="mb-4 text-white/50" />
                   <h4 className="font-ancient text-2xl text-white mb-2">{page.caption}</h4>
                   <div className="w-12 h-1 bg-chechen-red mb-4" />
                   <p className="font-cyber text-sm text-spectral-cyan tracking-widest">{translations[lang].story.accessing}</p>
                </div>
             </ComicPanel>
          </div>
        ))}
      </div>
    </div>
  </section>
);

