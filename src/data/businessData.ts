import { BusinessInfo, FAQItem, GiftItem } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'La Bomboniera',
  tagline: 'Authentic Italian Gifts & Same-Day Local Chicago Delivery',
  address: '3429 N Harlem Ave, Chicago, IL 60634',
  street: '3429 N Harlem Ave',
  cityStateZip: 'Chicago, IL 60634',
  neighborhood: 'Montclare / Dunning Corridor on Harlem Avenue',
  phone: '(773) 725-9000',
  phoneRaw: '+17737259000',
  rating: 4.8,
  reviewCount: 16,
  hours: [
    { days: 'Monday – Friday', time: '10:00 AM – 6:00 PM' },
    { days: 'Saturday', time: '10:00 AM – 5:00 PM' },
    { days: 'Sunday', time: 'Special Event & Seasonal Inquiries (Call Ahead)' },
  ],
};

export const ASSET_IMAGES = {
  hero: new URL('../assets/images/hero_italian_gifts_1790048382503.jpg', import.meta.url).href,
  favors: new URL('../assets/images/bomboniere_favors_1790048397350.jpg', import.meta.url).href,
  delivery: new URL('../assets/images/delivery_gift_box_1790048413527.jpg', import.meta.url).href,
};

export const GIFT_CATEGORIES = [
  {
    id: 'all',
    name: 'All Gifts',
    description: 'Browse our full curated selection of Italian-themed gifts and keepsakes.',
  },
  {
    id: 'bomboniere',
    name: 'Italian Bomboniere & Favors',
    description: 'Traditional milestone favors with fine tulle, satin ribbon, and imported sugared almonds.',
  },
  {
    id: 'gift-baskets',
    name: 'Curated Gift Hampers',
    description: 'Artfully assembled Italian gift packages featuring specialty goods, ready for delivery.',
  },
  {
    id: 'ceramics',
    name: 'Ceramics & Home Accents',
    description: 'Italian-style decorative pottery, espresso cups, olive oil decanters, and tabletop pieces.',
  },
  {
    id: 'milestones',
    name: 'Milestone & Religious Keepsakes',
    description: 'Cherished keepsakes for baptisms, first communions, confirmations, weddings, and anniversaries.',
  },
  {
    id: 'gourmet',
    name: 'Specialty Gourmet & Sweets',
    description: 'Italian confections, confetti Sulmona, biscotti assortments, and pantry celebration sets.',
  },
] as const;

