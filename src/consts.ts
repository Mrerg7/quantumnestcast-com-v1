export const SITE = {
  name: 'quantumnestcast.com',
  title: 'quantumnestcast.com — The Nest Where the Quantum Future Takes Flight | Premium Domain for Sale',
  description:
    'quantumnestcast.com — The premier digital asset for a landmark educational platform, podcast series, or knowledge hub at the heart of the Second Quantum Revolution. A brandable, keyword-rich .com domain now available for acquisition.',
  url: 'https://quantumnestcast.com',
  locale: 'en_US',
  acquisitionEmail: 'sales@desertrich.com',
  updated: '2026-06-23',
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.acquisitionEmail}?subject=${encodeURIComponent(
  `${SITE.name} — Domain Acquisition Inquiry`,
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring quantumnestcast.com. Please share availability, terms, and next steps.\n\n— ',
)}`;
