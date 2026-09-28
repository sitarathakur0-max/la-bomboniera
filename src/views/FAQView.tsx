import React, { useState } from 'react';
import { ChevronDown, Search, Phone, HelpCircle, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, FAQS } from '../data/businessData';

interface FAQViewProps {
  onNavigate: (page: PageId) => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 lg:space-y-16 py-8 lg:py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
            Helpful Information
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#231e1a] font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-[#594d40] leading-relaxed">
            Everything you need to know about our Italian-themed gifts, milestone favor packages, local Chicago courier delivery, and visiting our shop.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'delivery', label: 'Delivery & Same-Day' },
              { id: 'favors', label: 'Bomboniere & Favors' },
              { id: 'visiting', label: 'Visiting & Parking' },
              { id: 'general', label: 'Ordering & Custom' },
            ].map((cat) => (
              <button
                key={cat.id}
                id={`faq-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#874e2a] text-white shadow-xs'
                    : 'bg-white text-[#524538] border border-[#d6c4aa] hover:bg-[#f5ede2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-[#8a7b6b] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="faq-search-input"
              type="text"
              placeholder="Search FAQ keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#d6c4aa] rounded-full focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
            />
          </div>
        </div>
      </section>

      {/* Accordion Questions List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-[#e2d5c3] p-8 space-y-3">
            <HelpCircle className="w-10 h-10 text-[#a89988] mx-auto" />
            <h3 className="font-serif text-lg font-bold text-[#231e1a]">
              No matching questions found
            </h3>
            <p className="text-xs text-[#6e5f50]">
              Need a direct answer right away? Please call our shop team directly at (773) 725-9000.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold bg-[#874e2a] text-white rounded-md"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndices.includes(index);
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#dfd2be] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    id={`faq-accordion-toggle-${index}`}
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#231e1a] hover:bg-[#faf7f2] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#874e2a] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-[#524538] leading-relaxed border-t border-[#f0e7d8]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Still Have Questions Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5ede2] rounded-2xl border border-[#d6c4aa] p-8 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#231e1a]">
            Have a Question Not Listed Here?
          </h3>
          <p className="text-sm text-[#5c5043] max-w-lg mx-auto">
            We are always happy to answer questions regarding gift availability, special custom colors, or specific Chicago delivery coordinates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              id="faq-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#874e2a] hover:bg-[#724021] text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call (773) 725-9000</span>
            </a>

            <button
              id="faq-contact-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#fbf7f2] text-[#231e1a] border border-[#d6c4aa] text-xs sm:text-sm font-semibold rounded-md transition-colors"
            >
              <span>Contact Form & Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
