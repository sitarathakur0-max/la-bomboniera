import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Gift, Clock, Star, Truck } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gifts', label: 'Gifts & Products' },
    { id: 'delivery', label: 'Delivery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e8dfd3]">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#24201c] text-[#f7f2ea] text-xs sm:text-sm py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center justify-center bg-[#c29b68] text-black text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
              Chicago
            </span>
            <span className="hidden md:inline">Specializing in Italian-Themed Gifts &</span>
            <span>Local Same-Day Delivery Available</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-[#e5d5be]">
              <Star className="w-3.5 h-3.5 fill-[#c29b68] text-[#c29b68]" />
              <span>4.8/5 on Google (16 Reviews)</span>
            </div>
            <a
              id="topbar-call-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="font-semibold text-[#c29b68] hover:text-[#d8b584] underline underline-offset-2 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c29b68] rounded p-1"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f0e6d6] border border-[#d6c4aa] flex items-center justify-center text-[#874e2a] shadow-xs group-hover:scale-105 transition-transform">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-[#231e1a] group-hover:text-[#874e2a] transition-colors">
                  {BUSINESS_INFO.name}
                </span>
                <span className="block text-[11px] sm:text-xs text-[#736555] tracking-wider uppercase font-medium">
                  Italian Gift Boutique • Chicago, IL
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#874e2a] bg-[#f0e6d6] font-semibold'
                      : 'text-[#4d443b] hover:text-[#231e1a] hover:bg-[#f3ebe0]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-visit-btn"
              onClick={() => handleNavClick('contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#4d443b] bg-white border border-[#d8ccbc] rounded-md hover:bg-[#f5ede3] transition-colors shadow-2xs"
            >
              <MapPin className="w-3.5 h-3.5 text-[#874e2a]" />
              <span>Harlem Ave Store</span>
            </button>

            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#874e2a] hover:bg-[#724021] rounded-md shadow-xs transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (773) 725-9000</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-quick-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 text-white bg-[#874e2a] rounded-md"
              aria-label="Call La Bomboniera"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#4d443b] hover:text-[#231e1a] hover:bg-[#eee5d8] focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e8dfd3] bg-[#faf7f2] px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#f0e6d6] text-[#874e2a] font-semibold'
                      : 'text-[#4d443b] hover:bg-[#f3ebe0] hover:text-[#231e1a]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#874e2a]"></span>}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-[#e2d5c3] space-y-2.5">
            <a
              id="mobile-menu-call-action"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md font-semibold text-white bg-[#874e2a] hover:bg-[#724021] text-sm shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Shop: (773) 725-9000</span>
            </a>

            <button
              id="mobile-menu-directions-action"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md font-medium text-[#4d443b] bg-white border border-[#d8ccbc] hover:bg-[#f5ede3] text-sm"
            >
              <MapPin className="w-4 h-4 text-[#874e2a]" />
              <span>3429 N Harlem Ave, Chicago</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