export const FEATURED_GIFTS: GiftItem[] = [
  {
    id: 'classic-bomboniere-bundle',
    name: 'Classic Italian Celebration Bomboniere',
    italianName: 'Bomboniere Tradizionali con Confetti',
    category: 'bomboniere',
    description: 'Handcrafted favor ensembles crafted with delicate Italian tulle, fine satin ribbon, decorative keepsake charm, and 5 traditional imported Jordan almonds symbolizing health, wealth, happiness, fertility, and long life.',
    idealFor: ['Weddings', 'Baptisms', 'First Communions', 'Confirmations', 'Milestone Anniversaries'],
    features: [
      'Authentic Italian 5-almond confetti tradition',
      'Personalized commemorative tag with name & date',
      'Custom ribbon color matching your celebration',
      'Available in single presentation boxes or party quantities',
    ],
    presentation: 'Individually hand-tied with imported satin ribbon and parchment favor tag.',
    image: ASSET_IMAGES.favors,
    sameDayEligible: true,
  },
  {
    id: 'chicago-same-day-gift-box',
    name: 'Signature Italian Specialty Gift Box',
    italianName: 'Scatola Regalo Signature',
    category: 'gift-baskets',
    description: 'Our most popular gesture for birthdays, congratulations, housewarmings, or get-well wishes. Includes an artful blend of Italian sweets, decorative keepsake, espresso treats, and fine ribbon packaging.',
    idealFor: ['Birthdays', 'Thank You', 'Housewarming', 'Corporate Appreciation', 'Same-Day Delivery'],
    features: [
      'Available for local Chicago same-day delivery (call early)',
      'Handwritten complimentary gift card included',
      'Curated mix of Italian confections and keepsake item',
      'Pristine protective packaging for safe transit',
    ],
    presentation: 'Sturdy boutique gift box lined with crisp tissue and finished with a wide double-faced satin bow.',
    image: ASSET_IMAGES.delivery,
    sameDayEligible: true,
  },
  {
    id: 'artisan-deruta-style-ceramics',
    name: 'Italian-Style Hand-Painted Ceramic Keepsake',
    italianName: 'Ceramica Artistica Tradizionale',
    category: 'ceramics',
    description: 'Vibrant, hand-painted ceramic decorative dish and olive oil vessel inspired by Umbrian and Tuscan ceramic heritage. An enduring gift that brings Italian warmth to any kitchen or sideboard.',
    idealFor: ['Weddings', 'Hostess Gifts', 'Anniversaries', 'New Home Celebration'],
    features: [
      'Authentic Mediterranean color palette and glazed finish',
      'Food-safe decorative design',
      'Carefully bubble-wrapped and boxed for gift delivery',
      'Pairs beautifully with specialty olive oils or linen tea towels',
    ],
    presentation: 'Presented in a signature kraft gift box with natural twine and Italian crest seal.',
    image: ASSET_IMAGES.hero,
    sameDayEligible: true,
  },
  {
    id: 'sacred-milestone-cross-frame',
    name: 'Silver-Plated Milestone Keepsake Frame',
    italianName: 'Cornice Portafoto per Sacramenti',
    category: 'milestones',
    description: 'A refined keepsake frame designed to commemorate life sacred milestones—baptism, communion, or wedding ceremony. Designed to preserve timeless memories with classic Italian elegance.',
    idealFor: ['Baptism', 'First Holy Communion', 'Confirmation', 'Godparent Gifts'],
    features: [
      'Tarnish-resistant silver-plated border with subtle relief pattern',
      'Velvet backing with sturdy dual-orientation easel',
      'Complimentary gift wrapping upon request',
      'Can be paired with matching commemorative favor pouches',
    ],
    presentation: 'Packaged in a fitted hardboard keepsake box suitable for lifetime preservation.',
    sameDayEligible: true,
  },
  {
    id: 'confetti-crispo-collection',
    name: 'Imported Confetti & Confectionery Selection',
    italianName: 'Selezione di Confetti Pregiati',
    category: 'gourmet',
    description: 'Premium Italian sugared almonds and gourmet filled confetti in delicate flavors (toasted almond, chocolate gianduia, lemon, and pistachio). Made using traditional confectioners techniques.',
    idealFor: ['Party Favors', 'Holiday Entertaining', 'Sweet Tables', 'Italian Gift Baskets'],
    features: [
      'Crisp thin sugar shell with rich Californian or Sicilian almond centers',
      'Naturally gluten-free tradition',
      'Available in decorative canisters or bulk for party assembly',
      'Assorted pastel shades and classic wedding white',
    ],
    presentation: 'Available in decorative Italian tin canisters or hand-sealed favor sachets.',
    sameDayEligible: true,
  },
  {
    id: 'espresso-lovers-tasting-basket',
    name: 'Italian Caffe & Biscotti Gift Collection',
    italianName: 'Cesto Regalo Espresso & Tradizione',
    category: 'gift-baskets',
    description: 'The definitive Italian morning ritual assembled into a distinguished gift basket: ceramic espresso demitasse set, artisan cantucci biscotti, and authentic Italian espresso blend.',
    idealFor: ['Client Appreciation', 'Retirement', 'Father’s Day', 'Holiday Gifting'],
    features: [
      'Two heavy-gauge ceramic espresso cups with matching saucers',
      'Artisanal almond cantucci baked to pair with coffee or vin santo',
      'Premium Italian-roast vacuum-sealed espresso',
      'Hand-assembled in a woven presentation tray',
    ],
    presentation: 'Arranged in an open wicker tray wrapped in clear cellophane with rustic grosgrain ribbon.',
    sameDayEligible: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    category: 'delivery',
    question: 'How does same-day delivery work in Chicago?',
    answer: 'For same-day local Chicago delivery, please call our shop at (773) 725-9000 by early afternoon. We will confirm in-stock gift items, take your recipient’s address, write your personal message on a complimentary card, and dispatch our local courier for prompt doorstep delivery.',
  },
  {
    category: 'delivery',
    question: 'What areas in Chicago and surrounding suburbs do you deliver to?',
    answer: 'We provide local delivery throughout Chicago neighborhoods—including our immediate area along Harlem Avenue, Montclare, Dunning, Elmwood Park, Norwood Park, Portage Park, Belmont Cragin—as well as broader Chicagoland addresses. Call us to confirm specific delivery timing for your zip code.',
  },
  {
    category: 'favors',
    question: 'What is a "Bomboniera" and why are there 5 almonds?',
    answer: 'In Italian tradition, a bomboniera is a heartfelt gift given by hosts to guests at major life milestones (weddings, baptisms, first communions, confirmations). The 5 sugared almonds (confetti) represent five essential blessings for life: Health (Salute), Wealth (Ricchezza), Happiness (Felicità), Fertility/Fruitfulness (Fertilità), and Long Life (Lunga Vita).',
  },
  {
    category: 'favors',
    question: 'Can you prepare custom favors for upcoming weddings, baptisms, or communions?',
    answer: 'Yes! We specialize in custom favors tailored to your color palette, ribbon choice, and commemorative tags. We recommend contacting us or visiting the shop in advance for larger events so we can ensure everything is assembled with care and ready for your date.',
  },
  {
    category: 'general',
    question: 'Can I call the shop to have a custom gift assembled over the phone?',
    answer: 'Absolutely. Many of our customers call (773) 725-9000 directly. Simply tell us the occasion, your budget, and the recipient’s tastes. We will personally guide you through our current inventory and prepare a beautiful gift package.',
  },
  {
    category: 'visiting',
    question: 'Where is La Bomboniera located, and is parking available?',
    answer: 'We are located at 3429 N Harlem Ave, Chicago, IL 60634 (between Addison and Belmont along the Harlem Avenue corridor). Convenient street parking is readily available right along Harlem Avenue and adjacent neighborhood streets.',
  },
  {
    category: 'general',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover) as well as contactless mobile payments and cash in store.',
  },
];

export const GOOGLE_REVIEWS_SUMMARY = {
  rating: 4.8,
  reviewCount: 16,
  breakdown: [
    { stars: 5, percentage: 88, count: 14 },
    { stars: 4, percentage: 12, count: 2 },
    { stars: 3, percentage: 0, count: 0 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 },
  ],
  verifiedThemes: [
    {
      title: 'Curated Italian Heritage',
      description: 'Customers frequently praise our genuine collection of Italian celebration favors, imported confectionery, and traditional keepsakes that cannot be found in conventional department stores.',
    },
    {
      title: 'Attentive, Friendly Assistance',
      description: 'Shoppers consistently highlight the warm, unhurried, and personal attention provided when helping choose gifts or coordinating event favors.',
    },
    {
      title: 'Reliable Local Delivery Care',
      description: 'Clients appreciate the punctuality and meticulous presentation of gift packages delivered directly to Chicago doorsteps, offices, and celebration venues.',
    },
    {
      title: 'Meticulous Gift Wrapping & Presentation',
      description: 'From ribbon selection to delicate tulle wrapping, visitors note the careful craftsmanship that makes every item feel special.',
    },
  ],
};
