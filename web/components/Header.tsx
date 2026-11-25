import { SITE, CTA } from '../lib/site';
import { Arrow, Menu } from './Icons';

const LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#industries', label: 'Industries' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/service-area', label: 'Service area' },
];

export default function Header() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="announce">
        <span className="dot" aria-hidden="true"></span>
        Now onboarding beta clients.{' '}
        <a href={SITE.bookingUrl}>{CTA.primary} →</a>
      </div>
      <header className="site-header" id="site-header">
        <div className="wrap nav">
          <a href="/" className="brand" aria-label={`${SITE.name} home`}>
            <img src="/mark.png" alt="" width={30} height={30} />
            <span>RHTECH <b>AI</b></span>
          </a>
          <nav aria-label="Main">
            <ul className="nav-links">
              {LINKS.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </nav>
          <div className="nav-cta">
            <a href="/#contact" className="btn btn--ghost btn--sm">Contact</a>
            <a href={SITE.bookingUrl} className="btn btn--primary btn--sm" data-cta="nav">
              {CTA.primary} <Arrow />
            </a>
          </div>
          <button type="button" className="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" id="menu-btn">
            <Menu />
          </button>
        </div>
        <div className="mobile-menu" id="mobile-menu">
          <div className="wrap">
            <ul>
              {LINKS.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
              <li><a href="/#contact">Contact</a></li>
            </ul>
            <a href={SITE.bookingUrl} className="btn btn--primary btn--block">{CTA.primary} <Arrow /></a>
          </div>
        </div>
      </header>
    </>
  );
}
