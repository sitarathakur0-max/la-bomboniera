import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Truck } from 'lucide-react';
import { PageId } from './types';
import { BUSINESS_INFO } from './data/businessData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { GiftsView } from './views/GiftsView';
import { DeliveryView } from './views/DeliveryView';
import { ReviewsView } from './views/ReviewsView';
import { FAQView } from './views/FAQView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync hash with current page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'gifts', 'delivery', 'reviews', 'faq', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title dynamically per view for local SEO
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'La Bomboniera | Italian Gift Shop Chicago – Harlem Ave',
      about: 'About Our Boutique | La Bomboniera – Harlem Ave Chicago',
      gifts: 'Italian Gifts & Celebration Favors | La Bomboniera Chicago',
      delivery: 'Local & Same-Day Chicago Delivery | La Bomboniera',
      reviews: 'Google Reviews (4.8/5 Rating) | La Bomboniera Chicago',
      faq: 'Frequently Asked Questions | La Bomboniera Gift Shop',
      contact: 'Contact & Store Location | 3429 N Harlem Ave, Chicago, IL',
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#24211e]">
      {/* Accessible skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#874e2a] focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      {/* Main Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {currentPage === 'home' && <HomeView onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutView onNavigate={navigateTo} />}
        {currentPage === 'gifts' && <GiftsView onNavigate={navigateTo} />}
        {currentPage === 'delivery' && <DeliveryView onNavigate={navigateTo} />}
        {currentPage === 'reviews' && <ReviewsView onNavigate={navigateTo} />}
        {currentPage === 'faq' && <FAQView onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactView onNavigate={navigateTo} />}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Floating Quick Call Bar */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-30 flex items-center gap-2">
        <a
          id="mobile-bottom-call-btn"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#874e2a] text-white font-bold text-sm shadow-xl border border-white/20 active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span>Call Shop: (773) 725-9000</span>
        </a>

        {currentPage !== 'delivery' && (
          <button
            id="mobile-bottom-delivery-btn"
            onClick={() => navigateTo('delivery')}
            className="p-3 bg-[#24201c] text-[#f7f2ea] rounded-xl border border-white/10 shadow-xl"
            aria-label="Same-Day Delivery"
          >
            <Truck className="w-5 h-5 text-[#c29b68]" />
          </button>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 p-2.5 sm:p-3 bg-[#24201c]/90 hover:bg-[#24201c] text-white rounded-full shadow-lg border border-[#e2d5c3]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
