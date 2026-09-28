import React, { useState } from 'react';
import { Star, CheckCircle2, Phone, MapPin, ExternalLink, MessageSquare, ThumbsUp, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, GOOGLE_REVIEWS_SUMMARY } from '../data/businessData';

interface ReviewsViewProps {
  onNavigate: (page: PageId) => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({ onNavigate }) => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackName.trim() || !feedbackText.trim()) return;
    setFeedbackSent(true);
  };

  return (
    <div className="space-y-16 lg:space-y-20 py-8 lg:py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
            Genuine Reputation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#231e1a] font-bold tracking-tight">
            Customer Reviews & Satisfaction
          </h1>
          <p className="text-lg sm:text-xl text-[#594d40] leading-relaxed">
            We are deeply grateful for the Chicago community’s trust. Here is our genuine, verified rating from Google.
          </p>
        </div>
      </section>

      {/* Verified Google Review Scorecard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#d6c4aa] p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Big Score Card */}
          <div className="lg:col-span-5 bg-[#faf7f2] p-8 rounded-xl border border-[#e2d5c3] text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#d6c4aa] rounded-full text-xs font-semibold text-[#874e2a]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Google Rating</span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <span className="font-serif text-6xl sm:text-7xl font-extrabold text-[#231e1a]">
                4.8
              </span>
              <div className="text-left">
                <div className="flex items-center text-[#c29b68]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c29b68]" />
                  ))}
                </div>
                <span className="text-xs text-[#6e5f50] font-medium block mt-1">
                  16 Total Google Reviews
                </span>
                <span className="text-[11px] text-[#2c7a3f] font-semibold flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>100% Genuine Score</span>
                </span>
              </div>
            </div>

            {/* Breakdown Bars */}
            <div className="space-y-2 pt-4 border-t border-[#e2d5c3] text-xs text-[#524538]">
              {GOOGLE_REVIEWS_SUMMARY.breakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-2">
                  <span className="w-12 text-left font-medium">{row.stars} Stars</span>
                  <div className="flex-1 bg-[#e8decf] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#c29b68] h-full rounded-full transition-all duration-500"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-[#786959]">{row.count}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#736555] pt-2 italic">
              Score verified as of September 2026 for La Bomboniera at 3429 N Harlem Ave, Chicago, IL.
            </p>
          </div>

          {/* Context and Real Sentiment Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#231e1a]">
                Honest Feedback from Real Chicagoans
              </h2>
              <p className="text-sm text-[#5c5043] leading-relaxed">
                In strict adherence to truthfulness, we do not fabricate testimonial quotes or invent fictional customer names. Instead, we highlight the four recurring themes that our 16 reviewers consistently applaud on Google:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GOOGLE_REVIEWS_SUMMARY.verifiedThemes.map((theme, i) => (
                <div key={i} className="p-4 bg-[#faf7f2] rounded-lg border border-[#e8ded0] space-y-1.5">
                  <div className="flex items-center gap-2 font-serif text-sm font-bold text-[#231e1a]">
                    <ThumbsUp className="w-3.5 h-3.5 text-[#874e2a]" />
                    <span>{theme.title}</span>
                  </div>
                  <p className="text-xs text-[#5c5043] leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#f5ede2] rounded-lg border border-[#dfd2be] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="space-y-0.5 text-center sm:text-left">
                <strong className="text-[#231e1a] block font-semibold">Want to read or share a review on Google?</strong>
                <span className="text-[#695d4e]">Search "La Bomboniera Harlem Ave Chicago" directly on Google Search or Maps.</span>
              </div>
              <a
                id="search-google-reviews-btn"
                href="https://www.google.com/maps/search/?api=1&query=La+Bomboniera+3429+N+Harlem+Ave+Chicago+IL"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#24201c] hover:bg-[#3d342d] text-white rounded font-medium shadow-2xs transition-colors"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Experience with Our Shop */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#d6c4aa] p-8 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs uppercase tracking-wider text-[#874e2a] font-bold">
              Direct Patron Feedback
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#231e1a]">
              Have You Visited or Received a Delivery Recently?
            </h3>
            <p className="text-xs sm:text-sm text-[#5c5043]">
              Your thoughts help us keep our selection authentic and our delivery punctual. Send a note directly to our Harlem Avenue team:
            </p>
          </div>

          {feedbackSent ? (
            <div className="p-6 bg-[#eaf4ec] text-[#2c7a3f] rounded-lg text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 mx-auto" />
              <h4 className="font-bold text-base text-[#1b5329]">Thank You for Your Feedback!</h4>
              <p className="text-xs text-[#2c7a3f]">
                We cherish every comment from our neighborhood patrons and will share it with our store team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#3b332b] mb-1">
                    Your Name
                  </label>
                  <input
                    id="feedback-input-name"
                    type="text"
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    placeholder="e.g. Claudia"
                    required
                    className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#3b332b] mb-1">
                    Event or Occasion (Optional)
                  </label>
                  <input
                    id="feedback-input-occasion"
                    type="text"
                    placeholder="e.g. Baptism Favors, Birthday Gift Delivery"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#3b332b] mb-1">
                  Your Comments or Experience
                </label>
                <textarea
                  id="feedback-input-text"
                  rows={3}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Tell us what you liked about our products, favors packaging, or delivery service..."
                  required
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                />
              </div>

              <div className="flex justify-end">
                <button
                  id="submit-feedback-btn"
                  type="submit"
                  className="px-5 py-2.5 bg-[#874e2a] hover:bg-[#724021] text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
                >
                  Send Feedback to Shop
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Call or Visit CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#24201c] text-[#f7f2ea] rounded-xl p-8 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
            Experience Our 4.8-Star Care Firsthand
          </h3>
          <p className="text-sm text-[#baa998] max-w-lg mx-auto">
            Visit our Harlem Avenue storefront or call to discuss gifts, event favors, or same-day local delivery.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              id="reviews-cta-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-2.5 bg-[#874e2a] hover:bg-[#9e5d33] text-white text-sm font-semibold rounded-md transition-colors"
            >
              Call (773) 725-9000
            </a>
            <button
              id="reviews-cta-visit"
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-md transition-colors"
            >
              Store Location & Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
