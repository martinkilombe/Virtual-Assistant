import type { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'
import Eyebrow from '@/components/ui/Eyebrow'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Contact | Instant VA',
  description:
    "Tell us what you need. We'll match you with a vetted assistant within one business day.",
}

const TRUST_ITEMS = [
  { num: '01', text: 'Matched to a vetted assistant within one business day' },
  { num: '02', text: 'A dedicated success manager oversees every handoff' },
  { num: '03', text: 'Scale hours up or down. No long contracts, no lock-in.' },
]

const REACH = [
  {
    label: 'Email',
    value: 'hello@instantva.co',
    note: 'Prefer to write directly? We read every message.',
    href: 'mailto:hello@instantva.co',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 8l9 5.5 9-5.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: '@instantva',
    note: 'Updates, delegation tips, and behind-the-scenes.',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Help Center',
    value: 'Common questions',
    note: 'Billing, matching, onboarding, and more.',
    href: '/help-center',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth={2} />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <NavBar />

      <main>
        {/* ── Hero ── */}
        <section className="iva-legal-hero iva-contact-hero">
          <div className="iva-container iva-head">
            <Eyebrow>Contact</Eyebrow>
            <h1>Let&apos;s talk.</h1>
            <p className="iva-lead">
              Tell us what&apos;s taking up your week. We&apos;ll match you with
              the right assistant, usually within a day.
            </p>
            <div className="iva-contact-hero__meta">
              <span className="iva-contact-hero__dot" aria-hidden="true" />
              <span>Reply within 1 business day</span>
              <span className="iva-contact-hero__sep" aria-hidden="true" />
              <span>Real people, no bots</span>
              <span className="iva-contact-hero__sep" aria-hidden="true" />
              <span>No obligation to commit</span>
            </div>
          </div>
        </section>

        {/* ── Contact form ── */}
        <RevealWrapper>
          <ContactCTA
            eyebrow="Get started"
            title={<>Real work, <em>reliably</em> done.</>}
            description="Fill in the form and someone on our team reads it personally. We're in touch within one business day, usually within a few hours."
            trustItems={TRUST_ITEMS}
          />
        </RevealWrapper>

        {/* ── Other channels ── */}
        <RevealWrapper>
          <section className="iva-section iva-section--paper iva-contact-reach">
            <div className="iva-container">
              <div className="iva-contact-reach__head">
                <Eyebrow>Other ways</Eyebrow>
                <h2 className="iva-serif">Every message gets a reply.</h2>
                <p className="iva-lead">
                  The form is the fastest path, but we&apos;re reachable elsewhere too.
                </p>
              </div>

              <div className="iva-contact-reach__rows">
                {REACH.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="iva-contact-reach__row"
                  >
                    <span className="iva-contact-reach__label">
                      <span className="iva-contact-reach__icon">{item.icon}</span>
                      {item.label}
                    </span>
                    <span className="iva-contact-reach__value">{item.value}</span>
                    <span className="iva-contact-reach__note">{item.note}</span>
                    <span className="iva-contact-reach__arrow" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </RevealWrapper>
      </main>

      <Footer />
    </>
  )
}
