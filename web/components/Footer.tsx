import { SITE, CTA, DESCRIPTION } from '../lib/site';
import { Arrow, Instagram, Facebook, XLogo } from './Icons';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-about">
              <a href="/" className="brand" aria-label={`${SITE.name} home`}>
                <img src="/mark.png" alt="" width={30} height={30} />
                <span>RHTECH <b>AI</b></span>
              </a>
              <p>{DESCRIPTION}</p>
              <address>
                {SITE.address.oneLine}<br />
                <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </address>
              <div className="socials">
                <a href={SITE.social.instagram} target="_blank" rel="noopener" aria-label="RHTECH AI on Instagram"><Instagram /></a>
                <a href={SITE.social.facebook} target="_blank" rel="noopener" aria-label="RHTECH AI on Facebook"><Facebook /></a>
                <a href={SITE.social.x} target="_blank" rel="noopener" aria-label="RHTECH AI on X"><XLogo /></a>
              </div>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="/#services">AI voice receptionists</a></li>
                <li><a href="/#services">Missed-call text-back</a></li>
                <li><a href="/#services">Lead follow-up automation</a></li>
                <li><a href="/#services">RAG knowledge-base systems</a></li>
                <li><a href="/#services">SaaS and web platforms</a></li>
              </ul>
            </div>
            <div>
              <h4>Industries</h4>
              <ul>
                <li><a href="/#industries">Medspas and aesthetic clinics</a></li>
                <li><a href="/#industries">Healthcare practices</a></li>
                <li><a href="/#industries">Home services</a></li>
                <li><a href="/#industries">Professional services</a></li>
                <li><a href="/#industries">Startups and e-commerce</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="/#how-it-works">How it works</a></li>
                <li><a href="/#faq">FAQ</a></li>
                <li><a href="/service-area">Service area: Dothan, AL</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href={SITE.bookingUrl}>{CTA.primary}</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} {SITE.name}. Founded by {SITE.founder}.</span>
            <a href={SITE.termsUrl} target="_blank" rel="noopener">Terms &amp; conditions</a>
          </div>
        </div>
      </footer>
      <div className="sticky-cta" id="sticky-cta">
        <a href={SITE.bookingUrl} className="btn btn--primary btn--block" data-cta="sticky">{CTA.primary} <Arrow /></a>
      </div>
    </>
  );
}
