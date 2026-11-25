// Single source of truth for business facts used across pages and JSON-LD.
// Keep the wording here identical everywhere so search and AI engines learn one
// stable description of the company.

export const SITE = {
  name: 'RHTECH AI',
  alternateName: 'RhtechAI',
  url: 'https://rhtechai.com',
  logo: 'https://rhtechai.com/icon-512.png',
  email: 'rayed@rhtechai.com',
  phoneDisplay: '+1 431-304-0685',
  phoneE164: '+1-431-304-0685',
  bookingUrl: 'https://calendly.com/rayedhussain18/30min',
  founder: 'Rayed Hussain',
  address: {
    street: '212 W. Troy St. STE B',
    city: 'Dothan',
    region: 'AL',
    postalCode: '36303',
    country: 'US',
    oneLine: '212 W. Troy St. STE B, Dothan, AL 36303',
  },
  geo: { lat: 31.2232, lng: -85.3905 },
  termsUrl:
    'https://docs.google.com/document/d/13Vsc61Pj-pclZxq3OXdxMDfdQZTCn7g3Z_UkQtaDpIU/edit?usp=sharing',
  social: {
    instagram: 'https://www.instagram.com/rhtech._.ai/',
    facebook: 'https://www.facebook.com/profile.php?id=61584087428862',
    x: 'https://x.com/specialOPS29816',
    google: 'https://www.google.com/search?q=rhtech+AI',
  },
} as const;

// [VERIFY] Past clients — confirm each has agreed to be named publicly
// and confirm spelling ("NovaCore" vs "NocaCore" appeared in the old site).
export const CLIENTS: { initials: string; name: string; icon: string }[] = [
  { initials: 'SO', name: 'SpecialOPS AI', icon: 'ic-1' },
  { initials: 'FL', name: 'Freeway Lifecoaching', icon: 'ic-1' },
  { initials: 'TB', name: 'Tapp Building Solution', icon: 'ic-2' },
  { initials: 'AOS', name: 'AOS Engineering', icon: 'ic-3' },
  { initials: 'BB', name: 'Brand Belleza', icon: 'ic-4' },
  { initials: 'NA', name: 'NovaCore Automations', icon: 'ic-5' },
  { initials: 'VC', name: 'Dr. Vohra Clinics', icon: 'ic-6' },
];

export const SERVICE_AREA = ['Dothan, AL', 'Enterprise, AL', 'Ozark, AL', 'Troy, AL', 'Headland, AL'];

// Canonical one-sentence description. Use word-for-word on site, LinkedIn, GBP, directories.
export const DESCRIPTION =
  'RHTECH AI is an AI and software development company in Dothan, Alabama, founded by Rayed Hussain. RHTECH AI builds AI voice receptionists, missed-call text-back, lead follow-up and booking automation, RAG knowledge-base systems, and custom web and SaaS platforms for small and mid-size businesses.';

// [VERIFY] Calendly event is 30 min (/30min) while the CTA says 15 minutes.
export const CTA = {
  primary: 'Book a 15-minute call',
  secondary: 'Get a free missed-lead audit',
} as const;
