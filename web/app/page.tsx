import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CtaPopup from '../components/CtaPopup';
import JsonLd from '../components/JsonLd';
import IndustryTabs from '../components/IndustryTabs';
import * as I from '../components/Icons';
import { SITE, CLIENTS, CTA, DESCRIPTION } from '../lib/site';
import { FAQ } from '../lib/faq';

export const metadata: Metadata = {
  title: 'AI Receptionist & Automation Agency | RHTECH AI, Dothan AL',
  description:
    'RHTECH AI builds AI voice receptionists, missed-call text-back, and lead follow-up automation for small businesses. Founder-led, based in Dothan, AL.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE.url,
    title: 'RHTECH AI | AI receptionists and automation for small business',
    description: 'AI voice receptionists, missed-call text-back, booking automation, and custom AI software. Based in Dothan, AL.',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'RHTECH AI logo' }],
  },
};

/* ───────────── Schema ───────────── */
const address = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE.url}/#org`,
      name: SITE.name,
      alternateName: SITE.alternateName,
      url: SITE.url,
      logo: SITE.logo,
      image: SITE.logo,
      email: SITE.email,
      telephone: SITE.phoneE164,
      description: DESCRIPTION,
      founder: { '@type': 'Person', name: SITE.founder, jobTitle: 'Founder and CEO' },
      address,
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      areaServed: [
        { '@type': 'City', name: 'Dothan, AL' },
        { '@type': 'AdministrativeArea', name: 'Wiregrass Region, Alabama' },
      ],
      knowsAbout: [
        'AI voice receptionists', 'AI agents', 'Missed-call text-back', 'Appointment booking automation',
        'Lead qualification and follow-up automation', 'Retrieval-augmented generation (RAG)',
        'Knowledge-base systems', 'Custom AI applications', 'SaaS development', 'Workflow automation', 'CRM integration',
      ],
      sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.x],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': `${SITE.url}/#org` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

/* ───────────── Content ───────────── */
const PROBLEMS = [
  {
    bad: ['The 7 PM call goes to voicemail', 'A new customer calls after hours, hears voicemail, and books with the next business on Google.'],
    good: ['An AI voice receptionist answers', 'It answers common questions in a natural voice and books the appointment on your calendar.'],
  },
  {
    bad: ['Your hands are full when the phone rings', 'Your front desk is with a client. Your tech is on a roof. The call rings out.'],
    good: ['Missed-call text-back replies in seconds', 'The caller gets a text right away, so the conversation stays with you, not a competitor.'],
  },
  {
    bad: ['Web and Instagram leads wait for hours', 'By the time someone replies, the lead has already asked three other businesses.'],
    good: ['Lead follow-up runs on its own', 'Every new lead gets a fast reply, a few qualifying questions, and an alert to your team.'],
  },
  {
    bad: ['Answers are buried in docs and old email', 'Staff spend time hunting for policies, pricing, and past decisions.'],
    good: ['A RAG assistant answers from your files', 'It searches your own documents and shows where each answer came from.'],
  },
];

const SERVICES = [
  {
    icon: <I.Mic />, wide: true,
    title: 'AI voice receptionists and AI agents',
    desc: 'An AI receptionist that picks up every call, day or night. It follows the rules you write and hands off to a person when it should.',
    bullets: ['Answers after-hours and overflow calls', 'Books straight into your calendar', 'Transfers urgent calls to your team', 'Sends a summary of every call'],
    best: 'medspas, clinics, and home services that miss calls.',
    flow: ['Incoming call', 'AI answers', 'Books the slot', 'Summary to your team'],
  },
  {
    icon: <I.Message />,
    title: 'Lead follow-up and booking automation',
    desc: 'Fast replies to every lead from calls, forms, and social. Fewer leads go cold while you are busy.',
    bullets: ['Missed-call text-back', 'Replies to web and social leads', 'Asks your qualifying questions', 'Sends confirmations and reminders'],
    best: 'any business that pays for leads.',
  },
  {
    icon: <I.Book />,
    title: 'RAG knowledge bases and custom AI apps',
    desc: 'AI assistants that answer from your documents, policies, and data, with sources your team can check.',
    bullets: ['Built on your files and SOPs', 'Shows the source for each answer', 'Access limited by team or role', 'Works on the web or inside your tools'],
    best: 'professional services firms, startups, and support teams.',
  },
  {
    icon: <I.Layers />, wide: true,
    title: 'SaaS, web platforms, and workflow automation',
    desc: 'Custom software when off-the-shelf tools do not fit, plus automations that stop your team from typing the same data twice.',
    bullets: ['Custom web apps and client portals', 'SaaS MVPs with user accounts and billing', 'CRM integration with your current tools', 'Workflow automation between systems'],
    best: 'startups and growing teams with real workflows to fix.',
    flow: ['Web form', 'Workflow automation', 'CRM', 'Dashboard'],
  },
];

