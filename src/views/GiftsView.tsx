import React, { useState } from 'react';
import { Phone, Gift, Truck, Filter, Search, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PageId, GiftItem } from '../types';
import { BUSINESS_INFO, FEATURED_GIFTS, GIFT_CATEGORIES } from '../data/businessData';
import { GiftInquiryModal } from '../components/GiftInquiryModal';

interface GiftsViewProps {
  onNavigate: (page: PageId) => void;
}

export const GiftsView: React.FC<GiftsViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);

  const filteredGifts = FEATURED_GIFTS.filter((gift) => {
    const matchesCategory = activeCategory === 'all' || gift.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      gift.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gift.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gift.idealFor.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 lg:space-y-16 py-8 lg:py-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e2d5c3]">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
              Boutique Catalog
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#231e1a] font-bold tracking-tight">
              Italian Gifts & Celebration Favors
            </h1>
            <p className="text-base sm:text-lg text-[#5c5043] leading-relaxed">
              Explore our collection of authentic Italian keepsakes, traditional bomboniere, ceramic art, and curated gift hampers available for in-store pickup or local Chicago delivery.
            </p>
          </div>

          <div className="bg-[#f0e6d6] p-4 rounded-xl border border-[#d6c4aa] text-xs text-[#524538] space-y-1.5 shrink-0 max-w-xs">
            <span className="font-bold text-[#231e1a] block">Ordering & Availability</span>
            <p>
              Items can be reserved or customized by phone. For local same-day delivery, call by early afternoon:
            </p>
            <a
              id="gifts-catalog-call-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1 font-bold text-[#874e2a] hover:underline"
            >
              <Phone className="w-3 h-3" />
              <span>(773) 725-9000</span>
            </a>
          </div>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {GIFT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-btn-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#874e2a] text-white shadow-xs'
                      : 'bg-white hover:bg-[#f3ebe0] text-[#524538] border border-[#d6c4aa]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-[#8a7b6b] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="gift-search-input"
              type="text"
              placeholder="Search gifts or occasions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#d6c4aa] rounded-full focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
            />
          </div>
        </div>

        {/* Selected Category Description */}
        {activeCategory !== 'all' && (
          <p className="text-xs text-[#736555] italic">
            Showing items in: <strong>{GIFT_CATEGORIES.find((c) => c.id === activeCategory)?.name}</strong> — {GIFT_CATEGORIES.find((c) => c.id === activeCategory)?.description}
          </p>
        )}
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredGifts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#e2d5c3] p-8 space-y-3">
            <Gift className="w-12 h-12 text-[#a89988] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#231e1a]">
              No gifts matched your criteria
            </h3>
            <p className="text-xs text-[#6e5f50]">
              Try choosing another category or clearing your search keywords.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold bg-[#874e2a] text-white rounded-md hover:bg-[#724021] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGifts.map((gift) => (
              <div
                key={gift.id}
                className="bg-white rounded-xl border border-[#dfd3c3] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {gift.image ? (
                    <div className="relative aspect-4/3 bg-[#f0e7d8] overflow-hidden">
                      <img
                        src={gift.image}
                        alt={gift.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      {gift.sameDayEligible && (
                        <span className="absolute top-3 left-3 bg-[#24201c]/90 text-[#f7f2ea] text-[11px] font-semibold px-2.5 py-1 rounded shadow-xs flex items-center gap-1 backdrop-blur-2xs">
                          <Truck className="w-3 h-3 text-[#c29b68]" />
                          <span>Same-Day Chicago Delivery</span>
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="aspect-4/3 bg-[#f3ebe0] flex flex-col items-center justify-center p-6 text-center text-[#874e2a] border-b border-[#e2d5c3]">
                      <Gift className="w-10 h-10 mb-2 opacity-60" />
                      <span className="font-serif text-sm font-semibold text-[#231e1a]">Boutique Selection</span>
                      <span className="text-[11px] text-[#736555]">Available at 3429 N Harlem Ave</span>
                    </div>
                  )}

                  <div className="p-6 space-y-3">
                    {gift.italianName && (
                      <span className="text-xs italic text-[#874e2a] font-serif block">
                        {gift.italianName}
                      </span>
                    )}
                    <h3 className="font-serif text-xl font-bold text-[#231e1a]">
                      {gift.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5c5043] leading-relaxed">
                      {gift.description}
                    </p>

                    <div className="pt-2 space-y-2 text-xs">
                      <div className="font-medium text-[#231e1a]">Key Highlights:</div>
                      <ul className="space-y-1 text-[#615446]">
                        {gift.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#874e2a] mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-[#f0e6d6] text-xs text-[#736555]">
                      <strong className="text-[#3b3127]">Packaging:</strong> {gift.presentation}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {gift.idealFor.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#f5ede2] text-[#6b5b4c] text-[10px] rounded border border-[#dfd3c3]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#f0e6d6] mt-4 flex items-center gap-2">
                  <button
                    id={`catalog-inquire-${gift.id}`}
                    onClick={() => setSelectedGift(gift)}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-[#874e2a] bg-[#fbf7f0] hover:bg-[#f0e6d6] border border-[#d6c4aa] rounded transition-colors text-center"
                  >
                    Inquire / Customize
                  </button>
                  <a
                    id={`catalog-call-${gift.id}`}
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="py-2.5 px-4 text-xs font-semibold text-white bg-[#874e2a] hover:bg-[#724021] rounded transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Shop</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Large Event Favors Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5ede2] border border-[#d6c4aa] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
              Celebration Orders
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#231e1a] font-bold">
              Planning a Wedding, Baptism, or Holy Communion?
            </h3>
            <p className="text-sm text-[#5c5043] max-w-xl">
              We specialize in custom party favor quantities with personalized tags, custom ribbon coordination, and bulk delivery directly to your Chicago venue or home.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              id="event-order-call-action"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3 text-sm font-semibold text-white bg-[#874e2a] hover:bg-[#724021] rounded-md transition-colors"
            >
              Call (773) 725-9000
            </a>
            <button
              id="event-order-contact-action"
              onClick={() => onNavigate('contact')}
              className="px-4 py-3 text-sm font-medium text-[#231e1a] bg-white border border-[#d6c4aa] hover:bg-[#fcfaf7] rounded-md transition-colors"
            >
              Submit Event Details
            </button>
          </div>
        </div>
      </section>

      {selectedGift && (
        <GiftInquiryModal
          gift={selectedGift}
          onClose={() => setSelectedGift(null)}
        />
      )}
    </div>
  );
};
