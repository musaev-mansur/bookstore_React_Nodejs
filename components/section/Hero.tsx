/// <reference lib="dom" />
import React from 'react';
import { ComicButton } from '../ComicUI';
import { Language } from '../../types';

const heroTranslations = {
  RU: {
    memory: "В память о героях",
    retrospectrum: "РЕТРОСПЕКТР",
    taimaskha: "ТАЙМАСХА",
    subtitle: "ПЕРВЫЙ ЧЕЧЕНСКИЙ ГРАФИЧЕСКИЙ РОМАН",
    description: "Ретроспектр - это экспериментальная серия работ, в которых реминесценция на исторических героев Чеченской Республики обыгрывается через призму дигитизации современного и ближайшего будущего с целью иллюстрации вероятного влияния на читателя/зрителя - сегодня и завтра, а также для альтернативной реставрации героев.",
    order: "ЗАКАЗАТЬ",
    explore: "ИССЛЕДОВАТЬ ИСТОРИЮ"
  },
  EN: {
    memory: "In Memory of the Heroes",
    retrospectrum: "RETROSPECTRUM",
    taimaskha: "TAIMASKHA",
    subtitle: "THE FIRST CHECHEN GRAPHIC NOVEL",
    description: "Retrospectrum is an experimental series of works in which reminiscence of historical heroes of the Chechen Republic is played out through the prism of digitization of the present and near future in order to illustrate the probable impact on the reader/viewer - today and tomorrow, as well as for alternative restoration of heroes.",
    order: "ORDER",
    explore: "EXPLORE HISTORY"
  },
  FR: {
    memory: "À la mémoire des héros",
    retrospectrum: "RETROSPECTRUM",
    taimaskha: "TAIMASKHA",
    subtitle: "LE PREMIER ROMAN GRAPHIQUE TCHÉTCHÈNE",
    description: "Rétrospectrum est une série expérimentale d'œuvres dans lesquelles la réminiscence des héros historiques de la République tchétchène est jouée à travers le prisme de la numérisation du présent et du futur proche afin d'illustrer l'impact probable sur le lecteur/spectateur - aujourd'hui et demain, ainsi que pour la restauration alternative des héros.",
    order: "COMMANDER",
    explore: "EXPLORER L'HISTOIRE"
  },
  NL: {
    memory: "Ter nagedachtenis aan de helden",
    retrospectrum: "RETROSPECTRUM",
    taimaskha: "TAIMASKHA",
    subtitle: "DE EERSTE TSJETSJEENSE GRAFISCHE NOVEL",
    description: "Retrospectrum is een experimentele reeks werken waarin reminiscentie aan historische helden van de Tsjetsjeense Republiek wordt gespeeld door het prisma van digitalisering van het heden en de nabije toekomst om de waarschijnlijke impact op de lezer/kijker te illustreren - vandaag en morgen, evenals voor alternatieve restauratie van helden.",
    order: "BESTELLEN",
    explore: "GESCHIEDENIS ONTDEKKEN"
  }
};

