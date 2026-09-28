import React from 'react';
import { Phone, MapPin, Gift, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, ASSET_IMAGES } from '../data/businessData';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-20 py-8 lg:py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
            Our Story & Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#231e1a] font-bold tracking-tight">
            About La Bomboniera
          </h1>
          <p className="text-lg sm:text-xl text-[#594d40] leading-relaxed">
            A Chicago neighborhood gift shop on Harlem Avenue dedicated to authentic Italian gifting traditions, milestone celebration favors, and heartfelt personal service.
          </p>
        </div>
      </section>

      {/* Main Narrative with boutique visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#524538] leading-relaxed">
            <h2 className="font-serif text-3xl text-[#231e1a] font-bold">
              The Heart of Italian Gifting on Harlem Avenue
            </h2>
            <p>
              In Italian culture, a gift is never simply an object; it is an enduring gesture of affection, respect, and shared celebration. Located at <strong>3429 N Harlem Ave</strong> in Chicago, <strong>La Bomboniera</strong> was founded to preserve this refined tradition for our local community.
            </p>
            <p>
              While contemporary shopping has largely shifted to anonymous warehouses and algorithm-driven marketplaces, our boutique stands apart. When you walk into our store or call us on the phone, you receive personalized attention. We listen to the nature of your celebration—whether it is an intimate family baptism, a major wedding banquet, a retirement, or a spontaneous gesture of gratitude—and help you assemble gifts that carry genuine cultural resonance.
            </p>
            <p>
              In addition to welcoming neighborhood walk-ins, we proudly provide <strong>local and same-day delivery throughout Chicago</strong>, ensuring that thoughtful, beautifully presented gifts can reach recipients across the city promptly and safely.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                id="about-call-shop"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#874e2a] hover:bg-[#724021] text-white text-sm font-semibold rounded-md shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call (773) 725-9000</span>
              </a>

              <button
                id="about-explore-gifts"
                onClick={() => onNavigate('gifts')}
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-white hover:bg-[#f0e6d6] text-[#2b241e] border border-[#d6c4aa] text-sm font-medium rounded-md transition-colors"
              >
                <span>Browse Gift Offerings</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#d6c4aa] shadow-lg aspect-4/3 bg-[#e8dfd2]">
              <img
                src={ASSET_IMAGES.favors}
                alt="Traditional Italian celebration bomboniere favors assembled with care at La Bomboniera Chicago"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Tradition of the Bomboniera Explained */}
      <section className="bg-[#f5ede2] py-14 border-y border-[#e2d5c3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
              Cultural Meaning
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#231e1a] font-bold">
              What Is a "Bomboniera"?
            </h2>
            <p className="text-sm sm:text-base text-[#5c5043] leading-relaxed">
              Derived from the French *bonbonnière* (a small decorative container for sweet treats), the Italian tradition evolved into an art form. Today in Italy and across Italian communities worldwide, the bomboniera is presented to guests as a token of thanks and celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-[#dcd0be] space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#231e1a]">
                Five Almonds of Good Fortune
              </h3>
              <p className="text-xs sm:text-sm text-[#5c5043] leading-relaxed">
                Traditional favors enclose an odd number of sugar-coated almonds (usually five). The odd number signifies that the bond between the celebrating family and guest cannot be divided, while the sugar coating tempers the bitterness of the almond—symbolizing the sweetness and strength of life.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#dcd0be] space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#231e1a]">
                Milestone Sacraments
              </h3>
              <p className="text-xs sm:text-sm text-[#5c5043] leading-relaxed">
                From white and ivory favors for Baptisms and First Holy Communions, to red accents for graduations and silver or gold ribbons for 25th and 50th wedding anniversaries, each life stage carries its own traditional aesthetic.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#dcd0be] space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#231e1a]">
                Artisanal Keepsakes
              </h3>
              <p className="text-xs sm:text-sm text-[#5c5043] leading-relaxed">
                In addition to confetti pouches, bomboniere often feature an enduring keepsake: a miniature porcelain item, silver-plated frame, ceramic ornament, or crystal cross that stays in your guests’ homes for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Genuineness */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#d6c4aa] p-8 sm:p-12 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
              Our Principles
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#231e1a]">
              What You Can Always Expect from Our Shop
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#524538]">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#874e2a] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#231e1a] font-semibold">Honest Guidance & Advice</strong>
                <span>We help you select items that fit your event size, theme, and taste without pushing unnecessary bulk or items.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#874e2a] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#231e1a] font-semibold">Hand-Tied Craftsmanship</strong>
                <span>Every favor and gift box is assembled by human hands with attention to straight ribbons, clean folds, and secure closures.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#874e2a] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#231e1a] font-semibold">Dependable Local Chicago Delivery</strong>
                <span>When you arrange a delivery, we take personal responsibility for ensuring the package arrives in pristine presentation.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#874e2a] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#231e1a] font-semibold">Real Community Connection</strong>
                <span>Proudly serving Chicagoans, Italian-American families, and gift-seekers on Harlem Avenue and across the city.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Card CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#24201c] text-[#f7f2ea] rounded-xl p-8 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
            Visit Our Store at 3429 N Harlem Ave, Chicago
          </h3>
          <p className="text-sm text-[#c4b5a4] max-w-lg mx-auto">
            Stop by during store hours to browse our shelves or call us at (773) 725-9000 for recommendations and delivery coordination.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              id="about-visit-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-2.5 bg-[#874e2a] hover:bg-[#9e5d33] text-white text-sm font-semibold rounded-md transition-colors"
            >
              Call (773) 725-9000
            </a>
            <button
              id="about-visit-contact-btn"
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-md transition-colors"
            >
              Store Hours & Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
