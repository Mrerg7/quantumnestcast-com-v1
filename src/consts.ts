export const SITE = {
  name: 'quantumnestcast.com',
  title: 'quantumnestcast.com — Premium Quantum Domain for Sale',
  description:
    'Buy quantumnestcast.com — brandable keyword .com for the Second Quantum Revolution. Ideal for quantum education, podcast & media brands. Escrow.com protected.',
  url: 'https://quantumnestcast.com',
  locale: 'en_US',
  acquisitionEmail: 'sales@desertrich.com',
  updated: '2026-09-23',
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.acquisitionEmail}?subject=${encodeURIComponent(
  `${SITE.name} — Domain Acquisition Inquiry`,
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring quantumnestcast.com. Please share availability, terms, and next steps.\n\n— ',
)}`;

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'Is quantumnestcast.com available for sale?',
    a: 'Yes. quantumnestcast.com is available for immediate acquisition. It is a premium, brandable keyword .com positioned for quantum education, media, and thought-leadership platforms.',
  },
  {
    q: 'How much does quantumnestcast.com cost?',
    a: 'Pricing is provided on request to qualified buyers. The asking price reflects the scarcity of brandable quantum .com domains, keyword strength, category positioning, and long-term brand equity. Send an inquiry to receive current terms.',
  },
  {
    q: 'How does the domain transfer work?',
    a: 'The transaction is handled through Escrow.com (or your preferred escrow platform). Funds are secured first, then the domain is transferred via registrar push or ICANN transfer, including full DNS control. Most transfers complete within one to five business days after escrow approval.',
  },
  {
    q: 'Is the purchase protected?',
    a: 'Yes. All acquisitions are escrow-protected. You verify domain ownership and control before releasing funds, and the transfer only completes when the domain is in your account under your management.',
  },
  {
    q: 'What can I build with quantumnestcast.com?',
    a: 'The name works for a quantum computing podcast, an online academy or course platform, a research and industry newsletter, a corporate thought-leadership hub, or an investor intelligence brand covering the Second Quantum Revolution.',
  },
  {
    q: 'How quickly will I get a response to my inquiry?',
    a: 'Inquiries are handled directly and confidentially by a single point of contact. Most serious buyers receive a reply within one business day with availability, pricing, and next steps.',
  },
];