const STEPS = [
  { n: '01', title: 'Understand', we: 'Map how calls, leads, and tasks move through your business today.', you: 'A 15-minute call and a short look at your current tools.', out: 'A list of where leads and hours slip away.' },
  { n: '02', title: 'Plan', we: 'Pick the first workflow and write the scripts, rules, and handoffs.', you: 'Review the plan and approve the quote.', out: 'Written scope, timeline, and price.' },
  { n: '03', title: 'Build', we: 'Build the system and test it against real call and lead scenarios.', you: 'Place test calls and tell us what to change.', out: 'A working system in a test setup.' },
  { n: '04', title: 'Integrate', we: 'Connect it to your phone, calendar, and CRM, then go live.', you: 'Join a short walkthrough with your team.', out: 'A live system and a plain-English guide.' },
];

function IndustryPanel(p: { time: string; scenario: string; automate: string[]; human: string[] }) {
  return (
    <>
      <div className="ind-card scenario">
        <h3><span className="k">Typical scenario</span></h3>
        <span className="time">{p.time}</span>
        <p>{p.scenario}</p>
      </div>
      <div className="ind-card">
        <h3><span className="k">What we automate</span></h3>
        <ul className="ticks">{p.automate.map((a) => <li key={a}><I.Check />{a}</li>)}</ul>
      </div>
      <div className="ind-card human">
        <h3><span className="k">What stays human</span></h3>
        <ul className="ticks">{p.human.map((a) => <li key={a}><I.User />{a}</li>)}</ul>
      </div>
    </>
  );
}

const INDUSTRIES = [
  {
    id: 'medspa', label: 'Medspas & healthcare',
    panel: <IndustryPanel
      time="Tuesday · 7:42 PM"
      scenario="Someone sees your filler post and calls to ask about a consult. The front desk has gone home. The call goes to voicemail, and they book somewhere else by morning."
      automate={['After-hours and overflow calls', 'Consult booking into your calendar', 'Instagram and website lead replies', 'Appointment reminders by text', 'Answers to prep and pricing-range questions']}
      human={['Medical advice and treatment decisions', 'Anything clinical or patient-specific', 'Pricing exceptions and packages', 'Upset or sensitive callers']}
    />,
  },
  {
    id: 'home', label: 'Home services',
    panel: <IndustryPanel
      time="Thursday · 2:15 PM"
      scenario="Your tech is in a crawl space. The phone rings twice and stops. That homeowner calls the next plumber on the list, and that plumber picks up."
      automate={['Missed-call text-back', 'Job intake: address, issue, photos', 'Scheduling into open slots', 'Estimate follow-ups', 'Review requests after the job']}
      human={['Pricing the job', 'On-site diagnosis', 'Emergency judgment calls', 'Customer disputes']}
    />,
  },
  {
    id: 'startups', label: 'Startups & professional services',
    panel: <IndustryPanel
      time="Every day · all day"
      scenario="Your team spends an hour a day searching docs and old threads. Or you need a working MVP before your next investor meeting, without hiring a full engineering team."
      automate={['RAG assistant on your documents', 'MVP and SaaS builds', 'CRM sync and client portals', 'Lead intake and routing', 'Reporting between tools']}
      human={['Product direction', 'Client relationships', 'Final review of AI output', 'Hiring and people decisions']}
    />,
  },
];

