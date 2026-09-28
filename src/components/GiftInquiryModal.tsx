import React, { useState } from 'react';
import { X, Phone, Calendar, CheckCircle, Package, Send, Sparkles } from 'lucide-react';
import { GiftItem } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

interface GiftInquiryModalProps {
  gift: GiftItem | null;
  onClose: () => void;
}

export const GiftInquiryModal: React.FC<GiftInquiryModalProps> = ({ gift, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  if (!gift) return null;

  const validate = () => {
    const errs: { name?: string; phone?: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEventDate('');
    setQuantity('1');
    setNotes('');
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
    >
      <div className="relative bg-[#faf7f2] w-full max-w-2xl rounded-xl shadow-2xl border border-[#d6c4aa] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#24201c] text-[#f7f2ea] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-[#c29b68]" />
            <div>
              <span className="text-xs uppercase tracking-wider text-[#c29b68] font-semibold">
                Gift Inquiry & Phone Order
              </span>
              <h3 id="inquiry-title" className="font-serif text-lg sm:text-xl font-semibold text-white">
                {gift.name}
              </h3>
            </div>
          </div>
          <button
            id="close-inquiry-modal-btn"
            onClick={resetForm}
            className="p-1.5 rounded-md text-[#b8ab9b] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#eaf4ec] text-[#2c7a3f] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#231e1a]">
                Inquiry Received!
              </h4>
              <p className="text-sm text-[#5c5043] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. We have logged your inquiry for <strong>{gift.name}</strong>. Our Harlem Avenue shop staff will follow up with you by phone at <strong>{phone}</strong> to confirm product availability and delivery or pickup details.
              </p>

              <div className="p-4 bg-[#f3ebe0] rounded-lg border border-[#dfd2bf] max-w-md mx-auto text-left text-xs text-[#524538] space-y-2">
                <div className="font-semibold text-sm text-[#231e1a] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#874e2a]" />
                  <span>Need this immediately?</span>
                </div>
                <p>
                  Call us right now at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-[#874e2a] underline">{BUSINESS_INFO.phone}</a>. We can take payment over the phone and prep same-day Chicago delivery.
                </p>
              </div>

              <div className="pt-2">
                <button
                  id="inquiry-submitted-close-btn"
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-[#874e2a] hover:bg-[#724021] text-white text-sm font-semibold rounded-md shadow-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Product summary card */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 bg-[#f3ebe0] rounded-lg border border-[#e2d5c3]">
                {gift.image && (
                  <img
                    src={gift.image}
                    alt={gift.name}
                    referrerPolicy="no-referrer"
                    className="w-full sm:w-28 h-28 object-cover rounded-md border border-[#d6c5af] shrink-0"
                  />
                )}
                <div className="flex-1 space-y-1 text-sm">
                  {gift.italianName && (
                    <span className="text-xs italic text-[#874e2a] font-serif block">
                      {gift.italianName}
                    </span>
                  )}
                  <h4 className="font-serif text-lg font-bold text-[#231e1a]">
                    {gift.name}
                  </h4>
                  <p className="text-xs text-[#5c5043] leading-relaxed line-clamp-2">
                    {gift.description}
                  </p>
                  <p className="text-xs text-[#874e2a] font-medium pt-1">
                    ✓ Hand-tied gift presentation & optional custom commemorative tag
                  </p>
                </div>
              </div>

              {/* Call-First banner */}
              <div className="p-3.5 bg-[#fcfaf7] border border-[#d6c4aa] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-[#231e1a] block">
                    Fastest Service: Order or Inquire by Phone
                  </span>
                  <span className="text-[#695d4f]">
                    Speak with our shop staff for immediate stock verification and same-day delivery.
                  </span>
                </div>
                <a
                  id="inquiry-modal-call-btn"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-[#874e2a] hover:bg-[#724021] text-white font-semibold rounded-md shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call (773) 725-9000</span>
                </a>
              </div>

              {/* Or submit online form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                <div className="border-t border-[#e2d5c3] pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#736555] block mb-3">
                    Or submit an inquiry message
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#3b332b] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="inquiry-input-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Maria Rossi"
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
                        id="inquiry-input-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    <div>
                      <label className="block text-xs font-medium text-[#3b332b] mb-1">
                        Date Needed / Delivery Date
                      </label>
                      <input
                        id="inquiry-input-date"
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#3b332b] mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        id="inquiry-input-quantity"
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="1, or event quantity (e.g. 50)"
                        className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="block text-xs font-medium text-[#3b332b] mb-1">
                      Notes, Delivery Address, or Custom Ribbon Requests
                    </label>
                    <textarea
                      id="inquiry-input-notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Mention recipient's address for delivery, ribbon color preferences, or occasion details..."
                      className="w-full px-3 py-2 text-sm bg-white border border-[#d6c5af] rounded-md focus:outline-none focus:ring-2 focus:ring-[#874e2a]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-xs font-medium text-[#5c5043] hover:text-[#231e1a] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#874e2a] hover:bg-[#724021] rounded-md shadow-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
