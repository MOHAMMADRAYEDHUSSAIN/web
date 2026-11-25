'use client';

// Progressive enhancement only — all content is in the static HTML.
import { useEffect } from 'react';

export default function SiteEffects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');
    const off: Array<() => void> = [];

    // Header border + sticky mobile CTA after the hero
    const header = document.getElementById('site-header');
    const sticky = document.getElementById('sticky-cta');
    const onScroll = () => {
      const y = window.scrollY;
      header?.classList.toggle('is-scrolled', y > 8);
      const nearBottom = window.innerHeight + y > document.body.scrollHeight - 420;
      sticky?.classList.toggle('is-visible', y > 560 && !nearBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    off.push(() => window.removeEventListener('scroll', onScroll));

    // Mobile menu
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      const set = (open: boolean) => {
        menu.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      };
      const toggle = () => set(!menu.classList.contains('is-open'));
      const close = () => set(false);
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
      btn.addEventListener('click', toggle);
      menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
      document.addEventListener('keydown', onKey);
      off.push(() => { btn.removeEventListener('click', toggle); document.removeEventListener('keydown', onKey); });
    }

    // Reveal on scroll
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    off.push(() => io.disconnect());

    return () => off.forEach((f) => f());
  }, []);
  return null;
}