const WORRIES = [
  { q: 'You’re a new agency. Why trust you?', a: 'Fair question. Founder Rayed Hussain is on every project, you approve each step, and you get a written quote before any work starts. You see the system working in a test setup before it goes live.' },
  { q: 'We tried automation before and it broke.', a: 'Most automations break because they try to do everything at once. We start with one workflow, test it with you, and only expand once it runs reliably.' },
  { q: 'I’m not technical.', a: 'You don’t need to be. You explain how your business runs. We handle setup, connections, and testing, and give you a plain-English guide.' },
  { q: 'Will this replace my staff?', a: 'No. It handles the repeat calls, texts, and follow-ups so your team can focus on the people in front of them.' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={schema} />
      <Header />

      <main id="main">
        {/* ═════════ HERO ═════════ */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                The AI receptionist that answers every call and follows up <span className="serif">every lead.</span>
              </h1>
              <p className="hero-sub">
                RHTECH AI builds AI voice receptionists, missed-call text-back, and booking automation for small and mid-size businesses. It connects to the phone, calendar, and CRM you already use.
              </p>
              <div className="hero-ctas">
                <a href={SITE.bookingUrl} className="btn btn--primary" data-cta="hero">{CTA.primary} <I.Arrow /></a>
                <a href="#contact" className="btn btn--secondary" data-cta="hero-audit">{CTA.secondary}</a>
              </div>
            </div>

            {/* Illustrative product mock */}
            <div className="mock" aria-label="Example: a missed call turned into a booked appointment" role="img">
              <div className="mock-card">
                <div className="mock-top">
                  <div className="who">
                    <div className="avatar">AI</div>
                    <div><div className="name">AI Receptionist</div><div className="meta">Text thread · new lead</div></div>
                  </div>
                  <span className="live">Live</span>
                </div>
                <div className="mock-body seq">
                  <div className="missed">
                    <div className="ic"><I.PhoneMissed /></div>
                    <div><div className="t1">Missed call · (334) 555-0142</div><div className="t2">7:12 PM · after hours</div></div>
                  </div>
                  <div className="bubble ai">Hi! Sorry we missed your call. Want to book a consult? Reply with a day that works.<small>Sent 7:12 PM</small></div>
                  <div className="bubble me">Thursday after 5?<small>7:14 PM</small></div>
                  <div className="bubble ai">Thursday at 5:30 PM is open. You’re booked. We’ll text a reminder the day before.<small>7:14 PM</small></div>
                  <div className="booked">
                    <div className="ic"><I.Calendar /></div>
                    <div><div className="t1">Consult booked · Thu 5:30 PM</div><div className="t2">Added to calendar and CRM</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ LOGOS ═════════ */}
        <section className="logos" aria-label="Businesses we have built for">
          <p>Businesses we have built for</p>
          <div className="marquee">
            <div className="marquee-track">
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <span className="logo-word" key={i} aria-hidden={i >= CLIENTS.length ? true : undefined}>
                  <i>{c.initials}</i>{c.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════ WHAT IS RHTECH AI (AEO) ═════════ */}
        <section className="section about" id="about">
          <div className="wrap define reveal">
            <div className="define-head">
              <span className="eyebrow">About</span>
              <h2>What is <span className="serif">RHTECH AI?</span></h2>
              <div className="founder-card">
                <div className="founder-avatar" aria-hidden="true">RH</div>
                <div>
                  <div className="founder-name">{SITE.founder}</div>
                  <div className="founder-role">Founder &amp; CEO</div>
                </div>
                <span className="founder-loc"><I.MapPin />Dothan, AL</span>
              </div>
            </div>
            <div className="define-body">
              <p className="define-answer">
                <strong>RHTECH AI is an AI and software development company in Dothan, Alabama, founded by Rayed Hussain.</strong>{' '}
                It builds AI voice receptionists, missed-call text-back, lead follow-up and booking automation, RAG knowledge-base systems, and custom web and SaaS platforms for small and mid-size businesses.
              </p>
              <dl className="facts">
                <div><span className="fact-ic"><I.User /></span><dt>Founder &amp; CEO</dt><dd>{SITE.founder}</dd></div>
                <div><span className="fact-ic"><I.MapPin /></span><dt>Based in</dt><dd>Dothan, AL · Wiregrass Region</dd></div>
                <div><span className="fact-ic"><I.Spark /></span><dt>Stage</dt><dd>Onboarding beta clients</dd></div>
                <div><span className="fact-ic"><I.Layers /></span><dt>Builds</dt><dd>Voice AI · Automation · SaaS</dd></div>
              </dl>
              <div className="process" aria-label="Process">
                <span className="process-label">Process</span>
                <ol>
                  <li><b>1</b>Understand</li>
                  <li><b>2</b>Plan</li>
                  <li><b>3</b>Build</li>
                  <li><b>4</b>Integrate</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ PROBLEM vs SOLUTION ═════════ */}
        <section className="section section--warm" id="problems">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Where leads get lost</span>
              <h2>Most small businesses don’t have a lead problem. They have a <span className="serif">follow-up</span> problem.</h2>
              <p className="lede">Missed calls and slow replies cost more jobs than bad marketing. These are the four gaps we close most often.</p>
            </div>
            <div className="ps-labels"><span>Without automation</span><span>With RHTECH AI</span></div>
            <div className="ps">
              {PROBLEMS.map((r) => (
                <div className="ps-row reveal" key={r.bad[0]}>
                  <div className="ps-cell">
                    <span className="ic ic--bad"><I.X /></span>
                    <div><h3>{r.bad[0]}</h3><p>{r.bad[1]}</p></div>
                  </div>
                  <div className="ps-cell">
                    <span className="ic ic--good"><I.Check /></span>
                    <div><h3>{r.good[0]}</h3><p>{r.good[1]}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════ SERVICES ═════════ */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="sec-head sec-head--center reveal">
              <span className="eyebrow">Services</span>
              <h2>AI automation and custom software services</h2>
              <p className="lede">
                RHTECH AI builds four kinds of systems: AI voice receptionists, lead follow-up and booking automation, RAG knowledge-base assistants, and custom SaaS and web platforms. Each one connects to your existing tools and starts with a single workflow.
              </p>
            </div>
            <div className="bento">
              {SERVICES.map((s) => (
                <article className={`svc reveal${s.wide ? ' svc--wide' : ''}`} key={s.title}>
                  <div className="svc-ic">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="ticks">{s.bullets.map((b) => <li key={b}><I.Check />{b}</li>)}</ul>
                  {'flow' in s && s.flow ? (
                    <div className="flow" aria-label={`Example flow: ${s.flow.join(', then ')}`}>
                      {s.flow.map((f, i) => (
                        <span key={f} style={{ display: 'contents' }}>
                          {i > 0 && <i aria-hidden="true">→</i>}
                          <span className={i === 1 ? 'hi' : undefined}>{f}</span>
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <p className="best"><b>Best for:</b> {s.best}</p>
                </article>
              ))}
            </div>

            <dl className="glossary reveal">
              <div>
                <dt>What is an AI voice receptionist?</dt>
                <dd>An AI voice receptionist is software that answers phone calls in a natural voice, responds to common questions, and books appointments or routes calls to staff.</dd>
              </div>
              <div>
                <dt>What is missed-call text-back?</dt>
                <dd>Missed-call text-back is an automation that sends a text message to anyone whose call goes unanswered, so the conversation continues by text.</dd>
              </div>
              <div>
                <dt>What is RAG?</dt>
                <dd>RAG (retrieval-augmented generation) is a way of building AI that looks up answers in your own documents before it responds, instead of guessing.</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ═════════ INDUSTRIES ═════════ */}
        <section className="section section--soft" id="industries">
          <div className="wrap">
            <div className="sec-head sec-head--center reveal">
              <span className="eyebrow">Industries</span>
              <h2>Built for businesses that run on the phone</h2>
              <p className="lede">AI handles the repeat work. Your people handle the judgment calls. Here is where that line usually falls.</p>
            </div>
            <IndustryTabs tabs={INDUSTRIES} />
            <p className="also">We also work with professional services firms and e-commerce brands.</p>
          </div>
        </section>

        {/* ═════════ HOW IT WORKS ═════════ */}
        <section className="section" id="how-it-works">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">How it works</span>
              <h2>Four steps, from first call to live system</h2>
              <p className="lede">RHTECH AI works in four steps: Understand, Plan, Build, and Integrate. You know what we are doing, what we need from you, and what you get at every step.</p>
            </div>
            <ol className="steps" style={{ listStyle: 'none' }}>
              {STEPS.map((s) => (
                <li className="step reveal" key={s.n}>
                  <div className="step-n"><span>{s.n}</span></div>
                  <h3>{s.title}</h3>
                  <dl>
                    <div><dt>We do</dt><dd>{s.we}</dd></div>
                    <div><dt>You do</dt><dd>{s.you}</dd></div>
                    <div className="deliv"><dt>You get</dt><dd>{s.out}</dd></div>
                  </dl>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═════════ FOUNDER / BETA ═════════ */}
        <section className="section section--warm" id="beta">
          <div className="wrap">
            <div className="founder reveal">
              <div>
                <span className="eyebrow">Beta program</span>
                <div className="founder-id">
                  <div className="founder-av" aria-hidden="true">RH</div>
                  <div><b>{SITE.founder}</b><span>Founder &amp; CEO, RHTECH AI</span></div>
                </div>
                <p className="founder-line">You talk to the person building your system. Not a sales rep, not a ticket queue.</p>
                <p>RHTECH AI is onboarding a small group of beta clients. That keeps the client list short and puts the founder on every project.</p>
                <p className="honest">We don’t have published case studies yet. Instead, we show you exactly how your system will work, in a test setup, before it goes live.</p>
              </div>
              <ul className="perks">
                <li><I.User /><div><b>Direct line to the founder</b><span>Scoping, build, and launch with the same person.</span></div></li>
                <li><I.Compass /><div><b>Start with one workflow</b><span>Prove it works on your calls before adding more.</span></div></li>
                <li><I.Receipt /><div><b>Written quote up front</b><span>Scope, timeline, and price before any work starts.</span></div></li>
                <li><I.Spark /><div><b>Shape what we build next</b><span>Beta clients’ feedback sets our product roadmap.</span></div></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═════════ WORRIES ═════════ */}
        <section className="section" id="concerns">
          <div className="wrap">
            <div className="sec-head sec-head--center reveal">
              <span className="eyebrow">Straight answers</span>
              <h2>What owners ask us first</h2>
            </div>
            <div className="worries">
              {WORRIES.map((w) => (
                <div className="worry reveal" key={w.q}><h3>{w.q}</h3><p>{w.a}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════ PRODUCTS ═════════ */}
        <section className="section section--soft" id="products">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Products</span>
              <h2>Products in development</h2>
              <p className="lede">Alongside client work, RHTECH AI is building its own AI products.</p>
            </div>
            <div className="products">
              <article className="prod prod--dark reveal">
                <span className="prod-tag">In development</span>
                <h3>AI HR &amp; employee analytics</h3>
                <p>An AI tool for owners and HR teams to see staffing and employee data in one place. Join the waitlist for early access updates.</p>
                <form className="waitlist" action="/send_email.php" method="POST">
                  <input type="hidden" name="name" value="AI HR waitlist" />
                  <input type="hidden" name="message" value="Please add me to the AI HR and employee analytics waitlist." />
                  <label className="sr-only" htmlFor="wl-email">Work email</label>
                  <input id="wl-email" type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
                  <button type="submit" className="btn btn--white">Join the waitlist</button>
                </form>
              </article>
              <article className="prod reveal">
                <span className="prod-tag">MVP</span>
                <h3>Brandy, your AI business advisor</h3>
                <p>An AI advisor for brands and small businesses that helps with market research, competitor tracking, and growth planning.</p>
                <ul className="ticks">
                  <li><I.Check />Market opportunity finder</li>
                  <li><I.Check />Competitor intelligence</li>
                  <li><I.Check />Growth strategy drafts</li>
                </ul>
                <a className="btn btn--secondary" href="https://brandyai.lovable.app/app" target="_blank" rel="noopener">Try the Brandy MVP <I.Arrow /></a>
              </article>
            </div>
          </div>
        </section>

        {/* ═════════ FAQ ═════════ */}
        <section className="section" id="faq">
          <div className="wrap">
            <div className="sec-head sec-head--center reveal">
              <span className="eyebrow">FAQ</span>
              <h2>Questions about AI receptionists and automation</h2>
            </div>
            <div className="faq">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}<span className="pm" aria-hidden="true"><I.Plus /></span></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════ CTA BAND ═════════ */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="cta-band reveal">
              <h2>Find out what an AI receptionist would handle for your business.</h2>
              <p>Fifteen minutes with Rayed Hussain. You describe one problem. You leave knowing whether AI is the right fix and what it would take.</p>
              <div className="row">
                <a href={SITE.bookingUrl} className="btn btn--white" data-cta="band">{CTA.primary} <I.Arrow /></a>
                <a href="#contact">or {CTA.secondary.toLowerCase()}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ CONTACT ═════════ */}
        <section className="section section--warm" id="contact">
          <div className="wrap contact">
            <div className="reveal">
              <span className="eyebrow">Contact</span>
              <h2>Get a free missed-lead audit</h2>
              <p className="lede" style={{ marginTop: 16 }}>Tell us how calls and leads reach you today. We’ll reply by email with where leads are slipping through and what to automate first.</p>
              <ul className="contact-list">
                <li><span className="ic"><I.Mail /></span><div><small>Email</small><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div></li>
                <li><span className="ic"><I.Phone /></span><div><small>Phone</small><a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a></div></li>
                <li><span className="ic"><I.MapPin /></span><div><small>Office</small><address>{SITE.address.oneLine}</address></div></li>
              </ul>
            </div>
            <form className="form reveal" action="/send_email.php" method="POST">
              <div className="field">
                <label htmlFor="cf-name">Your name</label>
                <input id="cf-name" type="text" name="name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="cf-email">Work email</label>
                <input id="cf-email" type="email" name="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="cf-phone">Phone <span>(optional)</span></label>
                <input id="cf-phone" type="tel" name="phone" autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="cf-topic">What should we look at?</label>
                <select id="cf-topic" name="topic" defaultValue="Missed-lead audit">
                  <option>Missed-lead audit</option>
                  <option>AI voice receptionist</option>
                  <option>Missed-call text-back</option>
                  <option>Lead follow-up and booking</option>
                  <option>RAG knowledge base / custom AI</option>
                  <option>SaaS or web platform</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="cf-message">How do calls and leads reach you today?</label>
                <textarea id="cf-message" name="message" placeholder="Example: We get about 40 calls a week. After 6 PM they go to voicemail. Web leads land in Gmail." required></textarea>
              </div>
              <label className="consent full">
                <input type="checkbox" name="consent" required />
                <span>
                  I agree to the <a href={SITE.termsUrl} target="_blank" rel="noopener">terms &amp; conditions</a> and to receive messages from RHTECH AI by phone and email. Unsubscribe anytime.
                </span>
              </label>
              <button type="submit" className="btn btn--primary btn--block full">Send my audit request <I.Arrow /></button>
              <p className="form-note full">Prefer to talk? <a href={SITE.bookingUrl}>{CTA.primary}</a>.</p>
            </form>
          </div>
        </section>
      </main>

      <CtaPopup />
      <Footer />
    </>
  );
}
