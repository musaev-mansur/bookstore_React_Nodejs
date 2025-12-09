import React from 'react';
import { SectionTitle, SpeechBubble } from '../ComicUI';
import { Language } from '../../types';
import { REVIEWS, translations } from '../../data/translations';

export const ReviewsSection: React.FC<{ lang: Language }> = ({ lang }) => (
  <section id="reviews" className="py-24 bg-paper relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/images/freedom.jpg')] bg-cover opacity-60" style={{ backgroundPosition: 'center 74%' }} />

    <div className="container mx-auto px-4 relative z-10">
      <SectionTitle subtitle={translations[lang].reviews.subtitle}>{translations[lang].reviews.title}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {REVIEWS[lang].map((review, idx) => (
          <div key={idx} className={idx === 1 ? 'md:translate-y-12' : ''}>
            <SpeechBubble author={review.author} role={review.role}>
              {review.text}
            </SpeechBubble>
          </div>
        ))}
      </div>
    </div>
  </section>
);