export const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = heroTranslations[lang];
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-noir">
      {/* 3D Mountain Environment - Procedural Generation via SVG */}
      <div className="absolute inset-0 z-0 bg-[#08080c]">
        {/* Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#151520] to-[#251a20]" />

        {/* Grid Floor / Ceiling effect for Cyberpunk feel */}
        <div className="absolute top-0 w-full h-1/3 bg-[linear-gradient(to_bottom,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:100%_40px] opacity-20" />

        <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 1080">
            <defs>
                <linearGradient id="mtnGrad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a1a2e" />
                    <stop offset="100%" stopColor="#05050a" />
                </linearGradient>
                <linearGradient id="wireframeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#00f0ff" stopOpacity="0"/>
                </linearGradient>
                <pattern id="gridPatternMtn" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <path d="M0 0 H50 V50 H0 Z" fill="none" stroke="#00f0ff" strokeWidth="0.5" opacity="0.1"/>
                </pattern>
            </defs>

            {/* Far Background Mountains - Massive 3D shapes */}
            <path d="M0 1080 L300 400 L600 900 L900 300 L1400 900 L1920 500 V1080 H0 Z" fill="#0a0a0f" opacity="0.8" />

            {/* Mid-ground 3D Faceted Mountains */}
            <g transform="translate(0, 100)">
              {/* Left Range - Faceted */}
              <path d="M-100 1080 L200 500 L500 1080" fill="url(#mtnGrad1)" stroke="#333" strokeWidth="1" />
              <path d="M200 500 L500 1080 L600 600" fill="#111" stroke="#333" strokeWidth="1" />

              {/* Wireframe Overlay on Mountains (Interwoven Modernism) */}
              <path d="M200 500 L500 1080 L350 800 Z" fill="url(#gridPatternMtn)" />
              <path d="M1200 1080 L1500 400 L1800 1080" fill="#0f0f15" stroke="#8a1c1c" strokeWidth="1" />

              {/* Digital Peaks */}
              <path d="M1500 400 L1800 1080 L1650 700" fill="none" stroke="#8a1c1c" strokeWidth="0.5" strokeDasharray="10,10" />
              <path d="M800 1080 L1000 700 L1200 1080" fill="#050505" stroke="#00f0ff" strokeWidth="2" strokeOpacity="0.2" />
            </g>
        </svg>
      </div>

      {/* Hero Tower - 3D Perspective Model */}
      <div className="absolute right-[0%] md:right-[10%] bottom-[-5%] h-[75vh] md:h-[95vh] w-[50vh] md:w-[70vh] z-10 pointer-events-none">
         <svg viewBox="0 0 400 800" className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            <defs>
               <linearGradient id="towerLight" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2b2b2b" />
                  <stop offset="100%" stopColor="#1a1a1a" />
               </linearGradient>
               <linearGradient id="towerDark" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#111" />
                  <stop offset="100%" stopColor="#000" />
               </linearGradient>
            </defs>

            {/* 3D TOWER CONSTRUCTION */}
            {/* We are looking up at the tower. It has two visible faces meeting at a central vertical edge. */}
            
            {/* Left Face (Lit) */}
            <path d="M200 100 L100 130 L60 800 L200 800 Z" fill="url(#towerLight)" stroke="#333" />
            
            {/* Right Face (Shadow) */}
            <path d="M200 100 L300 130 L340 800 L200 800 Z" fill="url(#towerDark)" stroke="#222" />

            {/* Central Edge Highlight */}
            <line x1="200" y1="100" x2="200" y2="800" stroke="#444" strokeWidth="2" />

            {/* Roof (Pyramidal Step) */}
            <path d="M200 20 L100 130 L200 100 Z" fill="#d4af37" opacity="0.8" />
            <path d="M200 20 L300 130 L200 100 Z" fill="#8a1c1c" opacity="0.6" />

            {/* Roof Top Cap */}
            <path d="M200 20 L200 10" stroke="#d4af37" strokeWidth="2" />

            {/* Mashikuli (Defensive Balconies) at top of walls */}
            <path d="M100 130 L90 150 M200 100 L200 800" stroke="none" />

            {/* Stone Texture Details (Interwoven with tech) */}
            <g opacity="0.4">
              <path d="M110 200 H190 M105 300 H195 M102 400 H198" stroke="#333" strokeWidth="1" />
              <path d="M210 200 H290 M205 300 H295 M202 400 H298" stroke="#222" strokeWidth="1" />
            </g>

            {/* WINDOW / PETROGLYPH */}
            {/* On the Left Face (Lit) */}
            <rect x="130" y="250" width="40" height="60" rx="2" fill="#000" stroke="#333" />

            {/* Holographic Projection from Window */}
            <path d="M150 280 L80 400 L220 400 Z" fill="url(#gridPatternMtn)" opacity="0.3" className="animate-pulse" />
            <circle cx="150" cy="280" r="5" fill="#00f0ff" className="animate-pulse" filter="blur(2px)" />

            {/* Modern Interwoven Elements - Glitch Lines */}
            <path d="M200 100 L200 800" stroke="#chechen-red" strokeWidth="2" opacity="0.3" strokeDasharray="100,50" />
            <path d="M60 800 L100 130" stroke="#00f0ff" strokeWidth="1" opacity="0.2" />
            <path d="M340 800 L300 130" stroke="#00f0ff" strokeWidth="1" opacity="0.2" />

         </svg>
      </div>

      {/* Foreground Fog / Mountain Base to blend tower */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-noir via-noir/90 to-transparent z-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center flex flex-col items-center pt-10">
        <div className="inline-flex items-center gap-3 mb-6 opacity-80">
           <div className="h-px w-12 bg-antique-gold" />
           <span className="font-cyber text-xs md:text-sm text-antique-gold tracking-[0.3em] uppercase">
             {t.memory}
           </span>
           <div className="h-px w-12 bg-antique-gold" />
        </div>

        <h1 className="flex flex-col items-center justify-center leading-none mb-4 drop-shadow-2xl">
          {/* Futuristic Upper Title */}
          <span className="font-cyber font-bold text-3xl md:text-5xl tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">
            {t.retrospectrum}
          </span>
          {/* Ancient Script Lower Title */}
          <span className="font-ancient text-5xl md:text-7xl text-white tracking-widest relative">
            {t.taimaskha}
            {/* Glitch Overlay for Interwoven effect */}
            <span className="absolute top-0 left-0 -ml-1 opacity-30 text-chechen-red animate-pulse pointer-events-none">{t.taimaskha}</span>
            <span className="absolute top-0 left-0 ml-1 opacity-30 text-spectral-cyan animate-pulse pointer-events-none" style={{animationDelay: '0.1s'}}>{t.taimaskha}</span>
          </span>
        </h1>

        <div className="relative mb-10 mt-4">
          <div className="absolute -inset-1 blur-md bg-chechen-red/30 rounded-lg"></div>
          <h2 className="relative font-ancient text-lg md:text-2xl text-chechen-red tracking-wider px-6 py-2 border-y border-chechen-red/50 bg-noir/80">
            {t.subtitle}
          </h2>
        </div>

        <p className="max-w-2xl mx-auto text-base md:text-lg font-sans font-light text-gray-300 mb-12 leading-relaxed drop-shadow-md bg-noir/40 backdrop-blur-sm p-4 rounded-xl border border-white/5">
          {t.description}
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <ComicButton onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.order}
          </ComicButton>
          <button 
            onClick={() => document.getElementById('description')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-spectral-cyan font-cyber text-base tracking-widest hover:text-white transition-colors border-b border-spectral-cyan/30 hover:border-spectral-cyan pb-1"
          >
            {t.explore}
          </button>
        </div>

        {/* Floating Abstract Elements */}
        <div className="absolute top-1/2 left-10 hidden lg:block opacity-30">
           <div className="w-px h-32 bg-gradient-to-b from-transparent via-antique-gold to-transparent" />
           <div className="text-[10px] font-cyber text-antique-gold mt-2 -ml-2 rotate-90 tracking-widest">EST. 18XX</div>
        </div>
      </div>
    </section>
  );
};