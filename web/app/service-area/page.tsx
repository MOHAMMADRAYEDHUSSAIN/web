import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CtaPopup from '../../components/CtaPopup';
import JsonLd from '../../components/JsonLd';
import * as I from '../../components/Icons';
import { SITE, SERVICE_AREA, CTA, DESCRIPTION } from '../../lib/site';

// Served at /service-area. vercel.json redirects the old /service-area.html URL here.
export const metadata: Metadata = {
  title: 'AI & Software Company in Dothan, AL | RHTECH AI Service Area',
  description:
    'RHTECH AI is an AI and software development company in Dothan, AL serving the Wiregrass Region, including Enterprise, Ozark, Troy, and Headland.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/service-area' },
  other: {
    'geo.region': 'US-AL',
    'geo.placename': 'Dothan, Alabama',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

const localSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#org`,
      name: SITE.name,
      alternateName: SITE.alternateName,
      url: SITE.url,
      description: DESCRIPTION,
      telephone: SITE.phoneE164,
      email: SITE.email,
      image: SITE.logo,
      founder: { '@type': 'Person', name: SITE.founder, jobTitle: 'Founder and CEO' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      areaServed: [
        ...SERVICE_AREA.map((name) => ({ '@type': 'City', name })),
        { '@type': 'AdministrativeArea', name: 'Wiregrass Region, Alabama' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Service area', item: `${SITE.url}/service-area` },
      ],
    },
  ],
};

export default function ServiceAreaPage() {
  return (
    <>
      <JsonLd data={localSchema} />
      <Header />
      <main id="main">
        <section className="hero area-hero">
          <div className="wrap">
            <span className="eyebrow">Service area</span>
            <h1>An AI and software company in <span className="serif" style={{ color: 'var(--brand)' }}>Dothan, Alabama</span></h1>
            <p className="lede" style={{ margin: '0 auto' }}>
              RHTECH AI is based at {SITE.address.oneLine}. We build AI receptionists, follow-up automation, and custom software for businesses across the Wiregrass Region, in person and remotely.
            </p>
            <ul className="towns" aria-label="Towns we serve">
              {[...SERVICE_AREA, 'Wiregrass Region'].map((c) => <li key={c}>{c}</li>)}
            </ul>
            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
              <a href={SITE.bookingUrl} className="btn btn--primary">{CTA.primary} <I.Arrow /></a>
              <a href="/#contact" className="btn btn--secondary">{CTA.secondary}</a>
            </div>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="map">
              <iframe
                src="https://www.google.com/maps?q=212+W+Troy+St+STE+B,+Dothan,+AL+36303&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${SITE.name} office: ${SITE.address.oneLine}`}
              />
            </div>
          </div>
        </section>
      </main>
      <CtaPopup />
      <Footer />
    </>
  );
}
