import React from 'react';
import { Language, NavItem } from '../types';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { id: 'description', label: { RU: 'Описание', EN: 'Description', FR: 'Description', NL: 'Beschrijving' } },
  { id: 'author', label: { RU: 'Автор', EN: 'Author', FR: 'Auteur', NL: 'Auteur' } },
  { id: 'pages', label: { RU: 'Страницы', EN: 'Pages', FR: 'Pages', NL: 'Pagina\'s' } },
  { id: 'reviews', label: { RU: 'Отзывы', EN: 'Reviews', FR: 'Avis', NL: 'Beoordelingen' } },
  { id: 'order', label: { RU: 'Заказать', EN: 'Order', FR: 'Commander', NL: 'Bestellen' } },
];

interface NavigationProps {
  lang: Language;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  onLanguageChange: (lang: Language) => void;
  onMobileMenuToggle: () => void;
  onScrollToSection: (id: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  lang,
  isScrolled,
  isMobileMenuOpen,
  onLanguageChange,
  onMobileMenuToggle,
  onScrollToSection,
}) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-noir/90 backdrop-blur-md border-white/10 py-4 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-ancient font-black text-white tracking-wider flex items-center gap-2">
          <div className="w-8 h-8 bg-chechen-red rounded-sm rotate-45 border border-white" />
          <span>RETROSPECTRUM</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => onScrollToSection(item.id)}
                  className="text-sm font-cyber font-bold uppercase tracking-widest text-gray-400 hover:text-spectral-cyan transition-colors"
                >
                  {item.label[lang]}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-white/20" />

          <div className="flex gap-2">
            {(['RU', 'EN', 'FR', 'NL'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onLanguageChange(l)}
                className={`text-xs font-cyber font-bold px-2 py-1 rounded transition-colors ${
                  lang === l ? 'bg-white text-noir' : 'text-gray-500 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={onMobileMenuToggle}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-noir border-b border-spectral-cyan/30 p-8 md:hidden shadow-2xl">
          <ul className="flex flex-col gap-6 text-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => onScrollToSection(item.id)}
                  className="text-xl font-ancient text-white hover:text-chechen-red"
                >
                  {item.label[lang]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

