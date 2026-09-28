import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Truck, 
  Gift, 
  Star, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ShieldCheck, 
  Heart, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PageId, GiftItem } from '../types';
import { BUSINESS_INFO, FEATURED_GIFTS, FAQS, GOOGLE_REVIEWS_SUMMARY, ASSET_IMAGES } from '../data/businessData';
import { GiftInquiryModal } from '../components/GiftInquiryModal';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. HERO SECTION: Business-specific, conversion-focused, warm Italian aesthetic */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-20 border-b border-[#e6dcce]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Clear value proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge Bar */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 bg-[#f0e7d8] border border-[#d6c4aa] rounded-full text-xs text-[#524538] font-medium">
                <span className="flex items-center gap-1 text-[#874e2a] font-semibold">
                  <Star className="w-3.5 h-3.5 fill-[#c29b68] text-[#c29b68]" />
                  <span>4.8 / 5 Rating</span>
                </span>
                <span className="text-[#a69685]">•</span>
                <span>16 Verified Google Reviews</span>
                <span className="text-[#a69685]">•</span>
                <span className="text-[#231e1a] font-medium">3429 N Harlem Ave, Chicago</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#231e1a] font-bold tracking-tight leading-[1.12]">
                  Authentic Italian-Themed Gifts & Same-Day Chicago Delivery.
                </h1>
                <p className="text-lg sm:text-xl text-[#594d40] font-normal leading-relaxed max-w-2xl">
                  Welcome to <strong>{BUSINESS_INFO.name}</strong>, your local Chicago specialty boutique on Harlem Avenue. We craft traditional milestone favors (*bomboniere*), curate authentic Italian keepsakes, and dispatch prompt same-day gifts across Chicago.
                </p>
              </div>

              {/* Action Buttons: Realistic CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  id="hero-cta-call"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#874e2a] hover:bg-[#724021] text-white text-base font-semibold rounded-lg shadow-sm transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call the Shop: (773) 725-9000</span>
                </a>

                <button
                  id="hero-cta-explore"
                  onClick={() => onNavigate('gifts')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-[#f5ede3] text-[#2b241e] border border-[#d6c4aa] text-base font-semibold rounded-lg shadow-2xs transition-colors"
                >
                  <Gift className="w-4 h-4 text-[#874e2a]" />
                  <span>Explore Gifts</span>
                </button>

                <button
                  id="hero-cta-delivery"
                  onClick={() => onNavigate('delivery')}
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-[#594d40] hover:text-[#231e1a] hover:bg-[#eee4d6] text-sm font-medium rounded-lg transition-colors"
                >
                  <Truck className="w-4 h-4 text-[#874e2a]" />
                  <span>Ask About Delivery</span>
                </button>
              </div>

              {/* Core Features Quick List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#e2d5c3] text-xs text-[#524538]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c7a3f] shrink-0" />
                  <span>Same-Day Chicago Courier</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c7a3f] shrink-0" />
                  <span>Traditional 5-Almond Favors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2c7a3f] shrink-0" />
                  <span>Handcrafted Packaging</span>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Relevant Shop Visual */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-[#d6c4aa] shadow-xl aspect-16/10 lg:aspect-4/3 bg-[#e8dfd2]">
                  <img
                    src={ASSET_IMAGES.hero}
                    alt="La Bomboniera gift shop interior displaying Italian ceramics and favors on Harlem Avenue Chicago"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-lg border border-[#e2d5c3] text-xs shadow-md flex items-center justify-between">
                    <div>
                      <span className="font-serif font-bold text-sm text-[#231e1a] block">
                        3429 N Harlem Ave, Chicago
                      </span>
                      <span className="text-[#6e5f50]">
                        Local store open for walk-ins & telephone consultations
                      </span>
                    </div>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="shrink-0 ml-2 px-2.5 py-1.5 text-[11px] font-semibold bg-[#874e2a] text-white rounded hover:bg-[#724021] transition-colors"
                    >
                      Visit Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAILED INTRODUCTION TO LA BOMBONIERA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5ede2] border border-[#e2d5c3] rounded-2xl p-8 sm:p-12 lg:p-14">
          <div className="max-w-3xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
                About The Boutique
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#231e1a] font-bold">
                Bringing the Timeless Charm of Italian Gifting to Chicago
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#524538] leading-relaxed">
              At <strong>La Bomboniera</strong>, gift-giving is approached with the deep respect, artistry, and warmth that has characterized Italian celebrations for generations. Located on North Harlem Avenue in Chicago, our boutique offers a curated haven for those seeking genuine Italian celebration favors, distinctive decorative pieces, and gourmet expressions of joy.
            </p>

            <p className="text-sm sm:text-base text-[#5c5043] leading-relaxed">
              Whether you are honoring a child’s baptism, celebrating an intimate wedding, seeking first communion keepsakes, or simply surprising someone across town with a prompt same-day gift box, we provide hands-on assistance that you simply cannot receive from mass-market online retailers. Every item is inspected, tied by hand, and prepared with care.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="intro-read-more"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#874e2a] hover:text-[#5e341b] underline underline-offset-4"
              >
                <span>Read our full story & tradition</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-[#a69685]">•</span>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-sm font-semibold text-[#231e1a] hover:text-[#874e2a]"
              >
                Questions? Call (773) 725-9000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GIFT/PRODUCT HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold block mb-1">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#231e1a] font-bold">
              Featured Italian Gifts & Favors
            </h2>
            <p className="text-sm sm:text-base text-[#615446] mt-1 max-w-xl">
              From hand-assembled celebration bomboniere to delivered gift boxes, explore gifts ready for your next milestone or spontaneous gesture.
            </p>
          </div>

          <button
            id="view-all-gifts-btn"
            onClick={() => onNavigate('gifts')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#874e2a] hover:text-[#724021] bg-[#f0e6d6] hover:bg-[#e8dcbe] rounded-md transition-colors self-start md:self-end"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_GIFTS.slice(0, 3).map((gift) => (
            <div
              key={gift.id}
              className="bg-white rounded-xl border border-[#dfd3c3] shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden group"
            >
              {gift.image && (
                <div className="relative aspect-4/3 bg-[#f0e7d8] overflow-hidden">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  {gift.sameDayEligible && (
                    <span className="absolute top-3 left-3 bg-[#24201c]/90 text-[#f7f2ea] text-[11px] font-semibold px-2.5 py-1 rounded shadow-xs flex items-center gap-1 backdrop-blur-2xs">
                      <Truck className="w-3 h-3 text-[#c29b68]" />
                      <span>Same-Day Eligible</span>
                    </span>
                  )}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {gift.italianName && (
                    <span className="text-xs italic text-[#874e2a] font-serif block">
                      {gift.italianName}
                    </span>
                  )}
                  <h3 className="font-serif text-xl font-bold text-[#231e1a]">
                    {gift.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c5043] leading-relaxed line-clamp-3">
                    {gift.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#f0e6d6] space-y-3">
                  <div className="text-xs text-[#6e5f50]">
                    <strong className="text-[#3d3328]">Ideal for:</strong> {gift.idealFor.slice(0, 3).join(', ')}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      id={`inquire-gift-${gift.id}`}
                      onClick={() => setSelectedGift(gift)}
                      className="flex-1 py-2 px-3 text-xs font-semibold text-[#874e2a] bg-[#fbf7f0] hover:bg-[#f0e6d6] border border-[#d6c4aa] rounded transition-colors text-center"
                    >
                      Inquire / Customize
                    </button>
                    <a
                      id={`call-gift-${gift.id}`}
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="py-2 px-3 text-xs font-semibold text-white bg-[#874e2a] hover:bg-[#724021] rounded transition-colors flex items-center justify-center gap-1"
                      title="Call to Order"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Shop</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ITALIAN-THEMED GIFTING BENEFITS & EXPERIENCE */}
      <section className="bg-[#24201c] text-[#fbf8f3] py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#c29b68] font-bold">
              Heritage & Tradition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
              The Significance of the Italian Bomboniera
            </h2>
            <p className="text-sm sm:text-base text-[#cfc2b2] leading-relaxed">
              In Italian culture, an event is never complete without a *bomboniera*—a symbolic token of gratitude presented by hosts to commemorate milestone moments. More than just a party favor, it serves as a lasting keepsake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2d2722] p-6 rounded-xl border border-[#453c35] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#874e2a]/40 text-[#c29b68] flex items-center justify-center font-serif text-lg font-bold">
                5
              </div>
              <h3 className="font-serif text-xl font-bold text-[#f7f2ea]">
                The Five Traditional Almonds
              </h3>
              <p className="text-xs sm:text-sm text-[#baa998] leading-relaxed">
                By tradition, five sugared almonds (*confetti*) are nestled into each favor package, each representing an indivisible blessing for life: <strong>Health, Wealth, Happiness, Fertility, and Long Life</strong>.
              </p>
            </div>

            <div className="bg-[#2d2722] p-6 rounded-xl border border-[#453c35] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#874e2a]/40 text-[#c29b68] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#f7f2ea]">
                Hand-Tied Presentation
              </h3>
              <p className="text-xs sm:text-sm text-[#baa998] leading-relaxed">
                We craft our favors by hand using fine Italian tulle, double-faced satin ribbons, and commemorative parchment tags tailored to your celebration colors and personal inscriptions.
              </p>
            </div>

            <div className="bg-[#2d2722] p-6 rounded-xl border border-[#453c35] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#874e2a]/40 text-[#c29b68] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#f7f2ea]">
                Enduring Emotional Value
              </h3>
              <p className="text-xs sm:text-sm text-[#baa998] leading-relaxed">
                Guests keep Italian favors for years—whether displayed on a mantel, bookshelf, or vanity—remembering your special occasion and the bond you share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERY AND SAME-DAY DELIVERY INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#d6c4aa] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Text Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f0e6d6] text-[#874e2a] text-xs font-semibold rounded-md">
                <Truck className="w-3.5 h-3.5" />
                <span>Chicago Local & Same-Day Service</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#231e1a] font-bold">
                Fast, Caring Delivery Right to Chicago Doorsteps
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#5c5043] leading-relaxed">
              Need a gift delivered today? We offer convenient same-day local delivery throughout Chicago and nearby surrounding neighborhoods. Whether sending a birthday gift box, sympathy expression, or celebratory surprise, we handle every package with utmost delicacy.
            </p>

            <div className="space-y-3 text-sm text-[#453c33]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#874e2a] mt-0.5 shrink-0" />
                <div>
                  <strong>Same-Day Order Cutoff:</strong> Call by early afternoon for guaranteed same-day delivery dispatch.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#874e2a] mt-0.5 shrink-0" />
                <div>
                  <strong>Complimentary Gift Card:</strong> We include a handwritten card with your personalized message.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#874e2a] mt-0.5 shrink-0" />
                <div>
                  <strong>Careful Transport:</strong> Fragile items like ceramics and favor boxes are cushioned securely.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                id="delivery-info-call-action"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#874e2a] hover:bg-[#724021] text-white text-sm font-semibold rounded-md shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Arrange Delivery: (773) 725-9000</span>
              </a>

              <button
                id="delivery-info-view-page"
                onClick={() => onNavigate('delivery')}
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-[#faf7f2] hover:bg-[#f0e6d6] text-[#2b241e] border border-[#d6c4aa] text-sm font-medium rounded-md transition-colors"
              >
                <span>Delivery Coverage & FAQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 bg-[#f0e7d8] border-t lg:border-t-0 lg:border-l border-[#d6c4aa] relative flex items-center justify-center p-6">
            <img
              src={ASSET_IMAGES.delivery}
              alt="Artisan packaged Italian specialty gift box prepared for same-day Chicago doorstep delivery"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover max-h-96 rounded-xl shadow-xs border border-[#dfd2bf]"
            />
          </div>
        </div>
      </section>

      {/* 6. REASONS TO CHOOSE LA BOMBONIERA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
            The Local Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#231e1a] font-bold">
            Why Chicagoland Families Trust Us
          </h2>
          <p className="text-sm sm:text-base text-[#615446]">
            Every gift from La Bomboniera represents attentive personal care that standard chain stores cannot match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-xl border border-[#e2d5c3] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#f0e6d6] flex items-center justify-center text-[#874e2a]">
              <Gift className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#231e1a]">
              Authentic Italian Focus
            </h3>
            <p className="text-xs text-[#5c5043] leading-relaxed">
              Specialized knowledge of Italian festive traditions, sacrament etiquette, and genuine imported confections.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#e2d5c3] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#f0e6d6] flex items-center justify-center text-[#874e2a]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#231e1a]">
              Prompt Same-Day Delivery
            </h3>
            <p className="text-xs text-[#5c5043] leading-relaxed">
              Convenient phone ordering with direct same-day courier dispatch across Chicago and near suburban zip codes.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#e2d5c3] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#f0e6d6] flex items-center justify-center text-[#874e2a]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#231e1a]">
              Bespoke Hand Assembly
            </h3>
            <p className="text-xs text-[#5c5043] leading-relaxed">
              Tulle, ribbons, charms, and handwritten cards assembled with patience and eye for aesthetic balance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#e2d5c3] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#f0e6d6] flex items-center justify-center text-[#874e2a]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#231e1a]">
              Real 4.8-Star Reputation
            </h3>
            <p className="text-xs text-[#5c5043] leading-relaxed">
              Verified 4.8/5 score from 16 Google reviews reflecting genuine customer appreciation and consistent satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* 7. GENUINE REVIEW RATING SECTION: 4.8/5 from 16 Google reviews (Strictly truthful) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f7f2eb] rounded-2xl border border-[#dfd2bf] p-8 sm:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Scorecard Summary */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-[#d6c5af] text-center shadow-xs space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#874e2a] font-bold block">
                Google Customer Satisfaction
              </span>
              <div className="flex items-center justify-center gap-3">
                <span className="font-serif text-5xl sm:text-6xl font-extrabold text-[#231e1a]">
                  {GOOGLE_REVIEWS_SUMMARY.rating}
                </span>
                <div className="text-left">
                  <div className="flex items-center text-[#c29b68]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#c29b68]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#6e5f50] font-medium block mt-1">
                    Based on 16 Google Reviews
                  </span>
                </div>
              </div>

              {/* Star Breakdown */}
              <div className="space-y-1.5 pt-2 text-xs text-[#5c5043] border-t border-[#f0e7d8]">
                {GOOGLE_REVIEWS_SUMMARY.breakdown.map((b) => (
                  <div key={b.stars} className="flex items-center gap-2">
                    <span className="w-12 text-left font-medium">{b.stars} Stars</span>
                    <div className="flex-1 bg-[#ede4d8] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#c29b68] h-full rounded-full"
                        style={{ width: `${b.percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-[11px] text-[#857463]">{b.count}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  id="view-reviews-page-action"
                  onClick={() => onNavigate('reviews')}
                  className="w-full py-2.5 px-4 text-xs font-semibold bg-[#231e1a] text-white hover:bg-[#38312b] rounded-md transition-colors"
                >
                  View Review Details & Themes
                </button>
              </div>
            </div>

            {/* Themes verified from real customer sentiment */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
                Customer Feedback Themes
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#231e1a]">
                What Chicagoans Value Most About Our Shop
              </h3>
              <p className="text-sm text-[#5c5043] leading-relaxed">
                Rather than publishing unverified quotes, we showcase the verified service qualities recognized by our patrons across 16 Google reviews:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {GOOGLE_REVIEWS_SUMMARY.verifiedThemes.map((theme, i) => (
                  <div key={i} className="p-4 bg-white/80 rounded-lg border border-[#dfd2bf] space-y-1">
                    <h4 className="font-serif font-bold text-sm text-[#231e1a] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2c7a3f] shrink-0" />
                      <span>{theme.title}</span>
                    </h4>
                    <p className="text-xs text-[#5c5043] leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. USEFUL FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#231e1a] font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#615446]">
            Clear answers about visiting our Harlem Ave shop, ordering bomboniere, and same-day delivery.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 5).map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-[#e2d5c3] overflow-hidden transition-colors"
              >
                <button
                  id={`home-faq-toggle-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#231e1a] hover:bg-[#fcfaf7]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#874e2a] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#524538] leading-relaxed border-t border-[#f0e6d6]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <button
            id="see-all-faqs-btn"
            onClick={() => onNavigate('faq')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#874e2a] hover:text-[#5e341b] underline underline-offset-4"
          >
            <span>View all questions and answers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 9. STRONG FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#24201c] text-[#f7f2ea] rounded-2xl p-8 sm:p-12 lg:p-16 text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#c29b68] font-semibold">
              Chicago’s Specialty Italian Gift Shop
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to find the ideal Italian gift or arrange same-day delivery?
            </h2>
            <p className="text-sm sm:text-base text-[#baa998] leading-relaxed">
              We look forward to helping you select something truly special. Call our Harlem Avenue boutique or drop by in person.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              id="final-cta-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#874e2a] hover:bg-[#9e5d33] text-white font-semibold rounded-lg shadow-md transition-colors text-base"
            >
              <Phone className="w-4 h-4" />
              <span>Call (773) 725-9000</span>
            </a>

            <button
              id="final-cta-visit"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg transition-colors text-base"
            >
              <MapPin className="w-4 h-4 text-[#c29b68]" />
              <span>Visit 3429 N Harlem Ave</span>
            </button>
          </div>
        </div>
      </section>

      {/* 10. CONTACT / LOCATION QUICK CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-white rounded-xl border border-[#d6c4aa] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase font-bold text-[#874e2a] tracking-wider">
              Store Location & Proximity
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#231e1a]">
              3429 N Harlem Ave, Chicago, IL 60634
            </h3>
            <p className="text-xs sm:text-sm text-[#615446]">
              Convenient street parking available right on Harlem Avenue and adjacent cross streets.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="home-get-directions"
              onClick={() => onNavigate('contact')}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#2b241e] bg-[#f5ede2] hover:bg-[#ede0cf] border border-[#d6c4aa] rounded-md transition-colors"
            >
              Get Directions & Hours
            </button>
            <a
              id="home-location-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#874e2a] hover:bg-[#724021] rounded-md transition-colors"
            >
              (773) 725-9000
            </a>
          </div>
        </div>
      </section>

      {/* Gift Inquiry Modal */}
      {selectedGift && (
        <GiftInquiryModal
          gift={selectedGift}
          onClose={() => setSelectedGift(null)}
        />
      )}
    </div>
  );
};
