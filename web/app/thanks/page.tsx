import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as I from '../../components/Icons';
import { SITE, CTA } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Thanks, we got your message | RHTECH AI',
  robots: { index: false, follow: true },
};

export default function Thanks() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="wrap" style={{ maxWidth: 640, textAlign: 'center' }}>
          <div className="svc-ic" style={{ margin: '0 auto 24px', background: '#ecfdf5', color: '#047857' }}><I.CheckCircle /></div>
          <h1 style={{ fontSize: 'var(--t-3xl)', marginBottom: 16 }}>Got it. Your request is in.</h1>
          <p className="lede" style={{ margin: '0 auto 32px' }}>
            Rayed Hussain will read it personally and reply by email. If you’d rather talk it through now, grab a time below.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={SITE.bookingUrl} className="btn btn--primary">{CTA.primary} <I.Arrow /></a>
            <a href="/" className="btn btn--secondary">Back to the homepage</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
