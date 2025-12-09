/// <reference lib="dom" />
import React, { useState, useEffect } from 'react';
import { Hero } from './components/section/Hero';
import { DescriptionSection, StoryPreview, AuthorSection, ReviewsSection, OrderForm } from './components/Content';
import { BloodFlowBackground } from './components/BloodEffects';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('RU');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      {/* Background Blood Flow Effect */}
      <BloodFlowBackground />

      {/* Navigation */}
      <Navigation
        lang={lang}
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        onLanguageChange={setLang}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onScrollToSection={scrollToSection}
      />

      <main className="flex-grow relative z-10">
        <Hero lang={lang} />
        <DescriptionSection lang={lang} />
        <StoryPreview lang={lang} />
        <AuthorSection lang={lang} />
        <ReviewsSection lang={lang} />
        <OrderForm lang={lang} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
