'use client';

// Timed CTA popup. Opens once per browser session after `delay` ms, unless the
// visitor already clicked a booking CTA or has a modal/menu open.
import { useEffect, useRef } from 'react';
import { SITE, CTA } from '../lib/site';
import { Arrow, CheckCircle, X } from './Icons';

const KEY = 'rh_cta_popup_seen';

const store = {
  get: () => { try { return sessionStorage.getItem(KEY); } catch { return null; } },
  set: () => { try { sessionStorage.setItem(KEY, '1'); } catch { /* storage blocked */ } },
};

export default function CtaPopup({ delay = 30000 }: { delay?: number }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg || typeof dlg.showModal !== 'function' || store.get()) return;

    // Clicking any booking link counts as "converted" — don't interrupt them later.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a');
      if (a && a.href.startsWith(SITE.bookingUrl) && !dlg.contains(a)) store.set();
    };
    document.addEventListener('click', onClick);

    const timer = window.setTimeout(() => {
      if (store.get() || document.querySelector('dialog[open]')) return;
      // Don't pop over someone typing into the contact form.
      const active = document.activeElement;
      if (active && ['INPUT', 'TEXTAREA', 'SELECT'].includes(active.tagName)) return;
      store.set();
      dlg.showModal();
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.('event', 'popup_view', { popup: 'cta_30s' });
    }, delay);

    // Click on the backdrop closes it.
    const onBackdrop = (e: MouseEvent) => { if (e.target === dlg) dlg.close(); };
    dlg.addEventListener('click', onBackdrop);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('click', onClick);
      dlg.removeEventListener('click', onBackdrop);
    };
  }, [delay]);

  const close = () => ref.current?.close();

  return (
    <dialog ref={ref} className="popup" aria-labelledby="popup-title" aria-describedby="popup-desc">
      <div className="popup-inner">
        <button type="button" className="popup-close" onClick={close} aria-label="Close">
          <X />
        </button>
        <span className="eyebrow">Free 15-minute call</span>
        <h2 id="popup-title">How many calls did you miss this week?</h2>
        <p id="popup-desc">
          Talk to Rayed Hussain, founder of RHTECH AI. Describe one problem and leave knowing whether an AI receptionist or follow-up automation is the right fix.
        </p>
        <ul className="popup-points">
          <li><CheckCircle />No pitch deck, no pressure</li>
          <li><CheckCircle />Written quote before any work starts</li>
        </ul>
        <div className="popup-actions">
          <a href={SITE.bookingUrl} className="btn btn--primary btn--block" data-cta="popup" onClick={close}>
            {CTA.primary} <Arrow />
          </a>
          <a href="/#contact" className="btn btn--secondary btn--block" data-cta="popup-audit" onClick={close}>
            {CTA.secondary}
          </a>
        </div>
        <button type="button" className="popup-dismiss" onClick={close}>No thanks, I’ll keep browsing</button>
      </div>
    </dialog>
  );
}
