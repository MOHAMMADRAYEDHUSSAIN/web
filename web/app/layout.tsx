import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './fonts.css';
import './globals.css';
import { SITE } from '../lib/site';
import SiteEffects from '../components/SiteEffects';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: 'RHTECH AI | AI receptionists and automation, Dothan AL',
  openGraph: { siteName: SITE.name, locale: 'en_US' },
  appleWebApp: { title: SITE.name },
  icons: {
    icon: [{ url: '/favicon-48.png', sizes: '48x48', type: 'image/png' }, { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#ffffff' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts are self-hosted from public/fonts (see app/fonts.css). */}
        <link rel="preload" href="/fonts/inter-normal-400-700.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        {children}
        <SiteEffects />
        {/* Chatbase chatbot (unchanged from the original site) */}
        <Script id="chatbase-init" strategy="lazyOnload">{`
(function () {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) window.chatbase.q = [];
      window.chatbase.q.push(args);
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") return target.q;
        return (...args) => target(prop, ...args);
      }
    });
  }
  const script = document.createElement("script");
  script.src = "https://www.chatbase.co/embed.min.js";
  script.id = "zTIAX16oaNWBoxhmbsug9";
  script.domain = "www.chatbase.co";
  document.body.appendChild(script);
})();
        `}</Script>
      </body>
    </html>
  );
}
