import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Truck, 
  Gift, 
  Sparkles,
  Navigation
} from 'lucide-react';
import { PageId, ContactFormData } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'general',
    message: '',
    needDate: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (or leave blank)';
    }
    if (!formData.message.trim()) errs.message = 'Please share your question or gift inquiry';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'La Bomboniera 3429 N Harlem Ave Chicago IL 60634'
  )}`;

  return (
    <div className="space-y-16 lg:space-y-20 py-8 lg:py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
            Visit & Connect
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#231e1a] font-bold tracking-tight">
            Contact La Bomboniera
          </h1>
          <p className="text-lg sm:text-xl text-[#594d40] leading-relaxed">
            We look forward to speaking with you. Call our Harlem Avenue boutique directly, visit us during store hours, or send an inquiry below.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Validated Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Phone & Store Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <div className="bg-[#24201c] text-[#f7f2ea] p-8 rounded-2xl border border-[#3b322a] space-y-4 shadow-md">
              <span className="text-xs uppercase tracking-widest text-[#c29b68] font-bold block">
                Direct Telephone Assistance
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                {BUSINESS_INFO.phone}
              </h2>
              <p className="text-xs sm:text-sm text-[#baa998] leading-relaxed">
                Calling is the fastest way to confirm in-stock items, customize favor packaging, and arrange immediate same-day local Chicago delivery.
              </p>
              <div className="pt-2">
                <a
                  id="contact-page-call-btn"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#874e2a] hover:bg-[#9e5d33] text-white text-sm font-semibold rounded-md shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (773) 725-9000</span>
                </a>
              </div>
            </div>

            {/* Location & Visiting Card */}
            <div className="bg-white p-8 rounded-2xl border border-[#d6c4aa] space-y-5 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f5ede2] text-[#874e2a] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#231e1a]">
                    Store Address
                  </h3>
                  <p className="text-sm font-semibold text-[#231e1a] mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#6e5f50] mt-0.5">
                    Harlem Avenue Corridor (Between Addison & Belmont)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#f0e6d6]">
                <div className="w-10 h-10 rounded-lg bg-[#f5ede2] text-[#874e2a] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#231e1a]">
                    Store Hours
                  </h3>
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-xs">
                      <span className="font-medium text-[#231e1a]">{h.days}:</span>
                      <span className="text-[#6e5f50]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  id="contact-open-google-maps"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#f8f5ef] hover:bg-[#ede5d8] border border-[#d6c4aa] text-[#231e1a] text-xs font-semibold rounded-md transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#874e2a]" />
                  <span>Get Driving Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#736555]" />
                </a>
              </div>
            </div>

            {/* Parking & Accessibility Note */}
            <div className="p-4 bg-[#f5ede2] rounded-xl border border-[#d6c4aa] text-xs text-[#524538] space-y-1">
              <span className="font-bold text-[#231e1a] block">Street Parking</span>
              <p>
                Easy, convenient meter and free street parking is available along Harlem Avenue and adjacent cross streets directly outside our storefront.
              </p>
            </div>
          </div>

          {/* Right Column: Contact / Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#d6c4aa] shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
                  Send a Message
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#231e1a]">
                  Contact & Inquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-[#5c5043]">
                  Have a question about product availability, party favors, or same-day delivery? Fill out the form and our team will get back to you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#eaf4ec] text-[#2c7a3f] rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#231e1a]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#524538] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We have received your inquiry. A team member from our 3429 N Harlem Ave shop will reach out to you at <strong>{formData.phone}</strong>.
                  </p>

                  <div className="p-4 bg-[#f8f5ef] rounded-lg border border-[#e2d5c3] max-w-md mx-auto text-xs text-[#524538] text-left space-y-1.5">
                    <span className="font-bold text-[#231e1a] block">For urgent or same-day needs:</span>
                    <p>
                      Please dial our shop directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-[#874e2a] underline">(773) 725-9000</a> for immediate attention.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      id="contact-send-another-btn"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          inquiryType: 'general',
                          message: '',
                          needDate: '',
                        });
                      }}
                      className="px-5 py-2.5 bg-[#874e2a] hover:bg-[#724021] text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#3b332b] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Salvatore Conte"
                        className={`w-full px-3 py-2 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a] ${
                          errors.name ? 'border-red-500' : 'border-[#d6c5af]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3b332b] mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-input-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(773) 000-0000"
                        className={`w-full px-3 py-2 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a] ${
                          errors.phone ? 'border-red-500' : 'border-[#d6c5af]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#3b332b] mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        id="contact-input-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-3 py-2 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a] ${
                          errors.email ? 'border-red-500' : 'border-[#d6c5af]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3b332b] mb-1">
                        Inquiry Topic *
                      </label>
                      <select
                        id="contact-select-type"
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            inquiryType: e.target.value as ContactFormData['inquiryType'],
                          })
                        }
                        className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                      >
                        <option value="general">General Question</option>
                        <option value="availability">Product / Gift Availability</option>
                        <option value="same-day-delivery">Same-Day Chicago Delivery</option>
                        <option value="favors">Wedding / Baptism Favors (Bomboniere)</option>
                        <option value="consultation">In-Store Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3b332b] mb-1">
                      Event Date or Target Delivery Date (Optional)
                    </label>
                    <input
                      id="contact-input-date"
                      type="date"
                      value={formData.needDate}
                      onChange={(e) => setFormData({ ...formData, needDate: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3b332b] mb-1">
                      Your Message or Details *
                    </label>
                    <textarea
                      id="contact-input-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share what you are looking for, recipient address if inquiring about delivery, or any event details..."
                      className={`w-full px-3 py-2 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a] ${
                        errors.message ? 'border-red-500' : 'border-[#d6c5af]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-0.5">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-[#786a5a]">
                      * Required fields. We treat your information with utmost privacy.
                    </span>

                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#874e2a] hover:bg-[#724021] text-white text-xs sm:text-sm font-semibold rounded-md shadow-xs transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Location Map Representation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#d6c4aa] overflow-hidden shadow-xs">
          <div className="p-6 bg-[#faf7f2] border-b border-[#e2d5c3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-[#874e2a]">Harlem Avenue Location</span>
              <h3 className="font-serif text-xl font-bold text-[#231e1a]">
                3429 N Harlem Ave, Chicago, IL 60634
              </h3>
            </div>
            <a
              id="map-external-link"
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#231e1a] text-white text-xs font-semibold rounded-md hover:bg-[#38312b] transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="relative aspect-21/9 min-h-[260px] bg-[#ede5d8] flex items-center justify-center p-6 text-center">
            {/* Visual Map graphic with pinpoint */}
            <div className="max-w-md p-6 bg-white/95 rounded-xl border border-[#d6c4aa] shadow-md space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#874e2a] text-white flex items-center justify-center mx-auto shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#231e1a]">
                La Bomboniera • Gift Boutique
              </h4>
              <p className="text-xs text-[#524538]">
                Located at 3429 N Harlem Ave on Chicago's northwest side. Easy access from Addison St, Belmont Ave, and the Kennedy / Eisenhower Expressways.
              </p>
              <div className="pt-1 flex items-center justify-center gap-2">
                <a
                  id="directions-button-embedded"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-xs font-semibold bg-[#874e2a] text-white rounded hover:bg-[#724021] transition-colors"
                >
                  Start GPS Navigation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
