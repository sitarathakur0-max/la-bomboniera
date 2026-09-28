import React, { useState } from 'react';
import { 
  Truck, 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  AlertCircle,
  HelpCircle,
  Calendar
} from 'lucide-react';
import { PageId, DeliveryFormData } from '../types';
import { BUSINESS_INFO, ASSET_IMAGES } from '../data/businessData';

interface DeliveryViewProps {
  onNavigate: (page: PageId) => void;
}

export const DeliveryView: React.FC<DeliveryViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<DeliveryFormData>({
    senderName: '',
    senderPhone: '',
    recipientName: '',
    recipientPhone: '',
    deliveryAddress: '',
    preferredDate: '',
    timePreference: 'afternoon',
    giftType: 'Italian Specialty Gift Box',
    giftNote: '',
    isSameDay: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DeliveryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof DeliveryFormData, string>> = {};

    if (!formData.senderName.trim()) newErrors.senderName = 'Please provide your name';
    if (!formData.senderPhone.trim() || formData.senderPhone.replace(/\D/g, '').length < 10) {
      newErrors.senderPhone = 'Please provide a valid 10-digit phone number';
    }
    if (!formData.recipientName.trim()) newErrors.recipientName = 'Please provide the recipient name';
    if (!formData.deliveryAddress.trim()) newErrors.deliveryAddress = 'Please provide the delivery address (Street, Apt/Suite, City, Zip)';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-16 lg:space-y-20 py-8 lg:py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0e6d6] text-[#874e2a] text-xs font-semibold rounded-md">
            <Truck className="w-3.5 h-3.5" />
            <span>Chicago & Near Suburbs Courier Dispatch</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#231e1a] font-bold tracking-tight">
            Local Delivery & Same-Day Service
          </h1>
          <p className="text-lg sm:text-xl text-[#594d40] leading-relaxed">
            Delivering authentic Italian gifts, specialty hampers, and milestone celebration favors directly to Chicago doorsteps, offices, celebration venues, and hospitals.
          </p>
        </div>
      </section>

      {/* Same-Day Delivery Highlights Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#24201c] text-[#f7f2ea] rounded-2xl p-8 sm:p-10 border border-[#3b322a] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#c29b68] font-bold">
              Immediate Dispatch Available
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              How Same-Day Chicago Delivery Works
            </h2>
            <p className="text-sm sm:text-base text-[#cfc2b2] leading-relaxed">
              When time is of the essence, we offer expedited local courier delivery for in-stock gifts. Simply call our boutique directly so we can inspect available items, finalize your gift card inscription, and schedule courier transit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-3 bg-[#2f2823] rounded-lg border border-[#473c33] space-y-1">
                <strong className="text-white block font-serif text-sm">1. Call By Early Afternoon</strong>
                <span className="text-[#baa998]">Call (773) 725-9000 to verify in-stock selections and confirm today’s delivery schedule.</span>
              </div>
              <div className="p-3 bg-[#2f2823] rounded-lg border border-[#473c33] space-y-1">
                <strong className="text-white block font-serif text-sm">2. Personalize & Package</strong>
                <span className="text-[#baa998]">We hand-tie ribbons, hand-write your personal message card, and safely cushion fragile contents.</span>
              </div>
              <div className="p-3 bg-[#2f2823] rounded-lg border border-[#473c33] space-y-1">
                <strong className="text-white block font-serif text-sm">3. Doorstep Arrival</strong>
                <span className="text-[#baa998]">Delivered directly to homes, apartments, business offices, or private party halls.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#2f2823] p-6 rounded-xl border border-[#473c33] text-center space-y-4">
            <Clock className="w-10 h-10 text-[#c29b68] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-white">
              Order Today by Phone
            </h3>
            <p className="text-xs text-[#baa998]">
              The fastest way to guarantee same-day delivery is a direct call to our Harlem Ave shop.
            </p>
            <a
              id="delivery-rush-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#874e2a] hover:bg-[#9e5d33] text-white text-sm font-semibold rounded-md shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call (773) 725-9000</span>
            </a>
          </div>
        </div>
      </section>

      {/* Coverage Zones and Packaging Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coverage Areas */}
          <div className="bg-white p-8 rounded-2xl border border-[#d6c4aa] space-y-5 shadow-2xs">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#874e2a] font-bold">
                Neighborhood Reach
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#231e1a]">
                Delivery Coverage Areas
              </h3>
            </div>

            <p className="text-sm text-[#5c5043] leading-relaxed">
              Operating directly from <strong>3429 N Harlem Ave (Chicago, IL 60634)</strong>, we provide responsive local courier service across Chicago neighborhoods and adjacent communities:
            </p>

            <div className="grid grid-cols-2 gap-2.5 text-xs text-[#453b31]">
              <div className="flex items-center gap-2 p-2 bg-[#faf7f2] rounded border border-[#e8dfd3]">
                <MapPin className="w-3.5 h-3.5 text-[#874e2a] shrink-0" />
                <span>Harlem Avenue / Montclare</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#faf7f2] rounded border border-[#e8dfd3]">
                <MapPin className="w-3.5 h-3.5 text-[#874e2a] shrink-0" />
                <span>Dunning & Elmwood Park</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#faf7f2] rounded border border-[#e8dfd3]">
                <MapPin className="w-3.5 h-3.5 text-[#874e2a] shrink-0" />
                <span>Portage Park & Belmont Cragin</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#faf7f2] rounded border border-[#e8dfd3]">
                <MapPin className="w-3.5 h-3.5 text-[#874e2a] shrink-0" />
                <span>Norwood Park & Edison Park</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#faf7f2] rounded border border-[#e8dfd3]">
                <MapPin className="w-3.5 h-3.5 text-[#874e2a] shrink-0" />
                <span>River Grove & Harwood Heights</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#faf7f2] rounded border border-[#e8dfd3]">
                <MapPin className="w-3.5 h-3.5 text-[#874e2a] shrink-0" />
                <span>Wider Chicago & Suburbs (Call)</span>
              </div>
            </div>

            <p className="text-xs text-[#736555] italic">
              * Delivering outside these immediate zip codes? Call us to confirm courier transit timing and rates for broader Chicagoland.
            </p>
          </div>

          {/* Fragile Item Protection */}
          <div className="bg-white p-8 rounded-2xl border border-[#d6c4aa] space-y-5 shadow-2xs">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#874e2a] font-bold">
                Quality Assurance
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#231e1a]">
                Meticulous Gift Care & Packaging
              </h3>
            </div>

            <p className="text-sm text-[#5c5043] leading-relaxed">
              Italian gifts frequently involve delicate porcelain, hand-glazed ceramics, and artfully constructed tulle favor pouches. We ensure every item arrives in showroom condition.
            </p>

            <div className="space-y-3 text-sm text-[#4d4236]">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2c7a3f] shrink-0 mt-0.5" />
                <div>
                  <strong>Protected Transit:</strong> Bubble wrap and sturdy inner supports protect ceramic pieces inside luxury presentation boxes.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2c7a3f] shrink-0 mt-0.5" />
                <div>
                  <strong>Hand-Tied Ribbons Kept Crisp:</strong> Double-faced satin and grosgrain bows are arranged so they do not crush during delivery.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2c7a3f] shrink-0 mt-0.5" />
                <div>
                  <strong>Handwritten Enclosure Card:</strong> We hand-write your custom message on our elegant boutique note card.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Delivery Inquiry Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#d6c4aa] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#874e2a] font-bold">
              Reserve or Request Delivery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#231e1a] font-bold">
              Submit a Delivery Inquiry
            </h2>
            <p className="text-sm text-[#615446]">
              Fill out your delivery details below. Our shop team will review your request and call you promptly to confirm availability and schedule.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-[#eaf4ec] text-[#2c7a3f] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#231e1a]">
                Delivery Request Received!
              </h3>
              <p className="text-sm text-[#524538] max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.senderName}</strong>. We have logged your delivery request for <strong>{formData.recipientName}</strong> at <strong>{formData.deliveryAddress}</strong>.
              </p>
              <div className="p-4 bg-[#f5ede2] rounded-lg border border-[#e2d5c3] max-w-md mx-auto text-xs text-[#524538] text-left space-y-2">
                <div className="font-bold text-sm text-[#231e1a]">Next Steps:</div>
                <p>
                  Our staff at 3429 N Harlem Ave will call you at <strong>{formData.senderPhone}</strong> to confirm the exact delivery window and process payment by phone.
                </p>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  id="reset-delivery-form-btn"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 bg-[#874e2a] hover:bg-[#724021] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  Submit Another Request
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-5 py-2.5 bg-[#f0e6d6] hover:bg-[#e4d7c3] text-[#231e1a] text-xs font-semibold rounded-md transition-colors"
                >
                  Call Shop: (773) 725-9000
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Delivery Timing Mode */}
              <div className="p-4 bg-[#faf7f2] rounded-lg border border-[#e8dfd3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-[#874e2a] block">Delivery Timing</span>
                  <span className="text-sm text-[#231e1a] font-medium">Is this a Same-Day Chicago Delivery request?</span>
                </div>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-1.5 text-xs font-medium cursor-pointer">
                    <input
                      type="radio"
                      name="isSameDay"
                      checked={formData.isSameDay}
                      onChange={() => setFormData({ ...formData, isSameDay: true })}
                      className="text-[#874e2a] focus:ring-[#874e2a]"
                    />
                    <span>Yes, Same-Day</span>
                  </label>
                  <label className="flex items-center gap-1.5 text-xs font-medium cursor-pointer">
                    <input
                      type="radio"
                      name="isSameDay"
                      checked={!formData.isSameDay}
                      onChange={() => setFormData({ ...formData, isSameDay: false })}
                      className="text-[#874e2a] focus:ring-[#874e2a]"
                    />
                    <span>Future Date</span>
                  </label>
                </div>
              </div>

              {/* Sender Details */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#736555] border-b border-[#eee3d5] pb-1">
                  1. Your Information (Sender)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#3b332b] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      id="delivery-sender-name"
                      type="text"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      placeholder="e.g. Gianna Bellini"
                      className={`w-full px-3 py-2 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a] ${
                        errors.senderName ? 'border-red-500' : 'border-[#d6c5af]'
                      }`}
                    />
                    {errors.senderName && (
                      <p className="text-[11px] text-red-600 mt-0.5">{errors.senderName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3b332b] mb-1">
                      Your Phone Number (For order confirmation) *
                    </label>
                    <input
                      id="delivery-sender-phone"
                      type="tel"
                      value={formData.senderPhone}
                      onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                      placeholder="(773) 000-0000"
                      className={`w-full px-3 py-2 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a] ${
                        errors.senderPhone ? 'border-red-500' : 'border-[#d6c5af]'
                      }`}
                    />
                    {errors.senderPhone && (
                      <p className="text-[11px] text-red-600 mt-0.5">{errors.senderPhone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Recipient Details */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#736555] border-b border-[#eee3d5] pb-1">
                  2. Recipient Information & Chicago Address
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#3b332b] mb-1">
                      Recipient Name *
                    </label>
                    <input
                      id="delivery-recipient-name"
                      type="text"
                      value={formData.recipientName}
                      onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                      placeholder="e.g. Marco Rossi"
                      className={`w-full px-3 py-2 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a] ${
                        errors.recipientName ? 'border-red-500' : 'border-[#d6c5af]'
                      }`}
                    />
                    {errors.recipientName && (
                      <p className="text-[11px] text-red-600 mt-0.5">{errors.recipientName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3b332b] mb-1">
                      Recipient Phone (Recommended for gate/door buzzer)
                    </label>
                    <input
                      id="delivery-recipient-phone"
                      type="tel"
                      value={formData.recipientPhone}
                      onChange={(e) => setFormData({ ...formData, recipientPhone: e.target.value })}
                      placeholder="(773) 000-0000"
                      className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3b332b] mb-1">
                    Delivery Street Address, Unit/Apt, City & Zip Code *
                  </label>
                  <textarea
                    id="delivery-address-input"
                    rows={2}
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                    placeholder="e.g. 5420 W Belmont Ave, Apt 3B, Chicago, IL 60641"
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a] ${
                      errors.deliveryAddress ? 'border-red-500' : 'border-[#d6c5af]'
                    }`}
                  />
                  {errors.deliveryAddress && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.deliveryAddress}</p>
                  )}
                </div>
              </div>

              {/* Gift & Message Details */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#736555] border-b border-[#eee3d5] pb-1">
                  3. Gift Type & Personal Card Message
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#3b332b] mb-1">
                      Desired Gift Category / Package
                    </label>
                    <select
                      id="delivery-gift-type-select"
                      value={formData.giftType}
                      onChange={(e) => setFormData({ ...formData, giftType: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                    >
                      <option value="Signature Italian Specialty Gift Box">Signature Italian Specialty Gift Box</option>
                      <option value="Italian Caffe & Biscotti Gift Collection">Italian Caffe & Biscotti Gift Collection</option>
                      <option value="Classic Celebration Bomboniere Package">Classic Celebration Bomboniere Package</option>
                      <option value="Hand-Painted Ceramic Keepsake & Specialty Treats">Hand-Painted Ceramic Keepsake & Specialty Treats</option>
                      <option value="Custom Italian Selection (Speak by Phone)">Custom Selection (Discuss options by phone)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3b332b] mb-1">
                      Preferred Date (if not today)
                    </label>
                    <input
                      id="delivery-date-input"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#3b332b] mb-1">
                    Complimentary Handwritten Card Message
                  </label>
                  <textarea
                    id="delivery-note-input"
                    rows={2}
                    value={formData.giftNote}
                    onChange={(e) => setFormData({ ...formData, giftNote: e.target.value })}
                    placeholder="Write the exact text you want inscribed on the enclosure card..."
                    className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#eee3d5]">
                <div className="text-xs text-[#6e5f50]">
                  Need immediate confirmation? Call <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-[#874e2a] underline">(773) 725-9000</a>
                </div>

                <button
                  id="submit-delivery-request-btn"
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#874e2a] hover:bg-[#724021] text-white font-semibold rounded-md shadow-xs transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Delivery Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
