export type PageId = 'home' | 'about' | 'gifts' | 'delivery' | 'reviews' | 'faq' | 'contact';

export interface GiftItem {
  id: string;
  name: string;
  italianName?: string;
  category: 'bomboniere' | 'ceramics' | 'gourmet' | 'milestones' | 'tableware' | 'gift-baskets';
  description: string;
  idealFor: string[];
  features: string[];
  presentation: string;
  image?: string;
  sameDayEligible: boolean;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: string;
  street: string;
  cityStateZip: string;
  neighborhood: string;
  phone: string;
  phoneRaw: string;
  rating: number;
  reviewCount: number;
  hours: {
    days: string;
    time: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'delivery' | 'favors' | 'visiting';
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  inquiryType: 'general' | 'availability' | 'same-day-delivery' | 'favors' | 'consultation';
  message: string;
  needDate?: string;
}

export interface DeliveryFormData {
  senderName: string;
  senderPhone: string;
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
  preferredDate: string;
  timePreference: 'morning' | 'afternoon' | 'anytime';
  giftType: string;
  giftNote: string;
  isSameDay: boolean;
}
