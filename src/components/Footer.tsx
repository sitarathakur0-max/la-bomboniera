import React from 'react';
import { Phone, MapPin, Star, Clock, Gift, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e1a17] text-[#e0d6cb] border-t border-[#38312b]">
      {/* Pre-footer Callout Banner */}
      <div className="bg-[#29231e] border-b border-[#3d342d] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="inline-block text-[#c29b68] text-xs font-semibold tracking-wider uppercase mb-1">
              Chicago Local Same-Day Service
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f2ea]">
              Need a thoughtful gift delivered today in Chicago?
            </h3>
            <p className="text-sm text-[#b3a494] mt-1 max-w-xl">
              Call our shop directly at <strong className="text-white font-medium">(773) 725-9000</strong> to verify current availability, add your personal note, and coordinate dispatch.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              id="footer-banner-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#874e2a] hover:bg-[#9e5d33] rounded-md transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call (773) 725-9000</span>
            </a>

            <button
              id="footer-banner-delivery-btn"
              onClick={() => handleNav('delivery')}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#f7f2ea] bg-white/10 hover:bg-white/15 border border-white/20 rounded-md transition-colors"
            >
              <Truck className="w-4 h-4 text-[#c29b68]" />
              <span>Delivery Information</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#874e2a]/30 border border-[#874e2a]/50 flex items-center justify-center text-[#c29b68]">
                <Gift className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl text-[#fbf8f3] font-semibold tracking-wide">
                {BUSINESS_INFO.name}
              </h2>
            </div>

            <p className="text-sm text-[#aba093] leading-relaxed">
              A Chicago neighborhood gift shop specializing in authentic Italian-themed gifts, milestone bomboniere favors, and dedicated local and same-day delivery throughout the Chicagoland area.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#d1c3b2]">
              <div className="flex items-center text-[#e2b16f]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c29b68] text-[#c29b68]" />
                ))}
              </div>
              <span className="font-semibold text-white">4.8/5</span>
              <span>from 16 Google reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-[#fbf8f3] font-semibold mb-4 tracking-wide border-b border-[#38312b] pb-2">
              Explore Our Shop
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#874e2a]" />
                  <span>Home & Highlights</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#874e2a]" />
                  <span>About Our Boutique</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-gifts"
                  onClick={() => handleNav('gifts')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#874e2a]" />
                  <span>Italian Gifts & Favors</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-delivery"
                  onClick={() => handleNav('delivery')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#874e2a]" />
                  <span>Local & Same-Day Delivery</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-reviews"
                  onClick={() => handleNav('reviews')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#874e2a]" />
                  <span>Google Reviews (4.8/5)</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => handleNav('faq')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#874e2a]" />
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#874e2a]" />
                  <span>Contact & Location</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Visiting */}
          <div>
            <h4 className="font-serif text-lg text-[#fbf8f3] font-semibold mb-4 tracking-wide border-b border-[#38312b] pb-2">
              Store Hours
            </h4>
            <div className="space-y-3 text-sm">
              {BUSINESS_INFO.hours.map((h, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[#f7f2ea] font-medium">{h.days}</span>
                  <span className="text-[#a89b8d] text-xs">{h.time}</span>
                </div>
              ))}
              <div className="pt-2 text-xs text-[#c29b68] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Call ahead for rush orders & same-day courier dispatch</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="font-serif text-lg text-[#fbf8f3] font-semibold mb-4 tracking-wide border-b border-[#38312b] pb-2">
              Visit or Call Us
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c29b68] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">{BUSINESS_INFO.address}</span>
                  <span className="block text-xs text-[#a89b8d]">{BUSINESS_INFO.neighborhood}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#c29b68] shrink-0 mt-0.5" />
                <div>
                  <a
                    id="footer-call-link-direct"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-white hover:text-[#c29b68] font-semibold transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="block text-xs text-[#a89b8d]">
                    Direct boutique phone (Click to dial)
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="footer-directions-btn"
                  onClick={() => handleNav('contact')}
                  className="w-full text-center py-2 px-3 text-xs font-semibold bg-[#2a231d] hover:bg-[#382f27] border border-[#4a3f35] text-[#f7f2ea] rounded transition-colors"
                >
                  View Map & Driving Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#332b25] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c8072] gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-center">
            <span>3429 N Harlem Ave, Chicago, IL 60634</span>
            <span>•</span>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
              (773) 725-9000
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
